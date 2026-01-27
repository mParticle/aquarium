import{j as e,c as U,y as o,cp as d,cq as L,T as c,F as f,a8 as V,aa as w,a9 as B,I as W,a6 as H}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const b={LIGHT:"light",DUO_TONE:"duo-tone"},Y=["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"],q=["default","primary","success","warning","error","info","white","black","text","strong","brand"],x={UI_ACTION_PATTERNS:["accept","close","edit","delete","copy","add","remove","unlock","lock","play","pause","run","filter","search","upload","next","previous","back","openTab","fullScreen","fitToScreen","zoomIn","zoomOut","jumpTo","moreActions","dragAndDrop","reorder","refresh","clone","boost","submitFeedback","dropdown","logout","moveToTop"],INFORMATIONAL_PATTERNS:["info","help","history","hybrid","notification","active","cohort","funnel","group","placeholder","privileges","textWidget","annotation","generic","calculatedAttribute","conversion","criteriaGroup","audienceGroup","abSplit","account","user","users","viewOnly","premium","agentCopilot","refreshFrequency","stateError","bannerFreemium","toggleLogicBlocks"],DATA_TYPE_PATTERNS:["array","boolean","number","string","timestamp","list","otherData","stateEmpty","stateNoResults"],NAVIGATION_PATTERNS:["catalog","directory","dsr","enrichment","forwarding","journeyAnalysis","liveStream","observability","systemAlerts","transformation","userProfiles"]},N=(p,s)=>s.some(y=>p.includes(y)),A=p=>p.filter(s=>!d[s].deprecated),m=({color:p="black",size:s="lg",name:y,variant:R})=>{const n=Object.keys(d),g={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:U,alignItems:"center",justifyItems:"center"},a={marginBottom:L},P={marginBottom:H};if(y)return e.jsx("div",{style:g,children:j(y)});const I=t=>{const r=[],l=[];return t.forEach(u=>{d[u].default===b.DUO_TONE?l.push(u):r.push(u)}),{lightIcons:r,duotoneIcons:l}},i=(t,r,l=5)=>r.length===0?null:e.jsxs("div",{style:P,children:[e.jsx(c.Title,{level:l,children:t}),e.jsx("div",{style:g,children:r.sort().map(j)})]}),h=o.useMemo(()=>A(n.filter(t=>N(t,x.UI_ACTION_PATTERNS))),[n]),F=["api","audiences","database","dashboard","date","devices","identity","organization","predictions","scheduledReport","segmentationAnalysis","flag","insights","link","favorite","paywall","pipelines","precision","rateDown","rateStar","rateUp","settings","support","selected"],S=o.useMemo(()=>A(n.filter(t=>N(t,x.INFORMATIONAL_PATTERNS)||F.includes(t)||t.includes("other")&&t!=="otherData")),[n]),G=["empty","event","eventAttribute","userAttribute"],T=o.useMemo(()=>A(n.filter(t=>N(t,x.DATA_TYPE_PATTERNS)||G.includes(t))),[n]),z=["connections","savedProjects","privacy","setup"],v=o.useMemo(()=>A(n.filter(t=>N(t,x.NAVIGATION_PATTERNS)||z.includes(t))),[n]),k=o.useMemo(()=>n.filter(t=>d[t].deprecated),[n]),D=o.useMemo(()=>n.filter(t=>!d[t].deprecated&&!h.includes(t)&&!S.includes(t)&&!T.includes(t)&&!v.includes(t)),[n,h,S,T,v]),O=o.useMemo(()=>I(h),[h]),_=o.useMemo(()=>I(S),[S]),E=o.useMemo(()=>I(T),[T]),M=o.useMemo(()=>I(v),[v]),C=o.useMemo(()=>I(D),[D]);return e.jsxs("div",{children:[e.jsxs("div",{style:a,children:[e.jsx(c.Title,{level:4,children:"Special Icons"}),e.jsxs("div",{style:g,children:[e.jsxs(f,{vertical:!0,align:"center",children:[e.jsx(V,{size:s}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"ErrorStateIcon"})]},"error-state-icon"),e.jsxs(f,{vertical:!0,align:"center",children:[e.jsx(w,{size:s}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"WarningStateIcon"})]},"warning-state-icon"),e.jsxs(f,{vertical:!0,align:"center",children:[e.jsx(B,{size:s}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"SuccessStateIcon"})]},"success-state-icon")]})]}),e.jsxs("div",{style:a,children:[e.jsx(c.Title,{level:4,children:"UI Actions"}),i("Light",O.lightIcons),i("Duotone",O.duotoneIcons)]}),e.jsxs("div",{style:a,children:[e.jsx(c.Title,{level:4,children:"Informational Icons"}),i("Light",_.lightIcons),i("Duotone",_.duotoneIcons)]}),e.jsxs("div",{style:a,children:[e.jsx(c.Title,{level:4,children:"Data Type Icons"}),i("Light",E.lightIcons),i("Duotone",E.duotoneIcons)]}),e.jsxs("div",{style:a,children:[e.jsx(c.Title,{level:4,children:"Navigation"}),i("Light",M.lightIcons),i("Duotone",M.duotoneIcons)]}),D.length>0&&e.jsxs("div",{style:a,children:[e.jsx(c.Title,{level:4,children:"Other Icons"}),i("Light",C.lightIcons),i("Duotone",C.duotoneIcons)]}),e.jsxs("div",{style:a,children:[e.jsx(c.Title,{level:4,type:"secondary",children:"Deprecated Icons"}),e.jsx("div",{style:g,children:k.sort().map(j)})]})]});function j(t){const l=d[t].deprecated,u=l?{textDecoration:"line-through"}:{};return e.jsxs(f,{vertical:!0,align:"center",children:[e.jsx(W,{name:t,size:s,color:p,variant:R}),e.jsxs("p",{style:{fontFamily:"monospace",textAlign:"center",...u},children:[l?"deprecated ":"",t]})]},t)}},X=`
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
`,K={title:"Components/General/Icons",component:m,argTypes:{size:{control:"select",options:Y},color:{control:"select",options:q},variant:{control:"select",options:Object.values(b)}},parameters:{docs:{description:{component:X}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Q=["IconTable"];export{m as IconTable,Q as __namedExportsOrder,K as default};
