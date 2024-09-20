var j=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(s,a,o)=>a in s?j(s,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[a]=o,r=(s,a)=>{for(var o in a||(a={}))z.call(a,o)&&g(s,o,a[o]);if(l)for(var o of l(a))B.call(a,o)&&g(s,o,a[o]);return s},e=(s,a)=>k(s,w(a));import{X as G}from"./GlobalNavigation-5Ze4QgXZ.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import"./jsx-runtime-CS-_a2eV.js";import"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const mr={title:"Components/Data Entry/QueryItem/ValueSelector/NumberInput",component:G.ValueSelector.NumberInput,parameters:{docs:{description:{component:'This is the "Number Input" component of the QueryItem/ValueSelector component group.'}}},args:{onChange:s=>{console.log(s)}}},t={},c={args:{value:2}},n={args:{placeholder:"Enter a Number"}},m={args:{errorMessage:"Required field!"}},p={args:{disabled:!0,placeholder:"Disabled"}},u={args:{min:0}},i={args:{max:100}},d={args:{autoFocus:!0}};var b,S,h;t.parameters=e(r({},t.parameters),{docs:e(r({},(b=t.parameters)==null?void 0:b.docs),{source:r({originalSource:"{}"},(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source)})});var M,f,D;c.parameters=e(r({},c.parameters),{docs:e(r({},(M=c.parameters)==null?void 0:M.docs),{source:r({originalSource:`{
  args: {
    value: 2
  }
}`},(D=(f=c.parameters)==null?void 0:f.docs)==null?void 0:D.source)})});var x,y,E;n.parameters=e(r({},n.parameters),{docs:e(r({},(x=n.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  args: {
    placeholder: 'Enter a Number'
  }
}`},(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.source)})});var I,N,F;m.parameters=e(r({},m.parameters),{docs:e(r({},(I=m.parameters)==null?void 0:I.docs),{source:r({originalSource:`{
  args: {
    errorMessage: 'Required field!'
  }
}`},(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source)})});var P,Q,V;p.parameters=e(r({},p.parameters),{docs:e(r({},(P=p.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled'
  }
}`},(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});var q,v,A;u.parameters=e(r({},u.parameters),{docs:e(r({},(q=u.parameters)==null?void 0:q.docs),{source:r({originalSource:`{
  args: {
    min: 0
  }
}`},(A=(v=u.parameters)==null?void 0:v.docs)==null?void 0:A.source)})});var C,R,_;i.parameters=e(r({},i.parameters),{docs:e(r({},(C=i.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    max: 100
  }
}`},(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source)})});var O,T,X;d.parameters=e(r({},d.parameters),{docs:e(r({},(O=d.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(X=(T=d.parameters)==null?void 0:T.docs)==null?void 0:X.source)})});const pr=["Primary","Default","Placeholder","ErrorMessage","Disabled","Min","Max","AutoFocus"];export{d as AutoFocus,c as Default,p as Disabled,m as ErrorMessage,i as Max,u as Min,n as Placeholder,t as Primary,pr as __namedExportsOrder,mr as default};