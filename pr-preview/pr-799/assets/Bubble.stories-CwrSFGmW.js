import{j as s,p as a,F as n}from"./iframe-CLx-ETHJ.js";import{F as o}from"./index-CLqSSm4R.js";import"./preload-helper-PPVm8Dsz.js";import"./pickAttrs-DqYAptZO.js";import"./genStyleUtils-D1h1HFDk.js";import"./index-BEi_iiwh.js";import"./useLocale-Bbb_7Y_C.js";import"./omit-DnjelvTX.js";import"./use-proxy-imperative-handle-BuXMkm5Z.js";const x={title:"Components/AI/Bubble",component:o,decorators:[r=>s.jsx(a,{children:s.jsx(r,{})})]},e={args:{content:"Hello! How can I help you today?"}},t={render:()=>s.jsx(n,{vertical:!0,gap:"middle",style:{maxWidth:600},children:s.jsx(o.List,{items:[{key:"1",content:"Can you explain how to use this component?",role:"user",placement:"end"},{key:"2",content:"The Bubble component renders chat messages. Use Bubble.List for conversations with multiple messages.",role:"assistant",placement:"start"}]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
