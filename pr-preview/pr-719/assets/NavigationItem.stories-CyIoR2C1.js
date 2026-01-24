var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(o,e,r)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,a=(o,e)=>{for(var r in e||(e={}))R.call(e,r)&&l(o,r,e[r]);if(p)for(var r of p(e))f.call(e,r)&&l(o,r,e[r]);return o},t=(o,e)=>x(o,j(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{ao as C,I as v}from"./UnauthorizedTooltip-1ZRAhzDH.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BbwCNso5.js";import"./WarningFilled-D6ijQqgK.js";const T={title:"Components/Not Prod Ready/Navigation/NavigationItem",component:o=>n.jsx(C,a({},o)),args:{label:"Label"}},i={},m={args:{icon:n.jsx(v,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},s={args:{label:"List Label",type:"menu",icon:n.jsx(v,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var c,b,d;i.parameters=t(a({},i.parameters),{docs:t(a({},(c=i.parameters)==null?void 0:c.docs),{source:a({originalSource:"{}"},(d=(b=i.parameters)==null?void 0:b.docs)==null?void 0:d.source)})});var u,g,y;m.parameters=t(a({},m.parameters),{docs:t(a({},(u=m.parameters)==null?void 0:u.docs),{source:a({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(y=(g=m.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var L,I,N;s.parameters=t(a({},s.parameters),{docs:t(a({},(L=s.parameters)==null?void 0:L.docs),{source:a({originalSource:`{
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
}`},(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.source)})});const U=["Primary","NavIcon","NavList"];export{m as NavIcon,s as NavList,i as Primary,U as __namedExportsOrder,T as default};
