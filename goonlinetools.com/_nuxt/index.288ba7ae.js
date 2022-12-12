import{H,T as F,M as V,L as G}from"./components.87319648.js";import O from"./Native.0568e673.js";import{s as f,r as S,S as D,b as s,f as i,z as M,e as t,C as a,K as N,u as r,k as T,D as h,F as d,E as u,h as I,o as n,A as E,H as c,G as m}from"./entry.71944e6b.js";import{t as A}from"./tools.98013ce6.js";import"./native-ad.fcebfdd7.js";const P=[{text:"Programming Tools",url:"#programming",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Random Tools",url:"#random",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Image Tools",url:"#image",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Code Converter Tools",url:"#codeconverter",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Encode/Decode Tools",url:"#ende",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Number Converter Tools",url:"#numberconverter",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Miscellaneous Tools",url:"#miscellaneous",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Font Converter Tools",url:"#fontconverter",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`},{text:"Text Generator Tools",url:"#fontgenerator",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>`}],j={class:"bg-white border dark:border-gray-700 dark:bg-gray-900"},R={class:"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12"},q=t("a",{href:"/online-clipboard/",class:"inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",role:"alert"},[t("span",{class:"text-xs bg-green-500 rounded-full text-white px-4 py-1.5 mr-3"},"Improved"),t("span",{class:"text-sm font-medium"},"Online Clipboard"),t("svg",{class:"ml-2 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])],-1),K=t("h1",{id:"search",class:"text-4xl font-extrabold mb-8 text-center bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-green-500 to-pink-500 animate-text"}," Welcome to GoOnlineTools ",-1),U=t("p",{class:"mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"}," Dozens of interesting micro services have been developed in Go Online Tools and the number is still growing. If you feel that a certain model is good, you may wish to use it or share it with others. ",-1),W={class:"mx-auto max-w-2xl"},$=t("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"},"Search",-1),J={class:"relative"},Q=t("div",{class:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),X={key:0},Y={key:1},t0={class:"text-center mt-4"},e0={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},o0=["href"],r0={class:"flex"},l0=["innerHTML"],s0={class:"ml-2 mr-2"},n0={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},i0=t("div",null,null,-1),a0={class:"mx-auto max-w-3xl"},d0={class:"ml-4 mr-4 rounded-lg border border-gray-700 mb-8"},c0=I('<div class="mt-4 text-center mb-4"><span id="search" class="text-2xl ml-4 font-extrabold mb-8 bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-green-500 to-pink-500 animate-text"> Exclusive Deals </span> - <a target="_blank" class="inline-flex items-center font-medium hover:underline" href="/deals/">View all <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi ml-2 bi-box-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg></a></div>',1),g0={class:"ml-3 mr-3 mb-6"},h0=t("h2",{class:"mt-4 ml-4 mr-4 mb-4 text-2xl text-center font-bold"}," Tool Categories ",-1),u0={class:"text-center mx-auto p-4",role:"status"},m0=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),b0=t("span",{class:"sr-only"},"Loading...",-1),x0=[m0,b0],_0={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},v0=["href"],f0={class:"ml-2 mr-2 text-center"},C0={class:"hover:text-clip text-2xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},p0=t("h2",{id:"programming",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Programming Tools ",-1),w0={class:"text-center mx-auto p-4",role:"status"},y0=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),k0=t("span",{class:"sr-only"},"Loading...",-1),M0=[y0,k0],T0={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},L0=["href"],z0={class:"flex"},Z0=["innerHTML"],B0={class:"ml-2 mr-2"},H0={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},F0=t("div",null,null,-1),V0=t("h2",{id:"random",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Random Tools ",-1),G0={class:"text-center mx-auto p-4",role:"status"},O0=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),S0=t("span",{class:"sr-only"},"Loading...",-1),D0=[O0,S0],N0={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},I0=["href"],E0={class:"flex"},A0=["innerHTML"],P0={class:"ml-2 mr-2"},j0={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},R0=t("div",null,null,-1),q0=t("h2",{id:"codeconverter",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Code Converter Tools ",-1),K0={class:"text-center mx-auto p-4",role:"status"},U0=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),W0=t("span",{class:"sr-only"},"Loading...",-1),$0=[U0,W0],J0={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},Q0=["href"],X0={class:"flex"},Y0=["innerHTML"],tt={class:"ml-2 mr-2"},et={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},ot=t("div",null,null,-1),rt=t("h2",{id:"image",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"},"Image Tools",-1),lt={class:"text-center mx-auto p-4",role:"status"},st=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),nt=t("span",{class:"sr-only"},"Loading...",-1),it=[st,nt],at={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},dt=["href"],ct={class:"flex"},gt=["innerHTML"],ht={class:"ml-2 mr-2"},ut={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},mt=t("div",null,null,-1),bt=t("h2",{id:"ende",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Encode/Decode Tools ",-1),xt={class:"text-center mx-auto p-4",role:"status"},_t=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),vt=t("span",{class:"sr-only"},"Loading...",-1),ft=[_t,vt],Ct={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},pt=["href"],wt={class:"flex"},yt=["innerHTML"],kt={class:"ml-2 mr-2"},Mt={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},Tt=t("div",null,null,-1),Lt=t("h2",{id:"numberconverter",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Number converter ",-1),zt={class:"text-center mx-auto p-4",role:"status"},Zt=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),Bt=t("span",{class:"sr-only"},"Loading...",-1),Ht=[Zt,Bt],Ft={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},Vt=["href"],Gt={class:"flex"},Ot=["innerHTML"],St={class:"ml-2 mr-2"},Dt={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},Nt=t("div",null,null,-1),It=t("h2",{id:"miscellaneous",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Miscellaneous Tools ",-1),Et={class:"text-center mx-auto p-4",role:"status"},At=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),Pt=t("span",{class:"sr-only"},"Loading...",-1),jt=[At,Pt],Rt={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},qt=["href"],Kt={class:"flex"},Ut=["innerHTML"],Wt={class:"ml-2 mr-2"},$t={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},Jt=t("div",null,null,-1),Qt=t("h2",{id:"fontconverter",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Font Converter Tools ",-1),Xt={class:"text-center mx-auto p-4",role:"status"},Yt=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),te=t("span",{class:"sr-only"},"Loading...",-1),ee=[Yt,te],oe={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},re=["href"],le={class:"flex"},se=["innerHTML"],ne={class:"ml-2 mr-2"},ie={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},ae=t("div",null,null,-1),de=t("h2",{id:"fontgenerator",class:"mt-4 ml-4 mr-4 mb-4 text-2xl font-bold"}," Text Generator Tools ",-1),ce={class:"text-center mx-auto p-4",role:"status"},ge=t("svg",{class:"inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),he=t("span",{class:"sr-only"},"Loading...",-1),ue=[ge,he],me={class:"grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},be=["href"],xe={class:"flex"},_e=["innerHTML"],ve={class:"ml-2 mr-2"},fe={class:"hover:text-clip text-1xl mt-3 mb-3 font-medium tracking-tight dark:text-white"},Ce=t("div",null,null,-1),Le={__name:"index",setup(pe){const C=f("GoOnlineTools.com - 100% Free Online Tools Collection"),p=f("Dozens of interesting microservices have been developed in GO Online Tools and the number is still growing. If you feel that a certain model is good, you may wish to use it or share it with others."),L=f("Go Online Tools, goonlinetools");f("https://og.goonlinetools.com/api/og?title=GoOnlineTools.com");const o=S({items:A,category:P,random:"",searchresult:null,searchText:"",programming:"",image:"",codeconverter:"",numberconverter:"",ende:"",miscellaneous:"",fontconverter:"",fontgenerator:""});function z(){o.searchresult=o.items.filter(_=>_.text.toString().toLowerCase().includes(o.searchText.toLowerCase()))}function Z(){let _=o.items.filter(l=>{if(l.category==="fontconverter")return l});o.fontconverter=_;let b=o.items.filter(l=>{if(l.category==="programming")return l});o.programming=b;let w=o.items.filter(l=>{if(l.category==="numberconverter")return l});o.numberconverter=w;let x=o.items.filter(l=>{if(l.category==="random")return l});o.random=x;let v=o.items.filter(l=>{if(l.category==="image")return l});o.image=v;let y=o.items.filter(l=>{if(l.category==="miscellaneous")return l});o.miscellaneous=y;let k=o.items.filter(l=>{if(l.category==="ende")return l});o.ende=k,o.image=v;let e=o.items.filter(l=>{if(l.category==="codeconverter")return l});o.codeconverter=e;let B=o.items.filter(l=>{if(l.category==="fontgenerator")return l});o.fontgenerator=B}function g(){for(var _="#",b=0;b<6;b++)_+=Math.floor(Math.random()*10);return _}return D(()=>{Z()}),(_,b)=>{const w=F,x=V,v=G,y=H,k=O;return n(),s(d,null,[i(y,null,{default:M(()=>[i(w,null,{default:M(()=>[E(c(r(C)),1)]),_:1}),i(x,{name:"description",content:r(p)},null,8,["content"]),i(x,{name:"keywords",content:r(L)},null,8,["content"]),i(x,{name:"og:title",content:r(C)},null,8,["content"]),i(x,{name:"og:description",content:r(p)},null,8,["content"]),i(x,{name:"twitter:title",content:r(C)},null,8,["content"]),i(x,{name:"twitter:description",content:r(p)},null,8,["content"]),i(v,{hreflang:"es",rel:"alternate",href:"https://goonlinetools.com/es/"}),i(v,{hreflang:"id",rel:"alternate",href:"https://goonlinetools.com/id/"}),i(v,{hreflang:"en",rel:"alternate",href:"https://goonlinetools.com/"}),i(v,{rel:"canonical",href:"https://goonlinetools.com/"})]),_:1}),t("section",j,[t("div",R,[q,K,U,t("div",W,[$,t("div",J,[Q,a(t("input",{type:"search","onUpdate:modelValue":b[0]||(b[0]=e=>r(o).searchText=e),class:"block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search Tools...",required:"",onInput:b[1]||(b[1]=e=>z())},null,544),[[N,r(o).searchText]])])]),r(o).searchresult&&r(o).searchText?(n(),s("br",X)):T("",!0),r(o).searchresult&&r(o).searchText?(n(),s("div",Y,[a(t("p",t0," Sorry, but nothing matched your search terms. Please try again with some different keywords. ",512),[[h,!r(o).searchresult.length]]),t("div",e0,[(n(!0),s(d,null,u(r(o).searchresult,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",r0,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,l0)],4)]),t("div",s0,[t("h5",n0,c(e.text),1)]),i0])],8,o0)]))),128))])])):T("",!0)]),t("div",a0,[t("div",d0,[c0,t("div",g0,[i(k)])])])]),h0,a(t("div",u0,x0,512),[[h,!r(o).category]]),t("div",_0,[(n(!0),s(d,null,u(r(o).category,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,style:m({borderColor:g()}),class:"block p-3 bg-white rounded-lg border-2 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",f0,[t("h5",C0,c(e.text),1)])],12,v0)]))),128))]),p0,a(t("div",w0,M0,512),[[h,!r(o).programming]]),t("div",T0,[(n(!0),s(d,null,u(r(o).programming,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",z0,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,Z0)],4)]),t("div",B0,[t("h5",H0,c(e.text),1)]),F0])],8,L0)]))),128))]),V0,a(t("div",G0,D0,512),[[h,!r(o).random]]),t("div",N0,[(n(!0),s(d,null,u(r(o).random,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",E0,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,A0)],4)]),t("div",P0,[t("h5",j0,c(e.text),1)]),R0])],8,I0)]))),128))]),q0,a(t("div",K0,$0,512),[[h,!r(o).codeconverter]]),t("div",J0,[(n(!0),s(d,null,u(r(o).codeconverter,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",X0,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,Y0)],4)]),t("div",tt,[t("h5",et,c(e.text),1)]),ot])],8,Q0)]))),128))]),rt,a(t("div",lt,it,512),[[h,!r(o).image]]),t("div",at,[(n(!0),s(d,null,u(r(o).image,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",ct,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,gt)],4)]),t("div",ht,[t("h5",ut,c(e.text),1)]),mt])],8,dt)]))),128))]),bt,a(t("div",xt,ft,512),[[h,!r(o).ende]]),t("div",Ct,[(n(!0),s(d,null,u(r(o).ende,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",wt,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,yt)],4)]),t("div",kt,[t("h5",Mt,c(e.text),1)]),Tt])],8,pt)]))),128))]),Lt,a(t("div",zt,Ht,512),[[h,!r(o).numberconverter]]),t("div",Ft,[(n(!0),s(d,null,u(r(o).numberconverter,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",Gt,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,Ot)],4)]),t("div",St,[t("h5",Dt,c(e.text),1)]),Nt])],8,Vt)]))),128))]),It,a(t("div",Et,jt,512),[[h,!r(o).miscellaneous]]),t("div",Rt,[(n(!0),s(d,null,u(r(o).miscellaneous,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",Kt,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,Ut)],4)]),t("div",Wt,[t("h5",$t,c(e.text),1)]),Jt])],8,qt)]))),128))]),Qt,a(t("div",Xt,ee,512),[[h,!r(o).fontconverter]]),t("div",oe,[(n(!0),s(d,null,u(r(o).fontconverter,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",le,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,se)],4)]),t("div",ne,[t("h5",ie,c(e.text),1)]),ae])],8,re)]))),128))]),de,a(t("div",ce,ue,512),[[h,!r(o).fontgenerator]]),t("div",me,[(n(!0),s(d,null,u(r(o).fontgenerator,e=>(n(),s("div",{key:e.href},[t("a",{href:e.url,class:"block p-3 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[t("div",xe,[t("div",null,[t("button",{type:"button",style:m({backgroundColor:g()}),class:"text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[t("div",{innerHTML:e.icon},null,8,_e)],4)]),t("div",ve,[t("h5",fe,c(e.text),1)]),Ce])],8,be)]))),128))])],64)}}};export{Le as default};
