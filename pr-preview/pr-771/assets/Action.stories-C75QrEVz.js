import{Q as o}from"./iframe-CmU4YOjm.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Data Entry/QueryItem/Action",component:o.Action,tags:["deprecated"],parameters:{docs:{description:{component:"⚠️ **Deprecated** — The QueryItem component group is deprecated and will not receive further updates. Avoid using it in new implementations."}}},args:{}},e={args:{text:"Primary Action",type:"primary"}},r={args:{text:"Secondary Action",type:"default"}},t={args:{text:"Disabled Action",type:"disabled"}},a={args:{text:"On Click Action",type:"primary",onClick:()=>{alert("You clicked the QueryItem.Action!")}}},n={args:{text:"Loading",type:"disabled",loading:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Loading',
    type: 'disabled',
    loading: true
  }
}`,...n.parameters?.docs?.source}}};const d=["Primary","Secondary","Disabled","OnClick","Loading"];export{t as Disabled,n as Loading,a as OnClick,e as Primary,r as Secondary,d as __namedExportsOrder,i as default};
