import{j as a,G as c,U as h,o as f,v,F as x,O as R,T as S}from"./iframe-DcPIhfmk.js";const O={month:"short",day:"numeric",year:"numeric"},u=({start:e,end:t,formatOptions:n=O})=>a.jsx(a.Fragment,{children:new Intl.DateTimeFormat("en-US",{...n}).formatRange(e,t)});try{u.displayName="DateRangeString",u.__docgenInfo={description:"",displayName:"DateRangeString",props:{start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Date"}},end:{defaultValue:null,description:"",name:"end",required:!0,type:{name:"Date"}},formatOptions:{defaultValue:{value:`{
  month: 'short',
  day: 'numeric',
  year: 'numeric',
} as const`},description:"",name:"formatOptions",required:!1,type:{name:"DateTimeFormatOptions"}}}}}catch{}const D=a.jsx(S.Text,{children:"Custom date range"}),l=({value:e,rangePickerProps:t={},rangePickerLabel:n=D,formatOptions:i,...o})=>{const[p,m]=c.useState(void 0),g=c.useMemo(()=>Array.isArray(e)?e.map(h):void 0,[e]);return a.jsx(f,{value:e,open:p,labelRender:({label:d})=>Array.isArray(e)?a.jsx(u,{formatOptions:i,start:new Date(e[0]),end:new Date(e[1])}):d,dropdownStyle:{minWidth:300},dropdownRender:d=>a.jsxs(a.Fragment,{children:[d,a.jsx(v,{style:{margin:"8px 0"}}),a.jsx("div",{style:{padding:"0 16px 8px"},children:a.jsxs(x,{vertical:!0,gap:10,children:[n,a.jsx(R.RangePicker,{value:g,onOpenChange:r=>{t?.onOpenChange?.(r),m(r?!0:void 0)},onChange:r=>{const y=r?r.map(_=>_?.toDate().toISOString()):null;o.onChange?.(y,void 0)},...t})]})})]}),...o})};try{l.displayName="SelectWithRangePicker",l.__docgenInfo={description:"",displayName:"SelectWithRangePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectWithRangePickerValue<ValueType>"}},rangePickerProps:{defaultValue:{value:"{}"},description:"",name:"rangePickerProps",required:!1,type:{name:'Omit<IRangePickerProps, "onChange" | "value">'}},rangePickerLabel:{defaultValue:{value:"<Typography.Text>Custom date range</Typography.Text>"},description:"",name:"rangePickerLabel",required:!1,type:{name:"ReactNode"}},formatOptions:{defaultValue:null,description:"",name:"formatOptions",required:!1,type:{name:"DateTimeFormatOptions"}}}}}catch{}const{fn:P}=__STORYBOOK_MODULE_TEST__,{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"UX Patterns/Data Exploration/Date Range Filter",component:l},s={args:{value:"last30days",onSelect:P(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},render:function(t){const[{value:n},i]=T();return a.jsx(l,{...t,value:n,onChange:o=>{i({value:o})}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["DateRangeFilter"],b=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:s,__namedExportsOrder:L,default:j},Symbol.toStringTag,{value:"Module"}));export{s as D,b as S};
