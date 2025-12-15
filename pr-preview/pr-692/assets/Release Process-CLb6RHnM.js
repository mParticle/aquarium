var h=Object.defineProperty,d=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(s,e,r)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,i=(s,e)=>{for(var r in e||(e={}))u.call(e,r)&&l(s,r,e[r]);if(t)for(var r of t(e))g.call(e,r)&&l(s,r,e[r]);return s},a=(s,e)=>d(s,m(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function o(s){const e=i(i({a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul"},c()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"release-process",children:"Release Process"}),`
`,n.jsxs(e.p,{children:["We use ",n.jsx(e.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"})," to automate the versioning and publishing of the mParticle Aquarium component library. Everything is handled by semantic-release, including determining the next version number, generating the release notes, and publishing to npm. You can use the Github Release Aquarium action from the ",n.jsx(e.code,{children:"main"})," branch to release from it."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important:"})," Before releasing a version from main, send a message in the #aquarium Slack channel to align it and sync on other changes that can/should be included in the release."]}),`
`]}),`
`,n.jsx(e.h2,{id:"step-by-step-release-instructions",children:"Step-by-Step Release Instructions"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Verify your changes"}),": Check the ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@mparticle/aquarium?activeTab=versions",rel:"nofollow",children:"npm package page"})," or run ",n.jsx(e.code,{children:"npm view @mparticle/aquarium versions"})," to confirm your changes haven't already been published in a new version"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Navigate to GitHub Actions"}),': Go to the Aquarium codebase and click on "Actions" tab']}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/Release_Images/Image1.png",alt:"Image of Tabs with Action Tab"})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Select Release Workflow"}),': On the left sidebar, click on "Release Aquarium"']}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/Release_Images/Image2.png",alt:"Image of Side Panel with Release Aquarium"})}),`
`,n.jsxs(e.ol,{start:"4",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Run the workflow"}),`: Click the "Run workflow" button and ensure you're running from the `,n.jsx(e.code,{children:"main"})," branch"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/Release_Images/Image3.png",alt:"Image of Run Workflow Button "})}),`
`,n.jsxs(e.ol,{start:"5",children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Clear Nexus cache"})," (CDP Platform only): After the workflow completes successfully:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Go to Slack and send a message to "Doozer"'}),`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"clear nexus cache"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update local dependencies"}),": In your frontend application repository, run ",n.jsx(e.code,{children:"yarn install"})," or ",n.jsx(e.code,{children:"npm install"})," to get the latest Aquarium changes"]}),`
`]}),`
`]})]})}function b(s={}){const{wrapper:e}=i(i({},c()),s.components);return e?n.jsx(e,a(i({},s),{children:n.jsx(o,i({},s))})):o(s)}export{b as default};
