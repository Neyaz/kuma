import{d as y,C as v,j as r,c as C,I as $,o as i,a as k,B as S,s as b,w,e as z,z as p,b as u,Q as A,$ as x}from"./index-840bc7ec.js";import{f as B}from"./RouteView.vue_vue_type_script_setup_true_lang-3639338c.js";const I={key:0,class:"app-collection-toolbar"},d=5,N=y({__name:"AppCollection",props:{total:{default:0},pageNumber:{},pageSize:{},items:{},headers:{},error:{}},emits:["change"],setup(m,{emit:h}){const t=m,_=v(),c=r(t.items),l=r(0),f=C(()=>{const a=t.headers.filter(o=>["warnings","actions"].includes(o.key));if(a.length>4)return"initial";const s=100-a.length*d,e=t.headers.length-a.length;return`calc(${s}% / ${e})`});$(()=>t.items,()=>{l.value++,c.value=t.items});const g=a=>{const s=a.target.closest("tr");if(s){const e=s.querySelector("a");e!==null&&e.click()}};return(a,s)=>(i(),k(u(x),{class:"app-collection",style:A(`--column-width: ${f.value}; --special-column-width: ${d}%;`),"has-error":typeof t.error<"u","pagination-total-items":t.total,"initial-fetcher-params":{page:t.pageNumber,pageSize:t.pageSize},headers:t.headers,"fetcher-cache-key":String(l.value),fetcher:({page:e,pageSize:o,query:n})=>(h("change",{page:e,size:o,s:n}),{data:c.value}),"cell-attrs":({headerKey:e})=>({class:`${e}-column`}),"empty-state-icon-size":"96","disable-sorting":"","hide-pagination-when-optional":"","onRow:click":g},S({_:2},[b(Object.keys(u(_)),e=>({name:e,fn:w(({row:o,rowValue:n})=>[e==="toolbar"?(i(),z("div",I,[p(a.$slots,"toolbar",{},void 0,!0)])):p(a.$slots,e,{key:1,row:o,rowValue:n},void 0,!0)])}))]),1032,["style","has-error","pagination-total-items","initial-fetcher-params","headers","fetcher-cache-key","fetcher","cell-attrs"]))}});const j=B(N,[["__scopeId","data-v-dd44896a"]]);export{j as A};