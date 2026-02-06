var j=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var m=(e,r,i)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,n=(e,r)=>{for(var i in r||(r={}))T.call(r,i)&&m(e,i,r[i]);if(a)for(var i of a(r))f.call(r,i)&&m(e,i,r[i]);return e},o=(e,r)=>v(e,y(r));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{P as l,c as L,l as P,F as E,b as p}from"./UnauthorizedTooltip-gUvki5Rm.js";import"./index-3OP4wdng.js";import"./ErrorStateIcon-B4Rdur9g.js";import"./style-nTycTR2d.js";import"./WarningFilled-D6ijQqgK.js";import"./extends-CF3RwP-h.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-s4u0-ovH.js";import"./WarningStateIcon-DBndWphd.js";import"./LightTheme-EfL3ml8k.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";const Q={title:"Components/Data Display/Popover",component:l,args:{}},F=e=>{const r=t.jsx("div",{children:t.jsx("p",{children:"Content"})});return t.jsx(t.Fragment,{children:t.jsx(l,{content:r,title:"Title",trigger:e.trigger,children:t.jsx(L,{children:e.children})})})},s={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:F},W=e=>{var i;const r=t.jsxs(E,{gap:"small",vertical:!0,children:[t.jsx(p.Link,{href:"#link1",children:"Link Example 1"}),t.jsx(p.Link,{href:"#link2",children:"Link Example 2"}),t.jsx(p.Link,{href:"#link3",children:"Link Example 3"})]});return t.jsx(t.Fragment,{children:t.jsx(l,{content:r,title:"Details",trigger:e.trigger,children:t.jsx(P,{style:{margin:"0",cursor:"pointer"},children:(i=e.children)!=null?i:"3"})})})},c={args:{trigger:"click",children:"3"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:W};var g,d,h;s.parameters=o(n({},s.parameters),{docs:o(n({},(g=s.parameters)==null?void 0:g.docs),{source:n({originalSource:`{
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
