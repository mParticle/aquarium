import{t as s,j as r,k as c}from"./iframe-B-6VwREf.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Not Prod Ready/Data Display/Popover",component:s,args:{}},n=t=>{const a=r.jsx("div",{children:r.jsx("p",{children:"Content"})});return r.jsx(r.Fragment,{children:r.jsx(s,{content:a,title:"Title",trigger:t.trigger,children:r.jsx(c,{children:t.children})})})},e={args:{trigger:"hover",children:"Hover Me"},render:n},o={args:{trigger:"focus",children:"Focus Me"},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    children: 'Hover Me'
  },
  render: PrimaryTemplate
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'focus',
    children: 'Focus Me'
  },
  render: PrimaryTemplate
}`,...o.parameters?.docs?.source}}};const p=["Hover","Focus"];export{o as Focus,e as Hover,p as __namedExportsOrder,m as default};
