var k=Object.defineProperty,S=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(o,e,r)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,a=(o,e)=>{for(var r in e||(e={}))L.call(e,r)&&h(o,r,e[r]);if(x)for(var r of x(e))F.call(e,r)&&h(o,r,e[r]);return o},i=(o,e)=>S(o,C(e));var y=(o,e,r)=>new Promise((n,p)=>{var l=t=>{try{m(r.next(t))}catch(g){p(g)}},u=t=>{try{m(r.throw(t))}catch(g){p(g)}},m=t=>t.done?n(t.value):Promise.resolve(t.value).then(l,u);m((r=r.apply(o,e)).next())});import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{r as v}from"./index-CNk6hRaE.js";import{V as O,k as B}from"./GlobalNavigation-DgsMOKTE.js";import"./LightTheme-BtoaoHMG.js";import"./row-4dnY1EES.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-0c7aa-qo.js";import"./_baseClone-u1J3oOXU.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const X={title:"Components/Feedback/Loading Modal",component:O,args:{}},P=(o,e)=>{const[r,n]=v.useState(!1),p=()=>{n(!0)},l=()=>{n(!1)},u=()=>{n(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(B,{type:"primary",onClick:p,children:"Open Loading Modal"}),r&&s.jsx(O,{fetchData:e,title:"Loading Modal",open:!0,onOk:l,onCancel:u,children:m=>s.jsxs(s.Fragment,{children:["Data resolved with - ",m+""]})})]})},_=o=>P(o,()=>y(void 0,null,function*(){return yield new Promise((e,r)=>{setTimeout(()=>{e(!0)},1e3)})})),b=o=>P(o,()=>y(void 0,null,function*(){return yield new Promise((e,r)=>{setTimeout(()=>{r(new Error)},1e3)})})),c={render:_},d={render:b};var E,f,j;c.parameters=i(a({},c.parameters),{docs:i(a({},(E=c.parameters)==null?void 0:E.docs),{source:a({originalSource:`{
  render: PrimaryTemplate
}`},(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source)})});var w,M,T;d.parameters=i(a({},d.parameters),{docs:i(a({},(w=d.parameters)==null?void 0:w.docs),{source:a({originalSource:`{
  render: ErrorTemplate
}`},(T=(M=d.parameters)==null?void 0:M.docs)==null?void 0:T.source)})});const Y=["Primary","ErrorStory"];export{d as ErrorStory,c as Primary,Y as __namedExportsOrder,X as default};