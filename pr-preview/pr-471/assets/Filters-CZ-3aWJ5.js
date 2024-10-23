var c=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(n,e,r)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,i=(n,e)=>{for(var r in e||(e={}))m.call(e,r)&&l(n,r,e[r]);if(s)for(var r of s(e))f.call(e,r)&&l(n,r,e[r]);return n},o=(n,e)=>h(n,p(e));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as d}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function a(n){const e=i(i({a:"a",em:"em",h1:"h1",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul"},d()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"filters",children:"Filters"}),`
`,t.jsx(e.p,{children:t.jsxs(e.em,{children:["Note: This section covers filters specifically for tables. For query-related filters, please refer to the ",t.jsx(e.a,{href:"#coming",children:"Analytics Filters - Coming Soon"}),"."]})}),`
`,t.jsx(e.h4,{id:"simple-filters",children:t.jsx(e.strong,{children:"Simple Filters"})}),`
`,t.jsxs(e.p,{children:["Simple filters are ideal when there are only a few filter options. These are straightforward and quick to use, often appearing as dropdowns above the table. For implementation, refer to the ",t.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/components-data-entry-select--documentation",rel:"nofollow",children:"Select Component"}),"."]}),`
`,t.jsx(e.p,{children:"Examples:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Coming Soon"}),`
`,t.jsx(e.li,{children:"Coming Soon"}),`
`]}),`
`,t.jsx(e.h4,{id:"filters-with-apply-button",children:t.jsx(e.strong,{children:"Filters with Apply Button"})}),`
`,t.jsx(e.p,{children:"Complex filters provide more advanced filtering options, allowing users to apply multiple criteria at once. These filters often include dropdowns, checkboxes, and text fields. Complex filters are particularly useful when multiple filters need to be applied simultaneously or when load times might be a concern."}),`
`,t.jsx(e.h4,{id:"date-range-filters",children:t.jsx(e.strong,{children:"Date Range Filters"})}),`
`,t.jsx(e.p,{children:"Date range filters allow users to specify a range of dates to narrow down the data displayed in the table. Typically, these filters include a start date and an end date, with options for common ranges like “Last 7 days” or “Last 30 days.” User presets are also available for frequently used date ranges."}),`
`,t.jsx(e.p,{children:"Examples:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/components-data-entry-date-picker--documentation",rel:"nofollow",children:"Basic Date Picker"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/candidate-components-directory-date-range-filter--documentation",rel:"nofollow",children:"Date Range Filter with Presets"})}),`
`]})]})}function y(n={}){const{wrapper:e}=i(i({},d()),n.components);return e?t.jsx(e,o(i({},n),{children:t.jsx(a,i({},n))})):a(n)}export{y as default};
