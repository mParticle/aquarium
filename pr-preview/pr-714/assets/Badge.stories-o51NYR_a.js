import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as s,a as r}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{l as g,m as p,h as x,C as m,n as S}from"./style-BLGxefMg.js";const f={title:"Components/Data Display/Badge",component:s},t={render:()=>{const c=[{label:"Primary",value:g},{label:"Success",value:p},{label:"Warning",value:x},{label:"Error",value:m},{label:"Paused",value:S}];return e.jsx(r,{wrap:!0,size:"large",children:c.map(({label:a,value:d})=>e.jsx(s,{dot:!0,color:d,title:a},a))})}},l={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>e.jsxs(r,{direction:"horizontal",wrap:!0,size:"large",children:[e.jsx(s,{status:"success",text:"Success"}),e.jsx(s,{status:"error",text:"Error"}),e.jsx(s,{status:"default",text:"Paused"}),e.jsx(s,{status:"processing",text:"Processing"}),e.jsx(s,{status:"warning",text:"Warning"})]})},n={args:{dot:!0,status:"success",text:"Active"}},i={render:()=>e.jsxs(r,{wrap:!0,size:"middle",children:[e.jsx(s,{status:"success",text:"Success",variant:"filled"}),e.jsx(s,{status:"error",text:"Error",variant:"filled"}),e.jsx(s,{status:"default",text:"Paused",variant:"filled"}),e.jsx(s,{status:"processing",text:"Processing",variant:"filled"}),e.jsx(s,{status:"warning",text:"Warning",variant:"filled"})]})},o={render:()=>e.jsxs(r,{wrap:!0,size:"middle",children:[e.jsx(s,{status:"success",text:"Success",variant:"filled",shape:"square"}),e.jsx(s,{status:"error",text:"Error",variant:"filled",shape:"square"}),e.jsx(s,{status:"default",text:"Paused",variant:"filled",shape:"square"}),e.jsx(s,{status:"processing",text:"Processing",variant:"filled",shape:"square"}),e.jsx(s,{status:"warning",text:"Warning",variant:"filled",shape:"square"})]})},u={render:()=>{const c=[{label:"Success",status:"success"},{label:"Error",status:"error"},{label:"Warning",status:"warning"},{label:"Processing",status:"processing"},{label:"Paused",status:"default"}];return e.jsx(r,{direction:"vertical",size:"large",children:c.map(({status:a})=>e.jsxs(r,{wrap:!0,size:"middle",align:"start",children:[e.jsx(s,{status:a,text:"Small",variant:"filled",size:"sm"}),e.jsx(s,{status:a,text:"Medium",variant:"filled",size:"md"}),e.jsx(s,{status:a,text:"Large",variant:"filled",size:"lg"})]},a))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" />
        <Badge status="error" text="Error" variant="filled" />
        <Badge status="default" text="Paused" variant="filled" />
        <Badge status="processing" text="Processing" variant="filled" />
        <Badge status="warning" text="Warning" variant="filled" />
      </Space>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" shape="square" />
        <Badge status="error" text="Error" variant="filled" shape="square" />
        <Badge status="default" text="Paused" variant="filled" shape="square" />
        <Badge status="processing" text="Processing" variant="filled" shape="square" />
        <Badge status="warning" text="Warning" variant="filled" shape="square" />
      </Space>;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const v=["DotBadge","StatusBadge","WithText","FilledPill","FilledSquare","FilledSizes"],w=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:t,FilledPill:i,FilledSizes:u,FilledSquare:o,StatusBadge:l,WithText:n,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{w as B,t as D,i as F,l as S,o as a,u as b};
