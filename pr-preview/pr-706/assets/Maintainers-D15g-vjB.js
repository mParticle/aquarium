var h=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var t=(s,e,r)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,i=(s,e)=>{for(var r in e||(e={}))m.call(e,r)&&t(s,r,e[r]);if(o)for(var r of o(e))p.call(e,r)&&t(s,r,e[r]);return s},l=(s,e)=>d(s,u(e));import{j as n}from"./jsx-runtime-GRP_BLAX.js";import{useMDXComponents as c}from"./index-BI4Okn8T.js";import"./index-CNk6hRaE.js";function a(s){const e=i(i({a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul"},c()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"maintainers",children:"Maintainers"}),`
`,n.jsx(e.h2,{id:"contributing-to-the-release-process",children:"Contributing to the Release Process"}),`
`,n.jsxs(e.p,{children:["To make changes to the release process, you can use the ",n.jsx(e.code,{children:"--dry-run"})," from semantic-release flag to test the release process without actually publishing a new version."]}),`
`,n.jsx(e.h3,{id:"required-environment-variables",children:"Required Environment Variables"}),`
`,n.jsx(e.p,{children:"You will need two environment variables to run the release process locally:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"NPM_TOKEN"}),": You can create a personal npm account and use a personal token. Since we are using ",n.jsx(e.code,{children:"--dry-run"})," it won't try to publish anything so having a valid read-only npm token works."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"GITHUB_TOKEN"}),": Create a ",n.jsx(e.a,{href:"https://github.com/settings/tokens",rel:"nofollow",children:"GitHub personal access token (classic)"}),' and give it access to the mParticle organization via "Configure SSO" button.']}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"testing-locally",children:"Testing Locally"}),`
`,n.jsx(e.p,{children:"After setting both variables locally, run the following:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx semantic-release --dry-run
`})}),`
`,n.jsx(e.h2,{id:"additional-resources",children:"Additional Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/semantic-release/semantic-release/blob/master/docs/usage/workflow-configuration.md#workflow-configuration",rel:"nofollow",children:"Semantic Release Workflow Configuration"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://docs.npmjs.com/cli/v8/commands/npm-dist-tag#purpose",rel:"nofollow",children:"Understanding npm distribution channels"})}),`
`]})]})}function b(s={}){const{wrapper:e}=i(i({},c()),s.components);return e?n.jsx(e,l(i({},s),{children:n.jsx(a,i({},s))})):a(s)}export{b as default};
