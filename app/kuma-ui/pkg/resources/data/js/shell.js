(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shell"],{"0f12":function(e,t,i){},"1b4f":function(e,t,i){},"2d5d":function(e,t,i){"use strict";i("93dc")},"2ee4":function(e,t,i){"use strict";i("0f12")},"3d2f":function(e,t,i){"use strict";i("8111")},"3ddf":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{class:e.accordionItemClasses},[i("button",{staticClass:"accordion-item-header",attrs:{"aria-expanded":e.visible},on:{click:e.open}},[e._t("accordion-header")],2),i("transition",{attrs:{name:"accordion"},on:{enter:e.start,"after-enter":e.end,"before-leave":e.start}},[e.visible?i("div",{staticClass:"px-4"},[e._t("accordion-content")],2):e._e()])],1)},s=[],a=(i("caad"),i("c975"),i("a434"),i("2532"),{name:"AccordionItem",inject:["parentAccordion"],data:function(){return{index:null}},computed:{visible:function(){return this.parentAccordion.multipleOpen?this.parentAccordion.active.includes(this.index):this.index===this.parentAccordion.active},accordionItemClasses:function(){return["relative border-b py-2",{active:this.visible}]}},created:function(){this.index=this.parentAccordion.count++},methods:{hideItem:function(){this.parentAccordion.multipleOpen?this.parentAccordion.active.splice(this.parentAccordion.active.indexOf(this.index),1):this.parentAccordion.active=null},showItem:function(){this.parentAccordion.multipleOpen?this.parentAccordion.active.push(this.index):this.parentAccordion.active=this.index},open:function(){this.visible?this.hideItem():this.showItem()},start:function(e){e.style.height="".concat(e.scrollHeight,"px")},end:function(e){e.style.height="auto"}}}),o=a,r=(i("9cd3"),i("2877")),c=Object(r["a"])(o,n,s,!1,null,"6f89660e",null);t["a"]=c.exports},"42e7":function(e,t,i){"use strict";i("45cc")},"45cc":function(e,t,i){},"49d2":function(e,t,i){"use strict";i("c03c")},"506f":function(e,t,i){"use strict";i("7590")},"520d":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"accordion"},[e._t("default")],2)},s=[],a=(i("a9e3"),{name:"Accordion",props:{initiallyOpen:{type:[Number,Array],default:null},multipleOpen:{type:Boolean,default:!1}},data:function(){var e;return e=null!==this.initiallyOpen?this.initiallyOpen:this.multipleOpen?[]:null,{parentAccordion:{count:0,active:e,multipleOpen:this.multipleOpen}}},provide:function(){return{parentAccordion:this.parentAccordion}}}),o=a,r=(i("2ee4"),i("2877")),c=Object(r["a"])(o,n,s,!1,null,"790cd898",null);t["a"]=c.exports},"55b3":function(e,t,i){"use strict";i("1b4f")},"5f76":function(e,t,i){},"65f1":function(e,t,i){"use strict";i("ab9d")},"66b4":function(e,t,i){},7148:function(e,t,i){"use strict";i("66b4")},7590:function(e,t,i){},"75bb":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var n={PAGINATION_PREVIOUS_BUTTON_CLICKED:"pagination-previous-button-clicked",PAGINATION_NEXT_BUTTON_CLICKED:"pagination-next-button-clicked",SIDEBAR_ITEM_CLICKED:"sidebar-item-clicked",TABLE_REFRESH_BUTTON_CLICKED:"table-refresh-button-clicked",TABS_TAB_CHANGE:"tabs-tab-change",CREATE_MESH_CLICKED:"create-mesh-clicked",CREATE_DATA_PLANE_PROXY_CLICKED:"create-data-plane-proxy-clicked"}},8111:function(e,t,i){},"857a":function(e,t,i){var n=i("1d80"),s=/"/g;e.exports=function(e,t,i,a){var o=String(n(e)),r="<"+t;return""!==i&&(r+=" "+i+'="'+String(a).replace(s,"&quot;")+'"'),r+">"+o+"</"+t+">"}},"93dc":function(e,t,i){},9911:function(e,t,i){"use strict";var n=i("23e7"),s=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(e){return s(this,"a","href",e)}})},"9cd3":function(e,t,i){"use strict";i("e593")},a434:function(e,t,i){"use strict";var n=i("23e7"),s=i("23cb"),a=i("a691"),o=i("50c4"),r=i("7b0b"),c=i("65f0"),l=i("8418"),u=i("1dde"),d=i("ae40"),m=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m||!h},{splice:function(e,t){var i,n,u,d,m,h,g=r(this),_=o(g.length),y=s(e,_),C=arguments.length;if(0===C?i=n=0:1===C?(i=0,n=_-y):(i=C-2,n=p(f(a(t),0),_-y)),_+i-n>v)throw TypeError(b);for(u=c(g,n),d=0;d<n;d++)m=y+d,m in g&&l(u,d,g[m]);if(u.length=n,i<n){for(d=y;d<_-n;d++)m=d+n,h=d+i,m in g?g[h]=g[m]:delete g[h];for(d=_;d>_-n+i;d--)delete g[d-1]}else if(i>n)for(d=_-n;d>y;d--)m=d+n-1,h=d+i-1,m in g?g[h]=g[m]:delete g[h];for(d=0;d<i;d++)g[d+y]=arguments[d+2];return g.length=_-n+i,u}})},a9e3:function(e,t,i){"use strict";var n=i("83ab"),s=i("da84"),a=i("94ca"),o=i("6eeb"),r=i("5135"),c=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),m=i("7c73"),h=i("241c").f,f=i("06cf").f,p=i("9bf2").f,v=i("58a8").trim,b="Number",g=s[b],_=g.prototype,y=c(m(_))==b,C=function(e){var t,i,n,s,a,o,r,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=v(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+l}for(a=l.slice(2),o=a.length,r=0;r<o;r++)if(c=a.charCodeAt(r),c<48||c>s)return NaN;return parseInt(a,n)}return+l};if(a(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,A=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof A&&(y?d((function(){_.valueOf.call(i)})):c(i)!=b)?l(new g(C(t)),i,A):C(t)},I=n?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;I.length>O;O++)r(g,k=I[O])&&!r(A,k)&&p(A,k,f(g,k));A.prototype=_,_.constructor=A,o(s,b,A)}},ab9d:function(e,t,i){},af03:function(e,t,i){var n=i("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},c03c:function(e,t,i){},deb3:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-content-container"},[i("Sidebar"),i("main",{staticClass:"main-content"},[i("div",{staticClass:"page"},[i("NotificationManager"),e.showOnboarding?i("OnboardingNotification"):e._e(),i("Breadcrumbs"),i("router-view")],1)])],1)},s=[],a=i("f3f3"),o=i("2f62"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{staticClass:"has-subnav",class:[{"is-collapsed":e.isCollapsed},{"subnav-expanded":e.subnavIsExpanded}],attrs:{id:"the-sidebar"}},[i("div",{ref:"sidebarControl",staticClass:"main-nav",class:{"is-hovering":e.isHovering||!1===e.subnavIsExpanded}},[i("div",{staticClass:"top-nav"},e._l(e.titleNavItems,(function(t,n){return i("NavItem",e._b({key:n,attrs:{"has-custom-icon":""},nativeOn:{click:function(t){return e.toggleSubnav(t)}},scopedSlots:e._u([t.iconCustom&&!t.icon?{key:"item-icon",fn:function(){return[i("div",{domProps:{innerHTML:e._s(t.iconCustom)}})]},proxy:!0}:null],null,!0)},"NavItem",t,!1))})),1),i("div",{staticClass:"bottom-nav"},e._l(e.bottomNavItems,(function(t,n){return i("NavItem",e._b({key:n,attrs:{"has-icon":""}},"NavItem",t,!1))})),1)]),e.subnavIsExpanded?i("Subnav",{attrs:{title:e.titleNavItems[0].name,"title-link":e.titleNavItems[0].link,items:e.topNavItems},scopedSlots:e._u([{key:"top",fn:function(){return[i("MeshSelector",{attrs:{items:e.meshList}})]},proxy:!0}],null,!1,546986014)}):e._e()],1)},c=[],l=(i("7db0"),i("b0c0"),i("b64b"),i("9911"),i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),i("dde1"));function u(e,t){var i;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=Object(l["a"])(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,r=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){r=!0,a=e},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(r)throw a}}}}var d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"nav-item",class:[{"is-active":e.isActive},{"is-menu-item":e.isMenuItem},{"is-disabled":e.isDisabled},{"is-title":e.title},{"is-nested":e.nested}],attrs:{"data-testid":e.link}},[i("router-link",{attrs:{to:e.routerLink},nativeOn:{click:function(t){return e.onNavItemClick(t)}}},[e.hasIcon||e.hasCustomIcon?i("div",{staticClass:"nav-icon"},[e._t("item-icon",[e.hasIcon&&e.icon?i("KIcon",{attrs:{width:"18",height:"18","view-box":"0 0 18 18",color:"var(--SidebarIconColor)",icon:e.icon}}):e._e()])],2):e._e(),e.title?i("div",{staticClass:"title-text"},[i("span",{staticClass:"text-uppercase"},[e._v(" "+e._s(e.name)+" ")])]):i("div",{staticClass:"nav-link"},[e._t("item-link",[e._v(" "+e._s(e.name)+" "),e.insightsFieldAccessor?i("span",{class:e.insightsClassess},[e._v(" "+e._s(e.amount)+" ")]):e._e()])],2)])],1)},m=[],h=(i("45fc"),i("ac1f"),i("1276"),i("9b02")),f=i.n(h),p=i("027b"),v=i("75bb"),b={name:"NavItem",props:{link:{type:String,default:"",required:!1},insightsFieldAccessor:{type:String,default:"",required:!1},name:{type:String,default:""},icon:{type:String,default:""},hasIcon:{type:Boolean,default:!1},hasCustomIcon:{type:Boolean,default:!1},isMenuItem:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},title:{type:Boolean,default:!1},nested:{type:Boolean,default:!1}},data:function(){return{meshPath:null}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["c"])({selectedMesh:"getSelectedMesh"})),Object(o["d"])("sidebar",{insights:function(e){return e.insights}})),{},{insightsClassess:function(){return["amount",{"amount--empty":0===this.amount}]},amount:function(){var e=f()(this.insights,this.insightsFieldAccessor,0);return e>99?"99+":e},routerLink:function(){var e=this,t={mesh:this.selectedMesh},i=function(){return e.link?{name:e.link,params:t}:e.title?{name:null}:{name:e.$route.name,params:t}};return i()},isActive:function(){var e=this.link,t=this.$route,i=this.$route.path.split("/")[2];return e===t.name||(i===this.routerLink.name||e&&t.matched.some((function(t){return e===t.name||e===t.redirect})))}}),methods:{onNavItemClick:function(){p["a"].logger.info(v["a"].SIDEBAR_ITEM_CLICKED,{data:this.routerLink})}}},g=b,_=(i("3d2f"),i("55b3"),i("2877")),y=Object(_["a"])(g,d,m,!1,null,"33712330",null),C=y.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"secondary-nav",class:{"is-collapsed":e.isCollapsed}},[i("div",{staticClass:"mt-3"},[e._t("top")],2),i("div",{staticClass:"subnav-title"},[i("span",{staticClass:"text-uppercase"},[e._t("title",[i("router-link",{attrs:{to:{name:e.titleLink}}},[e._v(" "+e._s(e.title)+" ")])])],2)]),e._t("bottom"),e._l(e.items,(function(t,n){return i("NavItem",e._b({key:n},"NavItem",t,!1))}))],2)},A=[],I={name:"SubNav",components:{NavItem:C},props:{title:{type:String,default:""},items:{type:Array,required:!0},titleLink:{type:String,default:""}},data:function(){return{isCollapsed:!1}},computed:{touchDevice:function(){return!(!("ontouchstart"in window)&&!navigator.maxTouchPoints)}},methods:{handleToggle:function(){this.touchDevice&&(this.isCollapsed=!this.isCollapsed,this.$emit("toggled",this.isCollapsed))}}},O=I,M=(i("49d2"),i("42e7"),Object(_["a"])(O,k,A,!1,null,"498fee1d",null)),x=M.exports,N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"px-4 pb-4"},[e.items?i("div",[i("h3",{staticClass:"menu-title uppercase"},[e._v(" Filter by Mesh: ")]),i("select",{staticClass:"mesh-selector",attrs:{id:"mesh-selector",name:"mesh-selector"},on:{change:e.changeMesh}},[i("option",{attrs:{value:"all"},domProps:{selected:"all"===e.selectedMesh}},[e._v(" All Meshes ")]),e._l(e.items.items,(function(t){return i("option",{key:t.name,domProps:{value:t.name,selected:t.name===e.selectedMesh}},[e._v(" "+e._s(t.name)+" ")])}))],2)]):i("KAlert",{attrs:{appearance:"danger","alert-message":"No meshes found!"}})],1)},S=[],j={name:"MeshSelector",props:{items:{type:Object,required:!0}},computed:Object(a["a"])({},Object(o["c"])({selectedMesh:"getSelectedMesh"})),methods:{changeMesh:function(e){var t=e.target.value;this.$store.dispatch("updateSelectedMesh",t),localStorage.setItem("selectedMesh",t),this.$router.push({params:{mesh:t}}).catch((function(){}))}}},E=j,T=(i("e66f"),Object(_["a"])(E,N,S,!1,null,"05c44f04",null)),w=T.exports,B=(i("99af"),i("d0ff")),L='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19"><g fill="none" fill-rule="evenodd" transform="translate(1)"><path stroke="#1456CB" stroke-opacity=".4" stroke-width="1.5" d="M2.75 2.75h13.5v13.5H2.75zM3.5 3.5l12 12M3.5 15.5l12-12"/><circle cx="2.5" cy="2.5" r="2.5" fill="#1456CB" fill-rule="nonzero"/><circle cx="16.5" cy="2.5" r="2.5" fill="#1456CB" fill-rule="nonzero"/><circle cx="9.5" cy="9.5" r="2.5" fill="#1456CB" fill-rule="nonzero"/><circle cx="2.5" cy="16.5" r="2.5" fill="#1456CB" fill-rule="nonzero"/><circle cx="16.5" cy="16.5" r="2.5" fill="#1456CB" fill-rule="nonzero"/></g></svg>\n',$=[{position:"top",items:[{name:"Service Mesh",iconCustom:L,link:"home",subNav:{items:[{name:"Overview",link:"global-overview"},{name:"Meshes",link:"mesh-child",pathFlip:!0,insightsFieldAccessor:"global.meshes"},{name:"Zones",title:!0},{name:"Zone CPs",link:"zones",insightsFieldAccessor:"global.zones"},{name:"Zone Ingresses",link:"zoneingresses",insightsFieldAccessor:"global.zoneIngresses"},{name:"Services",title:!0},{name:"Internal",link:"internal-services",title:!1,insightsFieldAccessor:"mesh.services.internal"},{name:"External",link:"external-services",title:!1,insightsFieldAccessor:"mesh.services.external"},{name:"Data plane proxies",title:!0},{name:"All",link:"dataplanes",title:!1,insightsFieldAccessor:"mesh.dataplanes.total"},{name:"Standard",link:"standard-dataplanes",title:!1,nested:!0,insightsFieldAccessor:"mesh.dataplanes.standard"},{name:"Gateway",link:"gateway-dataplanes",title:!1,nested:!0,insightsFieldAccessor:"mesh.dataplanes.gateway"},{name:"Policies",title:!0}].concat(Object(B["a"])([{name:"Circuit Breakers",link:"circuit-breakers",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.CircuitBreaker"},{name:"Fault Injections",link:"fault-injections",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.FaultInjection"},{name:"Health Checks",link:"health-checks",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.HealthCheck"},{name:"Proxy Templates",link:"proxy-templates",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.ProxyTemplate"},{name:"Traffic Logs",link:"traffic-logs",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.TrafficLog"},{name:"Traffic Permissions",link:"traffic-permissions",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.TrafficPermission"},{name:"Traffic Routes",link:"traffic-routes",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.TrafficRoute"},{name:"Traffic Traces",link:"traffic-traces",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.TrafficTrace"},{name:"Rate Limits",link:"rate-limits",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.RateLimit"},{name:"Retries",link:"retries",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.Retry"},{name:"Timeouts",link:"timeouts",title:!1,parent:"policies",insightsFieldAccessor:"mesh.policies.Timeout"}].sort((function(e,t){return e.name<t.name?-1:1}))))}}]},{position:"bottom",items:[{name:"Diagnostics",icon:"gearFilled",link:"diagnostics"}]}],R=$,F=i("c6ec"),K={name:"Sidebar",components:{MeshSelector:w,NavItem:C,Subnav:x},data:function(){return{isCollapsed:!1,sidebarSavedState:null,toggleWorkspaces:!1,isHovering:!1,subnavIsExpanded:!0,menu:R}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])({selectedMesh:"getSelectedMesh"})),{},{titleNavItems:function(){return this.menu.find((function(e){return"top"===e.position})).items},topNavItems:function(){return this.menu.find((function(e){return"top"===e.position})).items[0].subNav.items},bottomNavItems:function(){return this.menu.find((function(e){return"bottom"===e.position})).items},hasSubnav:function(){var e,t,i;return Boolean(null===(e=this.selectedMenuItem)||void 0===e||null===(t=e.subNav)||void 0===t||null===(i=t.items)||void 0===i?void 0:i.length)},lastMenuList:function(){return Object.keys(this.menuList.sections).length-1},meshList:function(){return this.$store.state.meshes},selectedMenuItem:function(){var e,t=this.$route,i=u(this.menu);try{for(i.s();!(e=i.n()).done;){var n,s=e.value,a=u(s.items);try{for(a.s();!(n=a.n()).done;){var o=n.value,r=t.name!==o.link,c=r&&!t.meta.hideSubnav;if(c)return o}}catch(l){a.e(l)}finally{a.f()}}}catch(l){i.e(l)}finally{i.f()}return null},touchDevice:function(){return!(!("ontouchstart"in window)&&!navigator.maxTouchPoints)}}),watch:{selectedMesh:function(e){this.getMeshInsights()}},mounted:function(){this.sidebarEvent()},beforeDestroy:function(){},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])({getMeshInsights:"sidebar/getMeshInsights"})),{},{getNavItems:function(e,t,i){return e.find((function(e){return e.position===t})).items},handleResize:function(){var e=F["a"].innerWidth;e<=900&&(this.isCollapsed=!0,this.subnavIsExpanded=!1,this.isHovering=!1),e>=900&&(this.isCollapsed=!1,this.isHovering=!0)},toggleSubnav:function(){this.subnavIsExpanded=!0,this.isCollapsed=!0,localStorage.setItem("sidebarCollapsed",this.subnavIsExpanded)},sidebarEvent:function(){var e=this,t=this.touchDevice,i=this.$refs.sidebarControl;this.$route.params.expandSidebar&&!0===this.$route.params.expandSidebar&&(this.subnavIsExpanded=!0,localStorage.setItem("sidebarCollapsed",!0)),t?(i.addEventListener("touchstart",(function(){e.isHovering=!0})),i.addEventListener("touchend",(function(){e.isHovering=!1}))):(i.addEventListener("mouseover",(function(){e.isHovering=!0})),i.addEventListener("mouseout",(function(){e.isHovering=!1})),i.addEventListener("click",(function(){e.isHovering=!1})))}})},P=K,D=(i("7148"),Object(_["a"])(P,r,c,!1,null,null,null)),z=D.exports,H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.shouldRenderAlert?i("KAlert",{staticClass:"mb-4",attrs:{appearance:"info","is-dismissible":"","data-testid":"notification-info"},on:{closed:e.closeAlert},scopedSlots:e._u([{key:"alertMessage",fn:function(){return[i("div",{staticClass:"mr-4"},[i("span",{staticClass:"mr-2"},[i("strong",[e._v("ProTip:")]),e._v(" You might want to adjust your "+e._s(e.isAllMeshesView?"meshes":"mesh")+" configuration ")]),i("KButton",{attrs:{appearance:"outline-primary"},on:{click:e.openModal}},[e._v(" Check your "+e._s(e.isAllMeshesView?"meshes":"mesh")+"! ")])],1)]},proxy:!0}],null,!1,2843087208)}):e._e(),i("KModal",{staticClass:"modal",attrs:{"is-visible":e.isOpen},scopedSlots:e._u([{key:"header-content",fn:function(){return[e.isAllMeshesView?i("div",{staticClass:"flex items-center"},[i("KIcon",{staticClass:"mr-2",attrs:{color:"var(--yellow-300)",icon:"notificationBell",size:"24"}}),e._v(" Notifications ")],1):i("div",[e.hasAnyAction?i("span",[e._v(" Some of these features are not enabled for "),i("span",{staticClass:"text-xl tracking-wide"},[e._v(' "'+e._s(e.selectedMesh)+'"')]),e._v(" mesh. Consider implementing them. ")]):i("span",[e._v(" Looks like "),i("span",{staticClass:"text-xl tracking-wide"},[e._v(' "'+e._s(e.selectedMesh)+'"')]),e._v(" isn't missing any features. Well done! ")]),i("KBadge",{staticClass:"cursor-pointer",attrs:{role:"button"},nativeOn:{click:function(t){return e.changeMesh("all")}}},[e._v(" ‹ Back to all ")])],1)]},proxy:!0},{key:"body-content",fn:function(){return[e.isAllMeshesView?i("AllMeshesNotifications",{on:{meshSelected:function(t){return e.changeMesh(t)}}}):i("SingleMeshNotifications")]},proxy:!0},{key:"footer-content",fn:function(){return[i("KButton",{attrs:{appearance:"secondary"},on:{click:e.closeModal}},[e._v(" Close ")])]},proxy:!0}])})],1)},W=[],V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"py-4"},[i("h3",{staticClass:"font-bold mb-4"},[e._v(" Meshes ")]),e.hasMeshesWithAction?i("div",[i("p",[e._v(" Check the following meshes for suggestions to adjust the configuration ")]),i("div",{staticClass:"pt-4"},e._l(e.meshNotificationItemMapWithAction,(function(t,n){return i("span",{key:n,staticClass:"relative"},[i("KBadge",{staticClass:"ml-2 cursor-pointer transform hover:scale-110",nativeOn:{click:function(t){return e.meshSelected(n)}}},[e._v(" "+e._s(n)+" ")]),i("span",{staticClass:"notification-amount"},[e._v(e._s(e.calculateActions(t)))])],1)})),0)]):i("div",[e._v(" Looks like none of your meshes are missing any features. Well done! ")])]),i("div",{staticClass:"py-4"},[i("h3",{staticClass:"font-bold mb-4"},[e._v(" Enterprise ")]),i("p",[e._v(" Kuma’s ecosystem has created enterprise offerings to do more with the product, including advanced integrations and support. ")]),i("KButton",{staticClass:"enterprise-button",attrs:{appearance:"primary",target:"_blank",to:e.url}},[i("KIcon",{attrs:{icon:"organizations",color:"white",size:"24"}}),e._v(" Kuma Enterprise Offerings ")],1)],1)])},G=[],U=(i("4de4"),i("07ac"),{name:"AllMeshesNotifications",data:function(){return{url:"https://kuma.io/enterprise/".concat("?utm_source=Kuma&utm_medium=Kuma-GUI")}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])({meshNotificationItemMapWithAction:"notifications/meshNotificationItemMapWithAction"})),{},{hasMeshesWithAction:function(){return Object.keys(this.meshNotificationItemMapWithAction).length>0}}),methods:{meshSelected:function(e){this.$emit("meshSelected",e)},calculateActions:function(e){var t=Object.values(e),i=t.filter(Boolean);return t.length-i.length}}}),q=U,X=(i("65f1"),Object(_["a"])(q,V,G,!1,null,"ee8605e4",null)),Y=X.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Accordion",{attrs:{"multiple-open":""}},e._l(e.singleMeshNotificationItems,(function(t){return i("AccordionItem",{key:t.name,scopedSlots:e._u([{key:"accordion-header",fn:function(){return[i("div",{staticClass:"flex items-center"},[t.isCompleted?i("KIcon",{staticClass:"mr-4",attrs:{color:"var(--green-400)",icon:"check",size:"20"}}):i("KIcon",{staticClass:"mr-4",attrs:{color:"var(--yellow-300)","secondary-color":"var(--black-75)",icon:"warning",size:"20"}}),i("strong",[e._v(e._s(t.name))])],1)]},proxy:!0},{key:"accordion-content",fn:function(){return[t.component?i(t.component,{tag:"component"}):[i("KCard",{scopedSlots:e._u([{key:"body",fn:function(){return[e._v(" "+e._s(t.content)+" ")]},proxy:!0}],null,!0)})]]},proxy:!0}],null,!0)})})),1)},J=[],Q=i("520d"),ee=i("3ddf"),te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return!1===e.alertClosed?i("div",{staticClass:"onboarding-check"},[i("KAlert",{staticClass:"dismissible",attrs:{appearance:"success","is-dismissible":""},on:{closed:e.closeAlert},scopedSlots:e._u([{key:"alertMessage",fn:function(){return[i("div",{staticClass:"alert-content"},[i("div",[i("strong",[e._v("Welcome to "+e._s(e.productName)+"!")]),e._v(" We've detected that you don't have any data plane proxies running yet. We've created an onboarding process to help you! ")]),i("div",[i("KButton",{staticClass:"action-button",attrs:{appearance:"primary",size:"small",to:{path:"/get-started"}}},[e._v(" Get Started ")])],1)])]},proxy:!0}],null,!1,3584331343)})],1):e._e()},ie=[],ne={name:"OnboardingNotification",data:function(){return{alertClosed:!1,productName:F["h"]}},methods:{closeAlert:function(){this.alertClosed=!0}}},se=ne,ae=(i("506f"),Object(_["a"])(se,te,ie,!1,null,"16f953a4",null)),oe=ae.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"py-4"},[i("p",{staticClass:"mb-4"},[e._v(" A traffic log policy lets you collect access logs for every data plane proxy in your service mesh. ")]),i("ul",{staticClass:"list-disc pl-4"},[i("li",[i("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/policies/traffic-log/",target:"_blank"}},[e._v(" Traffic Log policy documentation ")])])])])},ce=[],le={name:"LoggingNotification",computed:Object(a["a"])({},Object(o["c"])({version:"config/getVersion"}))},ue=le,de=Object(_["a"])(ue,re,ce,!1,null,null,null),me=de.exports,he=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"py-4"},[i("p",{staticClass:"mb-4"},[e._v(" A traffic metrics policy lets you collect key data for observability of your service mesh. ")]),i("ul",{staticClass:"list-disc pl-4"},[i("li",[i("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/policies/traffic-metrics/",target:"_blank"}},[e._v(" Traffic Metrics policy documentation ")])])])])},fe=[],pe={name:"MetricsNotification",computed:Object(a["a"])({},Object(o["c"])({version:"config/getVersion"}))},ve=pe,be=Object(_["a"])(ve,he,fe,!1,null,null,null),ge=be.exports,_e=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"py-4"},[i("p",{staticClass:"mb-4"},[e._v(" Mutual TLS (mTLS) for communication between all the components of your service mesh (services, control plane, data plane proxies), proxy authentication, and access control rules in Traffic Permissions policies all contribute to securing your mesh. ")]),i("ul",{staticClass:"list-disc pl-4"},[i("li",[i("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/security/certificates/",target:"_blank"}},[e._v(" Secure access across services ")])]),i("li",[i("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/policies/mutual-tls/",target:"_blank"}},[e._v(" Mutual TLS ")])]),i("li",[i("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/policies/traffic-permissions/",target:"_blank"}},[e._v(" Traffic Permissions policy documentation ")])])])])},ye=[],Ce={name:"MtlsNotification",computed:Object(a["a"])({},Object(o["c"])({version:"config/getVersion"}))},ke=Ce,Ae=Object(_["a"])(ke,_e,ye,!1,null,null,null),Ie=Ae.exports,Oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"py-4"},[i("p",{staticClass:"mb-4"},[e._v(" A traffic trace policy lets you enable tracing logs and a third-party tracing solution to send them to. ")]),i("ul",{staticClass:"list-disc pl-4"},[i("li",[i("a",{attrs:{href:"https://kuma.io/docs/"+e.version+"/policies/traffic-trace/",target:"_blank"}},[e._v(" Traffic Trace policy documentation ")])])])])},Me=[],xe={name:"TracingNotification",computed:Object(a["a"])({},Object(o["c"])({version:"config/getVersion"}))},Ne=xe,Se=Object(_["a"])(Ne,Oe,Me,!1,null,null,null),je=Se.exports,Ee={name:"SingleMeshNotifications",components:{Accordion:Q["a"],AccordionItem:ee["a"],OnboardingNotification:oe,LoggingNotification:me,MetricsNotification:ge,MtlsNotification:Ie,TracingNotification:je},computed:Object(a["a"])({},Object(o["c"])({singleMeshNotificationItems:"notifications/singleMeshNotificationItems"}))},Te=Ee,we=Object(_["a"])(Te,Z,J,!1,null,null,null),Be=we.exports,Le={name:"NotificationManager",components:{AllMeshesNotifications:Y,SingleMeshNotifications:Be},data:function(){return{alertClosed:!1}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["d"])({isOpen:function(e){return e.notifications.isOpen}})),Object(o["c"])({selectedMesh:"getSelectedMesh",amountOfActions:"notifications/amountOfActions",showOnboarding:"showOnboarding",meshNotificationItemMapWithAction:"notifications/meshNotificationItemMapWithAction"})),{},{isAllMeshesView:function(){return"all"===this.selectedMesh},shouldRenderAlert:function(){return!this.alertClosed&&!this.showOnboarding&&this.amountOfActions>0},hasAnyAction:function(){return this.meshNotificationItemMapWithAction[this.selectedMesh]}}),methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])({openModal:"notifications/openModal",closeModal:"notifications/closeModal",updateSelectedMesh:"updateSelectedMesh"})),{},{closeAlert:function(){this.alertClosed=!0},changeMesh:function(e){this.updateSelectedMesh(e),localStorage.setItem("selectedMesh",e),this.$router.push({params:{mesh:e}}).catch((function(){}))}})},$e=Le,Re=(i("2d5d"),Object(_["a"])($e,H,W,!1,null,"587c52ed",null)),Fe=Re.exports,Ke=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.hideBreadcrumbs?e._e():i("Krumbs",{attrs:{items:e.routes}})],1)},Pe=[],De=(i("c975"),i("d81d"),i("498a"),i("c9e9")),ze=i("bc1e"),He={name:"Breadcrumbs",computed:{pageMesh:function(){return this.$route.params.mesh},routes:function(){var e=this,t=[];this.$route.matched.map((function(i){var n=void 0!==i.redirect&&void 0!==i.redirect.name?i.redirect.name:i.name;e.isCurrentRoute(i)&&e.pageMesh&&t.push({key:e.pageMesh,to:{path:"/meshes/".concat(e.pageMesh)},title:"Mesh Overview for ".concat(e.pageMesh),text:e.pageMesh}),e.isCurrentRoute(i)&&i.meta.parent&&"undefined"!==i.meta.parent?t.push({key:i.meta.parent,to:{name:i.meta.parent},title:i.meta.title,text:i.meta.breadcrumb||i.meta.title}):e.isCurrentRoute(i)&&!i.meta.excludeAsBreadcrumb?t.push({key:n,to:{name:n},title:i.meta.title,text:i.meta.breadcrumb||i.meta.title}):i.meta.parent&&"undefined"!==i.meta.parent&&t.push({key:i.meta.parent,to:{name:i.meta.parent},title:i.meta.title,text:i.meta.breadcrumb||i.meta.title})}));var i=this.calculateRouteTextAdvanced(this.$route);return i&&t.push({title:i,text:i}),t},hideBreadcrumbs:function(){return this.$route.query.hide_breadcrumb}},methods:{getBreadcrumbItem:function(e,t,i,n){return{key:e,to:t,title:i,text:n}},isCurrentRoute:function(e){return e.name&&e.name===this.$router.currentRoute.name||e.redirect===this.$router.currentRoute.name},calculateRouteFromQuery:function(e){var t=e.entity_id,i=e.entity_type;if(t&&i){var n=this.$router.resolve({name:"show-".concat(i.split("_")[0]),params:{id:t.split(",")[0]}}).normalizedTo,s=Object(a["a"])(Object(a["a"])({},n),{},{meta:Object(a["a"])({},n.meta)}),o=s.params.id.split("-")[0];return t.split(",").length>1&&t.split(",")[1]&&(o=t.split(",")[1]),s.meta.breadcrumb=o,[Object(a["a"])({},this.getBreadcrumbItem(s.name,s,this.calculateRouteTitle(s),this.calculateRouteText(s)))]}},calculateRouteText:function(e){if(e.path&&e.path.indexOf(":mesh")>-1){var t=this.$router.currentRoute.params;return(t&&t.mesh&&Object(ze["g"])(t.mesh)?t.mesh.split("-")[0].trim():t.mesh)||e.meta.breadcrumb||e.meta.title}return e.meta&&(e.meta.breadcrumb||e.meta.title)||e.name||e.meta.breadcrumb||e.meta.title},calculateRouteTitle:function(e){return e.params&&e.params.mesh||e.path.indexOf(":mesh")>-1&&this.$router.currentRoute.params&&this.$router.currentRoute.params.mesh},calculateRouteTextAdvanced:function(e){var t=e.params,i=(t.expandSidebar,Object(De["a"])(t,["expandSidebar"])),n="mesh-overview"===e.name,s=Object.assign({},i,{mesh:null});return n?t.mesh:Object.values(s).filter((function(e){return e}))[0]}}},We=He,Ve=(i("e7ab"),Object(_["a"])(We,Ke,Pe,!1,null,null,null)),Ge=Ve.exports,Ue={name:"Shell",components:{Breadcrumbs:Ge,Sidebar:z,NotificationManager:Fe,OnboardingNotification:oe},computed:Object(a["a"])({},Object(o["c"])({showOnboarding:"showOnboarding"}))},qe=Ue,Xe=Object(_["a"])(qe,n,s,!1,null,null,null);t["default"]=Xe.exports},df30:function(e,t,i){},e593:function(e,t,i){},e66f:function(e,t,i){"use strict";i("df30")},e7ab:function(e,t,i){"use strict";i("5f76")}}]);