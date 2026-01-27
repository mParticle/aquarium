import{j as e,F as i,y as c,Z as o,at as F,i as n,ac as B,h as G,T as P}from"./iframe-D7Ys59RG.js";import{E as p}from"./ExampleStory-KHWp24Wn.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Components/Layout/Flex",component:t=>e.jsx(e.Fragment,{children:e.jsx(i,{...t,style:{width:200,height:108,borderRadius:6,border:"1px solid #40a9ff"},children:Array.from({length:4}).map((r,a)=>e.jsx("div",{style:{width:20,height:54,backgroundColor:a%2?"#1677ff":"#1677ffbf"}},a))})}),args:{vertical:!1,wrap:"nowrap",justify:"stretch",align:"normal",flex:"0 1 auto",gap:"middle",component:"div"},argTypes:{wrap:{control:"select",options:["nowrap","wrap","wrap-reverse","initial","revert","revert-layer","unset"]},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly","stretch"]},align:{control:"select",options:["normal","stretch","center","flex-start","flex-end","self-start","self-end","baseline"]}}},d={},u={args:{vertical:!0}},m={args:{justify:"flex-start"}},g={args:{justify:"center"}},y={args:{justify:"flex-end"}},x={args:{align:"flex-start"}},h={args:{align:"center"}},S={args:{align:"flex-end"}},f={args:{gap:"large"}},j={render:()=>{const t={width:"25%",height:54},[r,a]=c.useState("horizontal");return e.jsx(p,{title:"The basic usage.",children:e.jsxs(i,{gap:"middle",vertical:!0,children:[e.jsxs(o.Group,{value:r,onChange:l=>{a(l.target.value)},children:[e.jsx(o,{value:"horizontal",children:"horizontal"}),e.jsx(o,{value:"vertical",children:"vertical"})]}),e.jsx(i,{vertical:r==="vertical",children:Array.from({length:4}).map((l,s)=>e.jsx("div",{style:{...t,backgroundColor:s%2?"#1677ff":"#1677ffbf"}},s))})]})})}},v={render:()=>{const t={width:"100%",height:120,borderRadius:6,border:"1px solid #40a9ff"},r=["flex-start","center","flex-end","space-between","space-around","space-evenly"],a=["flex-start","center","flex-end"],[l,s]=c.useState(r[0]),[C,E]=c.useState(a[0]);return e.jsx(p,{title:"Set align.",children:e.jsxs(i,{gap:"middle",align:"start",vertical:!0,children:[e.jsx("p",{children:"Select justify :"}),e.jsx(F,{options:r,onChange:s}),e.jsx("p",{children:"Select align :"}),e.jsx(F,{options:a,onChange:E}),e.jsxs(i,{style:t,justify:l,align:C,children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"})]})]})})}},b={render:()=>{const[t,r]=c.useState("small"),[a,l]=c.useState(0);return e.jsx(p,{title:"Set the gap between elements, which has three preset sizes: small, middle, large, You can also customize the gap size.",children:e.jsxs(i,{gap:"middle",vertical:!0,children:[e.jsx(o.Group,{value:t,onChange:s=>{r(s.target.value)},children:["small","middle","large","customize"].map(s=>e.jsx(o,{value:s,children:s},s))}),t==="customize"&&e.jsx(B,{value:a,onChange:l}),e.jsxs(i,{gap:t!=="customize"?t:a,children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{children:"Default"}),e.jsx(n,{type:"dashed",children:"Dashed"}),e.jsx(n,{type:"link",children:"Link"})]})]})})}},z={render:()=>e.jsx(p,{title:"Auto wrap line.",children:e.jsx(i,{wrap:"wrap",gap:"small",children:Array.from({length:24},(t,r)=>e.jsx(n,{type:"primary",children:"Button"},r))})})},w={render:()=>{const t={width:620},r={display:"block",width:273};return e.jsx(p,{title:"Nesting can achieve more complex layouts.",children:e.jsx(G,{hoverable:!0,style:t,styles:{body:{padding:0,overflow:"hidden"}},children:e.jsxs(i,{justify:"space-between",children:[e.jsx("img",{alt:"avatar",style:r}),e.jsxs(i,{vertical:!0,align:"flex-end",justify:"space-between",style:{padding:32},children:[e.jsx(P.Title,{level:3,children:"“antd is an enterprise-class UI design language and React UI library.”"}),e.jsx(n,{type:"primary",href:"https://ant.design",target:"_blank",children:"Get Started"})]})]})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'flex-start'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'flex-end'
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 'large'
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const I=["Primary","VerticalFlex","JustifyFlexStart","JustifyCenter","JustifyFlexEnd","AlignFlexStart","AlignCenter","AlignFlexEnd","LargeGap","ExampleBasic","ExampleAlign","ExampleGap","ExampleWrap","ExampleNesting"];export{h as AlignCenter,S as AlignFlexEnd,x as AlignFlexStart,v as ExampleAlign,j as ExampleBasic,b as ExampleGap,w as ExampleNesting,z as ExampleWrap,g as JustifyCenter,y as JustifyFlexEnd,m as JustifyFlexStart,f as LargeGap,d as Primary,u as VerticalFlex,I as __namedExportsOrder,T as default};
