import{d as p,U as b,o as s,c as r,p as o,r as i,f as t,q as d,v as l,_ as u,b as v,w as c,P as _,e as h,t as f,n as m,z as S,A as y}from"./index-68e88176.js";const x={class:"onboarding-heading"},k={class:"onboarding-title","data-testid":"onboarding-header"},$={key:0,class:"onboarding-description"},w=p({__name:"OnboardingHeading",setup(a){const e=b();return(n,g)=>(s(),r("div",x,[o("h1",k,[i(n.$slots,"title",{},void 0,!0)]),t(),d(e).description?(s(),r("div",$,[i(n.$slots,"description",{},void 0,!0)])):l("",!0)]))}});const z=u(w,[["__scopeId","data-v-cd4747d1"]]),N={class:"onboarding-actions"},O={class:"button-list"},B=p({__name:"OnboardingNavigation",props:{shouldAllowNext:{type:Boolean,required:!1,default:!0},showSkip:{type:Boolean,required:!1,default:!0},nextStep:{type:String,required:!0},previousStep:{type:String,required:!1,default:""},nextStepTitle:{type:String,required:!1,default:"Next"},lastStep:{type:Boolean,required:!1,default:!1}},setup(a){const e=a;return(n,g)=>(s(),r("div",N,[e.previousStep?(s(),v(d(_),{key:0,appearance:"secondary",to:{name:e.previousStep},"data-testid":"onboarding-previous-button"},{default:c(()=>[t(`
      Back
    `)]),_:1},8,["to"])):l("",!0),t(),o("div",O,[e.showSkip?(s(),v(d(_),{key:0,appearance:"tertiary","data-testid":"onboarding-skip-button",to:{name:"home"}},{default:c(()=>[t(`
        Skip setup
      `)]),_:1})):l("",!0),t(),h(d(_),{disabled:!e.shouldAllowNext,appearance:"primary",to:{name:e.lastStep?"home":e.nextStep},"data-testid":"onboarding-next-button"},{default:c(()=>[t(f(e.nextStepTitle),1)]),_:1},8,["disabled","to"])])]))}});const D=u(B,[["__scopeId","data-v-4695c7f4"]]),q=a=>(S("data-v-be6e4144"),a=a(),y(),a),I={class:"onboarding-container"},P={class:"onboarding-container__header"},C={class:"onboarding-container__inner-content"},V={class:"mt-4"},A=q(()=>o("div",{class:"background-image"},null,-1)),H=p({__name:"OnboardingPage",props:{withImage:{type:Boolean,required:!1,default:!1}},setup(a){const e=a;return(n,g)=>(s(),r("div",null,[o("div",I,[o("div",P,[i(n.$slots,"header",{},void 0,!0)]),t(),o("div",{class:m(["onboarding-container__content",{"onboarding-container__content--with-image":e.withImage}])},[o("div",C,[i(n.$slots,"content",{},void 0,!0)])],2),t(),o("div",V,[i(n.$slots,"navigation",{},void 0,!0)])]),t(),A]))}});const E=u(H,[["__scopeId","data-v-be6e4144"]]);export{E as O,z as a,D as b};