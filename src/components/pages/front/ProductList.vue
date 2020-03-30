<template>
    <div class="productlist">
        <loading :active.sync="isLoading"></loading>
        <div class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-center">
            <div class="container">
            <div class="bg-lighter p-3 text-center">
                <!-- <div class="h2 text-sborange">손빈언니</div> -->
                <div class="h4 text-sborange font-weight-bold">손빈언니將21年來專研的美味韓式料理帶進台灣</div>
                <div class="h4 text-sborange font-weight-bold">讓每個吃到料理的顧客，都露出幸福的彎彎眼睛^^</div>
            </div>
        </div>
        </div>
        <div class="container">
        <div class="row">
            <!-- 側邊分類選單 -->
            <div class="categorybar col-md-3 pt-4">
                <slot>
                    <Category :category='category' :currentOption='isCurrent' @get-category='changeCategory'></Category>
                </slot>
            </div>
            <!-- 商品列表 -->
            <div class="col-md-9">
                <div class="row">
                    <div class="col-sm-6 col-md-4 my-4" v-for="item in filterProducts" :key="item.id">
                        <div class="card border-0 product-card h-100">
                            <div class="productimg" style="height: 230px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}" @click="$router.push(`productdetail/${item.id}`)">
                            </div>
                            <!-- 我的最愛 -->
                            <a type="button" class="myfavorite">
                                <i class="fas fa-heart" v-if="setliked(item)" @click.stop="changeFavorite(item)"></i>
                                <i class="far fa-heart" v-else @click.stop="changeFavorite(item)"></i>
                            </a>
                            <!-- 商品卡 -->
                            <div class="card-body">
                                <!-- <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span> -->
                                <h5 class="card-title text-center">
                                    <a href="#" class="text-sbbrown font-weight-bold">{{ item.title }}</a>
                                </h5>
                                <!-- <p class="card-text">{{ item.description }}</p> -->
                            <div class="d-flex justify-content-end align-items-baseline">
                                <!-- <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div> -->
                                <!-- <del class="pd_oprice h6 mb-0" v-if="item.price">原價 {{ item.origin_price }} 元</del> -->
                                <div class="pd_price font-weight-bold mr-2 mb-0" v-if="item.price">
                                    <small class="h6 text-sbbrown">網路價</small> ${{ item.price }}
                                </div>
                            </div>
                            </div>
                            <div class="card-footer text-center cart-text" type="button" @click.prevent="addtoCart(item.id, item.num)">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>加到購物車
                                    
                                <!-- <a type="button" class="btn btn-outline-secondary btn-sm" @click="$router.push(`productdetail/${item.id}`)">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    查看更多
                                </a> -->
                                <!-- <a type="button" class="btn btn-outline-danger btn-sm ml-auto" @click.prevent="addtoCart(item.id, item.num)">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    加到購物車
                                </a> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 分頁 -->
                <Pagination :pagination="pagination" @emitpage="setPagination"></Pagination>
            </div>
        </div>
        </div>
    </div>
</template>




<script>
import $ from 'jquery';  // 此處要用jquery，所以必須載入
import Pagination from '@/views/admin/Pagination';
import Category from '@/components/pages/front/Category';
import SideList from '@/views/front/SideList';

export default {
    name: 'ProductList',
    data() {
        return {
            products: [],  // 定義products
            // product: {},  // 存放modal資料用的物件
            category: [],  // 儲存類別
            isCurrent: '全部商品',  // 目前選擇類別
            status: {
                loadingItem: '',  // 當筆點選商品 id
            },
            isLoading: false,
            currentPageNum: 1, // 目前頁碼
            showPages: '', // 顯示頁數
            pagination: {  // 分頁是物件，
                total_pages: '',
                current_page: '',
                has_pre: false,
                has_next: true,
            },  
            cart: {},  // 存放localstorage購物車資料
            favorites: [],  // 存放localstorage喜歡商品資料
        };
    },
    components:{
        Pagination,
        Category,
        SideList,
    },
    methods: {
        getProducts() {  // 取得所有商品列表
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;  // 此處使用戶端取得資料的API
            vm.isLoading = true;  // 加入讀取效果
            this.$http.get(api).then((response) => {
                vm.isLoading = false;
                // vm.pagination = response.data.pagination;
            if (!response.data.success) {
                vm.$bus.$emit('message:push', response.data.message, 'danger');
                vm.$router.push('shopping/productlist');
            } else {
            // 儲存所有商品資料
                vm.products = response.data.products;
            // 取得商品類別
                vm.getCategory();
            // 初始頁數以所有資料計算(12筆資料為一頁，使用無條件進位)
                vm.showPages = Math.ceil(vm.products.length / 12);
            }
            });
        },
        // 取得分類項目
        getCategory() {
            const vm = this;
            const allCategory = [];
            vm.products.forEach(item => allCategory.push(item.category));
            // 篩選不重複的類別
            vm.category = allCategory.filter((element, index, array) => array.indexOf(element) === index);
            vm.category.unshift('全部商品');
        },
        // 類別變動時，更新相關變數 (Category.vue 點擊呼叫)
        changeCategory(option = '全部商品') {
            // 目前點擊類別
            this.isCurrent = option;
            // 頁碼重設初始值
            this.currentPageNum = 1;
        },
        addtoCart(id , qty = 1) {  // ES6預設值qty=1
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading = true;
                const cart = {
                    product_id: id,
                    qty,
                };
            vm.$http.post(api, { data: cart }).then((response) => {
                console.log('post' ,response.data);
                if (!response.data.success) {
                    vm.$bus.$emit('message:push', response.data.message, 'danger');
                } else {
                    vm.getCart();
                }
                vm.isLoading = false;
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`; 
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                // vm.products = response.data.products;  // 取得資料後，將資料存放到products
                // console.log(response);
                vm.isLoading = false;
            });
        },
        // 取得喜歡的商品
        getFavorites() {
            this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        },
        // 變更喜愛的商品資料(新增/移除)
        changeFavorite(product) {
            const vm = this;
            let delIndex = -1; // 儲存有在this.favorites中資料的index
            if (vm.favorites.length > 0) {
                vm.favorites.forEach((item, index) => {
                    if (item.id === product.id) {
                        delIndex = index;
                    }
                });
            }
            if (delIndex === -1) {
                // 不存在則加入陣列
                vm.favorites.push(product);
            } else {
                // 存在則移除
                vm.favorites.splice(delIndex, 1);
            }
            // 儲存至 localStorage
            localStorage.setItem('favorites', JSON.stringify(vm.favorites));
            // 重新整理
            vm.getFavorites();
            vm.$bus.$emit('favor:get');
        },
        // 判斷顯示/隱藏關注樣式
        setliked(item) {
            const liked = this.favorites.filter(favor => favor.id === item.id);
            if (liked.length > 0) {
                return true;
            }
                return false;
        },
        // 頁碼變數處理 (pagination /pageData 呼叫)
        setPagination(page = 1) {
            const vm = this;
            // 儲存目前點擊頁碼
            this.currentPageNum = page;
            // 總頁數
            this.pagination.total_pages = this.showPages;
            // 目前頁數
            this.pagination.current_page = this.currentPageNum;
            // 判斷目前頁碼，若小於1，則前一頁按鈕無法點選
            if (this.currentPageNum <= 1) {
                this.pagination.has_pre = false;
            } else {
                this.pagination.has_pre = true;
            }
            // 判斷目前頁碼，若大於總頁數，則後一頁按鈕無法點選
            if (this.currentPageNum >= this.total_pages) {
                this.pagination.has_next = false;
            } else {
                this.pagination.has_next = true;
            }
        },
        // 處理畫面一頁顯示12筆資料
        setShowData(data) {
            // 12筆資料為一頁，使用無條件進位
            const pages = Math.ceil(data.length / 12);
            // 更新目前顯示頁數
            this.showPages = pages;
            // 更新頁碼
            this.setPagination(this.currentPageNum);
            // 計算要顯示的資料
            const startNum = (parseInt(this.currentPageNum, 10) - 1) * 12;
            const endNum = ((parseInt(this.currentPageNum, 10) - 1) * 12 + 12);
            return data.slice(startNum, endNum);
        },
    },
    computed: {
        // 依類別篩選顯示的商品資料
        filterProducts() {
            // const vm = this;
            let tempProducts = this.products;
            if (this.isCurrent && this.isCurrent !== '全部商品') {
                tempProducts = this.products.filter(item => item.category === this.isCurrent);
            }
            return this.setShowData(tempProducts);
            return tempProducts;
            console.log(tempProducts);
        },
    },
    created() {
        const vm = this;
        // 接類別變數
        if (vm.$route.params.category) {
            vm.isCurrent = vm.$route.params.category;
        }
        this.getProducts();
        this.getCart();
        vm.getFavorites();
        vm.$bus.$on('productFavor:get', () => vm.getFavorites());
    },
};
</script>



<style lang="scss">


    .productlist {
        background-color: #efe7de;
    }

    /* shopping輪播頁 */
    .jumbotron-bg {
        background-image: url(https://upload.cc/i1/2020/03/28/oMA0ts.jpg);
        background-size: cover;
        background-position: center center;
        min-height: 400px;
        // opacity: 0.8;
    }

    .bg-lighter {
        background-color: rgba(255 , 255 , 255 ,.9);
    }

    .list-group-item.active {
        background-color: #EA562A;
        border-color: #EA562A;
    }

    .cart-text {
        color: #F5F5F5;
    }

    .product-card {
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
    }

    .card-body {
        padding: 16px;
    }

    .productimg {
        cursor: pointer;
    }

    .myfavorite {
        position: absolute;
        top: 8px;
        right: 14px;
    }

    .myfavorite i {
        font-size: 26px;
        color: #EA562A;
    }

    
    .pd_price {
        color: #E53007;
        font-size: 30px;
    }

    .categorybar {
        padding: 0 24px;
    }

    @media (min-width: 992px) { 
        .categorybar{
            padding: 0 16px;
        }
    }

    // @media (max-width: 991.98px) { 
    //     .card-body {
    //         height: 182px;
    //     }
    // }

    // @media (min-width: 992px) { 
    //     .pd_oprice {
    //         display: block;
    //         font-size: 14px;
    //     }
    //     .pd_price {
    //         display: block;
    //         font-size: 26px;
    //     }
    // }

    .card-footer {
        background-color: #EA562A;
        font-size: 18px;
    }

    .card-footer:hover {
        background-color: rgba(230, 134, 91, 0.7)
    }

</style>