var k=Object.defineProperty,w=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var g=(s,a,o)=>a in s?k(s,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[a]=o,r=(s,a)=>{for(var o in a||(a={}))B.call(a,o)&&g(s,o,a[o]);if(l)for(var o of l(a))G.call(a,o)&&g(s,o,a[o]);return s},e=(s,a)=>w(s,z(a));import{Q as H}from"./NavigationItemsService-BBuWakmw.js";import"./_baseClone-DBzvlRjn.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const ar={title:"Components/Data Entry/QueryItem/ValueSelector/NumberInput",component:H.ValueSelector.NumberInput,parameters:{docs:{description:{component:'This is the "Number Input" component of the QueryItem/ValueSelector component group.'}}},args:{onChange:s=>{console.log(s)}}},t={},c={args:{value:2}},n={args:{placeholder:"Enter a Number"}},m={args:{errorMessage:"Required field!"}},p={args:{disabled:!0,placeholder:"Disabled"}},u={args:{min:0}},d={args:{max:100}},i={args:{autoFocus:!0}};var b,S,h;t.parameters=e(r({},t.parameters),{docs:e(r({},(b=t.parameters)==null?void 0:b.docs),{source:r({originalSource:"{}"},(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source)})});var M,f,D;c.parameters=e(r({},c.parameters),{docs:e(r({},(M=c.parameters)==null?void 0:M.docs),{source:r({originalSource:`{
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
}`},(A=(v=u.parameters)==null?void 0:v.docs)==null?void 0:A.source)})});var C,R,_;d.parameters=e(r({},d.parameters),{docs:e(r({},(C=d.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    max: 100
  }
}`},(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source)})});var O,T,j;i.parameters=e(r({},i.parameters),{docs:e(r({},(O=i.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source)})});const sr=["Primary","Default","Placeholder","ErrorMessage","Disabled","Min","Max","AutoFocus"];export{i as AutoFocus,c as Default,p as Disabled,m as ErrorMessage,d as Max,u as Min,n as Placeholder,t as Primary,sr as __namedExportsOrder,ar as default};
