var h=Object.defineProperty,a=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(t,e,s)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,i=(t,e)=>{for(var s in e||(e={}))j.call(e,s)&&r(t,s,e[s]);if(o)for(var s of o(e))x.call(e,s)&&r(t,s,e[s]);return t},c=(t,e)=>a(t,p(e));import{j as n}from"./jsx-runtime-CS-_a2eV.js";import{useMDXComponents as l}from"./index-Bqh_nw6E.js";import"./index-Ca44TZ0D.js";function d(t){const e=i(i({a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong"},l()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"icons-documentation",children:"Icons Documentation"}),`
`,n.jsx(e.h3,{id:"adding-and-updating-icons",children:"Adding and Updating Icons"}),`
`,n.jsxs(e.p,{children:["The Design team provides SVG files with the final icon names. These SVG files must be minified and follow the project's styling guidelines. You can prettify them using the ",n.jsx(e.code,{children:"SVGPrettifier"})," tool, which ensures the correct size and properties are applied to the SVG."]}),`
`,n.jsx(e.h4,{id:"steps-to-add-a-new-icon",children:"Steps to Add a New Icon:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Prettify the SVG"}),":",n.jsx(e.br,{}),`
`,"Use the SVGPrettifier Story to clean up the SVG file and ensure it meets the necessary formatting standards (size, properties, etc.)."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update the Icon Type"}),":",n.jsx(e.br,{}),`
`,"Add the new icon name to the TypeScript type definition in the ",n.jsx(e.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/types/icons.ts",rel:"nofollow",children:"src/types/icons"})," file."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update Icon Components"}),":",n.jsx(e.br,{}),`
`,"Add the icon components in the ",n.jsx(e.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/components/icons/index.ts",rel:"nofollow",children:"src/components/icons"})," directory, where all icon components are stored."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update the Icons Object"}),":",n.jsx(e.br,{}),`
`,"Ensure the new icons are included in the ",n.jsx(e.code,{children:"Icons"})," object located in ",n.jsx(e.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/constants/Icons.ts",rel:"nofollow",children:"src/constants/Icons"}),". This object is used across the project to reference all available icons."]}),`
`]}),`
`]}),`
`,n.jsxs(e.h3,{id:"the-icontable-component",children:["The ",n.jsx(e.code,{children:"IconTable"})," Component"]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"IconTable"})," component is used to display a table of all available icons in the project."]}),`
`,n.jsxs(e.h3,{id:"using-the-svgprettifier-tool",children:["Using the ",n.jsx(e.code,{children:"SVGPrettifier"})," Tool"]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"SVGPrettifier"})," component is used to upload and prettify SVG files. Each SVG must follow the project's styling guidelines and have a unique name to avoid overwriting existing icons."]}),`
`,n.jsx(e.h3,{id:"starting-the-server",children:"Starting the Server"}),`
`,n.jsxs(e.p,{children:["To process the uploaded SVGs with the ",n.jsx(e.code,{children:"SVGPrettifier"}),", a server must be running locally. Follow these steps to start the server:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Navigate to the root of the project directory."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Run the following command to start the server:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run icons-prettifier
`})}),`
`]}),`
`]})]})}function g(t={}){const{wrapper:e}=i(i({},l()),t.components);return e?n.jsx(e,c(i({},t),{children:n.jsx(d,i({},t))})):d(t)}export{g as default};
