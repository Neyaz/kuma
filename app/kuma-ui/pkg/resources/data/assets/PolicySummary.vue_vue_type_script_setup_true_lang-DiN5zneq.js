import{d as k,j as g,r as m,o as s,c as l,k as n,t as o,l as i,e,b as y,w as a,m as p,p as r,F as v,U as d,a as z}from"./index-D7Wwvihu.js";const b={class:"stack"},B={key:0},w={class:"mt-4 stack-with-borders"},C={key:0},R={class:"mt-4"},x=k({__name:"PolicySummary",props:{policy:{}},setup(_){const{t:c}=g(),t=_;return(u,N)=>{const h=m("KBadge"),f=m("XAction");return s(),l("div",b,[t.policy.spec?(s(),l("div",B,[n("h3",null,o(i(c)("policies.routes.item.overview")),1),e(),n("div",w,[y(d,{layout:"horizontal"},{title:a(()=>[e(o(i(c)("http.api.property.targetRef")),1)]),body:a(()=>[t.policy.spec.targetRef?(s(),p(h,{key:0,appearance:"neutral"},{default:a(()=>[e(o(t.policy.spec.targetRef.kind),1),t.policy.spec.targetRef.name?(s(),l("span",C,[e(":"),n("b",null,o(t.policy.spec.targetRef.name),1)])):r("",!0)]),_:1})):(s(),l(v,{key:1},[e(o(i(c)("common.detail.none")),1)],64))]),_:1}),e(),t.policy.namespace.length>0?(s(),p(d,{key:0,layout:"horizontal"},{title:a(()=>[e(o(i(c)("data-planes.routes.item.namespace")),1)]),body:a(()=>[e(o(t.policy.namespace),1)]),_:1})):r("",!0),e(),t.policy.zone?(s(),p(d,{key:1,layout:"horizontal"},{title:a(()=>[e(`
            Zone
          `)]),body:a(()=>[y(f,{to:{name:"zone-cp-detail-view",params:{zone:t.policy.zone}}},{default:a(()=>[e(o(t.policy.zone),1)]),_:1},8,["to"])]),_:1})):r("",!0)])])):r("",!0),e(),n("div",null,[n("h3",null,o(i(c)("policies.routes.item.config")),1),e(),n("div",R,[z(u.$slots,"default")])])])}}});export{x as _};
