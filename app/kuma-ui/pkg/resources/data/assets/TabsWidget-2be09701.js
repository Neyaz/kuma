import{d as g,j as h,c as f,o as m,a as b,B as w,s as v,w as c,z as y,h as S,b as l,v as T,g as x,a3 as B,ad as V,p as I,m as N,q as P}from"./index-93b3be40.js";import{w as W,f as C}from"./RouteView.vue_vue_type_script_setup_true_lang-a1b642fe.js";const i={get(e){const a=new URL(window.location.href).searchParams.get(e);return a!==null?a.replaceAll("+"," "):null},set(e,t){const a=new URL(window.location.href);t!=null?a.searchParams.set(e,String(t).replace(/\s/g,"+")):a.searchParams.has(e)&&a.searchParams.delete(e),window.history.replaceState({path:a.href},"",a.href)}},L=e=>(I("data-v-0ee53003"),e=e(),N(),e),k=L(()=>P("span",{class:"with-warnings"},"Warnings",-1)),q=g({__name:"TabsWidget",props:{tabs:{type:Array,required:!0}},emits:["on-tab-change"],setup(e,{emit:t}){const a=e,d=W(),r=h(""),u=f(()=>a.tabs.map(s=>s.hash.replace("#","")));function p(){const s=i.get("tab");s!==null&&(r.value=`#${s}`)}p();function _(s){i.set("tab",s.substring(1)),d.info(V.TABS_TAB_CHANGE,{data:{newActiveTabHash:s}}),t("on-tab-change",s)}return(s,n)=>(m(),b(l(B),{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o),tabs:e.tabs,onChanged:_},w({"warnings-anchor":c(()=>[S(l(T),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"16"}),x(),k]),_:2},[v(u.value,(o,A)=>({name:o,fn:c(()=>[y(s.$slots,o,{},void 0,!0)])}))]),1032,["modelValue","tabs"]))}});const E=C(q,[["__scopeId","data-v-0ee53003"]]);export{E as T};