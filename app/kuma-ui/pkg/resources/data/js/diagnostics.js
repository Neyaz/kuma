(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["diagnostics"],{"1d10":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-frame"},[t._t("default")],2)},a=[],i={name:"FrameSkeleton"},r=i,c=(e("a948"),e("2877")),s=Object(c["a"])(r,o,a,!1,null,"666bca0e",null);n["a"]=s.exports},"38ba":function(t,n,e){},"413e":function(t,n,e){"use strict";e("d4e6")},"94b6":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"local-cps"},[e("page-header",{attrs:{noflex:""}},[e("h2",{staticClass:"type-xxl"},[t._v(" "+t._s(t.pageTitle)+" ")])]),e("FrameSkeleton",{staticClass:"py-2 px-4"},[t.isReady?e("KCard",{attrs:{"border-variant":"noBorder"},scopedSlots:t._u([{key:"body",fn:function(){return[e("Prism",{staticClass:"code-block",attrs:{language:"json",code:t.codeOutput}})]},proxy:!0},{key:"actions",fn:function(){return[t.codeOutput?e("KClipboardProvider",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.copyToClipboard;return[e("KPop",{attrs:{placement:"bottom"},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",[e("p",[t._v("Config copied to clipboard!")])])]},proxy:!0}],null,!0)},[e("KButton",{attrs:{appearance:"primary"},on:{click:function(){o(t.codeOutput)}}},[t._v(" Copy config to clipboard ")])],1)]}}],null,!1,539602587)}):t._e()]},proxy:!0}],null,!1,2801337773)}):t._e(),t.isLoading||t.hasError?e("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"card-icon mb-3"},[t.icon?e("KIcon",{staticClass:"kong-icon--centered",attrs:{color:t.iconColor,icon:t.icon,size:"42"}}):t._e()],1),t.isLoading?e("span",[t._v(" Data Loading... ")]):t.hasError?e("span",[t._v(" An error has occurred while trying to load this data. ")]):t._e()]},proxy:!0}],null,!1,490340815)}):t._e()],1)],1)},a=[],i=(e("d3b7"),e("f3f3")),r=e("2f62"),c=e("2ccf"),s=e.n(c),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"page-header",class:{"flex justify-between items-center my-6":!t.noflex}},[t._t("default")],2)},l=[],f={name:"PageHeader",props:{noflex:{type:Boolean,default:!1}}},d=f,p=(e("e234"),e("2877")),h=Object(p["a"])(d,u,l,!1,null,null,null),g=h.exports,m=e("1d10"),b={name:"Diagnostics",metaInfo:{title:"Diagnostics"},components:{PageHeader:g,FrameSkeleton:m["a"],Prism:s.a},data:function(){return{isLoading:!0,hasError:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(r["c"])({config:"config/getConfig"})),{},{icon:function(){return this.isLoading?"spinner":!!this.hasError&&"warning"},iconColor:function(){return this.hasError?"var(--yellow-200)":"#ccc"},isReady:function(){return!this.hasError&&!this.isLoading},pageTitle:function(){var t=this.$route.meta.title;return t},codeOutput:function(){var t=this.config;return JSON.stringify(t,null,2)}}),beforeMount:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.config?setTimeout((function(){t.isLoading=!1}),"500"):this.$store.dispatch("getConfig").catch((function(n){t.hasError=!0,console.log(n)})).finally((function(){setTimeout((function(){t.isLoading=!1}),"500")}))}}},y=b,_=(e("413e"),Object(p["a"])(y,o,a,!1,null,"eb92f756",null));n["default"]=_.exports},a948:function(t,n,e){"use strict";e("f9f3")},d4e6:function(t,n,e){},e234:function(t,n,e){"use strict";e("38ba")},f9f3:function(t,n,e){}}]);