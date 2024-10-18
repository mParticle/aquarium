var k=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(a,e,r)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,o=(a,e)=>{for(var r in e||(e={}))f.call(e,r)&&p(a,r,e[r]);if(l)for(var r of l(e))C.call(e,r)&&p(a,r,e[r]);return a},t=(a,e)=>x(a,j(e));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{ag as R,I as N}from"./GlobalNavigation-Cm5mBd9v.js";import"./ConfigProvider-C4rPDA4Q.js";import"./_baseClone-B3DJrZ5i.js";import"./index-3OP4wdng.js";import"./index-vcA8fjEC.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BwvytWES.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const J={title:"Components/Navigation/NavigationItem",component:a=>n.jsx(R,o({},a)),args:{label:"Label"}},i={},m={args:{icon:n.jsx(N,{name:"mpLogo"}),label:"Icon Label",type:"link",onClick:()=>{alert("Redirection!")}}},s={args:{label:"List Label",type:"menu",icon:n.jsx(N,{name:"mpLogo"}),items:[{label:"Nav Item - Menu",type:"menu",children:[{label:"a",type:"link"},{label:"b",type:"link"},{label:"c"}]}]}};var c,b,u;i.parameters=t(o({},i.parameters),{docs:t(o({},(c=i.parameters)==null?void 0:c.docs),{source:o({originalSource:"{}"},(u=(b=i.parameters)==null?void 0:b.docs)==null?void 0:u.source)})});var d,g,L;m.parameters=t(o({},m.parameters),{docs:t(o({},(d=m.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />,
    label: 'Icon Label',
    type: 'link',
    onClick: () => {
      alert('Redirection!');
    }
  }
}`},(L=(g=m.parameters)==null?void 0:g.docs)==null?void 0:L.source)})});var y,I,v;s.parameters=t(o({},s.parameters),{docs:t(o({},(y=s.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
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
}`},(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source)})});const K=["Primary","NavIcon","NavList"];export{m as NavIcon,s as NavList,i as Primary,K as __namedExportsOrder,J as default};
