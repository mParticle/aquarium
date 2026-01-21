import{j as e}from"./jsx-runtime-u17CrQMm.js";import{W as t,c as i,K as l,F as u,b as c}from"./UnauthorizedTooltip-C-uexwNG.js";import{B as d,u as g,t as p}from"./style-BLGxefMg.js";const m={title:"Components/Feedback/Message",component:t,args:{children:e.jsx(i,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},r={render:()=>e.jsx("div",{style:{padding:"1px",background:"linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.12) 100%)",borderRadius:d,width:"100%"},children:e.jsx(l,{message:e.jsxs(u,{align:"center",gap:p,children:[e.jsx(c.Text,{size:"xl",children:"💡"}),e.jsxs(c.Text,{size:"base",children:["Use an"," ",e.jsx(c.Link,{href:"?path=/docs/components-feedback-alert--docs",underline:!0,children:"Alert"})," ","if the message is critical and needs to be persistent until the user dismisses or acts on it."]})]}),showIcon:!1,type:"info",style:{backgroundColor:g,border:"none",borderRadius:d,width:"100%",marginBottom:0}})})},o={name:"Action Success",render:()=>{const n=()=>{t.success({content:"Action completed successfully",duration:3})};return e.jsx(i,{onClick:n,children:"Action Success"})}},s={name:"Action Failure",render:()=>{const n=()=>{t.error({content:"Action failed. Please try again.",duration:3})};return e.jsx(i,{onClick:n,children:"Action Failure"})}},a={name:"Action Warning",render:()=>{const n=()=>{t.warning({content:"Please review your changes before proceeding.",duration:3})};return e.jsx(i,{onClick:n,children:"Action Warning"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
                Use an{' '}
                <Typography.Link href="?path=/docs/components-feedback-alert--docs" underline>
                  Alert
                </Typography.Link>{' '}
                if the message is critical and needs to be persistent until the user dismisses or acts on it.
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Action Success',
  render: () => {
    const handleSuccess = () => {
      void Message.success({
        content: 'Action completed successfully',
        duration: 3
      });
    };
    return <Button onClick={handleSuccess}>Action Success</Button>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Action Failure',
  render: () => {
    const handleFailure = () => {
      void Message.error({
        content: 'Action failed. Please try again.',
        duration: 3
      });
    };
    return <Button onClick={handleFailure}>Action Failure</Button>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Action Warning',
  render: () => {
    const handleWarning = () => {
      void Message.warning({
        content: 'Please review your changes before proceeding.',
        duration: 3
      });
    };
    return <Button onClick={handleWarning}>Action Warning</Button>;
  }
}`,...a.parameters?.docs?.source}}};const h=["StorybookNote","ConfirmationSuccess","ConfirmationFailure","ConfirmationWarning"],x=Object.freeze(Object.defineProperty({__proto__:null,ConfirmationFailure:s,ConfirmationSuccess:o,ConfirmationWarning:a,StorybookNote:r,__namedExportsOrder:h,default:m},Symbol.toStringTag,{value:"Module"}));export{o as C,x as M,r as S,s as a,a as b};
