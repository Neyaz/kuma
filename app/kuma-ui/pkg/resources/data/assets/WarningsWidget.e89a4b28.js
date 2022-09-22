import{_ as i,o as t,f as s,t as a,h as o,e,$ as P,a4 as b,a5 as C,a6 as D,b as p,w as m,j as O,d as W,a7 as A,F as I,r as g}from"./index.2f6d90b0.js";const N={name:"WarningDefault",props:{payload:{type:[String,Object],required:!0}}};function E(r,_,n,l,d,c){return t(),s("span",null,a(n.payload),1)}const V=i(N,[["render",E]]),K={name:"WarningEnvoyIncompatible",props:{payload:{type:Object,required:!0}}},v=e(" Envoy ("),S=e(") is unsupported by the current version of Kuma DP ("),x=e(") [Requirements: "),B=e("] ");function T(r,_,n,l,d,c){return t(),s("span",null,[v,o("strong",null,a(n.payload.envoy),1),S,o("strong",null,a(n.payload.kumaDp),1),x,o("strong",null,a(n.payload.requirements),1),B])}const U=i(K,[["render",T]]),q={name:"WarningZoneAndKumaDPVersionsIncompatible",props:{payload:{type:Object,required:!0}}},w=e(" There is mismatch between versions of Kuma DP ("),Z=e(") and the Zone CP ("),L=e(") ");function M(r,_,n,l,d,c){return t(),s("span",null,[w,o("strong",null,a(n.payload.kumaDp),1),Z,o("strong",null,a(n.payload.zoneVersion),1),L])}const j=i(q,[["render",M]]),k={name:"WarningUnsupportedKumaDPVersion",props:{payload:{type:Object,required:!0}}},R=e(" Unsupported version of Kuma DP ("),G=e(") ");function z(r,_,n,l,d,c){return t(),s("span",null,[R,o("strong",null,a(n.payload.kumaDp),1),G])}const F=i(k,[["render",z]]),Y={name:"WarningZoneAndGlobalCPSVersionsIncompatible",props:{payload:{type:Object,required:!0}}},H=e(" There is mismatch between versions of Zone CP ("),J=e(") and the Global CP ("),Q=e(") ");function X(r,_,n,l,d,c){return t(),s("span",null,[H,o("strong",null,a(n.payload.zoneCpVersion),1),J,o("strong",null,a(n.payload.globalCpVersion),1),Q])}const nn=i(Y,[["render",X]]),en={name:"WarningsWidget",props:{warnings:{type:Array,required:!0}},methods:{getWarningComponent(r=""){switch(r){case D:return U;case C:return F;case b:return j;case P:return nn;default:return V}}}};function tn(r,_,n,l,d,c){const $=g("KAlert"),y=g("KCard");return t(),p(y,{"border-variant":"noBorder"},{body:m(()=>[o("ul",null,[(t(!0),s(I,null,O(n.warnings,({kind:u,payload:h,index:f})=>(t(),s("li",{key:`${u}/${f}`,class:"mb-1"},[W($,{appearance:"warning"},{alertMessage:m(()=>[(t(),p(A(c.getWarningComponent(u)),{payload:h},null,8,["payload"]))]),_:2},1024)]))),128))])]),_:1})}const on=i(en,[["render",tn]]);export{on as W};
