var b=Object.defineProperty,v=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(o,e,t)=>e in o?b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))j.call(e,t)&&d(o,t,e[t]);if(p)for(var t of p(e))w.call(e,t)&&d(o,t,e[t]);return o},s=(o,e)=>v(o,T(e));import{j as c}from"./jsx-runtime-CVnACwZl.js";import{F as D,I as k,a as m}from"./NavigationItemsService-C2TBZ92q.js";import"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const r=({color:o="black",size:e="lg",name:t,variant:u})=>{const y=Object.keys(m),I={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"10px",alignItems:"center",justifyItems:"center"};return c.jsx("div",{style:I,children:t?a(t):y.map(a)});function a(i){const l=m[i].deprecated,f=l?{textDecoration:"line-through"}:{};return c.jsxs(D,{vertical:!0,align:"center",children:[c.jsx(k,{name:i,size:e,color:o,variant:u}),c.jsxs("p",{style:n({fontFamily:"monospace",textAlign:"center"},f),children:[l?"deprecated ":"",i]})]},i)}},S='\n### Icon Component Documentation\n\nThe `IconTable` component is used to display a table of all available icons in the project. \n\n#### Props\n- `name`: The name of the icon \n- `color`: The color of the icon. Available options are `default`, `primary`, `success`, `warning`, `error`, `info`, `white`, `black`, `text`, `strong`, `brand`.\n- `size`: The size of the icon. Available options are `xxxxl`, `xxxl`, `xxl`, `xl`, `lg`, `md`, `sm`, `xs`.\n- `variant`: The variant of the icon. Available options are `light` and `duo-tone`.\n\n#### Updating Icons\n\nThe icon SVG and icon name are provided by the Design team. and the svg must be minified.\n\n1. **Add New Icons**: Add the new icon SVGs to the `src/constants/Icons` directory. The icons should be curated by Design and the svg must be minified. \n2. **Update Icon Constants**: Update the `Icons` object in `src/constants/Icons` to include the new icons.\n3. **Use Icons**: Use the updated icons in your components by referencing their names.\n\n#### Example Usage\n```jsx\n<Icon name="new-icon" size="lg" color="primary" variant="light" />\n```\n\nThis will render the new icon with the specified size, color, and variant.\n',H={title:"Components/General/Icons",component:r,argTypes:{size:{control:"select",options:["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"]},color:{control:"select",options:["default","primary","success","warning","error","info","white","black","text","strong","brand"]},variant:{control:"select",options:["light","duo-tone"]}},parameters:{docs:{description:{component:S}}}};var x,h,g;r.parameters=s(n({},r.parameters),{docs:s(n({},(x=r.parameters)==null?void 0:x.docs),{source:n({originalSource:`({
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
}`},(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source)})});const J=["IconTable"];export{r as IconTable,J as __namedExportsOrder,H as default};
