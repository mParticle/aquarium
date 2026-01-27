import{ap as c,j as e,i,F as p,T as o}from"./iframe-B6Y2oegk.js";const{expect:u,screen:r,userEvent:a}=__STORYBOOK_MODULE_TEST__,l={title:"Components/Feedback/Popconfirm",component:c,tags:["play-test-validation"],args:{}},t={args:{title:e.jsx(e.Fragment,{children:e.jsxs(p,{gap:8,children:[e.jsx(o.Text,{strong:!0,children:"Audience Fault"}),e.jsx(o.Text,{children:"Dec 09 2024, 13:04:51"})]})}),description:"We were unable to forward this audience because the connection has been marked as faulted.",trigger:"hover",placement:"bottom",showCancel:!1,okText:"Resume",overlayInnerStyle:{maxWidth:"320px"},children:e.jsx(i,{children:"Show popconfirm"})},play:async()=>{const s=r.getByText("Show popconfirm");await a.hover(s);const n=await r.findByText("Resume");await u(n).toBeInTheDocument(),await a.click(n)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const m=["Primary"],h=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{h as P,l as m};
