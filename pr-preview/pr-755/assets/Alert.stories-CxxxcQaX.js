var ks=Object.defineProperty,Es=Object.defineProperties;var Ws=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Ms=Object.prototype.hasOwnProperty,zs=Object.prototype.propertyIsEnumerable;var Y=(t,o,n)=>o in t?ks(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,e=(t,o)=>{for(var n in o||(o={}))Ms.call(o,n)&&Y(t,n,o[n]);if(V)for(var n of V(o))zs.call(o,n)&&Y(t,n,o[n]);return t},r=(t,o)=>Es(t,Ws(o));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{r as i}from"./index-3OP4wdng.js";import{K as X,F as g,b as a,c as fs,N as ws,u as c}from"./UnauthorizedTooltip-CBh7Vgct.js";import"./ErrorStateIcon-52P2Gclu.js";import"./SuccessStateIcon-BQhZ9sI0.js";import"./WarningStateIcon-Cp3WhlPZ.js";import"./_baseClone-DwBCp-Ss.js";import{ax as vs,am as bs,ay as Is,aw as Cs,az as p,aA as Ss}from"./style-DU2SNM1h.js";const Ls={title:"Components/Feedback/Alert",component:X,args:{banner:!1,showIcon:!1,type:"info",onClose:t=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error","default"]}}},h={render:()=>s.jsx(X,{message:s.jsxs(g,{align:"center",gap:Cs,children:[s.jsx(a.Text,{size:"xl",children:"💡"}),s.jsxs(a.Text,{size:"base",children:["Use the"," ",s.jsx(a.Link,{href:"?path=/docs/components-feedback-message--docs",color:"ColorText",children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:Is,border:`1px solid ${bs}`,borderRadius:vs,width:"860px",marginBottom:0}})},u={render:()=>s.jsx(X,{message:s.jsxs(g,{align:"center",gap:Cs,children:[s.jsx(a.Text,{size:"xl",children:"💡"}),s.jsx(a.Text,{size:"base",children:"We don't use bolding or titles for our alerts."})]}),showIcon:!1,type:"info",style:{backgroundColor:Is,border:`1px solid ${bs}`,borderRadius:vs,width:"860px",marginBottom:0}})},y={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},x={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},T={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"860px"}}},f={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"860px"}}},w={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},v={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"860px"}}},b={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:s.jsx(a.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"860px"}}},I={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},C={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},S={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},B={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},j={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},k={args:{type:"info",message:"This is a long informational message that wraps onto multiple lines to demonstrate that the icon remains top-aligned rather than centered vertically.",showIcon:!0,style:{marginBottom:0,width:"400px"}}},E={args:{type:"warning",message:"This is a long warning message that wraps onto multiple lines to demonstrate that both the icon and close button remain top-aligned rather than centered vertically.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"400px"}}},W={args:{type:"success",message:s.jsxs(a.Text,{size:"base",children:["Your changes have been saved successfully."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},M={args:{type:"info",message:s.jsxs(a.Text,{size:"base",children:["This is an informational message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},z={args:{type:"warning",message:s.jsxs(a.Text,{size:"base",children:["This is a warning message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},L={args:{type:"error",message:s.jsxs(a.Text,{size:"base",children:["An error occurred processing your request."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},O={render:()=>{const[t,o]=i.useState(!1),[n,d]=i.useState(""),[q,D]=i.useState(""),[U,P]=i.useState(""),$=()=>{o(!1)},_=()=>{o(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(fs,{type:"default",onClick:()=>o(!0),children:"Open Modal with Info Alert"}),s.jsx(ws,{title:"Save Configuration",open:t,onOk:$,onCancel:_,width:600,okText:"Save",children:s.jsxs(g,{vertical:!0,gap:"middle",children:[s.jsx(a.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(g,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:n,onChange:l=>d(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:q,onChange:l=>D(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:U,onChange:l=>P(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]})]}),s.jsx(X,{type:"info",message:"These settings cannot be changed once saved.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:Ss}})]})})]})}},A={args:{type:"default",message:"This is a general informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},F={args:{type:"default",message:"This is a general informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},N={args:{type:"default",message:"This is a general informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},K={args:{type:"default",message:s.jsxs(a.Text,{size:"base",children:["This is a general informational message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!1,style:{marginBottom:0,width:"860px"}}},R={render:()=>{const[t,o]=i.useState(!1),[n,d]=i.useState(!1),[q,D]=i.useState(""),[U,P]=i.useState(""),[$,_]=i.useState(""),l=()=>{d(!0)},Bs=()=>{o(!1),d(!1),D(""),P(""),_("")},js=()=>{o(!0),d(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(fs,{type:"default",onClick:js,children:"Open Modal with Error on Save"}),s.jsx(ws,{title:"Save Configuration",open:t,onOk:l,onCancel:Bs,width:600,okText:"Save",children:s.jsxs(g,{vertical:!0,gap:"middle",children:[s.jsx(a.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(g,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:q,onChange:m=>D(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:U,onChange:m=>P(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:$,onChange:m=>_(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]})]}),n&&s.jsx(X,{type:"error",message:"Unable to save. Please verify all required permissions are granted.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:Ss}})]})})]})}};var G,H,J;h.parameters=r(e({},h.parameters),{docs:r(e({},(G=h.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  render: () => {
    return <Alert message={<Flex align="center" gap={SizeXs}>
            <Typography.Text size="xl">💡</Typography.Text>
            <Typography.Text size="base">
              Use the{' '}
              <Typography.Link href="?path=/docs/components-feedback-message--docs" color="ColorText">
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
}`},(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var Q,Z,ee;u.parameters=r(e({},u.parameters),{docs:r(e({},(Q=u.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
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
}`},(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var se,re,ae;y.parameters=r(e({},y.parameters),{docs:r(e({},(se=y.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source)})});var oe,te,ne;x.parameters=r(e({},x.parameters),{docs:r(e({},(oe=x.parameters)==null?void 0:oe.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source)})});var ie,le,ce;T.parameters=r(e({},T.parameters),{docs:r(e({},(ie=T.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ce=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ce.source)})});var pe,ge,de;f.parameters=r(e({},f.parameters),{docs:r(e({},(pe=f.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(de=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:de.source)})});var me,he,ue;w.parameters=r(e({},w.parameters),{docs:r(e({},(me=w.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ue=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ue.source)})});var ye,xe,Te;v.parameters=r(e({},v.parameters),{docs:r(e({},(ye=v.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Te=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Te.source)})});var fe,we,ve;b.parameters=r(e({},b.parameters),{docs:r(e({},(fe=b.parameters)==null?void 0:fe.docs),{source:e({originalSource:`{
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
}`},(ve=(we=b.parameters)==null?void 0:we.docs)==null?void 0:ve.source)})});var be,Ie,Ce;I.parameters=r(e({},I.parameters),{docs:r(e({},(be=I.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
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
}`},(Ce=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source)})});var Se,Be,je;C.parameters=r(e({},C.parameters),{docs:r(e({},(Se=C.parameters)==null?void 0:Se.docs),{source:e({originalSource:`{
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
}`},(je=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:je.source)})});var ke,Ee,We;S.parameters=r(e({},S.parameters),{docs:r(e({},(ke=S.parameters)==null?void 0:ke.docs),{source:e({originalSource:`{
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
}`},(We=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:We.source)})});var Me,ze,Le;B.parameters=r(e({},B.parameters),{docs:r(e({},(Me=B.parameters)==null?void 0:Me.docs),{source:e({originalSource:`{
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
}`},(Le=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:Le.source)})});var Oe,Ae,Fe;j.parameters=r(e({},j.parameters),{docs:r(e({},(Oe=j.parameters)==null?void 0:Oe.docs),{source:e({originalSource:`{
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
}`},(Fe=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source)})});var Ne,Ke,Re;k.parameters=r(e({},k.parameters),{docs:r(e({},(Ne=k.parameters)==null?void 0:Ne.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is a long informational message that wraps onto multiple lines to demonstrate that the icon remains top-aligned rather than centered vertically.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '400px'
    }
  }
}`},(Re=(Ke=k.parameters)==null?void 0:Ke.docs)==null?void 0:Re.source)})});var Xe,De,Pe;E.parameters=r(e({},E.parameters),{docs:r(e({},(Xe=E.parameters)==null?void 0:Xe.docs),{source:e({originalSource:`{
  args: {
    type: 'warning',
    message: 'This is a long warning message that wraps onto multiple lines to demonstrate that both the icon and close button remain top-aligned rather than centered vertically.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '400px'
    }
  }
}`},(Pe=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Pe.source)})});var _e,qe,Ue;W.parameters=r(e({},W.parameters),{docs:r(e({},(_e=W.parameters)==null?void 0:_e.docs),{source:e({originalSource:`{
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
}`},(Ue=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source)})});var $e,Ve,Ye;M.parameters=r(e({},M.parameters),{docs:r(e({},($e=M.parameters)==null?void 0:$e.docs),{source:e({originalSource:`{
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
}`},(Ye=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source)})});var Ge,He,Je;z.parameters=r(e({},z.parameters),{docs:r(e({},(Ge=z.parameters)==null?void 0:Ge.docs),{source:e({originalSource:`{
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
}`},(Je=(He=z.parameters)==null?void 0:He.docs)==null?void 0:Je.source)})});var Qe,Ze,es;L.parameters=r(e({},L.parameters),{docs:r(e({},(Qe=L.parameters)==null?void 0:Qe.docs),{source:e({originalSource:`{
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
}`},(es=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:es.source)})});var ss,rs,as;O.parameters=r(e({},O.parameters),{docs:r(e({},(ss=O.parameters)==null?void 0:ss.docs),{source:e({originalSource:`{
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
}`},(as=(rs=O.parameters)==null?void 0:rs.docs)==null?void 0:as.source)})});var os,ts,ns;A.parameters=r(e({},A.parameters),{docs:r(e({},(os=A.parameters)==null?void 0:os.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ns=(ts=A.parameters)==null?void 0:ts.docs)==null?void 0:ns.source)})});var is,ls,cs;F.parameters=r(e({},F.parameters),{docs:r(e({},(is=F.parameters)==null?void 0:is.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(cs=(ls=F.parameters)==null?void 0:ls.docs)==null?void 0:cs.source)})});var ps,gs,ds;N.parameters=r(e({},N.parameters),{docs:r(e({},(ps=N.parameters)==null?void 0:ps.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: true,
    closable: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ds=(gs=N.parameters)==null?void 0:gs.docs)==null?void 0:ds.source)})});var ms,hs,us;K.parameters=r(e({},K.parameters),{docs:r(e({},(ms=K.parameters)==null?void 0:ms.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    message: <Typography.Text size="base">
        This is a general informational message.{' '}
        <Typography.Link color="ColorText" underline href="#">
          Learn more
        </Typography.Link>
      </Typography.Text>,
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(us=(hs=K.parameters)==null?void 0:hs.docs)==null?void 0:us.source)})});var ys,xs,Ts;R.parameters=r(e({},R.parameters),{docs:r(e({},(ys=R.parameters)==null?void 0:ys.docs),{source:e({originalSource:`{
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
}`},(Ts=(xs=R.parameters)==null?void 0:xs.docs)==null?void 0:Ts.source)})});const Os=["StorybookNote","NoBoldingOrTitlesNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","LongMessageWithIcon","LongMessageWithIconAndClose","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink","ErrorInModal","Default","DefaultWithoutIcon","DefaultWithCloseButton","DefaultWithLink","ErrorAfterSaveInModal"],qs=Object.freeze(Object.defineProperty({__proto__:null,Default:A,DefaultWithCloseButton:N,DefaultWithLink:K,DefaultWithoutIcon:F,Error:f,ErrorAfterSaveInModal:R,ErrorInModal:O,ErrorWithCloseButton:j,ErrorWithExpandCollapse:b,ErrorWithLink:L,ErrorWithoutIcon:v,Info:y,InfoWithCloseButton:S,InfoWithLink:M,InfoWithoutIcon:w,LongMessageWithIcon:k,LongMessageWithIconAndClose:E,NoBoldingOrTitlesNote:u,StorybookNote:h,Success:x,SuccessWithCloseButton:C,SuccessWithLink:W,Warning:T,WarningWithCloseButton:B,WarningWithLink:z,WithCloseButton:I,__namedExportsOrder:Os,default:Ls},Symbol.toStringTag,{value:"Module"}));export{qs as A,F as D,f as E,y as I,h as S,T as W,x as a,j as b,W as c,M as d,z as e,L as f,O as g,R as h};
