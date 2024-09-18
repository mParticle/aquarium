var a=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(i,e,t)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,r=(i,e)=>{for(var t in e||(e={}))m.call(e,t)&&o(i,t,e[t]);if(s)for(var t of s(e))x.call(e,t)&&o(i,t,e[t]);return i},l=(i,e)=>d(i,u(e));import{j as n}from"./jsx-runtime-CS-_a2eV.js";import{useMDXComponents as c}from"./index-Bqh_nw6E.js";import"./index-Ca44TZ0D.js";function h(i){const e=r(r({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"testing-in-the-platforms",children:"Testing in the platforms"}),`
`,n.jsx(e.h2,{id:"testing-in-the-cdp",children:"Testing in the CDP"}),`
`,n.jsx(e.p,{children:"In order to test your changes, you will need to link the local version of the library. To do this, run the following commands:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Make sure to have the library built by running ",n.jsx(e.code,{children:"npx vite build"}),". The linked version will use the build files from ",n.jsx(e.em,{children:"dist/"})," folder."]}),`
`,n.jsxs(e.li,{children:["Make sure the ",n.jsx(e.code,{children:"resolve.symlinks"})," property in you webpack config is set to ",n.jsx(e.code,{children:"false"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"yarn link"})," in the root of the library"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"yarn link @mparticle/aquarium"})," in the root of Nancy"]}),`
`,n.jsxs(e.li,{children:["Make sure your ",n.jsx(e.em,{children:"/node_modules/@mparticle/aquarium"})," folder contains all of the Aquarium code"]}),`
`]}),`
`,n.jsx(e.h2,{id:"testing-in-analytics",children:"Testing in Analytics"}),`
`,n.jsx(e.p,{children:"TODO"}),`
`,n.jsx(e.h2,{id:"testing-by-installing-from-a-branch",children:"Testing by installing from a branch"}),`
`,n.jsxs(e.p,{children:["Another way to test your changes is by installing the library from a branch. To do this, we need to push the ",n.jsx(e.em,{children:"dist/"}),` folder to the remote
and install it directly from there with the following command:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`yarn add https://github.com/mParticle/aquarium#<branch-name>
`})}),`
`,n.jsx(e.h2,{id:"testing-by-releasing-an-ad-hoc-version",children:"Testing by releasing an ad-hoc version"}),`
`,n.jsxs(e.p,{children:["To test ad-hoc versions of the Aquarium we use ",n.jsx(e.code,{children:"feat/"}),", ",n.jsx(e.code,{children:"fix/"})," or ",n.jsx(e.code,{children:"chore/"}),` branchs on Github and their corresponding distribution channels on npm.
This allows us to release specific versions for testing specific features and install them on the platforms. To release it,
just run the Github Action from the the branch you want to release.`]})]})}function g(i={}){const{wrapper:e}=r(r({},c()),i.components);return e?n.jsx(e,l(r({},i),{children:n.jsx(h,r({},i))})):h(i)}export{g as default};
