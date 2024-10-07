var d=Object.defineProperty,a=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var l=(i,e,s)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,t=(i,e)=>{for(var s in e||(e={}))x.call(e,s)&&l(i,s,e[s]);if(r)for(var s of r(e))p.call(e,s)&&l(i,s,e[s]);return i},o=(i,e)=>a(i,j(e));import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{useMDXComponents as h}from"./index-BI4Okn8T.js";import"./index-CNk6hRaE.js";function c(i){const e=t(t({a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},h()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"icons",children:"Icons"}),`
`,n.jsx(e.h3,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#naming-principles",children:"Naming Principles"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#adding-and-updating-icons",children:"Adding and Updating Icons"})}),`
`,n.jsx(e.li,{children:n.jsxs(e.a,{href:"#the-icontable-component",children:["The ",n.jsx(e.code,{children:"IconTable"})," Component"]})}),`
`,n.jsx(e.li,{children:n.jsxs(e.a,{href:"#using-the-svgprettifier-tool",children:["Using the ",n.jsx(e.code,{children:"SVGPrettifier"})," Tool"]})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#starting-the-server",children:"Starting the Server"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#related-links",children:"Related Links"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#faq",children:"FAQ"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["mParticle icon library is mP icons, a carefully curated collection based on ",n.jsx(e.a,{href:"https://fontawesome.com/search?o=r&s=light",rel:"nofollow",children:"FontAwesome"}),". Our design team has selected icons specifically for mParticle use cases, defined the semantic layer, and applied customizations as needed."]}),`
`,n.jsx(e.h3,{id:"naming-principles",children:"Naming Principles"}),`
`,n.jsx(e.p,{children:'Names should be semantic, describing the pattern rather than the shape. For instance, "mp_act_lt_delete" describes an action icon in light style for deletion. Even though it may look like a "trash" icon, the name reflects the specific action (delete) rather than the object (trash).  Multiple icons may have the same shape but different names based on semantic meaning.'}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Prefix: "mp"'}),`
`,n.jsxs(e.li,{children:["Category (abbreviated):",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"act (UI Actions)"}),`
`,n.jsx(e.li,{children:"info (Informational)"}),`
`,n.jsx(e.li,{children:"pm (Product Model)"}),`
`,n.jsx(e.li,{children:"[Other categories as needed]"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Style (abbreviated):",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"lt (Light)"}),`
`,n.jsx(e.li,{children:"dt (Duotone)"}),`
`,n.jsx(e.li,{children:"Other styles as needed"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Semantic description"}),`
`]}),`
`,n.jsx(e.h3,{id:"adding-and-updating-icons",children:"Adding and Updating Icons"}),`
`,n.jsx(e.p,{children:"The Design team provides SVG files with the final icon names. These SVG files must be minified and follow the project's styling guidelines. You can prettify them using the SVGPrettifier tool, which ensures the correct size and properties are applied to the SVG."}),`
`,n.jsx(e.h3,{id:"steps-to-add-a-new-icon",children:"Steps to Add a New Icon:"}),`
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
`,"Ensure the new icons are included in the Icons object located in ",n.jsx(e.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/constants/Icons.ts",rel:"nofollow",children:"src/constants/Icons"}),". This object is used across the project to reference all available icons."]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"the-icontable-component",children:"The IconTable Component"}),`
`,n.jsx(e.p,{children:"The IconTable component is used to display a table of all available icons in the project."}),`
`,n.jsx(e.h3,{id:"using-the-svgprettifier-tool",children:"Using the SVGPrettifier Tool"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/components-other-svgprettifier--documentation",rel:"nofollow",children:"SVGPrettifier"})," component is used to upload and prettify SVG files. Each SVG must follow the project's styling guidelines and have a unique name to avoid overwriting existing icons."]}),`
`,n.jsx(e.h3,{id:"starting-the-server",children:"Starting the Server"}),`
`,n.jsx(e.p,{children:"To process the uploaded SVGs with the SVGPrettifier, a server must be running locally. Follow these steps to start the server:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Navigate to the root of the project directory."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Run the following command to start the server:"}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:`bash
npm run icons-prettifier`}),`
`,n.jsx(e.h3,{id:"related-links",children:"Related Links"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Resource"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Eames"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.figma.com/design/3j5Nb0oOSkF3DW3URS8yex/mParticle-Icons-1.0.0?node-id=2055-9952&t=K7xlZo0hE2tn2y54-0",rel:"nofollow",children:"Figma Icon library"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Eames"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://mparticle.atlassian.net/wiki/spaces/DMP/pages/3988914258/Icons",rel:"nofollow",children:"Icon Guidelines for designers"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Eames"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://fontawesome.com/search?o=r&s=ligh",rel:"nofollow",children:"Fontawesome Library"})})]})]})]}),`
`,n.jsx(e.h3,{id:"faq",children:"FAQ"}),`
`,n.jsx(e.h3,{id:"qa",children:"Q&A"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q:"})," What if an icon in Figma has a FontAwesome name or doesn't follow the standard naming format? Should I name it myself?",n.jsx(e.br,{}),`
`,n.jsx(e.strong,{children:"A:"})," Please contact the design team. They'll provide the correct name and make sure the icon is properly reflected in the design library."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q:"})," When do we use mParticle custom icons instead of default Ant Design (AntD) icons?",n.jsx(e.br,{}),`
`,n.jsx(e.strong,{children:"A:"})," In our design system Eames, Ant Design (AntD) icons are the primary choice across components. However, custom mParticle icons are used in the following scenarios:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"When the design team explicitly requests a customized icon."}),`
`,n.jsx(e.li,{children:"When the AntD library does not offer a suitable icon for a specific use case."}),`
`,n.jsx(e.li,{children:"When an existing AntD icon does not align with mParticle’s design or functional requirements."}),`
`]})]})}function b(i={}){const{wrapper:e}=t(t({},h()),i.components);return e?n.jsx(e,o(t({},i),{children:n.jsx(c,t({},i))})):c(i)}export{b as default};
