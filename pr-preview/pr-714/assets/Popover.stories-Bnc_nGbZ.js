import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as s,c,l as p,F as l,b as o}from"./UnauthorizedTooltip-C-uexwNG.js";import"./iframe-ZAwtOOsv.js";import"./preload-helper-PPVm8Dsz.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./style-BLGxefMg.js";import"./WarningFilled-DrGq8YeO.js";import"./AntdIcon-CLyLtIX5.js";import"./Context-D1vOXvMD.js";import"./presets-C7IxLGBr.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./useToken-xerQhSdt.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./client-D5Z-HDZA.js";const w={title:"Components/Data Display/Popover",component:s,args:{}},a=e=>{const n=r.jsx("div",{children:r.jsx("p",{children:"Content"})});return r.jsx(r.Fragment,{children:r.jsx(s,{content:n,title:"Title",trigger:e.trigger,children:r.jsx(c,{children:e.children})})})},t={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:a},m=e=>{const n=r.jsxs(l,{gap:"small",vertical:!0,children:[r.jsx(o.Link,{href:"#link1",children:"Link Example 1"}),r.jsx(o.Link,{href:"#link2",children:"Link Example 2"}),r.jsx(o.Link,{href:"#link3",children:"Link Example 3"})]});return r.jsx(r.Fragment,{children:r.jsx(s,{content:n,title:"Details",trigger:e.trigger,children:r.jsx(p,{style:{margin:"0",cursor:"pointer"},children:e.children??"3"})})})},i={args:{trigger:"click",children:"3"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:m};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
