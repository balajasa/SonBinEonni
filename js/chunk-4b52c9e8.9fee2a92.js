(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b52c9e8"],{"104b":function(t,a,s){"use strict";var e=s("5404"),i=s.n(e);i.a},5404:function(t,a,s){},"8f95":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n=(s("4160"),s("a434"),s("159b"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(s,e){s.timestamp===t&&a.messages.splice(e,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,s)}))}}),r=n,o=(s("104b"),s("2877")),l=Object(o["a"])(r,e,i,!1,null,null,null);a["a"]=l.exports},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),n=s("e8b5"),r=s("861d"),o=s("7b0b"),l=s("50c4"),c=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),p=s("2d00"),g=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=d("concat"),C=function(t){if(!r(t))return!1;var a=t[g];return void 0!==a?!!a:n(t)},w=!b||!m;e({target:"Array",proto:!0,forced:w},{concat:function(t){var a,s,e,i,n,r=o(this),d=u(r,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?r:arguments[a],C(n)){if(i=l(n.length),f+i>h)throw TypeError(v);for(s=0;s<i;s++,f++)s in n&&c(d,f,n[s])}else{if(f>=h)throw TypeError(v);c(d,f++,n)}return d.length=f,d}})},"9d10":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"footer bg-sbbrown py-4"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-sm-4 pl-sm-0 col-md-4 pl-md-5"},[s("ul",{staticClass:"list-unstyled text-white"},[s("li",{staticClass:"font-weight-bold pb-2"},[t._v("關於我們")]),t._m(1),t._m(2),s("li",{staticClass:"pb-1"},[s("router-link",{staticClass:"text-white",attrs:{to:"/shopping/productlist"}},[t._v("歐尼小舖")])],1)])]),t._m(3)]),s("div",{staticClass:"row"},[t._m(4),t._m(5),s("div",{staticClass:"col-md-1"},[s("router-link",{staticClass:"text-white",attrs:{to:"/login"}},[s("i",{staticClass:"fas fa-user"})])],1)])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-4 col-md-3"},[e("img",{staticClass:"img-fluid gplogo",attrs:{src:s("b12e")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"pb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"}},[t._v("美味食譜")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"pb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"}},[t._v("線上訂位")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-sm-4 col-md-4"},[s("ul",{staticClass:"list-unstyled text-white"},[s("li",{staticClass:"font-weight-bold pb-2"},[t._v("聯絡我們")]),s("li",{staticClass:"pb-2"},[s("i",{staticClass:"fas fa-phone text-white"}),t._v(" 0800-999999")]),s("li",{staticClass:"pb-2"},[s("i",{staticClass:"far fa-clock text-white"}),t._v(" 09:30-17:00")]),s("li",[s("i",{staticClass:"fas fa-envelope"}),s("a",{staticClass:"text-white",attrs:{href:"mailto:service@cws.com.tw"}},[t._v(" service@cws.com.tw")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-4"},[s("ul",{staticClass:"list-inline"},[s("li",{staticClass:"list-inline-item text-white"},[s("i",{staticClass:"fab fa-facebook-square fa-2x"})]),s("li",{staticClass:"list-inline-item text-white"},[s("i",{staticClass:"fab fa-instagram fa-2x"})]),s("li",{staticClass:"list-inline-item text-white"},[s("i",{staticClass:"fab fa-line fa-2x"})]),s("li",{staticClass:"list-inline-item text-white"},[s("i",{staticClass:"fab fa-twitter-square fa-2x"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-7 align-self-center"},[s("div",{staticClass:"text-white",staticStyle:{"font-size":"14px"}},[t._v("CopyRight © 2020 壹壹玖餐飲集團股份有限公司 All Rights Reserved.")]),s("div",{staticClass:"text-white",staticStyle:{"font-size":"10px"}},[t._v("本網站僅供個人學習交流使用，並無任何商業用途")])])}],n=s("2877"),r={},o=Object(n["a"])(r,e,i,!1,null,null,null);a["a"]=o.exports},a434:function(t,a,s){"use strict";var e=s("23e7"),i=s("23cb"),n=s("a691"),r=s("50c4"),o=s("7b0b"),l=s("65f0"),c=s("8418"),u=s("1dde"),d=s("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,h=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,a){var s,e,u,d,f,p,m=o(this),C=r(m.length),w=i(t,C),x=arguments.length;if(0===x?s=e=0:1===x?(s=0,e=C-w):(s=x-2,e=h(g(n(a),0),C-w)),C+s-e>v)throw TypeError(b);for(u=l(m,e),d=0;d<e;d++)f=w+d,f in m&&c(u,d,m[f]);if(u.length=e,s<e){for(d=w;d<C-e;d++)f=d+e,p=d+s,f in m?m[p]=m[f]:delete m[p];for(d=C;d>C-e+s;d--)delete m[d-1]}else if(s>e)for(d=C-e;d>w;d--)f=d+e-1,p=d+s-1,f in m?m[p]=m[f]:delete m[p];for(d=0;d<s;d++)m[d+w]=arguments[d+2];return m.length=C-e+s,u}})},b12e:function(t,a,s){t.exports=s.p+"img/gplogo.af2d0ccd.png"},b3c5:function(t,a){t.exports="data:image/png;base64,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"},c975:function(t,a,s){"use strict";var e=s("23e7"),i=s("4d64").indexOf,n=s("a640"),r=s("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},cea4:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light font-weight-bold",staticStyle:{"background-color":"#efe7de"}},[e("div",{staticClass:"container"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:s("e4f7"),width:"250",height:"100",alt:""}}),e("img",{staticClass:"logoMobile",attrs:{src:s("b3c5")}})]),t._m(0),e("div",{staticClass:"collapse navbar-collapse ",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav ml-3 ml-auto h5 font-weight-bold"},[e("li",{staticClass:"nav-item ml-3"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")])],1),e("li",{staticClass:"nav-item ml-3 h5 font-weight-bold"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/shopping/productlist"}},[e("i",{staticClass:"fas fa-store"}),t._v(" 歐尼小舖")])],1)]),e("div",{staticClass:"dropdown h4 ml-3",on:{click:function(a){return a.preventDefault(),t.getFavorites(a)}}},[e("button",{staticClass:"btn dropdownIcon ml-0 pl-0",attrs:{id:"favorDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-heart"},[t.favorLength>0?e("span",[t._v(t._s(t.favorLength))]):t._e()])]),e("div",{staticClass:"dropdown-menu dropdown-menu-right px-3",staticStyle:{"min-width":"300px"},attrs:{"aria-labelledby":"favorDropdown"}},[e("h6",[t._v("願望清單")]),e("table",{staticClass:"table table-sm table-hover"},[e("tbody",t._l(t.favorites,(function(a){return e("tr",{key:a.id},[e("td",{attrs:{width:"50"}},[e("i",{staticClass:"fas fa-cart-plus text-sbbrown",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.addtoCart(a.id)}}})]),e("td",{staticClass:"text-sbbrown",on:{click:function(s){return t.$router.push("shopping/productdetail/"+a.id)}}},[t._v(t._s(a.title))]),e("td",{staticClass:"itemDelete",attrs:{width:"50"}},[e("i",{staticClass:"fas fa-times text-sbbrown",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.removeFavorItem(a)}}})])])})),0)]),e("hr"),e("router-link",{staticClass:"btn btn-sborange btn-block",attrs:{to:"/shopping/cartlist"}},[t._v(" 結帳去 ")])],1)]),e("div",{staticClass:"dropdown h4 ml-3",on:{click:function(a){return a.preventDefault(),t.getCart(a)}}},[e("button",{staticClass:"btn dropdownIcon ml-0 pl-0",attrs:{id:"cartDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-shopping-cart",class:{empty:0===t.cartLength}},[t.cartLength>0?e("span",[t._v(t._s(t.cartLength))]):t._e()])]),e("div",{staticClass:"dropdown-menu dropdown-menu-right px-3",staticStyle:{"min-width":"300px"},attrs:{"aria-labelledby":"cartDropdown"}},[e("h6",[t._v("已選擇商品")]),e("table",{staticClass:"table table-sm table-hover"},[t._m(1),e("tbody",t._l(t.cart.carts,(function(a){return e("tr",{key:a.id},[e("td",[e("i",{staticClass:"fas fa-trash-alt text-sbbrown",attrs:{type:"button","data-toggle":"modal"},on:{click:function(s){return s.stopPropagation(),t.removeCartItem(a.id)}}})]),e("td",{staticClass:"text-sbbrown",on:{click:function(s){return t.$router.push("shopping/productdetail/"+a.id)}}},[t._v(t._s(a.product.title))]),e("td",{staticClass:"text-sbbrown text-right"},[t._v(t._s(a.qty))]),e("td",{staticClass:"text-sbbrown text-right"},[t._v(t._s(t._f("currency")(a.total)))])])})),0)]),t.cartLength&&0!==t.cartLength?e("button",{staticClass:"btn btn-sborange btn-block",on:{click:function(a){return t.$router.push("/shopping/cartlist")}}},[t._v("結帳去")]):e("button",{staticClass:"btn btn-sbtan btn-block",on:{click:function(a){return t.$router.push("/shopping/productlist")}}},[t._v("購物去")])])])])],1)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th"),s("th",{staticClass:"text-sbbrown"},[t._v("商品名稱")]),s("th",{staticClass:"text-sbbrown"},[t._v("數量")]),s("th",{staticClass:"text-sbbrown text-center"},[t._v("金額")])])])}],n=(s("99af"),s("c975"),s("a434"),s("1157"),{data:function(){return{product:[],cart:{},cartLength:"",favorites:{},favorLength:"",status:{loadingItem:""}}},methods:{getCart:function(){var t=this;t.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("balasa","/cart");t.$http.get(a).then((function(a){t.isLoading=!1,t.cart=a.data.data,t.cartLength=a.data.data.carts.length}))},removeCartItem:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("balasa","/cart/").concat(t);a.$http.delete(s).then((function(){a.getCart(),a.$bus.$emit("updateBag")}))},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("balasa","/cart"),i={product_id:t,qty:a};s.isLoading=!0,s.$http.post(e,{data:i}).then((function(t){console.log("post",t.data),t.data.success?(s.getCart(),s.$bus.$emit("cart:get"),s.$bus.$emit("message:push","商品已加入購物車","success")):s.$bus.$emit("message:push",t.data.message,"danger"),s.isLoading=!1}))},getFavorites:function(){this.favorites=JSON.parse(localStorage.getItem("favorites"))||[],this.favorLength=this.favorites.length},removeFavorItem:function(t){var a=this.favorites.indexOf(t);this.favorites.splice(a,1),localStorage.setItem("favorites",JSON.stringify(this.favorites)),this.$bus.$emit("productFavor:get"),this.getFavorites()}},created:function(){var t=this;t.getCart(),t.$bus.$on("cart:get",(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.getCart(a)})),t.getFavorites(),t.$bus.$on("favor:get",(function(){return t.getFavorites()}))}}),r=n,o=s("2877"),l=Object(o["a"])(r,e,i,!1,null,null,null);a["a"]=l.exports},e4f7:function(t,a,s){t.exports=s.p+"img/logo_wn.4366f682.svg"}}]);
//# sourceMappingURL=chunk-4b52c9e8.9fee2a92.js.map