var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(a,e,o)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,n=(a,e)=>{for(var o in e||(e={}))f.call(e,o)&&p(a,o,e[o]);if(l)for(var o of l(e))C.call(e,o)&&p(a,o,e[o]);return a},r=(a,e)=>x(a,j(e));import{j as s}from"./jsx-runtime-CS-_a2eV.js";import{al as R,I as N}from"./GlobalNavigation-DTRh3LWh.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const K={title:"Components/Navigation/NavigationItem",component:a=>s.jsx(R,n({},a)),args:{label:"Label"}},t={},i={args:{icon:s.jsx(N,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},m={args:{label:"List Label",type:"menu",icon:s.jsx(N,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var c,b,u;t.parameters=r(n({},t.parameters),{docs:r(n({},(c=t.parameters)==null?void 0:c.docs),{source:n({originalSource:"{}"},(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source)})});var d,g,L;i.parameters=r(n({},i.parameters),{docs:r(n({},(d=i.parameters)==null?void 0:d.docs),{source:n({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.source)})});var y,I,v;m.parameters=r(n({},m.parameters),{docs:r(n({},(y=m.parameters)==null?void 0:y.docs),{source:n({originalSource:`{
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
}`},(v=(I=m.parameters)==null?void 0:I.docs)==null?void 0:v.source)})});const Q=["Primary","NavIcon","NavList"];export{i as NavIcon,m as NavList,t as Primary,Q as __namedExportsOrder,K as default};
