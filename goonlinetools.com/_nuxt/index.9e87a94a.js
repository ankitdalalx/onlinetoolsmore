import{s,m,M as u,b as r,F as h,E as _,u as p,o as a,e,H as b,A as f}from"./entry.71944e6b.js";import{u as w}from"./fetch.5349f18e.js";import"./asyncData.51a27acc.js";const x={class:"sm:grid ml-4 mr-4 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"},k={href:"#"},y=["src"],v={class:"p-5"},T=["href"],B={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},H=["innerHTML"],L=["href"],G=e("svg",{"aria-hidden":"true",class:"ml-2 -mr-1 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),E={__name:"index",async setup(M){let o,l;const n=s("GoOnlineTools Blog"),i=s("Learn more about apps and website at GoOnlineTools Blog."),d=s("GoOnlineTools blog, got blog"),c=s("https://og.goonlinetools.com/api/og?title=GoOnlineTools.com");m({title:n,meta:[{name:"description",content:i},{name:"keywords",content:d},{name:"og:title",content:n},{name:"og:image",content:c},{name:"twitter:title",content:n},{name:"twitter:description",content:i}]});const{data:g}=([o,l]=u(()=>w("https://app.goonlinetools.com/wp-json/wp/v2/posts?page=1&per_page=100&_embed=1","$ansXcfZp0C")),o=await o,l(),o);return(O,C)=>(a(),r("div",x,[(a(!0),r(h,null,_(p(g),t=>(a(),r("div",{key:t.id,class:"bg-white mt-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},[e("a",k,[e("img",{width:"1280",height:"720",class:"rounded-t-lg",src:t.better_featured_image.source_url,alt:""},null,8,y)]),e("div",v,[e("a",{href:`/blog/${t.slug}/`},[e("h5",B,b(t.title.rendered),1)],8,T),e("div",{innerHTML:t.excerpt.rendered,class:"mb-3 line-clamp-5 font-normal text-gray-700 dark:text-gray-400"},null,8,H),e("a",{href:`/blog/${t.slug}/`,class:"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[f(" Read more "),G],8,L)])]))),128))]))}};export{E as default};
