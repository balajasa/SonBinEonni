<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right">
            <!-- 購物車圖案 -->
            <button class="btn btn-info mt-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-shopping-cart"></i>
            </button>
            <!-- 下拉頁面 -->
            <div class="dropdown-menu dropdown-menu-right px-3" style="min-width: 300px" data-offset="400">
                <h6>已選擇商品</h6>
                <table class="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th class="text-center">金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i class="fas fa-trash-alt text-secondary" type="button" data-toggle="modal" data-title=" 帥帥的襯衫" data-target="#removeModal"></i>
                            </td>
                            <td>帥帥的襯衫</td>
                            <td class="text-right">2</td>
                            <td class="text-right">$ 690</td>
                        </tr>
                    </tbody>
                </table>
                <router-link class="btn btn-primary btn-block" to="/mycart">
                    結帳去
                </router-link>
                <!-- <a href="#" class="btn btn-primary btn-block">結帳去</a> -->
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
                <div class="card border-0 shadow-sm">
                    <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
                    <div class="card-body">
                        <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                        <h5 class="card-title">
                            <a href="#" class="text-dark">{{ item.title }}</a>
                        </h5>
                        <p class="card-text">{{ item.content }}</p>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                            <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                        </div>
                    </div>
                    <div class="card-footer d-flex">
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
                            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                            查看更多
                        </button>
                        <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addtoCart(item.id)">
                            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                            加到購物車
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品Modal -->
        <div class="modal fade" id="productsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="product.imageUrl" alt="" class="img-fluid">
                        <blockquote class="blockquote mt-3">
                            <p class="mb-0">{{ product.content }}</p>
                            <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                        </blockquote>
                    
                    <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                        <div class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</div>
                        <div class="h4" v-if="product.price">特價 {{ product.price }} 元</div>
                    </div>
                    <select name="" class="form-control mt-3" v-model="product.num">
                        <option :value="num" v-for="num in 10" :key="num">{{num}}</option>
                    </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                            小計 <strong>{{ product.num * product.price }}</strong> 元
                        </div>
                        <button type="button" class="btn btn-primary" @click="addtoCart(product.id , product.num)">加到購物車</button>
                    </div>
                </div>
            </div>            
        </div>
        <!-- 購物車Modal -->
        <div class="modal fade" id="shopcartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="product.imageUrl" alt="" class="img-fluid">
                        <blockquote class="blockquote mt-3">
                            <p class="mb-0">{{ product.content }}</p>
                            <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                        </blockquote>
                    
                    <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                        <div class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</div>
                        <div class="h4" v-if="product.price">特價 {{ product.price }} 元</div>
                    </div>
                    <select name="" class="form-control mt-3" v-model="product.num">
                        <option :value="num" v-for="num in 10" :key="num">{{num}}</option>
                    </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                            小計 <strong>{{ product.num * product.price }}</strong> 元
                        </div>
                        <button type="button" class="btn btn-primary" @click="addtoCart(product.id , product.num)">加到購物車</button>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>








<script>
import $ from 'jquery';

export default {
    data() {
        return {
            products: [],  // 定義products
            product: {},  // 存放modal資料用的物件
            status: {
                loadingItem: ''
            },
            isLoading: false,
        };
    },
    methods: {
        getProducts() {  // 取得所有商品列表
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;  // 此處使用戶端取得資料的API
            vm.isLoading = true;  // 加入讀取效果
            this.$http.get(url).then((response) => {
                vm.products = response.data.products;  // 取得資料後，將資料存放到products
                console.log(response);
                vm.isLoading = false;
            });
        },
        getProduct(id) {  // 取得單一商品列表
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;  // 此處使用戶端取得資料的API
            vm.status.loadingItem = id;  // 加入讀取效果
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;  // 取得資料後，將資料存放到product
                response.data.product.num = 1;
                $('#productsModal').modal('show');  // ajax結束後打開modal
                console.log(response);
                vm.status.loadingItem = '';
            });
        },
        addtoCart(id , qty = 1) {  // ES6預設值qty=1
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`; 
            vm.status.loadingItem = id;  // 加入讀取效果
            const cart = {
                product_id: id,
                qty,
            }
            this.$http.post(url , { data:cart } ).then((response) => {
                console.log(response);
                vm.status.loadingItem = '';
                vm.getCart();
                $('#productsModal').modal('hide'); 
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`; 
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                // vm.products = response.data.products;  // 取得資料後，將資料存放到products
                console.log(response);
                vm.isLoading = false;
            });
        },
    },
    created() {
        this.getProducts();
        this.getCart();
    },
};
</script>



