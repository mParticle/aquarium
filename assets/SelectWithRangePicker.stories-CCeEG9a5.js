import{j as l}from"./iframe-ZTMJOsly.js";import{S as a}from"./SelectWithRangePicker-DM6yYSLh.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,c={title:"UX Patterns/Date Range Filter",component:a},e={args:{value:"last30days",onSelect:o(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},render:function(n){const[{value:s},t]=u();return l.jsx(a,{...n,value:s,onChange:r=>{t({value:r})}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const d=["DateRangeFilter"],p=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{e as D,p as S};
