import{s as d,p as k,S as f,o as n,b as r,e,u as c,f as m,d as x,_ as w,C as $,a8 as T,L as G,F as v,E as b,H as h,a as L,A as p,m as M,B as C}from"./entry.71944e6b.js";import{u as Z}from"./composables.81b42008.js";import{d as A}from"./component.6fd50fe3.js";import"./asyncData.51a27acc.js";const y=""+globalThis.__publicAssetsURL("logo.png"),E=x(()=>w(()=>import("./Search.c4c29f84.js"),["./Search.c4c29f84.js","./entry.71944e6b.js","./entry.ade07298.css","./tools.98013ce6.js","./index.d1f3a0e4.js"],import.meta.url).then(o=>o.default||o)),B=x(()=>w(()=>import("./User.2f6d6a6c.js"),["./User.2f6d6a6c.js","./auth.ab07ab26.js","./entry.71944e6b.js","./entry.ade07298.css","./index.d1f3a0e4.js"],import.meta.url).then(o=>o.default||o)),H={class:"bg-white-300 navbar border dark:border-gray-700 bg-base-100"},N={class:"flex-1"},S=["href"],V=e("img",{src:y,class:"btn btn-ghost",alt:"GoOnlineTools"},null,-1),j=[V],z=["href"],O=e("span",{class:"normal-case text-xl"},"GoOnlineTools",-1),R=[O],D={class:"flex-none"},P={__name:"Header",setup(o){const s=d(""),l=k(),t=d(""),a=d("");return f(()=>{s.value=l.fullPath,s.value.includes("/id/")?t.value="/id/":s.value.includes("/es/")?t.value="/es/":s.value.includes("/blog/")?(t.value="/blog/",a.value="Blog"):t.value="/"}),(g,_)=>{const i=E,u=B;return n(),r("div",H,[e("div",N,[e("a",{href:c(t)||"/"},j,8,S),e("a",{href:c(t)||"/"},R,8,z)]),m(i,{class:"mt-1"}),e("div",D,[m(u)])])}}},I={class:"max-w-xs mx-auto mt-6 mb-4"},U={class:"grid grid-cols-2 gap-4"},F=e("div",{class:""},[e("label",{for:"countries",class:"block text-center mr-4 mt-1 text-sm font-medium text-gray-900 dark:text-gray-400"},"Language:")],-1),q={class:""},J={__name:"Language",setup(o){const s=d(["English","Spanish","Indonesian"]),l=d(""),t=d("");f(()=>{l.value=window.location.pathname,l.value.includes("/id/")?t.value="Indonesian":l.value.includes("/es/")?t.value="Spanish":t.value="English"});function a(){t.value==="Indonesian"?window.location.replace("/id/"):t.value==="Spanish"?window.location.replace("/es/"):t.value==="English"&&window.location.replace("/")}return(g,_)=>(n(),r("div",I,[e("div",U,[F,e("div",q,[$(e("select",{onChange:a,"onUpdate:modelValue":_[0]||(_[0]=i=>G(t)?t.value=i:null),class:"bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(n(!0),r(v,null,b(c(s),i=>(n(),r("option",{key:i},h(i),1))),128))],544),[[T,c(t)]])])])]))}},K={class:"p-4 gap-4 text-center mx-auto"},Q=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"w-5 h-5",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"})],-1),W=[Q],X=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"w-5 h-5",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"})],-1),Y=[X],ee=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"w-5 h-5",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"})],-1),te=[ee],se={class:"mt-3"},oe={__name:"Theme",setup(o){const s=Z();return(l,t)=>(n(),r("div",K,[e("button",{onClick:t[0]||(t[0]=a=>c(s).preference="system"),class:"mr-2"},W),e("button",{onClick:t[1]||(t[1]=a=>c(s).preference="light"),class:"ml-2 mr-2"},Y),e("button",{onClick:t[2]||(t[2]=a=>c(s).preference="dark"),class:"ml-2"},te),e("p",se,"Theme - "+h(c(s).preference),1)]))}},ae=[{text:"Home",url:"/"},{text:"Blog",url:"/blog/"},{text:"About Us",url:"/about/"},{text:"Privacy Policy",url:"/privacy-policy/"},{text:"Disclaimer",url:"/disclaimer/"},{text:"Contact Us",url:"/contact/"}],ne=A({data:()=>({items:ae})}),re={class:"p-4 border bg-white rounded-lg shadow md:px-6 md:py-8 dark:border-gray-700 dark:bg-gray-800"},le={class:"sm:flex sm:items-center sm:justify-between"},ie=e("a",{href:"https://goonlinetools.com/",class:"flex items-center mb-4 sm:mb-0"},[e("img",{src:y,class:"mr-3 h-8",alt:"GoOnlineTools Logo"}),e("span",{class:"self-center text-1xl font-semibold whitespace-nowrap dark:text-white"},"Go Online Tools")],-1),ce={class:"flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"},de=["href"],me=e("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),_e=e("span",{class:"block text-sm text-gray-500 sm:text-center dark:text-gray-400"},[p("\xA9 2022 "),e("a",{href:"https://goonlinetools.com/",class:"hover:underline"},"GoOnlineTools"),p(". All Rights Reserved. ")],-1);function ue(o,s,l,t,a,g){const _=J,i=oe;return n(),r("footer",re,[e("div",le,[ie,e("ul",ce,[(n(!0),r(v,null,b(o.items,u=>(n(),r("li",{key:u.href},[e("a",{href:u.url,class:"mr-4 hover:underline md:mr-6"},h(u.text),9,de)]))),128))])]),me,_e,m(_),m(i)])}const he=L(ne,[["render",ue]]),ge={class:"max-w-screen-xl border dark:border-gray-700 mx-auto"},ve={__name:"default",setup(o){return M({link:[{rel:"icon",sizes:"16x16",href:"/favicon/favicon-16x16.png"},{rel:"icon",sizes:"32x32",href:"/favicon/favicon-32x32.png"},{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}],script:[{innerHTML:`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N356CGN"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,body:!0},{innerHTML:`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N356CGN');
        `,head:!0}],meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"}]}),(s,l)=>{const t=P,a=he;return n(),r("div",ge,[m(t),C(s.$slots,"default"),m(a)])}}};export{ve as default};
