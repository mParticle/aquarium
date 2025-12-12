var h=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var t=(s,e,r)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,i=(s,e)=>{for(var r in e||(e={}))m.call(e,r)&&t(s,r,e[r]);if(l)for(var r of l(e))g.call(e,r)&&t(s,r,e[r]);return s},o=(s,e)=>d(s,u(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function a(s){const e=i(i({a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul"},c()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"release-process",children:"Release Process"}),`
`,n.jsxs(e.p,{children:["We use ",n.jsx(e.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"})," to automate the versioning and publishing of the mParticle Aquarium component library. Everything is handled by semantic-release, including determining the next version number, generating the release notes, and publishing to npm. You can use the Github Release Aquarium action from the ",n.jsx(e.code,{children:"main"})," branch to release from it."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important:"})," Before releasing a version from main, send a message in the #aquarium Slack channel to align it and sync on other changes that can/should be included in the release."]}),`
`]}),`
`,n.jsx(e.h2,{id:"step-by-step-release-instructions",children:"Step-by-Step Release Instructions"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Verify your changes"}),": Check to make sure your new merged changes haven't already been pushed with a new version"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Navigate to GitHub Actions"}),': Go to the Aquarium codebase and click on "Actions" tab']}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"Release_Images/Image1.png",alt:"Image of Tabs with Action Tab"})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Select Release Workflow"}),': On the left sidebar, click on "Release Aquarium"']}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"Release_Images/Image2.png",alt:"Image of Side Panel with Release Aquarium"})}),`
`,n.jsxs(e.ol,{start:"4",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Run the workflow"}),`: Click the "Run workflow" button and ensure you're running from the `,n.jsx(e.code,{children:"main"})," branch"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"Release_Images/Image3.png",alt:"Image of Run Workflow Button "})}),`
`,n.jsxs(e.ol,{start:"5",children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Clear Nexus cache"}),": After the workflow completes successfully:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Go to Slack and send a message to "Doozer"'}),`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"clear nexus cache"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update local dependencies"}),": Go back to VS Code and run ",n.jsx(e.code,{children:"yarn install"})," within the Aurelia directory to get the latest Aquarium changes"]}),`
`]}),`
`]}),`
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
`]})]})}function b(s={}){const{wrapper:e}=i(i({},c()),s.components);return e?n.jsx(e,o(i({},s),{children:n.jsx(a,i({},s))})):a(s)}export{b as default};
