var w=Object.defineProperty,A=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(e,a,n)=>a in e?w(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,s=(e,a)=>{for(var n in a||(a={}))v.call(a,n)&&f(e,n,a[n]);if(u)for(var n of u(a))R.call(a,n)&&f(e,n,a[n]);return e},m=(e,a)=>A(e,L(a));var x=(e,a)=>{var n={};for(var t in e)v.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&u)for(var t of u(e))a.indexOf(t)<0&&R.call(e,t)&&(n[t]=e[t]);return n};import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{r as D}from"./index-CNk6hRaE.js";import{d as b}from"./dayjs.min-KGLNs1IR.js";import{aw as F,D as E,F as I,x as q,H as V}from"./GlobalNavigation-Dgmk9uab.js";import"./_baseClone-u1J3oOXU.js";import{f as W}from"./index-C7MMNn6a.js";const N={month:"short",day:"numeric",year:"numeric"},O=({start:e,end:a,formatOptions:n=N})=>r.jsx(r.Fragment,{children:new Intl.DateTimeFormat("en-US",s({},n)).formatRange(e,a)});O.__docgenInfo={description:"",methods:[],displayName:"DateRangeString",props:{start:{required:!0,tsType:{name:"Date"},description:""},end:{required:!0,tsType:{name:"Date"},description:""},formatOptions:{required:!1,tsType:{name:"Intl.DateTimeFormatOptions"},description:"",defaultValue:{value:`{
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}`,computed:!1}}}};const U=r.jsx(V.Text,{children:"Custom date range"}),g=z=>{var y=z,{value:e,rangePickerProps:a={},rangePickerLabel:n=U,formatOptions:t}=y,o=x(y,["value","rangePickerProps","rangePickerLabel","formatOptions"]);const[j,C]=D.useState(void 0);return r.jsx(F,s({value:e,open:j,labelRender:({label:p})=>Array.isArray(e)?r.jsx(O,{formatOptions:t,start:new Date(e[0]),end:new Date(e[1])}):p,dropdownStyle:{minWidth:300},dropdownRender:p=>r.jsxs(r.Fragment,{children:[p,r.jsx(E,{style:{margin:"8px 0"}}),r.jsx("div",{style:{padding:"0 16px 8px"},children:r.jsxs(I,{vertical:!0,gap:10,children:[n,r.jsx(q.RangePicker,s({value:D.useMemo(()=>Array.isArray(e)?e.map(b):void 0,[e]),onOpenChange:l=>{var d;(d=a==null?void 0:a.onOpenChange)==null||d.call(a,l),C(l?!0:void 0)},onChange:l=>{var h;const d=l?l.map(c=>c==null?void 0:c.toDate().toISOString()):null;(h=o.onChange)==null||h.call(o,d,void 0)}},a))]})})]})},o))};g.__docgenInfo={description:"",methods:[],displayName:"SelectWithRangePicker",props:{value:{required:!0,tsType:{name:"union",raw:"ValueType | [string, string] | null",elements:[{name:"ValueType"},{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},{name:"null"}]},description:""},rangePickerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"RangePickerProps"},{name:"union",raw:"'value' | 'onChange'",elements:[{name:"literal",value:"'value'"},{name:"literal",value:"'onChange'"}]}],raw:"Omit<RangePickerProps, 'value' | 'onChange'>"},description:"",defaultValue:{value:"{}",computed:!1}},rangePickerLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<Typography.Text>Custom date range</Typography.Text>",computed:!1}},formatOptions:{required:!1,tsType:{name:"IDateRangeStringProps['formatOptions']",raw:"IDateRangeStringProps['formatOptions']"},description:""}},composes:["Omit"]};const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:"Candidate Components/Directory/Date Range Filter",component:g},i={args:{value:"last30days",onSelect:W(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},render:function(a){const[{value:n},t]=M();return r.jsx(g,m(s({},a),{value:n,onChange:o=>{t({value:o})}}))}};var S,T,_;i.parameters=m(s({},i.parameters),{docs:m(s({},(S=i.parameters)==null?void 0:S.docs),{source:s({originalSource:`{
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
}`},(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source)})});const K=["DateRangeFilter"],Z=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:i,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{i as D,Z as S};
