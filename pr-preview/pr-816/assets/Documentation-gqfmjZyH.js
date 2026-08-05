import{j as e}from"./iframe-v0s7Etg5.js";import{useMDXComponents as i}from"./index-DI_IzT9J.js";import{M as r,C as a}from"./blocks-Cztjem6U.js";import{F as s,P as o,O as d}from"./FilterControl.stories-6vvbg52d.js";import"./preload-helper-PPVm8Dsz.js";function l(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
`,e.jsx(t.h1,{id:"filtercontrol",children:"FilterControl"}),`
`,e.jsx(t.p,{children:"FilterControl is an opinionated shell for filters that open from a compact trigger, collect draft changes in a popover, and commit only when the user applies them."}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["A table or dense data surface needs a compact filter entry point, but the filter UI is too involved for a simple inline ",e.jsx(t.code,{children:"Select"}),"."]}),`
`,e.jsx(t.li,{children:"Users should be able to stage multiple changes before updating the applied table state."}),`
`,e.jsxs(t.li,{children:["Closing the popover should discard uncommitted changes, while ",e.jsx(t.code,{children:"Clear"})," should reset only the draft filter value."]}),`
`,e.jsx(t.li,{children:"Consumers need to own the filter value shape and content rendering while Aquarium owns the trigger, popover structure, and footer actions."}),`
`]}),`
`,e.jsx(t.p,{children:"Rokt Catalog uses this pattern in feed management table filters, including the product set filter, where Catalog owns the product-set selection model and labels while Aquarium provides the reusable button, popover, draft state, and clear/apply behavior."}),`
`,e.jsx(t.h2,{id:"related-solutions",children:"Related solutions"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Use ",e.jsx(t.a,{href:"/?path=/story/ux-patterns-data-exploration-table-patterns-inline-toolbar-filters--default",children:"Inline Toolbar Filters"})," when the table has a few high-value filters that can stay visible and update immediately."]}),`
`,e.jsxs(t.li,{children:["Use ",e.jsx(t.a,{href:"/?path=/story/ux-patterns-data-exploration-table-patterns-modal-filters--default",children:"Modal Filters"})," for larger table filter sets that need a dedicated panel. This is the same family of solutions as a ",e.jsx(t.code,{children:"Filters"})," button that opens a modal or aside with multiple filter dimensions."]}),`
`,e.jsxs(t.li,{children:["Use ",e.jsx(t.a,{href:"/?path=/docs/ux-patterns-data-exploration-date-range-filter--documentation",children:"Date Range Filter"})," for time-window filtering with presets and custom ranges."]}),`
`,e.jsxs(t.li,{children:["See the ",e.jsx(t.a,{href:"/?path=/docs/ux-patterns-data-exploration-table-patterns-filters-overview--documentation",children:"table filter overview"})," for guidance on choosing between inline, popover, and full-panel table filtering patterns."]}),`
`]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(a,{of:d})]})}function m(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{m as default};
