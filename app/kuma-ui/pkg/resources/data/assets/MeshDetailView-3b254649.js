import{E as R}from"./ErrorBlock-ce60392d.js";import{_ as g}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-df4338bd.js";import{d as k,k as S,H as w,o as t,c as V,f as _,t as i,l as r,e,P as b,_ as T,U as B,a as c,b as p,w as n,m as M}from"./index-cf10d15e.js";import"./index-fce48c05.js";import"./TextWithCopyButton-b8bd594c.js";import"./CopyButton-0aa5d830.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-990b7d32.js";const $={class:"date-status"},I=k({__name:"ResourceDateStatus",props:{creationTime:{},modificationTime:{}},setup(u){const{t:a,formatIsoDate:m}=S(),d=u,l=w(()=>m(d.creationTime)),s=w(()=>m(d.modificationTime));return(f,h)=>(t(),V("span",$,[_(i(r(a)("common.detail.created"))+": "+i(l.value)+" ",1),e(r(b)),_(" "+i(r(a)("common.detail.modified"))+": "+i(s.value),1)]))}});const C=T(I,[["__scopeId","data-v-fa366713"]]),N={key:2,class:"stack","data-testid":"detail-view-details"},A={class:"date-status-wrapper"},E=k({__name:"MeshDetailView",setup(u){const a=B();return(m,d)=>{const l=c("RouteTitle"),s=c("DataSource"),f=c("AppView"),h=c("RouteView");return t(),p(h,{name:"mesh-detail-view",params:{mesh:""}},{default:n(({route:v,t:x})=>[e(l,{title:x("meshes.routes.overview.title"),render:!1},null,8,["title"]),_(),e(f,null,{default:n(()=>[e(s,{src:`/meshes/${v.params.mesh}`},{default:n(({data:o,error:D})=>[e(s,{src:`/mesh-insights/${v.params.mesh}`},{default:n(({data:y})=>[D?(t(),p(R,{key:0,error:D},null,8,["error"])):o===void 0?(t(),p(g,{key:1})):(t(),V("div",N,[e(r(a),{mesh:o,"mesh-insight":y},null,8,["mesh","mesh-insight"]),_(),M("div",A,[e(C,{"creation-time":o.creationTime,"modification-time":o.modificationTime},null,8,["creation-time","modification-time"])])]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});const G=T(E,[["__scopeId","data-v-e3befb82"]]);export{G as default};