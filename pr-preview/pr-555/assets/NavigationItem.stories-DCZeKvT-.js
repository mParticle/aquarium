var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(a,e,r)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,o=(a,e)=>{for(var r in e||(e={}))f.call(e,r)&&c(a,r,e[r]);if(l)for(var r of l(e))C.call(e,r)&&c(a,r,e[r]);return a},t=(a,e)=>x(a,j(e));import{j as m}from"./jsx-runtime-BcCOBRXo.js";import{aj as R,I as N}from"./NavigationItemsService-exZZXA49.js";import"./_baseClone-DBzvlRjn.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const B={title:"Components/Navigation/NavigationItem",component:a=>m.jsx(R,o({},a)),args:{label:"Label"}},s={},i={args:{icon:m.jsx(N,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},n={args:{label:"List Label",type:"menu",icon:m.jsx(N,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var p,b,u;s.parameters=t(o({},s.parameters),{docs:t(o({},(p=s.parameters)==null?void 0:p.docs),{source:o({originalSource:"{}"},(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source)})});var d,g,L;i.parameters=t(o({},i.parameters),{docs:t(o({},(d=i.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.source)})});var y,I,v;n.parameters=t(o({},n.parameters),{docs:t(o({},(y=n.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
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
}`},(v=(I=n.parameters)==null?void 0:I.docs)==null?void 0:v.source)})});const D=["Primary","NavIcon","NavList"];export{i as NavIcon,n as NavList,s as Primary,D as __namedExportsOrder,B as default};
