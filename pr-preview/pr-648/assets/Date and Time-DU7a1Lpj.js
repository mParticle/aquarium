var a=Object.defineProperty,c=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var d=(t,e,i)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,s=(t,e)=>{for(var i in e||(e={}))j.call(e,i)&&d(t,i,e[i]);if(r)for(var i of r(e))m.call(e,i)&&d(t,i,e[i]);return t},l=(t,e)=>c(t,x(e));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as h}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function o(t){const e=s(s({code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},h()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"table-cells",children:"Table Cells"}),`
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
`]})]})}function f(t={}){const{wrapper:e}=s(s({},h()),t.components);return e?n.jsx(e,l(s({},t),{children:n.jsx(o,s({},t))})):o(t)}export{f as default};
