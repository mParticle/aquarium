var b=Object.defineProperty,I=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(n,e,a)=>e in n?b(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,t=(n,e)=>{for(var a in e||(e={}))T.call(e,a)&&c(n,a,e[a]);if(u)for(var a of u(e))k.call(e,a)&&c(n,a,e[a]);return n},o=(n,e)=>I(n,w(e));import{j as i}from"./jsx-runtime-BcCOBRXo.js";import{F as j,I as A,af as v}from"./GlobalNavigation-CfqC90wa.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import"./index-CNk6hRaE.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const l=({color:n="black",size:e="lg",name:a,variant:g})=>{const x=Object.keys(v),y={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"10px",alignItems:"center",justifyItems:"center"};return i.jsx("div",{style:y,children:a?s(a):x.map(s)});function s(r){const m=v[r].deprecated,f=m?{textDecoration:"line-through"}:{};return i.jsxs(j,{vertical:!0,align:"center",children:[i.jsx(A,{name:r,size:e,color:n,variant:g}),i.jsxs("p",{style:t({fontFamily:"monospace",textAlign:"center"},f),children:[m?"deprecated ":"",r]})]},r)}},z='\n### Icon Component Documentation\n\nThe `IconTable` component is used to display a table of all available icons in the project. \n\n#### Props\n- `name`: The name of the icon \n- `color`: The color of the icon. Available options are `default`, `primary`, `success`, `warning`, `error`, `info`, `white`, `black`, `text`, `strong`, `brand`.\n- `size`: The size of the icon. Available options are `xxxxl`, `xxxl`, `xxl`, `xl`, `lg`, `md`, `sm`, `xs`.\n- `variant`: The variant of the icon. Available options are `light` and `duo-tone`.\n\n#### Updating Icons\n\nThe icon SVG and icon name are provided by the Design team. and the svg must be minified.\n\n1. **Add New Icons**: Add the new icon SVGs to the `src/constants/Icons` directory. The icons should be curated by Design and the svg must be minified. \n2. **Update Icon Constants**: Update the `Icons` object in `src/constants/Icons` to include the new icons.\n3. **Use Icons**: Use the updated icons in your components by referencing their names.\n\n#### Example Usage\n```jsx\n<Icon name="new-icon" size="lg" color="primary" variant="light" />\n```\n\nThis will render the new icon with the specified size, color, and variant.\n',M={title:"Components/General/Icons",component:l,argTypes:{size:{control:"select",options:["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"]},color:{control:"select",options:["default","primary","success","warning","error","info","white","black","text","strong","brand"]},variant:{control:"select",options:["light","duo-tone"]}},parameters:{docs:{description:{component:z}}}};l.__docgenInfo={description:"",methods:[],displayName:"IconTable",props:{name:{required:!0,tsType:{name:"union",raw:`| 'add'
| 'alicorn'
| 'analytics'
| 'C360'
| 'catalog'
| 'chartColumn'
| 'chartLine'
| 'check'
| 'circleNodes'
| 'cloud'
| 'connections'
| 'database'
| 'dsr'
| 'empty'
| 'enrichment'
| 'event'
| 'eventAttribute'
| 'fitToScreen'
| 'folderClosed'
| 'forwarding'
| 'gear'
| 'grid'
| 'heart'
| 'help'
| 'identity'
| 'jumpTo'
| 'lightBulb'
| 'liveStream'
| 'paywall'
| 'messageQuestion'
| 'mpLogo'
| 'observability'
| 'oversight'
| 'predictions'
| 'remove'
| 'search'
| 'segmentation'
| 'shieldKeyhole'
| 'signout'
| 'siteMap'
| 'sparkles'
| 'premiumDt'
| 'split'
| 'systemAlerts'
| 'transformation'
| 'upload'
| 'userAttribute'
| 'userProfiles'
| 'users'
| 'wrench'
| 'zoomIn'
| 'zoomOut'
| 'premium'
| 'helpVideo'
| 'conversion'
| 'next'
| 'previous'
| 'openTab'
| 'directory'
| 'lock'
| 'unlock'
| 'notification'
| 'overview'
| 'trends'
| 'settings'
| 'support'
| 'close'
| 'privacy'
| 'dataPlatform'
| 'journeys'
| 'setup'
| 'logout'
| 'audiences'
| 'selected'
| 'pipelines'
| 'api'
| 'savedProjects'
| 'myHub'
| 'favorite'
| 'insights'
| 'filter'
| 'active'
| 'link'
| 'info'
| 'placeholder'
| 'organization'
| 'journeyAnalysis'
| 'dashboard'
| 'account'
| 'textWidget'
| 'refreshFrequency'
| 'privileges'
| 'funnel'
| 'cohort'
| 'annotation'
| 'delete'
| 'dropdownClose'
| 'dropdownOpen'
| 'segmentationAnalysis'
| 'scheduledReport'
| 'fullScreen'
| 'edit'
| 'copy'
| 'moreActions'`,elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'alicorn'"},{name:"literal",value:"'analytics'"},{name:"literal",value:"'C360'"},{name:"literal",value:"'catalog'"},{name:"literal",value:"'chartColumn'"},{name:"literal",value:"'chartLine'"},{name:"literal",value:"'check'"},{name:"literal",value:"'circleNodes'"},{name:"literal",value:"'cloud'"},{name:"literal",value:"'connections'"},{name:"literal",value:"'database'"},{name:"literal",value:"'dsr'"},{name:"literal",value:"'empty'"},{name:"literal",value:"'enrichment'"},{name:"literal",value:"'event'"},{name:"literal",value:"'eventAttribute'"},{name:"literal",value:"'fitToScreen'"},{name:"literal",value:"'folderClosed'"},{name:"literal",value:"'forwarding'"},{name:"literal",value:"'gear'"},{name:"literal",value:"'grid'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'help'"},{name:"literal",value:"'identity'"},{name:"literal",value:"'jumpTo'"},{name:"literal",value:"'lightBulb'"},{name:"literal",value:"'liveStream'"},{name:"literal",value:"'paywall'"},{name:"literal",value:"'messageQuestion'"},{name:"literal",value:"'mpLogo'"},{name:"literal",value:"'observability'"},{name:"literal",value:"'oversight'"},{name:"literal",value:"'predictions'"},{name:"literal",value:"'remove'"},{name:"literal",value:"'search'"},{name:"literal",value:"'segmentation'"},{name:"literal",value:"'shieldKeyhole'"},{name:"literal",value:"'signout'"},{name:"literal",value:"'siteMap'"},{name:"literal",value:"'sparkles'"},{name:"literal",value:"'premiumDt'"},{name:"literal",value:"'split'"},{name:"literal",value:"'systemAlerts'"},{name:"literal",value:"'transformation'"},{name:"literal",value:"'upload'"},{name:"literal",value:"'userAttribute'"},{name:"literal",value:"'userProfiles'"},{name:"literal",value:"'users'"},{name:"literal",value:"'wrench'"},{name:"literal",value:"'zoomIn'"},{name:"literal",value:"'zoomOut'"},{name:"literal",value:"'premium'"},{name:"literal",value:"'helpVideo'"},{name:"literal",value:"'conversion'"},{name:"literal",value:"'next'"},{name:"literal",value:"'previous'"},{name:"literal",value:"'openTab'"},{name:"literal",value:"'directory'"},{name:"literal",value:"'lock'"},{name:"literal",value:"'unlock'"},{name:"literal",value:"'notification'"},{name:"literal",value:"'overview'"},{name:"literal",value:"'trends'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'support'"},{name:"literal",value:"'close'"},{name:"literal",value:"'privacy'"},{name:"literal",value:"'dataPlatform'"},{name:"literal",value:"'journeys'"},{name:"literal",value:"'setup'"},{name:"literal",value:"'logout'"},{name:"literal",value:"'audiences'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'pipelines'"},{name:"literal",value:"'api'"},{name:"literal",value:"'savedProjects'"},{name:"literal",value:"'myHub'"},{name:"literal",value:"'favorite'"},{name:"literal",value:"'insights'"},{name:"literal",value:"'filter'"},{name:"literal",value:"'active'"},{name:"literal",value:"'link'"},{name:"literal",value:"'info'"},{name:"literal",value:"'placeholder'"},{name:"literal",value:"'organization'"},{name:"literal",value:"'journeyAnalysis'"},{name:"literal",value:"'dashboard'"},{name:"literal",value:"'account'"},{name:"literal",value:"'textWidget'"},{name:"literal",value:"'refreshFrequency'"},{name:"literal",value:"'privileges'"},{name:"literal",value:"'funnel'"},{name:"literal",value:"'cohort'"},{name:"literal",value:"'annotation'"},{name:"literal",value:"'delete'"},{name:"literal",value:"'dropdownClose'"},{name:"literal",value:"'dropdownOpen'"},{name:"literal",value:"'segmentationAnalysis'"},{name:"literal",value:"'scheduledReport'"},{name:"literal",value:"'fullScreen'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'copy'"},{name:"literal",value:"'moreActions'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'success'
| 'warning'
| 'error'
| 'info'
| 'white'
| 'black'
| 'text'
| 'strong'
| 'brand'
| 'inherit'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'white'"},{name:"literal",value:"'black'"},{name:"literal",value:"'text'"},{name:"literal",value:"'strong'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'inherit'"}]},description:"",defaultValue:{value:"'black'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xxxxl' | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'xxxxl'"},{name:"literal",value:"'xxxl'"},{name:"literal",value:"'xxl'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'light' | 'duo-tone'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'duo-tone'"}]},description:""}}};var d,p,h;l.parameters=o(t({},l.parameters),{docs:o(t({},(d=l.parameters)==null?void 0:d.docs),{source:t({originalSource:`({
  color = 'black',
  size = 'lg',
  name,
  variant
}) => {
  const allIcons = (Object.keys(Icons) as Array<keyof typeof Icons>);
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
}`},(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source)})});const Q=["IconTable"];export{l as IconTable,Q as __namedExportsOrder,M as default};
