var M=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var l=(o,e,r)=>e in o?M(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,a=(o,e)=>{for(var r in e||(e={}))y.call(e,r)&&l(o,r,e[r]);if(c)for(var r of c(e))O.call(e,r)&&l(o,r,e[r]);return o},n=(o,e)=>f(o,h(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{r as S}from"./index-CNk6hRaE.js";import{K as i,g}from"./GlobalNavigation-CodoGa1z.js";const _={title:"Components/Feedback/Modal",component:i,args:{}},P=o=>{const[e,r]=S.useState(!1),u=()=>{r(!0)},x=()=>{r(!1)},j=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{type:"primary",onClick:u,children:"Open Modal"}),t.jsxs(i,{title:"Basic Modal",open:e,onOk:x,onCancel:j,children:[t.jsx("p",{children:"Some contents..."}),t.jsx("p",{children:"Some contents..."}),t.jsx("p",{children:"Some contents..."})]})]})},s={render:P};var m,d,p;s.parameters=n(a({},s.parameters),{docs:n(a({},(m=s.parameters)==null?void 0:m.docs),{source:a({originalSource:`{
  render: PrimaryTemplate
}`},(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source)})});const b=["Primary"],B=Object.freeze(Object.defineProperty({__proto__:null,Primary:s,__namedExportsOrder:b,default:_},Symbol.toStringTag,{value:"Module"}));export{B as M,_ as m};
