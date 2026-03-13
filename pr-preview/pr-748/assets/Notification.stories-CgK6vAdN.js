var _=Object.defineProperty,D=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var y=(n,t,a)=>t in n?_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,e=(n,t)=>{for(var a in t||(t={}))Y.call(t,a)&&y(n,a,t[a]);if(f)for(var a of f(t))q.call(t,a)&&y(n,a,t[a]);return n},r=(n,t)=>D(n,M(t));import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{$ as X,c as s,K,F as $,b as h,a0 as i}from"./UnauthorizedTooltip-B-SshciL.js";import{ax as x,ay as G,aw as H}from"./style-DU2SNM1h.js";const J={title:"Components/Feedback/Notification",component:X,args:{type:"info",children:o.jsx(s,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,placement:"topRight"},argTypes:{type:{control:"select",options:["info","warning","success","error"]}}},c={render:()=>o.jsx("div",{style:{padding:"1px",background:"linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.12) 100%)",borderRadius:x,width:"100%"},children:o.jsx(K,{message:o.jsxs($,{align:"center",gap:H,children:[o.jsx(h.Text,{size:"xl",children:"💡"}),o.jsxs(h.Text,{size:"base",children:["Use a"," ",o.jsx(h.Link,{href:"?path=/docs/components-feedback-message--docs",color:"ColorText",children:"Message"})," ","for brief, auto-dismissing feedback. Use an"," ",o.jsx(h.Link,{href:"?path=/docs/components-feedback-alert--docs",color:"ColorText",children:"Alert"})," ","for persistent inline messages that are part of the page."]})]}),showIcon:!1,type:"info",style:{backgroundColor:G,border:"none",borderRadius:x,width:"100%",marginBottom:0}})})},d={name:"Action Success",render:()=>{const n=()=>{i.success({message:"Configuration saved",description:"Your changes have been applied and are now active.",duration:3})};return o.jsx(s,{onClick:n,children:"Save Configuration"})}},l={name:"Action Error",render:()=>{const n=()=>{i.error({message:"Failed to save",description:"An error occurred while saving your changes. Please try again.",duration:0})};return o.jsx(s,{onClick:n,children:"Trigger Error"})}},p={name:"Action Warning",render:()=>{const n=()=>{i.warning({message:"Review required",description:"Some settings may affect existing data. Review before continuing.",duration:3})};return o.jsx(s,{onClick:n,children:"Trigger Warning"})}},u={name:"Action Info",render:()=>{const n=()=>{i.info({message:"New update available",description:"A new version is available. Refresh the page to get the latest features.",duration:3})};return o.jsx(s,{onClick:n,children:"Show Info"})}},g={name:"With Action Button",render:()=>{const n=()=>{i.success({message:"Export complete",description:"Your data export is ready to download.",duration:0,btn:o.jsx(s,{size:"small",type:"primary",children:"Download"})})};return o.jsx(s,{onClick:n,children:"Export Data"})}},m={name:"Title Only",render:()=>{const n=()=>{i.success({message:"Profile updated",duration:3})};return o.jsx(s,{onClick:n,children:"Update Profile"})}};var b,k,w;c.parameters=r(e({},c.parameters),{docs:r(e({},(b=c.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
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
}`},(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source)})});var T,A,S;d.parameters=r(e({},d.parameters),{docs:r(e({},(T=d.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
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
}`},(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source)})});var v,C,B;l.parameters=r(e({},l.parameters),{docs:r(e({},(v=l.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
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
}`},(B=(C=l.parameters)==null?void 0:C.docs)==null?void 0:B.source)})});var j,E,N;p.parameters=r(e({},p.parameters),{docs:r(e({},(j=p.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
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
}`},(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source)})});var R,W,I;u.parameters=r(e({},u.parameters),{docs:r(e({},(R=u.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
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
}`},(I=(W=u.parameters)==null?void 0:W.docs)==null?void 0:I.source)})});var z,L,F;g.parameters=r(e({},g.parameters),{docs:r(e({},(z=g.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
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
}`},(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source)})});var O,P,U;m.parameters=r(e({},m.parameters),{docs:r(e({},(O=m.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
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
}`},(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source)})});const Q=["StorybookNote","ActionSuccess","ActionError","ActionWarning","ActionInfo","WithActionButton","TitleOnly"],re=Object.freeze(Object.defineProperty({__proto__:null,ActionError:l,ActionInfo:u,ActionSuccess:d,ActionWarning:p,StorybookNote:c,TitleOnly:m,WithActionButton:g,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{re as N,J as m};
