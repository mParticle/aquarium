var os=Object.defineProperty,ts=Object.defineProperties;var ns=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var is=Object.prototype.hasOwnProperty,ls=Object.prototype.propertyIsEnumerable;var _=(t,o,n)=>o in t?os(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,e=(t,o)=>{for(var n in o||(o={}))is.call(o,n)&&_(t,n,o[n]);if(P)for(var n of P(o))ls.call(o,n)&&_(t,n,o[n]);return t},r=(t,o)=>ts(t,ns(o));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{r as i}from"./index-3OP4wdng.js";import{K as F,F as g,b as a,c as Ge,N as He,u as c}from"./NavigationItemsService-7KzyURgV.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import{B as Je,n as Qe,u as Ze,t as es,v as p,w as ss}from"./style-BbwCNso5.js";const cs={title:"Components/Feedback/Alert",component:F,args:{banner:!1,showIcon:!1,type:"info",onClose:t=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},h={render:()=>s.jsx(F,{message:s.jsxs(g,{align:"center",gap:es,children:[s.jsx(a.Text,{size:"xl",children:"💡"}),s.jsxs(a.Text,{size:"base",children:["Use the"," ",s.jsx(a.Link,{href:"?path=/docs/components-feedback-message--docs",underline:!0,children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:Ze,border:`1px solid ${Qe}`,borderRadius:Je,width:"860px",marginBottom:0}})},u={render:()=>s.jsx(F,{message:s.jsxs(g,{align:"center",gap:es,children:[s.jsx(a.Text,{size:"xl",children:"💡"}),s.jsx(a.Text,{size:"base",children:"We don't use bolding or titles for our alerts."})]}),showIcon:!1,type:"info",style:{backgroundColor:Ze,border:`1px solid ${Qe}`,borderRadius:Je,width:"860px",marginBottom:0}})},y={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},x={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},T={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"860px"}}},f={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"860px"}}},w={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},v={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"860px"}}},b={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:s.jsx(a.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"860px"}}},I={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},C={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},S={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},B={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},j={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},k={args:{type:"success",message:s.jsxs(a.Text,{size:"base",children:["Your changes have been saved successfully."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},E={args:{type:"info",message:s.jsxs(a.Text,{size:"base",children:["This is an informational message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},M={args:{type:"warning",message:s.jsxs(a.Text,{size:"base",children:["This is a warning message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},z={args:{type:"error",message:s.jsxs(a.Text,{size:"base",children:["An error occurred processing your request."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},O={render:()=>{const[t,o]=i.useState(!1),[n,d]=i.useState(""),[K,L]=i.useState(""),[R,A]=i.useState(""),X=()=>{o(!1)},N=()=>{o(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(Ge,{type:"default",onClick:()=>o(!0),children:"Open Modal with Info Alert"}),s.jsx(He,{title:"Save Configuration",open:t,onOk:X,onCancel:N,width:600,okText:"Save",children:s.jsxs(g,{vertical:!0,gap:"middle",children:[s.jsx(a.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(g,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:n,onChange:l=>d(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:K,onChange:l=>L(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:R,onChange:l=>A(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]})]}),s.jsx(F,{type:"info",message:"These settings cannot be changed once saved.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:ss}})]})})]})}},W={render:()=>{const[t,o]=i.useState(!1),[n,d]=i.useState(!1),[K,L]=i.useState(""),[R,A]=i.useState(""),[X,N]=i.useState(""),l=()=>{d(!0)},rs=()=>{o(!1),d(!1),L(""),A(""),N("")},as=()=>{o(!0),d(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(Ge,{type:"default",onClick:as,children:"Open Modal with Error on Save"}),s.jsx(He,{title:"Save Configuration",open:t,onOk:l,onCancel:rs,width:600,okText:"Save",children:s.jsxs(g,{vertical:!0,gap:"middle",children:[s.jsx(a.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(g,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:K,onChange:m=>L(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:R,onChange:m=>A(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:X,onChange:m=>N(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]})]}),n&&s.jsx(F,{type:"error",message:"Unable to save. Please verify all required permissions are granted.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:ss}})]})})]})}};var q,U,$;h.parameters=r(e({},h.parameters),{docs:r(e({},(q=h.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
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
}`},($=(U=h.parameters)==null?void 0:U.docs)==null?void 0:$.source)})});var V,Y,D;u.parameters=r(e({},u.parameters),{docs:r(e({},(V=u.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
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
}`},(D=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:D.source)})});var G,H,J;y.parameters=r(e({},y.parameters),{docs:r(e({},(G=y.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var Q,Z,ee;x.parameters=r(e({},x.parameters),{docs:r(e({},(Q=x.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var se,re,ae;T.parameters=r(e({},T.parameters),{docs:r(e({},(se=T.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ae=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ae.source)})});var oe,te,ne;f.parameters=r(e({},f.parameters),{docs:r(e({},(oe=f.parameters)==null?void 0:oe.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source)})});var ie,le,ce;w.parameters=r(e({},w.parameters),{docs:r(e({},(ie=w.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ce=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ce.source)})});var pe,ge,de;v.parameters=r(e({},v.parameters),{docs:r(e({},(pe=v.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(de=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:de.source)})});var me,he,ue;b.parameters=r(e({},b.parameters),{docs:r(e({},(me=b.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(ue=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ue.source)})});var ye,xe,Te;I.parameters=r(e({},I.parameters),{docs:r(e({},(ye=I.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
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
}`},(Te=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Te.source)})});var fe,we,ve;C.parameters=r(e({},C.parameters),{docs:r(e({},(fe=C.parameters)==null?void 0:fe.docs),{source:e({originalSource:`{
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
}`},(ve=(we=C.parameters)==null?void 0:we.docs)==null?void 0:ve.source)})});var be,Ie,Ce;S.parameters=r(e({},S.parameters),{docs:r(e({},(be=S.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
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
}`},(Ce=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source)})});var Se,Be,je;B.parameters=r(e({},B.parameters),{docs:r(e({},(Se=B.parameters)==null?void 0:Se.docs),{source:e({originalSource:`{
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
}`},(je=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:je.source)})});var ke,Ee,Me;j.parameters=r(e({},j.parameters),{docs:r(e({},(ke=j.parameters)==null?void 0:ke.docs),{source:e({originalSource:`{
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
}`},(Me=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source)})});var ze,Oe,We;k.parameters=r(e({},k.parameters),{docs:r(e({},(ze=k.parameters)==null?void 0:ze.docs),{source:e({originalSource:`{
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
}`},(We=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:We.source)})});var Fe,Le,Ae;E.parameters=r(e({},E.parameters),{docs:r(e({},(Fe=E.parameters)==null?void 0:Fe.docs),{source:e({originalSource:`{
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
}`},(Ae=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source)})});var Ne,Ke,Re;M.parameters=r(e({},M.parameters),{docs:r(e({},(Ne=M.parameters)==null?void 0:Ne.docs),{source:e({originalSource:`{
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
}`},(Re=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Re.source)})});var Xe,Pe,_e;z.parameters=r(e({},z.parameters),{docs:r(e({},(Xe=z.parameters)==null?void 0:Xe.docs),{source:e({originalSource:`{
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
                marginTop: MarginXs
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 2</Typography.Text>
                <Input value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="Enter value" style={{
                marginTop: MarginXs
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 3</Typography.Text>
                <Input value={endpoint} onChange={e => setEndpoint(e.target.value)} placeholder="Enter value" style={{
                marginTop: MarginXs
              }} />
              </div>
            </Flex>
            <Alert type="info" message="These settings cannot be changed once saved." showIcon={true} closable={false} style={{
            marginBottom: 0,
            marginTop: Margin
          }} />
          </Flex>
        </Modal>
      </>;
  }
}`},($e=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source)})});var Ve,Ye,De;W.parameters=r(e({},W.parameters),{docs:r(e({},(Ve=W.parameters)==null?void 0:Ve.docs),{source:e({originalSource:`{
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
                marginTop: MarginXs
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 2</Typography.Text>
                <Input value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="Enter value" style={{
                marginTop: MarginXs
              }} />
              </div>
              <div>
                <Typography.Text size="base">Field 3</Typography.Text>
                <Input value={endpoint} onChange={e => setEndpoint(e.target.value)} placeholder="Enter value" style={{
                marginTop: MarginXs
              }} />
              </div>
            </Flex>
            {showError && <Alert type="error" message="Unable to save. Please verify all required permissions are granted." showIcon={true} closable={false} style={{
            marginBottom: 0,
            marginTop: Margin
          }} />}
          </Flex>
        </Modal>
      </>;
  }
}`},(De=(Ye=W.parameters)==null?void 0:Ye.docs)==null?void 0:De.source)})});const ps=["StorybookNote","NoBoldingOrTitlesNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink","ErrorInModal","ErrorAfterSaveInModal"],ws=Object.freeze(Object.defineProperty({__proto__:null,Error:f,ErrorAfterSaveInModal:W,ErrorInModal:O,ErrorWithCloseButton:j,ErrorWithExpandCollapse:b,ErrorWithLink:z,ErrorWithoutIcon:v,Info:y,InfoWithCloseButton:S,InfoWithLink:E,InfoWithoutIcon:w,NoBoldingOrTitlesNote:u,StorybookNote:h,Success:x,SuccessWithCloseButton:C,SuccessWithLink:k,Warning:T,WarningWithCloseButton:B,WarningWithLink:M,WithCloseButton:I,__namedExportsOrder:ps,default:cs},Symbol.toStringTag,{value:"Module"}));export{ws as A,f as E,y as I,h as S,T as W,x as a,j as b,k as c,E as d,M as e,z as f,O as g,W as h};
