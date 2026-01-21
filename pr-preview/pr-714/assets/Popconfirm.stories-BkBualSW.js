import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a0 as c,c as i,F as p,b as o}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";const{expect:m,screen:r,userEvent:a}=__STORYBOOK_MODULE_TEST__,u={title:"Components/Feedback/Popconfirm",component:c,tags:["play-test-validation"],args:{}},t={args:{title:e.jsx(e.Fragment,{children:e.jsxs(p,{gap:8,children:[e.jsx(o.Text,{strong:!0,children:"Audience Fault"}),e.jsx(o.Text,{children:"Dec 09 2024, 13:04:51"})]})}),description:"We were unable to forward this audience because the connection has been marked as faulted.",trigger:"hover",placement:"bottom",showCancel:!1,okText:"Resume",overlayInnerStyle:{maxWidth:"320px"},children:e.jsx(i,{children:"Show popconfirm"})},play:async()=>{const s=r.getByText("Show popconfirm");await a.hover(s);const n=await r.findByText("Resume");await m(n).toBeInTheDocument(),await a.click(n)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: <>
        <Flex gap={8}>
          <Typography.Text strong>Audience Fault</Typography.Text>
          <Typography.Text>Dec 09 2024, 13:04:51</Typography.Text>
        </Flex>
      </>,
    description: 'We were unable to forward this audience because the connection has been marked as faulted.',
    trigger: 'hover',
    placement: 'bottom',
    showCancel: false,
    okText: 'Resume',
    overlayInnerStyle: {
      maxWidth: '320px'
    },
    children: <Button>Show popconfirm</Button>
  },
  play: async () => {
    const triggerButton = screen.getByText('Show popconfirm');
    await userEvent.hover(triggerButton);
    const resumeButton = await screen.findByText('Resume');
    await expect(resumeButton).toBeInTheDocument();
    await userEvent.click(resumeButton);
  }
}`,...t.parameters?.docs?.source}}};const l=["Primary"],T=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{T as P,u as m};
