var j=Object.defineProperty,f=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var p=(o,r,e)=>r in o?j(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,s=(o,r)=>{for(var e in r||(r={}))y.call(r,e)&&p(o,e,r[e]);if(m)for(var e of m(r))O.call(r,e)&&p(o,e,r[e]);return o},n=(o,r)=>f(o,M(r));import{j as t}from"./jsx-runtime-CS-_a2eV.js";import{r as S}from"./index-Ca44TZ0D.js";import{a4 as d,b as g}from"./GlobalNavigation-Be6idjSk.js";import"./ConfigProvider-aHzMMMgW.js";import"./LightTheme-BZ07JyGW.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./_baseClone-BwI25-yt.js";import"./_getPrototype-fDUIJvdn.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";const H={title:"Components/Feedback/Modal",component:d,args:{}},k=o=>{const[r,e]=S.useState(!1),x=()=>{e(!0)},h=()=>{e(!1)},u=()=>{e(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{type:"primary",onClick:x,children:"Open Modal"}),t.jsxs(d,{title:"Basic Modal",open:r,onOk:h,onCancel:u,children:[t.jsx("p",{children:"Some contents..."}),t.jsx("p",{children:"Some contents..."}),t.jsx("p",{children:"Some contents..."})]})]})},a={render:k};var i,c,l;a.parameters=n(s({},a.parameters),{docs:n(s({},(i=a.parameters)==null?void 0:i.docs),{source:s({originalSource:`{
  render: PrimaryTemplate
}`},(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source)})});const J=["Primary"];export{a as Primary,J as __namedExportsOrder,H as default};