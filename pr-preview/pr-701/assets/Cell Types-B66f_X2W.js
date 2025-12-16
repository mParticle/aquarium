var c=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(i,e,t)=>e in i?c(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,s=(i,e)=>{for(var t in e||(e={}))p.call(e,t)&&r(i,t,e[t]);if(l)for(var t of l(e))x.call(e,t)&&r(i,t,e[t]);return i},o=(i,e)=>h(i,m(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as d}from"./index-CkQzTg6q.js";import{ae as u}from"./index-XLUFx9Hu.js";import{T as j}from"./Table.stories-DShJzOwW.js";import"./index-3OP4wdng.js";import"./iframe-BFXPvVCF.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-B4txQItw.js";import"./ErrorStateIcon-BAZ3JLG4.js";import"./style-CWQo_erP.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-BZRJwWZf.js";import"./WarningStateIcon-DA5locek.js";import"./LightTheme-vAO8T2BA.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./DatePicker.stories-bYp3iCaq.js";import"./SelectWithRangePicker-DkwkiNQE.js";function a(i){const e=s(s({code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},d()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:j}),`
`,n.jsx(e.h1,{id:"table-cells-types",children:"Table Cells Types"}),`
`,n.jsx(e.h3,{id:"text",children:"Text"}),`
`,n.jsx(e.p,{children:"Text cells support 1 or 2 lines of text. Single-line text cells are typically used for concise information like names, identifiers, or short labels. Two-line text cells are used when additional context is needed and can include entry type or ID, allowing for more detailed information without consuming excessive space."}),`
`,n.jsx(e.p,{children:"[Insert 2 lines example]"}),`
`,n.jsx(e.h4,{id:"case",children:"Case"}),`
`,n.jsx(e.p,{children:"We use sentence case for everything except for titles, which use title case. Exceptions are allowed based on a specific project requirements."}),`
`,n.jsx(e.h4,{id:"truncating-long-names",children:"Truncating Long names"}),`
`,n.jsx(e.p,{children:"Column with most dynamic and longest copy to typically have flexible. When needed implement cell truncation by ending the text with ellipses and display the full text in a tooltip upon hovering."}),`
`,n.jsx(e.p,{children:"[Insert Example]"}),`
`,n.jsx(e.h4,{id:"cell-alligment",children:"Cell Alligment"}),`
`,n.jsx(e.p,{children:"Text content within table cells is typically left-aligned to enhance readability and allow for easier scanning of information."}),`
`,n.jsx(e.h3,{id:"date-and-time",children:"Date and Time"}),`
`,n.jsx(e.p,{children:"To ensure clarity for both US and EU audiences, all dates and times should follow a standard global format. All times are displayed in UTC."}),`
`,n.jsx(e.h4,{id:"do",children:"Do"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Date: MMM DD, YYYY (e.g., Sep 12, 2024), which removes any ambiguity between US (MM/DD) and EU (DD/MM) formats."}),`
`,n.jsx(e.li,{children:"Time Zone: UTC (displayed once, somewhere visible on the screen)."}),`
`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Event"}),n.jsx(e.th,{children:"Start Date (UTC)"}),n.jsx(e.th,{children:"End Date (UTC)"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Product Launch"}),n.jsx(e.td,{children:"Sep 12, 2024"}),n.jsx(e.td,{children:"Sep 14, 2024"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Black Friday"}),n.jsx(e.td,{children:"Nov 29, 2024"}),n.jsx(e.td,{children:"Nov 29, 2024"})]})]})]}),`
`,n.jsx(e.p,{children:"[Insert link: Displaying a link in a date picker]"}),`
`,n.jsx(e.h4,{id:"dont",children:"Don't"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mix Date Formats"}),": Do not use different formats such as ",n.jsx(e.code,{children:"MM/DD/YYYY"})," (e.g., 09/12/2024, which could be interpreted as either September 12 or December 9) or ",n.jsx(e.code,{children:"DD/MM/YYYY"})," (e.g., 12/09/2024, which can also cause confusion). Stick to the global format ",n.jsx(e.code,{children:"MMM DD, YYYY"})," (e.g., Sep 12, 2024)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Omit the Time Zone"}),': Never omit the time zone when displaying times, especially when it might lead to user confusion. Example: Instead of just showing "14:30", show "14:30 UTC".']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Repeat UTC for Each Entry"}),': Avoid repeating "UTC" in every row of a table or list. Example: Instead of labeling every row "Sep 12, 2024 (UTC)", use a clear table header like ',n.jsx(e.code,{children:"Date (UTC)"})," to indicate the time zone for all rows."]}),`
`]}),`
`,n.jsx(e.h3,{id:"status",children:"Status"}),`
`,n.jsx(e.p,{children:"Always use badge components for system status. Reserve tags for actual tags, labels, and environment descriptions (e.g., prod, dev). This ensures clear visual distinction between different information types."}),`
`,n.jsx(e.p,{children:"-> Insert Example"}),`
`,n.jsx(e.h4,{id:"cell-aligment",children:"Cell Aligment"}),`
`,n.jsx(e.p,{children:"Statuses are left-aligned to create a cohesive and organized table layout."}),`
`,n.jsx(e.h3,{id:"links",children:"Links"}),`
`,n.jsx(e.h4,{id:"when-to-use",children:"When to use:"}),`
`,n.jsx(e.h5,{id:"text-links",children:"Text Links:"}),`
`,n.jsx(e.p,{children:"Use the Link component [Insert Link] to navigate to other pages, sections, or external resources."}),`
`,n.jsx(e.h5,{id:"call-to-actions-ctas",children:"Call-to-Actions (CTAs):"}),`
`,n.jsx(e.p,{children:'Links that serve as action triggers, like "Activate", should also follow these styles.'}),`
`,n.jsx(e.h5,{id:"buttons-vs-links",children:"Buttons vs Links:"}),`
`,n.jsx(e.p,{children:'Use links for navigation and "More Actions" menu or a buttons for actions.'}),`
`,n.jsx(e.h1,{id:"more-actions-menu",children:"More Actions Menu"}),`
`,n.jsx(e.h4,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The Actions Menu provides a consolidated interface for row-specific operations, such as delete, duplicate, download, and archive, all grouped within a single menu."}),`
`,n.jsx(e.h4,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Highlight destructive actions in red to ensure emphasis and user caution."}),`
`,n.jsx(e.li,{children:"Omit icons from menu items to maintain a clean, easy-to-read menu."}),`
`,n.jsx(e.li,{children:'Display the "More Actions" menu even when only one option is available.'}),`
`]}),`
`,n.jsx(e.h4,{id:"examples",children:"Examples:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Disabled menu item (Coming Soon)"}),`
`]})]})}function G(i={}){const{wrapper:e}=s(s({},d()),i.components);return e?n.jsx(e,o(s({},i),{children:n.jsx(a,s({},i))})):a(i)}export{G as default};
