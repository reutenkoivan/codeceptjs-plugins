"use strict";(self.webpackChunkcodeceptjs_plugins=self.webpackChunkcodeceptjs_plugins||[]).push([[698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),s=["components"],u={title:"html-snapshot-on-fail",sidebar_label:"Details",slug:"/"},c=void 0,p={unversionedId:"index",id:"index",title:"html-snapshot-on-fail",description:"Plugin that makes a snapshot of the entire html tree and saves it to a file with the html extension.",source:"@site/../../../../packages/html-snapshot-on-fail/doc/index.md",sourceDirName:".",slug:"/",permalink:"/codeceptjs-plugins/html-snapshot-on-fail/",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1677694283,formattedLastUpdatedAt:"3/1/2023",frontMatter:{title:"html-snapshot-on-fail",sidebar_label:"Details",slug:"/"},sidebar:"defaultSidebar"},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:3}],f={toc:m},h="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TL;DR")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Plugin that makes a snapshot of the entire html tree and saves it to a file with the html extension.\nThe artifact is saved in the default output directory, or if the output directory is specified then in the specified directory."))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm add -D @codeceptjs-plugins/html-snapshot-on-fail\n"))),(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add -D @codeceptjs-plugins/html-snapshot-on-fail\n")))),(0,l.kt)("p",null,"Why do you need it? When the test fails, the html snapshot is saved, which allows you to see the entire html structure at the time of the crash and analyze:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"what elements were on the page"),(0,l.kt)("li",{parentName:"ul"},"what attributes were on the elements"),(0,l.kt)("li",{parentName:"ul"},"what styles were on the elements.")),(0,l.kt)("p",null,"Since this is an html file, you can check xpath/css locators on it (if the crash was caused by the absence of an element)\nand thus localize the problem either in the test tool or in the locator, application."),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"exports.config = {\n  plugins: {\n    htmlSnapshotOnFail: {\n      require: \"@codeceptjs-plugins/html-snapshot-on-fail\",\n      enabled: false,                                       // default: false\n      dirname: 'html-snapshots-on-fail',                    // default: 'html-snapshots-on-fail'\n      rootDir: global.output_dir,                           // default: global.output_dir\n      uniqNames: false,                                     // default: false\n      writeFile: true,                                      // default: true\n      reporter: 'allure'                                    // default: undefined\n    }\n  }\n}\n")))}v.isMDXComponent=!0},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(2389),o=n(2666),i=n(6010);const s={tabItem:"tabItem_LplD"};function u(e){var t,n,l,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(g),O=N[0],T=N[1],x=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==O&&v.some((function(e){return e.value===E}))&&T(E)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==O&&(j(t),T(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",s.tabItem,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);