import{j as f,i as b,I as k}from"./iframe-D7Ys59RG.js";import"./preload-helper-PPVm8Dsz.js";const{userEvent:x}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Not Prod Ready/General/Button",component:e=>f.jsx(b,{...e,children:e.children??"Button Label"}),args:{block:!1,danger:!1,disabled:!1,ghost:!1,href:void 0,htmlType:"button",icon:void 0,loading:!1,shape:"default",size:"middle",target:void 0,type:"primary",onClick:void 0},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},r={play:async e=>{const S=e.canvasElement.querySelector("button");if(S)await x.click(S);else throw new Error("Button not found")}},a={args:{type:"dashed"}},s={args:{type:"text"}},o={args:{type:"link"}},t={args:{danger:!0}},n={args:{disabled:!0}},c={args:{ghost:!0}},i={args:{block:!0}},d={args:{type:"default",icon:f.jsx(k,{name:"mpLogo",size:"sm",color:"default"}),variant:"with-new-icon"}},l={args:{icon:f.jsx(k,{name:"dataPlatform",size:"xl"}),children:" ",type:"default",shape:"round",variant:"with-new-icon"}},u={args:{loading:!0}},p={args:{shape:"circle"}},m={args:{shape:"round"}},g={args:{size:"large"}},h={args:{size:"small"}},y={args:{onClick:e=>{alert("Button Clicked")}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async context => {
    const button = context.canvasElement.querySelector('button');
    if (button) {
      await userEvent.click(button); // Click the button
    } else {
      throw new Error('Button not found');
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    danger: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ghost: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    icon: <Icon name="mpLogo" size="sm" color="default" />,
    variant: 'with-new-icon'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="dataPlatform" size="xl" />,
    children: ' ',
    type: 'default',
    shape: 'round',
    variant: 'with-new-icon'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'circle'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'round'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: _e => {
      alert('Button Clicked');
    }
  }
}`,...y.parameters?.docs?.source}}};const v=["Primary","Dashed","Text","Link","WithDanger","Disabled","Ghost","Block","WithIconDefaultColorSM","RoundIconButton","Loading","Circle","Round","Large","Small","PrimaryButtonWithClick"];export{i as Block,p as Circle,a as Dashed,n as Disabled,c as Ghost,g as Large,o as Link,u as Loading,r as Primary,y as PrimaryButtonWithClick,m as Round,l as RoundIconButton,h as Small,s as Text,t as WithDanger,d as WithIconDefaultColorSM,v as __namedExportsOrder,C as default};
