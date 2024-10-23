var f=Object.defineProperty,F=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(e,r,o)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))k.call(r,o)&&d(e,o,r[o]);if(p)for(var o of p(r))C.call(r,o)&&d(e,o,r[o]);return e},s=(e,r)=>F(e,T(r));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{P as M,B as H}from"./GlobalNavigation-DxJ0bpmA.js";import"./index-3OP4wdng.js";import"./ConfigProvider-CLSyxc9v.js";import"./LightTheme-BtoaoHMG.js";import"./index-DWDMsSA9.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BmOE1Szh.js";import"./_baseClone-B3DJrZ5i.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";const L={title:"Components/Data Display/Popover",component:M,args:{}},m=e=>{const r=n.jsx("div",{children:n.jsx("p",{children:"Content"})});return n.jsx(n.Fragment,{children:n.jsx(M,{content:r,title:"Title",trigger:e.trigger,children:n.jsx(H,{children:e.children})})})},i={args:{trigger:"click",children:"Click Me"},render:m},a={args:{trigger:"hover",children:"Hover Me"},render:m},c={args:{trigger:"focus",children:"Focus Me"},render:m};var l,g,u;i.parameters=s(t({},i.parameters),{docs:s(t({},(l=i.parameters)==null?void 0:l.docs),{source:t({originalSource:`{
  args: {
    trigger: 'click',
    children: 'Click Me'
  },
  render: PrimaryTemplate
}`},(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source)})});var h,v,x;a.parameters=s(t({},a.parameters),{docs:s(t({},(h=a.parameters)==null?void 0:h.docs),{source:t({originalSource:`{
  args: {
    trigger: 'hover',
    children: 'Hover Me'
  },
  render: PrimaryTemplate
}`},(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source)})});var P,j,y;c.parameters=s(t({},c.parameters),{docs:s(t({},(P=c.parameters)==null?void 0:P.docs),{source:t({originalSource:`{
  args: {
    trigger: 'focus',
    children: 'Focus Me'
  },
  render: PrimaryTemplate
}`},(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source)})});const N=["Primary","Hover","Focus"];export{c as Focus,a as Hover,i as Primary,N as __namedExportsOrder,L as default};
