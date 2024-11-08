var x=Object.defineProperty,A=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(o,a,s)=>a in o?x(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,e=(o,a)=>{for(var s in a||(a={}))z.call(a,s)&&p(o,s,a[s]);if(m)for(var s of m(a))M.call(a,s)&&p(o,s,a[s]);return o},r=(o,a)=>A(o,E(a));import{R as T}from"./GlobalNavigation-BzXRtY4t.js";const q={title:"Components/Data Entry/Radio",component:T,args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,value:void 0,onChange:void 0}},t={},c={args:{autoFocus:!0}},n={args:{checked:!0}},d={args:{defaultChecked:!0}},u={args:{disabled:!0}},i={args:{onChange:()=>{alert("Radio Changed")}}};var l,g,h;t.parameters=r(e({},t.parameters),{docs:r(e({},(l=t.parameters)==null?void 0:l.docs),{source:e({originalSource:"{}"},(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var C,f,k;c.parameters=r(e({},c.parameters),{docs:r(e({},(C=c.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source)})});var S,b,R;n.parameters=r(e({},n.parameters),{docs:r(e({},(S=n.parameters)==null?void 0:S.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(R=(b=n.parameters)==null?void 0:b.docs)==null?void 0:R.source)})});var _,y,D;d.parameters=r(e({},d.parameters),{docs:r(e({},(_=d.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    defaultChecked: true
  }
}`},(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source)})});var F,O,v;u.parameters=r(e({},u.parameters),{docs:r(e({},(F=u.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(v=(O=u.parameters)==null?void 0:O.docs)==null?void 0:v.source)})});var W,P,j;i.parameters=r(e({},i.parameters),{docs:r(e({},(W=i.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    onChange: () => {
      alert('Radio Changed');
    }
  }
}`},(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source)})});const w=["Primary","WithAutoFocus","Checked","DefaultChecked","Disabled","WithOnChange"],H=Object.freeze(Object.defineProperty({__proto__:null,Checked:n,DefaultChecked:d,Disabled:u,Primary:t,WithAutoFocus:c,WithOnChange:i,__namedExportsOrder:w,default:q},Symbol.toStringTag,{value:"Module"}));export{H as R,q as m};
