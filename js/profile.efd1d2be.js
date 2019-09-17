(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"555f":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader"})},s=[],l=(r("9a64"),r("2877")),o={},n=Object(l["a"])(o,a,s,!1,null,"74161296",null);t["a"]=n.exports},"5dc3":function(e,t,r){"use strict";var a=r("71ff"),s=r.n(a);s.a},"71ff":function(e,t,r){},"9a64":function(e,t,r){"use strict";var a=r("eebd"),s=r.n(a);s.a},ac6a:function(e,t,r){for(var a=r("cadf"),s=r("0d58"),l=r("2aba"),o=r("7726"),n=r("32e9"),i=r("84f2"),c=r("2b4c"),u=c("iterator"),f=c("toStringTag"),v=i.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=s(m),g=0;g<d.length;g++){var b,h=d[g],L=m[h],w=o[h],D=w&&w.prototype;if(D&&(D[u]||n(D,u,v),D[f]||n(D,f,h),i[h]=v,L))for(b in a)D[b]||l(D,b,a[b],!0)}},c66d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Loader",{directives:[{name:"show",rawName:"v-show",value:!e.currentDBUser.id,expression:"!currentDBUser.id"}]}),e.currentDBUser&&e.currentDBUser.id?r("b-container",[r("b-row",[r("b-col",{staticClass:"text-center mb-3"},[e.currentDBUser.gravatar?r("b-img",{staticClass:"mb-4 avatar",attrs:{thumbnail:"",fluid:"",rounded:"circle",src:"https://www.gravatar.com/avatar/"+e.currentDBUser.gravatar+"?s=200",alt:"Profile"}}):e._e(),r("h4",[e._v(e._s(e.currentDBUser.name)+" "+e._s(e.currentDBUser.lastname))]),r("small",{staticClass:"text-muted"},[e._v("Last workout: TODO")])],1)],1),r("b-row",[e.workoutGoals.length>0?r("b-col",{staticClass:"mt-3 col-12 col-sm-6 col-lg-4"},[r("b-card",{staticClass:"mb-3 text-center",attrs:{tag:"article","bg-variant":"dark"}},[r("b-card-text",[r("img",{staticClass:"icon mt-2 mb-4",attrs:{src:e.publicPath+"img/icons/goals/"+e.currentDBUser.goal+".svg",alt:"Goal: "+e.goalName(e.currentDBUser.goal),title:"Goal: "+e.goalName(e.currentDBUser.goal)}}),r("h4",{staticClass:"mb-4"},[e._v("Goals")]),r("b-form",[r("b-form-group",{attrs:{label:"I will become "+e.goalName(e.currentDBUser.goal)}},[r("b-form-input",{attrs:{id:"goal-range",type:"range",min:e.workoutGoals[0].id,max:e.workoutGoals[e.workoutGoals.length-1].id},model:{value:e.currentDBUser.goal,callback:function(t){e.$set(e.currentDBUser,"goal",t)},expression:"currentDBUser.goal"}})],1)],1)],1)],1)],1):e._e(),e.workoutLevels.length>0?r("b-col",{staticClass:"mt-3 col-12 col-sm-6 col-lg-4"},[r("b-card",{staticClass:"mb-3 text-center",attrs:{tag:"article","bg-variant":"dark"}},[r("b-card-text",[r("img",{staticClass:"icon mt-2 mb-4",attrs:{src:e.publicPath+"img/icons/levels/"+e.currentDBUser.level+".svg",alt:"Level: "+e.levelName(e.currentDBUser.level),title:"Level: "+e.levelName(e.currentDBUser.level)}}),r("h4",{staticClass:"mb-4"},[e._v(e._s(e.levelName(e.currentDBUser.level)))]),r("b-form",[r("b-form-group",{attrs:{label:"Your current level"}},[r("b-form-input",{attrs:{id:"level-range",type:"range",min:e.workoutLevels[0].id,max:e.workoutLevels[e.workoutLevels.length-1].id},model:{value:e.currentDBUser.level,callback:function(t){e.$set(e.currentDBUser,"level",t)},expression:"currentDBUser.level"}})],1)],1)],1)],1)],1):e._e()],1)],1):e._e()],1)},s=[],l=(r("ac6a"),r("7f7f"),r("7514"),r("59ca")),o=r.n(l),n=r("17e1"),i=r("555f"),c={components:{Loader:i["a"]},data:function(){return{publicPath:"/",currentUser:o.a.auth().currentUser,currentDBUser:{},users:[],workoutGoals:[],workoutLevels:[]}},firebase:{users:n["a"].ref("users"),workoutGoals:n["a"].ref("workout-goals"),workoutLevels:n["a"].ref("workout-levels")},mounted:function(){var e=this;o.a.database().ref("users").once("value").then(function(t){e.currentDBUser=t.val().find(function(t){return t.email===e.currentUser.email})})},methods:{pushProfileSavedMessage:function(){this.$bvToast.toast("Profile saved.",{variant:"success",solid:!0,toaster:"b-toaster-top-left",autoHideDelay:2e3,noCloseButton:!0})},goalName:function(e){if(this.workoutGoals){var t=this.workoutGoals.find(function(t){return t.id===parseInt(e,10)});if(t)return t.name}return""},levelName:function(e){if(this.workoutLevels){var t=this.workoutLevels.find(function(t){return t.id===parseInt(e,10)});if(t)return t.name}return""},saveProfile:function(){var e=this;this.users.forEach(function(t,r){t.id===e.currentDBUser.id&&(e.users[r]=e.currentDBUser)}),o.a.database().ref("users").set(this.users),this.pushProfileSavedMessage()}},watch:{"currentDBUser.level":function(e,t){t&&this.saveProfile()},"currentDBUser.goal":function(e,t){t&&this.saveProfile()}}},u=c,f=(r("5dc3"),r("2877")),v=Object(f["a"])(u,a,s,!1,null,"8d66d7a2",null);t["default"]=v.exports},eebd:function(e,t,r){}}]);