var a=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(s,e,i)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,t=(s,e)=>{for(var i in e||(e={}))p.call(e,i)&&o(s,i,e[i]);if(r)for(var i of r(e))x.call(e,i)&&o(s,i,e[i]);return s},c=(s,e)=>h(s,m(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as d}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function l(s){const e=t(t({a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},d()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"how-to-use-icons",children:"How to use Icons"}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"adding-and-updating-icons",children:"Adding and Updating Icons"}),`
`,n.jsx(e.p,{children:"The Design team provides SVG files with the final icon names. These SVG files must be minified and follow the project's styling guidelines. You can prettify them using the SVGPrettifier tool, which ensures the correct size and properties are applied to the SVG."}),`
`,n.jsx(e.h3,{id:"quick-start-adding-a-new-icon",children:"Quick Start: Adding a New Icon"}),`
`,n.jsxs(e.p,{children:[n.jsxs(e.strong,{children:["Use the Cursor rule ",n.jsx(e.code,{children:"@add-new-icon.mdc"})," for step-by-step guidance!"]})," This rule will:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Walk you through the complete process"}),`
`,n.jsx(e.li,{children:"Start the required servers (icons-prettifier and storybook)"}),`
`,n.jsx(e.li,{children:"Guide you through each file update in the correct order"}),`
`,n.jsx(e.li,{children:"Help you verify the icon works properly"}),`
`]}),`
`,n.jsx(e.h3,{id:"manual-steps-to-add-a-new-icon",children:"Manual Steps to Add a New Icon:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ensure name of icon follows the desired principles"}),":"]}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{style:{fontFamily:"'Nunito Sans', sans-serif"},children:"Here's the naming principles all icons should follow"}),n.jsx(e.p,{children:'Names should be semantic, describing the pattern rather than the shape. For instance, "mp_act_lt_delete" describes an action icon in light style for deletion. Even though it may look like a "trash" icon, the name reflects the specific action (delete) rather than the object (trash).  Multiple icons may have the same shape but different names based on semantic meaning.'}),n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Prefix: "mp"'}),`
`,n.jsx(e.li,{children:"Category (abbreviated):"}),`
`,n.jsx(e.li,{children:"act (UI Actions)"}),`
`,n.jsx(e.li,{children:"info (Informational)"}),`
`,n.jsx(e.li,{children:"pm (Product Model)"}),`
`,n.jsx(e.li,{children:"[Other categories as needed]"}),`
`,n.jsx(e.li,{children:"Style (abbreviated):"}),`
`,n.jsx(e.li,{children:"lt (Light)"}),`
`,n.jsx(e.li,{children:"dt (Duotone)"}),`
`,n.jsx(e.li,{children:"Other styles as needed"}),`
`,n.jsx(e.li,{children:"Semantic description"}),`
`]})]}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Ensure the icon svg structure is correct by using the Prettify tool"}),`:
Use the `,n.jsx(e.a,{href:"?path=/docs/components-other-svgprettifier--documentation",children:"SVGPrettifier Story"}),` to clean up the SVG file and ensure it meets the necessary formatting standards (size, properties, etc).
The `,n.jsx(e.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/components-other-svgprettifier--documentation",rel:"nofollow",children:"SVGPrettifier"})," component is used to upload and prettify SVG files. Each SVG must follow the project's styling guidelines and have a unique name to avoid overwriting existing icons."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update the Icon Type"}),`:
Add the new icon name to the TypeScript type definition in the `,n.jsx(e.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/types/icons.ts",rel:"nofollow",children:"src/types/icons"})," file."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update Icon Components"}),`:
Add the icon components in the `,n.jsx(e.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/components/icons/index.ts",rel:"nofollow",children:"src/components/icons"})," directory, where all icon components are stored."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update the Icons Object"}),`:
Ensure the new icons are included in the Icons object located in `,n.jsx(e.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/constants/Icons.ts",rel:"nofollow",children:"src/constants/Icons"}),". This object is used across the project to reference all available icons."]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"related-links",children:"Related Links"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Resource"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Eames"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.figma.com/design/3j5Nb0oOSkF3DW3URS8yex/mParticle-Icons-1.0.0?node-id=2055-9952&t=K7xlZo0hE2tn2y54-0",rel:"nofollow",children:"Figma Icon library"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Eames"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://mparticle.atlassian.net/wiki/spaces/DMP/pages/3988914258/Icons",rel:"nofollow",children:"Icon Guidelines for designers"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Eames"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://fontawesome.com/search?o=r&s=ligh",rel:"nofollow",children:"Fontawesome Library"})})]})]})]}),`
`,n.jsx(e.h3,{id:"faq",children:"FAQ"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q:"}),` What if an icon in Figma has a FontAwesome name or doesn't follow the standard naming format? Should I name it myself?
`,n.jsx(e.strong,{children:"A:"})," Please contact the design team. They'll provide the correct name and make sure the icon is properly reflected in the design library."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q:"}),` When do we use mParticle custom icons instead of default Ant Design (AntD) icons?
`,n.jsx(e.strong,{children:"A:"})," In our design system Eames, Ant Design (AntD) icons are the primary choice across components. However, custom mParticle icons are used in the following scenarios:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"When the design team explicitly requests a customized icon."}),`
`,n.jsx(e.li,{children:"When the AntD library does not offer a suitable icon for a specific use case."}),`
`,n.jsx(e.li,{children:"When an existing AntD icon does not align with mParticle’s design or functional requirements."}),`
`]})]})}function b(s={}){const{wrapper:e}=t(t({},d()),s.components);return e?n.jsx(e,c(t({},s),{children:n.jsx(l,t({},s))})):l(s)}export{b as default};
