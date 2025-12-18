var h=Object.defineProperty,d=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(t,e,i)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,o=(t,e)=>{for(var i in e||(e={}))f.call(e,i)&&r(t,i,e[i]);if(s)for(var i of s(e))g.call(e,i)&&r(t,i,e[i]);return t},l=(t,e)=>d(t,m(e));import{j as n}from"./jsx-runtime-GRP_BLAX.js";import{useMDXComponents as a}from"./index-BI4Okn8T.js";import"./index-CNk6hRaE.js";function c(t){const e=o(o({a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul"},a()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"commits",children:"Commits"}),`
`,n.jsx(e.h2,{id:"commit-conventions-and-pr-titles",children:"Commit conventions and PR titles"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["We use ",n.jsx(e.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",rel:"nofollow",children:"conventional commits"})," to help automating the release process. Both PR titles and commit messages should follow this convention."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/commitizen/cz-cli?tab=readme-ov-file#using-the-command-line-tool",rel:"nofollow",children:"This repo is commitizen friendly"})," so we can use ",n.jsx(e.code,{children:"git cz"}),` to commit changes.
`,n.jsx(e.code,{children:"npx cz"})," is also available if you don't have commitizen installed globally."]}),`
`,n.jsxs(e.li,{children:["We also have a ",n.jsx(e.a,{href:"https://commitlint.js.org/",rel:"nofollow",children:"commitlint"})," setup to enforce the commit message format."]}),`
`]}),`
`,n.jsx(e.p,{children:"The standard format for commit messages is as follows:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<type>[optional scope]: <description>

[optional body]

[optional footer]
`})}),`
`,n.jsxs(e.p,{children:["The following lists the different ",n.jsx(e.code,{children:"types"})," allowed in the commit message:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"feat: A new feature (automatic minor release)"}),`
`,n.jsx(e.li,{children:"fix: A bug fix (automatic patch release)"}),`
`,n.jsx(e.li,{children:"docs: Documentation only changes"}),`
`,n.jsx(e.li,{children:"style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"}),`
`,n.jsx(e.li,{children:"refactor: A code change that neither fixes a bug nor adds a feature"}),`
`,n.jsx(e.li,{children:"perf: A code change that improves performance"}),`
`,n.jsx(e.li,{children:"test: Adding missing or correcting existing tests"}),`
`,n.jsx(e.li,{children:"chore: Changes that don't modify src or test files, such as automatic documentation generation, or building latest assets"}),`
`,n.jsx(e.li,{children:"ci: Changes to CI configuration files/scripts"}),`
`,n.jsx(e.li,{children:"revert: Revert commit"}),`
`,n.jsx(e.li,{children:"build: Changes that affect the build system or other dependencies"}),`
`]}),`
`,n.jsxs(e.p,{children:["In the footer, if there is a breaking change, start your footer with ",n.jsx(e.code,{children:"BREAKING CHANGE:"})," followed by a description."]}),`
`,n.jsx(e.h2,{id:"editor-configuration",children:"Editor configuration"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Prettier"}),": For configuring your editor to play nicely with Prettier, take a look at the ",n.jsx(e.a,{href:"https://prettier.io/docs/en/editors",rel:"nofollow",children:"Editors doc page"}),"."]}),`
`,n.jsx(e.li,{children:`Also, if you're using VSCode you might want to set prettier as the default formatter and also turn on "Format on Save" option.`}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ESLint"}),": Check ",n.jsx(e.a,{href:"https://eslint.org/docs/latest/use/integrations",rel:"nofollow",children:"Integrations doc page"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Stylelint"}),": Check ",n.jsx(e.a,{href:"https://stylelint.io/awesome-stylelint/#editor-integrations",rel:"nofollow",children:"Editor integrations doc page"})]}),`
`]})]})}function w(t={}){const{wrapper:e}=o(o({},a()),t.components);return e?n.jsx(e,l(o({},t),{children:n.jsx(c,o({},t))})):c(t)}export{w as default};
