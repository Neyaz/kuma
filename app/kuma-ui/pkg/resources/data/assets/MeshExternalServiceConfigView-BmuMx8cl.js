import{_ as f}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-BLGKZKAM.js";import{d as C,h as a,o as d,a as i,w as r,j as t,e as x}from"./index-ChTNn-OB.js";import"./CodeBlock-DcRwY4Tw.js";import"./toYaml-DB9FPXFY.js";const F=C({__name:"MeshExternalServiceConfigView",props:{data:{}},setup(p){const n=p;return(w,E)=>{const m=a("DataSource"),l=a("KCard"),_=a("AppView"),h=a("RouteView");return d(),i(h,{name:"mesh-external-service-config-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:r(({route:o})=>[t(_,null,{default:r(()=>[t(l,null,{default:r(()=>[t(f,{resource:n.data.config,"is-searchable":"",query:o.params.codeSearch,"is-filter-mode":o.params.codeFilter,"is-reg-exp-mode":o.params.codeRegExp,onQueryChange:e=>o.update({codeSearch:e}),onFilterModeChange:e=>o.update({codeFilter:e}),onRegExpModeChange:e=>o.update({codeRegExp:e})},{default:r(({copy:e,copying:u})=>[u?(d(),i(m,{key:0,src:`/meshes/${n.data.mesh}/mesh-external-service/${n.data.id}/as/kubernetes?no-store`,onChange:s=>{e(c=>c(s))},onError:s=>{e((c,g)=>g(s))}},null,8,["src","onChange","onError"])):x("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{F as default};