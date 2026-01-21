import{j as t}from"./jsx-runtime-u17CrQMm.js";import{ae as i}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{R as s,C as a}from"./row-_uEFDODe.js";import"./iframe-ZAwtOOsv.js";import"./preload-helper-PPVm8Dsz.js";import"./LightTheme-BtoaoHMG.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./Context-D1vOXvMD.js";import"./AntdIcon-CLyLtIX5.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";const j={title:"UX Patterns/StatisticsCard",component:i,parameters:{layout:"centered"}},o={render:()=>{const r=[{title:"Precision",value:72,tooltip:"Precision focuses on how many of the users predicted to act actually do so. High precision means less wasted impressions or messaging."},{title:"Recall",value:76,tooltip:"Recall shows how many of the actual converters the model successfully identifies. Higher recall means fewer missed opportunities."},{title:"Accuracy",value:87,tooltip:"Accuracy shows how often the model's predictions match what really happens, giving you confidence in your audience targeting or personalization strategy."},{title:"AUC",value:87,tooltip:"AUC tells you how powerful your model is at separating likely converters from everyone else — the higher the AUC, the better your targeting precision."}];return t.jsx("div",{style:{width:"800px"},children:t.jsx(s,{gutter:[16,16],children:r.map(e=>t.jsx(a,{span:12,children:t.jsx(i,{title:e.title,value:e.value,denominator:100,tooltip:e.tooltip})},e.title))})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const metrics = [{
      title: 'Precision',
      value: 72,
      tooltip: 'Precision focuses on how many of the users predicted to act actually do so. High precision means less wasted impressions or messaging.'
    }, {
      title: 'Recall',
      value: 76,
      tooltip: 'Recall shows how many of the actual converters the model successfully identifies. Higher recall means fewer missed opportunities.'
    }, {
      title: 'Accuracy',
      value: 87,
      tooltip: "Accuracy shows how often the model's predictions match what really happens, giving you confidence in your audience targeting or personalization strategy."
    }, {
      title: 'AUC',
      value: 87,
      tooltip: 'AUC tells you how powerful your model is at separating likely converters from everyone else — the higher the AUC, the better your targeting precision.'
    }];
    return <div style={{
      width: '800px'
    }}>
        <Row gutter={[16, 16]}>
          {metrics.map(metric => <Col span={12} key={metric.title}>
              <StatisticsCard title={metric.title} value={metric.value} denominator={100} tooltip={metric.tooltip} />
            </Col>)}
        </Row>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const P=["ModelMetrics"];export{o as ModelMetrics,P as __namedExportsOrder,j as default};
