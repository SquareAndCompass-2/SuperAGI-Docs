"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3403],{3905:(e,r,t)=>{t.d(r,{Zo:()=>k,kt:()=>c});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var f=n.createContext({}),p=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},k=function(e){var r=p(e.components);return n.createElement(f.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),l=p(t),d=i,c=l["".concat(f,".").concat(d)]||l[d]||m[d]||o;return t?n.createElement(c,a(a({ref:r},k),{},{components:t})):n.createElement(c,a({ref:r},k))}));function c(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var f in r)hasOwnProperty.call(r,f)&&(s[f]=r[f]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4652:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:7},a="Run History",s={unversionedId:"Core Components/Agents/run_history",id:"Core Components/Agents/run_history",title:"Run History",description:"The Agent Run History provides you with a view of the runs that the agent has performed. It shows the last time the agent has run and the number of calls it has made",source:"@site/docs/Core Components/Agents/run_history.md",sourceDirName:"Core Components/Agents",slug:"/Core Components/Agents/run_history",permalink:"/docs/Core Components/Agents/run_history",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Core Components/Agents/run_history.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Agent New Run",permalink:"/docs/Core Components/Agents/agent_newrun"},next:{title:"Action Console",permalink:"/docs/Core Components/Agents/action_console"}},f={},p=[],k={toc:p},l="wrapper";function m(e){let{components:r,...o}=e;return(0,i.kt)(l,(0,n.Z)({},k,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-history"},"Run History"),(0,i.kt)("p",null,"The Agent Run History provides you with a view of the runs that the agent has performed. It shows the last time the agent has run and the number of calls it has made "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:t(5130).Z,width:"292",height:"212"})),(0,i.kt)("p",null,"Clicking on a run provides you with the visibility of the activity feed of the agent run."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:t(6906).Z,width:"1526",height:"822"})))}m.isMDXComponent=!0},6906:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/run_activity-2cca6af103fc778ad5fac3616fcb4f68.png"},5130:(e,r,t)=>{t.d(r,{Z:()=>n});const n="data:image/png;base64,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"}}]);