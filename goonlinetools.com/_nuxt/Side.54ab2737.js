import{i as d,j as l,a as r,o as u,b as h,f as c,k as y}from"./entry.71944e6b.js";const p={props:{adClient:{type:String,default:void 0},adSlot:{type:String,default:null},adFormat:{type:String,default:"auto"},adLayout:{type:String,default:null},adLayoutKey:{type:String,default:null},adStyle:{type:Object,default(){return{display:"block"}}},adFullWidthResponsive:{type:Boolean,default:!1},pageUrl:{type:String,default:null},analyticsUacct:{type:String,default:void 0},analyticsDomainName:{type:String,default:void 0},includeQuery:{type:Boolean,default:void 0}},data(){return{show:!0,renderQueue:[],key:Math.random()}},computed:{options(){const t={...d()["google-adsense"]||{}};return t.test&&(t.id="ca-google"),t},_includeQuery(){return this.includeQuery||typeof this.includeQuery>"u"&&this.options.includeQuery}},watch:{$route(t,e){if(this.$el&&!this.$el.isConnected||t.fullPath===e.fullPath)return;const a=Object.keys,s=t.query,n=e.query;let o=!1;t.path!==e.path?o=!0:this._includeQuery&&(o=a(s).length!==a(n).length||!a(s).every(i=>s[i]===n[i])),o&&this.updateAd()}},mounted(){this.showAd()},methods:{adRegion(){return"page-"+Math.random()},updateAd(){this.isServer||(this.show=!1,this.$nextTick(this.showAd))},showAd(){this.show=!0,setTimeout(()=>{if(!this.$el.innerHTML)try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(t){console.error(t)}},50)}},render(){return l("ins",{class:["adsbygoogle"],style:this.adStyle,"data-ad-client":this.adClient||this.options.id,"data-ad-slot":this.adSlot||null,"data-ad-format":this.adFormat,"data-ad-region":this.show?this.adRegion():null,"data-ad-layout":this.adLayout||null,"data-ad-layout-key":this.adLayoutKey||null,"data-page-url":this.pageUrl?this.pageUrl:null,"data-analytics-uacct":this.analyticsUacct||this.options.analyticsUacct||null,"data-analytics-domain-name":this.analyticsDomainName||this.options.analyticsDomainName||null,"data-adtest":this.options.test?"on":null,"data-adsbygoogle-status":this.show?null:"","data-full-width-responsive":this.adFullWidthResponsive||null,innerHTML:this.show?"":" ",key:Math.random()})}},m={data(){return{showAd:"false"}},methods:{resetTimer(){this.showAd=!0}},mounted(){window.onmousemove=this.resetTimer(),window.onmousedown=this.resetTimer(),window.ontouchstart=this.resetTimer(),window.ontouchmove=this.resetTimer(),window.onclick=this.resetTimer(),window.onkeydown=this.resetTimer(),window.addEventListener("scroll",this.resetTimer,!0)}},f={key:0,class:"mt-4 ml-4 mr-4 mb-4 text-center"};function g(t,e,a,s,n,o){const i=p;return n.showAd?(u(),h("div",f,[c(i,{"ad-slot":"2671738137"})])):y("",!0)}const _=r(m,[["render",g]]);export{_,p as a};
