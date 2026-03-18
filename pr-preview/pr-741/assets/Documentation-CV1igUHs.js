var p=Object.defineProperty,x=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(e,n,r)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,o=(e,n)=>{for(var r in n||(n={}))j.call(n,r)&&d(e,r,n[r]);if(s)for(var r of s(n))u.call(n,r)&&d(e,r,n[r]);return e},a=(e,n)=>x(e,m(n));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as h}from"./index-CkQzTg6q.js";import{ae as f,ag as i,ah as g}from"./index-B_kDyEUq.js";import{C,P as y,H as b,W as w,a as l}from"./Card.stories-CI-BTiSR.js";import"./index-3OP4wdng.js";import"./iframe-xYzsKy_8.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./UnauthorizedTooltip-DskQ_w5A.js";import"./ErrorStateIcon-XxioHWtm.js";import"./style-DXf4Rsq5.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-DGQ4YAcn.js";import"./WarningStateIcon-DAHpwnh-.js";import"./LightTheme-5-ZTbvef.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./ExampleStory-DQKV3eMA.js";function c(e){const n=o(o({a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},h()),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(f,{of:C}),`
`,t.jsx(n.h1,{id:"card",children:"Card"}),`
`,t.jsx(n.h4,{id:"overview",children:"Overview"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.strong,{children:"Card"})," component is a flexible container for displaying content related to a single subject. It combines elements like text, lists, and interactive actions into a visually distinct and structured layout."]}),`
`,t.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Customizable Headers and Footers"})," Supports headers (title) and footers (extra) to add context or actions. Both header and footer is optional."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Content Areas"})," Organize information into a visually distinct and structured layout."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Actions"})," Built-in support for buttons, dropdowns, or custom controls to enhance interactivity."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Responsive Layouts"})," Grid support for displaying multiple cards in a responsive and organized format."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Inner Card"}),"The Inner Card is a specialized type of card designed for use within a parent card. It allows you to organize nested or related content, providing a clear hierarchy within the layout."]}),`
`]}),`
`,t.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(n.h3,{id:"basic-card",children:"Basic Card"}),`
`,t.jsx(i,{of:y}),`
`,t.jsx(n.h3,{id:"hoverable-card",children:"Hoverable Card"}),`
`,t.jsx(i,{of:b}),`
`,t.jsx(n.h3,{id:"card-with-inner-card",children:"Card with Inner Card"}),`
`,t.jsx(i,{of:w}),`
`,t.jsx(n.h2,{id:"important-button-placement",children:"Important: Button Placement"}),`
`,t.jsxs(n.p,{children:["When adding buttons to a Card, use the ",t.jsx(n.code,{children:"extra"})," prop instead of including buttons in the ",t.jsx(n.code,{children:"title"})," prop. Buttons placed in the ",t.jsx(n.code,{children:"title"})," prop will have their focus/active shadows clipped by the card header's overflow settings."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`// ✅ Correct - Button in extra prop
<Card
  title="Card Title"
  extra={<Button>Action</Button>}
>
  Card content
</Card>

// ❌ Incorrect - Button in title will clip shadows
<Card
  title={<Button>Action</Button>}
>
  Card content
</Card>
`})}),`
`,t.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,t.jsx(n.p,{children:"Try it — change any prop below and see the result live."}),`
`,t.jsx(i,{of:l,sourceState:"shown"}),`
`,t.jsx(g,{of:l}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["Full API reference: ",t.jsx(n.a,{href:"https://ant.design/components/card",rel:"nofollow",children:"Card — Ant Design"})]}),`
`]}),`
`,t.jsx(n.h4,{id:"related-links",children:"Related Links"}),`
`,t.jsxs(n.table,{children:[t.jsx(n.thead,{children:t.jsxs(n.tr,{children:[t.jsx(n.th,{children:"Type"}),t.jsx(n.th,{children:"Resource"})]})}),t.jsxs(n.tbody,{children:[t.jsxs(n.tr,{children:[t.jsx(n.td,{children:"Eames"}),t.jsx(n.td,{children:t.jsx(n.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=403-0&node-type=canvas&t=B6HJWqqDsUOypZQj-0",rel:"nofollow",children:"Card Component"})})]}),t.jsxs(n.tr,{children:[t.jsx(n.td,{children:"AntD"}),t.jsx(n.td,{children:t.jsx(n.a,{href:"https://ant.design/components/card",rel:"nofollow",children:"Card Component"})})]})]})]})]})}function Z(e={}){const{wrapper:n}=o(o({},h()),e.components);return n?t.jsx(n,a(o({},e),{children:t.jsx(c,o({},e))})):c(e)}export{Z as default};
