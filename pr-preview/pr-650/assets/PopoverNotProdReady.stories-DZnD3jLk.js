var j=Object.defineProperty,P=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(e,r,o)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))y.call(r,o)&&m(e,o,r[o]);if(c)for(var o of c(r))F.call(r,o)&&m(e,o,r[o]);return e},n=(e,r)=>P(e,f(r));import{j as s}from"./jsx-runtime-CVnACwZl.js";import{P as v,e as H}from"./NavigationItemsService-DmnbhENc.js";import"./index-3OP4wdng.js";import"./ErrorStateIcon-DUz035cB.js";import"./extends-CF3RwP-h.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";const w={title:"Components/Not Prod Ready/Data Display/Popover",component:v,args:{}},x=e=>{const r=s.jsx("div",{children:s.jsx("p",{children:"Content"})});return s.jsx(s.Fragment,{children:s.jsx(v,{content:r,title:"Title",trigger:e.trigger,children:s.jsx(H,{children:e.children})})})},i={args:{trigger:"hover",children:"Hover Me"},render:x},a={args:{trigger:"focus",children:"Focus Me"},render:x};var p,d,l;i.parameters=n(t({},i.parameters),{docs:n(t({},(p=i.parameters)==null?void 0:p.docs),{source:t({originalSource:`{
  args: {
    trigger: 'hover',
    children: 'Hover Me'
  },
  render: PrimaryTemplate
}`},(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});var g,u,h;a.parameters=n(t({},a.parameters),{docs:n(t({},(g=a.parameters)==null?void 0:g.docs),{source:t({originalSource:`{
  args: {
    trigger: 'focus',
    children: 'Focus Me'
  },
  render: PrimaryTemplate
}`},(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source)})});const z=["Hover","Focus"];export{a as Focus,i as Hover,z as __namedExportsOrder,w as default};
