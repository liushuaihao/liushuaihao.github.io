(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],f=0,p=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},1:function(t,e){},"456a":function(t,e,n){},"4ca2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},s=[],a=(n("034f"),n("2877")),o={},c=Object(a["a"])(o,i,s,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{title:"包子铺"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[t._v("返回")])],1),n("div",{attrs:{id:"home"}},[n("div",{staticClass:"tab"},[n("ul",t._l(t.list,(function(e,r){return n("li",{key:r,style:{color:r==t.index?"blue":""},on:{click:function(e){t.index=r}}},[t._v(t._s(e.title))])})),0)]),n("div",{staticStyle:{flex:"1"}},[n("list_s",{attrs:{arr:t.list,index:t.index},on:{index:function(e){t.index=e}}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.pic_s>0,expression:"pic_s>0"}],staticClass:"h_fot"},[n("div",{staticStyle:{"font-size":".36rem",color:"#fff",flex:"1","text-align":"left",padding:"0.15rem 0  0.15rem  1.3rem"}},[t._v(" ￥"+t._s(t.pic_s)+" "),n("span",[t._v("25元起送")])]),n("div",{staticClass:"btn_s",on:{click:t.btn}},[t._v("去结算")])])])],1)},p=[],d=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list_arr,(function(e,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.type==r,expression:"type==$index"}],key:r},[n("div",{staticStyle:{"min-height":".4rem","line-height":".4rem","font-size":".2rem","text-align":"left"}},[t._v(t._s(e.title))]),t._l(e.arr,(function(e,r){return n("div",{key:r,attrs:{id:"list_s"}},[n("div",{staticClass:"l_1"},[n("img",{attrs:{src:e.url,alt:"",width:"100%",height:"100%"}})]),n("div",{staticClass:"l_2"},[n("div",{staticClass:"l_h3"},[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.ice))]),n("div",{staticClass:"p_n"},[n("div",{staticClass:"pic"},[t._v("￥"+t._s(e.jg))]),n("div",{staticClass:"num"},[n("btn",{attrs:{value:e.num},on:{value:function(n){return t.btn_s(e,n)}}})],1)])])])}))],2)})),0)},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"btn"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.num>=1,expression:"num>=1"}],staticClass:"btn_1",on:{click:t.minus}},[t._v("-")]),n("div",{staticClass:"text"},[n("input",{directives:[{name:"show",rawName:"v-show",value:t.num<0,expression:"num<0"},{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticStyle:{width:"20px"},attrs:{type:"text"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}}),t._v(" "+t._s(t.num>=1?t.num:"")+" ")]),n("div",{staticClass:"btn_2",on:{click:t.add}},[t._v("+")])])},h=[],_={props:["value"],computed:{num:{get:function(){return this.value},set:function(t){this.$emit("value",t)}}},methods:{add:function(){this.num++},minus:function(){this.num<=0||this.num--}}},y=_,O=(n("7979"),Object(a["a"])(y,b,h,!1,null,null,null)),g=O.exports,j=n("2f62");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){Object(d["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P={components:{btn:g},props:["arr","index"],data:function(){return{list:[]}},computed:x({list_arr:function(){return this.arr},type:{get:function(){return this.index},set:function(t){this.$emit("index",t)}}},Object(j["c"])(["my_arr"])),watch:{list_arr:{handler:function(t){var e=this;this.list=[],t.forEach((function(t){t.arr.forEach((function(t){t.num>0&&e.list.push(t)}))})),this.$store.commit("addItem",this.list)},deep:!0}},created:function(){},methods:{btn_s:function(t,e){t.num=e}}},S=P,C=(n("85c0"),Object(a["a"])(S,v,m,!1,null,null,null)),k=C.exports;function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(n,!0).forEach((function(e){Object(d["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $={name:"home",components:{list_s:k},data:function(){return{list:"",index:2}},created:function(){var t=this;this.$http.get("json.json").then((function(e){t.list=e.data.arr}))},computed:D({},Object(j["b"])(["pic_s"])),methods:{btn:function(){this.pic_s>=25?location.href="#/about":alert("25元起送")}}},N=$,z=(n("cccb"),Object(a["a"])(N,f,p,!1,null,null,null)),M=z.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("mt-header",{attrs:{title:"确认订单"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[t._v("返回")])],1),n("div",{staticClass:"item_box"},[n("div",{staticStyle:{"min-height":"3rem",background:"#fff"}},[t._l(t.my_arr,(function(e){return n("div",{key:e.id,staticClass:"item"},[n("img",{staticStyle:{width:"0.8rem",height:"0.8rem"},attrs:{src:e.url,alt:""}}),n("div",{staticClass:"t_tit",attrs:{title:e.title}},[t._v(t._s(e.title))]),n("div",[t._v("×"+t._s(e.num))]),n("div",{staticStyle:{"font-weight":"600","text-align":"right"}},[t._v("￥"+t._s(e.num*e.jg))])])})),n("div",{staticClass:"t_xj"},[t._v(" 小计 "),n("span",{staticStyle:{"font-weight":"bold","font-size":"0.24rem"}},[t._v("￥"+t._s(t.pic_s))])])],2)]),n("div",{staticClass:"h_fot"},[n("div",{staticStyle:{"font-size":".36rem",color:"#fff",flex:"1","text-align":"left",padding:"0.15rem 0  0.15rem  1.3rem"}},[t._v("￥"+t._s(t.pic_s))]),n("div",{staticClass:"btn_s"},[t._v("去支付")])])],1)},H=[];function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach((function(e){Object(d["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var q={computed:J({},Object(j["c"])(["my_arr"]),{},Object(j["b"])(["pic_s"])),created:function(){this.pic_s<25&&(location.href="#/")}},A=q,B=(n("e76e"),Object(a["a"])(A,T,H,!1,null,null,null)),F=B.exports;r["default"].use(l["a"]);var G=[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:F}],K=new l["a"]({routes:G}),L=K;r["default"].use(j["a"]);var Q=new j["a"].Store({state:{p:0,my_arr:[]},mutations:{addItem:function(t,e){t.my_arr=e}},actions:{},modules:{},getters:{pic_s:function(t){var e=0;return t.my_arr.forEach((function(t){e+=t.jg*t.num})),e}}}),R=n("5a4b"),U=n("660a");n("4f89");r["default"].use(R["a"]),r["default"].component(U["Header"].name,U["Header"]),r["default"].config.productionTip=!1,new r["default"]({router:L,store:Q,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,n){},7979:function(t,e,n){"use strict";var r=n("456a"),i=n.n(r);i.a},"85c0":function(t,e,n){"use strict";var r=n("4ca2"),i=n.n(r);i.a},"85ec":function(t,e,n){},"91aa":function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("5ced"),i=n.n(r);i.a},e76e:function(t,e,n){"use strict";var r=n("91aa"),i=n.n(r);i.a}});
//# sourceMappingURL=app.b2b8c4f2.js.map