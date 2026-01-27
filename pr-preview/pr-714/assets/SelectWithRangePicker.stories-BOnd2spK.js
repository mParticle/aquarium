import{j as l}from"./iframe-_QPLlW2H.js";import{S as a}from"./SelectWithRangePicker-BzNzP9bP.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,d={title:"Candidate Components/Directory/Date Range Filter",component:a},e={args:{value:"last30days",onSelect:o(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},render:function(n){const[{value:t},s]=u();return l.jsx(a,{...n,value:t,onChange:r=>{s({value:r})}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const c=["DateRangeFilter"],_=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:e,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{e as D,_ as S};
