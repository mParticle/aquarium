import{Q as n}from"./iframe-D7Ys59RG.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Data Entry/QueryItem/Action",component:n.Action,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{}},e={args:{text:"Primary Action",type:"primary"}},r={args:{text:"Secondary Action",type:"default"}},t={args:{text:"Disabled Action",type:"disabled"}},a={args:{text:"On Click Action",type:"primary",onClick:()=>{alert("You clicked the QueryItem.Action!")}}},o={args:{text:"Loading",type:"disabled",loading:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Primary Action',
    type: 'primary'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Action',
    type: 'default'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Disabled Action',
    type: 'disabled'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'On Click Action',
    type: 'primary',
    onClick: () => {
      alert('You clicked the QueryItem.Action!');
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Loading',
    type: 'disabled',
    loading: true
  }
}`,...o.parameters?.docs?.source}}};const p=["Primary","Secondary","Disabled","OnClick","Loading"];export{t as Disabled,o as Loading,a as OnClick,e as Primary,r as Secondary,p as __namedExportsOrder,i as default};
