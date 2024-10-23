var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(a,e,o)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,n=(a,e)=>{for(var o in e||(e={}))f.call(e,o)&&p(a,o,e[o]);if(l)for(var o of l(e))C.call(e,o)&&p(a,o,e[o]);return a},r=(a,e)=>x(a,j(e));import{j as m}from"./jsx-runtime-BcCOBRXo.js";import{aa as R,I as N}from"./GlobalNavigation-DgsMOKTE.js";import"./_baseClone-u1J3oOXU.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-4dnY1EES.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-0c7aa-qo.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./_getPrototype-CAOE_2rY.js";const H={title:"Components/Navigation/NavigationItem",component:a=>m.jsx(R,n({},a)),args:{label:"Label"}},t={},i={args:{icon:m.jsx(N,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},s={args:{label:"List Label",type:"menu",icon:m.jsx(N,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var c,b,u;t.parameters=r(n({},t.parameters),{docs:r(n({},(c=t.parameters)==null?void 0:c.docs),{source:n({originalSource:"{}"},(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source)})});var d,g,L;i.parameters=r(n({},i.parameters),{docs:r(n({},(d=i.parameters)==null?void 0:d.docs),{source:n({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.source)})});var y,I,v;s.parameters=r(n({},s.parameters),{docs:r(n({},(y=s.parameters)==null?void 0:y.docs),{source:n({originalSource:`{
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
}`},(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source)})});const J=["Primary","NavIcon","NavList"];export{i as NavIcon,s as NavList,t as Primary,J as __namedExportsOrder,H as default};
