<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right">
            <button class="btn btn-primary mt-4" @click="openModal(true)">建立新優惠券</button>
        </div>
        <table class="table mt-4">
            <thead>
                <th width="120">名稱</th>
                <th width="120">優惠碼</th>
                <th width="100">折扣(%)</th>
                <th width="100">到期日</th>
                <th width="100" class="text-center">啟用</th>
                <th width="100" class="text-center">編輯</th>
            </thead>
            <tbody>
                <tr v-for="(item) in coupons" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.percent }}%</td>
                    <td>{{ item.due_date | date }}</td>
                    <td class="text-center">
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td class="text-center">
                        <button class="btn btn-outline-primary btn-sm" @click="openModal(false , item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分頁 -->
        <Pagination :pagination="pagination" @emitpage="getCoupons"></Pagination>
        <!-- 新增/編輯 Modal -->
        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增優惠券</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="title">優惠券名稱</label>
                                    <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入優惠券名稱">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="code">優惠碼</label>
                                    <input type="text" class="form-control" id="code" v-model="tempCoupon.code" placeholder="請輸入優惠碼">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="dueDate">到期日</label>
                                        <input type="text" class="form-control" id="dueDate" v-model="tempCoupon.due_date" placeholder="請輸入到期日">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="percent">折扣百分比</label>
                                        <input type="unit" class="form-control" id="percent" v-model="tempCoupon.percent" placeholder="請輸入折扣">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
                                        <!-- 0為未上架、1為上架，故此處要調整為:true-value="1" :false-value="0" -->
                                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateCoupons">確認</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 刪除Modal -->
        <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>刪除優惠券</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="deleteCoupons">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';  // 此處要用jquery，所以必須載入
import Pagination from '@/views/admin/Pagination';

export default {
    data() {
        return {
            coupons: [],
            tempCoupon: {},  // 接收儲存各個欄位的資料(如id、標題、分類、價格、商品描述等)
            isNew: false,  // 預設為false
            isLoading: false,  // true為啟動，false不會啟動
            status: {
                fileUploading: false,  // 局部loadging
            },
            pagination: {},  // 分頁是物件，
        };
    },
    components:{
        Pagination,
    },
    methods: {
        getCoupons(page = 1) {  // 將products的資料取出並存放到宣告的products裡面  // 使用ES6參數預設值，假設沒有帶數值就會使用預設第一頁；若有帶數值的話就使用傳進來的數值
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
            const vm = this;  // 確保從http取回資料後能存放到vm中
            vm.isLoading = true;  // 當啟用getProducts時會執行
            this.$http.get(api).then((response) => {
                // console.log(response.data);
                vm.isLoading = false;  // 當getProducts完成後會結束執行
                vm.coupons = response.data.coupons;
                vm.pagination = response.data.pagination;
            });
        },
        openModal(isNew , item) {
            if(isNew) {
                this.tempCoupon = {};
                this.isNew = true;
            }else {
                this.tempCoupon = Object.assign({} , item);  // 從item把資料抓到前方的空物件{}中，再針對物件內的資料做編輯，item內的資料並不會因此被更動
                this.isNew = false;
            }
            // timestamp 轉換為 yyyy-mm-dd 格式
            this.tempCoupon.due_date = this.timestampConvert(this.tempCoupon.due_date);
            $('#couponModal').modal('show');
        },
        updateCoupons() {
            let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
            let httpMethod = 'post';
            console.log(api);
            const vm = this;  // vm = data
            if (!vm.isNew) {  // 假設vm傳過來的不是新的，會修改API路徑
                api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;  // 修改為抓取優惠券id路徑
                httpMethod = 'put'  // 將原本設定的httpMethod=post修改為put
            }
            // 將日期轉換為 timestamp
            vm.tempCoupon.due_date = Math.floor(new Date(vm.tempCoupon.due_date) / 1000);

            this.$http[httpMethod](api , { data:vm.tempCoupon }).then((response) => {  // 此處vm.tempCoupon 會報錯，故需使用{}將它包起來，前方並加上data:
                console.log(response.data);
                if (response.data.success) {
                    $('#couponModal').modal('hide');
                    vm.getCoupons();
                }else {
                    $('#couponModal').modal('hide');
                    vm.getCoupons();
                    console.log('新增失敗');
                }
            });        
        },
        // 開啟刪除畫面
        delModal(item) {
            $('#delCouponModal').modal('show');
            this.tempCoupon = item;
        },
        deleteCoupons() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
            this.$http.delete(api).then((response) => {  
                console.log(response.data);
                if (response.data.success) {  // 這段與updateProduct相似，若回傳成功執行getProducts
                    $('#delCouponModal').modal('hide');
                    vm.getProducts();
                }else {  // 若回傳為失敗，則會產生console.log('刪除失敗')
                    $('#delCouponModal').modal('hide');
                    vm.getProducts();
                    console.log('刪除失敗');
                }
            });
        },
        // 時間戳記轉日期格式 (YYYY-MM-DD)
        timestampConvert(time) {
            if (time) {
                const date = new Date(time * 1000);
                const formatDate = (num) => {
                if (num < 10) {
                    return `0${num}`;
                }
                return num;
            };
            // 解構賦值
            const [YYYY, MM, DD] = [
                date.getFullYear(),
                formatDate(date.getMonth() + 1),
                formatDate(date.getDate()),
            ];
                // ES6 template strings
                return `${YYYY}-${MM}-${DD}`;
            }
            return '';
        },
    },
    created() {  // 直接執行用元件
        this.getCoupons();
    },
};

</script>

