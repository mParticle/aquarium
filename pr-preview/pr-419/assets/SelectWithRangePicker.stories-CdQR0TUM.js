var b=Object.defineProperty,j=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var v=(e,a,n)=>a in e?b(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,o=(e,a)=>{for(var n in a||(a={}))h.call(a,n)&&v(e,n,a[n]);if(d)for(var n of d(a))f.call(a,n)&&v(e,n,a[n]);return e},p=(e,a)=>j(e,F(a));var R=(e,a)=>{var n={};for(var t in e)h.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&d)for(var t of d(e))a.indexOf(t)<0&&f.call(e,t)&&(n[t]=e[t]);return n};import{j as s}from"./jsx-runtime-CS-_a2eV.js";import{r as x}from"./index-Ca44TZ0D.js";import{d as A}from"./dayjs.min-kn1EBQqj.js";import{av as w,D as E,F as I,N as q,o as V}from"./GlobalNavigation-5Ze4QgXZ.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{f as N}from"./index-C7MMNn6a.js";const W={month:"short",day:"numeric",year:"numeric"},T=({start:e,end:a,formatOptions:n=W})=>s.jsx(s.Fragment,{children:new Intl.DateTimeFormat("en-US",o({},n)).formatRange(e,a)});T.__docgenInfo={description:"",methods:[],displayName:"DateRangeString",props:{start:{required:!0,tsType:{name:"Date"},description:""},end:{required:!0,tsType:{name:"Date"},description:""},formatOptions:{required:!1,tsType:{name:"Intl.DateTimeFormatOptions"},description:"",defaultValue:{value:`{
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}`,computed:!1}}}};const U=s.jsx(V.Text,{children:"Custom date range"}),c=z=>{var g=z,{value:e,rangePickerProps:a={},rangePickerLabel:n=U,formatOptions:t}=g,r=R(g,["value","rangePickerProps","rangePickerLabel","formatOptions"]);const[_,L]=x.useState(void 0);return s.jsx(w,o({value:e,open:_,labelRender:({label:m})=>Array.isArray(e)?s.jsx(T,{formatOptions:t,start:new Date(e[0]),end:new Date(e[1])}):m,dropdownStyle:{minWidth:300},dropdownRender:m=>s.jsxs(s.Fragment,{children:[m,s.jsx(E,{style:{margin:"8px 0"}}),s.jsx("div",{style:{padding:"0 16px 8px"},children:s.jsxs(I,{vertical:!0,gap:10,children:[n,s.jsx(q.RangePicker,o({value:x.useMemo(()=>Array.isArray(e)?e.map(A):void 0,[e]),onOpenChange:l=>{var u;(u=a==null?void 0:a.onOpenChange)==null||u.call(a,l),L(l?!0:void 0)},onChange:l=>{var y;const u=l?l.map(O=>O.toDate().toISOString()):null;(y=r.onChange)==null||y.call(r,u,void 0)}},a))]})})]})},r))};c.__docgenInfo={description:"",methods:[],displayName:"SelectWithRangePicker",props:{value:{required:!0,tsType:{name:"union",raw:"ValueType | [string, string] | null",elements:[{name:"ValueType"},{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},{name:"null"}]},description:""},rangePickerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"RangePickerProps"},{name:"union",raw:"'value' | 'onChange'",elements:[{name:"literal",value:"'value'"},{name:"literal",value:"'onChange'"}]}],raw:"Omit<RangePickerProps, 'value' | 'onChange'>"},description:"",defaultValue:{value:"{}",computed:!1}},rangePickerLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<Typography.Text>Custom date range</Typography.Text>",computed:!1}},formatOptions:{required:!1,tsType:{name:"IDateRangeStringProps['formatOptions']",raw:"IDateRangeStringProps['formatOptions']"},description:""}},composes:["Omit"]};const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:"Candidate Components/Directory/Date Range Filter",component:c},i={args:{value:"last30days",onSelect:N(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},parameters:{docs:{source:{code:`
<DateRangeFilter
  onChange={(value, option) => {
    console.log('onChange:', value, option);
  }}
  onSelect={(value, option) => {
    console.log('onChange:', value, option);
  }}
  options={[
    {
      label: 'Last 24 hours',
      value: 'last24hours'
    },
    {
      label: 'Last 7 days',
      value: 'last7days'
    },
    {
      label: 'Last 30 days',
      value: 'last30days'
    }
  ]}
  value="last30days"
/>
        `}}},render:function(a){const[{value:n},t]=M();return s.jsx(c,p(o({},a),{value:n,onChange:r=>{t({value:r})}}))}};var D,S,C;i.parameters=p(o({},i.parameters),{docs:p(o({},(D=i.parameters)==null?void 0:D.docs),{source:o({originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`
<DateRangeFilter
  onChange={(value, option) => {
    console.log('onChange:', value, option);
  }}
  onSelect={(value, option) => {
    console.log('onChange:', value, option);
  }}
  options={[
    {
      label: 'Last 24 hours',
      value: 'last24hours'
    },
    {
      label: 'Last 7 days',
      value: 'last7days'
    },
    {
      label: 'Last 30 days',
      value: 'last30days'
    }
  ]}
  value="last30days"
/>
        \`
      }
    }
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
}`},(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source)})});const K=["DateRangeFilter"],$=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:i,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{i as D,$ as S};
