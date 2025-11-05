var c=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var a=(n,e,r)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,i=(n,e)=>{for(var r in e||(e={}))x.call(e,r)&&a(n,r,e[r]);if(o)for(var r of o(e))j.call(e,r)&&a(n,r,e[r]);return n},d=(n,e)=>m(n,p(e));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as l}from"./index-CkQzTg6q.js";import{ae as g,ag as s}from"./index-BSt3U3Gg.js";import{E as u,a as y,b as f,c as b}from"./Empty.stories-N5GIli6K.js";import"./index-3OP4wdng.js";import"./iframe-Cldv-ifG.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-MUqiFV8f.js";import"./ErrorStateIcon-Clx5lk_q.js";import"./style-BvWo89XW.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-CrBP74im.js";import"./WarningStateIcon-irkX5OVh.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";function h(n){const e=i(i({a:"a",br:"br",h1:"h1",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},l()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(g,{of:u}),`
`,`
`,t.jsx(e.h1,{id:"empty",children:"Empty"}),`
`,t.jsx(e.h3,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:"The Empty State component provides users with context and guidance when no data is available to display. It can also handle Error States by surfacing actionable feedback when something goes wrong."}),`
`,t.jsx(e.h3,{id:"empty-state--onboarding",children:"Empty State – Onboarding"}),`
`,t.jsx(e.h4,{id:"when-to-use",children:"When to use"}),`
`,t.jsx(e.p,{children:"Use Empty State – Onboarding when a user visits a section for the first time or has deleted all items, leaving the section blank until they create something new."}),`
`,t.jsx(e.h4,{id:"content-guidelines",children:"Content Guidelines"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Title:"}),` You don't have any [X] yet (e.g., "You don't have any audiences yet.")`,t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Description:"}),' Highlight the benefit of creating something new. (e.g., "Start targeting the customers who matter most and run smarter, more effective campaigns.")',t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Primary Action:"}),' "+ Create [X]"',t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Secondary Action (optional):"}),' "Learn more"']}),`
`,t.jsx(s,{of:y}),`
`,t.jsx(e.h3,{id:"empty-state--no-results",children:"Empty State – No Results"}),`
`,t.jsx(e.h4,{id:"when-to-use-1",children:"When to use"}),`
`,t.jsx(e.p,{children:"Use Empty State – No Results when a user action leads to an empty result and nothing matches."}),`
`,t.jsx(e.h4,{id:"content-guidelines-1",children:"Content Guidelines"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Title:"}),' No [X] found (e.g., "No results found" or "No items match these filters.")',t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Description:"}),' Guide the user toward adjusting or refining their input. (e.g., "Try adjusting your filters or using different keywords.")',t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Primary Action:"}),' "Clear filters" / "Adjust search"']}),`
`,t.jsx(s,{of:f}),`
`,t.jsx(e.h3,{id:"error-state",children:"Error State"}),`
`,t.jsx(e.h4,{id:"when-to-use-2",children:"When to use"}),`
`,t.jsx(e.p,{children:"Use Error State when something prevents content from loading (e.g., server error, network issue, API error)."}),`
`,t.jsx(e.h4,{id:"content-guidelines-2",children:"Content Guidelines"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Title:"}),' Something went wrong (e.g., "Error loading [X]" if additional context is helpful)',t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Description:"})," Provide context and clear next steps.",t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Example phrasing:"}),` "We couldn't load [X]. Please try again."`,t.jsx(e.br,{}),`
`,t.jsx(e.strong,{children:"Primary Action:"}),' "Try again" / "Reload"']}),`
`,t.jsx(s,{of:b}),`
`,t.jsx(e.h4,{id:"related-links",children:"Related Links"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Resource"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"AntD"}),t.jsx(e.td,{children:t.jsx(e.a,{href:"https://ant.design/components/empty",rel:"nofollow",children:"Empty Component"})})]})})]})]})}function J(n={}){const{wrapper:e}=i(i({},l()),n.components);return e?t.jsx(e,d(i({},n),{children:t.jsx(h,i({},n))})):h(n)}export{J as default};
