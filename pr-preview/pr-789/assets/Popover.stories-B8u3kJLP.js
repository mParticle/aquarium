import{aI as s,j as e,k as l,aJ as a,F as p,T as i}from"./iframe-2HsD8AyD.js";const g={title:"Components/Data Display/Popover",component:s,args:{}},t={args:{title:"Popover Title",content:"Popover content goes here",trigger:"click",placement:"top",arrow:!0},argTypes:{trigger:{control:"select",options:["click","hover","focus"]},placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight"]},arrow:{control:"select",options:[!1,!0]}},render:r=>e.jsx(s,{...r,children:e.jsx(l,{children:"Click me"})})},m=r=>{const c=e.jsx("div",{children:e.jsx("p",{children:"Content"})});return e.jsx(e.Fragment,{children:e.jsx(s,{content:c,title:"Title",trigger:r.trigger,children:e.jsx(l,{children:r.children})})})},o={args:{trigger:"click",children:"Button with popover"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:m},h=r=>{const c=e.jsxs(p,{gap:"small",vertical:!0,children:[e.jsx(i.Link,{href:"#link1",children:"Link Example 1"}),e.jsx(i.Link,{href:"#link2",children:"Link Example 2"}),e.jsx(i.Link,{href:"#link3",children:"Link Example 3"})]});return e.jsx(e.Fragment,{children:e.jsx(s,{content:c,title:"Details",trigger:r.trigger,children:e.jsx(a,{style:{margin:"0",cursor:"pointer"},children:r.children??"3"})})})},n={args:{trigger:"click",children:"3"},argTypes:{trigger:{control:"select",options:["click","hover","focus"]}},render:h};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Popover Title',
    content: 'Popover content goes here',
    trigger: 'click',
    placement: 'top',
    arrow: true
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus']
    },
    placement: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
    },
    arrow: {
      control: 'select',
      options: [false, true]
    }
  },
  render: args => <Popover {...args}>
      <Button>Click me</Button>
    </Popover>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const d=["Playground","Primary","ExampleWithLinks"],k=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithLinks:n,Playground:t,Primary:o,__namedExportsOrder:d,default:g},Symbol.toStringTag,{value:"Module"}));export{n as E,k as P,o as a,t as b};
