var j=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var m=(e,r,i)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,n=(e,r)=>{for(var i in r||(r={}))T.call(r,i)&&m(e,i,r[i]);if(a)for(var i of a(r))f.call(r,i)&&m(e,i,r[i]);return e},o=(e,r)=>v(e,y(r));import{j as t}from"./jsx-runtime-GRP_BLAX.js";import{P as l,c as L,l as P,F as E,b as p}from"./NavigationItemsService-Hr1be8SE.js";import"./index-CNk6hRaE.js";import"./ErrorStateIcon-Do_CM_GO.js";import"./style-Cv9zhzF_.js";import"./WarningFilled-KKNPfhjt.js";import"./AntdIcon-Bm4W6gxM.js";import"./Context-BUSkoOJ1.js";import"./presets-vy2ytAcW.js";import"./SuccessStateIcon-CmToGiKI.js";import"./WarningStateIcon-M2kIOVZb.js";import"./LightTheme-BtoaoHMG.js";import"./row-M_82l6gX.js";import"./useToken-ZHvy9ttm.js";import"./index-DN1Ck1Y5.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-BJQa_8Hx.js";import"./client-CgpM46-k.js";const Q={title:"Components/Data Display/Popover",component:l,args:{}},F=e=>{const r=t.jsx("div",{children:t.jsx("p",{children:"Content"})});return t.jsx(t.Fragment,{children:t.jsx(l,{content:r,title:"Title",trigger:e.trigger,children:t.jsx(L,{children:e.children})})})},s={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:F},W=e=>{var i;const r=t.jsxs(E,{gap:"small",vertical:!0,children:[t.jsx(p.Link,{href:"#link1",children:"Link Example 1"}),t.jsx(p.Link,{href:"#link2",children:"Link Example 2"}),t.jsx(p.Link,{href:"#link3",children:"Link Example 3"})]});return t.jsx(t.Fragment,{children:t.jsx(l,{content:r,title:"Details",trigger:e.trigger,children:t.jsx(P,{style:{margin:"0",cursor:"pointer"},children:(i=e.children)!=null?i:"3"})})})},c={args:{trigger:"click",children:"3"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:W};var g,d,h;s.parameters=o(n({},s.parameters),{docs:o(n({},(g=s.parameters)==null?void 0:g.docs),{source:n({originalSource:`{
  args: {
    trigger: 'click',
    children: 'Button with popover'
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus']
    }
  },
  render: PrimaryTemplate
}`},(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source)})});var x,k,u;c.parameters=o(n({},c.parameters),{docs:o(n({},(x=c.parameters)==null?void 0:x.docs),{source:n({originalSource:`{
  args: {
    trigger: 'click',
    children: '3'
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus']
    }
  },
  render: PopoverWithLinksTemplate
}`},(u=(k=c.parameters)==null?void 0:k.docs)==null?void 0:u.source)})});const U=["Primary","ExampleWithLinks"];export{c as ExampleWithLinks,s as Primary,U as __namedExportsOrder,Q as default};
