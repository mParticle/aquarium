import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BkeRIKkE.js";import"./iframe-DPsSDxI5.js";import"./preload-helper-PPVm8Dsz.js";function o(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"release-process",children:"Release Process"}),`
`,e.jsxs(n.p,{children:["We use ",e.jsx(n.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"})," to automate the versioning and publishing of the mParticle Aquarium component library. Everything is handled by semantic-release, including determining the next version number, generating the release notes, and publishing to npm. You can use the Github Release Aquarium action from the ",e.jsx(n.code,{children:"main"})," branch to release from it."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," Before releasing a version from main, send a message in the ",e.jsx(n.a,{href:"https://chat.google.com/room/AAQADRm8Au8?cls=7",rel:"nofollow",children:"Aquarium Google Chat room"})," to align and sync on other changes that can/should be included in the release."]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-by-step-release-instructions",children:"Step-by-Step Release Instructions"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Verify your changes"}),": Check the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@mparticle/aquarium?activeTab=versions",rel:"nofollow",children:"npm package page"})," or run ",e.jsx(n.code,{children:"npm view @mparticle/aquarium versions"})," to confirm your changes haven't already been published in a new version"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Navigate to GitHub Actions"}),': Go to the Aquarium codebase and click on "Actions" tab']}),`
`]}),`
`]}),`
`,e.jsx("img",{src:"/images/Release_Images/Image1.png",alt:"Image of Tabs with Action Tab",width:"600"}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select Release Workflow"}),': On the left sidebar, click on "Release Aquarium"']}),`
`]}),`
`,e.jsx("img",{src:"/images/Release_Images/Image2.png",alt:"Image of Side Panel with Release Aquarium",width:"300"}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Run the workflow"}),`: Click the "Run workflow" button and ensure you're running from the `,e.jsx(n.code,{children:"main"})," branch"]}),`
`]}),`
`,e.jsx("img",{src:"/images/Release_Images/Image3.png",alt:"Image of Run Workflow Button",width:"600"}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Update local dependencies"}),": In your frontend application repository, run ",e.jsx(n.code,{children:"yarn install"})," or ",e.jsx(n.code,{children:"npm install"})," to get the latest Aquarium changes"]}),`
`]}),`
`,e.jsx(n.h3,{id:"optional-cdp-platform-only",children:"Optional (CDP Platform only)"}),`
`,e.jsx(n.p,{children:"After the workflow completes successfully, clear the Nexus cache:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Go to Slack and send a message to "Doozer"'}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"clear nexus cache"})]}),`
`]})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{c as default};
