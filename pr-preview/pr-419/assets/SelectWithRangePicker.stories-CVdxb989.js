var A=Object.defineProperty,L=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(e,a,t)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&h(e,t,a[t]);if(u)for(var t of u(a))v.call(a,t)&&h(e,t,a[t]);return e},m=(e,a)=>L(e,b(a));var R=(e,a)=>{var t={};for(var n in e)f.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&u)for(var n of u(e))a.indexOf(n)<0&&v.call(e,n)&&(t[n]=e[n]);return t};import{j as r}from"./jsx-runtime-CS-_a2eV.js";import{r as x}from"./index-Ca44TZ0D.js";import{d as w}from"./dayjs.min-kn1EBQqj.js";import{av as F,D as E,F as I,N as q,o as V}from"./GlobalNavigation-Be6idjSk.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{f as N}from"./index-C7MMNn6a.js";const W={month:"short",day:"numeric",year:"numeric"},_=({start:e,end:a,formatOptions:t=W})=>r.jsx(r.Fragment,{children:new Intl.DateTimeFormat("en-US",s({},t)).formatRange(e,a)});_.__docgenInfo={description:"",methods:[],displayName:"DateRangeString",props:{start:{required:!0,tsType:{name:"Date"},description:""},end:{required:!0,tsType:{name:"Date"},description:""},formatOptions:{required:!1,tsType:{name:"Intl.DateTimeFormatOptions"},description:"",defaultValue:{value:`{
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}`,computed:!1}}}};const U=r.jsx(V.Text,{children:"Custom date range"}),c=z=>{var g=z,{value:e,rangePickerProps:a={},rangePickerLabel:t=U,formatOptions:n}=g,o=R(g,["value","rangePickerProps","rangePickerLabel","formatOptions"]);const[O,j]=x.useState(void 0);return r.jsx(F,s({value:e,open:O,labelRender:({label:p})=>Array.isArray(e)?r.jsx(_,{formatOptions:n,start:new Date(e[0]),end:new Date(e[1])}):p,dropdownStyle:{minWidth:300},dropdownRender:p=>r.jsxs(r.Fragment,{children:[p,r.jsx(E,{style:{margin:"8px 0"}}),r.jsx("div",{style:{padding:"0 16px 8px"},children:r.jsxs(I,{vertical:!0,gap:10,children:[t,r.jsx(q.RangePicker,s({value:x.useMemo(()=>Array.isArray(e)?e.map(w):void 0,[e]),onOpenChange:l=>{var d;(d=a==null?void 0:a.onOpenChange)==null||d.call(a,l),j(l?!0:void 0)},onChange:l=>{var y;const d=l?l.map(C=>C.toDate().toISOString()):null;(y=o.onChange)==null||y.call(o,d,void 0)}},a))]})})]})},o))};c.__docgenInfo={description:"",methods:[],displayName:"SelectWithRangePicker",props:{value:{required:!0,tsType:{name:"union",raw:"ValueType | [string, string] | null",elements:[{name:"ValueType"},{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},{name:"null"}]},description:""},rangePickerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"RangePickerProps"},{name:"union",raw:"'value' | 'onChange'",elements:[{name:"literal",value:"'value'"},{name:"literal",value:"'onChange'"}]}],raw:"Omit<RangePickerProps, 'value' | 'onChange'>"},description:"",defaultValue:{value:"{}",computed:!1}},rangePickerLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<Typography.Text>Custom date range</Typography.Text>",computed:!1}},formatOptions:{required:!1,tsType:{name:"IDateRangeStringProps['formatOptions']",raw:"IDateRangeStringProps['formatOptions']"},description:""}},composes:["Omit"]};const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:"Candidate Components/Directory/Date Range Filter",component:c},i={args:{value:"last30days",onSelect:N(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},render:function(a){const[{value:t},n]=M();return r.jsx(c,m(s({},a),{value:t,onChange:o=>{n({value:o})}}))}};var D,S,T;i.parameters=m(s({},i.parameters),{docs:m(s({},(D=i.parameters)==null?void 0:D.docs),{source:s({originalSource:`{
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
}`},(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source)})});const K=["DateRangeFilter"],$=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:i,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{i as D,$ as S};
