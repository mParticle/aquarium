var b=Object.defineProperty,g=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var p=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,o=(r,e)=>{for(var t in e||(e={}))f.call(e,t)&&p(r,t,e[t]);if(i)for(var t of i(e))D.call(e,t)&&p(r,t,e[t]);return r},a=(r,e)=>g(r,T(e));import{W as y}from"./GlobalNavigation-DxJ0bpmA.js";import"./ConfigProvider-CLSyxc9v.js";import"./_baseClone-B3DJrZ5i.js";import"./jsx-runtime-CVnACwZl.js";import"./index-3OP4wdng.js";import"./index-DWDMsSA9.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BmOE1Szh.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const A={title:"Components/Data Entry/QueryItem/Text",component:y.Text,parameters:{docs:{description:{component:'This is the "Text" component of the QueryItem component group.'}}},args:{}},s={args:{text:"Default Text",disabled:!1}},m={args:{text:"Disabled Text",disabled:!0}};var n,d,c;s.parameters=a(o({},s.parameters),{docs:a(o({},(n=s.parameters)==null?void 0:n.docs),{source:o({originalSource:`{
  args: {
    text: 'Default Text',
    disabled: false
  }
}`},(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source)})});var l,u,x;m.parameters=a(o({},m.parameters),{docs:a(o({},(l=m.parameters)==null?void 0:l.docs),{source:o({originalSource:`{
  args: {
    text: 'Disabled Text',
    disabled: true
  }
}`},(x=(u=m.parameters)==null?void 0:u.docs)==null?void 0:x.source)})});const B=["Primary","Disabled"];export{m as Disabled,s as Primary,B as __namedExportsOrder,A as default};
