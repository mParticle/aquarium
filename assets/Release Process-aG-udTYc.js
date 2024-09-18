var h=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(s,e,r)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,i=(s,e)=>{for(var r in e||(e={}))m.call(e,r)&&o(s,r,e[r]);if(t)for(var r of t(e))p.call(e,r)&&o(s,r,e[r]);return s},a=(s,e)=>d(s,u(e));import{j as n}from"./jsx-runtime-CS-_a2eV.js";import{useMDXComponents as c}from"./index-Bqh_nw6E.js";import"./index-Ca44TZ0D.js";function l(s){const e=i(i({a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul"},c()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"release-process",children:"Release Process"}),`
`,n.jsxs(e.p,{children:["We use ",n.jsx(e.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"}),` to automate the versioning and publishing
of the mParticle Aquarium component library. Everything is handled by semantic-release, including determining the next version number,
generating the release notes, and publishing to npm. You can use the Github Release Aquarium action from the `,n.jsx(e.code,{children:"main"})," branch to release from it."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["[!IMPORTANT]",n.jsx(e.br,{}),`
`,"Before releasing a version from main, send a message in the #aquarium Slack channel to align it and sync on other changes that can/should be included in the release."]}),`
`]}),`
`,n.jsx(e.h2,{id:"contributing-with-the-release-process",children:"Contributing with the release process"}),`
`,n.jsxs(e.p,{children:["To make changes to the release process, you can use the ",n.jsx(e.code,{children:"--dry-run"}),` from semantic-release flag to test the release
process without actually publishing a new version.`]}),`
`,n.jsx(e.p,{children:"You will need two environment variables to run the release process locally:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[`NPM_TOKEN: You can create a personal npm account and use a personal token.
Since we are using `,n.jsx(e.code,{children:"--dry-run"})," it won't try to publish anything so having a valid read-only npm token works."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["GITHUB_TOKEN: Create a ",n.jsx(e.a,{href:"https://github.com/settings/tokens",rel:"nofollow",children:"github personal access token (classic)"}),`
and give it access to the mParticle organization via "Configure SSO" button.`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"After settings both variables locally, run the following locally:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npx semantic-release --dry-run
`})}),`
`,n.jsx(e.h2,{id:"additional-readings",children:"Additional readings:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/semantic-release/semantic-release/blob/master/docs/usage/workflow-configuration.md#workflow-configuration",rel:"nofollow",children:"Semantic Release Workflow Configuration"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://docs.npmjs.com/cli/v8/commands/npm-dist-tag#purpose",rel:"nofollow",children:"Understanding npm distribution channels"})}),`
`]})]})}function f(s={}){const{wrapper:e}=i(i({},c()),s.components);return e?n.jsx(e,a(i({},s),{children:n.jsx(l,i({},s))})):l(s)}export{f as default};
