var T=Object.defineProperty,f=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(t,s,o)=>s in t?T(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,a=(t,s)=>{for(var o in s||(s={}))v.call(s,o)&&h(t,o,s[o]);if(d)for(var o of d(s))b.call(s,o)&&h(t,o,s[o]);return t},g=(t,s)=>f(t,j(s));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{V as p,e as r,F as n,c as i}from"./NavigationItemsService-Cw-gaXrt.js";import{n as l,aS as u,C as S,h as M,av as k,$ as C}from"./style-DvQeleTo.js";import"./index-3OP4wdng.js";import"./ErrorStateIcon-yI-S_MHh.js";import"./WarningFilled-D6ijQqgK.js";import"./extends-CF3RwP-h.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-9m6zPO1f.js";import"./WarningStateIcon-C3faPBwp.js";import"./LightTheme-vAO8T2BA.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";const G={title:"POC/Message Notifications",component:p},c={render:()=>{const t=()=>{p.error({content:e.jsxs(n,{vertical:!0,gap:l,align:"flex-start",children:[e.jsx(i.Text,{strong:!0,children:"This project has been unpublished"}),e.jsx(i.Text,{type:"secondary",children:"Removing all users has unpublished this project. Add users to republish."}),e.jsx(r,{type:"link",style:{padding:0,height:"auto",color:S,marginTop:u},children:"Undo action"})]}),duration:0,className:"message-notification-custom message-notification-error"}),setTimeout(()=>{p.warning({content:e.jsxs(n,{vertical:!0,gap:l,align:"flex-start",children:[e.jsx(i.Text,{strong:!0,children:"This project has been unpublished"}),e.jsx(i.Text,{type:"secondary",children:"Removing all users has unpublished this project. Add users to republish."}),e.jsx(r,{type:"link",style:{padding:0,height:"auto",color:M,marginTop:u},children:"Undo action"})]}),duration:0,className:"message-notification-custom message-notification-warning"})},100),setTimeout(()=>{p.success({content:e.jsxs(n,{vertical:!0,gap:l,align:"flex-start",children:[e.jsx(i.Text,{strong:!0,children:"Successfully updated profile"}),e.jsx(i.Text,{type:"secondary",children:"Your changes have been saved and your profile is live. Your team can make edits."}),e.jsxs(n,{gap:l,style:{marginTop:u},children:[e.jsx(r,{type:"link",style:{padding:0,height:"auto",color:k},children:"Dismiss"}),e.jsx(r,{type:"link",style:{padding:0,height:"auto",color:C},children:"View changes"})]})]}),duration:0,className:"message-notification-custom message-notification-success"})},200)};return e.jsx(r,{onClick:t,children:"Show All Messages"})}};var m,y,x;c.parameters=g(a({},c.parameters),{docs:g(a({},(m=c.parameters)==null?void 0:m.docs),{source:a({originalSource:`{
  render: () => {
    const showAllMessages = () => {
      // Error
      void Message.error({
        content: <Flex vertical gap={SizeXs} align="flex-start">
            <Typography.Text strong>This project has been unpublished</Typography.Text>
            <Typography.Text type="secondary">
              Removing all users has unpublished this project. Add users to republish.
            </Typography.Text>
            <Button type="link" style={{
            padding: 0,
            height: 'auto',
            color: ColorError,
            marginTop: MarginXxs
          }}>
              Undo action
            </Button>
          </Flex>,
        duration: 0,
        className: 'message-notification-custom message-notification-error'
      });

      // Warning
      setTimeout(() => {
        void Message.warning({
          content: <Flex vertical gap={SizeXs} align="flex-start">
              <Typography.Text strong>This project has been unpublished</Typography.Text>
              <Typography.Text type="secondary">
                Removing all users has unpublished this project. Add users to republish.
              </Typography.Text>
              <Button type="link" style={{
              padding: 0,
              height: 'auto',
              color: ColorWarning,
              marginTop: MarginXxs
            }}>
                Undo action
              </Button>
            </Flex>,
          duration: 0,
          className: 'message-notification-custom message-notification-warning'
        });
      }, 100);

      // Success
      setTimeout(() => {
        void Message.success({
          content: <Flex vertical gap={SizeXs} align="flex-start">
              <Typography.Text strong>Successfully updated profile</Typography.Text>
              <Typography.Text type="secondary">
                Your changes have been saved and your profile is live. Your team can make edits.
              </Typography.Text>
              <Flex gap={SizeXs} style={{
              marginTop: MarginXxs
            }}>
                <Button type="link" style={{
                padding: 0,
                height: 'auto',
                color: ColorTextSecondary
              }}>
                  Dismiss
                </Button>
                <Button type="link" style={{
                padding: 0,
                height: 'auto',
                color: ColorSuccess
              }}>
                  View changes
                </Button>
              </Flex>
            </Flex>,
          duration: 0,
          className: 'message-notification-custom message-notification-success'
        });
      }, 200);
    };
    return <Button onClick={showAllMessages}>Show All Messages</Button>;
  }
}`},(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source)})});const H=["AllStates"];export{c as AllStates,H as __namedExportsOrder,G as default};
