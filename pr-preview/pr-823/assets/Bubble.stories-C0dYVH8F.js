import{j as s,p as a,F as n}from"./iframe-B4AaWGJ1.js";import{F as o}from"./index-2MRehYpT.js";import"./preload-helper-PPVm8Dsz.js";import"./pickAttrs-4bdAm3gh.js";import"./genStyleUtils-BmePceeH.js";import"./index-HAet8Vdy.js";import"./useLocale-CXSWFULT.js";import"./omit-Bt_-TTXy.js";import"./use-proxy-imperative-handle-DLS5Z-5a.js";const x={title:"Components/AI/Bubble",component:o,decorators:[r=>s.jsx(a,{children:s.jsx(r,{})})]},e={args:{content:"Hello! How can I help you today?"}},t={render:()=>s.jsx(n,{vertical:!0,gap:"middle",style:{maxWidth:600},children:s.jsx(o.List,{items:[{key:"1",content:"Can you explain how to use this component?",role:"user",placement:"end"},{key:"2",content:"The Bubble component renders chat messages. Use Bubble.List for conversations with multiple messages.",role:"assistant",placement:"start"}]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
