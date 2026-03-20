import{c7 as s,j as t,bs as r,bt as a}from"./iframe-BiJZ0YfI.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"UX Patterns/StatisticsCard",component:s,parameters:{layout:"centered"}},o={render:()=>{const i=[{title:"Precision",value:72,tooltip:"Precision focuses on how many of the users predicted to act actually do so. High precision means less wasted impressions or messaging."},{title:"Recall",value:76,tooltip:"Recall shows how many of the actual converters the model successfully identifies. Higher recall means fewer missed opportunities."},{title:"Accuracy",value:87,tooltip:"Accuracy shows how often the model's predictions match what really happens, giving you confidence in your audience targeting or personalization strategy."},{title:"AUC",value:87,tooltip:"AUC tells you how powerful your model is at separating likely converters from everyone else — the higher the AUC, the better your targeting precision."}];return t.jsx("div",{style:{width:"800px"},children:t.jsx(r,{gutter:[16,16],children:i.map(e=>t.jsx(a,{span:12,children:t.jsx(s,{title:e.title,value:e.value,denominator:100,tooltip:e.tooltip})},e.title))})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const u=["ModelMetrics"];export{o as ModelMetrics,u as __namedExportsOrder,c as default};
