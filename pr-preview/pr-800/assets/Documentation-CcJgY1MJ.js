import{j as e}from"./iframe-C5_iV81x.js";import{useMDXComponents as i}from"./index-D-Bg14sb.js";import{M as r}from"./blocks-B9nqxp1B.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Experimental/Documentation"}),`
`,e.jsx(n.h1,{id:"experimental",children:"Experimental"}),`
`,e.jsxs(n.p,{children:["Components in this section are ",e.jsx(n.strong,{children:"not part of the production-supported set"}),". They exist for exploration, design review, and occasional reference, but should not be relied on in shipped product surfaces."]}),`
`,e.jsx(n.h2,{id:"what-experimental-means-here",children:'What "experimental" means here'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Implemented but unvetted"})," — the component works, but hasn't been through the full design, accessibility, and API review that production components go through."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"API may change"})," — props, naming, and behavior may shift without notice."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Limited or no coverage"})," — interaction tests and edge-case handling are not guaranteed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Not exported from the library's production index"})," — or if exported, expect instability."]}),`
`]}),`
`,e.jsx(n.h2,{id:"why-keep-them",children:"Why keep them?"}),`
`,e.jsx(n.p,{children:"They let the design team prototype patterns, evaluate Ant Design components before adopting them, and park work-in-progress ideas alongside the rest of the system — without cluttering the production catalog."}),`
`,e.jsx(n.h2,{id:"if-you-need-one-in-production",children:"If you need one in production"}),`
`,e.jsxs(n.p,{children:["Open a ticket to promote it: the component needs design sign-off, accessibility review, interaction tests, and a stable API before moving into the main ",e.jsx(n.code,{children:"Components"})," section."]})]})}function c(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{c as default};
