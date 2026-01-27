import{j as r,aX as n,I as t}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Not Prod Ready/Navigation/NavigationItem",component:s=>r.jsx(n,{...s}),args:{label:"Label"}},e={},a={args:{icon:r.jsx(t,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},o={args:{label:"List Label",type:"menu",icon:r.jsx(t,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'List Label',
    type: 'menu',
    icon: <Icon name="mpLogo" />,
    items: [{
      label: 'Nav Item - Menu',
      type: 'menu',
      children: [{
        label: 'a',
        type: 'link'
      }, {
        label: 'b',
        type: 'link'
      }, {
        label: 'c'
      }]
    }]
  }
}`,...o.parameters?.docs?.source}}};const m=["Primary","NavIcon","NavList"];export{a as NavIcon,o as NavList,e as Primary,m as __namedExportsOrder,i as default};
