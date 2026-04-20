import{b0 as l}from"./iframe-CcOMz3wN.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Data Entry/Radio/RadioGroup",component:l.Group,args:{disabled:!1,options:void 0,value:void 0,onChange:void 0,children:void 0}},e={name:"Radio group",args:{options:[{label:"Production",value:"production"},{label:"Development",value:"development"},{label:"Production & Development",value:"all"}],defaultValue:"production"}},o={name:"Button group",args:{options:[{label:"Overview",value:"overview"},{label:"Connections",value:"connections"},{label:"Activity",value:"activity"}],defaultValue:"overview",optionType:"button"}},n={name:"Solid button group",args:{options:[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"}],defaultValue:"daily",optionType:"button",buttonStyle:"solid"}},a={name:"Disabled group",args:{options:[{label:"Production",value:"production"},{label:"Development",value:"development"},{label:"Production & Development",value:"all"}],defaultValue:"production",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Radio group',
  args: {
    options: [{
      label: 'Production',
      value: 'production'
    }, {
      label: 'Development',
      value: 'development'
    }, {
      label: 'Production & Development',
      value: 'all'
    }],
    defaultValue: 'production'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Button group',
  args: {
    options: [{
      label: 'Overview',
      value: 'overview'
    }, {
      label: 'Connections',
      value: 'connections'
    }, {
      label: 'Activity',
      value: 'activity'
    }],
    defaultValue: 'overview',
    optionType: 'button'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Solid button group',
  args: {
    options: [{
      label: 'Daily',
      value: 'daily'
    }, {
      label: 'Weekly',
      value: 'weekly'
    }, {
      label: 'Monthly',
      value: 'monthly'
    }],
    defaultValue: 'daily',
    optionType: 'button',
    buttonStyle: 'solid'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Disabled group',
  args: {
    options: [{
      label: 'Production',
      value: 'production'
    }, {
      label: 'Development',
      value: 'development'
    }, {
      label: 'Production & Development',
      value: 'all'
    }],
    defaultValue: 'production',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const i=["GroupDefault","GroupButton","GroupButtonSolid","GroupDisabled"];export{o as GroupButton,n as GroupButtonSolid,e as GroupDefault,a as GroupDisabled,i as __namedExportsOrder,u as default};
