import{d as K,h as l,o as n,a as c,w as s,j as t,k as m,z as f,aB as T,C as N,X as I,t as i,b as p,F as _,e as h,B as k,M as $,r as M,A as P}from"./index-ChTNn-OB.js";import{e as X}from"./kong-icons.es249-CTaCOXIv.js";import{S as q}from"./SummaryView-B-JEVZY-.js";const E=K({__name:"MeshServiceListView",setup(F){return(Z,j)=>{const y=l("RouteTitle"),v=l("XAction"),b=l("RouterLink"),u=l("KTruncate"),w=l("KBadge"),C=l("RouterView"),V=l("DataCollection"),D=l("DataLoader"),S=l("KCard"),L=l("AppView"),R=l("RouteView"),x=l("DataSource");return n(),c(x,{src:"/me"},{default:s(({data:g})=>[g?(n(),c(R,{key:0,name:"mesh-service-list-view",params:{page:1,size:g.pageSize,mesh:"",service:""}},{default:s(({route:o,t:d,can:A,uri:B})=>[t(y,{render:!1,title:d("services.routes.mesh-service-list-view.title")},null,8,["title"]),m(),t(L,null,{default:s(()=>[t(S,null,{default:s(()=>[t(D,{src:B(f(T),"/meshes/:mesh/mesh-services",{mesh:o.params.mesh},{page:o.params.page,size:o.params.size})},{loadable:s(({data:a})=>[t(V,{type:"services",items:(a==null?void 0:a.items)??[void 0]},{default:s(()=>[t(N,{"data-testid":"service-collection",headers:[{label:"Name",key:"name"},{label:"Namespace",key:"namespace"},...A("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Addresses",key:"addresses"},{label:"Ports",key:"ports"},{label:"Tags",key:"tags"},{label:"Details",key:"details",hideLabel:!0}],"page-number":o.params.page,"page-size":o.params.size,total:a==null?void 0:a.total,items:a==null?void 0:a.items,"is-selected-row":e=>e.name===o.params.service,onChange:o.update},{name:s(({row:e})=>[t(I,{text:e.name},{default:s(()=>[t(v,{"data-action":"",to:{name:"mesh-service-summary-view",params:{mesh:e.mesh,service:e.id},query:{page:o.params.page,size:o.params.size}}},{default:s(()=>[m(i(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),namespace:s(({row:e})=>[m(i(e.namespace),1)]),zone:s(({row:e})=>[e.labels&&e.labels["kuma.io/origin"]==="zone"&&e.labels["kuma.io/zone"]?(n(),p(_,{key:0},[e.labels["kuma.io/zone"]?(n(),c(b,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.labels["kuma.io/zone"]}}},{default:s(()=>[m(i(e.labels["kuma.io/zone"]),1)]),_:2},1032,["to"])):h("",!0)],64)):(n(),p(_,{key:1},[m(i(d("common.detail.none")),1)],64))]),addresses:s(({row:e})=>[t(u,null,{default:s(()=>[(n(!0),p(_,null,k(e.status.addresses,r=>(n(),p("span",{key:r.hostname},i(r.hostname),1))),128))]),_:2},1024)]),ports:s(({row:e})=>[t(u,null,{default:s(()=>[(n(!0),p(_,null,k(e.spec.ports,r=>(n(),c(w,{key:r.port,appearance:"info"},{default:s(()=>[m(i(r.port)+":"+i(r.targetPort)+"/"+i(r.appProtocol),1)]),_:2},1024))),128))]),_:2},1024)]),tags:s(({row:e})=>[t(u,null,{default:s(()=>[(n(!0),p(_,null,k(e.spec.selector.dataplaneTags,(r,z)=>(n(),c(w,{key:`${z}:${r}`,appearance:"info"},{default:s(()=>[m(i(z)+":"+i(r),1)]),_:2},1024))),128))]),_:2},1024)]),details:s(({row:e})=>[t(v,{class:"details-link","data-testid":"details-link",to:{name:"mesh-service-detail-view",params:{mesh:e.mesh,service:e.id}}},{default:s(()=>[m(i(d("common.collection.details_link"))+" ",1),t(f(X),{decorative:"",size:f($)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["headers","page-number","page-size","total","items","is-selected-row","onChange"]),m(),a!=null&&a.items&&o.params.service?(n(),c(C,{key:0},{default:s(e=>[t(q,{onClose:r=>o.replace({name:"mesh-service-list-view",params:{mesh:o.params.mesh},query:{page:o.params.page,size:o.params.size}})},{default:s(()=>[(n(),c(M(e.Component),{items:a==null?void 0:a.items},null,8,["items"]))]),_:2},1032,["onClose"])]),_:2},1024)):h("",!0)]),_:2},1032,["items"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["params"])):h("",!0)]),_:1})}}}),H=P(E,[["__scopeId","data-v-47ecf451"]]);export{H as default};