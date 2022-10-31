import{A as g}from"./AuthLayout.ae19d9c2.js";import{B as o}from"./BaseInput.23f77a2d.js";import{_ as y}from"./BaseButton.vue_vue_type_script_setup_true_lang.ce15cb39.js";import{_ as U}from"./BaseCheckbox.vue_vue_type_script_setup_true_lang.59e38f4c.js";import{_ as w}from"./BaseLink.vue_vue_type_script_setup_true_lang.eaad37fd.js";import{d as P,u as L,a as n,k as A,l as C,o as R,c as I,w as r,b as m,e as t,f as i,g as f,N as S,h as B,t as T,R as p}from"./index.34c5d693.js";import"./LogoWithText.909b0ce5.js";/* empty css                                                                   */const k={class:"text-center md:text-left"},O=m("div",{class:"text-3xl text-white"},"Sign Up",-1),E=m("div",{class:"mt-3 mb-10 text-lg text-white"},"Let's get you started",-1),G=f("Login Instead"),H={class:"flex justify-between"},$=f("Login Instead"),F=f("Sign Up"),X=P({__name:"UserRegisterView",setup(j){const c=L(),u=n(!1),d=n(!1),a=n({firstName:"",lastName:"",email:"",phoneNumber:"",confirmPassword:"",password:"",referrer:""}),N=S(),x=B(),b=A(()=>{const{firstName:s,lastName:e,email:l,phoneNumber:h,password:v,confirmPassword:V}=a.value;return!s||!e||!l||!h||!v||!V||v!==V}),_=async()=>{d.value=!0,await c.signup(a.value).then(s=>{s.status&&(T.success(s.message),x.push({name:p.AUTH_LOGIN})),d.value=!1}).catch(()=>{d.value=!1})};return C(()=>{const{ref:s}=N.query;s&&(a.value.referrer=s)}),(s,e)=>(R(),I(g,null,{title:r(()=>[m("div",k,[O,E,t(w,{class:"hidden md:flex",textColor:"text-white",route:i(p).AUTH_LOGIN},{default:r(()=>[G]),_:1},8,["route"])])]),form:r(()=>[t(o,{type:"text",placeholder:"First Name",label:"First Name",modelValue:a.value.firstName,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value.firstName=l)},null,8,["modelValue"]),t(o,{type:"text",placeholder:"Last Name",label:"Last Name",modelValue:a.value.lastName,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.lastName=l)},null,8,["modelValue"]),t(o,{type:"text",placeholder:"Email Address",label:"Email Address",modelValue:a.value.email,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value.email=l)},null,8,["modelValue"]),t(o,{type:"text",placeholder:"Phone Number",label:"Phone Number",modelValue:a.value.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value.phoneNumber=l)},null,8,["modelValue"]),t(o,{type:"text",placeholder:"Referrer",label:"Referrer",modelValue:a.value.referrer,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value.referrer=l)},null,8,["modelValue"]),t(o,{type:u.value?"ext":"password",placeholder:"Password",label:"Password",modelValue:a.value.password,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.password=l)},null,8,["type","modelValue"]),t(o,{type:u.value?"ext":"password",placeholder:"Confirm Password",label:"Confirm Password",modelValue:a.value.confirmPassword,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.confirmPassword=l)},null,8,["type","modelValue"]),m("div",H,[t(U,{label:"Show Password",modelValue:u.value,"onUpdate:modelValue":e[7]||(e[7]=l=>u.value=l)},null,8,["modelValue"]),t(w,{textColor:"text-primary",route:i(p).AUTH_LOGIN},{default:r(()=>[$]),_:1},8,["route"])]),t(y,{loading:d.value,disabled:i(b),class:"mt-5 w-full bg-orange",onClick:_},{default:r(()=>[F]),_:1},8,["loading","disabled"])]),_:1}))}});export{X as default};