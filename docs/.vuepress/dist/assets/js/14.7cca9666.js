(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{221:function(t,i,s){"use strict";var a=s(1),n=s(83).trim;a({target:"String",proto:!0,forced:s(222)("trim")},{trim:function(){return n(this)}})},222:function(t,i,s){var a=s(4),n=s(84);t.exports=function(t){return a((function(){return!!n[t]()||"​᠎"!="​᠎"[t]()||n[t].name!==t}))}},235:function(t,i,s){},280:function(t,i,s){"use strict";var a=s(235);s.n(a).a},295:function(t,i,s){"use strict";s.r(i);s(41),s(23),s(57),s(138),s(221);var a={name:"BTreer",data:function(){return{BTreerId:"BTreerId"+this._uid,img_file:"",name:"",position:"",location:"",lang:"",qq:"",qqlink:""}},props:{data:{type:String,default:""}},methods:{},mounted:function(){var t=this.data.trim().split(/\s+/);this.name=t[0],this.img_file=t[1],this.position=t[2],this.location=t[3],this.lang=t[4].replace(/,/g," | "),this.qq=t[5],this.qqlink="http://wpa.qq.com/msgrd?v=3&uin="+this.qq+"&site=qq&menu=yes"}},n=(s(280),s(12)),r=Object(n.a)(a,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"BTreer",attrs:{id:t.BTreerId}},[s("div",{staticClass:"BTreer-img"},[s("img",{attrs:{src:t.img_file,alt:t.name}})]),t._v(" "),s("div",{staticClass:"BTreer-word"},[s("h3",[t._v(t._s(t.name))]),t._v(" "),s("p",[s("i",{staticClass:"fas fa-briefcase"}),t._v(" "+t._s(t.position)+" @ B-Tree Design\n      Studio\n    ")]),t._v(" "),s("p",[s("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" "+t._s(t.location))]),t._v(" "),s("p",[s("i",{staticClass:"fas fa-globe-asia"}),t._v(" "+t._s(t.lang))]),t._v(" "),s("p",[s("a",{attrs:{href:t.qqlink,target:"_blank"}},[s("i",{staticClass:"fab fa-qq"}),t._v("\n         "+t._s(t.qq)+"\n        "),s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])])])}),[],!1,null,null,null);i.default=r.exports}}]);