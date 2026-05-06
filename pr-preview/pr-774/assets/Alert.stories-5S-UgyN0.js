import{ac as q,j as e,p as J,ad as Q,ae as Z,F as l,$ as ee,T as s,X as a,i as t,an as se,a2 as n,w as i,s as ae}from"./iframe-FEOso3HU.js";const oe={title:"Components/Feedback/Alert",component:q,args:{banner:!1,showIcon:!1,type:"info",onClose:P=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error","default"]}}},g={render:()=>e.jsx(q,{message:e.jsxs(l,{align:"center",gap:ee,children:[e.jsx(s.Text,{size:"xl",children:"💡"}),e.jsxs(s.Text,{size:"base",children:["Use the"," ",e.jsx(s.Link,{href:"?path=/docs/components-feedback-message--docs",color:"ColorText",children:"Message component"})," ","if the notification should dismiss automatically."]})]}),showIcon:!1,type:"info",style:{backgroundColor:Z,border:`1px solid ${Q}`,borderRadius:J,width:"860px",marginBottom:0}})},m={render:()=>e.jsx(q,{message:e.jsxs(l,{align:"center",gap:ee,children:[e.jsx(s.Text,{size:"xl",children:"💡"}),e.jsx(s.Text,{size:"base",children:"We don't use bolding or titles for our alerts."})]}),showIcon:!1,type:"info",style:{backgroundColor:Z,border:`1px solid ${Q}`,borderRadius:J,width:"860px",marginBottom:0}})},d={args:{type:"info",message:"This is an informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},u={args:{type:"success",message:"This is a success message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},h={args:{message:"This is a warning message.",type:"warning",showIcon:!0,style:{marginBottom:0,width:"860px"}}},y={args:{message:"This is an error message.",type:"error",showIcon:!0,style:{marginBottom:0,width:"860px"}}},x={args:{type:"info",message:"This is an informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},f={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1,style:{marginBottom:0,width:"860px"}}},T={args:{type:"error",expandable:!0,closable:!0,message:"This is an error message.",expandableContent:e.jsx(s.Text,{size:"base",children:"Error details go here"}),style:{marginBottom:0,width:"860px"}}},w={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},v={args:{type:"success",message:"This is a success message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},B={args:{type:"info",message:"This is an informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},I={args:{type:"warning",message:"This is a warning message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},b={args:{type:"error",message:"This is an error message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},S={args:{type:"info",message:"This is a long informational message that wraps onto multiple lines to demonstrate that the icon remains top-aligned rather than centered vertically.",showIcon:!0,style:{marginBottom:0,width:"400px"}}},C={args:{type:"warning",message:"This is a long warning message that wraps onto multiple lines to demonstrate that both the icon and close button remain top-aligned rather than centered vertically.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"400px"}}},j={args:{type:"success",message:e.jsxs(s.Text,{size:"base",children:["Your changes have been saved successfully."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"View details"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},W={args:{type:"info",message:e.jsxs(s.Text,{size:"base",children:["This is an informational message."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},k={args:{type:"warning",message:e.jsxs(s.Text,{size:"base",children:["This is a warning message."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Review settings"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},E={args:{type:"error",message:e.jsxs(s.Text,{size:"base",children:["An error occurred processing your request."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Try again"})]}),showIcon:!0,style:{marginBottom:0,width:"860px"}}},z={render:()=>{const[P,o]=a.useState(!1),[Y,c]=a.useState(""),[V,_]=a.useState(""),[G,U]=a.useState(""),H=()=>{o(!1)},$=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"default",onClick:()=>o(!0),children:"Open Modal with Info Alert"}),e.jsx(se,{title:"Save Configuration",open:P,onOk:H,onCancel:$,width:600,okText:"Save",children:e.jsxs(l,{vertical:!0,gap:"middle",children:[e.jsx(s.Text,{size:"base",children:"Please review the configuration settings below before saving."}),e.jsxs(l,{vertical:!0,gap:"small",children:[e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 1"}),e.jsx(n,{value:Y,onChange:r=>c(r.target.value),placeholder:"Enter value",style:{marginTop:i}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 2"}),e.jsx(n,{value:V,onChange:r=>_(r.target.value),placeholder:"Enter value",style:{marginTop:i}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 3"}),e.jsx(n,{value:G,onChange:r=>U(r.target.value),placeholder:"Enter value",style:{marginTop:i}})]})]}),e.jsx(q,{type:"info",message:"These settings cannot be changed once saved.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:ae}})]})})]})}},M={args:{type:"default",message:"This is a general informational message.",showIcon:!0,style:{marginBottom:0,width:"860px"}}},L={args:{type:"default",message:"This is a general informational message.",showIcon:!1,style:{marginBottom:0,width:"860px"}}},O={args:{type:"default",message:"This is a general informational message.",showIcon:!0,closable:!0,style:{marginBottom:0,width:"860px"}}},A={args:{type:"default",message:e.jsxs(s.Text,{size:"base",children:["This is a general informational message."," ",e.jsx(s.Link,{color:"ColorText",underline:!0,href:"#",children:"Learn more"})]}),showIcon:!1,style:{marginBottom:0,width:"860px"}}},F={args:{type:"info",message:"This is an informational message.",showIcon:!0,action:e.jsx(t,{size:"small",type:"default",children:"Learn More"}),style:{marginBottom:0,width:"860px"}}},N={args:{type:"success",message:"Your changes have been saved successfully.",showIcon:!0,action:e.jsx(t,{size:"small",type:"default",children:"Undo"}),style:{marginBottom:0,width:"860px"}}},R={args:{type:"warning",message:"This action requires additional permissions.",showIcon:!0,action:e.jsx(t,{size:"small",type:"default",children:"Review"}),style:{marginBottom:0,width:"860px"}}},D={args:{type:"error",message:"An error occurred processing your request.",showIcon:!0,action:e.jsx(t,{size:"small",danger:!0,children:"Retry"}),style:{marginBottom:0,width:"860px"}}},K={args:{type:"default",message:"This is a general informational message.",showIcon:!0,action:e.jsx(t,{size:"small",type:"default",children:"Details"}),style:{marginBottom:0,width:"860px"}}},X={render:()=>{const[P,o]=a.useState(!1),[Y,c]=a.useState(!1),[V,_]=a.useState(""),[G,U]=a.useState(""),[H,$]=a.useState(""),r=()=>{c(!0)},re=()=>{o(!1),c(!1),_(""),U(""),$("")},te=()=>{o(!0),c(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"default",onClick:te,children:"Open Modal with Error on Save"}),e.jsx(se,{title:"Save Configuration",open:P,onOk:r,onCancel:re,width:600,okText:"Save",children:e.jsxs(l,{vertical:!0,gap:"middle",children:[e.jsx(s.Text,{size:"base",children:"Please review the configuration settings below before saving."}),e.jsxs(l,{vertical:!0,gap:"small",children:[e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 1"}),e.jsx(n,{value:V,onChange:p=>_(p.target.value),placeholder:"Enter value",style:{marginTop:i}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 2"}),e.jsx(n,{value:G,onChange:p=>U(p.target.value),placeholder:"Enter value",style:{marginTop:i}})]}),e.jsxs("div",{children:[e.jsx(s.Text,{size:"base",children:"Field 3"}),e.jsx(n,{value:H,onChange:p=>$(p.target.value),placeholder:"Enter value",style:{marginTop:i}})]})]}),Y&&e.jsx(q,{type:"error",message:"Unable to save. Please verify all required permissions are granted.",showIcon:!0,closable:!1,style:{marginBottom:0,marginTop:ae}})]})})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is a warning message.',
    type: 'warning',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is an error message.',
    type: 'error',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is a long informational message that wraps onto multiple lines to demonstrate that the icon remains top-aligned rather than centered vertically.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '400px'
    }
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: true,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: false,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational message.',
    showIcon: true,
    action: <Button size="small" type="default">
        Learn More
      </Button>,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'Your changes have been saved successfully.',
    showIcon: true,
    action: <Button size="small" type="default">
        Undo
      </Button>,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'This action requires additional permissions.',
    showIcon: true,
    action: <Button size="small" type="default">
        Review
      </Button>,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'An error occurred processing your request.',
    showIcon: true,
    action: <Button size="small" danger>
        Retry
      </Button>,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...D.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    message: 'This is a general informational message.',
    showIcon: true,
    action: <Button size="small" type="default">
        Details
      </Button>,
    style: {
      marginBottom: 0,
      width: '860px'
    }
  }
}`,...K.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};const ne=["StorybookNote","NoBoldingOrTitlesNote","Info","Success","Warning","Error","InfoWithoutIcon","ErrorWithoutIcon","ErrorWithExpandCollapse","WithCloseButton","SuccessWithCloseButton","InfoWithCloseButton","WarningWithCloseButton","ErrorWithCloseButton","LongMessageWithIcon","LongMessageWithIconAndClose","SuccessWithLink","InfoWithLink","WarningWithLink","ErrorWithLink","ErrorInModal","Default","DefaultWithoutIcon","DefaultWithCloseButton","DefaultWithLink","InfoWithButton","SuccessWithButton","WarningWithButton","ErrorWithButton","DefaultWithButton","ErrorAfterSaveInModal"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:M,DefaultWithButton:K,DefaultWithCloseButton:O,DefaultWithLink:A,DefaultWithoutIcon:L,Error:y,ErrorAfterSaveInModal:X,ErrorInModal:z,ErrorWithButton:D,ErrorWithCloseButton:b,ErrorWithExpandCollapse:T,ErrorWithLink:E,ErrorWithoutIcon:f,Info:d,InfoWithButton:F,InfoWithCloseButton:B,InfoWithLink:W,InfoWithoutIcon:x,LongMessageWithIcon:S,LongMessageWithIconAndClose:C,NoBoldingOrTitlesNote:m,StorybookNote:g,Success:u,SuccessWithButton:N,SuccessWithCloseButton:v,SuccessWithLink:j,Warning:h,WarningWithButton:R,WarningWithCloseButton:I,WarningWithLink:k,WithCloseButton:w,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{le as A,L as D,y as E,d as I,g as S,h as W,u as a,b,j as c,W as d,k as e,E as f,F as g,N as h,R as i,D as j,K as k,z as l,X as m};
