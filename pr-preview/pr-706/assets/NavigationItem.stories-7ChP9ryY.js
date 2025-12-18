var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(a,e,r)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,o=(a,e)=>{for(var r in e||(e={}))R.call(e,r)&&l(a,r,e[r]);if(p)for(var r of p(e))f.call(e,r)&&l(a,r,e[r]);return a},t=(a,e)=>x(a,j(e));import{j as n}from"./jsx-runtime-GRP_BLAX.js";import{aj as C,I as v}from"./NavigationItemsService-bN03Ttq5.js";import"./ErrorStateIcon-BDqumtIe.js";import"./SuccessStateIcon-CaXEMaF4.js";import"./WarningStateIcon-Z0wE8OWa.js";import"./_baseClone-BJQa_8Hx.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-M_82l6gX.js";import"./Context-BUSkoOJ1.js";import"./useToken-ZHvy9ttm.js";import"./presets-vy2ytAcW.js";import"./index-DN1Ck1Y5.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Bm4W6gxM.js";import"./style-C9UL_bK6.js";import"./client-CgpM46-k.js";import"./WarningFilled-KKNPfhjt.js";const T={title:"Components/Not Prod Ready/Navigation/NavigationItem",component:a=>n.jsx(C,o({},a)),args:{label:"Label"}},i={},m={args:{icon:n.jsx(v,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},s={args:{label:"List Label",type:"menu",icon:n.jsx(v,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var c,b,d;i.parameters=t(o({},i.parameters),{docs:t(o({},(c=i.parameters)==null?void 0:c.docs),{source:o({originalSource:"{}"},(d=(b=i.parameters)==null?void 0:b.docs)==null?void 0:d.source)})});var u,g,y;m.parameters=t(o({},m.parameters),{docs:t(o({},(u=m.parameters)==null?void 0:u.docs),{source:o({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(y=(g=m.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var L,I,N;s.parameters=t(o({},s.parameters),{docs:t(o({},(L=s.parameters)==null?void 0:L.docs),{source:o({originalSource:`{
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
