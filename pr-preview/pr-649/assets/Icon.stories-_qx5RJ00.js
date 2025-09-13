var q=Object.defineProperty,X=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var z=(o,n,i)=>n in o?q(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i,T=(o,n)=>{for(var i in n||(n={}))W.call(n,i)&&z(o,i,n[i]);if(G)for(var i of G(n))Z.call(n,i)&&z(o,i,n[i]);return o},O=(o,n)=>X(o,$(n));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{r as c}from"./index-3OP4wdng.js";import{aq as I,c as l,F as k,I as J}from"./NavigationItemsService-DHaCvbM-.js";import{E as K,S as Q,j as ee,k as te}from"./ErrorStateIcon-DUz035cB.js";import"./_baseClone-CXAe4HsA.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const D={LIGHT:"light",DUO_TONE:"duo-tone"},ne=["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"],oe=["default","primary","success","warning","error","info","white","black","text","strong","brand"],x={UI_ACTION_PATTERNS:["accept","close","edit","delete","copy","add","remove","unlock","lock","play","pause","run","filter","search","upload","next","previous","back","openTab","fullScreen","fitToScreen","zoomIn","zoomOut","jumpTo","moreActions","dragAndDrop","reorder","refresh","clone","boost","submitFeedback","dropdown","logout"],INFORMATIONAL_PATTERNS:["info","help","notification","active","cohort","funnel","group","placeholder","privileges","textWidget","annotation","generic","calculatedAttribute","conversion","criteriaGroup","audienceGroup","abSplit","users","premium","agentCopilot","refreshFrequency","stateError","bannerFreemium"],DATA_TYPE_PATTERNS:["array","boolean","number","string","timestamp","list","otherData","stateEmpty","stateNoResults"],NAVIGATION_PATTERNS:["catalog","directory","dsr","enrichment","forwarding","journeyAnalysis","liveStream","observability","systemAlerts","transformation","userProfiles","account"]},A=(o,n)=>n.some(i=>o.includes(i)),b=o=>o.filter(n=>!I[n].deprecated),f=({color:o="black",size:n="lg",name:i,variant:F})=>{const s=Object.keys(I),v={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:Q,alignItems:"center",justifyItems:"center"},d={marginBottom:ee},w={marginBottom:te};if(i)return t.jsx("div",{style:v,children:_(i)});const u=e=>{const r=[],p=[];return e.forEach(S=>{I[S].default===D.DUO_TONE?p.push(S):r.push(S)}),{lightIcons:r,duotoneIcons:p}},a=(e,r,p=5)=>r.length===0?null:t.jsxs("div",{style:w,children:[t.jsxs(l.Title,{level:p,children:[e," (",r.length,")"]}),t.jsx("div",{style:v,children:r.sort().map(_)})]}),m=c.useMemo(()=>b(s.filter(e=>A(e,x.UI_ACTION_PATTERNS))),[s]),B=["api","audiences","database","dashboard","date","devices","identity","organization","predictions","scheduledReport","segmentationAnalysis","flag","insights","link","favorite","paywall","pipelines","precision","rateDown","rateStar","rateUp","settings","support","selected"],g=c.useMemo(()=>b(s.filter(e=>A(e,x.INFORMATIONAL_PATTERNS)||B.includes(e)||e.includes("other")&&e!=="otherData")),[s]),H=["empty","event","eventAttribute","userAttribute"],y=c.useMemo(()=>b(s.filter(e=>A(e,x.DATA_TYPE_PATTERNS)||H.includes(e))),[s]),Y=["connections","savedProjects","privacy","setup"],h=c.useMemo(()=>b(s.filter(e=>A(e,x.NAVIGATION_PATTERNS)||Y.includes(e))),[s]),j=c.useMemo(()=>s.filter(e=>I[e].deprecated),[s]),N=c.useMemo(()=>s.filter(e=>!I[e].deprecated&&!m.includes(e)&&!g.includes(e)&&!y.includes(e)&&!h.includes(e)),[s,m,g,y,h]),E=c.useMemo(()=>u(m),[m]),M=c.useMemo(()=>u(g),[g]),C=c.useMemo(()=>u(y),[y]),R=c.useMemo(()=>u(h),[h]),P=c.useMemo(()=>u(N),[N]);return t.jsxs("div",{children:[t.jsxs("div",{style:d,children:[t.jsx(l.Title,{level:4,children:"Special Icons (1)"}),t.jsx("div",{style:v,children:t.jsxs(k,{vertical:!0,align:"center",children:[t.jsx(K,{size:n}),t.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"ErrorStateIcon"})]},"error-state-icon")})]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["UI Actions (",m.length,")"]}),a("Light",E.lightIcons),a("Duotone",E.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Informational Icons (",g.length,")"]}),a("Light",M.lightIcons),a("Duotone",M.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Data Type Icons (",y.length,")"]}),a("Light",C.lightIcons),a("Duotone",C.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Navigation (",h.length,")"]}),a("Light",R.lightIcons),a("Duotone",R.duotoneIcons)]}),N.length>0&&t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Other Icons (",N.length,")"]}),a("Light",P.lightIcons),a("Duotone",P.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,type:"secondary",children:["Deprecated Icons (",j.length,")"]}),t.jsx("div",{style:v,children:j.sort().map(_)})]})]});function _(e){const p=I[e].deprecated,S=p?{textDecoration:"line-through"}:{};return t.jsxs(k,{vertical:!0,align:"center",children:[t.jsx(J,{name:e,size:n,color:o,variant:F}),t.jsxs("p",{style:T({fontFamily:"monospace",textAlign:"center"},S),children:[p?"deprecated ":"",e]})]},e)}},ie=`
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
- \`variant\`: The variant of the icon. Available options are \`${Object.values(D).join("` and `")}\`.

#### Icon Naming Conventions

Icons follow specific naming patterns based on their category:
- **Action Icons**: Use \`mp_act_lt_\` prefix in SVG filenames
- **Info Icons**: Use \`mp_info_lt_\` prefix in SVG filenames
- **Data Icons**: Use \`mp_data_dt_\` prefix in SVG filenames
- **Platform/Navigation Icons**: Use \`mp_pm_lt_\` prefix in SVG filenames

#### Example Usage
\`\`\`jsx
<Icon name="add" size="lg" color="primary" variant="${D.LIGHT}" />
<Icon name="info" size="md" color="info" />
<Icon name="play" size="sm" color="success" />
\`\`\`

#### Updating Icons

1. **Add New Icons**: Use the SVG Prettifier in Storybook (Contributing → Tooling → SVGPrettifier)
2. **Follow Naming**: Use appropriate prefix based on icon category
3. **Update Constants**: Icons are automatically categorized based on naming patterns
4. **Verify Display**: Check the organized icon library to ensure proper categorization
`,fe={title:"Components/General/Icons",component:f,argTypes:{size:{control:"select",options:ne},color:{control:"select",options:oe},variant:{control:"select",options:Object.values(D)}},parameters:{docs:{description:{component:ie}}}};var U,L,V;f.parameters=O(T({},f.parameters),{docs:O(T({},(U=f.parameters)==null?void 0:U.docs),{source:T({originalSource:`({
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
        <Typography.Title level={titleLevel}>
          {title} ({icons.length})
        </Typography.Title>
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
        <Typography.Title level={4}>Special Icons (1)</Typography.Title>
        <div style={iconGridStyle}>
          <Flex vertical align="center" key="error-state-icon">
            <ErrorStateIcon size={size} />
            <p style={{
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>ErrorStateIcon</p>
          </Flex>
        </div>
      </div>

      {/* UI Actions Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>UI Actions ({uiActionIcons.length})</Typography.Title>
        {renderSubSection('Light', uiActionSplit.lightIcons)}
        {renderSubSection('Duotone', uiActionSplit.duotoneIcons)}
      </div>

      {/* Informational Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Informational Icons ({informationalIcons.length})</Typography.Title>
        {renderSubSection('Light', informationalSplit.lightIcons)}
        {renderSubSection('Duotone', informationalSplit.duotoneIcons)}
      </div>

      {/* Data Type Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Data Type Icons ({dataTypeIcons.length})</Typography.Title>
        {renderSubSection('Light', dataTypeSplit.lightIcons)}
        {renderSubSection('Duotone', dataTypeSplit.duotoneIcons)}
      </div>

      {/* Navigation Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Navigation ({navigationIcons.length})</Typography.Title>
        {renderSubSection('Light', navigationSplit.lightIcons)}
        {renderSubSection('Duotone', navigationSplit.duotoneIcons)}
      </div>

      {/* Other Icons Section */}
      {otherIcons.length > 0 && <div style={sectionStyle}>
          <Typography.Title level={4}>Other Icons ({otherIcons.length})</Typography.Title>
          {renderSubSection('Light', otherSplit.lightIcons)}
          {renderSubSection('Duotone', otherSplit.duotoneIcons)}
        </div>}

      {/* Deprecated Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4} type="secondary">
          Deprecated Icons ({deprecatedIcons.length})
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
}`},(V=(L=f.parameters)==null?void 0:L.docs)==null?void 0:V.source)})});const ve=["IconTable"];export{f as IconTable,ve as __namedExportsOrder,fe as default};
