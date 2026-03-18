var O=Object.defineProperty,k=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(n,a,l)=>a in n?O(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l,s=(n,a)=>{for(var l in a||(a={}))G.call(a,l)&&f(n,l,a[l]);if(m)for(var l of m(a))R.call(a,l)&&f(n,l,a[l]);return n},r=(n,a)=>k(n,L(a));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{B as t,a as o}from"./UnauthorizedTooltip-CEYl6V1S.js";import"./ErrorStateIcon-CMdTSnhI.js";import"./SuccessStateIcon-BRWE1o3k.js";import"./WarningStateIcon-CCPM9hWQ.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{G as H,I as J,h as K,C as N,am as Q}from"./style-DXf4Rsq5.js";const U={title:"Components/Data Display/Badge",component:t},i={args:{status:"success",text:"Active",dot:!1,variant:"default",shape:"pill",size:"md"},argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]},dot:{control:"select",options:[!1,!0]},variant:{control:"select",options:["default","filled"]},shape:{control:"select",options:["pill","square"]},size:{control:"select",options:["sm","md","lg"]}},parameters:{controls:{exclude:/^(?!status|text|dot|variant|shape|size)/}}},c={render:()=>{const n=[{label:"Primary",value:H},{label:"Success",value:J},{label:"Warning",value:K},{label:"Error",value:N},{label:"Paused",value:Q}];return e.jsx(o,{wrap:!0,size:"large",children:n.map(({label:a,value:l})=>e.jsx(t,{dot:!0,color:l,title:a},a))})}},u={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>e.jsxs(o,{direction:"horizontal",wrap:!0,size:"large",children:[e.jsx(t,{status:"success",text:"Success"}),e.jsx(t,{status:"error",text:"Error"}),e.jsx(t,{status:"default",text:"Paused"}),e.jsx(t,{status:"processing",text:"Processing"}),e.jsx(t,{status:"warning",text:"Warning"})]})},d={args:{dot:!0,status:"success",text:"Active"}},p={render:()=>e.jsxs(o,{wrap:!0,size:"middle",children:[e.jsx(t,{status:"success",text:"Success",variant:"filled"}),e.jsx(t,{status:"error",text:"Error",variant:"filled"}),e.jsx(t,{status:"default",text:"Paused",variant:"filled"}),e.jsx(t,{status:"processing",text:"Processing",variant:"filled"}),e.jsx(t,{status:"warning",text:"Warning",variant:"filled"})]})},g={render:()=>e.jsxs(o,{wrap:!0,size:"middle",children:[e.jsx(t,{status:"success",text:"Success",variant:"filled",shape:"square"}),e.jsx(t,{status:"error",text:"Error",variant:"filled",shape:"square"}),e.jsx(t,{status:"default",text:"Paused",variant:"filled",shape:"square"}),e.jsx(t,{status:"processing",text:"Processing",variant:"filled",shape:"square"}),e.jsx(t,{status:"warning",text:"Warning",variant:"filled",shape:"square"})]})},x={render:()=>{const n=[{label:"Success",status:"success"},{label:"Error",status:"error"},{label:"Warning",status:"warning"},{label:"Processing",status:"processing"},{label:"Paused",status:"default"}];return e.jsx(o,{direction:"vertical",size:"large",children:n.map(({status:a})=>e.jsxs(o,{wrap:!0,size:"middle",align:"start",children:[e.jsx(t,{status:a,text:"Small",variant:"filled",size:"sm"}),e.jsx(t,{status:a,text:"Medium",variant:"filled",size:"md"}),e.jsx(t,{status:a,text:"Large",variant:"filled",size:"lg"})]},a))})}};var v,S,B;i.parameters=r(s({},i.parameters),{docs:r(s({},(v=i.parameters)==null?void 0:v.docs),{source:s({originalSource:`{
  args: {
    status: 'success',
    text: 'Active',
    dot: false,
    variant: 'default',
    shape: 'pill',
    size: 'md'
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    },
    dot: {
      control: 'select',
      options: [false, true]
    },
    variant: {
      control: 'select',
      options: ['default', 'filled']
    },
    shape: {
      control: 'select',
      options: ['pill', 'square']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  parameters: {
    controls: {
      exclude: /^(?!status|text|dot|variant|shape|size)/
    }
  }
}`},(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source)})});var j,z,b;c.parameters=r(s({},c.parameters),{docs:r(s({},(j=c.parameters)==null?void 0:j.docs),{source:s({originalSource:`{
  render: () => {
    const colors = [{
      label: 'Primary',
      value: ColorInfo
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
}`},(b=(z=c.parameters)==null?void 0:z.docs)==null?void 0:b.source)})});var h,P,w;u.parameters=r(s({},u.parameters),{docs:r(s({},(h=u.parameters)==null?void 0:h.docs),{source:s({originalSource:`{
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
}`},(w=(P=u.parameters)==null?void 0:P.docs)==null?void 0:w.source)})});var y,q,E;d.parameters=r(s({},d.parameters),{docs:r(s({},(y=d.parameters)==null?void 0:y.docs),{source:s({originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`},(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source)})});var W,C,F;p.parameters=r(s({},p.parameters),{docs:r(s({},(W=p.parameters)==null?void 0:W.docs),{source:s({originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" />
        <Badge status="error" text="Error" variant="filled" />
        <Badge status="default" text="Paused" variant="filled" />
        <Badge status="processing" text="Processing" variant="filled" />
        <Badge status="warning" text="Warning" variant="filled" />
      </Space>;
  }
}`},(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source)})});var T,_,A;g.parameters=r(s({},g.parameters),{docs:r(s({},(T=g.parameters)==null?void 0:T.docs),{source:s({originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" shape="square" />
        <Badge status="error" text="Error" variant="filled" shape="square" />
        <Badge status="default" text="Paused" variant="filled" shape="square" />
        <Badge status="processing" text="Processing" variant="filled" shape="square" />
        <Badge status="warning" text="Warning" variant="filled" shape="square" />
      </Space>;
  }
}`},(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source)})});var D,I,M;x.parameters=r(s({},x.parameters),{docs:r(s({},(D=x.parameters)==null?void 0:D.docs),{source:s({originalSource:`{
  render: () => {
    const statuses: Array<{
      label: string;
      status: 'success' | 'error' | 'warning' | 'processing' | 'default';
    }> = [{
      label: 'Success',
      status: 'success'
    }, {
      label: 'Error',
      status: 'error'
    }, {
      label: 'Warning',
      status: 'warning'
    }, {
      label: 'Processing',
      status: 'processing'
    }, {
      label: 'Paused',
      status: 'default'
    }];
    return <Space direction="vertical" size="large">
        {statuses.map(({
        status
      }) => <Space key={status} wrap size="middle" align="start">
            <Badge status={status} text="Small" variant="filled" size="sm" />
            <Badge status={status} text="Medium" variant="filled" size="md" />
            <Badge status={status} text="Large" variant="filled" size="lg" />
          </Space>)}
      </Space>;
  }
}`},(M=(I=x.parameters)==null?void 0:I.docs)==null?void 0:M.source)})});const V=["Playground","DotBadge","StatusBadge","WithText","FilledPill","FilledSquare","FilledSizes"],ne=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:c,FilledPill:p,FilledSizes:x,FilledSquare:g,Playground:i,StatusBadge:u,WithText:d,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{ne as B,c as D,p as F,i as P,u as S,g as a,x as b};
