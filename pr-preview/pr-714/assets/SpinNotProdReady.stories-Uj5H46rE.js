import{as as s,j as e,I as b,F as y,y as j,a3 as E,ag as L,a0 as z,i as C}from"./iframe-_QPLlW2H.js";import{E as r}from"./ExampleStory-z2QCavMP.js";import"./preload-helper-PPVm8Dsz.js";const N={title:"Components/Not Prod Ready/Feedback/Spin",component:s,args:{delay:void 0,indicator:void 0,size:"default",spinning:!0,tip:void 0,wrapperClassName:void 0,fullscreen:!1}},t={},i={args:{size:"small"}},o={args:{size:"large"}},l={args:{delay:500}},d={args:{indicator:e.jsx(b,{name:"mpLogo"})}},c={args:{spinning:!1}},p={args:{tip:"Loading...",children:e.jsx(e.Fragment,{})}},m={args:{wrapperClassName:"custom-wrapper"}},g={args:{fullscreen:!0}},u={render:()=>e.jsx(r,{title:"A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.",children:e.jsxs(y,{align:"center",gap:"middle",children:[e.jsx(s,{size:"small"}),e.jsx(s,{}),e.jsx(s,{size:"large"})]})})},S={render:()=>{const[a,n]=j.useState(!1);return e.jsxs(r,{title:"Embedding content into Spin will set it into loading state.",children:[e.jsx(s,{spinning:a,children:e.jsx(E,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),e.jsxs("div",{style:{marginTop:L},children:["Loading state：",e.jsx(z,{checked:a,onChange:n})]})]})}},x={render:()=>e.jsx(r,{title:"Adds subtext",children:e.jsxs(y,{gap:50,vertical:!0,children:[e.jsxs(y,{gap:100,children:[e.jsx(s,{tip:"Loading",size:"small",children:e.jsx("div",{className:"content"})}),e.jsx(s,{tip:"Loading",children:e.jsx("div",{className:"content"})}),e.jsx(s,{tip:"Loading",size:"large",children:e.jsx("div",{className:"content"})})]}),e.jsx(s,{tip:"Loading...",children:e.jsx(E,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})})},h={render:()=>{const[a,n]=j.useState(!1);return e.jsxs(r,{title:"Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.",children:[e.jsx(s,{spinning:a,delay:500,children:e.jsx(E,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),e.jsxs("div",{style:{marginTop:L},children:["Loading state：",e.jsx(z,{checked:a,onChange:n})]})]})}},f={render:()=>{const[a,n]=j.useState(!1),v=()=>{n(!0),setTimeout(()=>{n(!1)},3e3)};return e.jsxs(r,{title:"The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.",children:[e.jsx(C,{onClick:v,children:"Show fullscreen for 3s"}),e.jsx(s,{spinning:a,fullscreen:!0})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: false
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'Loading...',
    children: <></>
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const T=["Primary","SmallSize","LargeSize","WithCustomDelay","WithCustomIndicator","SpinningDisabled","WithCustomTip","WithWrapperClassName","FullscreenMode","ExampleSize","ExampleEmbedded","ExampleCustomizedDescription","ExampleDelay","ExampleFullscreen"];export{x as ExampleCustomizedDescription,h as ExampleDelay,S as ExampleEmbedded,f as ExampleFullscreen,u as ExampleSize,g as FullscreenMode,o as LargeSize,t as Primary,i as SmallSize,c as SpinningDisabled,l as WithCustomDelay,d as WithCustomIndicator,p as WithCustomTip,m as WithWrapperClassName,T as __namedExportsOrder,N as default};
