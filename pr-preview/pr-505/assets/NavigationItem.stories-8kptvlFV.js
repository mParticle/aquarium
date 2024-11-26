var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(a,e,r)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,o=(a,e)=>{for(var r in e||(e={}))f.call(e,r)&&p(a,r,e[r]);if(l)for(var r of l(e))C.call(e,r)&&p(a,r,e[r]);return a},t=(a,e)=>x(a,j(e));import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{a6 as R,I as N}from"./GlobalNavigation-D1vbcux3.js";import"./_baseClone-DBzvlRjn.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C-vZtyW2.js";import"./useToken-B2DZIv7q.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const G={title:"Components/Navigation/NavigationItem",component:a=>n.jsx(R,o({},a)),args:{label:"Label"}},s={},i={args:{icon:n.jsx(N,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},m={args:{label:"List Label",type:"menu",icon:n.jsx(N,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var c,b,u;s.parameters=t(o({},s.parameters),{docs:t(o({},(c=s.parameters)==null?void 0:c.docs),{source:o({originalSource:"{}"},(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source)})});var d,g,L;i.parameters=t(o({},i.parameters),{docs:t(o({},(d=i.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.source)})});var y,I,v;m.parameters=t(o({},m.parameters),{docs:t(o({},(y=m.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
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
}`},(v=(I=m.parameters)==null?void 0:I.docs)==null?void 0:v.source)})});const H=["Primary","NavIcon","NavList"];export{i as NavIcon,m as NavList,s as Primary,H as __namedExportsOrder,G as default};
