// 加入Event.Bus檔案
import Vue from 'vue';

Vue.prototype.$bus = new Vue();  // 直接掛載在Vue的原型下



// Event.Bus可以跨元件通訊，若擔心會忘記在哪個元件設定的話，可以把Event.Bus可以使用的方法寫在此檔案內，包含使用的方法、傳遞的參數等

// Message
// vm.$bus.$on('message:push', message, status );
// 自定義名稱 'messsage:push'
// message: 傳入參數
// status: 樣式，預設值為 warning

// 內層傳遞的方式:
// vm.$bus.$emit('message:push');


