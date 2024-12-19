var j=Object.defineProperty,P=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(e,r,o)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))y.call(r,o)&&m(e,o,r[o]);if(c)for(var o of c(r))F.call(r,o)&&m(e,o,r[o]);return e},s=(e,r)=>P(e,f(r));import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{n as v,o as H}from"./GlobalNavigation-ByoW-fgh.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-B-7Rp2bC.js";import"./useToken-NzVyqXGc.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const b={title:"Components/Not Prod Ready/Data Display/Popover",component:v,args:{}},x=e=>{const r=n.jsx("div",{children:n.jsx("p",{children:"Content"})});return n.jsx(n.Fragment,{children:n.jsx(v,{content:r,title:"Title",trigger:e.trigger,children:n.jsx(H,{children:e.children})})})},a={args:{trigger:"hover",children:"Hover Me"},render:x},i={args:{trigger:"focus",children:"Focus Me"},render:x};var p,d,l;a.parameters=s(t({},a.parameters),{docs:s(t({},(p=a.parameters)==null?void 0:p.docs),{source:t({originalSource:`{
  args: {
    trigger: 'hover',
    children: 'Hover Me'
  },
  render: PrimaryTemplate
}`},(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});var g,u,h;i.parameters=s(t({},i.parameters),{docs:s(t({},(g=i.parameters)==null?void 0:g.docs),{source:t({originalSource:`{
  args: {
    trigger: 'focus',
    children: 'Focus Me'
  },
  render: PrimaryTemplate
}`},(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source)})});const k=["Hover","Focus"];export{i as Focus,a as Hover,k as __namedExportsOrder,b as default};
