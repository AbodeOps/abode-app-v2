import{d as y,h as $,k as f,o as e,i as a,b as t,F as l,f as d,H as r,R as S,a as x,aj as A,l as j,c as g,J as C,T as I,e as p}from"./index.34c5d693.js";import{a as w}from"./helpers.38b13223.js";import{u as T,A as B}from"./AbodeLoader.38ed8401.js";import{_ as R}from"./BaseTabs.vue_vue_type_script_setup_true_lang.dba3eedc.js";const V={class:"h-[10rem] w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 md:h-40"},M=["src"],U={class:"mt-6 text-xl font-semibold"},N={class:"mb-6 mt-1 text-xs font-light text-gray-40"},D={class:"flex w-full justify-between"},z={key:0,class:"w-1/2"},F={class:"text-md text-primary"},H={class:"mt-1 text-sm font-light text-gray-50"},P={key:1,class:"w-1/2"},G={class:"text-md text-primary"},Z=t("div",{class:"mt-1 text-sm font-light text-gray-50"},"Amount Invested",-1),q={key:2,class:"w-1/2"},J={class:"text-md text-primary"},K=t("div",{class:"mt-1 text-sm font-light text-gray-50"},"Co-owners",-1),X={key:3,class:"w-1/2 text-start"},Q=t("div",{class:"mt-1 text-sm font-light text-gray-50"},"Holding Period",-1),W={class:"mt-5 flex w-full justify-between"},Y={key:0,class:"w-1/2"},tt=t("div",{class:"mt-1 text-sm font-light text-gray-50"},"Available Units",-1),st={key:1,class:"w-1/2 text-start"},et=t("div",{class:"mt-1 text-sm font-light text-gray-50"},"Current Sales Value",-1),it={key:2,class:"w-1/2 text-start"},ot=t("div",null,"12-Dec-2021",-1),at=t("div",{class:"mt-1 text-sm font-light text-gray-50"},"Collection Date",-1),nt=[ot,at],ct={key:3,class:"w-1/2 text-start"},lt=t("div",{class:"mt-1 text-sm font-light text-gray-50"},"Shares bought",-1),rt={class:"absolute -top-3 left-0 flex justify-between"},ut={class:"flex"},dt={key:0,class:"mr-2 inline-flex"},bt=t("div",{class:"rounded-full bg-red py-1 px-4 text-xs text-white"},"Sold Out",-1),_t=[bt],ht=t("div",{class:"inline-flex"},[t("div",{class:"rounded-full border border-gray-70 bg-white py-1 px-4 text-xs text-gray-70"},"Own to Earn ")],-1),E=y({__name:"AssetCard",props:{subscribed:{type:Boolean},asset:null,subscription:null},setup(s){const i=s,n=$(),h=()=>{var o;n.push({name:i.subscribed?S.USER_SUBSCRIPTIONS_DETAILS:S.USER_ASSETS_DETAILS,params:{id:i.subscribed?(o=i.subscription)==null?void 0:o.id:i.asset.id}})},b=f(()=>{var o;return i.asset.unit_price*(((o=i.subscription)==null?void 0:o.units)||0)}),m=f(()=>{var o,c,u;return((((o=i.subscription)==null?void 0:o.amount)||0)-i.asset.unit_price*(((c=i.subscription)==null?void 0:c.units)||0))/(((u=i.subscription)==null?void 0:u.amount)||1)*.01}),v=f(()=>{var o;return(o=i.subscription)==null?void 0:o.project.funds.reduce((c,u)=>(c[u.userId]?c[u.userId].count+=1:c[u.userId]={count:1},c),{})}),_=f(()=>Object.keys(v.value).reduce((o,c)=>o+v.value[c].count,0)),L=f(()=>{var o,c;return Number((((o=i.subscription)==null?void 0:o.units)||0)/(((c=i.subscription)==null?void 0:c.project.totalUnits)||1)*100).toFixed(2)}),O=o=>{o.target instanceof HTMLImageElement&&(o.target.src="https://api.abode.ng/storage/htsBVPzKXGLzBSplzRonHBz5ZV9AqNMBtZMCcw7I.jpg")};return(o,c)=>{var u,k;return e(),a("div",{onClick:h,class:"relative flex cursor-pointer flex-col rounded-lg border border-gray-20 p-8"},[t("div",V,[t("img",{src:s.asset.image_url,alt:"product-15",class:"h-full w-full object-cover object-top lg:h-full lg:w-full",onError:O},null,40,M)]),t("div",U,l(s.asset.name),1),t("div",N,l(s.asset.location),1),t("div",D,[s.subscribed?r("",!0):(e(),a("div",z,[t("div",F,l(d(w)(s.asset.unit_price)),1),t("div",H,"Per "+l(s.asset.unit_measurement),1)])),s.subscribed?(e(),a("div",P,[t("div",G,l(d(w)((u=s.subscription)==null?void 0:u.amount)),1),Z])):r("",!0),s.subscribed?(e(),a("div",q,[t("div",J,l(d(_)),1),K])):r("",!0),s.subscribed?r("",!0):(e(),a("div",X,[t("div",null,l(s.asset.max_duration)+" Months",1),Q]))]),t("div",W,[s.subscribed?r("",!0):(e(),a("div",Y,[t("div",null,l(s.asset.available_units),1),tt])),s.subscribed&&s.subscription?(e(),a("div",st,[t("div",null,l(d(m))+"% ("+l(d(w)(d(b)))+")",1),et])):r("",!0),s.subscribed?r("",!0):(e(),a("div",it,nt)),s.subscribed&&s.subscription?(e(),a("div",ct,[t("div",null,l(d(L))+"% ("+l((k=s.subscription)==null?void 0:k.units)+" Unit"+l(s.subscription.units>1?"s":"")+")",1),lt])):r("",!0)]),t("div",rt,[t("div",ut,[s.asset.status?r("",!0):(e(),a("div",dt,_t)),ht])])])}}}),mt={key:1,class:"grid grid-cols-1 gap-10 md:grid-cols-3"},ft=y({__name:"AssetList",setup(s){const i=T(),n=x(!1),{assets:h}=A(i),b=async()=>{n.value=!0,await i.fetchAssets().then(()=>{n.value=!1}).catch(()=>{n.value=!1})};return j(()=>{b()}),(m,v)=>(e(),a("div",null,[n.value?(e(),g(B,{key:0})):(e(),a("div",mt,[(e(!0),a(C,null,I(d(h),_=>(e(),g(E,{asset:_,key:_.id},null,8,["asset"]))),128))]))]))}}),vt={key:1,class:"grid grid-cols-1 gap-10 md:grid-cols-3"},xt=y({__name:"SubscriptionList",setup(s){const i=T(),n=x(!1),{subscriptions:h}=A(i),b=async()=>{n.value=!0,await i.fetchSubscriptions().then(()=>{n.value=!1}).catch(()=>{n.value=!1})};return j(()=>{b()}),(m,v)=>(e(),a("div",null,[n.value?(e(),g(B,{key:0})):(e(),a("div",vt,[(e(!0),a(C,null,I(d(h),_=>(e(),g(E,{subscribed:"",subscription:_,asset:_.project,key:_.id},null,8,["subscription","asset"]))),128))]))]))}}),gt={class:"px-4 md:px-12"},yt={class:"mb-10 flex items-center justify-between"},pt={key:0},wt={key:1},Ct=y({__name:"Assets",setup(s){const i=x([{label:"Available Offers",key:"available-offers"},{label:"My Subscriptions",key:"subscriptions"}]),n=x(i.value[0].key);return(h,b)=>(e(),a("div",gt,[t("div",yt,[p(R,{tabs:i.value,activeTab:n.value,onChange:b[0]||(b[0]=m=>n.value=m)},null,8,["tabs","activeTab"])]),n.value==="available-offers"?(e(),a("div",pt,[p(ft)])):r("",!0),n.value==="subscriptions"?(e(),a("div",wt,[p(xt)])):r("",!0)]))}});export{Ct as default};