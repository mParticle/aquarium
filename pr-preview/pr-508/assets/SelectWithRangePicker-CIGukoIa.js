var j=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var g=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&g(e,a,t[a]);if(d)for(var a of d(t))f.call(t,a)&&g(e,a,t[a]);return e};var x=(e,t)=>{var a={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&d)for(var n of d(e))t.indexOf(n)<0&&f.call(e,n)&&(a[n]=e[n]);return a};import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{r as _}from"./index-CNk6hRaE.js";import{d as T}from"./dayjs.min-KGLNs1IR.js";import{g as O,d as V,F,D as v,z as C}from"./GlobalNavigation-ORgvsQ_o.js";import"./_baseClone-DBzvlRjn.js";const q={month:"short",day:"numeric",year:"numeric"},c=({start:e,end:t,formatOptions:a=q})=>r.jsx(r.Fragment,{children:new Intl.DateTimeFormat("en-US",l({},a)).formatRange(e,t)});try{c.displayName="DateRangeString",c.__docgenInfo={description:"",displayName:"DateRangeString",props:{start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Date"}},end:{defaultValue:null,description:"",name:"end",required:!0,type:{name:"Date"}},formatOptions:{defaultValue:{value:`{
  month: 'short',
  day: 'numeric',
  year: 'numeric',
} as const`},description:"",name:"formatOptions",required:!1,type:{name:"DateTimeFormatOptions"}}}}}catch(e){}const A=r.jsx(C.Text,{children:"Custom date range"}),D=E=>{var u=E,{value:e,rangePickerProps:t={},rangePickerLabel:a=A,formatOptions:n}=u,o=x(u,["value","rangePickerProps","rangePickerLabel","formatOptions"]);const[R,S]=_.useState(void 0);return r.jsx(O,l({value:e,open:R,labelRender:({label:m})=>Array.isArray(e)?r.jsx(c,{formatOptions:n,start:new Date(e[0]),end:new Date(e[1])}):m,dropdownStyle:{minWidth:300},dropdownRender:m=>r.jsxs(r.Fragment,{children:[m,r.jsx(V,{style:{margin:"8px 0"}}),r.jsx("div",{style:{padding:"0 16px 8px"},children:r.jsxs(F,{vertical:!0,gap:10,children:[a,r.jsx(v.RangePicker,l({value:_.useMemo(()=>Array.isArray(e)?e.map(T):void 0,[e]),onOpenChange:i=>{var s;(s=t==null?void 0:t.onOpenChange)==null||s.call(t,i),S(i?!0:void 0)},onChange:i=>{var y;const s=i?i.map(p=>p==null?void 0:p.toDate().toISOString()):null;(y=o.onChange)==null||y.call(o,s,void 0)}},t))]})})]})},o))};try{D.displayName="SelectWithRangePicker",D.__docgenInfo={description:"",displayName:"SelectWithRangePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectWithRangePickerValue<ValueType>"}},rangePickerProps:{defaultValue:{value:"{}"},description:"",name:"rangePickerProps",required:!1,type:{name:'Omit<IRangePickerProps, "value" | "onChange">'}},rangePickerLabel:{defaultValue:{value:"<Typography.Text>Custom date range</Typography.Text>"},description:"",name:"rangePickerLabel",required:!1,type:{name:"ReactNode"}},formatOptions:{defaultValue:null,description:"",name:"formatOptions",required:!1,type:{name:"DateTimeFormatOptions"}}}}}catch(e){}export{D as S};
