var M=Object.defineProperty,S=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var l=(e,r,o)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,n=(e,r)=>{for(var o in r||(r={}))_.call(r,o)&&l(e,o,r[o]);if(d)for(var o of d(r))F.call(r,o)&&l(e,o,r[o]);return e},s=(e,r)=>S(e,T(r));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{P as f,c as k}from"./GlobalNavigation-CjKnC2DP.js";const C={title:"Components/Data Display/Popover",component:f,args:{}},m=e=>{const r=t.jsx("div",{children:t.jsx("p",{children:"Content"})});return t.jsx(t.Fragment,{children:t.jsx(f,{content:r,title:"Title",trigger:e.trigger,children:t.jsx(k,{children:e.children})})})},a={args:{trigger:"click",children:"Click Me"},render:m},c={args:{trigger:"hover",children:"Hover Me"},render:m},i={args:{trigger:"focus",children:"Focus Me"},render:m};var p,g,u;a.parameters=s(n({},a.parameters),{docs:s(n({},(p=a.parameters)==null?void 0:p.docs),{source:n({originalSource:`{
  args: {
    trigger: 'click',
    children: 'Click Me'
  },
  render: PrimaryTemplate
}`},(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source)})});var h,P,v;c.parameters=s(n({},c.parameters),{docs:s(n({},(h=c.parameters)==null?void 0:h.docs),{source:n({originalSource:`{
  args: {
    trigger: 'hover',
    children: 'Hover Me'
  },
  render: PrimaryTemplate
}`},(v=(P=c.parameters)==null?void 0:P.docs)==null?void 0:v.source)})});var j,x,y;i.parameters=s(n({},i.parameters),{docs:s(n({},(j=i.parameters)==null?void 0:j.docs),{source:n({originalSource:`{
  args: {
    trigger: 'focus',
    children: 'Focus Me'
  },
  render: PrimaryTemplate
}`},(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source)})});const H=["Primary","Hover","Focus"],E=Object.freeze(Object.defineProperty({__proto__:null,Focus:i,Hover:c,Primary:a,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{E as P,C as m};
