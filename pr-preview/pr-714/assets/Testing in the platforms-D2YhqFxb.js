import{j as e}from"./iframe-B6Y2oegk.js";import{useMDXComponents as t}from"./index-CGLF62Z_.js";import"./preload-helper-PPVm8Dsz.js";function r(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"testing-in-the-platforms",children:"Testing in the platforms"}),`
`,e.jsx(n.p,{children:"In order to test your changes, you will need to link the local version of the library. To do this, run the following commands:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Make sure to have the library built by running ",e.jsx(n.code,{children:"npm run build"}),". The linked version will use the build files from ",e.jsx(n.em,{children:"dist/"}),` folder.
`,e.jsx(n.strong,{children:"A new build is required whenever you make changes"})," to the library code!"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn link"})," for Nancy, ",e.jsx(n.code,{children:"npm link"})," Indicative, in the root of the library"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn link @mparticle/aquarium"})," for Nancy, ",e.jsx(n.code,{children:"npm link @mparticle/aquarium"})," for Indicative in the root of the platforms"]}),`
`,e.jsxs(n.li,{children:["Make sure your ",e.jsx(n.em,{children:"/node_modules/@mparticle/aquarium"})," folder contains all of the Aquarium code"]}),`
`]}),`
`,e.jsx(n.h2,{id:"testing-by-installing-from-a-branch",children:"Testing by installing from a branch"}),`
`,e.jsxs(n.p,{children:["Another way to test your changes is by installing the library from a branch. To do this, we need to push the ",e.jsx(n.em,{children:"dist/"}),` folder to the remote
and install it directly from there with the following command:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`yarn add https://github.com/mParticle/aquarium#<branch-name>
`})}),`
`,e.jsx(n.h2,{id:"testing-by-releasing-an-ad-hoc-version",children:"Testing by releasing an ad-hoc version"}),`
`,e.jsxs(n.p,{children:["To test ad-hoc versions of the Aquarium we use ",e.jsx(n.code,{children:"feat/"}),", ",e.jsx(n.code,{children:"fix/"})," or ",e.jsx(n.code,{children:"chore/"}),` branchs on Github and their corresponding distribution channels on npm.
This allows us to release specific versions for testing specific features and install them on the platforms. To release it,
just run the Github Action from the the branch you want to release.`]})]})}function h(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{h as default};
