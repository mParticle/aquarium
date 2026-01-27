import{r as o,j as r,i as c,s as a,F as l,T as s}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Data Display/Popover",component:o,args:{}},p=e=>{const i=r.jsx("div",{children:r.jsx("p",{children:"Content"})});return r.jsx(r.Fragment,{children:r.jsx(o,{content:i,title:"Title",trigger:e.trigger,children:r.jsx(c,{children:e.children})})})},n={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:p},g=e=>{const i=r.jsxs(l,{gap:"small",vertical:!0,children:[r.jsx(s.Link,{href:"#link1",children:"Link Example 1"}),r.jsx(s.Link,{href:"#link2",children:"Link Example 2"}),r.jsx(s.Link,{href:"#link3",children:"Link Example 3"})]});return r.jsx(r.Fragment,{children:r.jsx(o,{content:i,title:"Details",trigger:e.trigger,children:r.jsx(a,{style:{margin:"0",cursor:"pointer"},children:e.children??"3"})})})},t={args:{trigger:"click",children:"3"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:g};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Primary","ExampleWithLinks"];export{t as ExampleWithLinks,n as Primary,x as __namedExportsOrder,h as default};
