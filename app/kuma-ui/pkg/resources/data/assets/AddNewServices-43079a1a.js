import{O as f,a as g,b}from"./OnboardingPage-a7afc08b.js";import{d as _,o as p,j as x,U as w,x as h,q as v,g as y,w as t,h as o,C as S,l as n,m as e,A as B,_ as k,z as C,B as A}from"./index-0ab7ff60.js";const N=""+new URL("new-service-demo-bff0792e.svg",import.meta.url).href,$=""+new URL("new-service-manually-5bec5301.svg",import.meta.url).href,I=_({__name:"ServiceBox",props:{active:{type:Boolean,required:!1,default:!1}},emits:["clicked"],setup(a,{emit:d}){const i=a;return(c,s)=>(p(),x("div",{class:h(["box",{"box--active":i.active}]),"data-testid":"box",onClick:s[0]||(s[0]=l=>d("clicked"))},[w(c.$slots,"default",{},void 0,!0)],2))}});const r=v(I,[["__scopeId","data-v-9846ff30"]]),m=a=>(C("data-v-abdc766e"),a=a(),A(),a),O={class:"service-mode-list"},V=m(()=>e("div",{class:"service-box-content"},[e("img",{src:N}),n(),e("p",{class:"service-mode-title"},`
                  Demo app
                `),n(),e("p",null,"Counter application")],-1)),z=m(()=>e("div",{class:"service-box-content"},[e("img",{src:$}),n(),e("p",{class:"service-mode-title"},`
                  Manually
                `),n(),e("p",null,"After this wizard")],-1)),U=_({__name:"AddNewServices",props:{mode:{}},emits:["change"],setup(a,{emit:d}){const i=a;return(c,s)=>(p(),y(k,null,{default:t(({t:l})=>[o(S,{title:l("onboarding.routes.add-services.title")},null,8,["title"]),n(),o(B,null,{default:t(()=>[o(f,null,{header:t(()=>[o(g,null,{title:t(()=>[n(`
              Add services
            `)]),_:1})]),content:t(()=>[e("div",O,[o(r,{"data-testid":"onboarding-demo",active:i.mode==="demo",onClicked:s[0]||(s[0]=u=>d("change","demo"))},{default:t(()=>[V]),_:1},8,["active"]),n(),o(r,{"data-testid":"onboarding-manually",active:i.mode==="manually",onClicked:s[1]||(s[1]=u=>d("change","manually"))},{default:t(()=>[z]),_:1},8,["active"])])]),navigation:t(()=>[o(b,{"next-step":i.mode==="manually"?"onboarding-completed":"onboarding-add-services-code","previous-step":"onboarding-create-mesh"},null,8,["next-step"])]),_:1})]),_:1})]),_:1}))}});const R=v(U,[["__scopeId","data-v-abdc766e"]]);export{R as default};
