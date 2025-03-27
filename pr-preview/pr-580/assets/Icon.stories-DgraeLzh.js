var b=Object.defineProperty,v=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?b(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o=(n,e)=>{for(var t in e||(e={}))j.call(e,t)&&p(n,t,e[t]);if(d)for(var t of d(e))w.call(e,t)&&p(n,t,e[t]);return n},i=(n,e)=>v(n,T(e));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{F as D,I as k,a as m}from"./NavigationItemsService-Cb2WCuMA.js";import"./_baseClone-DBzvlRjn.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const r=({color:n="black",size:e="lg",name:t,variant:u})=>{const y=Object.keys(m),I={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"10px",alignItems:"center",justifyItems:"center"};return s.jsx("div",{style:I,children:t?a(t):y.map(a)});function a(c){const l=m[c].deprecated,f=l?{textDecoration:"line-through"}:{};return s.jsxs(D,{vertical:!0,align:"center",children:[s.jsx(k,{name:c,size:e,color:n,variant:u}),s.jsxs("p",{style:o({fontFamily:"monospace",textAlign:"center"},f),children:[l?"deprecated ":"",c]})]},c)}},S='\n### Icon Component Documentation\n\nThe `IconTable` component is used to display a table of all available icons in the project. \n\n#### Props\n- `name`: The name of the icon \n- `color`: The color of the icon. Available options are `default`, `primary`, `success`, `warning`, `error`, `info`, `white`, `black`, `text`, `strong`, `brand`.\n- `size`: The size of the icon. Available options are `xxxxl`, `xxxl`, `xxl`, `xl`, `lg`, `md`, `sm`, `xs`.\n- `variant`: The variant of the icon. Available options are `light` and `duo-tone`.\n\n#### Updating Icons\n\nThe icon SVG and icon name are provided by the Design team. and the svg must be minified.\n\n1. **Add New Icons**: Add the new icon SVGs to the `src/constants/Icons` directory. The icons should be curated by Design and the svg must be minified. \n2. **Update Icon Constants**: Update the `Icons` object in `src/constants/Icons` to include the new icons.\n3. **Use Icons**: Use the updated icons in your components by referencing their names.\n\n#### Example Usage\n```jsx\n<Icon name="new-icon" size="lg" color="primary" variant="light" />\n```\n\nThis will render the new icon with the specified size, color, and variant.\n',P={title:"Components/General/Icons",component:r,argTypes:{size:{control:"select",options:["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"]},color:{control:"select",options:["default","primary","success","warning","error","info","white","black","text","strong","brand"]},variant:{control:"select",options:["light","duo-tone"]}},parameters:{docs:{description:{component:S}}}};var x,h,g;r.parameters=i(o({},r.parameters),{docs:i(o({},(x=r.parameters)==null?void 0:x.docs),{source:o({originalSource:`({
  color = 'black',
  size = 'lg',
  name,
  variant
}) => {
  const allIcons = Object.keys(Icons) as Array<keyof typeof Icons>;
  const iconGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '10px',
    alignItems: 'center',
    justifyItems: 'center'
  };
  return <div style={iconGridStyle}>{name ? renderIcon(name) : allIcons.map(renderIcon)}</div>;
  function renderIcon(iconName: keyof typeof Icons): ReactNode {
    const icon = Icons[iconName];
    const isDeprecated = icon.deprecated;
    const textStyle = isDeprecated ? {
      textDecoration: 'line-through'
    } : {};
    return <Flex vertical align="center" key={iconName}>
        <Icon name={iconName} size={size} color={color} variant={variant} />
        <p style={{
        fontFamily: 'monospace',
        textAlign: 'center',
        ...textStyle
      }}>
          {isDeprecated ? 'deprecated ' : ''}
          {iconName}
        </p>
      </Flex>;
  }
}`},(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source)})});const q=["IconTable"];export{r as IconTable,q as __namedExportsOrder,P as default};
