var h=Object.defineProperty,p=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var d=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))j.call(t,r)&&d(e,r,t[r]);return e},a=(e,t)=>p(e,x(t));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import{ae as u,ag as o}from"./index-DWIxucas.js";import{C,P as f,H as g,W as y}from"./Card.stories-BcGQM0Q_.js";import"./index-3OP4wdng.js";import"./iframe-70CccLLT.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./UnauthorizedTooltip-BTO5bBVD.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./style-B81W5px8.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./LightTheme-5-ZTbvef.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./ExampleStory-CI3OQjuZ.js";function l(e){const t=i(i({a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},c()),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:C}),`
`,n.jsx(t.h1,{id:"card",children:"Card"}),`
`,n.jsx(t.h4,{id:"overview",children:"Overview"}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.strong,{children:"Card"})," component is a flexible container for displaying content related to a single subject. It combines elements like text, lists, and interactive actions into a visually distinct and structured layout."]}),`
`,n.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Customizable Headers and Footers"})," Supports headers (title) and footers (extra) to add context or actions. Both header and footer is optional."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Content Areas"})," Organize information into a visually distinct and structured layout."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Actions"})," Built-in support for buttons, dropdowns, or custom controls to enhance interactivity."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Responsive Layouts"})," Grid support for displaying multiple cards in a responsive and organized format."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Inner Card"}),"The Inner Card is a specialized type of card designed for use within a parent card. It allows you to organize nested or related content, providing a clear hierarchy within the layout."]}),`
`]}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"basic-card",children:"Basic Card"}),`
`,n.jsx(o,{of:f}),`
`,n.jsx(t.h3,{id:"hoverable-card",children:"Hoverable Card"}),`
`,n.jsx(o,{of:g}),`
`,n.jsx(t.h3,{id:"card-with-inner-card",children:"Card with Inner Card"}),`
`,n.jsx(o,{of:y}),`
`,n.jsx(t.h2,{id:"important-button-placement",children:"Important: Button Placement"}),`
`,n.jsxs(t.p,{children:["When adding buttons to a Card, use the ",n.jsx(t.code,{children:"extra"})," prop instead of including buttons in the ",n.jsx(t.code,{children:"title"})," prop. Buttons placed in the ",n.jsx(t.code,{children:"title"})," prop will have their focus/active shadows clipped by the card header's overflow settings."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`// ✅ Correct - Button in extra prop
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
`,n.jsx(t.h4,{id:"related-links",children:"Related Links"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Type"}),n.jsx(t.th,{children:"Resource"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Eames"}),n.jsx(t.td,{children:n.jsx(t.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=403-0&node-type=canvas&t=B6HJWqqDsUOypZQj-0",rel:"nofollow",children:"Card Component"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"AntD"}),n.jsx(t.td,{children:n.jsx(t.a,{href:"https://ant.design/components/card",rel:"nofollow",children:"Card Component"})})]})]})]})]})}function U(e={}){const{wrapper:t}=i(i({},c()),e.components);return t?n.jsx(t,a(i({},e),{children:n.jsx(l,i({},e))})):l(e)}export{U as default};
