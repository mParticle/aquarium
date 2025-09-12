var q=Object.defineProperty,W=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var _=(c,n,o)=>n in c?q(c,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[n]=o,y=(c,n)=>{for(var o in n||(n={}))J.call(n,o)&&_(c,o,n[o]);if(F)for(var o of F(n))K.call(n,o)&&_(c,o,n[o]);return c},A=(c,n)=>W(c,H(n));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{I as r,T as l,F as E,a as M}from"./NavigationItemsService-4v_cF5PP.js";import{E as Q}from"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const g=({color:c="black",size:n="lg",name:o,variant:O})=>{const p=Object.keys(r),f={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"10px",alignItems:"center",justifyItems:"center"},d={marginBottom:"32px"},R={marginBottom:"20px"};if(o)return t.jsx("div",{style:f,children:T(o)});const h=e=>{const s=["accept","back","clone","copy","delete","edit","filter","fitToScreen","fullScreen","jumpTo","link","lock","logout","moreActions","next","openTab","pause","play","previous","run","submitFeedback","unlock","zoomIn","zoomOut","dragAndDrop","dropdownClose","dropdownOpen","empty","event","eventAttribute","favorite","flag","reorder","active","annotation","api","audienceGroup","audiences","boost","calculatedAttribute","cohort","conversion","criteriaGroup","dashboard","database","date","devices","funnel","group","helpVideo","identity","info","insights","link","organization","other","paywall","pipelines","placeholder","precision","predictions","privileges","refreshFrequency","scheduledReport","segmentationAnalysis","selected","settings","stateEmpty","stateError","stateNoResults","textWidget","abSplit","users","account","analytics","C360","catalog","connections","dashboard","dataPlatform","date","devices","directory","dsr","enrichment","forwarding","identity","journeyAnalysis","liveStream","notification","notificationSubscribed","notificationSubscribe","observability","organization","oversight","privacy","overview","predictions","savedProjects","scheduledReport","segmentationAnalysis","setup","support","systemAlerts","transformation","userAttribute","userProfiles","boolean","number","add","upload","link","rateDown","rateStar","rateUp","predictions","premium","array","list","string","timestamp","otherData"],u=["agentCopilot"],m=[],V=e.filter(i=>s.includes(i)||m.includes(i)),G=e.filter(i=>u.includes(i)||m.includes(i)),B=e.filter(i=>m.includes(i));return e.filter(i=>!s.includes(i)&&!u.includes(i)&&!m.includes(i)).forEach(i=>{const D=r[i];D.default==="duo-tone"||D["duo-tone"]&&!D.light?G.push(i):V.push(i)}),{lightIcons:V,duotoneIcons:G,bothVariants:B}},a=(e,s,u=5)=>s.length===0?null:t.jsxs("div",{style:R,children:[t.jsxs(l.Title,{level:u,children:[e," (",s.length,")"]}),t.jsx("div",{style:f,children:s.sort().map(T)})]}),I=p.filter(e=>!r[e].deprecated&&(e.includes("accept")||e.includes("close")||e.includes("edit")||e.includes("delete")||e.includes("copy")||e.includes("add")||e.includes("remove")||e.includes("unlock")||e.includes("lock")||e.includes("play")||e.includes("pause")||e.includes("run")||e.includes("filter")||e.includes("search")||e.includes("upload")||e.includes("next")||e.includes("previous")||e.includes("back")||e.includes("openTab")||e.includes("fullScreen")||e.includes("fitToScreen")||e.includes("zoomIn")||e.includes("zoomOut")||e.includes("jumpTo")||e.includes("moreActions")||e.includes("dragAndDrop")||e.includes("reorder")||e.includes("refresh")||e.includes("clone")||e.includes("boost")||e.includes("submitFeedback")||e.includes("dropdown")||e.includes("logout"))),v=p.filter(e=>!r[e].deprecated&&(e.includes("info")||e.includes("help")||e.includes("notification")||e.includes("active")||e.includes("cohort")||e.includes("funnel")||e.includes("group")||e.includes("placeholder")||e.includes("privileges")||e.includes("textWidget")||e.includes("annotation")||e.includes("generic")||e.includes("calculatedAttribute")||e.includes("conversion")||e.includes("criteriaGroup")||e.includes("audienceGroup")||e.includes("abSplit")||e.includes("other")&&e!=="otherData"||e.includes("users")||e.includes("premium")||e.includes("agentCopilot")||e.includes("refreshFrequency")||e.includes("stateError")||e.includes("bannerFreemium")||e==="api"||e==="audiences"||e==="database"||e==="dashboard"||e==="date"||e==="devices"||e==="identity"||e==="organization"||e==="predictions"||e==="scheduledReport"||e==="segmentationAnalysis"||e==="flag"||e==="insights"||e==="link"||e==="favorite"||e==="paywall"||e==="pipelines"||e==="precision"||e==="rateDown"||e==="rateStar"||e==="rateUp"||e==="settings"||e==="support"||e==="selected")),b=p.filter(e=>!r[e].deprecated&&(e.includes("array")||e.includes("boolean")||e.includes("number")||e.includes("string")||e.includes("timestamp")||e.includes("list")||e.includes("otherData")||e.includes("stateEmpty")||e.includes("stateNoResults")||e==="empty"||e==="event"||e==="eventAttribute"||e==="userAttribute")),S=p.filter(e=>!r[e].deprecated&&(e.includes("catalog")||e.includes("directory")||e.includes("dsr")||e.includes("enrichment")||e.includes("forwarding")||e.includes("journeyAnalysis")||e.includes("liveStream")||e.includes("observability")||e.includes("systemAlerts")||e.includes("transformation")||e.includes("userProfiles")||e.includes("account")||e==="connections"||e==="savedProjects"||e==="privacy"||e==="setup")),j=p.filter(e=>r[e].deprecated),x=p.filter(e=>!r[e].deprecated&&!I.includes(e)&&!v.includes(e)&&!b.includes(e)&&!S.includes(e)),k=h(I),N=h(v),w=h(b),z=h(S),P=h(x);return t.jsxs("div",{children:[t.jsxs("div",{style:d,children:[t.jsx(l.Title,{level:4,children:"Special Icons (1)"}),t.jsx("div",{style:f,children:t.jsxs(E,{vertical:!0,align:"center",children:[t.jsx(Q,{size:n}),t.jsx("p",{style:{fontFamily:"monospace",textAlign:"center"},children:"ErrorStateIcon"})]},"error-state-icon")})]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["UI Actions (",I.length,")"]}),a("Light",k.lightIcons),a("Duotone",k.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Informational Icons (",v.length,")"]}),a("Light",N.lightIcons),a("Duotone",N.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Data Type Icons (",b.length,")"]}),a("Light",w.lightIcons),a("Duotone",w.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Navigation (",S.length,")"]}),a("Light",z.lightIcons),a("Duotone",z.duotoneIcons)]}),x.length>0&&t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,children:["Other Icons (",x.length,")"]}),a("Light",P.lightIcons),a("Duotone",P.duotoneIcons)]}),t.jsxs("div",{style:d,children:[t.jsxs(l.Title,{level:4,type:"secondary",children:["Deprecated Icons (",j.length,")"]}),t.jsx("div",{style:f,children:j.sort().map(T)})]})]});function T(e){const u=r[e].deprecated,m=u?{textDecoration:"line-through"}:{};return t.jsxs(E,{vertical:!0,align:"center",children:[t.jsx(M,{name:e,size:n,color:c,variant:O}),t.jsxs("p",{style:y({fontFamily:"monospace",textAlign:"center"},m),children:[u?"deprecated ":"",e]})]},e)}},X='\n### Icon Library Documentation\n\nThe `IconTable` component displays icons organized into logical categories for better discoverability and usage.\n\n#### Icon Categories\n\n**UI Actions**: Interactive icons for user actions like add, edit, delete, play, pause, search, etc.\n**Informational Icons**: Icons that convey information, status, or context like help, notification, groups, states, etc.\n**Data Type Icons**: Icons representing different data types like array, boolean, number, string, timestamp, etc.\n**Navigation**: Icons for navigation and platform features like catalog, directory, observability, etc.\n**Deprecated Icons**: Icons that have been deprecated and should no longer be used in new implementations.\n\n#### Props\n- `name`: The name of the icon \n- `color`: The color of the icon. Available options are `default`, `primary`, `success`, `warning`, `error`, `info`, `white`, `black`, `text`, `strong`, `brand`.\n- `size`: The size of the icon. Available options are `xxxxl`, `xxxl`, `xxl`, `xl`, `lg`, `md`, `sm`, `xs`.\n- `variant`: The variant of the icon. Available options are `light` and `duo-tone`.\n\n#### Icon Naming Conventions\n\nIcons follow specific naming patterns based on their category:\n- **Action Icons**: Use `mp_act_lt_` prefix in SVG filenames\n- **Info Icons**: Use `mp_info_lt_` prefix in SVG filenames\n- **Data Icons**: Use `mp_data_dt_` prefix in SVG filenames\n- **Platform/Navigation Icons**: Use `mp_pm_lt_` prefix in SVG filenames\n\n#### Example Usage\n```jsx\n<Icon name="add" size="lg" color="primary" variant="light" />\n<Icon name="info" size="md" color="info" />\n<Icon name="play" size="sm" color="success" />\n```\n\n#### Updating Icons\n\n1. **Add New Icons**: Use the SVG Prettifier in Storybook (Contributing → Tooling → SVGPrettifier)\n2. **Follow Naming**: Use appropriate prefix based on icon category\n3. **Update Constants**: Icons are automatically categorized based on naming patterns\n4. **Verify Display**: Check the organized icon library to ensure proper categorization\n',pe={title:"Components/General/Icons",component:g,argTypes:{size:{control:"select",options:["xxxxl","xxxl","xxl","xl","lg","md","sm","xs"]},color:{control:"select",options:["default","primary","success","warning","error","info","white","black","text","strong","brand"]},variant:{control:"select",options:["light","duo-tone"]}},parameters:{docs:{description:{component:X}}}};var C,U,L;g.parameters=A(y({},g.parameters),{docs:A(y({},(C=g.parameters)==null?void 0:C.docs),{source:y({originalSource:`({
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
  const sectionStyle = {
    marginBottom: '32px'
  };
  const subSectionStyle = {
    marginBottom: '20px'
  };

  // If showing a specific icon, use original behavior
  if (name) {
    return <div style={iconGridStyle}>{renderIcon(name)}</div>;
  }

  // Helper function to split icons by variant based on SVG filename patterns
  const splitByVariant = (icons: Array<keyof typeof Icons>) => {
    // Icons that follow mp_*_lt_* pattern (light) based on SVG filenames
    const lightPatternIcons = ['accept', 'back', 'clone', 'copy', 'delete', 'edit', 'filter', 'fitToScreen', 'fullScreen', 'jumpTo', 'link', 'lock', 'logout', 'moreActions', 'next', 'openTab', 'pause', 'play', 'previous', 'run', 'submitFeedback', 'unlock', 'zoomIn', 'zoomOut', 'dragAndDrop', 'dropdownClose', 'dropdownOpen', 'empty', 'event', 'eventAttribute', 'favorite', 'flag', 'reorder',
    // info patterns
    'active', 'annotation', 'api', 'audienceGroup', 'audiences', 'boost', 'calculatedAttribute', 'cohort', 'conversion', 'criteriaGroup', 'dashboard', 'database', 'date', 'devices', 'funnel', 'group', 'helpVideo', 'identity', 'info', 'insights', 'link', 'organization', 'other', 'paywall', 'pipelines', 'placeholder', 'precision', 'predictions', 'privileges', 'refreshFrequency', 'scheduledReport', 'segmentationAnalysis', 'selected', 'settings', 'stateEmpty', 'stateError', 'stateNoResults', 'textWidget', 'abSplit', 'users',
    // pm patterns
    'account', 'analytics', 'C360', 'catalog', 'connections', 'dashboard', 'dataPlatform', 'date', 'devices', 'directory', 'dsr', 'enrichment', 'forwarding', 'identity', 'journeyAnalysis', 'liveStream', 'notification', 'notificationSubscribed', 'notificationSubscribe', 'observability', 'organization', 'oversight', 'privacy', 'overview', 'predictions', 'savedProjects', 'scheduledReport', 'segmentationAnalysis', 'setup', 'support', 'systemAlerts', 'transformation', 'userAttribute', 'userProfiles',
    // data patterns
    'boolean', 'number',
    // legacy icons that don't follow pattern but should be light
    'add', 'upload', 'link',
    // icons that have duotone variants but appear as simple light icons
    'rateDown', 'rateStar', 'rateUp', 'predictions', 'premium',
    // data type icons that are configured as duotone but appear visually light
    'array', 'list', 'string', 'timestamp', 'otherData'];

    // Icons that follow mp_*_dt_* pattern (duotone) based on SVG filenames
    const duotonePatternIcons = ['agentCopilot'];

    // Icons that have both lt and dt variants (from Icons.ts config)
    const bothVariantsPatternIcons = [];
    const lightIcons = icons.filter(iconName => lightPatternIcons.includes(iconName) || bothVariantsPatternIcons.includes(iconName));
    const duotoneIcons = icons.filter(iconName => duotonePatternIcons.includes(iconName) || bothVariantsPatternIcons.includes(iconName));

    // For icons with both variants, show them in both sections
    const bothVariants = icons.filter(iconName => bothVariantsPatternIcons.includes(iconName));

    // Fallback for icons that don't match patterns - use config-based logic
    const unmatched = icons.filter(iconName => !lightPatternIcons.includes(iconName) && !duotonePatternIcons.includes(iconName) && !bothVariantsPatternIcons.includes(iconName));

    // Add unmatched to appropriate categories based on config
    unmatched.forEach(iconName => {
      const icon = Icons[iconName];
      if (icon.default === 'duo-tone' || icon['duo-tone'] && !icon.light) {
        duotoneIcons.push(iconName);
      } else {
        lightIcons.push(iconName);
      }
    });
    return {
      lightIcons,
      duotoneIcons,
      bothVariants
    };
  };

  // Helper function to render subsection
  const renderSubSection = (title: string, icons: Array<keyof typeof Icons>, titleLevel: 4 | 5 = 5) => {
    if (icons.length === 0) return null;
    return <div style={subSectionStyle}>
        <Typography.Title level={titleLevel}>
          {title} ({icons.length})
        </Typography.Title>
        <div style={iconGridStyle}>{icons.sort().map(renderIcon)}</div>
      </div>;
  };

  // Categorize icons
  const uiActionIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName];
    return !iconData.deprecated && (iconName.includes('accept') || iconName.includes('close') || iconName.includes('edit') || iconName.includes('delete') || iconName.includes('copy') || iconName.includes('add') || iconName.includes('remove') || iconName.includes('unlock') || iconName.includes('lock') || iconName.includes('play') || iconName.includes('pause') || iconName.includes('run') || iconName.includes('filter') || iconName.includes('search') || iconName.includes('upload') || iconName.includes('next') || iconName.includes('previous') || iconName.includes('back') || iconName.includes('openTab') || iconName.includes('fullScreen') || iconName.includes('fitToScreen') || iconName.includes('zoomIn') || iconName.includes('zoomOut') || iconName.includes('jumpTo') || iconName.includes('moreActions') || iconName.includes('dragAndDrop') || iconName.includes('reorder') || iconName.includes('refresh') || iconName.includes('clone') || iconName.includes('boost') || iconName.includes('submitFeedback') || iconName.includes('dropdown') || iconName.includes('logout'));
  });
  const informationalIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName];
    return !iconData.deprecated && (iconName.includes('info') || iconName.includes('help') || iconName.includes('notification') || iconName.includes('active') || iconName.includes('cohort') || iconName.includes('funnel') || iconName.includes('group') || iconName.includes('placeholder') || iconName.includes('privileges') || iconName.includes('textWidget') || iconName.includes('annotation') || iconName.includes('generic') || iconName.includes('calculatedAttribute') || iconName.includes('conversion') || iconName.includes('criteriaGroup') || iconName.includes('audienceGroup') || iconName.includes('abSplit') || iconName.includes('other') && iconName !== 'otherData' || iconName.includes('users') || iconName.includes('premium') || iconName.includes('agentCopilot') || iconName.includes('refreshFrequency') || iconName.includes('stateError') || iconName.includes('bannerFreemium') || iconName === 'api' || iconName === 'audiences' || iconName === 'database' || iconName === 'dashboard' || iconName === 'date' || iconName === 'devices' || iconName === 'identity' || iconName === 'organization' || iconName === 'predictions' || iconName === 'scheduledReport' || iconName === 'segmentationAnalysis' || iconName === 'flag' || iconName === 'insights' || iconName === 'link' || iconName === 'favorite' || iconName === 'paywall' || iconName === 'pipelines' || iconName === 'precision' || iconName === 'rateDown' || iconName === 'rateStar' || iconName === 'rateUp' || iconName === 'settings' || iconName === 'support' || iconName === 'selected');
  });
  const dataTypeIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName];
    return !iconData.deprecated && (iconName.includes('array') || iconName.includes('boolean') || iconName.includes('number') || iconName.includes('string') || iconName.includes('timestamp') || iconName.includes('list') || iconName.includes('otherData') || iconName.includes('stateEmpty') || iconName.includes('stateNoResults') || iconName === 'empty' || iconName === 'event' || iconName === 'eventAttribute' || iconName === 'userAttribute');
  });
  const navigationIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName];
    return !iconData.deprecated && (iconName.includes('catalog') || iconName.includes('directory') || iconName.includes('dsr') || iconName.includes('enrichment') || iconName.includes('forwarding') || iconName.includes('journeyAnalysis') || iconName.includes('liveStream') || iconName.includes('observability') || iconName.includes('systemAlerts') || iconName.includes('transformation') || iconName.includes('userProfiles') || iconName.includes('account') || iconName === 'connections' || iconName === 'savedProjects' || iconName === 'privacy' || iconName === 'setup');
  });
  const deprecatedIcons = allIcons.filter(iconName => Icons[iconName].deprecated);
  const otherIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName];
    return !iconData.deprecated && !uiActionIcons.includes(iconName) && !informationalIcons.includes(iconName) && !dataTypeIcons.includes(iconName) && !navigationIcons.includes(iconName);
  });

  // Split each category by variant
  const uiActionSplit = splitByVariant(uiActionIcons);
  const informationalSplit = splitByVariant(informationalIcons);
  const dataTypeSplit = splitByVariant(dataTypeIcons);
  const navigationSplit = splitByVariant(navigationIcons);
  const otherSplit = splitByVariant(otherIcons);
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
}`},(L=(U=g.parameters)==null?void 0:U.docs)==null?void 0:L.source)})});const me=["IconTable"];export{g as IconTable,me as __namedExportsOrder,pe as default};
