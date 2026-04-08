import{j as n}from"./iframe-CI4D4FUx.js";import{useMDXComponents as o}from"./index-C7ElJgA2.js";import{M as d,C as r,a}from"./blocks-CveYjhRC.js";import{C as l,P as c,H as h,W as x,a as s}from"./Card.stories-Y7H22iJa.js";import"./preload-helper-PPVm8Dsz.js";import"./ExampleStory-DbJa-SOj.js";function i(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(e.h1,{id:"card",children:"Card"}),`
`,n.jsx(e.h4,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Card"})," component is a flexible container for displaying content related to a single subject. It combines elements like text, lists, and interactive actions into a visually distinct and structured layout."]}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customizable Headers and Footers"})," Supports headers (title) and footers (extra) to add context or actions. Both header and footer is optional."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Areas"})," Organize information into a visually distinct and structured layout."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Actions"})," Built-in support for buttons, dropdowns, or custom controls to enhance interactivity."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive Layouts"})," Grid support for displaying multiple cards in a responsive and organized format."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Inner Card"}),"The Inner Card is a specialized type of card designed for use within a parent card. It allows you to organize nested or related content, providing a clear hierarchy within the layout."]}),`
`]}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"basic-card",children:"Basic Card"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.h3,{id:"hoverable-card",children:"Hoverable Card"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"card-with-inner-card",children:"Card with Inner Card"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h2,{id:"important-button-placement",children:"Important: Button Placement"}),`
`,n.jsxs(e.p,{children:["When adding buttons to a Card, use the ",n.jsx(e.code,{children:"extra"})," prop instead of including buttons in the ",n.jsx(e.code,{children:"title"})," prop. Buttons placed in the ",n.jsx(e.code,{children:"title"})," prop will have their focus/active shadows clipped by the card header's overflow settings."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Correct - Button in extra prop
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
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(e.p,{children:"Try it — change any prop below and see the result live."}),`
`,n.jsx(r,{of:s,sourceState:"shown"}),`
`,n.jsx(a,{of:s}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Full API reference: ",n.jsx(e.a,{href:"https://ant.design/components/card",rel:"nofollow",children:"Card — Ant Design"})]}),`
`]}),`
`,n.jsx(e.h4,{id:"related-links",children:"Related Links"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Resource"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Eames"}),n.jsx("td",{children:n.jsx("a",{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=403-0&node-type=canvas&t=B6HJWqqDsUOypZQj-0",children:"Card Component"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"AntD"}),n.jsx("td",{children:n.jsx("a",{href:"https://ant.design/components/card",children:"Card Component"})})]})]})]})]})}function g(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{g as default};
