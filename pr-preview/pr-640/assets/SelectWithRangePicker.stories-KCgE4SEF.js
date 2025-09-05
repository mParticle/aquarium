var m=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(n,e,a)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,t=(n,e)=>{for(var a in e||(e={}))_.call(e,a)&&l(n,a,e[a]);if(o)for(var a of o(e))f.call(e,a)&&l(n,a,e[a]);return n},r=(n,e)=>v(n,y(e));import{j as S}from"./jsx-runtime-CVnACwZl.js";import{S as i}from"./SelectWithRangePicker-DCgTms8b.js";import{f as R}from"./index-BU0ZtLqn.js";const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:"Candidate Components/Directory/Date Range Filter",component:i},s={args:{value:"last30days",onSelect:R(),options:[{value:"last24hours",label:"Last 24 hours"},{value:"last7days",label:"Last 7 days"},{value:"last30days",label:"Last 30 days"}]},render:function(e){const[{value:a},p]=b();return S.jsx(i,r(t({},e),{value:a,onChange:g=>{p({value:g})}}))}};var u,d,c;s.parameters=r(t({},s.parameters),{docs:r(t({},(u=s.parameters)==null?void 0:u.docs),{source:t({originalSource:`{
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
}`},(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source)})});const L=["DateRangeFilter"],x=Object.freeze(Object.defineProperty({__proto__:null,DateRangeFilter:s,__namedExportsOrder:L,default:h},Symbol.toStringTag,{value:"Module"}));export{s as D,x as S};
