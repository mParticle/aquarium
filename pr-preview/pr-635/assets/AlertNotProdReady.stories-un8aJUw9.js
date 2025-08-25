var ie=Object.defineProperty,ce=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var w=(o,n,a)=>n in o?ie(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a,r=(o,n)=>{for(var a in n||(n={}))pe.call(n,a)&&w(o,a,n[a]);if(j)for(var a of j(n))me.call(n,a)&&w(o,a,n[a]);return o},t=(o,n)=>ce(o,le(n));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{J as s,I as de,b as c,g as i}from"./NavigationItemsService-Cip2Cm59.js";import{E as l}from"./ExampleStory-CG268t01.js";import"./_baseClone-DBzvlRjn.js";import{r as ge}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const Ce={title:"Components/Not Prod Ready/Feedback/Alert",component:s,args:{action:void 0,banner:!1,closeIcon:void 0,description:void 0,icon:void 0,message:"This is a simple alert message",showIcon:!1,type:"info",onClose:o=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},p={},m={args:{type:"success"}},d={args:{type:"error"}},g={args:{banner:!0,type:"warning"}},x={args:{description:"Additional content of the alert."}},u={args:{action:e.jsx("a",{style:{paddingLeft:"8px"},children:"Click Me Link"})}},y={args:{closeIcon:e.jsx(de,{name:"mpLogo"})}},E={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:e.jsx(e.Fragment,{children:"There are 4 types of Alert: success, info, warning, error."}),children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Success Text",type:"success"}),e.jsx(s,{message:"Info Text",type:"info"}),e.jsx(s,{message:"Warning Text",type:"warning"}),e.jsx(s,{message:"Error Text",type:"error"})]})})})},h={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"With close button",children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:o=>{alert("closed")}}),e.jsx(s,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:o=>{alert("closed")}})]})})})},T={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"Display Alert as a banner at top of page",children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Warning text",banner:!0}),e.jsx(s,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),e.jsx(s,{showIcon:!1,message:"Warning text without icon",banner:!0}),e.jsx(s,{type:"error",message:"Error text",banner:!0})]})})})},S={render:()=>{const[o,n]=ge.useState(),a=()=>{const ae=()=>{n(new Error("An Uncaught Error"))};if(o)throw o;return e.jsx(i,{danger:!0,onClick:ae,children:"Click me to throw a error"})};return e.jsx(e.Fragment,{children:e.jsx(l,{title:"ErrorBoundary Component for making error handling easier",children:e.jsx(s.ErrorBoundary,{children:e.jsx(a,{})})})})}},f={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"Custom CTAs",children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Success Tips",type:"success",showIcon:!0,closable:!0,action:e.jsx(i,{size:"small",type:"text",children:"UNDO"})}),e.jsx(s,{message:"Error Text",showIcon:!0,description:"Error Description Error Description Error Description Error Description",type:"error",action:e.jsx(i,{size:"small",danger:!0,children:"Detail"})}),e.jsx(s,{message:"Warning Text",type:"warning",closable:!0,action:e.jsx(c,{children:e.jsx(i,{type:"text",size:"small",ghost:!0,children:"Done"})})}),e.jsx(s,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info",closable:!0,action:e.jsxs(c,{direction:"vertical",children:[e.jsx(i,{size:"small",type:"primary",children:"Accept"}),e.jsx(i,{size:"small",danger:!0,ghost:!0,children:"Decline"})]})})]})})})};var D,A,C;p.parameters=t(r({},p.parameters),{docs:t(r({},(D=p.parameters)==null?void 0:D.docs),{source:r({originalSource:"{}"},(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source)})});var b,I,W;m.parameters=t(r({},m.parameters),{docs:t(r({},(b=m.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.source)})});var B,v,k;d.parameters=t(r({},d.parameters),{docs:t(r({},(B=d.parameters)==null?void 0:B.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source)})});var z,F,L;g.parameters=t(r({},g.parameters),{docs:t(r({},(z=g.parameters)==null?void 0:z.docs),{source:r({originalSource:`{
  args: {
    banner: true,
    type: 'warning'
  }
}`},(L=(F=g.parameters)==null?void 0:F.docs)==null?void 0:L.source)})});var O,U,N;x.parameters=t(r({},x.parameters),{docs:t(r({},(O=x.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    description: 'Additional content of the alert.'
  }
}`},(N=(U=x.parameters)==null?void 0:U.docs)==null?void 0:N.source)})});var P,R,M;u.parameters=t(r({},u.parameters),{docs:t(r({},(P=u.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    action: <a style={{
      paddingLeft: '8px'
    }}>Click Me Link</a>
  }
}`},(M=(R=u.parameters)==null?void 0:R.docs)==null?void 0:M.source)})});var V,_,J;y.parameters=t(r({},y.parameters),{docs:t(r({},(V=y.parameters)==null?void 0:V.docs),{source:r({originalSource:`{
  args: {
    closeIcon: <Icon name="mpLogo" />
  }
}`},(J=(_=y.parameters)==null?void 0:_.docs)==null?void 0:J.source)})});var q,G,H;E.parameters=t(r({},E.parameters),{docs:t(r({},(q=E.parameters)==null?void 0:q.docs),{source:r({originalSource:`{
  render: () => {
    return <>
        <ExampleStory title={<>There are 4 types of Alert: success, info, warning, error.</>}>
          <Space direction="vertical" style={{
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
}`},(H=(G=E.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var K,Q,X;h.parameters=t(r({},h.parameters),{docs:t(r({},(K=h.parameters)==null?void 0:K.docs),{source:r({originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="With close button">
          <Space direction="vertical" style={{
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
}`},(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Y,Z,$;T.parameters=t(r({},T.parameters),{docs:t(r({},(Y=T.parameters)==null?void 0:Y.docs),{source:r({originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Display Alert as a banner at top of page">
          <Space direction="vertical" style={{
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
}`},($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ee,re,te;S.parameters=t(r({},S.parameters),{docs:t(r({},(ee=S.parameters)==null?void 0:ee.docs),{source:r({originalSource:`{
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
}`},(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source)})});var se,oe,ne;f.parameters=t(r({},f.parameters),{docs:t(r({},(se=f.parameters)==null?void 0:se.docs),{source:r({originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Custom CTAs">
          <Space direction="vertical" style={{
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
            <Alert message="Info Text" description="Info Description Info Description Info Description Info Description" type="info" closable action={<Space direction="vertical">
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
}`},(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source)})});const be=["Primary","Success","ErrorType","WarningBanner","Description","CustomAction","CustomCloseIcon","ExampleAllTypes","ExampleClosable","ExampleBanner","ExampleCatchError","ExampleCustomActions"];export{u as CustomAction,y as CustomCloseIcon,x as Description,d as ErrorType,E as ExampleAllTypes,T as ExampleBanner,S as ExampleCatchError,h as ExampleClosable,f as ExampleCustomActions,p as Primary,m as Success,g as WarningBanner,be as __namedExportsOrder,Ce as default};
