var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(a,e,r)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,o=(a,e)=>{for(var r in e||(e={}))R.call(e,r)&&c(a,r,e[r]);if(l)for(var r of l(e))f.call(e,r)&&c(a,r,e[r]);return a},t=(a,e)=>x(a,j(e));import{j as m}from"./jsx-runtime-BcCOBRXo.js";import{ai as C,I as v}from"./NavigationItemsService-Bg7TmIXx.js";import"./_baseClone-DBzvlRjn.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const B={title:"Components/Not Prod Ready/Navigation/NavigationItem",component:a=>m.jsx(C,o({},a)),args:{label:"Label"}},s={},i={args:{icon:m.jsx(v,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},n={args:{label:"List Label",type:"menu",icon:m.jsx(v,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var p,b,d;s.parameters=t(o({},s.parameters),{docs:t(o({},(p=s.parameters)==null?void 0:p.docs),{source:o({originalSource:"{}"},(d=(b=s.parameters)==null?void 0:b.docs)==null?void 0:d.source)})});var u,g,y;i.parameters=t(o({},i.parameters),{docs:t(o({},(u=i.parameters)==null?void 0:u.docs),{source:o({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var L,I,N;n.parameters=t(o({},n.parameters),{docs:t(o({},(L=n.parameters)==null?void 0:L.docs),{source:o({originalSource:`{
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
}`},(N=(I=n.parameters)==null?void 0:I.docs)==null?void 0:N.source)})});const D=["Primary","NavIcon","NavList"];export{i as NavIcon,n as NavList,s as Primary,D as __namedExportsOrder,B as default};
