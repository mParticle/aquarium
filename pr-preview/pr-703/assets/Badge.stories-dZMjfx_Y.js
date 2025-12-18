var C=Object.defineProperty,P=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var d=(s,e,r)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,a=(s,e)=>{for(var r in e||(e={}))w.call(e,r)&&d(s,r,e[r]);if(i)for(var r of i(e))E.call(e,r)&&d(s,r,e[r]);return s},o=(s,e)=>P(s,f(e));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{B as c,a as y}from"./NavigationItemsService-CFWEcOeJ.js";import"./ErrorStateIcon-BZuHZKQ5.js";import"./SuccessStateIcon-CM5YtZ-L.js";import"./WarningStateIcon-Denvgr9_.js";import"./_baseClone-DwBCp-Ss.js";import{i as W,j as h,h as z,C as _,k as D}from"./style-5DCMTQ32.js";const T={title:"Components/Data Display/Badge",component:c},l={render:()=>{const s=[{label:"Primary",value:W},{label:"Success",value:h},{label:"Warning",value:z},{label:"Error",value:_},{label:"Paused",value:D}];return t.jsx(y,{wrap:!0,size:"large",children:s.map(({label:e,value:r})=>t.jsx(c,{dot:!0,color:r,title:e},e))})}},n={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>t.jsxs(y,{direction:"horizontal",wrap:!0,size:"large",children:[t.jsx(c,{status:"success",text:"Success"}),t.jsx(c,{status:"error",text:"Error"}),t.jsx(c,{status:"default",text:"Paused"}),t.jsx(c,{status:"processing",text:"Processing"}),t.jsx(c,{status:"warning",text:"Warning"})]})},u={args:{dot:!0,status:"success",text:"Active"}};var p,g,m;l.parameters=o(a({},l.parameters),{docs:o(a({},(p=l.parameters)==null?void 0:p.docs),{source:a({originalSource:`{
  render: () => {
    const colors = [{
      label: 'Primary',
      value: ColorPrimary
    }, {
      label: 'Success',
      value: ColorSuccess
    }, {
      label: 'Warning',
      value: ColorWarning
    }, {
      label: 'Error',
      value: ColorError
    }, {
      label: 'Paused',
      value: ColorBorderSecondary
    }] as const;
    return <Space wrap size="large">
        {colors.map(({
        label,
        value
      }) => <Badge dot key={label} color={value} title={label} />)}
      </Space>;
  }
}`},(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source)})});var x,S,B;n.parameters=o(a({},n.parameters),{docs:o(a({},(x=n.parameters)==null?void 0:x.docs),{source:a({originalSource:`{
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <Space direction="horizontal" wrap size="large">
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Paused" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>;
  }
}`},(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source)})});var b,v,j;u.parameters=o(a({},u.parameters),{docs:o(a({},(b=u.parameters)==null?void 0:b.docs),{source:a({originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`},(j=(v=u.parameters)==null?void 0:v.docs)==null?void 0:j.source)})});const O=["DotBadge","StatusBadge","WithText"],I=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:l,StatusBadge:n,WithText:u,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{I as B,l as D,n as S};
