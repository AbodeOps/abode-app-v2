import{d as i,a as d,o as r,i as m,b as s,K as u,L as p,F as h}from"./index.34c5d693.js";const _={class:"relative flex items-start"},b={class:"flex h-5 items-center"},f={class:"ml-3 text-sm"},v={for:"comments",class:"text-gray-700"},g=i({__name:"BaseCheckbox",props:{label:null},emits:["update:modelValue"],setup(a,{emit:l}){const e=d(!1),n=t=>{e.value=!e.value,t.target instanceof HTMLInputElement?l("update:modelValue",e.value):console.log("checking")};return(t,o)=>(r(),m("div",_,[s("div",b,[u(s("input",{id:"comments","aria-describedby":"comments-description",onClick:n,name:"comments",type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,512),[[p,e.value]])]),s("div",f,[s("label",v,h(a.label),1)])]))}});export{g as _};
