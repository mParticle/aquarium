import{j as s,p as a,F as n}from"./iframe-DTyONns5.js";import{F as o}from"./index-CzPvOuEC.js";import"./preload-helper-PPVm8Dsz.js";import"./pickAttrs-o6W_PdTd.js";import"./genStyleUtils-fAClvXgB.js";import"./index-DbSgaFpO.js";import"./useLocale-CWXA9DYe.js";import"./omit-Bn5Yd3vU.js";import"./use-proxy-imperative-handle-CCDEocSa.js";const x={title:"Components/AI/Bubble",component:o,decorators:[r=>s.jsx(a,{children:s.jsx(r,{})})]},e={args:{content:"Hello! How can I help you today?"}},t={render:()=>s.jsx(n,{vertical:!0,gap:"middle",style:{maxWidth:600},children:s.jsx(o.List,{items:[{key:"1",content:"Can you explain how to use this component?",role:"user",placement:"end"},{key:"2",content:"The Bubble component renders chat messages. Use Bubble.List for conversations with multiple messages.",role:"assistant",placement:"start"}]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Hello! How can I help you today?'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap="middle" style={{
    maxWidth: 600
  }}>
      <Bubble.List items={[{
      key: '1',
      content: 'Can you explain how to use this component?',
      role: 'user',
      placement: 'end'
    }, {
      key: '2',
      content: 'The Bubble component renders chat messages. Use Bubble.List for conversations with multiple messages.',
      role: 'assistant',
      placement: 'start'
    }]} />
    </Flex>
}`,...t.parameters?.docs?.source}}};const y=["Basic","BubbleList"];export{e as Basic,t as BubbleList,y as __namedExportsOrder,x as default};
