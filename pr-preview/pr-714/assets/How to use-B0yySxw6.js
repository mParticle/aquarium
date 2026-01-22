import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BkeRIKkE.js";import"./iframe-DPsSDxI5.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"how-to-use-icons",children:"How to use Icons"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"adding-and-updating-icons",children:"Adding and Updating Icons"}),`
`,e.jsx(n.p,{children:"The Design team provides SVG files with the final icon names. These SVG files must be minified and follow the project's styling guidelines. You can prettify them using the SVGPrettifier tool, which ensures the correct size and properties are applied to the SVG."}),`
`,e.jsx(n.h3,{id:"quick-start-adding-a-new-icon",children:"Quick Start: Adding a New Icon"}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Use the Cursor rule ",e.jsx(n.code,{children:"@add-new-icon.mdc"})," for step-by-step guidance!"]})," This rule will:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Walk you through the complete process"}),`
`,e.jsx(n.li,{children:"Start the required servers (icons-prettifier and storybook)"}),`
`,e.jsx(n.li,{children:"Guide you through each file update in the correct order"}),`
`,e.jsx(n.li,{children:"Help you verify the icon works properly"}),`
`]}),`
`,e.jsx(n.h3,{id:"manual-steps-to-add-a-new-icon",children:"Manual Steps to Add a New Icon:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ensure name of icon follows the desired principles"}),":"]}),`
`]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{style:{fontFamily:"'Nunito Sans', sans-serif"},children:"Here's the naming principles all icons should follow"}),e.jsx(n.p,{children:'Names should be semantic, describing the pattern rather than the shape. For instance, "mp_act_lt_delete" describes an action icon in light style for deletion. Even though it may look like a "trash" icon, the name reflects the specific action (delete) rather than the object (trash).  Multiple icons may have the same shape but different names based on semantic meaning.'}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Prefix: "mp"'}),`
`,e.jsx(n.li,{children:"Category (abbreviated):"}),`
`,e.jsx(n.li,{children:"act (UI Actions)"}),`
`,e.jsx(n.li,{children:"info (Informational)"}),`
`,e.jsx(n.li,{children:"pm (Product Model)"}),`
`,e.jsx(n.li,{children:"[Other categories as needed]"}),`
`,e.jsx(n.li,{children:"Style (abbreviated):"}),`
`,e.jsx(n.li,{children:"lt (Light)"}),`
`,e.jsx(n.li,{children:"dt (Duotone)"}),`
`,e.jsx(n.li,{children:"Other styles as needed"}),`
`,e.jsx(n.li,{children:"Semantic description"}),`
`]})]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Ensure the icon svg structure is correct by using the Prettify tool"}),`:
Use the `,e.jsx(n.a,{href:"?path=/docs/components-other-svgprettifier--documentation",children:"SVGPrettifier Story"}),` to clean up the SVG file and ensure it meets the necessary formatting standards (size, properties, etc).
The `,e.jsx(n.a,{href:"https://mparticle.github.io/aquarium/?path=/docs/components-other-svgprettifier--documentation",rel:"nofollow",children:"SVGPrettifier"})," component is used to upload and prettify SVG files. Each SVG must follow the project's styling guidelines and have a unique name to avoid overwriting existing icons."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Update the Icon Type"}),`:
Add the new icon name to the TypeScript type definition in the `,e.jsx(n.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/types/icons.ts",rel:"nofollow",children:"src/types/icons"})," file."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Update Icon Components"}),`:
Add the icon components in the `,e.jsx(n.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/components/icons/index.ts",rel:"nofollow",children:"src/components/icons"})," directory, where all icon components are stored."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Update the Icons Object"}),`:
Ensure the new icons are included in the Icons object located in `,e.jsx(n.a,{href:"https://github.com/mParticle/aquarium/blob/3abc3b71916ab5a7db3c4f93e06ad2bd5845e1bf/src/constants/Icons.ts",rel:"nofollow",children:"src/constants/Icons"}),". This object is used across the project to reference all available icons."]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"related-links",children:"Related Links"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Resource"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Eames"}),e.jsx("td",{children:e.jsx("a",{href:"https://www.figma.com/design/3j5Nb0oOSkF3DW3URS8yex/mParticle-Icons-1.0.0?node-id=2055-9952&t=K7xlZo0hE2tn2y54-0",children:"Figma Icon library"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eames"}),e.jsx("td",{children:e.jsx("a",{href:"https://mparticle.atlassian.net/wiki/spaces/DMP/pages/3988914258/Icons",children:"Icon Guidelines for designers"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eames"}),e.jsx("td",{children:e.jsx("a",{href:"https://fontawesome.com/search?o=r&s=ligh",children:"Fontawesome Library"})})]})]})]}),`
`,e.jsx(n.h3,{id:"faq",children:"FAQ"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q:"}),` What if an icon in Figma has a FontAwesome name or doesn't follow the standard naming format? Should I name it myself?
`,e.jsx(n.strong,{children:"A:"})," Please contact the design team. They'll provide the correct name and make sure the icon is properly reflected in the design library."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q:"}),` When do we use mParticle custom icons instead of default Ant Design (AntD) icons?
`,e.jsx(n.strong,{children:"A:"})," In our design system Eames, Ant Design (AntD) icons are the primary choice across components. However, custom mParticle icons are used in the following scenarios:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When the design team explicitly requests a customized icon."}),`
`,e.jsx(n.li,{children:"When the AntD library does not offer a suitable icon for a specific use case."}),`
`,e.jsx(n.li,{children:"When an existing AntD icon does not align with mParticle’s design or functional requirements."}),`
`]})]})}function d(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
