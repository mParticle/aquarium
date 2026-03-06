import{j as e}from"./iframe-BFzXfXty.js";import{useMDXComponents as i}from"./index-BgoF7Ioa.js";import{M as l,C as s}from"./blocks-DtSnsQAS.js";import{H as c}from"./Tooltip.stories-DyQMa8j5.js";import"./preload-helper-PPVm8Dsz.js";import"./HelpCircle-6o_yfES0.js";function t(o){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Patterns/Help Icon"}),`
`,e.jsx(n.h1,{id:"help-icon",children:"Help Icon"}),`
`,e.jsx(n.h3,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["A contextual help indicator that displays a tooltip when hovered. Use ",e.jsx(n.code,{children:"IconWithTooltip"})," with the ",e.jsx(n.code,{children:"RoktHelpCircle"})," icon to create this pattern."]}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"To provide inline contextual help next to labels, form fields, or settings."}),`
`,e.jsx(n.li,{children:"To explain technical terms or metrics without cluttering the interface."}),`
`,e.jsx(n.li,{children:"To offer tips or guidance that users can discover on hover."}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Flex, Icon, Tooltip } from '@mparticle/aquarium'
import { RoktHelpCircle } from '@mparticle/aquarium/icons'

<Tooltip title="Helpful context about this field">
  <Flex align="center" justify="center">
    <Icon name={RoktHelpCircle} size="sm" color="default" />
  </Flex>
</Tooltip>
`})}),`
`,e.jsxs(n.p,{children:["For the legacy string-based help icon, you can also use ",e.jsx(n.code,{children:"IconWithTooltip"})," which defaults to ",e.jsx(n.code,{children:"help"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { IconWithTooltip } from '@mparticle/aquarium'

<IconWithTooltip title="Helpful context about this field" />
`})}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h4,{id:"related-links",children:"Related Links"}),`
`,e.jsxs(n.p,{children:[`| Type   | Resource |
| ------ | -------- |
| Tooltip | `,e.jsx(n.a,{href:"/docs/components-data-display-tooltip--docs",children:"Tooltip Component"}),` |
| IconWithTooltip | `,e.jsx(n.a,{href:"/docs/components-data-display-tooltip--text-with-icon",children:"IconWithTooltip"}),` |
| Eames  | `,e.jsx(n.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=413-13162&t=5iHsAw2QyK8Lx8zt-4",rel:"nofollow",children:"Tooltip Component"})," |"]})]})}function m(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{m as default};
