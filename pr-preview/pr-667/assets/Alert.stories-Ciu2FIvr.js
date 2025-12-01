var rs=Object.defineProperty,os=Object.defineProperties;var as=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ts=Object.prototype.hasOwnProperty,ns=Object.prototype.propertyIsEnumerable;var _=(t,a,n)=>a in t?rs(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,e=(t,a)=>{for(var n in a||(a={}))ts.call(a,n)&&_(t,n,a[n]);if(P)for(var n of P(a))ns.call(a,n)&&_(t,n,a[n]);return t},r=(t,a)=>os(t,as(a));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{r as i}from"./index-3OP4wdng.js";import{y as M,F as p,c as o,e as De,z as Ge,t as c}from"./NavigationItemsService-BGwldyeq.js";import"./ErrorStateIcon-Clx5lk_q.js";import"./SuccessStateIcon-CrBP74im.js";import"./WarningStateIcon-irkX5OVh.js";import"./_baseClone-DwBCp-Ss.js";import{B as He,l as Je,m as Qe,S as Ze}from"./style-BvWo89XW.js";const is={title:"Components/Feedback/Alert",component:M,args:{banner:!1,showIcon:!1,type:"info",onClose:t=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},m={render:()=>s.jsx(M,{message:s.jsxs(p,{align:"center",gap:Ze,children:[s.jsx(o.Text,{size:"xl",children:"💡"}),s.jsxs(o.Text,{size:"base",children:["Use the"," ",s.jsx(o.Link,{href:"?path=/docs/components-feedback-message--docs",underline:!0,children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:Qe,border:`1px solid ${Je}`,borderRadius:He,width:"860px",marginBottom:0}})},h={render:()=>s.jsx(M,{message:s.jsxs(p,{align:"center",gap:Ze,children:[s.jsx(o.Text,{size:"xl",children:"💡"}),s.jsx(o.Text,{size:"base",children:"We don't use bolding or titles for our alerts."})]}),showIcon:!1,type:"info",style:{backgroundColor:Qe,border:`1px solid ${Je}`,borderRadius:He,width:"860px",marginBottom:0}})},u={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},y={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},x={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"860px"}}},T={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"860px"}}},f={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},w={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"860px"}}},v={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:s.jsx(o.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"860px"}}},b={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},I={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},S={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},C={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},B={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},j={args:{type:"success",message:s.jsxs(o.Text,{size:"base",children:["Your changes have been saved successfully."," ",s.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},k={args:{type:"info",message:s.jsxs(o.Text,{size:"base",children:["This is an informational message."," ",s.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},E={args:{type:"warning",message:s.jsxs(o.Text,{size:"base",children:["This is a warning message."," ",s.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},z={args:{type:"error",message:s.jsxs(o.Text,{size:"base",children:["An error occurred processing your request."," ",s.jsx(o.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},O={render:()=>{const[t,a]=i.useState(!1),[n,g]=i.useState(""),[N,F]=i.useState(""),[K,L]=i.useState(""),R=()=>{a(!1)},A=()=>{a(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(De,{type:"default",onClick:()=>a(!0),children:"Open Modal with Info Alert"}),s.jsx(Ge,{title:"Save Configuration",open:t,onOk:R,onCancel:A,width:600,okText:"Save",children:s.jsxs(p,{vertical:!0,gap:"middle",children:[s.jsx(o.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(p,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(o.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:n,onChange:l=>g(l.target.value),placeholder:"Enter value",style:{marginTop:"8px"}})]}),s.jsxs("div",{children:[s.jsx(o.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:N,onChange:l=>F(l.target.value),placeholder:"Enter value",style:{marginTop:"8px"}})]}),s.jsxs("div",{children:[s.jsx(o.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:K,onChange:l=>L(l.target.value),placeholder:"Enter value",style:{marginTop:"8px"}})]})]}),s.jsx(M,{type:"info",message:"These settings cannot be changed once saved.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:"16px"}})]})})]})}},W={render:()=>{const[t,a]=i.useState(!1),[n,g]=i.useState(!1),[N,F]=i.useState(""),[K,L]=i.useState(""),[R,A]=i.useState(""),l=()=>{g(!0)},es=()=>{a(!1),g(!1),F(""),L(""),A("")},ss=()=>{a(!0),g(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(De,{type:"default",onClick:ss,children:"Open Modal with Error on Save"}),s.jsx(Ge,{title:"Save Configuration",open:t,onOk:l,onCancel:es,width:600,okText:"Save",children:s.jsxs(p,{vertical:!0,gap:"middle",children:[s.jsx(o.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(p,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(o.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:N,onChange:d=>F(d.target.value),placeholder:"Enter value",style:{marginTop:"8px"}})]}),s.jsxs("div",{children:[s.jsx(o.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:K,onChange:d=>L(d.target.value),placeholder:"Enter value",style:{marginTop:"8px"}})]}),s.jsxs("div",{children:[s.jsx(o.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:R,onChange:d=>A(d.target.value),placeholder:"Enter value",style:{marginTop:"8px"}})]})]}),n&&s.jsx(M,{type:"error",message:"Unable to save. Please verify all required permissions are granted.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:"16px"}})]})})]})}};var q,U,$;m.parameters=r(e({},m.parameters),{docs:r(e({},(q=m.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert message={<Flex align="center" gap={SizeXs}>
            <Typography.Text size="xl">💡</Typography.Text>
            <Typography.Text size="base">
              Use the{' '}
              <Typography.Link href="?path=/docs/components-feedback-message--docs" underline>
                Message component
              </Typography.Link>{' '}
              if the notification should dismiss automatically.
            </Typography.Text>
          </Flex>} showIcon={false} type="info" style={{
      backgroundColor: ColorWhite,
      border: \`1px solid \${ColorBorderSecondary}\`,
      borderRadius: BorderRadiusLg,
      width: '860px',
      marginBottom: 0
    }} />;
  }
}`},($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source)})});var X,V,Y;h.parameters=r(e({},h.parameters),{docs:r(e({},(X=h.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert message={<Flex align="center" gap={SizeXs}>
            <Typography.Text size="xl">💡</Typography.Text>
            <Typography.Text size="base">We don&apos;t use bolding or titles for our alerts.</Typography.Text>
          </Flex>} showIcon={false} type="info" style={{
      backgroundColor: ColorWhite,
      border: \`1px solid \${ColorBorderSecondary}\`,
      borderRadius: BorderRadiusLg,
      width: '860px',
      marginBottom: 0
    }} />;
  }
}`},(Y=(V=h.parameters)==null?void 0:V.docs)==null?void 0:Y.source)})});var D,G,H;u.parameters=r(e({},u.parameters),{docs:r(e({},(D=u.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var J,Q,Z;y.parameters=r(e({},y.parameters),{docs:r(e({},(J=y.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Z=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source)})});var ee,se,re;x.parameters=r(e({},x.parameters),{docs:r(e({},(ee=x.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source)})});var oe,ae,te;T.parameters=r(e({},T.parameters),{docs:r(e({},(oe=T.parameters)==null?void 0:oe.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(te=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var ne,ie,le;f.parameters=r(e({},f.parameters),{docs:r(e({},(ne=f.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source)})});var ce,pe,ge;w.parameters=r(e({},w.parameters),{docs:r(e({},(ce=w.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source)})});var de,me,he;v.parameters=r(e({},v.parameters),{docs:r(e({},(de=v.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    expandable: true,
    closable: true,
    message: 'This is an error message.',
    expandableContent: <Typography.Text size="base">Error details go here</Typography.Text>,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source)})});var ue,ye,xe;b.parameters=r(e({},b.parameters),{docs:r(e({},(ue=b.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(xe=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:xe.source)})});var Te,fe,we;I.parameters=r(e({},I.parameters),{docs:r(e({},(Te=I.parameters)==null?void 0:Te.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(we=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:we.source)})});var ve,be,Ie;S.parameters=r(e({},S.parameters),{docs:r(e({},(ve=S.parameters)==null?void 0:ve.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Ie=(be=S.parameters)==null?void 0:be.docs)==null?void 0:Ie.source)})});var Se,Ce,Be;C.parameters=r(e({},C.parameters),{docs:r(e({},(Se=C.parameters)==null?void 0:Se.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Be=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source)})});var je,ke,Ee;B.parameters=r(e({},B.parameters),{docs:r(e({},(je=B.parameters)==null?void 0:je.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    message: 'This is an error message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Ee=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source)})});var ze,Oe,We;j.parameters=r(e({},j.parameters),{docs:r(e({},(ze=j.parameters)==null?void 0:ze.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: <Typography.Text size="base">
        Your changes have been saved successfully.{' '}
        <Typography.Link color="ColorText" underline href="#">
          View details
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(We=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:We.source)})});var Me,Fe,Le;k.parameters=r(e({},k.parameters),{docs:r(e({},(Me=k.parameters)==null?void 0:Me.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: <Typography.Text size="base">
        This is an informational message.{' '}
        <Typography.Link color="ColorText" underline href="#">
          Learn more
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Le=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source)})});var Ae,Ne,Ke;E.parameters=r(e({},E.parameters),{docs:r(e({},(Ae=E.parameters)==null?void 0:Ae.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: <Typography.Text size="base">
        This is a warning message.{' '}
        <Typography.Link color="ColorText" underline href="#">
          Review settings
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Ke=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source)})});var Re,Pe,_e;z.parameters=r(e({},z.parameters),{docs:r(e({},(Re=z.parameters)==null?void 0:Re.docs),{source:e({originalSource:`{
  args: {
    type: 'error',
    message: <Typography.Text size="base">
        An error occurred processing your request.{' '}
        <Typography.Link color="ColorText" underline href="#">
          Try again
        </Typography.Link>
      </Typography.Text>,
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(_e=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source)})});var qe,Ue,$e;O.parameters=r(e({},O.parameters),{docs:r(e({},(qe=O.parameters)==null?void 0:qe.docs),{source:e({originalSource:`{
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [configName, setConfigName] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [endpoint, setEndpoint] = useState('');
    const handleOk = () => {
      // In a real scenario, this would save and only close if there are no errors
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return <>
        <Button type="default" onClick={() => setIsModalOpen(true)}>
          Open Modal with Info Alert
        </Button>
        <Modal title="Save Configuration" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={600} okText="Save">
          <Flex vertical gap="middle">
            <Typography.Text size="base">Please review the configuration settings below before saving.</Typography.Text>
            <Flex vertical gap="small">
              <div>
                <Typography.Text size="base">Field 1</Typography.Text>
                <Input value={configName} onChange={e => setConfigName(e.target.value)} placeholder="Enter value" style={{
                marginTop: '8px'
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 2</Typography.Text>
                <Input value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="Enter value" style={{
                marginTop: '8px'
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 3</Typography.Text>
                <Input value={endpoint} onChange={e => setEndpoint(e.target.value)} placeholder="Enter value" style={{
                marginTop: '8px'
              }} />
              </div>
            </Flex>
            <Alert type="info" message="These settings cannot be changed once saved." showIcon={true} closable={false} style={{
            marginBottom: 0,
            marginTop: '16px'
          }} />
          </Flex>
        </Modal>
      </>;
  }
}`},($e=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source)})});var Xe,Ve,Ye;W.parameters=r(e({},W.parameters),{docs:r(e({},(Xe=W.parameters)==null?void 0:Xe.docs),{source:e({originalSource:`{
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showError, setShowError] = useState(false);
    const [configName, setConfigName] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [endpoint, setEndpoint] = useState('');
    const handleOk = () => {
      // Simulate a save failure
      setShowError(true);
      // In a real scenario, you would check for errors and only close if successful
    };
    const handleCancel = () => {
      setIsModalOpen(false);
      setShowError(false);
      // Reset form
      setConfigName('');
      setApiKey('');
      setEndpoint('');
    };
    const handleOpen = () => {
      setIsModalOpen(true);
      setShowError(false);
    };
    return <>
        <Button type="default" onClick={handleOpen}>
          Open Modal with Error on Save
        </Button>
        <Modal title="Save Configuration" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={600} okText="Save">
          <Flex vertical gap="middle">
            <Typography.Text size="base">Please review the configuration settings below before saving.</Typography.Text>
            <Flex vertical gap="small">
              <div>
                <Typography.Text size="base">Field 1</Typography.Text>
                <Input value={configName} onChange={e => setConfigName(e.target.value)} placeholder="Enter value" style={{
                marginTop: '8px'
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 2</Typography.Text>
                <Input value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="Enter value" style={{
                marginTop: '8px'
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 3</Typography.Text>
                <Input value={endpoint} onChange={e => setEndpoint(e.target.value)} placeholder="Enter value" style={{
                marginTop: '8px'
              }} />
              </div>
            </Flex>
            {showError && <Alert type="error" message="Unable to save. Please verify all required permissions are granted." showIcon={true} closable={false} style={{
            marginBottom: 0,
            marginTop: '16px'
          }} />}
          </Flex>
        </Modal>
      </>;
  }
}`},(Ye=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source)})});const ls=["StorybookNote","NoBoldingOrTitlesNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink","ErrorInModal","ErrorAfterSaveInModal"],Ts=Object.freeze(Object.defineProperty({__proto__:null,Error:T,ErrorAfterSaveInModal:W,ErrorInModal:O,ErrorWithCloseButton:B,ErrorWithExpandCollapse:v,ErrorWithLink:z,ErrorWithoutIcon:w,Info:u,InfoWithCloseButton:S,InfoWithLink:k,InfoWithoutIcon:f,NoBoldingOrTitlesNote:h,StorybookNote:m,Success:y,SuccessWithCloseButton:I,SuccessWithLink:j,Warning:x,WarningWithCloseButton:C,WarningWithLink:E,WithCloseButton:b,__namedExportsOrder:ls,default:is},Symbol.toStringTag,{value:"Module"}));export{Ts as A,T as E,u as I,m as S,x as W,y as a,B as b,j as c,k as d,E as e,z as f,O as g,W as h};
