var S=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(o,e,r)=>e in o?S(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,a=(o,e)=>{for(var r in e||(e={}))L.call(e,r)&&h(o,r,e[r]);if(x)for(var r of x(e))F.call(e,r)&&h(o,r,e[r]);return o},i=(o,e)=>k(o,C(e));var y=(o,e,r)=>new Promise((n,p)=>{var l=t=>{try{m(r.next(t))}catch(g){p(g)}},u=t=>{try{m(r.throw(t))}catch(g){p(g)}},m=t=>t.done?n(t.value):Promise.resolve(t.value).then(l,u);m((r=r.apply(o,e)).next())});import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{r as b}from"./index-CNk6hRaE.js";import{a2 as O,b as v}from"./GlobalNavigation-CjR4SrT2.js";import"./ConfigProvider-C77M1HMj.js";import"./LightTheme-DxveuNKr.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./_baseClone-BjCwUuX-.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const Z={title:"Components/Feedback/Loading Modal",component:O,args:{}},P=(o,e)=>{const[r,n]=b.useState(!1),p=()=>{n(!0)},l=()=>{n(!1)},u=()=>{n(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(v,{type:"primary",onClick:p,children:"Open Loading Modal"}),r&&s.jsx(O,{fetchData:e,title:"Loading Modal",open:!0,onOk:l,onCancel:u,children:m=>s.jsxs(s.Fragment,{children:["Data resolved with - ",m+""]})})]})},B=o=>P(o,()=>y(void 0,null,function*(){return yield new Promise((e,r)=>{setTimeout(()=>{e(!0)},1e3)})})),_=o=>P(o,()=>y(void 0,null,function*(){return yield new Promise((e,r)=>{setTimeout(()=>{r(new Error)},1e3)})})),c={render:B},d={render:_};var E,f,j;c.parameters=i(a({},c.parameters),{docs:i(a({},(E=c.parameters)==null?void 0:E.docs),{source:a({originalSource:`{
  render: PrimaryTemplate
}`},(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source)})});var w,M,T;d.parameters=i(a({},d.parameters),{docs:i(a({},(w=d.parameters)==null?void 0:w.docs),{source:a({originalSource:`{
  render: ErrorTemplate
}`},(T=(M=d.parameters)==null?void 0:M.docs)==null?void 0:T.source)})});const $=["Primary","ErrorStory"];export{d as ErrorStory,c as Primary,$ as __namedExportsOrder,Z as default};