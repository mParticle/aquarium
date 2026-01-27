import{j as e}from"./iframe-_QPLlW2H.js";import{useMDXComponents as o}from"./index-D9zZkaA9.js";import"./preload-helper-PPVm8Dsz.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"commits",children:"Commits"}),`
`,e.jsx(n.h2,{id:"commit-conventions-and-pr-titles",children:"Commit conventions and PR titles"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We use ",e.jsx(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",rel:"nofollow",children:"conventional commits"})," to help automating the release process. Both PR titles and commit messages should follow this convention."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/commitizen/cz-cli?tab=readme-ov-file#using-the-command-line-tool",rel:"nofollow",children:"This repo is commitizen friendly"})," so we can use ",e.jsx(n.code,{children:"git cz"}),` to commit changes.
`,e.jsx(n.code,{children:"npx cz"})," is also available if you don't have commitizen installed globally."]}),`
`,e.jsxs(n.li,{children:["We also have a ",e.jsx(n.a,{href:"https://commitlint.js.org/",rel:"nofollow",children:"commitlint"})," setup to enforce the commit message format."]}),`
`]}),`
`,e.jsx(n.p,{children:"The standard format for commit messages is as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<type>[optional scope]: <description>

[optional body]

[optional footer]
`})}),`
`,e.jsxs(n.p,{children:["The following lists the different ",e.jsx(n.code,{children:"types"})," allowed in the commit message:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"feat: A new feature (automatic minor release)"}),`
`,e.jsx(n.li,{children:"fix: A bug fix (automatic patch release)"}),`
`,e.jsx(n.li,{children:"docs: Documentation only changes"}),`
`,e.jsx(n.li,{children:"style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"}),`
`,e.jsx(n.li,{children:"refactor: A code change that neither fixes a bug nor adds a feature"}),`
`,e.jsx(n.li,{children:"perf: A code change that improves performance"}),`
`,e.jsx(n.li,{children:"test: Adding missing or correcting existing tests"}),`
`,e.jsx(n.li,{children:"chore: Changes that don't modify src or test files, such as automatic documentation generation, or building latest assets"}),`
`,e.jsx(n.li,{children:"ci: Changes to CI configuration files/scripts"}),`
`,e.jsx(n.li,{children:"revert: Revert commit"}),`
`,e.jsx(n.li,{children:"build: Changes that affect the build system or other dependencies"}),`
`]}),`
`,e.jsxs(n.p,{children:["In the footer, if there is a breaking change, start your footer with ",e.jsx(n.code,{children:"BREAKING CHANGE:"})," followed by a description."]}),`
`,e.jsx(n.h2,{id:"editor-configuration",children:"Editor configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prettier"}),": For configuring your editor to play nicely with Prettier, take a look at the ",e.jsx(n.a,{href:"https://prettier.io/docs/en/editors",rel:"nofollow",children:"Editors doc page"}),"."]}),`
`,e.jsx(n.li,{children:`Also, if you're using VSCode you might want to set prettier as the default formatter and also turn on "Format on Save" option.`}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ESLint"}),": Check ",e.jsx(n.a,{href:"https://eslint.org/docs/latest/use/integrations",rel:"nofollow",children:"Integrations doc page"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stylelint"}),": Check ",e.jsx(n.a,{href:"https://stylelint.io/awesome-stylelint/#editor-integrations",rel:"nofollow",children:"Editor integrations doc page"})]}),`
`]})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default};
