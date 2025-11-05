var Y=Object.defineProperty,X=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var G=(o,n,i)=>n in o?Y(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i,y=(o,n)=>{for(var i in n||(n={}))q.call(n,i)&&G(o,i,n[i]);if(F)for(var i of F(n))Z.call(n,i)&&G(o,i,n[i]);return o},_=(o,n)=>X(o,$(n));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as c}from"./index-3OP4wdng.js";import{at as I,c as r,F as x,I as J}from"./NavigationItemsService-DcOkMjKp.js";import{E as K}from"./ErrorStateIcon-Clx5lk_q.js";import{S as Q}from"./SuccessStateIcon-CrBP74im.js";import{W as ee}from"./WarningStateIcon-irkX5OVh.js";import"./_baseClone-DwBCp-Ss.js";import{ar as te,as as ne,at as oe}from"./style-BvWo89XW.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./WarningFilled-D6ijQqgK.js";const D={LIGHT:"light",DUO_TONE:"duo-tone"},ie=["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"],se=["default","primary","success","warning","error","info","white","black","text","strong","brand"],N={UI_ACTION_PATTERNS:["accept","close","edit","delete","copy","add","remove","unlock","lock","play","pause","run","filter","search","upload","next","previous","back","openTab","fullScreen","fitToScreen","zoomIn","zoomOut","jumpTo","moreActions","dragAndDrop","reorder","refresh","clone","boost","submitFeedback","dropdown","logout","moveToTop"],INFORMATIONAL_PATTERNS:["info","help","history","notification","active","cohort","funnel","group","placeholder","privileges","textWidget","annotation","generic","calculatedAttribute","conversion","criteriaGroup","audienceGroup","abSplit","account","user","users","viewOnly","premium","agentCopilot","refreshFrequency","stateError","bannerFreemium"],DATA_TYPE_PATTERNS:["array","boolean","number","string","timestamp","list","otherData","stateEmpty","stateNoResults"],NAVIGATION_PATTERNS:["catalog","directory","dsr","enrichment","forwarding","journeyAnalysis","liveStream","observability","systemAlerts","transformation","userProfiles"]},A=(o,n)=>n.some(i=>o.includes(i)),b=o=>o.filter(n=>!I[n].deprecated),g=({color:o="black",size:n="lg",name:i,variant:L})=>{const s=Object.keys(I),h={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:te,alignItems:"center",justifyItems:"center"},l={marginBottom:ne},V={marginBottom:oe};if(i)return e.jsx("div",{style:h,children:O(i)});const u=t=>{const p=[],d=[];return t.forEach(m=>{I[m].default===D.DUO_TONE?d.push(m):p.push(m)}),{lightIcons:p,duotoneIcons:d}},a=(t,p,d=5)=>p.length===0?null:e.jsxs("div",{style:V,children:[e.jsx(r.Title,{level:d,children:t}),e.jsx("div",{style:h,children:p.sort().map(O)})]}),S=c.useMemo(()=>b(s.filter(t=>A(t,N.UI_ACTION_PATTERNS))),[s]),w=["api","audiences","database","dashboard","date","devices","identity","organization","predictions","scheduledReport","segmentationAnalysis","flag","insights","link","favorite","paywall","pipelines","precision","rateDown","rateStar","rateUp","settings","support","selected"],f=c.useMemo(()=>b(s.filter(t=>A(t,N.INFORMATIONAL_PATTERNS)||w.includes(t)||t.includes("other")&&t!=="otherData")),[s]),B=["empty","event","eventAttribute","userAttribute"],v=c.useMemo(()=>b(s.filter(t=>A(t,N.DATA_TYPE_PATTERNS)||B.includes(t))),[s]),W=["connections","savedProjects","privacy","setup"],T=c.useMemo(()=>b(s.filter(t=>A(t,N.NAVIGATION_PATTERNS)||W.includes(t))),[s]),H=c.useMemo(()=>s.filter(t=>I[t].deprecated),[s]),j=c.useMemo(()=>s.filter(t=>!I[t].deprecated&&!S.includes(t)&&!f.includes(t)&&!v.includes(t)&&!T.includes(t)),[s,S,f,v,T]),E=c.useMemo(()=>u(S),[S]),M=c.useMemo(()=>u(f),[f]),C=c.useMemo(()=>u(v),[v]),R=c.useMemo(()=>u(T),[T]),P=c.useMemo(()=>u(j),[j]);return e.jsxs("div",{children:[e.jsxs("div",{style:l,children:[e.jsx(r.Title,{level:4,children:"Special Icons"}),e.jsxs("div",{style:h,children:[e.jsxs(x,{vertical:!0,align:"center",children:[e.jsx(K,{size:n}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"ErrorStateIcon"})]},"error-state-icon"),e.jsxs(x,{vertical:!0,align:"center",children:[e.jsx(ee,{size:n}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"WarningStateIcon"})]},"warning-state-icon"),e.jsxs(x,{vertical:!0,align:"center",children:[e.jsx(Q,{size:n}),e.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"SuccessStateIcon"})]},"success-state-icon")]})]}),e.jsxs("div",{style:l,children:[e.jsx(r.Title,{level:4,children:"UI Actions"}),a("Light",E.lightIcons),a("Duotone",E.duotoneIcons)]}),e.jsxs("div",{style:l,children:[e.jsx(r.Title,{level:4,children:"Informational Icons"}),a("Light",M.lightIcons),a("Duotone",M.duotoneIcons)]}),e.jsxs("div",{style:l,children:[e.jsx(r.Title,{level:4,children:"Data Type Icons"}),a("Light",C.lightIcons),a("Duotone",C.duotoneIcons)]}),e.jsxs("div",{style:l,children:[e.jsx(r.Title,{level:4,children:"Navigation"}),a("Light",R.lightIcons),a("Duotone",R.duotoneIcons)]}),j.length>0&&e.jsxs("div",{style:l,children:[e.jsx(r.Title,{level:4,children:"Other Icons"}),a("Light",P.lightIcons),a("Duotone",P.duotoneIcons)]}),e.jsxs("div",{style:l,children:[e.jsx(r.Title,{level:4,type:"secondary",children:"Deprecated Icons"}),e.jsx("div",{style:h,children:H.sort().map(O)})]})]});function O(t){const d=I[t].deprecated,m=d?{textDecoration:"line-through"}:{};return e.jsxs(x,{vertical:!0,align:"center",children:[e.jsx(J,{name:t,size:n,color:o,variant:L}),e.jsxs("p",{style:y({fontFamily:"monospace",textAlign:"center"},m),children:[d?"deprecated ":"",t]})]},t)}},ce=`
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
`,je={title:"Components/General/Icons",component:g,argTypes:{size:{control:"select",options:ie},color:{control:"select",options:se},variant:{control:"select",options:Object.values(D)}},parameters:{docs:{description:{component:ce}}}};var z,k,U;g.parameters=_(y({},g.parameters),{docs:_(y({},(z=g.parameters)==null?void 0:z.docs),{source:y({originalSource:`({
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
}`},(U=(k=g.parameters)==null?void 0:k.docs)==null?void 0:U.source)})});const Oe=["IconTable"];export{g as IconTable,Oe as __namedExportsOrder,je as default};
