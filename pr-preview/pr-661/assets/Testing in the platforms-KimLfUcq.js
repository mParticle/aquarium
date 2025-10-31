var c=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var s=(i,e,r)=>e in i?c(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,t=(i,e)=>{for(var r in e||(e={}))m.call(e,r)&&s(i,r,e[r]);if(o)for(var r of o(e))f.call(e,r)&&s(i,r,e[r]);return i},l=(i,e)=>d(i,u(e));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as a}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function h(i){const e=t(t({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul"},a()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"testing-in-the-platforms",children:"Testing in the platforms"}),`
`,n.jsx(e.p,{children:"In order to test your changes, you will need to link the local version of the library. To do this, run the following commands:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Make sure to have the library built by running ",n.jsx(e.code,{children:"npm run build"}),". The linked version will use the build files from ",n.jsx(e.em,{children:"dist/"}),` folder.
`,n.jsx(e.strong,{children:"A new build is required whenever you make changes"})," to the library code!"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"yarn link"})," for Nancy, ",n.jsx(e.code,{children:"npm link"})," Indicative, in the root of the library"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"yarn link @mparticle/aquarium"})," for Nancy, ",n.jsx(e.code,{children:"npm link @mparticle/aquarium"})," for Indicative in the root of the platforms"]}),`
`,n.jsxs(e.li,{children:["Make sure your ",n.jsx(e.em,{children:"/node_modules/@mparticle/aquarium"})," folder contains all of the Aquarium code"]}),`
`]}),`
`,n.jsx(e.h2,{id:"testing-by-installing-from-a-branch",children:"Testing by installing from a branch"}),`
`,n.jsxs(e.p,{children:["Another way to test your changes is by installing the library from a branch. To do this, we need to push the ",n.jsx(e.em,{children:"dist/"}),` folder to the remote
and install it directly from there with the following command:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`yarn add https://github.com/mParticle/aquarium#<branch-name>
`})}),`
`,n.jsx(e.h2,{id:"testing-by-releasing-an-ad-hoc-version",children:"Testing by releasing an ad-hoc version"}),`
`,n.jsxs(e.p,{children:["To test ad-hoc versions of the Aquarium we use ",n.jsx(e.code,{children:"feat/"}),", ",n.jsx(e.code,{children:"fix/"})," or ",n.jsx(e.code,{children:"chore/"}),` branchs on Github and their corresponding distribution channels on npm.
This allows us to release specific versions for testing specific features and install them on the platforms. To release it,
just run the Github Action from the the branch you want to release.`]})]})}function y(i={}){const{wrapper:e}=t(t({},a()),i.components);return e?n.jsx(e,l(t({},i),{children:n.jsx(h,t({},i))})):h(i)}export{y as default};
