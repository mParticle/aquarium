import{j as e,br as g,k as r,ba as p,b9 as m,bb as h,F as f,aY as y,T as u,bs as o}from"./iframe-CgOF2mMQ.js";const b={title:"Components/Feedback/Notification",component:g,args:{type:"info",children:e.jsx(r,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,placement:"topRight"},argTypes:{type:{control:"select",options:["info","warning","success","error"]}}},t={render:()=>e.jsx("div",{style:{padding:"1px",background:"linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.12) 100%)",borderRadius:p,width:"100%"},children:e.jsx(m,{message:e.jsxs(f,{align:"center",gap:y,children:[e.jsx(u.Text,{size:"xl",children:"💡"}),e.jsxs(u.Text,{size:"base",children:["Use a"," ",e.jsx(u.Link,{href:"?path=/docs/components-feedback-message--docs",color:"ColorText",children:"Message"})," ","for brief, auto-dismissing feedback. Use an"," ",e.jsx(u.Link,{href:"?path=/docs/components-feedback-alert--docs",color:"ColorText",children:"Alert"})," ","for persistent inline messages that are part of the page."]})]}),showIcon:!1,type:"info",style:{backgroundColor:h,border:"none",borderRadius:p,width:"100%",marginBottom:0}})})},a={name:"Action Success",render:()=>{const n=()=>{o.success({message:"Configuration saved",description:"Your changes have been applied and are now active.",duration:3})};return e.jsx(r,{onClick:n,children:"Save Configuration"})}},s={name:"Action Error",render:()=>{const n=()=>{o.error({message:"Failed to save",description:"An error occurred while saving your changes. Please try again.",duration:0})};return e.jsx(r,{onClick:n,children:"Trigger Error"})}},i={name:"Action Warning",render:()=>{const n=()=>{o.warning({message:"Review required",description:"Some settings may affect existing data. Review before continuing.",duration:3})};return e.jsx(r,{onClick:n,children:"Trigger Warning"})}},c={name:"Action Info",render:()=>{const n=()=>{o.info({message:"New update available",description:"A new version is available. Refresh the page to get the latest features.",duration:3})};return e.jsx(r,{onClick:n,children:"Show Info"})}},d={name:"With Action Button",render:()=>{const n=()=>{o.success({message:"Export complete",description:"Your data export is ready to download.",duration:0,btn:e.jsx(r,{size:"small",type:"primary",children:"Download"})})};return e.jsx(r,{onClick:n,children:"Export Data"})}},l={name:"Title Only",render:()=>{const n=()=>{o.success({message:"Profile updated",duration:3})};return e.jsx(r,{onClick:n,children:"Update Profile"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: '1px',
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.12) 100%)',
      borderRadius: BorderRadiusLg,
      width: '100%'
    }}>
        <Alert message={<Flex align="center" gap={SizeXs}>
              <Typography.Text size="xl">💡</Typography.Text>
              <Typography.Text size="base">
                Use a{' '}
                <Typography.Link href="?path=/docs/components-feedback-message--docs" color="ColorText">
                  Message
                </Typography.Link>{' '}
                for brief, auto-dismissing feedback. Use an{' '}
                <Typography.Link href="?path=/docs/components-feedback-alert--docs" color="ColorText">
                  Alert
                </Typography.Link>{' '}
                for persistent inline messages that are part of the page.
              </Typography.Text>
            </Flex>} showIcon={false} type="info" style={{
        backgroundColor: ColorWhite,
        border: 'none',
        borderRadius: BorderRadiusLg,
        width: '100%',
        marginBottom: 0
      }} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Action Success',
  render: () => {
    const handleSuccess = () => {
      notification.success({
        message: 'Configuration saved',
        description: 'Your changes have been applied and are now active.',
        duration: 3
      });
    };
    return <Button onClick={handleSuccess}>Save Configuration</Button>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Action Error',
  render: () => {
    const handleError = () => {
      notification.error({
        message: 'Failed to save',
        description: 'An error occurred while saving your changes. Please try again.',
        duration: 0
      });
    };
    return <Button onClick={handleError}>Trigger Error</Button>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Action Warning',
  render: () => {
    const handleWarning = () => {
      notification.warning({
        message: 'Review required',
        description: 'Some settings may affect existing data. Review before continuing.',
        duration: 3
      });
    };
    return <Button onClick={handleWarning}>Trigger Warning</Button>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Action Info',
  render: () => {
    const handleInfo = () => {
      notification.info({
        message: 'New update available',
        description: 'A new version is available. Refresh the page to get the latest features.',
        duration: 3
      });
    };
    return <Button onClick={handleInfo}>Show Info</Button>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Action Button',
  render: () => {
    const handleNotification = () => {
      notification.success({
        message: 'Export complete',
        description: 'Your data export is ready to download.',
        duration: 0,
        btn: <Button size="small" type="primary">
            Download
          </Button>
      });
    };
    return <Button onClick={handleNotification}>Export Data</Button>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => {
    const handleNotification = () => {
      notification.success({
        message: 'Profile updated',
        duration: 3
      });
    };
    return <Button onClick={handleNotification}>Update Profile</Button>;
  }
}`,...l.parameters?.docs?.source}}};const x=["StorybookNote","ActionSuccess","ActionError","ActionWarning","ActionInfo","WithActionButton","TitleOnly"],T=Object.freeze(Object.defineProperty({__proto__:null,ActionError:s,ActionInfo:c,ActionSuccess:a,ActionWarning:i,StorybookNote:t,TitleOnly:l,WithActionButton:d,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{T as N,b as m};
