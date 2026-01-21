import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BdjsESbt.js";import"./iframe-ZAwtOOsv.js";import"./preload-helper-PPVm8Dsz.js";function t(i){const n={br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"table-cells",children:"Table Cells"}),`
`,e.jsx(n.h3,{id:"date-and-time",children:"Date and Time"}),`
`,e.jsx(n.p,{children:"To ensure clarity for both US and EU audiences, all dates and times should follow a standard global format. All times are displayed in UTC."}),`
`,e.jsx(n.h4,{id:"do",children:"Do"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Date: MMM DD, YYYY (e.g., Sep 12, 2024), which removes any ambiguity between US (MM/DD) and EU (DD/MM) formats."}),`
`,e.jsx(n.li,{children:"Time Zone: UTC (displayed once, somewhere visible on the screen)."}),`
`]}),`
`,e.jsxs(n.p,{children:["| Event           | Start Date (UTC) | End Date (UTC) |",e.jsx(n.br,{}),`
`,`|-----------------|------------------|----------------|
| Product Launch  | Sep 12, 2024      | Sep 14, 2024  |`,e.jsx(n.br,{}),`
`,"| Black Friday    | Nov 29, 2024      | Nov 29, 2024  |"]}),`
`,e.jsx(n.p,{children:"[Insert link: Displaying a link in a date picker]"}),`
`,e.jsx(n.h4,{id:"dont",children:"Don't"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mix Date Formats"}),": Do not use different formats such as ",e.jsx(n.code,{children:"MM/DD/YYYY"})," (e.g., 09/12/2024, which could be interpreted as either September 12 or December 9) or ",e.jsx(n.code,{children:"DD/MM/YYYY"})," (e.g., 12/09/2024, which can also cause confusion). Stick to the global format ",e.jsx(n.code,{children:"MMM DD, YYYY"})," (e.g., Sep 12, 2024)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Omit the Time Zone"}),': Never omit the time zone when displaying times, especially when it might lead to user confusion. Example: Instead of just showing "14:30", show "14:30 UTC".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Repeat UTC for Each Entry"}),': Avoid repeating "UTC" in every row of a table or list. Example: Instead of labeling every row "Sep 12, 2024 (UTC)", use a clear table header like ',e.jsx(n.code,{children:"Date (UTC)"})," to indicate the time zone for all rows."]}),`
`]})]})}function d(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{d as default};
