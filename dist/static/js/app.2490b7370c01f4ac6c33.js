webpackJsonp([1],{"7zck":function(t,e){},"FU5/":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={data:function(){return{icons:[{value:"fab fa-github",url:"https://github.com/orgs/BantuLab"},{value:"fab fa-slack",url:"http://bit.ly/BantuLabTechSlack"},{value:"fab fa-facebook",url:"https://www.facebook.com/bantulabtech"},{value:"fab fa-youtube",url:"https://www.youtube.com/channel/UCPPRevmNDyxmMshNIEgpodw"},{value:"fab fa-instagram",url:"https://www.instagram.com/bantulabtech"},{value:"fab fa-twitter",url:"https://www.twitter.com/bantulabtech"}]}},methods:{},computed:{year:function(){return(new Date).getFullYear()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"indigo lighten-1 white--text text-xs-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,function(e){return a("v-btn",{key:e.value,staticClass:"mx-3 white--text",attrs:{href:e.url,target:"_blank",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.value))])],1)})),t._v(" "),a("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n             BantuLab is a Technology Innovation Lab, providing free access to Quick Start Innovation Toolkits(QSIT), Immersive Technology Bootcamps(ITB), co-working space, and access to technical mentor-ship with an immersive tech saavy community! "),a("br"),t._v("\n             We are passionate about what we do and belive in optimizing for productivity to the best fit of all your creative ideas and innovations! "),a("br"),a("br"),t._v(" "),a("p",[a("a",{staticClass:"white--text",attrs:{href:"https://bantulabtech.slack.com",target:"_blank"}},[t._v("Get creative and join us now!")])])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"white--text"},[t._v("\n      ©"+t._s(t.year)+" — "),a("strong",[t._v("BantuLab, Inc.")])])],1)],1)},staticRenderFns:[]},o={data:function(){return{clipped:!1,drawer:!0,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"BantuLabTech"}},name:"App",components:{Footer:a("VU/8")(r,i,!1,null,null,null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-toolbar",{attrs:{app:""}},[e("div",{staticClass:"container"},[e("span"),e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("\n      BantuLabTech\n      ")])],1)]),this._v(" "),e("v-content",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]},c=a("VU/8")(o,s,!1,null,null,null).exports,l=a("/ocq"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("h1",[this._v("Welcome to BantuLab Technology Innovation Lab")]),this._v(" "),e("v-btn",{staticClass:"primary",attrs:{to:{name:"register-member"}}},[this._v("\n        Register as a member!\n    ")])],1)},staticRenderFns:[]},v=a("VU/8")({data:function(){return{title:"Home"}},name:"Home",components:{}},u,!1,null,null,null).exports,d={render:function(t,e){var a=e._c;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",{staticClass:"red darken-3 white--text subheading",attrs:{"primary-title":""}},[a("span",{staticClass:"title"},[e._v("Oops!")])]),e._v(" "),a("v-card-text",[e._v("\n          Looks like you're in uncharted territory! We don't know about this page yet.\n          Luckily, we know the way back!\n        ")]),e._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"red darken-3 white--text",attrs:{flat:"",to:"/"}},[e._v("Back")])],1)],1)],1)],1)],1)},staticRenderFns:[]},h=a("VU/8")(null,d,!0,null,null,null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("iframe",{attrs:{id:"googleform",src:"https://docs.google.com/forms/d/e/1FAIpQLSfbUoqSCSqdPwOSd4Su4Q_5vk9TTSZf5n0VN91di6k2C2aDkQ/viewform?embedded=true",frameborder:"0",marginheight:"0",marginwidth:"0"}},[this._v("Loading...")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Home")])],1)},staticRenderFns:[]};var p=a("VU/8")(null,m,!1,function(t){a("FU5/")},"data-v-378f6090",null).exports;n.default.use(l.a);var f=new l.a({routes:[{path:"/",name:"home",component:v},{path:"/register",name:"register-member",component:p},{path:"*",component:h}]}),b=a("3EgV"),w=a.n(b);a("7zck");n.default.use(w.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:f,components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.2490b7370c01f4ac6c33.js.map