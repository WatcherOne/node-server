(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"076e":function(t,e,n){"use strict";var r=n("f2bf"),c={class:"footer"},a=Object(r["h"])("主页"),o=Object(r["h"])("搜索"),i=Object(r["h"])("用户"),u=Object(r["h"])("设置");function f(t,e,n,f,b,s){var d=Object(r["F"])("van-tabbar-item"),O=Object(r["F"])("van-tabbar");return Object(r["x"])(),Object(r["g"])("div",c,[Object(r["i"])(O,{modelValue:f.active,"onUpdate:modelValue":e[1]||(e[1]=function(t){return f.active=t}),route:""},{default:Object(r["O"])((function(){return[Object(r["i"])(d,{to:"/home",icon:"home-o"},{default:Object(r["O"])((function(){return[a]})),_:1}),Object(r["i"])(d,{to:"/about",icon:"search"},{default:Object(r["O"])((function(){return[o]})),_:1}),Object(r["i"])(d,{icon:"friends-o"},{default:Object(r["O"])((function(){return[i]})),_:1}),Object(r["i"])(d,{icon:"setting-o"},{default:Object(r["O"])((function(){return[u]})),_:1})]})),_:1},8,["modelValue"])])}n("a9e3");var b={name:"Footer",props:{tab:{type:Number,default:0}},setup:function(t){var e=Object(r["C"])(t.tab);return{active:e}}};b.render=f;e["a"]=b},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),c=n("5899"),a="["+c+"]",o=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"67f7":function(t,e,n){},7156:function(t,e,n){var r=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var a,o;return c&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&c(t,o),t}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),c=n("da84"),a=n("94ca"),o=n("6eeb"),i=n("5135"),u=n("c6b6"),f=n("7156"),b=n("c04e"),s=n("d039"),d=n("7c73"),O=n("241c").f,p=n("06cf").f,l=n("9bf2").f,j=n("58a8").trim,v="Number",h=c[v],I=h.prototype,N=u(d(I))==v,g=function(t){var e,n,r,c,a,o,i,u,f=b(t,!1);if("string"==typeof f&&f.length>2)if(f=j(f),e=f.charCodeAt(0),43===e||45===e){if(n=f.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+f}for(a=f.slice(2),o=a.length,i=0;i<o;i++)if(u=a.charCodeAt(i),u<48||u>c)return NaN;return parseInt(a,r)}return+f};if(a(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var m,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(N?s((function(){I.valueOf.call(n)})):u(n)!=v)?f(new h(g(e)),n,_):g(e)},E=r?O(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;E.length>F;F++)i(h,m=E[F])&&!i(_,m)&&l(_,m,p(h,m));_.prototype=I,I.constructor=_,o(c,v,_)}},bb51:function(t,e,n){"use strict";n.r(e);var r=n("f2bf"),c=Object(r["R"])("data-v-a381df28");Object(r["A"])("data-v-a381df28");var a={class:"home"},o=Object(r["i"])("div",{class:"text"},"Home Page",-1),i=Object(r["i"])("div",null,"这是默认字体大小(24px), 上是 font 16 大小的",-1),u=Object(r["h"])("跳转主页");Object(r["y"])();var f=c((function(t,e,n,f,b,s){var d=Object(r["F"])("van-button"),O=Object(r["F"])("Footer");return Object(r["x"])(),Object(r["g"])("div",a,[o,i,Object(r["i"])(d,{onClick:f.goto,type:"primary"},{default:c((function(){return[u]})),_:1},8,["onClick"]),Object(r["i"])(O,{tab:f.tab},null,8,["tab"])])})),b=n("076e"),s={components:{Footer:b["a"]},setup:function(){var t=Object(r["k"])(),e=t.ctx,n=Object(r["C"])(1),c=function(){e.$router.push("/about")};return{tab:n,goto:c}}};n("dba5");s.render=f,s.__scopeId="data-v-a381df28";e["default"]=s},dba5:function(t,e,n){"use strict";n("67f7")}}]);