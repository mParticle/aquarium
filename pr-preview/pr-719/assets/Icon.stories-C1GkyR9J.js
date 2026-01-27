var K=Object.defineProperty,Q=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var G=(t,n,i)=>n in t?K(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,u=(t,n)=>{for(var i in n||(n={}))L.call(n,i)&&G(t,i,n[i]);if(b)for(var i of b(n))w.call(n,i)&&G(t,i,n[i]);return t},_=(t,n)=>Q(t,ee(n));var k=(t,n)=>{var i={};for(var a in t)L.call(t,a)&&n.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&b)for(var a of b(t))n.indexOf(a)<0&&w.call(t,a)&&(i[a]=t[a]);return i};import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as s}from"./index-3OP4wdng.js";import{aB as g,b as d,F as l,I as y}from"./UnauthorizedTooltip-ppC3Ep99.js";import{E as te}from"./ErrorStateIcon-CBJar-HQ.js";import{S as ne}from"./SuccessStateIcon-D_gpxGvs.js";import{W as oe}from"./WarningStateIcon-C_Rij-7I.js";import"./_baseClone-DwBCp-Ss.js";import{S as ie,aT as ce,G as se}from"./style-BbwCNso5.js";import{s as ae,b as re,i as le,a as de}from"./Trash04-7_s1Rvvf.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./WarningFilled-D6ijQqgK.js";const W=a=>{var c=a,{size:t=24,color:n="currentColor"}=c,i=k(c,["size","color"]);return s.createElement("svg",u({viewBox:"0 0 24 24",width:t,height:t,stroke:n,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},i),s.createElement("path",{d:"m7.5 12 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"}))};W.displayName="CheckCircle";const $=a=>{var c=a,{size:t=24,color:n="currentColor"}=c,i=k(c,["size","color"]);return s.createElement("svg",u({viewBox:"0 0 24 24",width:t,height:t,stroke:n,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},i),s.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"}))};$.displayName="HelpCircle";const E={LIGHT:"light",DUO_TONE:"duo-tone"},pe=["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"],me=["default","primary","success","warning","error","info","white","black","text","strong","brand"],j={UI_ACTION_PATTERNS:["accept","close","edit","delete","copy","add","remove","unlock","lock","play","pause","run","filter","search","upload","next","previous","back","openTab","fullScreen","fitToScreen","zoomIn","zoomOut","jumpTo","moreActions","dragAndDrop","reorder","refresh","clone","boost","submitFeedback","dropdown","logout","moveToTop"],INFORMATIONAL_PATTERNS:["info","help","history","hybrid","notification","active","cohort","funnel","group","placeholder","privileges","textWidget","annotation","generic","calculatedAttribute","conversion","criteriaGroup","audienceGroup","abSplit","account","user","users","viewOnly","premium","agentCopilot","refreshFrequency","stateError","bannerFreemium","toggleLogicBlocks"],DATA_TYPE_PATTERNS:["array","boolean","number","string","timestamp","list","otherData","stateEmpty","stateNoResults"],NAVIGATION_PATTERNS:["catalog","directory","dsr","enrichment","forwarding","journeyAnalysis","liveStream","observability","systemAlerts","transformation","userProfiles"]},U=(t,n)=>n.some(i=>t.includes(i)),D=t=>t.filter(n=>!g[n].deprecated),f=({color:t="black",size:n="lg",name:i,variant:a})=>{const c=Object.keys(g),h={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:ie,alignItems:"center",justifyItems:"center"},p={marginBottom:ce},Y={marginBottom:se};if(i)return e.jsx("div",{style:h,children:O(i)});const S=o=>{const m=[],I=[];return o.forEach(v=>{g[v].default===E.DUO_TONE?I.push(v):m.push(v)}),{lightIcons:m,duotoneIcons:I}},r=(o,m,I=5)=>m.length===0?null:e.jsxs("div",{style:Y,children:[e.jsx(d.Title,{level:I,children:o}),e.jsx("div",{style:h,children:m.sort().map(O)})]}),x=s.useMemo(()=>D(c.filter(o=>U(o,j.UI_ACTION_PATTERNS))),[c]),Z=["api","audiences","database","dashboard","date","devices","identity","organization","predictions","scheduledReport","segmentationAnalysis","flag","insights","link","favorite","paywall","pipelines","precision","rateDown","rateStar","rateUp","settings","support","selected"],T=s.useMemo(()=>D(c.filter(o=>U(o,j.INFORMATIONAL_PATTERNS)||Z.includes(o)||o.includes("other")&&o!=="otherData")),[c]),X=["empty","event","eventAttribute","userAttribute"],A=s.useMemo(()=>D(c.filter(o=>U(o,j.DATA_TYPE_PATTERNS)||X.includes(o))),[c]),q=["connections","savedProjects","privacy","setup"],N=s.useMemo(()=>D(c.filter(o=>U(o,j.NAVIGATION_PATTERNS)||q.includes(o))),[c]),J=s.useMemo(()=>c.filter(o=>g[o].deprecated),[c]),F=s.useMemo(()=>c.filter(o=>!g[o].deprecated&&!x.includes(o)&&!T.includes(o)&&!A.includes(o)&&!N.includes(o)),[c,x,T,A,N]),C=s.useMemo(()=>S(x),[x]),M=s.useMemo(()=>S(T),[T]),z=s.useMemo(()=>S(A),[A]),P=s.useMemo(()=>S(N),[N]),R=s.useMemo(()=>S(F),[F]);return e.jsxs("div",{children:[e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,children:"Special Icons"}),e.jsxs("div",{style:h,children:[e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(te,{size:n}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"ErrorStateIcon"})]},"error-state-icon"),e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(oe,{size:n}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"WarningStateIcon"})]},"warning-state-icon"),e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(ne,{size:n}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"SuccessStateIcon"})]},"success-state-icon")]})]}),e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,children:"Untitled UI Icons"}),e.jsxs("div",{style:h,children:[e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(y,{name:$,size:n,color:t}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"UUIHelp"})]},"untitled-help"),e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(y,{name:ae,size:n,color:t}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"UUIPlus"})]},"untitled-plus"),e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(y,{name:re,size:n,color:t}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"UUISearch"})]},"untitled-search"),e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(y,{name:le,size:n,color:t}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"UUIEdit"})]},"untitled-edit"),e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(y,{name:de,size:n,color:t}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"UUITrash"})]},"untitled-trash"),e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(y,{name:W,size:n,color:t}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"UUICheckCircle"})]},"untitled-check-circle")]})]}),e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,children:"UI Actions"}),r("Light",C.lightIcons),r("Duotone",C.duotoneIcons)]}),e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,children:"Informational Icons"}),r("Light",M.lightIcons),r("Duotone",M.duotoneIcons)]}),e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,children:"Data Type Icons"}),r("Light",z.lightIcons),r("Duotone",z.duotoneIcons)]}),e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,children:"Navigation"}),r("Light",P.lightIcons),r("Duotone",P.duotoneIcons)]}),F.length>0&&e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,children:"Other Icons"}),r("Light",R.lightIcons),r("Duotone",R.duotoneIcons)]}),e.jsxs("div",{style:p,children:[e.jsx(d.Title,{level:4,type:"secondary",children:"Deprecated Icons"}),e.jsx("div",{style:h,children:J.sort().map(O)})]})]});function O(o){const I=g[o].deprecated,v=I?{textDecoration:"line-through"}:{};return e.jsxs(l,{vertical:!0,align:"center",children:[e.jsx(y,{name:o,size:n,color:t,variant:a}),e.jsxs("p",{style:u({fontFamily:"monospace",textAlign:"center"},v),children:[I?"deprecated ":"",o]})]},o)}},Ie=`
### Icon Library Documentation

The \`IconTable\` component displays icons organized into logical categories for better discoverability and usage.

#### Icon Categories

**UI Actions**: Interactive icons for user actions like add, edit, delete, play, pause, search, etc.
**Informational Icons**: Icons that convey information, status, or context like help, notification, groups, states, etc.
**Data Type Icons**: Icons representing different data types like array, boolean, number, string, timestamp, etc.
**Navigation**: Icons for navigation and platform features like catalog, directory, observability, etc.
**Deprecated Icons**: Icons that have been deprecated and should no longer be used in new implementations.

#### Props
- \`name\`: The name of the icon
- \`color\`: The color of the icon. Available options are \`default\`, \`primary\`, \`success\`, \`warning\`, \`error\`, \`info\`, \`white\`, \`black\`, \`text\`, \`strong\`, \`brand\`.
- \`size\`: The size of the icon. Available options are \`xxxxl\`, \`xxxl\`, \`xxl\`, \`xl\`, \`lg\`, \`md\`, \`sm\`, \`xs\`.
- \`variant\`: The variant of the icon. Available options are \`${Object.values(E).join("` and `")}\`.

#### Icon Naming Conventions

Icons follow specific naming patterns based on their category:
- **Action Icons**: Use \`mp_act_lt_\` prefix in SVG filenames
- **Info Icons**: Use \`mp_info_lt_\` prefix in SVG filenames
- **Data Icons**: Use \`mp_data_dt_\` prefix in SVG filenames
- **Platform/Navigation Icons**: Use \`mp_pm_lt_\` prefix in SVG filenames

#### Example Usage
\`\`\`jsx
<Icon name="add" size="lg" color="primary" variant="${E.LIGHT}" />
<Icon name="info" size="md" color="info" />
<Icon name="play" size="sm" color="success" />
\`\`\`

#### Updating Icons

1. **Add New Icons**: Use the SVG Prettifier in Storybook (Contributing → Tooling → SVGPrettifier)
2. **Follow Naming**: Use appropriate prefix based on icon category
3. **Update Constants**: Icons are automatically categorized based on naming patterns
4. **Verify Display**: Check the organized icon library to ensure proper categorization
`,Me={title:"Components/General/Icons",component:f,argTypes:{size:{control:"select",options:pe},color:{control:"select",options:me},variant:{control:"select",options:Object.values(E)}},parameters:{docs:{description:{component:Ie}}}};var V,B,H;f.parameters=_(u({},f.parameters),{docs:_(u({},(V=f.parameters)==null?void 0:V.docs),{source:u({originalSource:`({
  color = 'black',
  size = 'lg',
  name,
  variant
}) => {
  const allIcons = Object.keys(Icons) as IconNames[];
  const iconGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: Size,
    alignItems: 'center',
    justifyItems: 'center'
  };
  const sectionStyle = {
    marginBottom: MarginXl
  };
  const subSectionStyle = {
    marginBottom: MarginMd
  };

  // If showing a specific icon, use original behavior
  if (name) {
    return <div style={iconGridStyle}>{renderIcon(name)}</div>;
  }

  // Helper function to split icons by variant based on their default configuration
  const splitByVariant = (icons: IconNames[]) => {
    const lightIcons: IconNames[] = [];
    const duotoneIcons: IconNames[] = [];
    icons.forEach(iconName => {
      const icon = Icons[iconName];

      // Categorize based on the default variant using constants
      if (icon.default === ICON_VARIANTS.DUO_TONE) {
        duotoneIcons.push(iconName);
      } else {
        lightIcons.push(iconName);
      }
    });
    return {
      lightIcons,
      duotoneIcons
    };
  };

  // Helper function to render subsection
  const renderSubSection = (title: string, icons: IconNames[], titleLevel: 4 | 5 = 5) => {
    if (icons.length === 0) return null;
    return <div style={subSectionStyle}>
        <Typography.Title level={titleLevel}>{title}</Typography.Title>
        <div style={iconGridStyle}>{icons.sort().map(renderIcon)}</div>
      </div>;
  };

  // Categorize icons using helper functions and constants
  const uiActionIcons = useMemo(() => getNonDeprecatedIcons(allIcons.filter(iconName => iconMatchesPatterns(iconName, ICON_CATEGORIES.UI_ACTION_PATTERNS))), [allIcons]);
  const informationalSpecificIcons: IconNames[] = ['api', 'audiences', 'database', 'dashboard', 'date', 'devices', 'identity', 'organization', 'predictions', 'scheduledReport', 'segmentationAnalysis', 'flag', 'insights', 'link', 'favorite', 'paywall', 'pipelines', 'precision', 'rateDown', 'rateStar', 'rateUp', 'settings', 'support', 'selected'] as const;
  const informationalIcons = useMemo(() => getNonDeprecatedIcons(allIcons.filter(iconName => iconMatchesPatterns(iconName, ICON_CATEGORIES.INFORMATIONAL_PATTERNS) || informationalSpecificIcons.includes(iconName) || iconName.includes('other') && iconName !== 'otherData')), [allIcons]);
  const dataTypeSpecificIcons: IconNames[] = ['empty', 'event', 'eventAttribute', 'userAttribute'] as const;
  const dataTypeIcons = useMemo(() => getNonDeprecatedIcons(allIcons.filter(iconName => iconMatchesPatterns(iconName, ICON_CATEGORIES.DATA_TYPE_PATTERNS) || dataTypeSpecificIcons.includes(iconName))), [allIcons]);
  const navigationSpecificIcons: IconNames[] = ['connections', 'savedProjects', 'privacy', 'setup'] as const;
  const navigationIcons = useMemo(() => getNonDeprecatedIcons(allIcons.filter(iconName => iconMatchesPatterns(iconName, ICON_CATEGORIES.NAVIGATION_PATTERNS) || navigationSpecificIcons.includes(iconName))), [allIcons]);
  const deprecatedIcons = useMemo(() => allIcons.filter(iconName => Icons[iconName].deprecated), [allIcons]);
  const otherIcons = useMemo(() => allIcons.filter(iconName => {
    const iconData = Icons[iconName];
    return !iconData.deprecated && !uiActionIcons.includes(iconName) && !informationalIcons.includes(iconName) && !dataTypeIcons.includes(iconName) && !navigationIcons.includes(iconName);
  }), [allIcons, uiActionIcons, informationalIcons, dataTypeIcons, navigationIcons]);

  // Split each category by variant
  const uiActionSplit = useMemo(() => splitByVariant(uiActionIcons), [uiActionIcons]);
  const informationalSplit = useMemo(() => splitByVariant(informationalIcons), [informationalIcons]);
  const dataTypeSplit = useMemo(() => splitByVariant(dataTypeIcons), [dataTypeIcons]);
  const navigationSplit = useMemo(() => splitByVariant(navigationIcons), [navigationIcons]);
  const otherSplit = useMemo(() => splitByVariant(otherIcons), [otherIcons]);
  return <div>
      {/* Special Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Special Icons</Typography.Title>
        <div style={iconGridStyle}>
          <Flex vertical align="center" key="error-state-icon">
            <ErrorStateIcon size={size} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>ErrorStateIcon</p>
          </Flex>
          <Flex vertical align="center" key="warning-state-icon">
            <WarningStateIcon size={size} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>WarningStateIcon</p>
          </Flex>
          <Flex vertical align="center" key="success-state-icon">
            <SuccessStateIcon size={size} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>SuccessStateIcon</p>
          </Flex>
        </div>
      </div>

      {/* Untitled UI Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Untitled UI Icons</Typography.Title>
        <div style={iconGridStyle}>
          <Flex vertical align="center" key="untitled-help">
            <Icon name={UUIHelp} size={size} color={color} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>UUIHelp</p>
          </Flex>
          <Flex vertical align="center" key="untitled-plus">
            <Icon name={UUIPlus} size={size} color={color} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>UUIPlus</p>
          </Flex>
          <Flex vertical align="center" key="untitled-search">
            <Icon name={UUISearch} size={size} color={color} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>UUISearch</p>
          </Flex>
          <Flex vertical align="center" key="untitled-edit">
            <Icon name={UUIEdit} size={size} color={color} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>UUIEdit</p>
          </Flex>
          <Flex vertical align="center" key="untitled-trash">
            <Icon name={UUITrash} size={size} color={color} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>UUITrash</p>
          </Flex>
          <Flex vertical align="center" key="untitled-check-circle">
            <Icon name={UUICheckCircle} size={size} color={color} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>UUICheckCircle</p>
          </Flex>
        </div>
      </div>

      {/* UI Actions Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>UI Actions</Typography.Title>
        {renderSubSection('Light', uiActionSplit.lightIcons)}
        {renderSubSection('Duotone', uiActionSplit.duotoneIcons)}
      </div>

      {/* Informational Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Informational Icons</Typography.Title>
        {renderSubSection('Light', informationalSplit.lightIcons)}
        {renderSubSection('Duotone', informationalSplit.duotoneIcons)}
      </div>

      {/* Data Type Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Data Type Icons</Typography.Title>
        {renderSubSection('Light', dataTypeSplit.lightIcons)}
        {renderSubSection('Duotone', dataTypeSplit.duotoneIcons)}
      </div>

      {/* Navigation Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Navigation</Typography.Title>
        {renderSubSection('Light', navigationSplit.lightIcons)}
        {renderSubSection('Duotone', navigationSplit.duotoneIcons)}
      </div>

      {/* Other Icons Section */}
      {otherIcons.length > 0 && <div style={sectionStyle}>
          <Typography.Title level={4}>Other Icons</Typography.Title>
          {renderSubSection('Light', otherSplit.lightIcons)}
          {renderSubSection('Duotone', otherSplit.duotoneIcons)}
        </div>}

      {/* Deprecated Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4} type="secondary">
          Deprecated Icons
        </Typography.Title>
        <div style={iconGridStyle}>{deprecatedIcons.sort().map(renderIcon)}</div>
      </div>
    </div>;
  function renderIcon(iconName: IconNames): ReactNode {
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
}`},(H=(B=f.parameters)==null?void 0:B.docs)==null?void 0:H.source)})});const ze=["IconTable"];export{f as IconTable,ze as __namedExportsOrder,Me as default};
