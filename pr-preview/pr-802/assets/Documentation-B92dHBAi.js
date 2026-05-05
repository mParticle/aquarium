import{j as e}from"./iframe-CJHsXdCQ.js";import{useMDXComponents as s}from"./index-D7UajSeo.js";import{M as i}from"./blocks-CQiJgaV7.js";import"./preload-helper-PPVm8Dsz.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/General/Typography/Documentation"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(n.p,{children:"A set of four primitives for every piece of written content in a Rokt product surface."}),`
`,e.jsx(n.h2,{id:"the-four-primitives",children:"The four primitives"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Title"})," — section headings, ",e.jsx(n.code,{children:"level={1–5}"}),". Always use ",e.jsx(n.code,{children:"Title"})," for hierarchy — never style a ",e.jsx(n.code,{children:"<div>"})," to look like a heading."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Paragraph"})," — blocks of body copy. Supports ellipsis, copyable, and editable variants."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text"})," — inline prose, labels, inline code. Has semantic variants (",e.jsx(n.code,{children:'type="secondary"'})," / ",e.jsx(n.code,{children:'"success"'})," / ",e.jsx(n.code,{children:'"warning"'})," / ",e.jsx(n.code,{children:'"danger"'}),") so you never hardcode a text color."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link"})," — anchor elements with built-in hover and focus states, and an optional ",e.jsx(n.code,{children:"hoverColor"})," prop for contexts where the default brand hover doesn't belong (e.g. inside an error alert)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"rules-of-thumb",children:"Rules of thumb"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Don't pick a ",e.jsx(n.code,{children:"fontSize"})," — pick a component. The size comes from the type scale in ",e.jsx(n.a,{href:"?path=/docs/design-tokens-typography--documentation",children:"Design Tokens / Typography"}),"."]}),`
`,e.jsxs(n.li,{children:["Don't hand-roll a heading out of styled text. Use ",e.jsx(n.code,{children:"Title"})," so tools (screen readers, outline views) can read the page structure."]}),`
`,e.jsxs(n.li,{children:["Don't use a raw ",e.jsx(n.code,{children:"<a>"})," tag. Use ",e.jsx(n.code,{children:"Typography.Link"})," so every link looks and behaves the same."]}),`
`]}),`
`,e.jsx(n.h2,{id:"where-to-look-next",children:"Where to look next"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/design-tokens-typography--documentation",children:"Design Tokens → Typography"})," for the raw font sizes, weights, line heights, and families."]}),`
`,e.jsxs(n.li,{children:["Individual component pages for prop-by-prop detail and every variant:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-general-typography-title--primary",children:"Title"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-general-typography-paragraph--primary",children:"Paragraph"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-general-typography-text--primary",children:"Text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-general-typography-link--primary",children:"Link"})}),`
`]}),`
`]}),`
`]})]})}function c(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{c as default};
