var ws=Object.defineProperty,vs=Object.defineProperties;var bs=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Is=Object.prototype.hasOwnProperty,Cs=Object.prototype.propertyIsEnumerable;var $=(t,o,n)=>o in t?ws(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,e=(t,o)=>{for(var n in o||(o={}))Is.call(o,n)&&$(t,n,o[n]);if(U)for(var n of U(o))Cs.call(o,n)&&$(t,n,o[n]);return t},r=(t,o)=>vs(t,bs(o));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{r as i}from"./index-3OP4wdng.js";import{K,F as g,b as a,c as gs,N as ds,u as c}from"./UnauthorizedTooltip-BitbuGxB.js";import"./ErrorStateIcon-DTl1-W_O.js";import"./SuccessStateIcon-C0PDFvsW.js";import"./WarningStateIcon-J0E3cnrH.js";import"./_baseClone-DwBCp-Ss.js";import{ax as ms,am as hs,ay as us,aw as ys,az as p,aA as xs}from"./style-DU2SNM1h.js";const Ss={title:"Components/Feedback/Alert",component:K,args:{banner:!1,showIcon:!1,type:"info",onClose:t=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error","default"]}}},h={render:()=>s.jsx(K,{message:s.jsxs(g,{align:"center",gap:ys,children:[s.jsx(a.Text,{size:"xl",children:"💡"}),s.jsxs(a.Text,{size:"base",children:["Use the"," ",s.jsx(a.Link,{href:"?path=/docs/components-feedback-message--docs",color:"ColorText",children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:us,border:`1px solid ${hs}`,borderRadius:ms,width:"860px",marginBottom:0}})},u={render:()=>s.jsx(K,{message:s.jsxs(g,{align:"center",gap:ys,children:[s.jsx(a.Text,{size:"xl",children:"💡"}),s.jsx(a.Text,{size:"base",children:"We don't use bolding or titles for our alerts."})]}),showIcon:!1,type:"info",style:{backgroundColor:us,border:`1px solid ${hs}`,borderRadius:ms,width:"860px",marginBottom:0}})},y={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},x={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},T={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"860px"}}},f={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"860px"}}},w={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},v={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"860px"}}},b={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:s.jsx(a.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"860px"}}},I={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},C={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},S={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},B={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},j={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},k={args:{type:"success",message:s.jsxs(a.Text,{size:"base",children:["Your changes have been saved successfully."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},E={args:{type:"info",message:s.jsxs(a.Text,{size:"base",children:["This is an informational message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},W={args:{type:"warning",message:s.jsxs(a.Text,{size:"base",children:["This is a warning message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},z={args:{type:"error",message:s.jsxs(a.Text,{size:"base",children:["An error occurred processing your request."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},M={render:()=>{const[t,o]=i.useState(!1),[n,d]=i.useState(""),[P,R]=i.useState(""),[_,X]=i.useState(""),q=()=>{o(!1)},D=()=>{o(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(gs,{type:"default",onClick:()=>o(!0),children:"Open Modal with Info Alert"}),s.jsx(ds,{title:"Save Configuration",open:t,onOk:q,onCancel:D,width:600,okText:"Save",children:s.jsxs(g,{vertical:!0,gap:"middle",children:[s.jsx(a.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(g,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:n,onChange:l=>d(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:P,onChange:l=>R(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:_,onChange:l=>X(l.target.value),placeholder:"Enter value",style:{marginTop:p}})]})]}),s.jsx(K,{type:"info",message:"These settings cannot be changed once saved.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:xs}})]})})]})}},O={args:{type:"default",message:"This is a general informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},L={args:{type:"default",message:"This is a general informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},F={args:{type:"default",message:"This is a general informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},A={args:{type:"default",message:s.jsxs(a.Text,{size:"base",children:["This is a general informational message."," ",s.jsx(a.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!1,style:{marginBottom:0,width:"860px"}}},N={render:()=>{const[t,o]=i.useState(!1),[n,d]=i.useState(!1),[P,R]=i.useState(""),[_,X]=i.useState(""),[q,D]=i.useState(""),l=()=>{d(!0)},Ts=()=>{o(!1),d(!1),R(""),X(""),D("")},fs=()=>{o(!0),d(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(gs,{type:"default",onClick:fs,children:"Open Modal with Error on Save"}),s.jsx(ds,{title:"Save Configuration",open:t,onOk:l,onCancel:Ts,width:600,okText:"Save",children:s.jsxs(g,{vertical:!0,gap:"middle",children:[s.jsx(a.Text,{size:"base",children:"Please review the configuration settings below before saving."}),s.jsxs(g,{vertical:!0,gap:"small",children:[s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 1"}),s.jsx(c,{value:P,onChange:m=>R(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 2"}),s.jsx(c,{value:_,onChange:m=>X(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]}),s.jsxs("div",{children:[s.jsx(a.Text,{size:"base",children:"Field 3"}),s.jsx(c,{value:q,onChange:m=>D(m.target.value),placeholder:"Enter value",style:{marginTop:p}})]})]}),n&&s.jsx(K,{type:"error",message:"Unable to save. Please verify all required permissions are granted.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:xs}})]})})]})}};var V,Y,G;h.parameters=r(e({},h.parameters),{docs:r(e({},(V=h.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
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
}`},(G=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:G.source)})});var H,J,Q;u.parameters=r(e({},u.parameters),{docs:r(e({},(H=u.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
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
}`},(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var Z,ee,se;y.parameters=r(e({},y.parameters),{docs:r(e({},(Z=y.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(se=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:se.source)})});var re,ae,oe;x.parameters=r(e({},x.parameters),{docs:r(e({},(re=x.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source)})});var te,ne,ie;T.parameters=r(e({},T.parameters),{docs:r(e({},(te=T.parameters)==null?void 0:te.docs),{source:e({originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ie=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ie.source)})});var le,ce,pe;f.parameters=r(e({},f.parameters),{docs:r(e({},(le=f.parameters)==null?void 0:le.docs),{source:e({originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source)})});var ge,de,me;w.parameters=r(e({},w.parameters),{docs:r(e({},(ge=w.parameters)==null?void 0:ge.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(me=(de=w.parameters)==null?void 0:de.docs)==null?void 0:me.source)})});var he,ue,ye;v.parameters=r(e({},v.parameters),{docs:r(e({},(he=v.parameters)==null?void 0:he.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ye=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ye.source)})});var xe,Te,fe;b.parameters=r(e({},b.parameters),{docs:r(e({},(xe=b.parameters)==null?void 0:xe.docs),{source:e({originalSource:`{
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
}`},(fe=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:fe.source)})});var we,ve,be;I.parameters=r(e({},I.parameters),{docs:r(e({},(we=I.parameters)==null?void 0:we.docs),{source:e({originalSource:`{
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
}`},(be=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:be.source)})});var Ie,Ce,Se;C.parameters=r(e({},C.parameters),{docs:r(e({},(Ie=C.parameters)==null?void 0:Ie.docs),{source:e({originalSource:`{
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
}`},(Se=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source)})});var Be,je,ke;S.parameters=r(e({},S.parameters),{docs:r(e({},(Be=S.parameters)==null?void 0:Be.docs),{source:e({originalSource:`{
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
}`},(ke=(je=S.parameters)==null?void 0:je.docs)==null?void 0:ke.source)})});var Ee,We,ze;B.parameters=r(e({},B.parameters),{docs:r(e({},(Ee=B.parameters)==null?void 0:Ee.docs),{source:e({originalSource:`{
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
}`},(ze=(We=B.parameters)==null?void 0:We.docs)==null?void 0:ze.source)})});var Me,Oe,Le;j.parameters=r(e({},j.parameters),{docs:r(e({},(Me=j.parameters)==null?void 0:Me.docs),{source:e({originalSource:`{
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
}`},(Le=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source)})});var Fe,Ae,Ne;k.parameters=r(e({},k.parameters),{docs:r(e({},(Fe=k.parameters)==null?void 0:Fe.docs),{source:e({originalSource:`{
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
}`},(Ne=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source)})});var Ke,Re,Xe;E.parameters=r(e({},E.parameters),{docs:r(e({},(Ke=E.parameters)==null?void 0:Ke.docs),{source:e({originalSource:`{
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
}`},(Xe=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:Xe.source)})});var De,Pe,_e;W.parameters=r(e({},W.parameters),{docs:r(e({},(De=W.parameters)==null?void 0:De.docs),{source:e({originalSource:`{
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
}`},(_e=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source)})});var qe,Ue,$e;z.parameters=r(e({},z.parameters),{docs:r(e({},(qe=z.parameters)==null?void 0:qe.docs),{source:e({originalSource:`{
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
}`},($e=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source)})});var Ve,Ye,Ge;M.parameters=r(e({},M.parameters),{docs:r(e({},(Ve=M.parameters)==null?void 0:Ve.docs),{source:e({originalSource:`{
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
}`},(Ge=(Ye=M.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source)})});var He,Je,Qe;O.parameters=r(e({},O.parameters),{docs:r(e({},(He=O.parameters)==null?void 0:He.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(Qe=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source)})});var Ze,es,ss;L.parameters=r(e({},L.parameters),{docs:r(e({},(Ze=L.parameters)==null?void 0:Ze.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`},(ss=(es=L.parameters)==null?void 0:es.docs)==null?void 0:ss.source)})});var rs,as,os;F.parameters=r(e({},F.parameters),{docs:r(e({},(rs=F.parameters)==null?void 0:rs.docs),{source:e({originalSource:`{
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
}`},(os=(as=F.parameters)==null?void 0:as.docs)==null?void 0:os.source)})});var ts,ns,is;A.parameters=r(e({},A.parameters),{docs:r(e({},(ts=A.parameters)==null?void 0:ts.docs),{source:e({originalSource:`{
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
}`},(is=(ns=A.parameters)==null?void 0:ns.docs)==null?void 0:is.source)})});var ls,cs,ps;N.parameters=r(e({},N.parameters),{docs:r(e({},(ls=N.parameters)==null?void 0:ls.docs),{source:e({originalSource:`{
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
}`},(ps=(cs=N.parameters)==null?void 0:cs.docs)==null?void 0:ps.source)})});const Bs=["StorybookNote","NoBoldingOrTitlesNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink","ErrorInModal","Default","DefaultWithoutIcon","DefaultWithCloseButton","DefaultWithLink","ErrorAfterSaveInModal"],As=Object.freeze(Object.defineProperty({__proto__:null,Default:O,DefaultWithCloseButton:F,DefaultWithLink:A,DefaultWithoutIcon:L,Error:f,ErrorAfterSaveInModal:N,ErrorInModal:M,ErrorWithCloseButton:j,ErrorWithExpandCollapse:b,ErrorWithLink:z,ErrorWithoutIcon:v,Info:y,InfoWithCloseButton:S,InfoWithLink:E,InfoWithoutIcon:w,NoBoldingOrTitlesNote:u,StorybookNote:h,Success:x,SuccessWithCloseButton:C,SuccessWithLink:k,Warning:T,WarningWithCloseButton:B,WarningWithLink:W,WithCloseButton:I,__namedExportsOrder:Bs,default:Ss},Symbol.toStringTag,{value:"Module"}));export{As as A,L as D,f as E,y as I,h as S,T as W,x as a,j as b,k as c,E as d,W as e,z as f,M as g,N as h};
