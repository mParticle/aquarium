var Y=Object.defineProperty,X=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var G=(i,o,n)=>o in i?Y(i,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[o]=n,g=(i,o)=>{for(var n in o||(o={}))q.call(o,n)&&G(i,n,o[n]);if(P)for(var n of P(o))W.call(o,n)&&G(i,n,o[n]);return i},_=(i,o)=>X(i,$(o));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{r as c}from"./index-3OP4wdng.js";import{aB as u,b as d,F as Z,I as J}from"./UnauthorizedTooltip-Cbh4WO-M.js";import"./ErrorStateIcon-CcDOX8SN.js";import"./SuccessStateIcon-rQuDHTl-.js";import"./WarningStateIcon-CU5DSKLe.js";import"./_baseClone-DwBCp-Ss.js";import{S as K,aT as Q,G as ee}from"./style-CvbdM76I.js";import"./LightTheme-EfL3ml8k.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./WarningFilled-D6ijQqgK.js";const A={LIGHT:"light",DUO_TONE:"duo-tone"},te=["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"],oe=["default","primary","success","warning","error","info","white","black","text","strong","brand"],v={UI_ACTION_PATTERNS:["accept","close","edit","delete","copy","add","remove","unlock","lock","play","pause","run","filter","search","upload","next","previous","back","openTab","fullScreen","fitToScreen","zoomIn","zoomOut","jumpTo","moreActions","dragAndDrop","reorder","refresh","clone","boost","submitFeedback","dropdown","logout","moveToTop"],INFORMATIONAL_PATTERNS:["info","help","history","hybrid","notification","active","cohort","funnel","group","placeholder","privileges","textWidget","annotation","generic","calculatedAttribute","conversion","criteriaGroup","audienceGroup","abSplit","account","user","users","viewOnly","premium","agentCopilot","refreshFrequency","stateError","bannerFreemium","toggleLogicBlocks"],DATA_TYPE_PATTERNS:["array","boolean","number","string","timestamp","list","otherData","stateEmpty","stateNoResults"],NAVIGATION_PATTERNS:["catalog","directory","dsr","enrichment","forwarding","journeyAnalysis","liveStream","observability","systemAlerts","transformation","userProfiles"]},N=(i,o)=>o.some(n=>i.includes(n)),b=i=>i.filter(o=>!u[o].deprecated),y=({color:i="black",size:o="lg",name:n,variant:L})=>{const s=Object.keys(u),x={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:K,alignItems:"center",justifyItems:"center"},p={marginBottom:Q},V={marginBottom:ee};if(n)return typeof n=="string"?t.jsx("div",{style:x,children:O(n)}):null;const I=e=>{const r=[],l=[];return e.forEach(m=>{u[m].default===A.DUO_TONE?l.push(m):r.push(m)}),{lightIcons:r,duotoneIcons:l}},a=(e,r,l=5)=>r.length===0?null:t.jsxs("div",{style:V,children:[t.jsx(d.Title,{level:l,children:e}),t.jsx("div",{style:x,children:r.sort().map(O)})]}),h=c.useMemo(()=>b(s.filter(e=>N(e,v.UI_ACTION_PATTERNS))),[s]),w=["api","audiences","database","dashboard","date","devices","identity","organization","predictions","scheduledReport","segmentationAnalysis","flag","insights","link","favorite","paywall","pipelines","precision","rateDown","rateStar","rateUp","settings","support","selected"],f=c.useMemo(()=>b(s.filter(e=>N(e,v.INFORMATIONAL_PATTERNS)||w.includes(e)||e.includes("other")&&e!=="otherData")),[s]),B=["empty","event","eventAttribute","userAttribute"],T=c.useMemo(()=>b(s.filter(e=>N(e,v.DATA_TYPE_PATTERNS)||B.includes(e))),[s]),F=["connections","savedProjects","privacy","setup"],S=c.useMemo(()=>b(s.filter(e=>N(e,v.NAVIGATION_PATTERNS)||F.includes(e))),[s]),H=c.useMemo(()=>s.filter(e=>u[e].deprecated),[s]),D=c.useMemo(()=>s.filter(e=>!u[e].deprecated&&!h.includes(e)&&!f.includes(e)&&!T.includes(e)&&!S.includes(e)),[s,h,f,T,S]),E=c.useMemo(()=>I(h),[h]),M=c.useMemo(()=>I(f),[f]),j=c.useMemo(()=>I(T),[T]),C=c.useMemo(()=>I(S),[S]),R=c.useMemo(()=>I(D),[D]);return t.jsxs("div",{children:[t.jsxs("div",{style:p,children:[t.jsx(d.Title,{level:4,children:"UI Actions"}),a("Light",E.lightIcons),a("Duotone",E.duotoneIcons)]}),t.jsxs("div",{style:p,children:[t.jsx(d.Title,{level:4,children:"Informational Icons"}),a("Light",M.lightIcons),a("Duotone",M.duotoneIcons)]}),t.jsxs("div",{style:p,children:[t.jsx(d.Title,{level:4,children:"Data Type Icons"}),a("Light",j.lightIcons),a("Duotone",j.duotoneIcons)]}),t.jsxs("div",{style:p,children:[t.jsx(d.Title,{level:4,children:"Navigation"}),a("Light",C.lightIcons),a("Duotone",C.duotoneIcons)]}),D.length>0&&t.jsxs("div",{style:p,children:[t.jsx(d.Title,{level:4,children:"Other Icons"}),a("Light",R.lightIcons),a("Duotone",R.duotoneIcons)]}),t.jsxs("div",{style:p,children:[t.jsx(d.Title,{level:4,type:"secondary",children:"Deprecated Icons"}),t.jsx("div",{style:x,children:H.sort().map(O)})]})]});function O(e){const l=u[e].deprecated,m=l?{textDecoration:"line-through"}:{};return t.jsxs(Z,{vertical:!0,align:"center",children:[t.jsx(J,{name:e,size:o,color:i,variant:L}),t.jsxs("p",{style:g({fontFamily:"monospace",textAlign:"center"},m),children:[l?"deprecated ":"",e]})]},e)}},ne=`
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
- \`variant\`: The variant of the icon. Available options are \`${Object.values(A).join("` and `")}\`.

#### Icon Naming Conventions

Icons follow specific naming patterns based on their category:
- **Action Icons**: Use \`mp_act_lt_\` prefix in SVG filenames
- **Info Icons**: Use \`mp_info_lt_\` prefix in SVG filenames
- **Data Icons**: Use \`mp_data_dt_\` prefix in SVG filenames
- **Platform/Navigation Icons**: Use \`mp_pm_lt_\` prefix in SVG filenames

#### Example Usage
\`\`\`jsx
<Icon name="add" size="lg" color="primary" variant="${A.LIGHT}" />
<Icon name="info" size="md" color="info" />
<Icon name="play" size="sm" color="success" />
\`\`\`

#### Updating Icons

1. **Add New Icons**: Use the SVG Prettifier in Storybook (Contributing → Tooling → SVGPrettifier)
2. **Follow Naming**: Use appropriate prefix based on icon category
3. **Update Constants**: Icons are automatically categorized based on naming patterns
4. **Verify Display**: Check the organized icon library to ensure proper categorization
`,Ae={title:"Components/General/Icons",component:y,argTypes:{size:{control:"select",options:te},color:{control:"select",options:oe},variant:{control:"select",options:Object.values(A)}},parameters:{docs:{description:{component:ne}}}};var z,U,k;y.parameters=_(g({},y.parameters),{docs:_(g({},(z=y.parameters)==null?void 0:z.docs),{source:g({originalSource:`({
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
    // Only render if it's a string icon name (not a component)
    if (typeof name === 'string') {
      return <div style={iconGridStyle}>{renderIcon(name)}</div>;
    }
    return null;
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
}`},(k=(U=y.parameters)==null?void 0:U.docs)==null?void 0:k.source)})});const xe=["IconTable"];export{y as IconTable,xe as __namedExportsOrder,Ae as default};
