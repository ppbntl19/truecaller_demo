(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={app:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/truecaller_demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("a026"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header",{attrs:{msg:"TrueCaller"}}),s("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[s("b-navbar-brand",{attrs:{href:"/"}},[t._v("Truecaller")])],1)],1)},i=[],c={name:"Header"},l=c,u=s("2877"),d=Object(u["a"])(l,o,i,!1,null,null,null),f=d.exports,p={name:"app",components:{Header:f}},b=p,h=(s("034f"),Object(u["a"])(b,r,n,!1,null,null,null)),m=h.exports,g=s("8c4f"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.posts.length?t._e():s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("b-spinner",{attrs:{label:"Loading..."}})],1),t.msg?s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(t._s(t.msg))])]):t._e(),t._l(t.posts,(function(e){return s("div",{key:e.id},[s("div",[s("b-card",{attrs:{"border-variant":"light",align:"left",title:e.title,"sub-title":e.date_from_now,"sub-title-text-variant":"muted"}},[s("small",{staticClass:"divider"},[t._v(t._s(e.date_created))]),s("br"),s("a",{attrs:{href:"#"}},[s("span",{staticClass:"glyphicon glyphicon-thumbs-up"},[t._v(t._s(e.like_count)+" likes")])]),s("h5",{staticClass:"text-muted"},[s("small",[t._v("Posted By")]),s("b-link",{attrs:{href:e.profile_URL}},[t._v(t._s(e.author_name))])],1),s("router-link",{staticClass:"text-decoration-none",attrs:{to:{path:"post/"+e.id,query:{id:e.id,slug:e.slug}}}},[s("b-card-text",{domProps:{innerHTML:t._s(e.excerpt)}}),s("b-card",{attrs:{"img-height":"350px","img-src":e.post_thumbnail,"img-alt":"Card image","img-top":""}})],1)],1)],1),s("br")])})),s("br"),s("div",{staticClass:"mt-3"},[s("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.per_page,size:"lg"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],2)},_=[],v=(s("b0c0"),s("159b"),s("bc3a")),y=s.n(v),k=s("c1df"),w=s.n(k),P={name:"Posts",data:function(){return{postsUrl:"https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts",posts:[],tag:"",category:"",per_page:25,rows:"",currentPage:1,msg:""}},mounted:function(){this.getPosts()},watch:{currentPage:{handler:function(){this.getPosts()}},$route:function(){this.getPosts()}},methods:{getPosts:function(){var t=this;y.a.get(this.postsUrl,{params:{order:"DESC",page:this.currentPage,number:this.per_page,tag:this.$route.query.tag,category:this.$route.query.category}}).then((function(e){try{if(t.posts=[],e.data.posts&&0===e.data.posts.length)return void(t.msg="Posts not found.");e.data.posts.forEach((function(e){t.posts.push({id:e.ID,author_name:e.author&&e.author.name,profile_URL:e.author&&e.author.profile_URL,date_from_now:w()(e.date).startOf("hour").fromNow(),date_created:w()(e.date).format("MMMM Do YYYY, h:mm:ss a"),title:e.title,url:e.URL,slug:e.slug,excerpt:e.excerpt,like_count:e.like_count,post_thumbnail:e.post_thumbnail&&e.post_thumbnail.URL})})),t.rows=e.data.found}catch(s){t.msg="Technical error .Please try again."}})).catch((function(e){t.msg=e}))}}},x=P,C=Object(u["a"])(x,j,_,!1,null,null,null),O=C.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.post?t._e():s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("b-spinner",{attrs:{label:"Loading... "}})],1),t.msg?s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(t._s(t.msg))])]):t._e(),t.post?s("div",[s("b-card",{attrs:{"border-variant":"light",align:"left",title:t.post.title,"sub-title":t.post.date_from_now,"sub-title-text-variant":"muted"}},[s("small",{staticClass:"divider"},[t._v(t._s(t.post.date_created))]),s("br"),s("a",{attrs:{href:"#"}},[s("span",{staticClass:"glyphicon glyphicon-thumbs-up"},[t._v(t._s(t.post.like_count)+" likes")])]),s("h3",[t._v(" Posted By "),s("b-link",{attrs:{href:t.post.author&&t.post.author.profile_URL}},[t._v(t._s(t.post.author&&t.post.author.name))])],1),s("b-card",{attrs:{"img-src":t.post.featured_image,"img-alt":"Card image","img-top":""}}),s("b-card-text",{domProps:{innerHTML:t._s(t.post.content)}})],1)],1):t._e(),s("br")])},T=[],U={name:"Post",data:function(){return{postUrl:"https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/",post:"",msg:""}},props:["id","title"],mounted:function(){this.getPost()},watch:{$route:function(){this.getPost()}},methods:{getPost:function(){var t=this;y.a.get(this.postUrl+this.$route.params.id,{params:{}}).then((function(e){try{if(e.data.error)return void(t.msg="Post not found.");t.post=e.data,t.post.date_from_now=w()(t.post.date).startOf("hour").fromNow(),t.post.date_created=w()(t.post.date).format("MMMM Do YYYY, h:mm:ss a")}catch(s){t.msg="Technical error .Please try again."}})).catch((function(e){t.msg=e}))}}},M=U,$=Object(u["a"])(M,z,T,!1,null,null,null),E=$.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",[s("b-col",{attrs:{cols:"8"}},[s("router-view")],1),s("b-col",{attrs:{cols:"4"}},[t.$route.params.id?s("b-row",[s("hr"),s("hr"),s("b-col",{attrs:{cols:"12"}},[s("RelatedPosts")],1)],1):t._e(),s("hr"),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("Tags")],1)],1),s("hr"),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("Categories")],1)],1)],1)],1)],1)},D=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.categories.length?t._e():s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("b-spinner",{attrs:{label:"Loading..."}})],1),s("h2",[t._v("Categories")]),t._l(t.categories,(function(e){return s("b-list-group",{key:e.ID},[s("router-link",{attrs:{replace:"",to:{path:"/posts",query:{name:e.name,category:e.slug,id:e.id,title:e.title}}}},[s("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" "+t._s(e.name)+" "),s("b-badge",{attrs:{variant:"primary",pill:""}},[t._v(t._s(e.post_count))])],1)],1)],1)}))],2)},S=[],q={name:"Categories",data:function(){return{postsUrl:"https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories",categories:[],per_page:10}},mounted:function(){this.getCategories()},methods:{getCategories:function(){var t=this;y.a.get(this.postsUrl,{params:{number:this.per_page}}).then((function(e){t.categories=e.data.categories}))}},created:function(){}},H=q,Y=Object(u["a"])(H,R,S,!1,null,null,null),I=Y.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.tags.length?t._e():s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("b-spinner",{attrs:{label:"Loading..."}})],1),s("h4",[t._v("Popular Tags")]),t._l(t.tags,(function(e){return s("label",{key:e.ID},[s("router-link",{attrs:{to:{path:"/posts",query:{name:e.name,tag:e.slug,id:e.id,title:e.title}}}},[s("b-badge",{attrs:{variant:"secondary"}},[t._v(t._s(e.name)+" "+t._s(e.post_count))])],1)],1)}))],2)},A=[],B={name:"Tags",data:function(){return{postsUrl:"https://public-api.wordpress.com/rest/v1.1/sites/107403796/tags",tags:[],per_page:10}},mounted:function(){this.getTags()},methods:{getTags:function(){var t=this;y.a.get(this.postsUrl,{params:{order:"DESC",order_by:"count",number:this.per_page}}).then((function(e){t.tags=e.data.tags}))}},created:function(){}},G=B,J=Object(u["a"])(G,N,A,!1,null,null,null),F=J.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.posts.length?t._e():s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("b-spinner",{attrs:{label:"Loading..."}})],1),s("h4",[t._v("Related Posts")]),t._l(t.posts,(function(e){return s("div",{key:e.id},[s("div",[s("router-link",{staticClass:"text-decoration-none",attrs:{to:{path:"/post/"+e.id,query:{id:e.id,slug:e.slug}}}},[s("b-card-text",{domProps:{innerHTML:t._s(e.title)}})],1)],1),s("br")])})),s("br")],2)},Q=[],V={name:"RelatedPosts",data:function(){return{postsUrl:"https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts",posts:[],per_page:3,msg:""}},mounted:function(){this.getPosts()},watch:{$route:function(){this.getPosts()}},methods:{getPosts:function(){var t=this;y.a.get(this.postsUrl,{params:{order:"DESC",number:this.per_page,term:this.$route.query.slug}}).then((function(e){try{t.posts=[],e.data.posts.forEach((function(e){t.posts.push({id:e.ID,title:e.title,slug:e.slug})}))}catch(s){t.msg="Technical error .Please try again."}})).catch((function(e){t.msg=e}))}}},W=V,X=Object(u["a"])(W,K,Q,!1,null,null,null),Z=X.exports,tt={name:"Home",components:{Categories:I,Tags:F,RelatedPosts:Z}},et=tt,st=Object(u["a"])(et,L,D,!1,null,null,null),at=st.exports;a["default"].use(g["a"]);var rt=new g["a"]({routes:[{path:"/",name:"Home",component:at,children:[{path:"/",component:O},{path:"posts",component:O},{path:"/post/:id",component:E}]},{path:"*",redirect:"/"}]}),nt=s("5f5b");s("f9e3"),s("2dd8");a["default"].use(nt["a"]),a["default"].config.productionTip=!1,new a["default"]({el:"#app",router:rt,components:{App:m},template:"<App/>"})},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.9dba90af.js.map