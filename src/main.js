// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios' // 主要ajax套件
import VueAxios from 'vue-axios' // 轉為vue的套件
import 'bootstrap';  // 載入bootstrap
import Loading from 'vue-loading-overlay';  // 載入vue-loading套件
import 'vue-loading-overlay/dist/vue-loading.css';  // 載入vue-loading css套件
import VeeValidate from 'vee-validate';  // 載入 validate套件
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';  // 載入VeeValidate繁體中文套件
import VueI18n from 'vue-i18n';  // 載入i18n套件

import App from './App'
import router from './router';
import './bus';  // 載入event.bus的檔案
import currencyFilter from './filters/currency';  // 載入金額千分號檔案
import dateFilter from './filters/date';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);  // 需使用此行程式碼才能執行axios
Vue.use(VeeValidate);  // 啟用VeeValidate套件
VeeValidate.Validator.localize('zhTW' , zhTWValidate);  // 載入VeeValidate繁體中文套件
// 使用全域註冊的方式啟用元件
Vue.component('Loading' , Loading);  // 使用全域載入套件方式
// 使用全域 filter 
Vue.filter('currency' , currencyFilter);  // ('自定義名稱' , 宣告名稱)
Vue.filter('date', dateFilter);  // 日期元件

axios.defaults.withCredentials = true;  // 前端要把 cookie 的開關打開

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zhTW',
});

Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTWValidate,
  },
});


/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: {App},
  template: '<App/>',
  router, // 將配置檔router加入new vue之下
});


router.beforeEach((to, from, next) => {
  console.log('to' , to, 'from' , from, 'next' , next);
  // ...
  if (to.meta.requiresAuth) {  // 若要前往的頁面具有requiresAuth的話，就不會放行
    const api = `${process.env.APIPATH}/api/user/check`;
    const vm = this;  // vm = data
    axios.post(api).then((response) => {  // 因不是在vue下執行此元件，所以此處的this.$http使用axios替代
      console.log(response.data);
      if (response.data.success) {  // 若成功登入→放行；若非登入狀態，則會跳回登入頁面
        next();
      }else {
        next({
          path: '/login',
        });
      }
    });
  }else {  // 反之，若無requiresAuth的話，會直接放行至下一頁
    next();
  }
});
