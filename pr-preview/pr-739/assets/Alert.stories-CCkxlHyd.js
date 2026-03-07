import{b5 as L,j as e,b6 as _,h as q,b7 as U,F as i,aX as $,T as s,aG as r,k as V,bd as Y,aQ as t,be as n,bf as G}from"./iframe-C7CELkLE.js";const J={title:"Components/Feedback/Alert",component:L,args:{banner:!1,showIcon:!1,type:"info",onClose:F=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error","default"]}}},p={render:()=>e.jsx(L,{message:e.jsxs(i,{align:"center",gap:$,children:[e.jsx(s.Text,{size:"xl",children:"💡"}),e.jsxs(s.Text,{size:"base",children:["Use the"," ",e.jsx(s.Link,{href:"?path=/docs/components-feedback-message--docs",color:"ColorText",children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:U,border:`1px solid ${q}`,borderRadius:_,width:"860px",marginBottom:0}})},g={render:()=>e.jsx(L,{message:e.jsxs(i,{align:"center",gap:$,children:[e.jsx(s.Text,{size:"xl",children:"💡"}),e.jsx(s.Text,{size:"base",children:"We don't use bolding or titles for our alerts."})]}),showIcon:!1,type:"info",style:{backgroundColor:U,border:`1px solid ${q}`,borderRadius:_,width:"860px",marginBottom:0}})},d={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},m={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},h={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"860px"}}},u={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"860px"}}},y={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},x={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"860px"}}},T={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:e.jsx(s.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"860px"}}},f={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},w={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},b={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},v={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},I={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},C={args:{type:"success",message:e.jsxs(s.Text,{size:"base",children:["Your changes have been saved successfully."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},S={args:{type:"info",message:e.jsxs(s.Text,{size:"base",children:["This is an informational message."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},B={args:{type:"warning",message:e.jsxs(s.Text,{size:"base",children:["This is a warning message."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},k={args:{type:"error",message:e.jsxs(s.Text,{size:"base",children:["An error occurred processing your request."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},j={render:()=>{const[F,o]=r.useState(!1),[R,l]=r.useState(""),[X,A]=r.useState(""),[D,N]=r.useState(""),P=()=>{o(!1)},K=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(V,{type:"default",onClick:()=>o(!0),children:"Open Modal with Info Alert"}),e.jsx(Y,{title:"Save Configuration",open:F,onOk:P,onCancel:K,width:600,okText:"Save",children:e.jsxs(i,{vertical:!0,gap:"middle",children:[e.jsx(s.Text,{size:"base",children:"Please review the configuration settings below before saving."}),e.jsxs(i,{vertical:!0,gap:"small",children:[e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 1"}),e.jsx(t,{value:R,onChange:a=>l(a.target.value),placeholder:"Enter value",style:{marginTop:n}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 2"}),e.jsx(t,{value:X,onChange:a=>A(a.target.value),placeholder:"Enter value",style:{marginTop:n}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 3"}),e.jsx(t,{value:D,onChange:a=>N(a.target.value),placeholder:"Enter value",style:{marginTop:n}})]})]}),e.jsx(L,{type:"info",message:"These settings cannot be changed once saved.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:G}})]})})]})}},E={args:{type:"default",message:"This is a general informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},W={args:{type:"default",message:"This is a general informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},M={args:{type:"default",message:"This is a general informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},z={args:{type:"default",message:e.jsxs(s.Text,{size:"base",children:["This is a general informational message."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!1,style:{marginBottom:0,width:"860px"}}},O={render:()=>{const[F,o]=r.useState(!1),[R,l]=r.useState(!1),[X,A]=r.useState(""),[D,N]=r.useState(""),[P,K]=r.useState(""),a=()=>{l(!0)},Q=()=>{o(!1),l(!1),A(""),N(""),K("")},H=()=>{o(!0),l(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(V,{type:"default",onClick:H,children:"Open Modal with Error on Save"}),e.jsx(Y,{title:"Save Configuration",open:F,onOk:a,onCancel:Q,width:600,okText:"Save",children:e.jsxs(i,{vertical:!0,gap:"middle",children:[e.jsx(s.Text,{size:"base",children:"Please review the configuration settings below before saving."}),e.jsxs(i,{vertical:!0,gap:"small",children:[e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 1"}),e.jsx(t,{value:X,onChange:c=>A(c.target.value),placeholder:"Enter value",style:{marginTop:n}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 2"}),e.jsx(t,{value:D,onChange:c=>N(c.target.value),placeholder:"Enter value",style:{marginTop:n}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 3"}),e.jsx(t,{value:P,onChange:c=>K(c.target.value),placeholder:"Enter value",style:{marginTop:n}})]})]}),R&&e.jsx(L,{type:"error",message:"Unable to save. Please verify all required permissions are granted.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:G}})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Z=["StorybookNote","NoBoldingOrTitlesNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink","ErrorInModal","Default","DefaultWithoutIcon","DefaultWithCloseButton","DefaultWithLink","ErrorAfterSaveInModal"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:E,DefaultWithCloseButton:M,DefaultWithLink:z,DefaultWithoutIcon:W,Error:u,ErrorAfterSaveInModal:O,ErrorInModal:j,ErrorWithCloseButton:I,ErrorWithExpandCollapse:T,ErrorWithLink:k,ErrorWithoutIcon:x,Info:d,InfoWithCloseButton:b,InfoWithLink:S,InfoWithoutIcon:y,NoBoldingOrTitlesNote:g,StorybookNote:p,Success:m,SuccessWithCloseButton:w,SuccessWithLink:C,Warning:h,WarningWithCloseButton:v,WarningWithLink:B,WithCloseButton:f,__namedExportsOrder:Z,default:J},Symbol.toStringTag,{value:"Module"}));export{se as A,W as D,u as E,d as I,p as S,h as W,m as a,I as b,C as c,S as d,B as e,k as f,j as g,O as h};
