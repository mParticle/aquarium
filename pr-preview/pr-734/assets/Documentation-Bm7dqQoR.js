var h=Object.defineProperty,p=Object.defineProperties;var a=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(o,e,i)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i,n=(o,e)=>{for(var i in e||(e={}))m.call(e,i)&&l(o,i,e[i]);if(r)for(var i of r(e))x.call(e,i)&&l(o,i,e[i]);return o},s=(o,e)=>p(o,a(e));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as d}from"./index-CkQzTg6q.js";import{ae as j,ag as u}from"./index-DFbrfdzt.js";import{H as f}from"./Tooltip.stories-BhKDXHqP.js";import"./index-3OP4wdng.js";import"./iframe-M9SY_zZl.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./UnauthorizedTooltip-C9_su0TB.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./style-B81W5px8.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./LightTheme-5-ZTbvef.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./HelpCircle-suXMuS68.js";function c(o){const e=n(n({a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},d()),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(j,{title:"Patterns/Help Icon"}),`
`,t.jsx(e.h1,{id:"help-icon",children:"Help Icon"}),`
`,t.jsx(e.h3,{id:"overview",children:"Overview"}),`
`,t.jsxs(e.p,{children:["A contextual help indicator that displays a tooltip when hovered. Use ",t.jsx(e.code,{children:"IconWithTooltip"})," with the ",t.jsx(e.code,{children:"RoktHelpCircle"})," icon to create this pattern."]}),`
`,t.jsx(e.h3,{id:"when-to-use",children:"When to use:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"To provide inline contextual help next to labels, form fields, or settings."}),`
`,t.jsx(e.li,{children:"To explain technical terms or metrics without cluttering the interface."}),`
`,t.jsx(e.li,{children:"To offer tips or guidance that users can discover on hover."}),`
`]}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Flex, Icon, Tooltip } from '@mparticle/aquarium'
import { RoktHelpCircle } from '@mparticle/aquarium/icons'

<Tooltip title="Helpful context about this field">
  <Flex align="center" justify="center">
    <Icon name={RoktHelpCircle} size="sm" color="default" />
  </Flex>
</Tooltip>
`})}),`
`,t.jsxs(e.p,{children:["For the legacy string-based help icon, you can also use ",t.jsx(e.code,{children:"IconWithTooltip"})," which defaults to ",t.jsx(e.code,{children:"help"}),":"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { IconWithTooltip } from '@mparticle/aquarium'

<IconWithTooltip title="Helpful context about this field" />
`})}),`
`,t.jsx(e.h3,{id:"examples",children:"Examples"}),`
`,t.jsx(u,{of:f}),`
`,t.jsx(e.h4,{id:"related-links",children:"Related Links"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Resource"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"Tooltip"}),t.jsx(e.td,{children:t.jsx(e.a,{href:"/docs/components-data-display-tooltip--docs",children:"Tooltip Component"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"IconWithTooltip"}),t.jsx(e.td,{children:t.jsx(e.a,{href:"/docs/components-data-display-tooltip--text-with-icon",children:"IconWithTooltip"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"Eames"}),t.jsx(e.td,{children:t.jsx(e.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=413-13162&t=5iHsAw2QyK8Lx8zt-4",rel:"nofollow",children:"Tooltip Component"})})]})]})]})]})}function P(o={}){const{wrapper:e}=n(n({},d()),o.components);return e?t.jsx(e,s(n({},o),{children:t.jsx(c,n({},o))})):c(o)}export{P as default};
