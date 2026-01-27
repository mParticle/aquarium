import{r as t,j as r,i as c}from"./iframe-D7Ys59RG.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Not Prod Ready/Data Display/Popover",component:t,args:{}},n=s=>{const a=r.jsx("div",{children:r.jsx("p",{children:"Content"})});return r.jsx(r.Fragment,{children:r.jsx(t,{content:a,title:"Title",trigger:s.trigger,children:r.jsx(c,{children:s.children})})})},e={args:{trigger:"hover",children:"Hover Me"},render:n},o={args:{trigger:"focus",children:"Focus Me"},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
