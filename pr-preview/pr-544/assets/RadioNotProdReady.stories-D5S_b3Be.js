var x=Object.defineProperty,y=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(o,r,s)=>r in o?x(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s,e=(o,r)=>{for(var s in r||(r={}))E.call(r,s)&&m(o,s,r[s]);if(i)for(var s of i(r))_.call(r,s)&&m(o,s,r[s]);return o},a=(o,r)=>y(o,A(r));import{R as N}from"./NavigationItemsService-BD9o7OYb.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const L={title:"Components/Not Prod Ready/Data Entry/Radio",component:N,args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,value:void 0,onChange:void 0}},t={args:{autoFocus:!0}},c={args:{checked:!0}},n={args:{defaultChecked:!0}},d={args:{disabled:!0}},u={args:{onChange:()=>{alert("Radio Changed")}}};var p,l,g;t.parameters=a(e({},t.parameters),{docs:a(e({},(p=t.parameters)==null?void 0:p.docs),{source:e({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source)})});var h,C,f;c.parameters=a(e({},c.parameters),{docs:a(e({},(h=c.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source)})});var k,R,b;n.parameters=a(e({},n.parameters),{docs:a(e({},(k=n.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    defaultChecked: true
  }
}`},(b=(R=n.parameters)==null?void 0:R.docs)==null?void 0:b.source)})});var D,F,S;d.parameters=a(e({},d.parameters),{docs:a(e({},(D=d.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(S=(F=d.parameters)==null?void 0:F.docs)==null?void 0:S.source)})});var W,v,O;u.parameters=a(e({},u.parameters),{docs:a(e({},(W=u.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    onChange: () => {
      alert('Radio Changed');
    }
  }
}`},(O=(v=u.parameters)==null?void 0:v.docs)==null?void 0:O.source)})});const M=["WithAutoFocus","Checked","DefaultChecked","Disabled","WithOnChange"];export{c as Checked,n as DefaultChecked,d as Disabled,t as WithAutoFocus,u as WithOnChange,M as __namedExportsOrder,L as default};
