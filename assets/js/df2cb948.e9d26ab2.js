"use strict";(self.webpackChunkcodeceptjs_plugins=self.webpackChunkcodeceptjs_plugins||[]).push([[433],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=i(t),m=o,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||s;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[g]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2749:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>g});var n=t(7462),o=t(3366),s=(t(7294),t(3905)),a=["components"],c={title:"Logger"},l=void 0,i={unversionedId:"logger",id:"logger",title:"Logger",description:"Access method:",source:"@site/../../../../packages/base/doc/logger.md",sourceDirName:".",slug:"/logger",permalink:"/codeceptjs-plugins/base/logger",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1678092006,formattedLastUpdatedAt:"3/6/2023",frontMatter:{title:"Logger"},sidebar:"defaultSidebar",previous:{title:"Details",permalink:"/codeceptjs-plugins/base/"}},p={},g=[{value:"Access method:",id:"access-method",level:2},{value:"Interface:",id:"interface",level:2},{value:"Configure custom logger processor",id:"configure-custom-logger-processor",level:2}],u={toc:g},m="wrapper";function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)(m,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"access-method"},"Access method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"this.logger\n")),(0,s.kt)("h2",{id:"interface"},"Interface:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Logger {\n    debug(message: string, data?: any): void\n    say(message: string, data?: any): void\n    error(error: string | Error): void\n}\n")),(0,s.kt)("h2",{id:"configure-custom-logger-processor"},"Configure custom logger processor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import fs from 'fs'\nimport path from 'path'\nimport { LoggerProcessorContract, BasePlugin } from '@codeceptjs-plugins/base'\n\n// 1. Create a logger processor class\nconst logFileStream = fs.createWriteStream(path.resolve(global.output_dir, 'custom.log'))\nconst output = new console.Console(logFileStream, logFileStream)\n\nclass CustomLoggerProcessor implements LoggerProcessorContract {\n  info(message: string): void {\n    output.log('info', message)\n  }\n\n  debug(scope: string, message: string): void {\n    output.log('debug', scope, message)\n  }\n\n  error(message: string): void {\n    output.log('error', message)\n  }\n}\n\n// 2. Create a plugin class\nclass CustomPlugin extends BasePlugin {\n  constructor(config) {\n    super(config, {namespace: 'my-custom-plugin', loggerProcessor: new CustomLoggerProcessor()})\n  }\n}\n")))}d.isMDXComponent=!0}}]);