import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as s,a as c,g as p,F as a,T as o}from"./UnauthorizedTooltip-DInzTCbR.js";import"./iframe-DPsSDxI5.js";import"./preload-helper-PPVm8Dsz.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./style-C-7nCLOl.js";import"./WarningFilled-DE1WQ37c.js";import"./AntdIcon-DQ0RjuI5.js";import"./Context-BfWCYYV6.js";import"./presets-C7IxLGBr.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./useToken-D3WBQzQr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./client-Bm7MYF5w.js";const w={title:"Components/Data Display/Popover",component:s,args:{}},l=e=>{const n=r.jsx("div",{children:r.jsx("p",{children:"Content"})});return r.jsx(r.Fragment,{children:r.jsx(s,{content:n,title:"Title",trigger:e.trigger,children:r.jsx(c,{children:e.children})})})},t={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:l},m=e=>{const n=r.jsxs(a,{gap:"small",vertical:!0,children:[r.jsx(o.Link,{href:"#link1",children:"Link Example 1"}),r.jsx(o.Link,{href:"#link2",children:"Link Example 2"}),r.jsx(o.Link,{href:"#link3",children:"Link Example 3"})]});return r.jsx(r.Fragment,{children:r.jsx(s,{content:n,title:"Details",trigger:e.trigger,children:r.jsx(p,{style:{margin:"0",cursor:"pointer"},children:e.children??"3"})})})},i={args:{trigger:"click",children:"3"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:m};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const C=["Primary","ExampleWithLinks"];export{i as ExampleWithLinks,t as Primary,C as __namedExportsOrder,w as default};
