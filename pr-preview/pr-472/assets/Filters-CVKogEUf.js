var c=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(r,e,i)=>e in r?c(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,n=(r,e)=>{for(var i in e||(e={}))f.call(e,i)&&s(r,i,e[i]);if(o)for(var i of o(e))u.call(e,i)&&s(r,i,e[i]);return r},l=(r,e)=>h(r,m(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{useMDXComponents as d}from"./index-BI4Okn8T.js";import{M as x,d as a}from"./index-zrkc5eiU.js";import{F as j,W as g,a as y}from"./Filters.stories-C5xCsV1J.js";import"./index-CNk6hRaE.js";import"./iframe-CTkNTj1I.js";import"../sb-preview/runtime.js";import"./index-D-4E_f9W.js";import"./extends-CF3RwP-h.js";import"./index-DYADbu9O.js";import"./isNativeReflectConstruct-0c7aa-qo.js";import"./_baseClone-u1J3oOXU.js";import"./_getPrototype-CAOE_2rY.js";import"./index-eS13M_ii.js";import"./index-DrFu-skq.js";import"./index-Cn2ehl89.js";import"./GlobalNavigation-DgsMOKTE.js";import"./LightTheme-BtoaoHMG.js";import"./row-4dnY1EES.js";import"./useToken-BceXVVM_.js";import"./Serializer-OW4gUFyn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./DatePicker.stories-DWpikFG3.js";import"./SelectWithRangePicker-BW0xSfYK.js";function p(r){const e=n(n({a:"a",em:"em",h1:"h1",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul"},d()),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:j}),`
`,t.jsx(e.h1,{id:"filters",children:"Filters"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.p,{children:t.jsxs(e.em,{children:["Note: This section covers filters specifically for tables. For query-related filters, please refer to the ",t.jsx(e.a,{href:"#coming",children:"Analytics Filters - Coming Soon"}),"."]})}),`
`,t.jsx(e.h4,{id:"simple-filters",children:t.jsx(e.strong,{children:"Simple Filters"})}),`
`,t.jsxs(e.p,{children:["Simple filters are ideal when there are only a few filter options. These are straightforward and quick to use, often appearing as dropdowns above the table. For implementation, refer to the ",t.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/components-data-entry-select--documentation",rel:"nofollow",children:"Select Component"}),"."]}),`
`,t.jsx(e.p,{children:"Examples:"}),`
`,t.jsx(a,{of:g}),`
`,t.jsx(e.h4,{id:"filters-with-apply-button",children:t.jsx(e.strong,{children:"Filters with Apply Button"})}),`
`,t.jsx(e.p,{children:"Complex filters provide more advanced filtering options, allowing users to apply multiple criteria at once. These filters often include dropdowns, checkboxes, and text fields. Complex filters are particularly useful when multiple filters need to be applied simultaneously or when load times might be a concern."}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"daterange"}),`
`,t.jsx(e.li,{children:"modal: sorting, filters: one of each input type: checkboxes, input, tree select and placeholder for tags"}),`
`]}),`
`,t.jsx(a,{of:y}),`
`,t.jsx(e.h4,{id:"date-range-filters",children:t.jsx(e.strong,{children:"Date Range Filters"})}),`
`,t.jsx(e.p,{children:"Date range filters allow users to specify a range of dates to narrow down the data displayed in the table. Typically, these filters include a start date and an end date, with options for common ranges like “Last 7 days” or “Last 30 days.” User presets are also available for frequently used date ranges."}),`
`,t.jsx(e.p,{children:"Examples:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/components-data-entry-date-picker--documentation",rel:"nofollow",children:"Basic Date Picker"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/candidate-components-directory-date-range-filter--documentation",rel:"nofollow",children:"Date Range Filter with Presets"})}),`
`]})]})}function J(r={}){const{wrapper:e}=n(n({},d()),r.components);return e?t.jsx(e,l(n({},r),{children:t.jsx(p,n({},r))})):p(r)}export{J as default};
