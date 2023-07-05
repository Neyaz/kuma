import{l as O,S as Q,U as W,Z as G,h as K}from"./kongponents.es-062e0284.js";import{d as q,o as h,a as k,w as o,h as n,b as s,g as m,u as j,v as H,q as u,c as g,e as J,k as d,f as N,P as L,y as V,t as X,p as Y,m as ee}from"./index-236ce8af.js";import{_ as ae}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-950f4cdd.js";import{h as te,e as se,i as le,f as oe,_ as ne,g as ie}from"./RouteView.vue_vue_type_script_setup_true_lang-9d07ccf3.js";import{_ as re}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9bd21ddd.js";import{D as ce}from"./DataOverview-15a0e003.js";import{Q as A}from"./QueryParameter-70743f73.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-d07143b5.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-31879049.js";import"./ErrorBlock-e2fc5573.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-b29b4f69.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-81388f2c.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2ffb496b.js";import"./TextWithCopyButton-353300ce.js";import"./TabsWidget-8584492f.js";import"./TagList-2ae5f8cf.js";import"./StatusBadge-94d89319.js";const pe=q({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(l){const a=l;return(w,i)=>(h(),k(s(Q),{class:"docs-link",appearance:"outline",target:"_blank",to:a.href},{default:o(()=>[n(s(O),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),m(`

    Documentation
  `)]),_:1},8,["to"]))}}),ue=l=>(Y("data-v-80f9938a"),l=l(),ee(),l),me={class:"kcard-stack"},de={class:"kcard-border"},ye=ue(()=>d("p",null,[d("strong",null,"Warning"),m(` This policy is experimental. If you encountered any problem please open an
                      `),d("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),fe=q({__name:"PolicyListView",props:{selectedPolicyName:{type:[String,null],required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(l){const a=l,w=te(),i=j(),B=H(),_=se(),{t:S}=le(),P=u(!0),x=u(null),T=u(null),D=u(a.offset),v=u(a.selectedPolicyName),y=u({headers:[{label:"Name",key:"entity"},{label:"Type",key:"type"}],data:[]}),C=g(()=>i.params.mesh),t=g(()=>_.state.policyTypesByPath[a.policyPath]),$=g(()=>_.state.policyTypes.map(e=>({label:e.name,value:e.path,selected:e.path===a.policyPath}))),z=g(()=>_.state.policyTypes.filter(e=>(_.state.sidebar.insights.mesh.policies[e.name]??0)===0).map(e=>e.name));U();async function U(){E(a.offset)}async function E(e){var b;D.value=e,A.set("offset",e>0?e:null),P.value=!0,x.value=null;const r=i.params.mesh,c=i.params.policyPath,p=L;try{const{items:f,next:F}=await w.getAllPolicyEntitiesFromMesh({mesh:r,path:c},{size:p,offset:e});T.value=F,y.value.data=M(f??[]),I({name:a.selectedPolicyName??((b=y.value.data[0])==null?void 0:b.entity.name)})}catch(f){y.value.data=[],f instanceof Error?x.value=f:console.error(f)}finally{P.value=!1}}function M(e){return e.map(r=>{const{type:c,name:p}=r,b={name:"policy-detail-view",params:{mesh:r.mesh,policyPath:i.params.policyPath,policy:p}};return{entity:r,detailViewRoute:b,type:c}})}function R(e){I({name:e.name})}function I({name:e}){v.value=e??null,A.set("policy",e??null)}function Z(e){B.push({name:"policies-list-view",params:{...i.params,policyPath:e.value}})}return(e,r)=>(h(),k(ne,{module:"policies"},{default:o(()=>{var c;return[n(re,{title:s(S)("policies.routes.items.title",{name:(c=t.value)==null?void 0:c.name})},null,8,["title"]),m(),n(oe,null,{default:o(()=>[t.value?(h(),J("div",{key:0,class:V(["relative",t.value.path])},[d("div",me,[d("div",de,[t.value.isExperimental?(h(),k(s(W),{key:0,"border-variant":"noBorder",class:"mb-4"},{body:o(()=>[n(s(G),{appearance:"warning"},{alertMessage:o(()=>[ye]),_:1})]),_:1})):N("",!0),m(),n(ce,{"selected-entity-name":v.value??void 0,"page-size":s(L),error:x.value,"is-loading":P.value,"empty-state":{title:"No Data",message:`There are no ${t.value.name} policies present.`},"table-data":y.value,"table-data-is-empty":y.value.data.length===0,next:T.value,"page-offset":D.value,onTableAction:R,onLoadData:E},{additionalControls:o(()=>[n(s(K),{label:"Policies",items:$.value,"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:Z},{"item-template":o(({item:p})=>[d("span",{class:V({"policy-type-empty":z.value.includes(p.label)})},X(p.label),3)]),_:1},8,["items"]),m(),n(pe,{href:s(S)("policies.href.docs",{name:t.value.name}),"data-testid":"policy-documentation-link"},null,8,["href"])]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"])]),m(),v.value!==null?(h(),k(ae,{key:0,name:v.value,mesh:C.value,path:t.value.path,type:t.value.name},null,8,["name","mesh","path","type"])):N("",!0)])],2)):N("",!0)]),_:1})]}),_:1}))}});const Ae=ie(fe,[["__scopeId","data-v-80f9938a"]]);export{Ae as default};
