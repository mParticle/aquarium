import{j as e}from"./jsx-runtime-u17CrQMm.js";import{G as r,a as C,c as k,I as h}from"./UnauthorizedTooltip-C-uexwNG.js";import{E as p}from"./ExampleStory-B49bSB_-.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{r as x}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const N={title:"Components/Not Prod Ready/Data Entry/Switch",component:r,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(t,u)=>{},onChange:(t,u)=>{alert(`Switch changed: ${t}`)}}},a={args:{checked:!0}},s={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},n={args:{disabled:!0}},d={args:{loading:!0}},o={args:{size:"small"}},c={render:()=>{const[t,u]=x.useState(!0),g=()=>{u(!t)};return e.jsx(p,{title:"Press button to toggle disabled state.",children:e.jsxs(C,{orientation:"vertical",children:[e.jsx(r,{disabled:t,defaultChecked:!0}),e.jsx(k,{type:"primary",onClick:g,children:"Toggle disabled"})]})})}},i={render:()=>e.jsxs(p,{title:e.jsx(e.Fragment,{children:"size=small represents a small sized switch."}),children:[e.jsx(r,{defaultChecked:!0}),e.jsx("br",{}),e.jsx(r,{size:"small",defaultChecked:!0})]})},l={render:()=>e.jsxs(p,{title:"Mark a pending state of switch.",children:[e.jsx(r,{loading:!0,defaultChecked:!0}),e.jsx("br",{}),e.jsx(r,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},m={render:()=>e.jsx(p,{title:"With text and icon.",children:e.jsxs(C,{orientation:"vertical",children:[e.jsx(r,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),e.jsx(r,{checkedChildren:"1",unCheckedChildren:"0"}),e.jsx(r,{checkedChildren:e.jsx(h,{name:"selected"}),unCheckedChildren:e.jsx(h,{name:"support"}),defaultChecked:!0})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Mark a pending state of switch.">
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading checkedChildren="Loading" unCheckedChildren="Loading" />
      </ExampleStory>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="With text and icon.">
        <Space orientation="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon name="selected" />} unCheckedChildren={<Icon name="support" />} defaultChecked />
        </Space>
      </ExampleStory>;
  }
}`,...m.parameters?.docs?.source}}};const R=["Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"];export{a as Checked,s as CustomCopy,n as Disabled,c as ExampleDisabled,l as ExampleLoading,i as ExampleSizes,m as ExampleTextAndIcon,d as Loading,o as Small,R as __namedExportsOrder,N as default};
