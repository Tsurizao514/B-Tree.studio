(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,n,e){"use strict";e.r(n);var o=e(218),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n.default=r.a},218:function(t,n,e){e(13),fetch("https://v1.hitokoto.cn").then((function(t){return t.json()})).then((function(t){var n=document.getElementById("hitokoto"),e=document.getElementById("from"),o=document.getElementById("from_who");n.innerText=t.hitokoto,e.innerText=t.from,o.innerText=t.from_who,console.log(t)})).catch((function(t){return console.error(t)}))},279:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"theme-container"},[e("div",{staticClass:"theme-default-content"},[e("h1",[t._v("404")]),t._v(" "),t._m(0),t._v(" "),e("RouterLink",{attrs:{to:"/"}},[e("h4",{staticStyle:{"font-weight":"400"}},[t._v("回到主页")])]),t._v(" "),e("hr"),t._v(" "),t._m(1)],1),t._v(" "),e("div",{staticClass:"theme-default-content"},[e("Vssue",{attrs:{title:"404"}})],1)])},r=[function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("h3",{staticStyle:{"font-weight":"400"},attrs:{id:"hitokoto"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("h4",[this._v("\n      ——\n      "),n("span",{attrs:{id:"from_who"}}),this._v("\n      《\n      "),n("span",{attrs:{id:"from"}}),this._v(" 》｜ 一言 ｜ by hitokoto.cn\n    ")])}];e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}))},280:function(t,n,e){"use strict";e.r(n);var o=e(279),r=e(217);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);var c=e(12),s=Object(c.a)(r.default,o.a,o.b,!1,null,null,null);n.default=s.exports}}]);