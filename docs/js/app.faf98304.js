(function(e){function t(t){for(var o,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"69d6498c"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/workout-app/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d49":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("0ff2"),a=n("5fda"),i=n("1bbb"),u=n("a15b"),c=n("b28b"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:"",id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/styleguide"}},[e._v("Style Guide")])],1),n("router-view"),n("footer",{staticClass:"container-fluid p-5 mt-5"},[n("b-row",[n("b-col",{staticClass:"text-center"},[n("small",[e._v("v1.0.0")])])],1)],1)],1)},l=[],f=(n("5c0b"),n("2877")),p={},d=Object(f["a"])(p,s,l,!1,null,null,null),b=d.exports,v=n("9483");Object(v["a"])("".concat("/workout-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f"),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Workout like Thor logo",src:n("9b19")}}),o("HelloWorld",{attrs:{msg:"Workout like Thor"}})],1)},h=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("ul",e._l(e.users,function(t,o){return n("li",{key:o},[e._v("\n      "+e._s(t.name)+"\n    ")])}),0),n("b-alert",{attrs:{show:""}},[e._v("VUE Bootstrap imported correctly")])],1)},y=[],k=n("8aa5"),_=n.n(k),j=_.a.initializeApp({apiKey:"AIzaSyDrVA6EHDFZEEWS-V1LrWwdIkFV-Vk6Z3A",authDomain:"workout-app-6ffb8.firebaseapp.com",databaseURL:"https://workout-app-6ffb8.firebaseio.com",projectId:"workout-app-6ffb8",storageBucket:"",messagingSenderId:"730908948143",appId:"1:730908948143:web:5225955573c5db34"}),O=j.database(),x={name:"HelloWorld",data:function(){return{msg:"test",users:[]}},firebase:{users:O.ref("users")}},E=x,S=(n("6621"),Object(f["a"])(E,w,y,!1,null,"3891c25a",null)),A=S.exports,P={components:{HelloWorld:A},data:function(){return{}}},T=P,W=(n("9fbe"),Object(f["a"])(T,g,h,!1,null,"20792210",null)),C=W.exports;o["a"].use(m["a"]);var H=new m["a"]({routes:[{path:"/",name:"home",component:C},{path:"/styleguide",name:"styleguide",component:function(){return n.e("about").then(n.bind(null,"6589"))}}]});o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].component("b-alert",a["a"]),o["a"].component("b-container",i["a"]),o["a"].component("b-row",u["a"]),o["a"].component("b-col",c["a"]),new o["a"]({router:H,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},6621:function(e,t,n){"use strict";var o=n("1d49"),r=n.n(o);r.a},7440:function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.f3257d6b.svg"},"9fbe":function(e,t,n){"use strict";var o=n("7440"),r=n.n(o);r.a}});