import{j as e}from"./iframe-DERWQoPH.js";import{useMDXComponents as r}from"./index-bDb4B-s7.js";import{M as i}from"./blocks-BzyS3Eww.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/AI/Documentation"}),`
`,e.jsx(n.h1,{id:"ai-components",children:"AI Components"}),`
`,e.jsxs(n.p,{children:["These stories demonstrate how ",e.jsx(n.a,{href:"https://x.ant.design/",rel:"nofollow",children:"@ant-design/x"})," components look and behave inside Aquarium's ",e.jsx(n.code,{children:"ConfigProvider"}),". They are ",e.jsx(n.strong,{children:"not"})," exported from ",e.jsx(n.code,{children:"@mparticle/aquarium"})," — consumers install ",e.jsx(n.code,{children:"@ant-design/x"})," themselves and wrap it with Aquarium theming."]}),`
`,e.jsx(n.h2,{id:"featured-examples",children:"Featured Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bubble"})," — Chat message bubbles, with ",e.jsx(n.code,{children:"Bubble.List"})," for conversations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Conversations"})," — Conversation list sidebar for managing multiple chats."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sender"})," — Message input with send button. ",e.jsx(n.code,{children:"Sender.Header"})," provides a toolbar slot."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Suggestion"})," — AI suggestion chips triggered from an input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prompts"})," — Prompt template cards."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Attachments"})," — File attachment handling for chat inputs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Actions"})," — Action buttons (copy, like, dislike, etc.) for messages."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Install ",e.jsx(n.code,{children:"@ant-design/x"})," in your project, then wrap it with Aquarium's ",e.jsx(n.code,{children:"ConfigProvider"})," so it inherits the theme:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Bubble } from '@ant-design/x'
import { ConfigProvider } from '@mparticle/aquarium'

export function ChatMessage() {
  return (
    <ConfigProvider>
      <Bubble content="Hello!" />
    </ConfigProvider>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["Refer to the ",e.jsx(n.a,{href:"https://x.ant.design/",rel:"nofollow",children:"Ant Design X docs"})," for the full component API."]})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
