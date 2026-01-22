import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as i,u as l,Z as F,a as n,J as B,C as G,T as P}from"./UnauthorizedTooltip-DInzTCbR.js";import{E as c}from"./ExampleStory-D9NFb6Ax.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{r as p}from"./iframe-DPsSDxI5.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";import"./preload-helper-PPVm8Dsz.js";const M={title:"Components/Layout/Flex",component:t=>e.jsx(e.Fragment,{children:e.jsx(i,{...t,style:{width:200,height:108,borderRadius:6,border:"1px solid #40a9ff"},children:Array.from({length:4}).map((r,a)=>e.jsx("div",{style:{width:20,height:54,backgroundColor:a%2?"#1677ff":"#1677ffbf"}},a))})}),args:{vertical:!1,wrap:"nowrap",justify:"stretch",align:"normal",flex:"0 1 auto",gap:"middle",component:"div"},argTypes:{wrap:{control:"select",options:["nowrap","wrap","wrap-reverse","initial","revert","revert-layer","unset"]},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly","stretch"]},align:{control:"select",options:["normal","stretch","center","flex-start","flex-end","self-start","self-end","baseline"]}}},d={},m={args:{vertical:!0}},u={args:{justify:"flex-start"}},g={args:{justify:"center"}},y={args:{justify:"flex-end"}},x={args:{align:"flex-start"}},h={args:{align:"center"}},f={args:{align:"flex-end"}},S={args:{gap:"large"}},j={render:()=>{const t={width:"25%",height:54},[r,a]=p.useState("horizontal");return e.jsx(c,{title:"The basic usage.",children:e.jsxs(i,{gap:"middle",vertical:!0,children:[e.jsxs(l.Group,{value:r,onChange:o=>{a(o.target.value)},children:[e.jsx(l,{value:"horizontal",children:"horizontal"}),e.jsx(l,{value:"vertical",children:"vertical"})]}),e.jsx(i,{vertical:r==="vertical",children:Array.from({length:4}).map((o,s)=>e.jsx("div",{style:{...t,backgroundColor:s%2?"#1677ff":"#1677ffbf"}},s))})]})})}},v={render:()=>{const t={width:"100%",height:120,borderRadius:6,border:"1px solid #40a9ff"},r=["flex-start","center","flex-end","space-between","space-around","space-evenly"],a=["flex-start","center","flex-end"],[o,s]=p.useState(r[0]),[C,E]=p.useState(a[0]);return e.jsx(c,{title:"Set align.",children:e.jsxs(i,{gap:"middle",align:"start",vertical:!0,children:[e.jsx("p",{children:"Select justify :"}),e.jsx(F,{options:r,onChange:s}),e.jsx("p",{children:"Select align :"}),e.jsx(F,{options:a,onChange:E}),e.jsxs(i,{style:t,justify:o,align:C,children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"})]})]})})}},b={render:()=>{const[t,r]=p.useState("small"),[a,o]=p.useState(0);return e.jsx(c,{title:"Set the gap between elements, which has three preset sizes: small, middle, large, You can also customize the gap size.",children:e.jsxs(i,{gap:"middle",vertical:!0,children:[e.jsx(l.Group,{value:t,onChange:s=>{r(s.target.value)},children:["small","middle","large","customize"].map(s=>e.jsx(l,{value:s,children:s},s))}),t==="customize"&&e.jsx(B,{value:a,onChange:o}),e.jsxs(i,{gap:t!=="customize"?t:a,children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{children:"Default"}),e.jsx(n,{type:"dashed",children:"Dashed"}),e.jsx(n,{type:"link",children:"Link"})]})]})})}},z={render:()=>e.jsx(c,{title:"Auto wrap line.",children:e.jsx(i,{wrap:"wrap",gap:"small",children:Array.from({length:24},(t,r)=>e.jsx(n,{type:"primary",children:"Button"},r))})})},w={render:()=>{const t={width:620},r={display:"block",width:273};return e.jsx(c,{title:"Nesting can achieve more complex layouts.",children:e.jsx(G,{hoverable:!0,style:t,styles:{body:{padding:0,overflow:"hidden"}},children:e.jsxs(i,{justify:"space-between",children:[e.jsx("img",{alt:"avatar",style:r}),e.jsxs(i,{vertical:!0,align:"flex-end",justify:"space-between",style:{padding:32},children:[e.jsx(P.Title,{level:3,children:"“antd is an enterprise-class UI design language and React UI library.”"}),e.jsx(n,{type:"primary",href:"https://ant.design",target:"_blank",children:"Get Started"})]})]})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'flex-start'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'center'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'flex-end'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'flex-start'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'flex-end'
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 'large'
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const baseStyle: React.CSSProperties = {
      width: '25%',
      height: 54
    };
    const [value, setValue] = useState<string>('horizontal');
    return <ExampleStory title="The basic usage.">
        <Flex gap="middle" vertical>
          <Radio.Group value={value} onChange={e => {
          // TODO added a todo in Radio component to see if we can better type this
          setValue(e.target.value as string);
        }}>
            <Radio value="horizontal">horizontal</Radio>
            <Radio value="vertical">vertical</Radio>
          </Radio.Group>
          <Flex vertical={value === 'vertical'}>
            {Array.from({
            length: 4
          }).map((_, i) => <div key={i} style={{
            ...baseStyle,
            backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf'
          }} />)}
          </Flex>
        </Flex>
      </ExampleStory>;
  }
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const boxStyle: React.CSSProperties = {
      width: '100%',
      height: 120,
      borderRadius: 6,
      border: '1px solid #40a9ff'
    };
    const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    const alignOptions = ['flex-start', 'center', 'flex-end'];
    const [justify, setJustify] = useState<IFlexProps['justify']>(justifyOptions[0]);
    const [alignItems, setAlignItems] = useState<IFlexProps['align']>(alignOptions[0]);
    return <ExampleStory title="Set align.">
        <Flex gap="middle" align="start" vertical>
          <p>Select justify :</p>
          <Segmented options={justifyOptions} onChange={setJustify as SegmentedProps['onChange']} />
          <p>Select align :</p>
          <Segmented options={alignOptions} onChange={setAlignItems as SegmentedProps['onChange']} />
          <Flex style={boxStyle} justify={justify} align={alignItems}>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
          </Flex>
        </Flex>
      </ExampleStory>;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    type SizeType = IConfigProviderProps['componentSize'];
    const [gapSize, setGapSize] = useState<SizeType | 'customize'>('small');
    const [customGapSize, setCustomGapSize] = useState<number>(0);
    return <ExampleStory title="Set the gap between elements, which has three preset sizes: small, middle, large, You can also customize the gap size.">
        <Flex gap="middle" vertical>
          <Radio.Group value={gapSize} onChange={e => {
          setGapSize(e.target.value as SizeType | 'customize');
        }}>
            {['small', 'middle', 'large', 'customize'].map(size => <Radio key={size} value={size}>
                {size}
              </Radio>)}
          </Radio.Group>
          {gapSize === 'customize' && <Slider value={customGapSize} onChange={setCustomGapSize} />}
          <Flex gap={gapSize !== 'customize' ? gapSize : customGapSize}>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
          </Flex>
        </Flex>
      </ExampleStory>;
  }
}`,...b.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Auto wrap line.">
        <Flex wrap="wrap" gap="small">
          {Array.from({
          length: 24
        }, (_, i) => <Button key={i} type="primary">
              Button
            </Button>)}
        </Flex>
      </ExampleStory>;
  }
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cardStyle: React.CSSProperties = {
      width: 620
    };
    const imgStyle: React.CSSProperties = {
      display: 'block',
      width: 273
    };
    return <ExampleStory title="Nesting can achieve more complex layouts.">
        <Card hoverable style={cardStyle} styles={{
        body: {
          padding: 0,
          overflow: 'hidden'
        }
      }}>
          <Flex justify="space-between">
            <img alt="avatar" style={imgStyle} />
            <Flex vertical align="flex-end" justify="space-between" style={{
            padding: 32
          }}>
              <Typography.Title level={3}>
                “antd is an enterprise-class UI design language and React UI library.”
              </Typography.Title>
              <Button type="primary" href="https://ant.design" target="_blank">
                Get Started
              </Button>
            </Flex>
          </Flex>
        </Card>
      </ExampleStory>;
  }
}`,...w.parameters?.docs?.source}}};const Q=["Primary","VerticalFlex","JustifyFlexStart","JustifyCenter","JustifyFlexEnd","AlignFlexStart","AlignCenter","AlignFlexEnd","LargeGap","ExampleBasic","ExampleAlign","ExampleGap","ExampleWrap","ExampleNesting"];export{h as AlignCenter,f as AlignFlexEnd,x as AlignFlexStart,v as ExampleAlign,j as ExampleBasic,b as ExampleGap,w as ExampleNesting,z as ExampleWrap,g as JustifyCenter,y as JustifyFlexEnd,u as JustifyFlexStart,S as LargeGap,d as Primary,m as VerticalFlex,Q as __namedExportsOrder,M as default};
