"use strict";(self.webpackChunkcodeceptjs_plugins=self.webpackChunkcodeceptjs_plugins||[]).push([[920],{8374:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(4165),r=n(5861),c=n(7294),u=n(2263),s=n(2600),l=n(5742),o=n(9960),m=n(6550),h=n(412),i="q";const p=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,u.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get(i)||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set(i,n):a.delete(i),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}};var f=n(22),d=n(8202),I=n(2539),_=n(726),g=n(1073),E=n(311),y=n(9466);function v(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}const S={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function R(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,u=t.tokens,s=t.metadata,l=0===a,m=2===a,h=(l?n.b:r.b).slice(),i=m?n.s:n.t;return l||h.push(r.t),c.createElement("article",{className:S.searchResultItem},c.createElement("h2",null,c.createElement(o.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:m?(0,I.C)(i,u):(0,_.o)(i,(0,g.m)(s,"t"),u,100)}})),h.length>0&&c.createElement("p",{className:S.searchResultItemPath},h.join(" \u203a ")),m&&c.createElement("p",{className:S.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,_.o)(n.t,(0,g.m)(s,"t"),u,100)}}))}const w=function(){var e=(0,u.Z)().siteConfig.baseUrl,t=p(),n=t.searchValue,o=t.updateSearchPath,m=(0,c.useState)(n),h=m[0],i=m[1],I=(0,c.useState)(),_=I[0],g=I[1],w=(0,c.useState)(),k=w[0],b=w[1],Z=(0,c.useMemo)((function(){return h?v(y.Iz.search_results_for,{keyword:h}):y.Iz.search_the_documentation}),[h]);(0,c.useEffect)((function(){o(h),_&&(h?_(h,(function(e){b(e)})):b(void 0))}),[h,_]);var C=(0,c.useCallback)((function(e){i(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==h&&i(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)((0,a.Z)().mark((function t(){var n,r,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,c=n.zhDictionary,g((function(){return(0,d.v)(r,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(s.Z,{title:Z},c.createElement(l.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,Z),c.createElement("input",{type:"search",name:"q",className:S.searchQueryInput,"aria-label":"Search",onChange:C,value:h,autoComplete:"off",autoFocus:!0}),!_&&h&&c.createElement("div",null,c.createElement(E.Z,null)),k&&(k.length>0?c.createElement("p",null,v(1===k.length?y.Iz.count_documents_found:y.Iz.count_documents_found_plural,{count:k.length})):c.createElement("p",null,y.Iz.no_documents_were_found)),c.createElement("section",null,k&&k.map((function(e){return c.createElement(R,{key:e.document.i,searchResult:e})})))))}}}]);