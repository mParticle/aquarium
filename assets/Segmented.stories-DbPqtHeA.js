import{br as n}from"./iframe-DLWuJCtr.js";const l=[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"}],o={title:"Components/Not Prod Ready/Data Display/Segmented",component:n,args:{options:l,defaultValue:l[0]?.value,size:"middle"},argTypes:{onChange:{action:"change"}}},e={args:{size:"middle",block:!1,disabled:!1,options:l,defaultValue:l[0]?.value},argTypes:{size:{control:"select",options:["small","middle","large"]},block:{control:"select",options:[!1,!0]},disabled:{control:"select",options:[!1,!0]},options:{table:{disable:!0}},defaultValue:{table:{disable:!0}}}},a={args:{size:"small"}},s={args:{size:"large"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'middle',
    block: false,
    disabled: false,
    options: segmentedOptions,
    defaultValue: segmentedOptions[0]?.value
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large']
    },
    block: {
      control: 'select',
      options: [false, true]
    },
    disabled: {
      control: 'select',
      options: [false, true]
    },
    options: {
      table: {
        disable: true
      }
    },
    defaultValue: {
      table: {
        disable: true
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};const t=["Playground","Small","Large"],d=Object.freeze(Object.defineProperty({__proto__:null,Large:s,Playground:e,Small:a,__namedExportsOrder:t,default:o},Symbol.toStringTag,{value:"Module"}));export{s as L,e as P,d as S,a};
