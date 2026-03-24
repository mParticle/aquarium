import{D as n}from"./iframe-CAdVB1w2.js";const l={title:"Components/Data Display/Descriptions",component:n,args:{items:[{label:"Item 1",children:"Value 1"}]}},e={args:{title:"User Info",bordered:!1,column:3,size:"default",layout:"horizontal",items:[{key:"1",label:"Name",children:"John Doe"},{key:"2",label:"Email",children:"john@example.com"},{key:"3",label:"Role",children:"Admin"}]},argTypes:{bordered:{control:"select",options:[!1,!0]},column:{control:"select",options:[1,2,3,4]},size:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},o={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'User Info',
    bordered: false,
    column: 3,
    size: 'default',
    layout: 'horizontal',
    items: [{
      key: '1',
      label: 'Name',
      children: 'John Doe'
    }, {
      key: '2',
      label: 'Email',
      children: 'john@example.com'
    }, {
      key: '3',
      label: 'Role',
      children: 'Admin'
    }]
  },
  argTypes: {
    bordered: {
      control: 'select',
      options: [false, true]
    },
    column: {
      control: 'select',
      options: [1, 2, 3, 4]
    },
    size: {
      control: 'select',
      options: ['default', 'middle', 'small']
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const r=["Playground","Primary"],a=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,Primary:o,__namedExportsOrder:r,default:l},Symbol.toStringTag,{value:"Module"}));export{a as D,o as P,e as a};
