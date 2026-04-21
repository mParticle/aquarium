import{aE as i,cs as u,j as e,ct as a,aU as p}from"./iframe-CeKtREzi.js";var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z"}}]},name:"customer-service",theme:"outlined"};function l(){return l=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(s[c]=n[c])}return s},l.apply(this,arguments)}const d=(s,t)=>i.createElement(u,l({},s,{ref:t,icon:m})),f=i.forwardRef(d),h={title:"Components/Not Prod Ready/General/FloatButton",component:a,args:{tooltip:{title:"Help",placement:"left"},type:"primary",shape:"square",icon:e.jsx(p,{style:{color:"white"}})},argTypes:{shape:{control:"select",options:["circle","square"]},type:{control:"select",options:["default","primary"]}},parameters:{docs:{story:{inline:!0,iframeHeight:150}}}},o={},r={render:()=>e.jsxs(a.Group,{shape:"circle",style:{insetInlineEnd:24},children:[e.jsx(a,{icon:e.jsx(p,{}),tooltip:{title:"Help",placement:"left"}}),e.jsx(a,{icon:e.jsx(f,{}),tooltip:{title:"Support",placement:"left"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <FloatButton.Group shape="circle" style={{
    insetInlineEnd: 24
  }}>
      <FloatButton icon={<QuestionCircleOutlined />} tooltip={{
      title: 'Help',
      placement: 'left'
    }} />
      <FloatButton icon={<CustomerServiceOutlined />} tooltip={{
      title: 'Support',
      placement: 'left'
    }} />
    </FloatButton.Group>
}`,...r.parameters?.docs?.source}}};const v=["Primary","Group"],y=Object.freeze(Object.defineProperty({__proto__:null,Group:r,Primary:o,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{y as F,r as G,o as P};
