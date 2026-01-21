import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a3 as s,I as b,F as y,K as j,G as L,c as w}from"./UnauthorizedTooltip-C-uexwNG.js";import{E as n}from"./ExampleStory-B49bSB_-.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{w as z}from"./style-BLGxefMg.js";import{r as E}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const J={title:"Components/Not Prod Ready/Feedback/Spin",component:s,args:{delay:void 0,indicator:void 0,size:"default",spinning:!0,tip:void 0,wrapperClassName:void 0,fullscreen:!1}},t={},i={args:{size:"small"}},o={args:{size:"large"}},l={args:{delay:500}},d={args:{indicator:e.jsx(b,{name:"mpLogo"})}},p={args:{spinning:!1}},c={args:{tip:"Loading...",children:e.jsx(e.Fragment,{})}},m={args:{wrapperClassName:"custom-wrapper"}},g={args:{fullscreen:!0}},u={render:()=>e.jsx(n,{title:"A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.",children:e.jsxs(y,{align:"center",gap:"middle",children:[e.jsx(s,{size:"small"}),e.jsx(s,{}),e.jsx(s,{size:"large"})]})})},S={render:()=>{const[r,a]=E.useState(!1);return e.jsxs(n,{title:"Embedding content into Spin will set it into loading state.",children:[e.jsx(s,{spinning:r,children:e.jsx(j,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),e.jsxs("div",{style:{marginTop:z},children:["Loading state：",e.jsx(L,{checked:r,onChange:a})]})]})}},x={render:()=>e.jsx(n,{title:"Adds subtext",children:e.jsxs(y,{gap:50,vertical:!0,children:[e.jsxs(y,{gap:100,children:[e.jsx(s,{tip:"Loading",size:"small",children:e.jsx("div",{className:"content"})}),e.jsx(s,{tip:"Loading",children:e.jsx("div",{className:"content"})}),e.jsx(s,{tip:"Loading",size:"large",children:e.jsx("div",{className:"content"})})]}),e.jsx(s,{tip:"Loading...",children:e.jsx(j,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})})},h={render:()=>{const[r,a]=E.useState(!1);return e.jsxs(n,{title:"Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.",children:[e.jsx(s,{spinning:r,delay:500,children:e.jsx(j,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),e.jsxs("div",{style:{marginTop:z},children:["Loading state：",e.jsx(L,{checked:r,onChange:a})]})]})}},f={render:()=>{const[r,a]=E.useState(!1),v=()=>{a(!0),setTimeout(()=>{a(!1)},3e3)};return e.jsxs(n,{title:"The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.",children:[e.jsx(w,{onClick:v,children:"Show fullscreen for 3s"}),e.jsx(s,{spinning:r,fullscreen:!0})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 500
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: <Icon name="mpLogo" />
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: false
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'Loading...',
    children: <></>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    wrapperClassName: 'custom-wrapper'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fullscreen: true
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.">
        <Flex align="center" gap="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Flex>
      </ExampleStory>;
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState<boolean>(false);
    return <ExampleStory title="Embedding content into Spin will set it into loading state.">
        <Spin spinning={loading}>
          <Alert type="info" message="Alert message title" description="Further details about the context of this alert." />
        </Spin>
        <div style={{
        marginTop: Margin
      }}>
          Loading state：
          <Switch checked={loading} onChange={setLoading} />
        </div>
      </ExampleStory>;
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Adds subtext">
        <Flex gap={50} vertical>
          <Flex gap={100}>
            <Spin tip="Loading" size="small">
              <div className="content" />
            </Spin>
            <Spin tip="Loading">
              <div className="content" />
            </Spin>
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          </Flex>
          <Spin tip="Loading...">
            <Alert message="Alert message title" description="Further details about the context of this alert." type="info" />
          </Spin>
        </Flex>
      </ExampleStory>;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState<boolean>(false);
    return <ExampleStory title="Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.">
        <Spin spinning={loading} delay={500}>
          <Alert type="info" message="Alert message title" description="Further details about the context of this alert." />
        </Spin>
        <div style={{
        marginTop: Margin
      }}>
          Loading state：
          <Switch checked={loading} onChange={setLoading} />
        </div>
      </ExampleStory>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [spinning, setSpinning] = useState<boolean>(false);
    const showLoader = () => {
      setSpinning(true);
      setTimeout(() => {
        setSpinning(false);
      }, 3000);
    };
    return <ExampleStory title="The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.">
        <Button onClick={showLoader}>Show fullscreen for 3s</Button>
        <Spin spinning={spinning} fullscreen />
      </ExampleStory>;
  }
}`,...f.parameters?.docs?.source}}};const Q=["Primary","SmallSize","LargeSize","WithCustomDelay","WithCustomIndicator","SpinningDisabled","WithCustomTip","WithWrapperClassName","FullscreenMode","ExampleSize","ExampleEmbedded","ExampleCustomizedDescription","ExampleDelay","ExampleFullscreen"];export{x as ExampleCustomizedDescription,h as ExampleDelay,S as ExampleEmbedded,f as ExampleFullscreen,u as ExampleSize,g as FullscreenMode,o as LargeSize,t as Primary,i as SmallSize,p as SpinningDisabled,l as WithCustomDelay,d as WithCustomIndicator,c as WithCustomTip,m as WithWrapperClassName,Q as __namedExportsOrder,J as default};
