import{_ as d}from"./EnvoyData.vue_vue_type_script_setup_true_lang-DMK2bYh7.js";import{d as l,h as a,o as m,a as _,w as t,j as s,k as g}from"./index-ChTNn-OB.js";import"./kong-icons.es350-PMU6AsPW.js";import"./CodeBlock-DcRwY4Tw.js";const E=l({__name:"ZoneEgressStatsView",setup(u){return(f,h)=>{const n=a("RouteTitle"),r=a("KCard"),p=a("AppView"),c=a("RouteView");return m(),_(c,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:i})=>[s(n,{render:!1,title:i("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"]),g(),s(p,null,{default:t(()=>[s(r,null,{default:t(()=>[s(d,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{E as default};