var S=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(o,e,r)=>e in o?S(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,t=(o,e)=>{for(var r in e||(e={}))L.call(e,r)&&h(o,r,e[r]);if(x)for(var r of x(e))F.call(e,r)&&h(o,r,e[r]);return o},i=(o,e)=>k(o,C(e));var y=(o,e,r)=>new Promise((n,c)=>{var l=a=>{try{m(r.next(a))}catch(g){c(g)}},u=a=>{try{m(r.throw(a))}catch(g){c(g)}},m=a=>a.done?n(a.value):Promise.resolve(a.value).then(l,u);m((r=r.apply(o,e)).next())});import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{r as v}from"./index-CNk6hRaE.js";import{a8 as T,g as B}from"./GlobalNavigation-CFv4vEyB.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const Q={title:"Components/Not Prod Ready/Feedback/Loading Modal",component:T,args:{}},O=(o,e)=>{const[r,n]=v.useState(!1),c=()=>{n(!0)},l=()=>{n(!1)},u=()=>{n(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(B,{type:"primary",onClick:c,children:"Open Loading Modal"}),r&&s.jsx(T,{fetchData:e,title:"Loading Modal",open:!0,onOk:l,onCancel:u,children:m=>s.jsxs(s.Fragment,{children:["Data resolved with - ",m+""]})})]})},R=o=>O(o,()=>y(void 0,null,function*(){return yield new Promise((e,r)=>{setTimeout(()=>{e(!0)},1e3)})})),_=o=>O(o,()=>y(void 0,null,function*(){return yield new Promise((e,r)=>{setTimeout(()=>{r(new Error)},1e3)})})),p={render:R},d={render:_};var E,f,j;p.parameters=i(t({},p.parameters),{docs:i(t({},(E=p.parameters)==null?void 0:E.docs),{source:t({originalSource:`{
  render: PrimaryTemplate
}`},(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source)})});var w,M,P;d.parameters=i(t({},d.parameters),{docs:i(t({},(w=d.parameters)==null?void 0:w.docs),{source:t({originalSource:`{
  render: ErrorTemplate
}`},(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source)})});const U=["Primary","ErrorStory"];export{d as ErrorStory,p as Primary,U as __namedExportsOrder,Q as default};
