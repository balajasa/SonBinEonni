import Vue from 'vue'
import axios from 'axios' 
import VueAxios from 'vue-axios' 
import 'bootstrap'; 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import VeeValidate from 'vee-validate';  // 載入 validate套件
// import zhTWValidate from 'vee-validate/dist/locale/zh_TW';  // 載入VeeValidate繁體中文套件
// import VueI18n from 'vue-i18n';  // 載入i18n套件

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate';
// 將驗證條件引入
import * as rules from 'vee-validate/dist/rules';
// 引入中文化的文件
import tw from 'vee-validate/dist/locale/zh_TW.json';

import App from './App.vue'
import router from './router'
import './bus'; 
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);  
// Vue.use(VeeValidate);  // 啟用VeeValidate套件
// Validator.localize('zh_TW', messages);
// VeeValidate.Validator.localize('zhTW' , zhTWValidate);  // 載入VeeValidate繁體中文套件

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
localize('zh_TW', tw);



Vue.component('Loading' , Loading);  // 使用全域載入套件方式
// 使用全域 filter 
Vue.filter('currency' , currencyFilter); 
Vue.filter('date', dateFilter);  // 日期元件

axios.defaults.withCredentials = true;  // 前端要把 cookie 的開關打開


// 將所有驗證條件加入 extend
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: tw[rule], // assign message
  });
});

// Vue.use(VueI18n);
// const i18n = new VueI18n({
//   locale: 'zhTW',
// });

// Vue.use(VeeValidate, {
//   events: 'input|blur',
//   i18n,
//   dictionary: {
//     zhTWValidate,
//   },
// });


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
  console.log('to' , to, 'from' , from, 'next' , next);
  if (to.meta.requiresAuth) {  
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    const vm = this;  
    axios.post(api).then((response) => { 
      console.log(response.data);
      if (response.data.success) {  
        next();
      }else {
        next({
          path: '/login',
        });
      }
    });
  }else {  
    next();
  }
});