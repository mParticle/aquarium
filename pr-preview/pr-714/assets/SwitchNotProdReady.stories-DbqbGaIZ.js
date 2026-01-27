import{a0 as r,y as k,j as e,S as C,i as x,I as p}from"./iframe-_QPLlW2H.js";import{E as h}from"./ExampleStory-z2QCavMP.js";import"./preload-helper-PPVm8Dsz.js";const j={title:"Components/Not Prod Ready/Data Entry/Switch",component:r,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(a,m)=>{},onChange:(a,m)=>{alert(`Switch changed: ${a}`)}}},s={args:{checked:!0}},t={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},n={args:{disabled:!0}},d={args:{loading:!0}},c={args:{size:"small"}},o={render:()=>{const[a,m]=k.useState(!0),g=()=>{m(!a)};return e.jsx(h,{title:"Press button to toggle disabled state.",children:e.jsxs(C,{orientation:"vertical",children:[e.jsx(r,{disabled:a,defaultChecked:!0}),e.jsx(x,{type:"primary",onClick:g,children:"Toggle disabled"})]})})}},l={render:()=>e.jsxs(h,{title:e.jsx(e.Fragment,{children:"size=small represents a small sized switch."}),children:[e.jsx(r,{defaultChecked:!0}),e.jsx("br",{}),e.jsx(r,{size:"small",defaultChecked:!0})]})},i={render:()=>e.jsxs(h,{title:"Mark a pending state of switch.",children:[e.jsx(r,{loading:!0,defaultChecked:!0}),e.jsx("br",{}),e.jsx(r,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},u={render:()=>e.jsx(h,{title:"With text and icon.",children:e.jsxs(C,{orientation:"vertical",children:[e.jsx(r,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),e.jsx(r,{checkedChildren:"1",unCheckedChildren:"0"}),e.jsx(r,{checkedChildren:e.jsx(p,{name:"selected"}),unCheckedChildren:e.jsx(p,{name:"support"}),defaultChecked:!0})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
      setDisabled(!disabled);
    };
    return <ExampleStory title="Press button to toggle disabled state.">
        <Space orientation="vertical">
          <Switch disabled={disabled} defaultChecked />
          <Button type="primary" onClick={toggle}>
            Toggle disabled
          </Button>
        </Space>
      </ExampleStory>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Mark a pending state of switch.">
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading checkedChildren="Loading" unCheckedChildren="Loading" />
      </ExampleStory>;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="With text and icon.">
        <Space orientation="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon name="selected" />} unCheckedChildren={<Icon name="support" />} defaultChecked />
        </Space>
      </ExampleStory>;
  }
}`,...u.parameters?.docs?.source}}};const y=["Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"];export{s as Checked,t as CustomCopy,n as Disabled,o as ExampleDisabled,i as ExampleLoading,l as ExampleSizes,u as ExampleTextAndIcon,d as Loading,c as Small,y as __namedExportsOrder,j as default};
