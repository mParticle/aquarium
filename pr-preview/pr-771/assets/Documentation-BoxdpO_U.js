import{j as e}from"./iframe-D7jFArEw.js";import{useMDXComponents as o}from"./index-CKmW6Dp-.js";import{M as r}from"./blocks-xLS2Zokr.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/AI/Documentation"}),`
`,e.jsx(n.h1,{id:"ai-components",children:"AI Components"}),`
`,e.jsxs(n.p,{children:["Aquarium wraps ",e.jsx(n.a,{href:"https://x.ant.design/",rel:"nofollow",children:"@ant-design/x"})," to provide AI-focused components for building chat interfaces, prompt templates, and other AI-powered experiences."]}),`
`,e.jsx(n.h2,{id:"available-components",children:"Available Components"}),`
`,e.jsxs(n.p,{children:[`| Component | Description |
|---|---|
| `,e.jsx(n.strong,{children:"Bubble"})," | Chat message bubbles. Use ",e.jsx(n.code,{children:"Bubble.List"}),` for conversations. |
| `,e.jsx(n.strong,{children:"Conversations"}),` | Conversation list sidebar for managing multiple chats. |
| `,e.jsx(n.strong,{children:"Sender"})," | Message input with send button. Use ",e.jsx(n.code,{children:"Sender.Header"}),` for toolbar. |
| `,e.jsx(n.strong,{children:"Suggestion"}),` | AI suggestion chips. |
| `,e.jsx(n.strong,{children:"Prompts"}),` | Prompt template cards. |
| `,e.jsx(n.strong,{children:"Attachments"}),` | File attachment handling for chat inputs. |
| `,e.jsx(n.strong,{children:"Actions"})," | Action buttons (copy, like, dislike, etc.) for messages. |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Bubble, Sender, Suggestion } from '@mparticle/aquarium'
`})}),`
`,e.jsxs(n.p,{children:["All components are thin wrappers around ",e.jsx(n.code,{children:"@ant-design/x"})," with Aquarium's ",e.jsx(n.code,{children:"ConfigProvider"})," applied. Refer to the ",e.jsx(n.a,{href:"https://x.ant.design/",rel:"nofollow",children:"Ant Design X docs"})," for full API details."]})]})}function d(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default};
