import Vue from 'vue';
import VueRouter from 'vue-router';
// 官方的元件

// import Home from '@/components/HelloWorld';
// 自訂分頁元件(前台)
import MainPage from '@/views/front/MainPage';  // 前台畫面主頁
import Shopping from'@/views/front/Shopping';  // 購物商城主頁

import ProductList from '@/components/pages/front/ProductList';  // 購物頁
import ProductDetail from '@/components/pages/front/ProductDetail';  // 商品詳細頁面
import CartList from '@/components/pages/front/CartList';  // 購物車
import OrderPayment from '@/components/pages/front/OrderPayment';  // 付款頁面
import OrderInfo from '@/components/pages/front/OrderInfo';  // 付款頁面


// 自訂分頁元件(後台)
import Dashboard from '@/views/admin/Dashboard';  // 後台主頁
import Login from '@/components/pages/admin/Login';  // 登入頁
import Products from '@/components/pages/admin/Products';  // 上架商品頁
import OrdersList from '@/components/pages/admin/OrdersList';  // 訂單頁
import Coupons from '@/components/pages/admin/Coupons';  // 優惠券頁



Vue.use(VueRouter);


const routes = [
        // 預設主頁
        {
            path: '*',  // 若進入的頁面非設定的頁面，會被重新導向
            redirect: '/',  
        },

        {
            name: 'MainPage',
            path: '/',
            component: MainPage,
        },

        {  
            name: 'Shopping',
            path: '/shopping',
            component: Shopping,
            children: [
                {   // /shopping/shopping_prod
                    name: 'ProductList',
                    path: 'productlist',
                    component: ProductList,  
                },
                {   // /shopping/ProductDetail/:product_id
                    name: 'ProductDetail',
                    path: 'productdetail/:product_id',
                    component: ProductDetail,  
                },
                {  // /shopping/cartlist
                    name: 'CartList',
                    path: 'cartlist',
                    component: CartList,  
                },
                {  // /shopping/OrderPayment
                    name: 'OrderPayment',
                    path: 'OrderPayment',
                    component: OrderPayment,  
                },
                {  // /shopping/OrderPayment
                    name: 'OrderInfo',
                    path: 'OrderInfo/:order_id',
                    component: OrderInfo,  
                },
            ],
        },

        // 後台登入頁
        // {
        //     path: '*',  // 若進入的頁面非設定的頁面，會被重新導向
        //     redirect: '/',  
        // },

        {
            name: 'Login',
            path: '/login',
            component: Login,
        },

        {
            name: 'Dashboard',
            path: '/admin',
            component: Dashboard,
            children: [
                {
                    name: 'Products',
                    path: 'products',
                    component: Products,
                    meta: { requiresAuth: true },  // 放至此處為確保進入此頁面時，需要被驗證
                },
                {
                    name: 'OrdersList',
                    path: 'orderslist',
                    component: OrdersList,
                    meta: { requiresAuth: true },  // 放至此處為確保進入此頁面時，需要被驗證
                },
                {
                    name: 'Coupons',
                    path: 'coupons',
                    component: Coupons,
                    meta: { requiresAuth: true },  // 放至此處為確保進入此頁面時，需要被驗證
                },
            ],
        },
    ];

    const router = new VueRouter({
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            }
            return { x: 0, y: 0 };
        },
    });


export default router;

