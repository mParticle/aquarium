import{Q as n}from"./iframe-_QPLlW2H.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Components/Data Entry/QueryItem/Qualifier",component:n.Qualifier,args:{}},t=[{value:"0",label:"is equal to"},{value:"1",label:"is not equal to"},{value:"2",label:"is greater than"},{value:"3",label:"is greater or equal to"},{value:"4",label:"is less than"},{value:"5",label:"is less or equal to"}],e={},r={args:{options:t}},a={args:{errorMessage:"This is an error message for the Qualifier component",options:t}},s={args:{disabled:!0,options:t}},o={args:{options:t,value:{value:"2",label:"is greater than"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    errorMessage: 'This is an error message for the Qualifier component',
    options: defaultOptions
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: defaultOptions
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    value: {
      value: '2',
      label: 'is greater than'
    }
  }
}`,...o.parameters?.docs?.source}}};const c=["Empty","Simple","Error","Disabled","PreSelected"];export{s as Disabled,e as Empty,a as Error,o as PreSelected,r as Simple,c as __namedExportsOrder,p as default};
