import{d as w,r as i,o as u,c as C,a as _,b as o,w as t,e,t as d,n as N,h as I,f as M,g as K,_ as T,u as L,i as X,j as z,k as r,l as s,m as g,p as A,q as O,s as D,v as U}from"./index-B_tkq_0B.js";const B=""+new URL("product-logo-CDoXkXpC.png",import.meta.url).href,G={class:"app-navigator"},k=w({__name:"AppNavigator",props:{active:{type:Boolean,default:!1},label:{default:""},to:{default:()=>({})}},setup(l){const n=l;return(m,a)=>{const c=i("XAction");return u(),C("li",G,[_(m.$slots,"default",{},()=>[o(c,{class:N({"is-active":n.active}),to:n.to},{default:t(()=>[e(d(n.label),1)]),_:1},8,["class","to"])])])}}}),P=w({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const l={ref:"_"};for(const n in this.$props)l[I(n)]=this.$props[n];return M("span",[K(this.$slots,"default")?M("a",l,this.$slots.default()):M("a",l)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){if(this.$el.lastChild!==this.$refs._)return;const l=this.$el.appendChild(document.createElement("span")),n=this;T(()=>import("./buttons.esm-Bog6bH3O.js"),[],import.meta.url).then(function(m){n.$el.lastChild===l&&m.render(l.appendChild(n.$refs._),function(a){n.$el.lastChild===l&&l.parentNode.replaceChild(a,l)})})},reset:function(){this.$refs._!=null&&this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),x={class:"application-shell"},H={role:"banner"},Y={class:"horizontal-list"},q={class:"upgrade-check-wrapper"},Z={class:"alert-content"},j={class:"horizontal-list"},F={class:"app-status app-status--mobile"},J={class:"app-status app-status--desktop"},Q={class:"app-content-container"},W={key:0,"aria-label":"Main",class:"app-sidebar"},ee={class:"app-main-content"},te={class:"app-notifications"},ne=["innerHTML"],ae=w({__name:"ApplicationShell",setup(l){const n=L(),m=X(),{t:a}=z();return(c,p)=>{const f=i("XTeleportSlot"),h=i("RouterLink"),b=i("KButton"),$=i("KAlert"),E=i("DataSource"),R=i("KPop"),S=i("XIcon"),v=i("XAction"),V=i("XActionGroup");return u(),C("div",x,[o(f,{name:"modal-layer"}),e(),r("header",H,[r("div",Y,[_(c.$slots,"header",{},()=>[o(h,{to:{name:"home"}},{default:t(()=>[_(c.$slots,"home",{},void 0,!0)]),_:3}),e(),o(s(P),{class:"gh-star",href:"https://github.com/kumahq/kuma","aria-label":"Star kumahq/kuma on GitHub"},{default:t(()=>[e(`
            Star
          `)]),_:1}),e(),r("div",q,[o(E,{src:"/control-plane/version/latest"},{default:t(({data:y})=>[y&&s(n)("KUMA_VERSION")!==y.version?(u(),g($,{key:0,class:"upgrade-alert","data-testid":"upgrade-check",appearance:"info"},{default:t(()=>[r("div",Z,[r("p",null,d(s(a)("common.product.name"))+` update available
                  `,1),e(),o(b,{appearance:"primary",to:s(a)("common.product.href.install")},{default:t(()=>[e(`
                    Update
                  `)]),_:1},8,["to"])])]),_:1})):A("",!0)]),_:1})])],!0)]),e(),r("div",j,[_(c.$slots,"content-info",{},()=>[r("div",F,[o(R,{width:"280"},{content:t(()=>[r("p",null,[e(d(s(a)("common.product.name"))+" ",1),r("b",null,d(s(n)("KUMA_VERSION")),1),e(" on "),r("b",null,d(s(a)(`common.product.environment.${s(n)("KUMA_ENVIRONMENT")}`)),1),e(" ("+d(s(a)(`common.product.mode.${s(n)("KUMA_MODE")}`))+`)
                `,1)])]),default:t(()=>[o(b,{appearance:"tertiary"},{default:t(()=>[e(`
                Info
              `)]),_:1}),e()]),_:1})]),e(),r("p",J,[e(d(s(a)("common.product.name"))+" ",1),r("b",null,d(s(n)("KUMA_VERSION")),1),e(" on "),r("b",null,d(s(a)(`common.product.environment.${s(n)("KUMA_ENVIRONMENT")}`)),1),e(" ("+d(s(a)(`common.product.mode.${s(n)("KUMA_MODE")}`))+`)
          `,1)]),e(),o(V,null,{control:t(()=>[o(v,{appearance:"tertiary"},{default:t(()=>[o(S,{name:"help"},{default:t(()=>[e(`
                  Help
                `)]),_:1})]),_:1})]),default:t(()=>[e(),o(v,{href:s(a)("common.product.href.docs.index"),target:"_blank",rel:"noopener noreferrer"},{default:t(()=>[e(`
              Documentation
            `)]),_:1},8,["href"]),e(),o(v,{href:s(a)("common.product.href.feedback"),target:"_blank",rel:"noopener noreferrer"},{default:t(()=>[e(`
              Feedback
            `)]),_:1},8,["href"]),e(),o(v,{to:{name:"onboarding-welcome-view"},target:"_blank",rel:"noopener noreferrer"},{default:t(()=>[e(`
              Onboarding
            `)]),_:1})]),_:1}),e(),o(b,{to:{name:"diagnostics"},appearance:"tertiary",icon:"","data-testid":"nav-item-diagnostics"},{default:t(()=>[o(S,{name:"settings"},{default:t(()=>[e(`
              Diagnostics
            `)]),_:1})]),_:1})],!0)])]),e(),r("div",Q,[c.$slots.navigation?(u(),C("nav",W,[r("ul",null,[_(c.$slots,"navigation",{},void 0,!0)])])):A("",!0),e(),r("main",ee,[r("div",te,[_(c.$slots,"notifications",{},void 0,!0)]),e(),_(c.$slots,"notifications",{},()=>[s(m)("use state")?A("",!0):(u(),g($,{key:0,class:"mb-4",appearance:"warning"},{default:t(()=>[r("ul",null,[r("li",{"data-testid":"warning-GLOBAL_STORE_TYPE_MEMORY",innerHTML:s(a)("common.warnings.GLOBAL_STORE_TYPE_MEMORY")},null,8,ne)])]),_:1}))],!0),e(),_(c.$slots,"default",{},void 0,!0)])])])}}}),oe=O(ae,[["__scopeId","data-v-8d9ae308"]]),se=["alt"],re=w({__name:"App",setup(l){var c;const n=D(),m=((c=n.getRoutes().find(p=>p.name==="app"))==null?void 0:c.children.map(p=>(p.name=String(p.name),p)))??[],a=U({name:""});return n.afterEach(()=>{const p=n.currentRoute.value.matched.map(h=>h.name),f=m.find(h=>p.includes(h.name));f&&f.name!==a.value.name&&(a.value=f)}),(p,f)=>{const h=i("RouterView"),b=i("AppView"),$=i("RouteView"),E=i("DataSource");return u(),g(E,{src:"/control-plane/addresses"},{default:t(({data:R})=>[typeof R<"u"?(u(),g($,{key:0,name:"app",attrs:{class:"kuma-ready"},"data-testid-root":"mesh-app"},{default:t(({t:S,can:v})=>[o(oe,{class:"kuma-application"},{home:t(()=>[r("img",{class:"logo",src:B,alt:`${S("common.product.name")} Logo`,"data-testid":"logo"},null,8,se)]),navigation:t(()=>[o(k,{"data-testid":"control-planes-navigator",active:a.value.name==="home",label:"Home",to:{name:"home"}},null,8,["active"]),e(),v("use zones")?(u(),g(k,{key:0,"data-testid":"zones-navigator",active:a.value.name==="zone-index-view",label:"Zones",to:{name:"zone-index-view"}},null,8,["active"])):(u(),g(k,{key:1,"data-testid":"zone-egresses-navigator",active:a.value.name==="zone-egress-index-view",label:"Zone Egresses",to:{name:"zone-egress-list-view"}},null,8,["active"])),e(),o(k,{active:a.value.name==="mesh-index-view","data-testid":"meshes-navigator",label:"Meshes",to:{name:"mesh-index-view"}},null,8,["active"])]),default:t(()=>[e(),e(),o(b,null,{default:t(()=>[o(h)]),_:1})]),_:2},1024)]),_:1})):A("",!0)]),_:1})}}}),le=O(re,[["__scopeId","data-v-5bc263b6"]]);export{le as default};
