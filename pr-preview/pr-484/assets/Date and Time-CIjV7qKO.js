var h=Object.defineProperty,c=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var s=(n,e,i)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,r=(n,e)=>{for(var i in e||(e={}))p.call(e,i)&&s(n,i,e[i]);if(o)for(var i of o(e))x.call(e,i)&&s(n,i,e[i]);return n},l=(n,e)=>c(n,m(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{useMDXComponents as a}from"./index-BI4Okn8T.js";import{ae as j}from"./index-DUVolwe5.js";import{T as u}from"./Table.stories-BhrZRw61.js";import"./index-CNk6hRaE.js";import"./iframe-Z20cZQxp.js";import"../sb-preview/runtime.js";import"./index-D-4E_f9W.js";import"./index-J1TP6alb.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";import"./index-P2MZap72.js";import"./index-DrFu-skq.js";import"./index-Cn2ehl89.js";import"./GlobalNavigation-CgSMLhtR.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./Serializer-OW4gUFyn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./DatePicker.stories-zagWxAD1.js";function d(n){const e=r(r({code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},a()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:u}),`
`,t.jsx(e.h1,{id:"table-cells",children:"Table Cells"}),`
`,t.jsx(e.h3,{id:"date-and-time",children:"Date and Time"}),`
`,t.jsx(e.p,{children:"To ensure clarity for both US and EU audiences, all dates and times should follow a standard global format. All times are displayed in UTC."}),`
`,t.jsx(e.h4,{id:"do",children:"Do"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Date: MMM DD, YYYY (e.g., Sep 12, 2024), which removes any ambiguity between US (MM/DD) and EU (DD/MM) formats."}),`
`,t.jsx(e.li,{children:"Time Zone: UTC (displayed once, somewhere visible on the screen)."}),`
`]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Event"}),t.jsx(e.th,{children:"Start Date (UTC)"}),t.jsx(e.th,{children:"End Date (UTC)"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"Product Launch"}),t.jsx(e.td,{children:"Sep 12, 2024"}),t.jsx(e.td,{children:"Sep 14, 2024"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"Black Friday"}),t.jsx(e.td,{children:"Nov 29, 2024"}),t.jsx(e.td,{children:"Nov 29, 2024"})]})]})]}),`
`,t.jsx(e.p,{children:"[Insert link: Displaying a link in a date picker]"}),`
`,t.jsx(e.h4,{id:"dont",children:"Don't"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Mix Date Formats"}),": Do not use different formats such as ",t.jsx(e.code,{children:"MM/DD/YYYY"})," (e.g., 09/12/2024, which could be interpreted as either September 12 or December 9) or ",t.jsx(e.code,{children:"DD/MM/YYYY"})," (e.g., 12/09/2024, which can also cause confusion). Stick to the global format ",t.jsx(e.code,{children:"MMM DD, YYYY"})," (e.g., Sep 12, 2024)."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Omit the Time Zone"}),': Never omit the time zone when displaying times, especially when it might lead to user confusion. Example: Instead of just showing "14:30", show "14:30 UTC".']}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Repeat UTC for Each Entry"}),': Avoid repeating "UTC" in every row of a table or list. Example: Instead of labeling every row "Sep 12, 2024 (UTC)", use a clear table header like ',t.jsx(e.code,{children:"Date (UTC)"})," to indicate the time zone for all rows."]}),`
`]})]})}function _(n={}){const{wrapper:e}=r(r({},a()),n.components);return e?t.jsx(e,l(r({},n),{children:t.jsx(d,r({},n))})):d(n)}export{_ as default};
