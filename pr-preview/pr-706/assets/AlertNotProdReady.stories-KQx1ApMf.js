var ie=Object.defineProperty,ce=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var w=(s,n,a)=>n in s?ie(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a,r=(s,n)=>{for(var a in n||(n={}))pe.call(n,a)&&w(s,a,n[a]);if(j)for(var a of j(n))me.call(n,a)&&w(s,a,n[a]);return s},t=(s,n)=>ce(s,le(n));import{j as e}from"./jsx-runtime-GRP_BLAX.js";import{J as o,I as ge,a as c,e as i}from"./NavigationItemsService-bN03Ttq5.js";import{E as l}from"./ExampleStory-BDhlP4za.js";import"./ErrorStateIcon-BDqumtIe.js";import"./SuccessStateIcon-CaXEMaF4.js";import"./WarningStateIcon-Z0wE8OWa.js";import"./_baseClone-BJQa_8Hx.js";import{r as xe}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-M_82l6gX.js";import"./Context-BUSkoOJ1.js";import"./useToken-ZHvy9ttm.js";import"./presets-vy2ytAcW.js";import"./index-DN1Ck1Y5.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Bm4W6gxM.js";import"./style-C9UL_bK6.js";import"./client-CgpM46-k.js";import"./WarningFilled-KKNPfhjt.js";const Fe={title:"Components/Not Prod Ready/Feedback/Alert",component:o,args:{action:void 0,banner:!1,closeIcon:void 0,description:void 0,icon:void 0,message:"This is a simple alert message",showIcon:!1,type:"info",onClose:s=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},p={},m={args:{type:"success"}},g={args:{type:"error"}},x={args:{banner:!0,type:"warning"}},d={args:{description:"Additional content of the alert."}},u={args:{action:e.jsx("a",{style:{paddingLeft:"8px"},children:"Click Me Link"})}},y={args:{closeIcon:e.jsx(ge,{name:"mpLogo"})}},E={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:e.jsx(e.Fragment,{children:"There are 4 types of Alert: success, info, warning, error."}),children:e.jsxs(c,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(o,{message:"Success Text",type:"success"}),e.jsx(o,{message:"Info Text",type:"info"}),e.jsx(o,{message:"Warning Text",type:"warning"}),e.jsx(o,{message:"Error Text",type:"error"})]})})})},h={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"With close button",children:e.jsxs(c,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(o,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:s=>{alert("closed")}}),e.jsx(o,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:s=>{alert("closed")}})]})})})},T={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"Display Alert as a banner at top of page",children:e.jsxs(c,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(o,{message:"Warning text",banner:!0}),e.jsx(o,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),e.jsx(o,{showIcon:!1,message:"Warning text without icon",banner:!0}),e.jsx(o,{type:"error",message:"Error text",banner:!0})]})})})},S={render:()=>{const[s,n]=xe.useState(),a=()=>{const ae=()=>{n(new Error("An Uncaught Error"))};if(s)throw s;return e.jsx(i,{danger:!0,onClick:ae,children:"Click me to throw a error"})};return e.jsx(e.Fragment,{children:e.jsx(l,{title:"ErrorBoundary Component for making error handling easier",children:e.jsx(o.ErrorBoundary,{children:e.jsx(a,{})})})})}},f={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"Custom CTAs",children:e.jsxs(c,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(o,{message:"Success Tips",type:"success",showIcon:!0,closable:!0,action:e.jsx(i,{size:"small",type:"text",children:"UNDO"})}),e.jsx(o,{message:"Error Text",showIcon:!0,description:"Error Description Error Description Error Description Error Description",type:"error",action:e.jsx(i,{size:"small",danger:!0,children:"Detail"})}),e.jsx(o,{message:"Warning Text",type:"warning",closable:!0,action:e.jsx(c,{children:e.jsx(i,{type:"text",size:"small",ghost:!0,children:"Done"})})}),e.jsx(o,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info",closable:!0,action:e.jsxs(c,{orientation:"vertical",children:[e.jsx(i,{size:"small",type:"primary",children:"Accept"}),e.jsx(i,{size:"small",danger:!0,ghost:!0,children:"Decline"})]})})]})})})};var D,A,C;p.parameters=t(r({},p.parameters),{docs:t(r({},(D=p.parameters)==null?void 0:D.docs),{source:r({originalSource:"{}"},(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source)})});var b,I,W;m.parameters=t(r({},m.parameters),{docs:t(r({},(b=m.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.source)})});var B,v,k;g.parameters=t(r({},g.parameters),{docs:t(r({},(B=g.parameters)==null?void 0:B.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(k=(v=g.parameters)==null?void 0:v.docs)==null?void 0:k.source)})});var z,F,L;x.parameters=t(r({},x.parameters),{docs:t(r({},(z=x.parameters)==null?void 0:z.docs),{source:r({originalSource:`{
  args: {
    banner: true,
    type: 'warning'
  }
}`},(L=(F=x.parameters)==null?void 0:F.docs)==null?void 0:L.source)})});var O,U,N;d.parameters=t(r({},d.parameters),{docs:t(r({},(O=d.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    description: 'Additional content of the alert.'
  }
}`},(N=(U=d.parameters)==null?void 0:U.docs)==null?void 0:N.source)})});var P,R,M;u.parameters=t(r({},u.parameters),{docs:t(r({},(P=u.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
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
}`},(H=(G=E.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var K,Q,X;h.parameters=t(r({},h.parameters),{docs:t(r({},(K=h.parameters)==null?void 0:K.docs),{source:r({originalSource:`{
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
}`},(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Y,Z,$;T.parameters=t(r({},T.parameters),{docs:t(r({},(Y=T.parameters)==null?void 0:Y.docs),{source:r({originalSource:`{
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
}`},(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source)})});var oe,se,ne;f.parameters=t(r({},f.parameters),{docs:t(r({},(oe=f.parameters)==null?void 0:oe.docs),{source:r({originalSource:`{
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
}`},(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source)})});const Le=["Primary","Success","ErrorType","WarningBanner","Description","CustomAction","CustomCloseIcon","ExampleAllTypes","ExampleClosable","ExampleBanner","ExampleCatchError","ExampleCustomActions"];export{u as CustomAction,y as CustomCloseIcon,d as Description,g as ErrorType,E as ExampleAllTypes,T as ExampleBanner,S as ExampleCatchError,h as ExampleClosable,f as ExampleCustomActions,p as Primary,m as Success,x as WarningBanner,Le as __namedExportsOrder,Fe as default};
