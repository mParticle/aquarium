var S=Object.defineProperty,f=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&m(e,t,r[t]);if(c)for(var t of c(r))x.call(r,t)&&m(e,t,r[t]);return e},a=(e,r)=>f(e,F(r));import{ad as C}from"./GlobalNavigation-5Ze4QgXZ.js";import"./jsx-runtime-CS-_a2eV.js";import"./index-Ca44TZ0D.js";import"./ConfigProvider-aHzMMMgW.js";import"./LightTheme-BZ07JyGW.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./_baseClone-BwI25-yt.js";import"./_getPrototype-fDUIJvdn.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";const K={title:"Components/General/FloatButton",component:C,args:{description:"Float Button",tooltip:"Tooltip Text",type:"primary",shape:"circle",href:"",target:"",badge:void 0,onClick:e=>{alert("Float Button Clicked!")}},argTypes:{shape:{control:"select",options:["circle","square"]},type:{control:"select",options:["default","primary"]}}},s={},p={args:{badge:{count:5}}},i={args:{shape:"square"}};var n,d,l;s.parameters=a(o({},s.parameters),{docs:a(o({},(n=s.parameters)==null?void 0:n.docs),{source:o({originalSource:"{}"},(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});var u,g,h;p.parameters=a(o({},p.parameters),{docs:a(o({},(u=p.parameters)==null?void 0:u.docs),{source:o({originalSource:`{
  args: {
    badge: {
      count: 5
    }
  }
}`},(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var y,B,q;i.parameters=a(o({},i.parameters),{docs:a(o({},(y=i.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(q=(B=i.parameters)==null?void 0:B.docs)==null?void 0:q.source)})});const L=["Primary","WithBadge","Square"];export{s as Primary,i as Square,p as WithBadge,L as __namedExportsOrder,K as default};
