(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ff3e29e"],{8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var n=s(e);n in t?r.f(t,n,i(0,a)):t[n]=a}},"8e17":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination justify-content-center my-5"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},r=[],i={data:function(){return{}},props:["pagination"],methods:{updatePage:function(t){this.$emit("emitpage",t)}}},n=i,l=a("2877"),o=Object(l["a"])(n,s,r,!1,null,null,null);e["a"]=o.exports},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),i=a("e8b5"),n=a("861d"),l=a("7b0b"),o=a("50c4"),d=a("8418"),c=a("65f0"),u=a("1dde"),p=a("b622"),m=a("2d00"),v=p("isConcatSpreadable"),_=9007199254740991,f="Maximum allowed index exceeded",g=m>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=u("concat"),C=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},b=!g||!h;s({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,s,r,i,n=l(this),u=c(n,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(i=-1===e?n:arguments[e],C(i)){if(r=o(i.length),p+r>_)throw TypeError(f);for(a=0;a<r;a++,p++)a in i&&d(u,p,i[a])}else{if(p>=_)throw TypeError(f);d(u,p++,i)}return u.length=p,u}})},ddd1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("table",{staticClass:"table mt-5"},[t._m(0),a("tbody",t._l(t.sortOrder,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-center"},[t._v(t._s(t._f("date")(e.create_at)))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.user.name))]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e){return a("li",{key:e.id},[t._v(t._s(e.product.title))])})),0)]),a("td",{staticClass:"text-center"},[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e){return a("li",{key:e.id},[t._v(t._s(e.qty))])})),0)]),a("td",{staticClass:"text-right pr-4"},[t._v(" "+t._s(t._f("currency")(e.total))+" ")]),a("td",{staticClass:"text-center"},[t._v(" "+t._s(e.message)+" ")]),a("td",{staticClass:"text-center"},[e.is_paid?a("span",{staticClass:"text-success"},[t._v("已付款")]):a("span",[t._v("未付款")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.delModal(e)}}},[t._v("刪除")])])])})),0)]),a("Pagination",{attrs:{pagination:t.pagination},on:{emitpage:t.getOrders}}),a("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[t._m(1),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.getOrders}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body p-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"create_at"}},[t._v("訂單編號")]),a("div",[t._v(t._s(t.tempOrder.id))])])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"create_at"}},[t._v("訂單日期")]),a("div",[t._v(t._s(t._f("date")(t.tempOrder.create_at)))])])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"is_paid"}},[t._v("付款狀態")]),t.tempOrder.is_paid?a("div",{staticClass:"text-success"},[a("span",[t._v(t._s(t._f("date")(t.tempOrder.paid_date))+" | 已付款")])]):a("div",{staticClass:"text-success"},[a("span",[t._v("尚未付款")])])])])]),a("hr"),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"is_paid"}},[t._v("收件者姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.name,expression:"tempOrder.user.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"username"},domProps:{value:t.tempOrder.user.name},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"name",e.target.value)}}})]),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"tel"}},[t._v("聯絡電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.tel,expression:"tempOrder.user.tel"}],staticClass:"form-control",attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.tempOrder.user.tel},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"tel",e.target.value)}}})]),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.email,expression:"tempOrder.user.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入電子信箱"},domProps:{value:t.tempOrder.user.email},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"email",e.target.value)}}})]),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"address"}},[t._v("收件地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.address,expression:"tempOrder.user.address"}],staticClass:"form-control",attrs:{type:"address",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.tempOrder.user.address},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"address",e.target.value)}}})]),a("div",{staticClass:"col-md"},[a("label",{attrs:{for:"message"}},[t._v("備註")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.message,expression:"tempOrder.message"}],staticClass:"form-control",attrs:{rows:"3",name:"message",id:"usermessage",placeholder:"備註"},domProps:{value:t.tempOrder.message},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"message",e.target.value)}}})])]),a("div",{staticClass:"table-responsive tableDetail"},[a("table",{staticClass:"table table-hover my-2"},[t._m(2),a("tbody",[t._l(t.tempOrder.products,(function(e){return a("tr",{key:e.id},[t._m(3,!0),a("td",[t._v(t._s(e.product.title))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.product.price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),e.hasOwnProperty("coupon")?a("td",{staticClass:"text-center"},[t._v(t._s(e.coupon.percent)+"%")]):a("td",{staticClass:"text-center"},[t._v("未使用")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.final_total)))])])})),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("總計")]),a("td",{staticClass:"text-right",attrs:{colspan:"7"}},[t._v(t._s(t._f("currency")(t.tempOrder.total)))])])],2)])])]),a("div",{staticClass:"modal-footer p-4"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.getOrders}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateOrder}},[t._v("確認")])])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("訂單日期")]),a("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("姓名")]),a("th",[t._v("購買品項")]),a("th",{attrs:{width:"100"}},[t._v("數量")]),a("th",{staticClass:"text-center",attrs:{width:"150"}},[t._v("應付金額")]),a("th",{staticClass:"text-center",attrs:{width:"250"}},[t._v("備註")]),a("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("付款狀態")]),a("th",{staticClass:"text-center",attrs:{width:"150"}},[t._v("編輯")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("修改訂單")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"40"}}),a("th",[t._v("商品名稱")]),a("th",{staticClass:"text-center"},[t._v("數量")]),a("th",{staticClass:"text-center"},[t._v("單價")]),a("th",{staticClass:"text-center"},[t._v("小計")]),a("th",{staticClass:"text-center"},[t._v("優惠")]),a("th",{staticClass:"text-center"},[t._v("優惠")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("i",{staticClass:"fas fa-trash-alt"})])}],i=(a("99af"),a("1157")),n=a.n(i),l=a("8e17"),o={data:function(){return{orders:[],tempOrder:{create_at:"",is_paid:"",message:"",paid_date:"",products:[],total:"",user:{address:"",email:"",name:"",tel:""}},isLoading:!1,pagination:{}}},components:{Pagination:l["a"]},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("balasa","/admin/orders?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(e).then((function(t){a.isLoading=!1,a.orders=t.data.orders,a.pagination=t.data.pagination}))},openModal:function(t){this.tempOrder=Object.assign({},t),n()("#orderModal").modal("show")},updateOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("balasa","/admin/order/").concat(t.tempOrder.id);this.$http.put(e,{data:t.tempOrder}).then((function(e){console.log(e.data),e.data.success?(n()("#orderModal").modal("hide"),t.getOrders()):(n()("#orderModal").modal("hide"),t.getOrders(),console.log("新增失敗"))}))}},computed:{sortOrder:function(){var t=this,e=[];return t.orders.length&&(e=t.orders.sort((function(t,e){var a=t.is_paid?1:0,s=e.is_paid?1:0;return s-a}))),e}},created:function(){this.getOrders()}},d=o,c=a("2877"),u=Object(c["a"])(d,s,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-9ff3e29e.47e09ab6.js.map