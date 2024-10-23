var L=Object.defineProperty,b=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(e,a,t)=>a in e?L(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&_(e,t,a[t]);if(u)for(var t of u(a))x.call(a,t)&&_(e,t,a[t]);return e},p=(e,a)=>b(e,A(a));var R=(e,a)=>{var t={};for(var n in e)v.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&u)for(var n of u(e))a.indexOf(n)<0&&x.call(e,n)&&(t[n]=e[n]);return t};import{j as r}from"./jsx-runtime-CVnACwZl.js";import{r as S}from"./index-3OP4wdng.js";import{d as F}from"./dayjs.min-FTgVsUrW.js";import{aw as V,D as E,F as q,h as I,t as W}from"./GlobalNavigation-DxJ0bpmA.js";import"./ConfigProvider-CLSyxc9v.js";import"./_baseClone-B3DJrZ5i.js";import{f as w}from"./index-BU0ZtLqn.js";const N={month:"short",day:"numeric",year:"numeric"},y=({start:e,end:a,formatOptions:t=N})=>r.jsx(r.Fragment,{children:new Intl.DateTimeFormat("en-US",s({},t)).formatRange(e,a)});try{y.displayName="DateRangeString",y.__docgenInfo={description:"",displayName:"DateRangeString",props:{start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Date"}},end:{defaultValue:null,description:"",name:"end",required:!0,type:{name:"Date"}},formatOptions:{defaultValue:{value:`{
  month: 'short',
  day: 'numeric',
  year: 'numeric',
} as const`},description:"",name:"formatOptions",required:!1,type:{name:"DateTimeFormatOptions"}}}}}catch(e){}const U=r.jsx(W.Text,{children:"Custom date range"}),c=K=>{var h=K,{value:e,rangePickerProps:a={},rangePickerLabel:t=U,formatOptions:n}=h,o=R(h,["value","rangePickerProps","rangePickerLabel","formatOptions"]);const[T,C]=S.useState(void 0);return r.jsx(V,s({value:e,open:T,labelRender:({label:m})=>Array.isArray(e)?r.jsx(y,{formatOptions:n,start:new Date(e[0]),end:new Date(e[1])}):m,dropdownStyle:{minWidth:300},dropdownRender:m=>r.jsxs(r.Fragment,{children:[m,r.jsx(E,{style:{margin:"8px 0"}}),r.jsx("div",{style:{padding:"0 16px 8px"},children:r.jsxs(q,{vertical:!0,gap:10,children:[t,r.jsx(I.RangePicker,s({value:S.useMemo(()=>Array.isArray(e)?e.map(F):void 0,[e]),onOpenChange:l=>{var d;(d=a==null?void 0:a.onOpenChange)==null||d.call(a,l),C(l?!0:void 0)},onChange:l=>{var f;const d=l?l.map(g=>g==null?void 0:g.toDate().toISOString()):null;(f=o.onChange)==null||f.call(o,d,void 0)}},a))]})})]})},o))};try{c.displayName="SelectWithRangePicker",c.__docgenInfo={description:"",displayName:"SelectWithRangePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectWithRangePickerValue<ValueType>"}},rangePickerProps:{defaultValue:{value:"{}"},description:"",name:"rangePickerProps",required:!1,type:{name:'Omit<RangePickerProps, "value" | "onChange">'}},rangePickerLabel:{defaultValue:{value:"<Typography.Text>Custom date range</Typography.Text>"},description:"",name:"rangePickerLabel",required:!1,type:{name:"ReactNode"}},formatOptions:{defaultValue:null,description:"",name:"formatOptions",required:!1,type:{name:"DateTimeFormatOptions"}}}}}catch(e){}const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,M={title:"Candidate Components/Directory/Date Range Filter",component:c},i={args:{value:"last30days",onSelect:w(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},render:function(a){const[{value:t},n]=k();return r.jsx(c,p(s({},a),{value:t,onChange:o=>{n({value:o})}}))}};var D,O,j;i.parameters=p(s({},i.parameters),{docs:p(s({},(D=i.parameters)==null?void 0:D.docs),{source:s({originalSource:`{
  args: {
    value: 'last30days',
    onSelect: fn(),
    options: [{
      value: 'last24hours',
      label: 'Last 24 hours'
    }, {
      value: 'last7days',
      label: 'Last 7 days'
    }, {
      value: 'last30days',
      label: 'Last 30 days'
    }]
  },
  render: function Render(args) {
    const [{
      value
    }, updateArgs] = useArgs();
    return <Component {...args} value={value} onChange={value => {
      updateArgs({
        value
      });
    }} />;
  }
}`},(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source)})});const B=["DateRangeFilter"],$=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:i,__namedExportsOrder:B,default:M},Symbol.toStringTag,{value:"Module"}));export{i as D,$ as S};
