import{c as l,_ as x,a as j,b as S,A as w}from"./AssetInsights.bbe15c64.js";import{b as A}from"./BankTransferCard.vue_vue_type_script_setup_true_lang.e3b0eb0e.js";import{a as g}from"./helpers.38b13223.js";import{d as y,k as d,o as c,i as u,b,e as s,f as r,a as $,Y as B,c as k,H as I,N}from"./index.34c5d693.js";import{u as U,A as V}from"./AbodeLoader.38ed8401.js";import{_ as C}from"./BaseShare.vue_vue_type_script_setup_true_lang.9a2eb582.js";import"./BaseModalHeader.vue_vue_type_script_setup_true_lang.749f4ca2.js";import"./BaseButton.vue_vue_type_script_setup_true_lang.ce15cb39.js";import"./BaseInput.23f77a2d.js";import"./DashboardWalletIcon.d255cb7e.js";import"./types.093907a8.js";import"./transactions.f9a2655e.js";import"./CopyIcon.be32f6b5.js";import"./WhatsappIcon.0a772511.js";const M={class:"w-full rounded-lg border border-gray-40 p-8"},O=b("div",{class:"text-xl font-bold md:text-2xl"},"My Shares",-1),P={class:"mt-5 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-3"},G=y({__name:"SubscriptionDetailsCard",props:{asset:null,subscription:null},setup(i){const t=i,p=d(()=>t.asset.funds.reduce((a,o)=>a+o.units,0)),m=d(()=>{var a,o;return Number((((a=t.subscription)==null?void 0:a.units)||0)/(((o=t.subscription)==null?void 0:o.project.totalUnits)||1)*100).toFixed(2)}),e=d(()=>{var a;return t.asset.unit_price*(((a=t.subscription)==null?void 0:a.units)||0)});return(a,o)=>(c(),u("div",M,[O,b("div",P,[s(l,{value:`${i.subscription.units}`,label:"Units Bought"},null,8,["value"]),s(l,{value:`${r(p)}`,label:"Units Sold"},null,8,["value"]),s(l,{value:`${i.asset.available_units}`,label:"Units Available"},null,8,["value"]),s(l,{value:`${r(m)}%`,label:"Percentage Ownership"},null,8,["value"]),s(l,{value:`${r(g)(i.subscription.amount)}`,label:"Amount Invested"},null,8,["value"]),s(l,{value:`${r(g)(r(e)-i.subscription.amount)}`,label:"Profit"},null,8,["value"]),s(l,{value:"Income Type",label:"Rental Income"}),s(l,{value:`${i.asset.potentialGrowth}`,label:"Potential Capital Appreciation"},null,8,["value"])])]))}}),L={class:"px-4 md:px-12"},R={key:1,class:"grid grid-cols-1 gap-10 md:grid-cols-8"},D={class:"col-span-1 md:col-span-3"},E={key:0,class:"col-span-1 md:col-span-5"},ts=y({__name:"ViewSubscription",setup(i){const t=$(!1),p=N(),m=U(),e=$(),a=async()=>{try{t.value=!0;const o=p.params.id,n=await m.fetchSubscriptionById(Number(o));e.value={...n.data,project:{...n.data.project,totalUnits:n.data.project.expected_slots,potentialGrowth:n.data.project.potential_growth}}}finally{t.value=!1}};return B(async()=>{await a()}),(o,n)=>{var v,_,f,h;return c(),u("div",L,[s(A),t.value?(c(),k(V,{key:0})):(c(),u("div",R,[b("div",D,[s(x,{images:[{src:`${(_=(v=e.value)==null?void 0:v.project)==null?void 0:_.image_url}`,alt:`Asset ${(h=(f=e.value)==null?void 0:f.project)==null?void 0:h.id}`}]},null,8,["images"]),s(C,{class:"mt-10"})]),e.value&&!t.value?(c(),u("div",E,[s(j,{subscribed:"",subcription:e.value,asset:e.value.project},null,8,["subcription","asset"]),s(G,{class:"my-10",subscription:e.value,asset:e.value.project},null,8,["subscription","asset"]),s(S,{class:"mb-10",asset:e.value.project},null,8,["asset"]),s(w)])):I("",!0)]))])}}});export{ts as default};