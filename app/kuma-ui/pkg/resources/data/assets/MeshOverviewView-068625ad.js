import{d as F,u as q,k as f,c as v,o as u,e as y,h as s,g as c,r as H,a as h,w as i,b as p,s as T,j as O,F as w,v as S,R as E,t as k,f as J}from"./index-8710b786.js";import{g as W,n as z,s as R,q as Q,D as M,f as G,e as U,r as K,A as X,_ as Y}from"./RouteView.vue_vue_type_script_setup_true_lang-e980261b.js";import{_ as Z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-56277c05.js";import{D as N,a as j}from"./DefinitionListItem-90c8455f.js";import{_ as ee}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-d8cb2412.js";import{_ as te}from"./StatusInfo.vue_vue_type_script_setup_true_lang-b1883afa.js";import{T as ae}from"./TextWithCopyButton-9d2495c0.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-a714ec28.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-20c52447.js";import"./ErrorBlock-66201e3f.js";const ne={class:"chart-box-list"},le=F({__name:"MeshCharts",setup(D){const o=W(),b=z(),x=q(),C=f(!1),_=f({total:0,online:0,partiallyDegraded:0,offline:0}),m=f({total:0,internal:0,external:0}),l=f({kumaDp:{},envoy:{}}),d=v(()=>{const e=[],{internal:t,external:a}=m.value;return t&&e.push({title:o.t("common.charts.services.internalLabel"),data:t}),a&&e.push({title:o.t("common.charts.services.externalLabel"),data:a}),{title:o.t("common.charts.services.title"),showTotal:!0,dataPoints:e}}),V=v(()=>{const e=[],{total:t,online:a,partiallyDegraded:n}=_.value;if(t>0){e.push({title:o.t("http.api.value.online"),statusKeyword:"online",data:a}),n>0&&e.push({title:o.t("http.api.value.partially_degraded"),statusKeyword:"partially_degraded",data:n});const r=t-n-a;r>0&&e.push({title:o.t("http.api.value.offline"),statusKeyword:"offline",data:r})}return{title:o.t("common.charts.dataPlaneProxies.title"),showTotal:!0,dataPoints:e}}),B=v(()=>{const e=Object.entries(l.value.kumaDp).map(([t,a])=>({title:t,data:a.total??0}));return e.sort((t,a)=>t.title==="unknown"?1:a.title==="unknown"?-1:R(t.title,a.title)),{title:o.t("common.charts.kumaDp.title"),subtitle:o.t("common.charts.kumaDp.subtitle"),dataPoints:e}}),P=v(()=>{const e=Object.entries(l.value.envoy).map(([t,a])=>({title:t,data:a.total??0}));return e.sort((t,a)=>t.title==="unknown"?1:a.title==="unknown"?-1:R(t.title,a.title)),{title:o.t("common.charts.envoy.title"),subtitle:o.t("common.charts.envoy.subtitle"),dataPoints:e}});$();async function $(){C.value=!0;const e=x.params.mesh;try{const t=await b.getMeshInsights({name:e}),a=Q([t]);I(a),g(a),L(a)}catch{_.value={total:0,online:0,partiallyDegraded:0,offline:0},m.value={total:0,internal:0,external:0},l.value={kumaDp:{},envoy:{}}}finally{C.value=!1}}function I(e){const{total:t,online:a,partiallyDegraded:n}=e.dataplanes;_.value={total:t,online:a,partiallyDegraded:n,offline:t-a-n}}function g(e){const{total:t,internal:a,external:n}=e.services;m.value={total:t,internal:a,external:n}}function L(e){l.value=e.dpVersions}return(e,t)=>(u(),y("div",ne,[s(M,{data:d.value},null,8,["data"]),c(),s(M,{data:V.value},null,8,["data"]),c(),s(M,{data:B.value},null,8,["data"]),c(),s(M,{data:P.value},null,8,["data"])]))}});const se=G(le,[["__scopeId","data-v-375c50a1"]]);function oe(D){return D!=null}const re={class:"stack"},ie={class:"columns"},ue=F({__name:"MeshOverviewView",setup(D){const{t:o}=W(),b=z(),x=q(),C=U(),_=f(!0),m=f(null),l=f(null),d=f(null),V=v(()=>{if(l.value===null||d.value===null)return null;const{name:e,creationTime:t,modificationTime:a}=l.value;return{name:e,created:K(t),modified:K(a),"Data Plane Proxies":d.value.dataplanes.total}}),B=v(()=>{var A;if(l.value===null)return null;const e=g(l.value,"mtls"),t=g(l.value,"logging"),a=g(l.value,"metrics"),n=g(l.value,"tracing"),r=!!((A=l.value.routing)!=null&&A.localityAwareLoadBalancing);return{mtls:e,logging:t,metrics:a,tracing:n,localityAwareLoadBalancing:r}}),P=v(()=>d.value===null?0:Object.values(d.value.policies).reduce((e,t)=>e+t.total,0)),$=v(()=>d.value===null?[]:Object.entries(d.value.policies).map(([e,t])=>{const a=C.state.policyTypesByName[e];return a&&t.total!==0?{name:a.name,path:a.path,total:t.total}:null}).filter(oe));I();async function I(){_.value=!0,m.value=null;const e=x.params.mesh;try{l.value=await b.getMesh({name:e}),d.value=await b.getMeshInsights({name:e})}catch(t){t instanceof Error?m.value=t:console.error(m),l.value=null,d.value=null}finally{_.value=!1}}function g(e,t){if(e===null||e[t]===void 0)return!1;const a=e[t].enabledBackend??e[t].defaultBackend??e[t].backends[0].name,n=e[t].backends.find(r=>r.name===a);return`${n.type} / ${n.name}`}async function L(e){const t=x.params.mesh;return await b.getMesh({name:t},e)}return(e,t)=>{const a=H("router-link");return u(),h(Y,null,{default:i(()=>[s(Z,{title:p(o)("meshes.routes.overview.title")},null,8,["title"]),c(),s(X,null,{default:i(()=>[T("div",re,[s(p(O),null,{body:i(()=>[s(se)]),_:1}),c(),l.value!==null?(u(),h(p(O),{key:0},{body:i(()=>[T("div",ie,[s(te,{"is-loading":_.value,error:m.value,"is-empty":l.value===null||d.value===null},{default:i(()=>[s(N,null,{default:i(()=>[(u(!0),y(w,null,S(V.value,(n,r)=>(u(),h(j,{key:r,term:p(o)(`http.api.property.${r}`)},{default:i(()=>[typeof n=="boolean"?(u(),h(p(E),{key:0,appearance:n?"success":"danger"},{default:i(()=>[c(k(n?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):r==="name"&&typeof n=="string"?(u(),h(ae,{key:1,text:n},null,8,["text"])):(u(),y(w,{key:2},[c(k(n),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),_:1},8,["is-loading","error","is-empty"]),c(),s(N,null,{default:i(()=>[(u(!0),y(w,null,S(B.value,(n,r)=>(u(),h(j,{key:r,term:p(o)(`http.api.property.${r}`)},{default:i(()=>[typeof n=="boolean"?(u(),h(p(E),{key:0,appearance:n?"success":"danger"},{default:i(()=>[c(k(n?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(u(),y(w,{key:1},[c(k(n),1)],64))]),_:2},1032,["term"]))),128))]),_:1}),c(),s(N,null,{default:i(()=>[s(j,{term:`Policies (${P.value})`},{default:i(()=>[T("ul",null,[(u(!0),y(w,null,S($.value,(n,r)=>(u(),y("li",{key:r},[s(a,{to:{name:"policies-list-view",params:{policyPath:n.path}}},{default:i(()=>[c(k(n.name)+": "+k(n.total),1)]),_:2},1032,["to"])]))),128))])]),_:1},8,["term"])]),_:1})])]),_:1})):J("",!0),c(),s(p(O),null,{body:i(()=>{var n;return[s(ee,{id:"code-block-mesh","resource-fetcher":L,"resource-fetcher-watch-key":((n=l.value)==null?void 0:n.name)||null},null,8,["resource-fetcher-watch-key"])]}),_:1})])]),_:1})]),_:1})}}});const ke=G(ue,[["__scopeId","data-v-252e58a8"]]);export{ke as default};