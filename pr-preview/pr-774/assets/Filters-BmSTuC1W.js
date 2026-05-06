import{j as e}from"./iframe-FEOso3HU.js";import{useMDXComponents as i}from"./index-DolIIco3.js";import{M as s}from"./blocks-Bhyr1nTf.js";import"./preload-helper-PPVm8Dsz.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"UX Patterns/Data Exploration/Table/Patterns/Filters Overview"}),`
`,e.jsx(n.h1,{id:"filter-patterns",children:"Filter patterns"}),`
`,e.jsxs(n.p,{children:["Two patterns are documented for filtering tables. ",e.jsx(n.strong,{children:"Reach for the Inline Toolbar by default."})," Use Modal Filters only as an escape hatch when there are too many filter dimensions to fit inline."]}),`
`,e.jsx(n.h2,{id:"inline-toolbar--recommended",children:"Inline Toolbar — recommended"}),`
`,e.jsx(n.p,{children:"A toolbar above the table holds: search on the right, 1–3 high-value filters on the left (Segmented for status, Select for environment, etc.), and an active-filter chip row that shows what is currently applied with x-to-remove."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Why this is the default"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Applied state is always visible. Users don't have to open anything to see what is filtered."}),`
`,e.jsx(n.li,{children:"One-click toggles for the most common filters (status, environment)."}),`
`,e.jsx(n.li,{children:"No Apply-button ambiguity. Filters update the table as the user changes them."}),`
`,e.jsx(n.li,{children:"Composes naturally with sort (per-column header) and search (separate input)."}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.strong,{children:"Patterns / Inline Toolbar Filters"}),"."]}),`
`,e.jsx(n.h2,{id:"modal-filters--escape-hatch",children:"Modal Filters — escape hatch"}),`
`,e.jsx(n.p,{children:'A "Sort & Filters" button opens a modal that collects sort direction plus many filter dimensions behind an Apply button. The modal is paired with visible filter chips beneath the toolbar so users can see what is currently applied without re-opening it.'}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"5+ filter dimensions where an inline toolbar would be too crowded"}),`
`,e.jsx(n.li,{children:"Power-user surfaces where filters change rarely once set"}),`
`,e.jsx(n.li,{children:"Tables embedded in narrow layouts where a toolbar can't fit"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tradeoffs to be aware of"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Applied state is hidden inside the modal — chips below the toolbar are required, not optional."}),`
`,e.jsx(n.li,{children:"Apply-button semantics imply form validation; users hesitate, lose changes when they cancel."}),`
`,e.jsx(n.li,{children:"Combining sort + filter in one modal couples two distinct mental models; consider keeping sort on column headers if possible."}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.strong,{children:"Patterns / Modal Filters"}),"."]}),`
`,e.jsx(n.h2,{id:"other-filter-primitives",children:"Other filter primitives"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date range filters"})," — see ",e.jsx(n.a,{href:"/?path=/docs/ux-patterns-data-exploration-date-range-filter--documentation",children:"Date Range Filter"})," for the time-window pattern (presets + custom range)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search"})," — ",e.jsx(n.code,{children:"Input"})," with a search icon prefix and ",e.jsx(n.code,{children:"allowClear"}),". Both filter patterns above include search as a separate input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Per-column filters"})," — for filters tightly bound to one column (e.g. column-level multi-select), use Ant Design's column ",e.jsx(n.code,{children:"filters"})," + ",e.jsx(n.code,{children:"onFilter"})," props rather than a toolbar entry."]}),`
`]})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default};
