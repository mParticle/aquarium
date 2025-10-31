var m=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var a=(r,e,n)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,s=(r,e)=>{for(var n in e||(e={}))u.call(e,n)&&a(r,n,e[n]);if(i)for(var n of i(e))f.call(e,n)&&a(r,n,e[n]);return r},d=(r,e)=>x(r,j(e));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as p}from"./index-CkQzTg6q.js";import{ae as b,af as o,ag as l}from"./index-CEEv0I8X.js";import{A as y,S as g,W as w,E as h,I as v,a as E,b as C}from"./Alert.stories-D7WZfOe6.js";import{StorybookNote as A}from"./AlertNotProdReady.stories-CqKw3c7_.js";import"./index-3OP4wdng.js";import"./iframe-DLZ1MOVO.js";import"../sb-preview/runtime.js";import"./index-B-gr4m3q.js";import"./index-J1TP6alb.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";import"./index-DtC6qIGv.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-COcuOoGx.js";import"./ErrorStateIcon-DxzO0Lf8.js";import"./style-C11LJCJh.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./WarningFilled-Z3CHH0B0.js";import"./SuccessStateIcon-BWqCdJgP.js";import"./WarningStateIcon-D0I_b7vf.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";import"./ExampleStory-DGbKGPMr.js";function c(r){const e=s(s({a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},p()),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(b,{of:y}),`
`,t.jsx(e.h1,{id:"alert",children:"Alert"}),`
`,t.jsx(e.h3,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:"The Alert component is used to display important messages, warnings, or confirmations to users, providing contextual feedback in response to user actions or system events. Alerts are persistent components that remain visible on the page until dismissed by the user and should be used for messages that require user acknowledgment or action."}),`
`,t.jsx(o,{of:A}),`
`,t.jsx(e.h3,{id:"types",children:"Types"}),`
`,t.jsx(e.p,{children:"The Alert component supports four types: success, warning, and error, each with distinct visual styling to communicate the message's importance and nature."}),`
`,t.jsx(e.p,{children:"Success:"}),`
`,t.jsx(o,{of:g}),`
`,t.jsx(e.p,{children:"Warning:"}),`
`,t.jsx(o,{of:w}),`
`,t.jsx(e.p,{children:"Error:"}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.p,{children:"Info:"}),`
`,t.jsx(o,{of:v}),`
`,t.jsx(e.h3,{id:"closable",children:"Closable"}),`
`,t.jsxs(e.p,{children:["Any alert type can include a close button by setting the ",t.jsx(e.code,{children:"closable"})," prop to ",t.jsx(e.code,{children:"true"}),". This allows users to dismiss the alert when they've read and acknowledged the message."]}),`
`,t.jsx(o,{of:E}),`
`,t.jsx(e.h3,{id:"errors",children:"Errors"}),`
`,t.jsx(e.p,{children:"Error alerts are used to communicate critical issues or problems that require user attention. They should always include an icon and can be enhanced with titles and expandable details when additional context is needed."}),`
`,t.jsx(e.h4,{id:"basic-error",children:"Basic Error"}),`
`,t.jsx(e.p,{children:"Use for simple error messages that require immediate attention."}),`
`,t.jsx(l,{of:h}),`
`,t.jsx(e.h4,{id:"error-with-expandcollapse",children:"Error with Expand/Collapse"}),`
`,t.jsx(e.p,{children:"Use when you need to provide detailed error information that can be expanded on demand. This is useful for technical errors that may have verbose explanations or stack traces."}),`
`,t.jsx(l,{of:C}),`
`,t.jsx(e.h3,{id:"related-links",children:"Related Links"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Resource"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"Eames"}),t.jsx(e.td,{children:t.jsx(e.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=413-15306&p=f&t=1Pi9thxrLJt7TsHN-0",rel:"nofollow",children:"Alert Component"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"AntD"}),t.jsx(e.td,{children:t.jsx(e.a,{href:"https://ant.design/components/alert",rel:"nofollow",children:"Alert Component"})})]})]})]})]})}function ee(r={}){const{wrapper:e}=s(s({},p()),r.components);return e?t.jsx(e,d(s({},r),{children:t.jsx(c,s({},r))})):c(r)}export{ee as default};
