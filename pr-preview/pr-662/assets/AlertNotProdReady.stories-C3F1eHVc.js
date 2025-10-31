var me=Object.defineProperty,de=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var D=(o,n,a)=>n in o?me(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a,r=(o,n)=>{for(var a in n||(n={}))ge.call(n,a)&&D(o,a,n[a]);if(T)for(var a of T(n))ue.call(n,a)&&D(o,a,n[a]);return o},t=(o,n)=>de(o,xe(n));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{y as s,I as ye,a as c,e as i}from"./NavigationItemsService-CRMqocmq.js";import{E as l}from"./ExampleStory-CXbehpFY.js";import"./ErrorStateIcon-BBoO78hs.js";import"./SuccessStateIcon-C8RE7J_X.js";import"./WarningStateIcon-vZLtU8Sc.js";import"./_baseClone-CXAe4HsA.js";import{r as he}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Dzuf-ABm.js";import"./style-CBoRwgp9.js";import"./WarningFilled-BnDVOXXO.js";const Re={title:"Components/Not Prod Ready/Feedback/Alert",component:s,args:{action:void 0,banner:!1,closeIcon:void 0,description:void 0,icon:void 0,message:"This is a simple alert message",showIcon:!1,type:"info",onClose:o=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},p={},m={args:{type:"success"}},d={args:{type:"error"}},x={args:{banner:!0,type:"warning"}},g={args:{description:"Additional content of the alert."}},u={args:{action:e.jsx("a",{style:{paddingLeft:"8px"},children:"Click Me Link"})}},y={args:{closeIcon:e.jsx(ye,{name:"mpLogo"})}},h={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:e.jsx(e.Fragment,{children:"There are 4 types of Alert: success, info, warning, error."}),children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Success Text",type:"success"}),e.jsx(s,{message:"Info Text",type:"info"}),e.jsx(s,{message:"Warning Text",type:"warning"}),e.jsx(s,{message:"Error Text",type:"error"})]})})})},E={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"With close button",children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:o=>{alert("closed")}}),e.jsx(s,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:o=>{alert("closed")}})]})})})},f={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"Display Alert as a banner at top of page",children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Warning text",banner:!0}),e.jsx(s,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),e.jsx(s,{showIcon:!1,message:"Warning text without icon",banner:!0}),e.jsx(s,{type:"error",message:"Error text",banner:!0})]})})})},S={render:()=>{const[o,n]=he.useState(),a=()=>{const pe=()=>{n(new Error("An Uncaught Error"))};if(o)throw o;return e.jsx(i,{danger:!0,onClick:pe,children:"Click me to throw a error"})};return e.jsx(e.Fragment,{children:e.jsx(l,{title:"ErrorBoundary Component for making error handling easier",children:e.jsx(s.ErrorBoundary,{children:e.jsx(a,{})})})})}},j={render:()=>e.jsx(e.Fragment,{children:e.jsx(l,{title:"Custom CTAs",children:e.jsxs(c,{direction:"vertical",style:{width:"100%"},children:[e.jsx(s,{message:"Success Tips",type:"success",showIcon:!0,closable:!0,action:e.jsx(i,{size:"small",type:"text",children:"UNDO"})}),e.jsx(s,{message:"Error Text",showIcon:!0,description:"Error Description Error Description Error Description Error Description",type:"error",action:e.jsx(i,{size:"small",danger:!0,children:"Detail"})}),e.jsx(s,{message:"Warning Text",type:"warning",closable:!0,action:e.jsx(c,{children:e.jsx(i,{type:"text",size:"small",ghost:!0,children:"Done"})})}),e.jsx(s,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info",closable:!0,action:e.jsxs(c,{direction:"vertical",children:[e.jsx(i,{size:"small",type:"primary",children:"Accept"}),e.jsx(i,{size:"small",danger:!0,ghost:!0,children:"Decline"})]})})]})})})},w={render:()=>e.jsx(s,{message:e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"20px"},children:"💡"}),e.jsxs("span",{children:["Use the"," ",e.jsx("a",{href:"?path=/docs/components-feedback-message--docs",style:{textDecoration:"underline"},children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:"#ffffff",border:"1px solid #d9d9d9",borderRadius:"8px",width:"100%",marginBottom:0}})};var b,A,C;p.parameters=t(r({},p.parameters),{docs:t(r({},(b=p.parameters)==null?void 0:b.docs),{source:r({originalSource:"{}"},(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source)})});var I,W,B;m.parameters=t(r({},m.parameters),{docs:t(r({},(I=m.parameters)==null?void 0:I.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source)})});var k,v,z;d.parameters=t(r({},d.parameters),{docs:t(r({},(k=d.parameters)==null?void 0:k.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(z=(v=d.parameters)==null?void 0:v.docs)==null?void 0:z.source)})});var F,L,U;x.parameters=t(r({},x.parameters),{docs:t(r({},(F=x.parameters)==null?void 0:F.docs),{source:r({originalSource:`{
  args: {
    banner: true,
    type: 'warning'
  }
}`},(U=(L=x.parameters)==null?void 0:L.docs)==null?void 0:U.source)})});var N,R,M;g.parameters=t(r({},g.parameters),{docs:t(r({},(N=g.parameters)==null?void 0:N.docs),{source:r({originalSource:`{
  args: {
    description: 'Additional content of the alert.'
  }
}`},(M=(R=g.parameters)==null?void 0:R.docs)==null?void 0:M.source)})});var O,P,V;u.parameters=t(r({},u.parameters),{docs:t(r({},(O=u.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    action: <a style={{
      paddingLeft: '8px'
    }}>Click Me Link</a>
  }
}`},(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source)})});var _,q,G;y.parameters=t(r({},y.parameters),{docs:t(r({},(_=y.parameters)==null?void 0:_.docs),{source:r({originalSource:`{
  args: {
    closeIcon: <Icon name="mpLogo" />
  }
}`},(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});var H,J,K;h.parameters=t(r({},h.parameters),{docs:t(r({},(H=h.parameters)==null?void 0:H.docs),{source:r({originalSource:`{
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
}`},(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Y;E.parameters=t(r({},E.parameters),{docs:t(r({},(Q=E.parameters)==null?void 0:Q.docs),{source:r({originalSource:`{
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
}`},(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;f.parameters=t(r({},f.parameters),{docs:t(r({},(Z=f.parameters)==null?void 0:Z.docs),{source:r({originalSource:`{
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
}`},(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var re,te,se;S.parameters=t(r({},S.parameters),{docs:t(r({},(re=S.parameters)==null?void 0:re.docs),{source:r({originalSource:`{
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
}`},(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source)})});var oe,ne,ae;j.parameters=t(r({},j.parameters),{docs:t(r({},(oe=j.parameters)==null?void 0:oe.docs),{source:r({originalSource:`{
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
}`},(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source)})});var ie,ce,le;w.parameters=t(r({},w.parameters),{docs:t(r({},(ie=w.parameters)==null?void 0:ie.docs),{source:r({originalSource:`{
  render: () => {
    return <Alert message={<span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
            <span style={{
        fontSize: '20px'
      }}>💡</span>
            <span>
              Use the{' '}
              <a href="?path=/docs/components-feedback-message--docs" style={{
          textDecoration: 'underline'
        }}>
                Message component
              </a>{' '}
              if the notification should dismiss automatically.
            </span>
          </span>} showIcon={false} type="info" style={{
      backgroundColor: '#ffffff',
      border: '1px solid #d9d9d9',
      borderRadius: '8px',
      width: '100%',
      marginBottom: 0
    }} />;
  }
}`},(le=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:le.source)})});const Me=["Primary","Success","ErrorType","WarningBanner","Description","CustomAction","CustomCloseIcon","ExampleAllTypes","ExampleClosable","ExampleBanner","ExampleCatchError","ExampleCustomActions","StorybookNote"];export{u as CustomAction,y as CustomCloseIcon,g as Description,d as ErrorType,h as ExampleAllTypes,f as ExampleBanner,S as ExampleCatchError,E as ExampleClosable,j as ExampleCustomActions,p as Primary,w as StorybookNote,m as Success,x as WarningBanner,Me as __namedExportsOrder,Re as default};
