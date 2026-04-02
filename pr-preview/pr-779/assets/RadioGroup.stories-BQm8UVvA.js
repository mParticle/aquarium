import{b0 as r}from"./iframe-DS0OBnVl.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Components/Data Entry/Radio/RadioGroup",component:r.Group,args:{disabled:!1,options:void 0,value:void 0,onChange:void 0,children:void 0}},e={args:{options:[{label:"Production",value:"production"},{label:"Development",value:"development"},{label:"Production & Development",value:"unknown"}],defaultValue:"development",optionType:"default"}},o={args:{options:[{label:"Overview",value:"overview"},{label:"Connections",value:"connections"}],defaultValue:"overview",optionType:"button"}},n={name:"Radio group",args:{options:[{label:"Production",value:"production"},{label:"Development",value:"development"},{label:"Production & Development",value:"all"}],defaultValue:"production"}},a={name:"Button group",args:{options:[{label:"Overview",value:"overview"},{label:"Connections",value:"connections"},{label:"Activity",value:"activity"}],defaultValue:"overview",optionType:"button"}},l={name:"Solid button group",args:{options:[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"}],defaultValue:"daily",optionType:"button",buttonStyle:"solid"}},t={name:"Disabled group",args:{options:[{label:"Production",value:"production"},{label:"Development",value:"development"},{label:"Production & Development",value:"all"}],defaultValue:"production",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Production',
      value: 'production'
    }, {
      label: 'Development',
      value: 'development'
    }, {
      label: 'Production & Development',
      value: 'unknown'
    }],
    defaultValue: 'development',
    optionType: 'default'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Overview',
      value: 'overview'
    }, {
      label: 'Connections',
      value: 'connections'
    }],
    defaultValue: 'overview',
    optionType: 'button'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const p=["WithEnvOptions","WithButtonOptionsType","GroupDefault","GroupButton","GroupButtonSolid","GroupDisabled"];export{a as GroupButton,l as GroupButtonSolid,n as GroupDefault,t as GroupDisabled,o as WithButtonOptionsType,e as WithEnvOptions,p as __namedExportsOrder,s as default};
