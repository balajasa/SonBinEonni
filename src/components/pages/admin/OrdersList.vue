<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <!-- <div class="text-right">
            <button class="btn btn-primary mt-4" @click="openModal(true)">建立新商品</button>
        </div> -->
        <table class="table mt-5">
            <thead>
                <th width="120" class="text-center">訂單日期</th>
                <th width="120" class="text-center">姓名</th>
                <th>購買品項</th>
                <th width="100">數量</th>
                <th width="150" class="text-center">應付金額</th>
                <th width="250" class="text-center">備註</th>
                <th width="120" class="text-center">付款狀態</th>
                <th width="150" class="text-center">編輯</th>
            </thead>
            <tbody>
                <tr v-for="(item) in sortOrder" :key="item.id">
                    <td class="text-center">{{ item.create_at | date }}</td>
                    <td class="text-center">{{ item.user.name }}</td>
                    <td>
                        <ul class="list-unstyled">
                            <li v-for="(product) in item.products" :key="product.id">{{ product.product.title }}</li>
                        </ul>
                    </td>
                    <td class="text-center">
                        <ul class="list-unstyled">
                            <li v-for="(product) in item.products" :key="product.id">{{ product.qty }}</li>
                        </ul>
                    </td>
                    <td class="text-right pr-4">
                        {{ item.total | currency }}
                    </td>
                    <td class="text-center">
                        {{ item.message }}
                    </td>
                    <td class="text-center">
                        <span v-if="item.is_paid" class="text-success">已付款</span>
                        <span v-else>未付款</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分頁 -->
        <Pagination :pagination="pagination" @emitpage="getOrders"></Pagination>
        <!-- 編輯訂單Modal -->
        <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>修改訂單</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click='getOrders'>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="create_at">訂單編號</label>
                                    <div>{{ tempOrder.id }}</div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="create_at">訂單日期</label>
                                    <div>{{ tempOrder.create_at | date }}</div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="is_paid">付款狀態</label>
                                    <div class="text-success" v-if="tempOrder.is_paid">
                                        <span>{{ tempOrder.paid_date | date }} | 已付款</span>
                                    </div>
                                    <div class="text-success" v-else>
                                        <span>尚未付款</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="form-row">
                            <div class="col-md-6">
                                    <label for="is_paid">收件者姓名</label>
                                    <input type="text" class="form-control" name="name" id="username" v-model="tempOrder.user.name">
                            </div>
                            <div class="col-md-6">
                                <label for="tel">聯絡電話</label>
                                <input type="tel" class="form-control" name="tel" id="usertel" v-model="tempOrder.user.tel" placeholder="請輸入電話">
                            </div>
                            <div class="col-md-6">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="useremail" v-model="tempOrder.user.email" placeholder="請輸入電子信箱">
                            </div>
                            <div class="col-md-6">
                                <label for="address">收件地址</label>
                                <input type="address" class="form-control" name="address" id="useraddress" v-model="tempOrder.user.address" placeholder="請輸入地址">
                            </div>
                            <div class="col-md">
                                <label for="message">備註</label>
                                <textarea class="form-control" rows="3" name="message" id="usermessage" v-model="tempOrder.message" placeholder="備註"></textarea>
                                <!-- <input type="textarea" class="form-control" name="message" id="usermessage" v-model="tempOrder.message" placeholder="備註"> -->
                            </div>
                        </div>
                        <div class="table-responsive tableDetail">
                            <table class="table table-hover my-2">
                                <thead>
                                    <tr>
                                        <th width="40"></th>
                                        <th>商品名稱</th>
                                        <th class="text-center">數量</th>
                                        <!-- <th>單位</th> -->
                                        <th class="text-center">單價</th>
                                        <th class="text-center">小計</th>
                                        <th class="text-center">優惠</th>
                                        <th class="text-center">優惠</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item) in tempOrder.products" :key="item.id">
                                        <td ><i class="fas fa-trash-alt"></i></td>
                                        <td>{{ item.product.title }}</td>
                                        <td class="text-center">{{ item.qty }}</td>
                                        <!-- <td>{{ item.product.unit }}</td> -->
                                        <td class="text-right">{{ item.product.price | currency }}</td>
                                        <td class="text-right">{{ item.total | currency }}</td>
                                        <td class="text-center" v-if="item.hasOwnProperty('coupon')">{{ item.coupon.percent }}%</td>
                                        <td class="text-center" v-else>未使用</td>
                                        <td class="text-right">{{ item.final_total | currency }}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td class="text-right" colspan="6">總計</td>
                                        <td class="text-right" colspan="7">{{ tempOrder.total | currency }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer p-4">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" @click="getOrders">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
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
            orders: [],  // 訂單資料
            tempOrder: {  // 暫存編輯訂單資料
                create_at: '',
                is_paid: '',
                message: '',
                paid_date: '',
                products: [],
                total: '',
                user: {
                    address: '',
                    email: '',
                    name: '',
                    tel: '',
                },
            },  
            isLoading: false,  // true為啟動，false不會啟動
            pagination: {},  // 分頁是物件，
        };
    },
    components:{
        Pagination,
    },
    methods: {
        getOrders(page = 1) {  // 將products的資料取出並存放到宣告的products裡面  // 使用ES6參數預設值，假設沒有帶數值就會使用預設第一頁；若有帶數值的話就使用傳進來的數值
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
            const vm = this;  // 確保從http取回資料後能存放到vm中
            vm.isLoading = true;  // 當啟用getProducts時會執行
            this.$http.get(api).then((response) => {
                vm.isLoading = false;  // 當getProducts完成後會結束執行
                vm.orders = response.data.orders;
                vm.pagination = response.data.pagination;
            });
        },
        openModal(item) {
            this.tempOrder = Object.assign({} , item);  // 從item把資料抓到前方的空物件{}中，再針對物件內的資料做編輯，item內的資料並不會因此被更動
            $('#orderModal').modal('show');
        },
        updateOrder() {
            const vm = this;  // vm = data
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`;
            
            this.$http.put(api, { data: vm.tempOrder }).then((response) => {  // 此處vm.tempOrder會報錯，故需使用{}將它包起來，前方並加上data:
                console.log(response.data);
                if (response.data.success) {
                    $('#orderModal').modal('hide');
                    vm.getOrders();
                }else {
                    $('#orderModal').modal('hide');
                    vm.getOrders();
                    console.log('新增失敗');
                }
            });        
        },
    },
    computed: {
        sortOrder() {
            const vm = this;
            let newOrder = [];
            if (vm.orders.length) {
                newOrder = vm.orders.sort((a, b) => {
                const aIsPaid = a.is_paid ? 1 : 0;
                const bIsPaid = b.is_paid ? 1 : 0;
                return bIsPaid - aIsPaid;
                });
            }
            return newOrder;
        },
    },
    created() {  // 直接執行用元件
        this.getOrders();
    },
};

</script>

