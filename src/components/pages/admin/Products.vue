<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right">
            <button class="btn btn-info mt-4" @click="openModal(true)">建立新商品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <th width="120" class="text-center">縮圖</th>
                <th width="130" class="text-center">分類</th>
                <th>商品名稱</th>
                <th width="120" class="text-center">建議售價</th>
                <th width="120" class="text-center">網路價</th>
                <th width="100" class="text-center">是否上架</th>
                <th width="130" class="text-center">編輯</th>
            </thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.id">
                    <td><img :src="item.imageUrl" width="80px" height="80px"></td>
                    <td class="text-center">{{ item.category }}</td>
                    <td>{{ item.title }}</td>
                    <td class="text-right">
                        {{ item.origin_price | currency }}
                    </td>
                    <td class="text-right">
                        {{ item.price | currency }}
                    </td>
                    <td class="text-center">
                        <span v-if="item.is_enabled" class="text-success">上架</span>
                        <span v-else>未上架</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-info btn-sm" @click="openModal(false , item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分頁 -->
        <Pagination :pagination="pagination" @emitpage="getProducts"></Pagination>
        <!-- 新增Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增商品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="image">輸入圖片網址</label>
                                    <input type="text" class="form-control" id="image" v-model="tempProduct.imageUrl" placeholder="請輸入圖片連結">
                                </div>
                                <div class="form-group">
                                    <label for="customFile">或 上傳圖片<i class="fas fa-circle-notch fa-spin" v-if="status.fileUploading"></i></label>
                                    <input type="file" id="customFile" class="form-control" ref="files" @change="uploadFile">
                                </div>
                                <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80" class="img-fluid" :src="tempProduct.imageUrl" alt="">
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">商品名稱</label>
                                    <input type="text" class="form-control" id="title" v-model="tempProduct.title" placeholder="請輸入名稱">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category" v-model="tempProduct.category" placeholder="請輸入分類">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input type="unit" class="form-control" id="unit" v-model="tempProduct.unit" placeholder="請輸入單位">
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price">建議售價</label>
                                        <input type="number" class="form-control" id="origin_price" v-model="tempProduct.origin_price" placeholder="請輸入價格">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">網路價</label>
                                        <input type="number" class="form-control" id="price" v-model="tempProduct.price" placeholder="請輸入價格">
                                    </div>
                                </div>
                                <hr>

                                <div class="form-group">
                                    <label for="description">商品描述</label>
                                    <textarea type="text" class="form-control" id="description" maxlength="80" v-model="tempProduct.description" placeholder="請輸入商品描述"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="content">商品介紹</label>
                                    <textarea type="text" class="form-control" id="content" v-model="tempProduct.content" placeholder="請輸入商品說明內容"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
                                        <!-- 0為未上架、1為上架，故此處要調整為:true-value="1" :false-value="0" -->
                                        <label class="form-check-label" for="is_enabled">是否上架</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 刪除Modal -->
        <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
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
            products: [],
            tempProduct: {},  // 接收儲存各個欄位的資料(如id、標題、分類、價格、商品描述等)
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
        getProducts(page = 1) {  // 將products的資料取出並存放到宣告的products裡面  // 使用ES6參數預設值，假設沒有帶數值就會使用預設第一頁；若有帶數值的話就使用傳進來的數值
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
            const vm = this;  // 確保從http取回資料後能存放到vm中
            vm.isLoading = true;  // 當啟用getProducts時會執行
            this.$http.get(api).then((response) => {
                vm.isLoading = false;  // 當getProducts完成後會結束執行
                vm.products = response.data.products;
                vm.pagination = response.data.pagination;
            });
        },
        openModal(isNew , item) {
            if(isNew) {
                this.tempProduct = {};
                this.isNew = true;
            }else {
                this.tempProduct = Object.assign({} , item);  // 從item把資料抓到前方的空物件{}中，再針對物件內的資料做編輯，item內的資料並不會因此被更動
                this.tempProduct = item;
                this.isNew = false;
            }
            $('#productModal').modal('show');
        },
        updateProduct() {
            let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
            let httpMethod = 'post';
            console.log(api);
            const vm = this;  // vm = data
            if (!vm.isNew) {  // 假設vm傳過來的不是新的，會修改API路徑
                api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;  // 修改為抓取商品id路徑
                httpMethod = 'put'  // 將原本設定的httpMethod=post修改為put
            }
            this.$http[httpMethod](api , { data:vm.tempProduct }).then((response) => {  // 此處vm.tempProduct會報錯，故需使用{}將它包起來，前方並加上data:
                console.log(response.data);
                if (response.data.success) {
                    $('#productModal').modal('hide');
                    vm.getProducts();
                }else {
                    $('#productModal').modal('hide');
                    vm.getProducts();
                    console.log('新增失敗');
                }
            });        
        },
        delModal(item) {
            $('#delProductModal').modal('show');
            this.tempProduct = item;
        },
        delProduct() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
            this.$http.delete(api).then((response) => {  
                console.log(response.data);
                if (response.data.success) {  // 這段與updateProduct相似，若回傳成功執行getProducts
                    $('#delProductModal').modal('hide');
                    vm.getProducts();
                }else {  // 若回傳為失敗，則會產生console.log('刪除失敗')
                    $('#delProductModal').modal('hide');
                    vm.getProducts();
                    console.log('刪除失敗');
                }
            });
        },
        uploadFile() {
            console.log(this);
            const uploadedFile = this.$refs.files.files[0];  // 第一個files為外層，第二個files為裡面的陣列
            const vm = this;
            const formData = new FormData();   // 模擬傳統表單送出的行為
            formData.append('file-to-upload' , uploadedFile);
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
            vm.status.fileUploading = true;  // 上傳符號，點下去時為true
            this.$http.post(url , formData , {  // 此處加入一個物件是因為要將格式轉換成formData的格式
                headers: {
                    'Content-Type': 'multipart/form-data'  // 將表單型式改為formdata
                },
            }).then((response) => {
                console.log(response.data);
                vm.status.fileUploading = false;  // 當完成上傳後，更改為false
                if(response.data.success) {  // 若回應得到正確的話
                    // vm.tempProduct.imageUrl = response.data.imageUrl;  // 上傳的圖片路徑會存放在tempProduct.imageUrl裡
                    // console.log(vm.tempProduct);
                    vm.$set(vm.tempProduct , 'imageUrl' , response.data.imageUrl)  // 用set的方式強制寫入確保雙向綁定
                }else {
                    this.$bus.$emit('message:push' , response.data.message , 'danger');  // 內層使用$emit，分別對應(訊息方法,訊息內容,訊息樣式)
                }
            });
        },
    },
    created() {  // 直接執行用元件
        this.getProducts();
    },
};

</script>

