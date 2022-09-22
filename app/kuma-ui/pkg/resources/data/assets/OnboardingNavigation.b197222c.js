import{cw as S,_ as m,r as g,o,f as v,b as r,w as s,n as p,h as d,p as c,d as _,e as i,t as b}from"./index.2f6d90b0.js";const f={name:"OnboardingNavigation",props:{shouldAllowNext:{type:Boolean,default:!0},showSkip:{type:Boolean,default:!0},nextStep:{type:String,required:!0},previousStep:{type:String,default:""},nextStepTitle:{type:String,default:"Next"},lastStep:{type:Boolean,default:!1}},computed:{classes(){return["mt-4 flex items-center flex-col sm:flex-row",{"justify-center":this.lastStep,"justify-between":this.previousStep&&!this.lastStep,"justify-end":!this.previousStep&&!this.lastStep}]}},methods:{...S("onboarding",["completeOnboarding","changeStep"]),skipOnboarding(){this.completeOnboarding(),this.$router.push({name:"global-overview",params:{mesh:"all"}})}}},k=i(" Back "),h=i(" Skip Setup ");function x(l,t,e,y,w,a){const n=g("KButton");return o(),v("div",{class:c(a.classes)},[e.previousStep?(o(),r(n,{key:0,appearance:"primary",class:"navigation-button navigation-button--back",to:{name:e.previousStep},onClick:t[0]||(t[0]=u=>l.changeStep(e.previousStep))},{default:s(()=>[k]),_:1},8,["to"])):p("",!0),d("div",null,[e.showSkip?(o(),r(n,{key:0,class:"skip-button",appearance:"btn-link",size:"small",onClick:a.skipOnboarding},{default:s(()=>[h]),_:1},8,["onClick"])):p("",!0),d("span",{class:c(["inline-block",{"cursor-not-allowed":!e.shouldAllowNext}])},[_(n,{disabled:!e.shouldAllowNext,class:"navigation-button navigation-button--next",appearance:"primary",to:{name:e.nextStep},onClick:t[1]||(t[1]=u=>e.lastStep?a.skipOnboarding():l.changeStep(e.nextStep))},{default:s(()=>[i(b(e.nextStepTitle),1)]),_:1},8,["disabled","to"])],2)])],2)}const B=m(f,[["render",x],["__scopeId","data-v-d7c01a90"]]);export{B as O};
