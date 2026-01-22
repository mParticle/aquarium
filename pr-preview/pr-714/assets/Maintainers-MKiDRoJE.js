import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BkeRIKkE.js";import"./iframe-DPsSDxI5.js";import"./preload-helper-PPVm8Dsz.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"maintainers",children:"Maintainers"}),`
`,e.jsx(n.h2,{id:"contributing-to-the-release-process",children:"Contributing to the Release Process"}),`
`,e.jsxs(n.p,{children:["To make changes to the release process, you can use the ",e.jsx(n.code,{children:"--dry-run"})," from semantic-release flag to test the release process without actually publishing a new version."]}),`
`,e.jsx(n.h3,{id:"required-environment-variables",children:"Required Environment Variables"}),`
`,e.jsx(n.p,{children:"You will need two environment variables to run the release process locally:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NPM_TOKEN"}),": You can create a personal npm account and use a personal token. Since we are using ",e.jsx(n.code,{children:"--dry-run"})," it won't try to publish anything so having a valid read-only npm token works."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"GITHUB_TOKEN"}),": Create a ",e.jsx(n.a,{href:"https://github.com/settings/tokens",rel:"nofollow",children:"GitHub personal access token (classic)"}),' and give it access to the mParticle organization via "Configure SSO" button.']}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"testing-locally",children:"Testing Locally"}),`
`,e.jsx(n.p,{children:"After setting both variables locally, run the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx semantic-release --dry-run
`})}),`
`,e.jsx(n.h2,{id:"additional-resources",children:"Additional Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/semantic-release/semantic-release/blob/master/docs/usage/workflow-configuration.md#workflow-configuration",rel:"nofollow",children:"Semantic Release Workflow Configuration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.npmjs.com/cli/v8/commands/npm-dist-tag#purpose",rel:"nofollow",children:"Understanding npm distribution channels"})}),`
`]})]})}function c(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{c as default};
