(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{400:function(e,t,s){},482:function(e,t,s){"use strict";var o=s(400);s.n(o).a},502:function(e,t,s){"use strict";s.r(t);s(94);var o=s(206),n=s(364),i=(s(451),s(452)),r=s(490),a=s(492),h=s(453),l=s(454),c=s(455),d=s(78),m=s(18),p=s.n(m),u=s(456),g={name:"Three",data:function(){return{threeId:"three-"+this._uid,camera:null,scene:null,renderer:null,object:null,manager:null,container:null,loadingInstance:null,stats:null,controls:null,resetDisply:0,autoRotateSpeed:-2,composer:null,composerParams:{enableComposer:!0,exposure:1,bloomStrength:.5,bloomThreshold:.4,bloomRadius:.8}}},props:{conf:{type:String,default:""},height:{type:String,default:"400px"},width:{type:String,default:"100%"}},watch:{autoRotateSpeed:function(){this.controls.autoRotateSpeed=this.autoRotateSpeed}},mounted:function(){this.init(),this.load(),this.animate()},methods:{init:function(){var e=this;this.container=document.getElementById(this.threeId),this.container.parentNode.style.height=this.height,this.height&&this.container.parentNode.setAttribute("height",this.height),this.width&&this.container.parentNode.setAttribute("width",this.width),window.onresize=function(){e.camera.aspect=e.container.clientWidth/e.container.clientHeight,e.camera.updateProjectionMatrix(),e.renderer.setSize(e.container.clientWidth,e.container.clientHeight),e.composer.setSize(e.container.clientWidth,e.container.clientHeight),e.renderer.render(e.scene,e.camera)},this.scene=new n.Scene;var t=new n.PointLight(16777215,1);t.position.set(10,0,0),this.scene.add(t);var s=new n.PointLight(16777215,1);s.position.set(-10,0,0),this.scene.add(s);var o=new n.AmbientLight(2236962);this.scene.add(o),this.camera=new n.PerspectiveCamera(50,this.container.clientWidth/this.container.clientHeight,.001,1e3),this.camera.position.set(2,0,0),this.camera.lookAt(this.scene.position),this.renderer=new n.WebGLRenderer({antialias:!0}),this.renderer.toneMapping=n.ACESFilmicToneMapping,this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setClearColor(0,1),this.renderer.render(this.scene,this.camera),this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.left="0px",this.renderer.domElement.style.top="0px",this.container.appendChild(this.renderer.domElement),this.manager=new n.LoadingManager((function(){e.post(),e.scene.add(e.object),e.renderer.render(e.scene,e.camera),e.stats.domElement.style.display="",e.loadingInstance.close()}),(function(e,t,s){var o=t/s*100;console.log(Math.round(o,2)+"% downloaded \n"+e)}),(function(e){console.log(e)})),this.manager.onStart=function(t,s,o){e.loadingInstance=d.Loading.service({target:e.container}),console.log("Started loading file: "+t+".\nLoaded "+s+" of "+o+" files.")}},load:function(){var e=this,t="/assets/model/",s=new l.a(this.manager);p.a.get(t+this.conf).then((function(n){var i=u.load(n.data),r=i.file,a=void 0===r?"RapberryPiZero.glb":r,h=i.type,l=void 0===h?"glTF":h,c=i.position,d=void 0===c?{x:0,y:0,z:0}:c,m=i.autoRotateSpeed,p=void 0===m?-2:m,g=Object(o.a)(i,["file","type","position","autoRotateSpeed"]);switch(g.enableComposer,e.composerParams.enableComposer=g.enableComposer,e.composerParams.exposure=g.exposure||e.composerParams.exposure,e.composerParams.bloomStrength=g.bloomStrength||e.composerParams.bloomStrength,e.composerParams.bloomThreshold=g.bloomThreshold||e.composerParams.bloomThreshold,e.composerParams.bloomRadius=g.bloomRadius||e.composerParams.bloomRadius,l){case"glTF":s.load(t+a,(function(t){console.log(t),e.object=t.scene,e.object.position.set(d.x,d.y,d.z),e.autoRotateSpeed=p}))}}))},post:function(){var e=this;this.controls=new n.OrbitControls(this.camera,this.renderer.domElement),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=this.autoRotateSpeed,this.controls.enableDamping=!0,this.controls.screenSpacePanning=!0,this.controls.saveState(),this.controls.update(),this.renderer.render(this.scene,this.camera);var t=new h.a(this.scene,this.camera),s=new a.a(new n.Vector2(this.container.clientWidth,this.container.clientHeight));s.threshold=this.composerParams.bloomThreshold,s.strength=this.composerParams.bloomStrength,s.radius=this.composerParams.bloomRadius,this.renderer.toneMappingExposure=Math.pow(this.composerParams.exposure,4),this.composer=new r.a(this.renderer),this.composer.addPass(t),this.composer.addPass(s),this.stats=new c.a,this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="0px",this.stats.domElement.style.top="0px",this.stats.domElement.style.zIndex="10",this.stats.domElement.style.width="1px",this.container.appendChild(this.stats.domElement);var o=new i.a({closeOnTop:!0,closed:!0});o.add(this.composerParams,"enableComposer").onChange((function(t){e.composerParams.enableComposer=t})),o.add(this.composerParams,"exposure",0,2).step(.01).onChange((function(t){e.renderer.toneMappingExposure=Math.pow(t,4)})),o.add(this.composerParams,"bloomStrength",0,3).step(.01).onChange((function(e){s.strength=Number(e)})),o.add(this.composerParams,"bloomThreshold",0,1).step(.01).onChange((function(e){s.threshold=Number(e)})),o.add(this.composerParams,"bloomRadius",0,1).step(.01).onChange((function(e){s.radius=Number(e)})),o.domElement.style.position="absolute",o.domElement.style.right="0px",o.domElement.style.top=this.height,o.domElement.style.zIndex="10",this.container.parentNode.appendChild(o.domElement),$(".close-button.close-top")[0].innerText="Open Controls"},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera);try{this.stats.update(),this.composerParams.enableComposer&&this.composer.render(),this.controls.update()}catch(e){}},FristClick:function(){this.autoRotateSpeed=0,this.resetDisply=1},Reset:function(){this.controls.reset(),this.resetDisply=0}}},b=(s(482),s(4)),f=Object(b.a)(g,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three"},[t("div",{staticClass:"three-control"},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.resetDisply,expression:"resetDisply"}],staticClass:"three-control-reset"},[t("el-button",{attrs:{plain:""},on:{click:this.Reset}},[this._v("重置视角")])],1)])],1),this._v(" "),t("div",{staticClass:"three-container",attrs:{id:this.threeId},on:{mousedown:this.FristClick,touchstart:this.FristClick}})])}),[],!1,null,null,null);t.default=f.exports}}]);