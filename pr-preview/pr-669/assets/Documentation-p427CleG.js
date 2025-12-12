var d=Object.defineProperty,h=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(i,e,s)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,r=(i,e)=>{for(var s in e||(e={}))p.call(e,s)&&o(i,s,e[s]);if(t)for(var s of t(e))x.call(e,s)&&o(i,s,e[s]);return i},l=(i,e)=>h(i,u(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as a}from"./index-CkQzTg6q.js";import{ae as m}from"./index-CElMOyvG.js";import"./index-3OP4wdng.js";import"./iframe-CLrD0xsR.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";function c(i){const e=r(r({br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul"},a()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(m,{title:"UI Copy Styleguide/Documentation"}),`
`,n.jsx(e.h1,{id:"ui-copy-styleguide",children:"UI Copy Styleguide"}),`
`,n.jsx(e.h2,{id:"capitalization",children:"Capitalization"}),`
`,n.jsx(e.p,{children:"Capitalize the entity when referring to the feature or workspace name."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Audiences"})," → the product area or capability",n.jsx(e.br,{}),`
`,"Example: “Manage your segments in Audiences.”"]}),`
`]}),`
`,n.jsx(e.p,{children:"Use lowercase when referring to an instance of the entity or the broader concept."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"audience"})," / ",n.jsx(e.code,{children:"audiences"})," → something a user creates or the general segmentation concept",n.jsx(e.br,{}),`
`,"Example: “Create an audience for users who viewed a product.”"]}),`
`]}),`
`,n.jsx(e.p,{children:"Additional example:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Predictive Attributes"})," (feature)",n.jsx(e.br,{}),`
`,"Example: “View model outputs in Predictive Attributes.”"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"predictive attributes"})," (instances)",n.jsx(e.br,{}),`
`,"Example: “Use predictive attributes to refine this audience.”"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Rule of thumb:"})," If it’s the name of the feature, capitalize it. If it’s the thing the user creates or uses, keep it lowercase."]}),`
`,n.jsx(e.h2,{id:"punctuation",children:"Punctuation"}),`
`,n.jsx(e.h3,{id:"commas",children:"Commas"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use commas only when they remove ambiguity."}),`
`,n.jsx(e.li,{children:"Avoid comma-heavy sentences in UI copy; keep structure simple."}),`
`]}),`
`,n.jsx(e.h3,{id:"hyphens",children:"Hyphens"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Hyphenate compound modifiers only when it improves clarity.",n.jsx(e.br,{}),`
`,"Examples: “real-time audience,” “event-level data.”"]}),`
`,n.jsx(e.li,{children:"Avoid over-hyphenating phrases that remain clear without them."}),`
`]}),`
`,n.jsx(e.h3,{id:"apostrophes",children:"Apostrophes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use apostrophes for possession, not plurals.",n.jsx(e.br,{}),`
`,"Example: “audience’s size,” not “audience’s” to describe multiple audiences."]}),`
`]}),`
`,n.jsx(e.h3,{id:"quotation-marks",children:"Quotation marks"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use sparingly—primarily for referencing literal UI elements or writing examples in guidance."}),`
`,n.jsx(e.li,{children:"Don’t use quotation marks in UI copy unless surfacing text the user must type exactly."}),`
`]}),`
`,n.jsx(e.h3,{id:"ellipses",children:"Ellipses"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Don’t use ellipses in UI copy unless indicating truncated content (for example, text overflow)."}),`
`,n.jsx(e.li,{children:"Never use ellipses to create a conversational or suspenseful tone."}),`
`]}),`
`,n.jsx(e.h3,{id:"em-dashes",children:"Em dashes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Avoid em dashes in UI copy; default to clear, direct sentence structure."}),`
`,n.jsx(e.li,{children:"If an em dash is necessary, do not add spaces on either side."}),`
`]}),`
`,n.jsx(e.h3,{id:"exclamation-points",children:"Exclamation points"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Avoid exclamation points in UI copy; keep tone direct and neutral."}),`
`]}),`
`,n.jsx(e.h2,{id:"acronyms-and-abbreviations",children:"Acronyms and abbreviations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use acronyms only when they shorten text without confusing readers—when in doubt, spell it out."}),`
`]}),`
`,n.jsx(e.h3,{id:"define-on-first-use",children:"Define on first use"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Spell out the full term the first time, followed by the acronym in parentheses.",n.jsx(e.br,{}),`
`,"Example: “View your Service-Level Agreement (SLA).”",n.jsx(e.br,{}),`
`,"Later references: “You can download the SLA at any time.”"]}),`
`,n.jsx(e.li,{children:"If space is tight (for example, a button), define the acronym in nearby helper text, a tooltip, or documentation."}),`
`]}),`
`,n.jsx(e.h3,{id:"use-only-well-known-acronyms-in-ui",children:"Use only well-known acronyms in UI"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["In high-visibility UI (navigation, buttons, labels), use acronyms customers are likely to recognize.",n.jsx(e.br,{}),`
`,"Correct: “API keys,” “URL,” “CSV,” “ID.”",n.jsx(e.br,{}),`
`,"Incorrect: “Configure your DSR,” unless the audience clearly knows what “DSR” means."]}),`
`,n.jsx(e.li,{children:"If the acronym is specific to our product or domain, do not use it alone; spell it out or pair it with a descriptive label."}),`
`]}),`
`,n.jsx(e.h3,{id:"keep-the-reader-in-mind",children:"Keep the reader in mind"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Prefer clarity over brevity. If uncertain whether users know an acronym, write it out.",n.jsx(e.br,{}),`
`,"Correct: “You can send events to third-party tools.”",n.jsx(e.br,{}),`
`,"Incorrect: “You can send events to 3P tools.”"]}),`
`,n.jsx(e.li,{children:"Avoid long strings of acronyms in a single sentence."}),`
`]}),`
`,n.jsx(e.h3,{id:"capitalization-and-punctuation",children:"Capitalization and punctuation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use all caps for true acronyms and initialisms: “API,” “SDK,” “URL.”"}),`
`,n.jsxs(e.li,{children:["Skip periods between letters.",n.jsx(e.br,{}),`
`,"Correct: “API”",n.jsx(e.br,{}),`
`,"Incorrect: “A.P.I.”"]}),`
`,n.jsxs(e.li,{children:["Form plurals with a lowercase “s” and no apostrophe.",n.jsx(e.br,{}),`
`,"Correct: “APIs,” “SDKs”",n.jsx(e.br,{}),`
`,"Incorrect: “API’s,” “SDK’s”"]}),`
`]})]})}function E(i={}){const{wrapper:e}=r(r({},a()),i.components);return e?n.jsx(e,l(r({},i),{children:n.jsx(c,r({},i))})):c(i)}export{E as default};
