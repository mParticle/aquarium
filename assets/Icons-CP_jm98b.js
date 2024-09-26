var d=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,i=(s,e)=>{for(var t in e||(e={}))m.call(e,t)&&r(s,t,e[t]);if(o)for(var t of o(e))u.call(e,t)&&r(s,t,e[t]);return s},c=(s,e)=>h(s,p(e));import{j as n}from"./jsx-runtime-CS-_a2eV.js";import{useMDXComponents as a}from"./index-Bqh_nw6E.js";import"./index-Ca44TZ0D.js";function l(s){const e=i(i({a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul"},a()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"icons-documentation",children:"Icons Documentation"}),`
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
`]}),`
`,n.jsx(e.h3,{id:"faq",children:"FAQ:"}),`
`,n.jsx(e.p,{children:`Q: What if an icon in Figma has a FontAwesome name or doesn't follow the standard naming format? Should I name it myself?
A: Please contact the design team. They'll provide the correct name and make sure the icon is properly reflected in the design library.`}),`
`,n.jsx(e.p,{children:`Q: When do we use mParticle custom icons instead of default Ant Design (AntD) icons?
A: In our design system, Ant Design (AntD) icons are the primary choice across components. However, custom mParticle icons are used in the following scenarios:`}),`
`,n.jsx(e.p,{children:`Q: When do we use mParticle custom icons instead of default Ant Design (AntD) icons?
A: In our design system, Ant Design (AntD) icons are the primary choice across components. However, custom mParticle icons are used in the following scenarios:`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"When the design team explicitly requests a customized icon."}),`
`,n.jsx(e.li,{children:"When the AntD library does not offer a suitable icon for a specific use case."}),`
`,n.jsx(e.li,{children:"When an existing AntD icon does not align with mParticle’s design or functional requirements."}),`
`]})]})}function b(s={}){const{wrapper:e}=i(i({},a()),s.components);return e?n.jsx(e,c(i({},s),{children:n.jsx(l,i({},s))})):l(s)}export{b as default};
