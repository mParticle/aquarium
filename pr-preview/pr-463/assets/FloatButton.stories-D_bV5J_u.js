var S=Object.defineProperty,f=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var n=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&n(e,t,r[t]);if(c)for(var t of c(r))x.call(r,t)&&n(e,t,r[t]);return e},a=(e,r)=>f(e,F(r));import{a9 as C}from"./GlobalNavigation-Cm5mBd9v.js";import"./jsx-runtime-CVnACwZl.js";import"./index-3OP4wdng.js";import"./ConfigProvider-C4rPDA4Q.js";import"./LightTheme-BtoaoHMG.js";import"./index-vcA8fjEC.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BwvytWES.js";import"./_baseClone-B3DJrZ5i.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";const J={title:"Components/General/FloatButton",component:C,args:{description:"Float Button",tooltip:"Tooltip Text",type:"primary",shape:"circle",href:"",target:"",badge:void 0,onClick:e=>{alert("Float Button Clicked!")}},argTypes:{shape:{control:"select",options:["circle","square"]},type:{control:"select",options:["default","primary"]}}},s={},p={args:{badge:{count:5}}},i={args:{shape:"square"}};var m,l,u;s.parameters=a(o({},s.parameters),{docs:a(o({},(m=s.parameters)==null?void 0:m.docs),{source:o({originalSource:"{}"},(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source)})});var d,g,h;p.parameters=a(o({},p.parameters),{docs:a(o({},(d=p.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
  args: {
    badge: {
      count: 5
    }
  }
}`},(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var y,B,q;i.parameters=a(o({},i.parameters),{docs:a(o({},(y=i.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(q=(B=i.parameters)==null?void 0:B.docs)==null?void 0:q.source)})});const K=["Primary","WithBadge","Square"];export{s as Primary,i as Square,p as WithBadge,K as __namedExportsOrder,J as default};
