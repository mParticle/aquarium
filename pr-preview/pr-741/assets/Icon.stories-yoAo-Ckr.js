import{j as t,d as k,aG as o,cp as l,cq as L,T as a,F as V,I as w,b8 as F}from"./iframe-DGBKSHTq.js";import"./preload-helper-PPVm8Dsz.js";const b={LIGHT:"light",DUO_TONE:"duo-tone"},B=["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"],H=["default","primary","success","warning","error","info","white","black","text","strong","brand"],S={UI_ACTION_PATTERNS:["accept","close","edit","delete","copy","add","remove","unlock","lock","play","pause","run","filter","search","upload","next","previous","back","openTab","fullScreen","fitToScreen","zoomIn","zoomOut","jumpTo","moreActions","dragAndDrop","reorder","refresh","clone","boost","submitFeedback","dropdown","logout","moveToTop"],INFORMATIONAL_PATTERNS:["info","help","history","hybrid","notification","active","cohort","funnel","group","placeholder","privileges","textWidget","annotation","generic","calculatedAttribute","conversion","criteriaGroup","audienceGroup","abSplit","account","user","users","viewOnly","premium","agentCopilot","refreshFrequency","stateError","bannerFreemium","toggleLogicBlocks"],DATA_TYPE_PATTERNS:["array","boolean","number","string","timestamp","list","otherData","stateEmpty","stateNoResults"],NAVIGATION_PATTERNS:["catalog","directory","dsr","enrichment","forwarding","journeyAnalysis","liveStream","observability","systemAlerts","transformation","userProfiles"]},v=(d,p)=>p.some(u=>d.includes(u)),N=d=>d.filter(p=>!l[p].deprecated),g=({color:d="black",size:p="lg",name:u,variant:C})=>{const n=Object.keys(l),A={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:k,alignItems:"center",justifyItems:"center"},r={marginBottom:L},R={marginBottom:F};if(u)return typeof u=="string"?t.jsx("div",{style:A,children:D(u)}):null;const I=e=>{const s=[],c=[];return e.forEach(m=>{l[m].default===b.DUO_TONE?c.push(m):s.push(m)}),{lightIcons:s,duotoneIcons:c}},i=(e,s,c=5)=>s.length===0?null:t.jsxs("div",{style:R,children:[t.jsx(a.Title,{level:c,children:e}),t.jsx("div",{style:A,children:s.sort().map(D)})]}),y=o.useMemo(()=>N(n.filter(e=>v(e,S.UI_ACTION_PATTERNS))),[n]),P=["api","audiences","database","dashboard","date","devices","identity","organization","predictions","scheduledReport","segmentationAnalysis","flag","insights","link","favorite","paywall","pipelines","precision","rateDown","rateStar","rateUp","settings","support","selected"],h=o.useMemo(()=>N(n.filter(e=>v(e,S.INFORMATIONAL_PATTERNS)||P.includes(e)||e.includes("other")&&e!=="otherData")),[n]),G=["empty","event","eventAttribute","userAttribute"],f=o.useMemo(()=>N(n.filter(e=>v(e,S.DATA_TYPE_PATTERNS)||G.includes(e))),[n]),z=["connections","savedProjects","privacy","setup"],T=o.useMemo(()=>N(n.filter(e=>v(e,S.NAVIGATION_PATTERNS)||z.includes(e))),[n]),U=o.useMemo(()=>n.filter(e=>l[e].deprecated),[n]),x=o.useMemo(()=>n.filter(e=>!l[e].deprecated&&!y.includes(e)&&!h.includes(e)&&!f.includes(e)&&!T.includes(e)),[n,y,h,f,T]),O=o.useMemo(()=>I(y),[y]),_=o.useMemo(()=>I(h),[h]),E=o.useMemo(()=>I(f),[f]),M=o.useMemo(()=>I(T),[T]),j=o.useMemo(()=>I(x),[x]);return t.jsxs("div",{children:[t.jsxs("div",{style:r,children:[t.jsx(a.Title,{level:4,children:"UI Actions"}),i("Light",O.lightIcons),i("Duotone",O.duotoneIcons)]}),t.jsxs("div",{style:r,children:[t.jsx(a.Title,{level:4,children:"Informational Icons"}),i("Light",_.lightIcons),i("Duotone",_.duotoneIcons)]}),t.jsxs("div",{style:r,children:[t.jsx(a.Title,{level:4,children:"Data Type Icons"}),i("Light",E.lightIcons),i("Duotone",E.duotoneIcons)]}),t.jsxs("div",{style:r,children:[t.jsx(a.Title,{level:4,children:"Navigation"}),i("Light",M.lightIcons),i("Duotone",M.duotoneIcons)]}),x.length>0&&t.jsxs("div",{style:r,children:[t.jsx(a.Title,{level:4,children:"Other Icons"}),i("Light",j.lightIcons),i("Duotone",j.duotoneIcons)]}),t.jsxs("div",{style:r,children:[t.jsx(a.Title,{level:4,type:"secondary",children:"Deprecated Icons"}),t.jsx("div",{style:A,children:U.sort().map(D)})]})]});function D(e){const c=l[e].deprecated,m=c?{textDecoration:"line-through"}:{};return t.jsxs(V,{vertical:!0,align:"center",children:[t.jsx(w,{name:e,size:p,color:d,variant:C}),t.jsxs("p",{style:{fontFamily:"monospace",textAlign:"center",...m},children:[c?"deprecated ":"",e]})]},e)}},Y=`
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
- \`variant\`: The variant of the icon. Available options are \`${Object.values(b).join("` and `")}\`.

#### Icon Naming Conventions

Icons follow specific naming patterns based on their category:
- **Action Icons**: Use \`mp_act_lt_\` prefix in SVG filenames
- **Info Icons**: Use \`mp_info_lt_\` prefix in SVG filenames
- **Data Icons**: Use \`mp_data_dt_\` prefix in SVG filenames
- **Platform/Navigation Icons**: Use \`mp_pm_lt_\` prefix in SVG filenames

#### Example Usage
\`\`\`jsx
<Icon name="add" size="lg" color="primary" variant="${b.LIGHT}" />
<Icon name="info" size="md" color="info" />
<Icon name="play" size="sm" color="success" />
\`\`\`

#### Updating Icons

1. **Add New Icons**: Use the SVG Prettifier in Storybook (Contributing → Tooling → SVGPrettifier)
2. **Follow Naming**: Use appropriate prefix based on icon category
3. **Update Constants**: Icons are automatically categorized based on naming patterns
4. **Verify Display**: Check the organized icon library to ensure proper categorization
`,W={title:"Components/General/Icons",component:g,argTypes:{size:{control:"select",options:B},color:{control:"select",options:H},variant:{control:"select",options:Object.values(b)}},parameters:{docs:{description:{component:Y}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
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
}`,...g.parameters?.docs?.source}}};const Z=["IconTable"];export{g as IconTable,Z as __namedExportsOrder,W as default};
