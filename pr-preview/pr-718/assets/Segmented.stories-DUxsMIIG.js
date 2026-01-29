var b=Object.defineProperty,z=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(s,e,a)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,r=(s,e)=>{for(var a in e||(e={}))f.call(e,a)&&m(s,a,e[a]);if(n)for(var a of n(e))v.call(e,a)&&m(s,a,e[a]);return s},o=(s,e)=>z(s,_(e));import{m as h}from"./UnauthorizedTooltip-TkELsoFl.js";const c=[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"}];var d;const O={title:"Components/Not Prod Ready/Data Display/Segmented",component:h,args:{options:c,defaultValue:(d=c[0])==null?void 0:d.value,size:"middle"},argTypes:{onChange:{action:"change"}}},t={args:{size:"small"}},l={args:{size:"large"}};var i,g,p;t.parameters=o(r({},t.parameters),{docs:o(r({},(i=t.parameters)==null?void 0:i.docs),{source:r({originalSource:`{
  args: {
    size: 'small'
  }
}`},(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source)})});var u,y,S;l.parameters=o(r({},l.parameters),{docs:o(r({},(u=l.parameters)==null?void 0:u.docs),{source:r({originalSource:`{
  args: {
    size: 'large'
  }
}`},(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source)})});const D=["Small","Large"],k=Object.freeze(Object.defineProperty({__proto__:null,Large:l,Small:t,__namedExportsOrder:D,default:O},Symbol.toStringTag,{value:"Module"}));export{l as L,k as S,t as a};
