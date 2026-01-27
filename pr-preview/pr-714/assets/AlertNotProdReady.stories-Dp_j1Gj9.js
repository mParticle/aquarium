import{a3 as r,j as e,I as j,S as s,y as f,i as t}from"./iframe-B6Y2oegk.js";import{E as n}from"./ExampleStory-Dokjh494.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"Components/Not Prod Ready/Feedback/Alert",component:r,args:{action:void 0,banner:!1,closeIcon:void 0,description:void 0,icon:void 0,message:"This is a simple alert message",showIcon:!1,type:"info",onClose:o=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},a={},i={args:{type:"success"}},c={args:{type:"error"}},l={args:{banner:!0,type:"warning"}},p={args:{description:"Additional content of the alert."}},m={args:{action:e.jsx("a",{style:{paddingLeft:"8px"},children:"Click Me Link"})}},g={args:{closeIcon:e.jsx(j,{name:"mpLogo"})}},x={render:()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:e.jsx(e.Fragment,{children:"There are 4 types of Alert: success, info, warning, error."}),children:e.jsxs(s,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(r,{message:"Success Text",type:"success"}),e.jsx(r,{message:"Info Text",type:"info"}),e.jsx(r,{message:"Warning Text",type:"warning"}),e.jsx(r,{message:"Error Text",type:"error"})]})})})},d={render:()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:"With close button",children:e.jsxs(s,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(r,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:o=>{alert("closed")}}),e.jsx(r,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:o=>{alert("closed")}})]})})})},u={render:()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:"Display Alert as a banner at top of page",children:e.jsxs(s,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(r,{message:"Warning text",banner:!0}),e.jsx(r,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),e.jsx(r,{showIcon:!1,message:"Warning text without icon",banner:!0}),e.jsx(r,{type:"error",message:"Error text",banner:!0})]})})})},y={render:()=>{const[o,h]=f.useState(),S=()=>{const T=()=>{h(new Error("An Uncaught Error"))};if(o)throw o;return e.jsx(t,{danger:!0,onClick:T,children:"Click me to throw a error"})};return e.jsx(e.Fragment,{children:e.jsx(n,{title:"ErrorBoundary Component for making error handling easier",children:e.jsx(r.ErrorBoundary,{children:e.jsx(S,{})})})})}},E={render:()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:"Custom CTAs",children:e.jsxs(s,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(r,{message:"Success Tips",type:"success",showIcon:!0,closable:!0,action:e.jsx(t,{size:"small",type:"text",children:"UNDO"})}),e.jsx(r,{message:"Error Text",showIcon:!0,description:"Error Description Error Description Error Description Error Description",type:"error",action:e.jsx(t,{size:"small",danger:!0,children:"Detail"})}),e.jsx(r,{message:"Warning Text",type:"warning",closable:!0,action:e.jsx(s,{children:e.jsx(t,{type:"text",size:"small",ghost:!0,children:"Done"})})}),e.jsx(r,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info",closable:!0,action:e.jsxs(s,{orientation:"vertical",children:[e.jsx(t,{size:"small",type:"primary",children:"Accept"}),e.jsx(t,{size:"small",danger:!0,ghost:!0,children:"Decline"})]})})]})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    banner: true,
    type: 'warning'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Additional content of the alert.'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    action: <a style={{
      paddingLeft: '8px'
    }}>Click Me Link</a>
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    closeIcon: <Icon name="mpLogo" />
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ExampleStory title={<>There are 4 types of Alert: success, info, warning, error.</>}>
          <Space orientation="vertical" style={{
          width: '100%'
        }}>
            <Alert message="Success Text" type="success" />
            <Alert message="Info Text" type="info" />
            <Alert message="Warning Text" type="warning" />
            <Alert message="Error Text" type="error" />
          </Space>
        </ExampleStory>
      </>;
  }
}`,...x.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="With close button">
          <Space orientation="vertical" style={{
          width: '100%'
        }}>
            <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text" type="warning" closable onClose={e => {
            alert('closed');
          }} />
            <Alert message="Error Text" description="Error Description Error Description Error Description Error Description Error Description Error Description" type="error" closable onClose={e => {
            alert('closed');
          }} />
          </Space>
        </ExampleStory>
      </>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Display Alert as a banner at top of page">
          <Space orientation="vertical" style={{
          width: '100%'
        }}>
            <Alert message="Warning text" banner />
            <Alert message="Very long warning text warning text text text text text text text" banner closable />
            <Alert showIcon={false} message="Warning text without icon" banner />
            <Alert type="error" message="Error text" banner />
          </Space>
        </ExampleStory>
      </>;
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [error, setError] = useState<Error>();
    const ThrowError: React.FC = () => {
      const onClick = () => {
        setError(new Error('An Uncaught Error'));
      };
      if (error) {
        throw error;
      }
      return <Button danger onClick={onClick}>
          Click me to throw a error
        </Button>;
    };
    return <>
        <ExampleStory title="ErrorBoundary Component for making error handling easier">
          <Alert.ErrorBoundary>
            <ThrowError />
          </Alert.ErrorBoundary>
        </ExampleStory>
      </>;
  }
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Custom CTAs">
          <Space orientation="vertical" style={{
          width: '100%'
        }}>
            <Alert message="Success Tips" type="success" showIcon closable action={<Button size="small" type="text">
                  UNDO
                </Button>} />
            <Alert message="Error Text" showIcon description="Error Description Error Description Error Description Error Description" type="error" action={<Button size="small" danger>
                  Detail
                </Button>} />
            <Alert message="Warning Text" type="warning" closable action={<Space>
                  <Button type="text" size="small" ghost>
                    Done
                  </Button>
                </Space>} />
            <Alert message="Info Text" description="Info Description Info Description Info Description Info Description" type="info" closable action={<Space orientation="vertical">
                  <Button size="small" type="primary">
                    Accept
                  </Button>
                  <Button size="small" danger ghost>
                    Decline
                  </Button>
                </Space>} />
          </Space>
        </ExampleStory>
      </>;
  }
}`,...E.parameters?.docs?.source}}};const b=["Primary","Success","ErrorType","WarningBanner","Description","CustomAction","CustomCloseIcon","ExampleAllTypes","ExampleClosable","ExampleBanner","ExampleCatchError","ExampleCustomActions"];export{m as CustomAction,g as CustomCloseIcon,p as Description,c as ErrorType,x as ExampleAllTypes,u as ExampleBanner,y as ExampleCatchError,d as ExampleClosable,E as ExampleCustomActions,a as Primary,i as Success,l as WarningBanner,b as __namedExportsOrder,C as default};
