import{Y as f}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"Components/Not Prod Ready/Data Entry/InputNumber",component:f,args:{addonAfter:void 0,addonBefore:void 0,autoFocus:!1,bordered:!0,changeOnBlur:!0,controls:!0,decimalSeparator:".",placeholder:"Enter a number",defaultValue:void 0,disabled:!1,formatter:void 0,keyboard:!0,max:Number.MAX_SAFE_INTEGER,min:Number.MIN_SAFE_INTEGER,parser:void 0,precision:void 0,readOnly:!1,status:void 0,prefix:void 0,size:"middle",step:1,stringMode:!1,value:void 0,onChange:r=>{alert("InputNumber changed: "+r)},onPressEnter:r=>{console.log("Enter key pressed:",r)},onStep:(r,S)=>{console.log("Step:",r,S)}},argTypes:{size:{control:"select",options:["large","middle","small"]},status:{control:"select",options:["error","warning"]}}},e={},a={args:{size:"small"}},s={args:{size:"large"}},o={args:{status:"warning"}},t={args:{status:"error"}},n={args:{disabled:!0,value:42}},c={args:{readOnly:!0,value:123}},i={args:{prefix:"$"}},m={args:{stringMode:!0,value:"42.50"}},d={args:{controls:!0,precision:2}},p={args:{decimalSeparator:","}},u={args:{formatter:(r,S)=>`$${r}`}},l={args:{min:10,max:100}},g={args:{step:.5}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 42
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 123
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: '$'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    stringMode: true,
    value: '42.50'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    controls: true,
    precision: 2
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    decimalSeparator: ','
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    formatter: (value, info) => \`$\${value}\`
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    min: 10,
    max: 100
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    step: 0.5
  }
}`,...g.parameters?.docs?.source}}};const x=["Primary","Small","Large","Warning","Error","Disabled","ReadOnly","$Prefix","StringMode","WithControlsAndPrecision","DecimalSeparatorComma","WithFormatter","MinMaxConstraints","Step05"];export{i as $Prefix,p as DecimalSeparatorComma,n as Disabled,t as Error,s as Large,l as MinMaxConstraints,e as Primary,c as ReadOnly,a as Small,g as Step05,m as StringMode,o as Warning,d as WithControlsAndPrecision,u as WithFormatter,x as __namedExportsOrder,E as default};
