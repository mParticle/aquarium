import{j as e}from"./iframe-CLx-ETHJ.js";import{useMDXComponents as o}from"./index-DKlnTkGe.js";import{M as i,C as a}from"./blocks-VijOytN5.js";import{P as s,F as d}from"./PromoPage.stories-BGL5OsDs.js";import"./preload-helper-PPVm8Dsz.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n.h1,{id:"landing-page",children:"Landing Page"}),`
`,e.jsx(n.p,{children:"A composed pattern for feature-promo and onboarding entry pages: a centered hero with primary/default CTAs, followed by a benefits strip of illustrated cards. Use when a product surface needs a short, opinionated intro before a user sees the real UI."}),`
`,e.jsx(n.p,{children:"The example below is drawn from the real pattern shipping in production — a warehouse-connection landing page with a centered hero and three illustrated benefit cards."}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"First-time entry into a new feature."}),`
`,e.jsx(n.li,{children:"Upsell or promo for a capability the workspace hasn't enabled yet."}),`
`,e.jsxs(n.li,{children:["Empty states for a feature that needs more narrative context than a single ",e.jsx(n.code,{children:"Empty"})," component can carry."]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PromoPage"})," — centered flex container that stacks the hero and benefits."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PromoPageHero"})," — headline, description, and two CTAs. Accepts either the structured ",e.jsx(n.code,{children:"buttons"})," prop (",e.jsx(n.code,{children:"defaultButton"})," + ",e.jsx(n.code,{children:"primaryButton"}),") or arbitrary ",e.jsx(n.code,{children:"children"})," for cases where the primary CTA is a custom control (e.g. a provider dropdown)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PromoPageBenefits"})," — section wrapper with an optional title; children flow in a responsive row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PromoPageCard"})," — illustrated card with title, description, and either an image (",e.jsx(n.code,{children:"type: 'img'"}),") or a trailing link button (",e.jsx(n.code,{children:"type: 'link'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PromoPageButton"})," — standardized button with optional tooltip and external-link handling."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{of:d})]})}function m(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{m as default};
