var d=Object.defineProperty,h=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var n=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,i=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&n(t,o,e[o]);if(l)for(var o of l(e))w.call(e,o)&&n(t,o,e[o]);return t},a=(t,e)=>h(t,y(e));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{ae as u}from"./UnauthorizedTooltip-qq8S7U-N.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import{R as f,C as v}from"./row-DlEJUZa0.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./AntdIcon-DRQs8XP6.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./style-BbwCNso5.js";import"./WarningFilled-D6ijQqgK.js";const D={title:"UX Patterns/StatisticsCard",component:u,parameters:{layout:"centered"}},s={render:()=>{const t=[{title:"Precision",value:72,tooltip:"Precision focuses on how many of the users predicted to act actually do so. High precision means less wasted impressions or messaging."},{title:"Recall",value:76,tooltip:"Recall shows how many of the actual converters the model successfully identifies. Higher recall means fewer missed opportunities."},{title:"Accuracy",value:87,tooltip:"Accuracy shows how often the model's predictions match what really happens, giving you confidence in your audience targeting or personalization strategy."},{title:"AUC",value:87,tooltip:"AUC tells you how powerful your model is at separating likely converters from everyone else — the higher the AUC, the better your targeting precision."}];return r.jsx("div",{style:{width:"800px"},children:r.jsx(f,{gutter:[16,16],children:t.map(e=>r.jsx(v,{span:12,children:r.jsx(u,{title:e.title,value:e.value,denominator:100,tooltip:e.tooltip})},e.title))})})}};var c,p,m;s.parameters=a(i({},s.parameters),{docs:a(i({},(c=s.parameters)==null?void 0:c.docs),{source:i({originalSource:`{
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
}`},(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});const F=["ModelMetrics"];export{s as ModelMetrics,F as __namedExportsOrder,D as default};
