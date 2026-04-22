import{j as o,cr as l,I as t}from"./iframe-CcEJbbNh.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Experimental/Navigation/NavigationItem",component:s=>o.jsx(l,{...s}),args:{label:"Label"}},e={},a={args:{icon:o.jsx(t,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},r={args:{label:"List Label",type:"menu",icon:o.jsx(t,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const m=["Primary","NavIcon","NavList"];export{a as NavIcon,r as NavList,e as Primary,m as __namedExportsOrder,i as default};
