import{j as e,F as i,X as z,a7 as b,K as F,i as n,al as B,h as P,T as G}from"./iframe-FEOso3HU.js";import{E as w}from"./ExampleStory-BUHYgxgY.js";const R={title:"Components/Layout/Flex",component:t=>e.jsx(e.Fragment,{children:e.jsx(i,{...t,style:{width:200,height:108,borderRadius:6,border:"1px solid #40a9ff"},children:Array.from({length:4}).map((r,a)=>e.jsx("div",{style:{width:20,height:54,backgroundColor:a%2?"#1677ff":"#1677ffbf"}},a))})}),args:{vertical:!1,wrap:"nowrap",justify:"stretch",align:"normal",flex:"0 1 auto",gap:"middle",component:"div"},argTypes:{wrap:{control:"select",options:["nowrap","wrap","wrap-reverse","initial","revert","revert-layer","unset"]},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly","stretch"]},align:{control:"select",options:["normal","stretch","center","flex-start","flex-end","self-start","self-end","baseline"]}}},o={},c={args:{vertical:!0}},p={args:{justify:"flex-start"}},d={args:{justify:"center"}},u={args:{justify:"flex-end"}},m={args:{align:"flex-start"}},g={args:{align:"center"}},y={args:{align:"flex-end"}},x={args:{gap:"large"}},h={render:()=>{const t={width:"25%",height:54},[r,a]=z.useState("horizontal");return e.jsx(w,{title:"The basic usage.",children:e.jsxs(i,{gap:"middle",vertical:!0,children:[e.jsxs(b.Group,{value:r,onChange:l=>{a(l.target.value)},children:[e.jsx(b,{value:"horizontal",children:"horizontal"}),e.jsx(b,{value:"vertical",children:"vertical"})]}),e.jsx(i,{vertical:r==="vertical",children:Array.from({length:4}).map((l,s)=>e.jsx("div",{style:{...t,backgroundColor:s%2?"#1677ff":"#1677ffbf"}},s))})]})})}},S={render:()=>{const t={width:"100%",height:120,borderRadius:6,border:"1px solid #40a9ff"},r=["flex-start","center","flex-end","space-between","space-around","space-evenly"],a=["flex-start","center","flex-end"],[l,s]=z.useState(r[0]),[C,E]=z.useState(a[0]);return e.jsx(w,{title:"Set align.",children:e.jsxs(i,{gap:"middle",align:"start",vertical:!0,children:[e.jsx("p",{children:"Select justify :"}),e.jsx(F,{options:r,onChange:s}),e.jsx("p",{children:"Select align :"}),e.jsx(F,{options:a,onChange:E}),e.jsxs(i,{style:t,justify:l,align:C,children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",children:"Primary"})]})]})})}},f={render:()=>{const[t,r]=z.useState("small"),[a,l]=z.useState(0);return e.jsx(w,{title:"Set the gap between elements, which has three preset sizes: small, middle, large, You can also customize the gap size.",children:e.jsxs(i,{gap:"middle",vertical:!0,children:[e.jsx(b.Group,{value:t,onChange:s=>{r(s.target.value)},children:["small","middle","large","customize"].map(s=>e.jsx(b,{value:s,children:s},s))}),t==="customize"&&e.jsx(B,{value:a,onChange:l}),e.jsxs(i,{gap:t!=="customize"?t:a,children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{children:"Default"}),e.jsx(n,{type:"dashed",children:"Dashed"}),e.jsx(n,{type:"link",children:"Link"})]})]})})}},j={render:()=>e.jsx(w,{title:"Auto wrap line.",children:e.jsx(i,{wrap:"wrap",gap:"small",children:Array.from({length:24},(t,r)=>e.jsx(n,{type:"primary",children:"Button"},r))})})},v={render:()=>{const t={width:620},r={display:"block",width:273};return e.jsx(w,{title:"Nesting can achieve more complex layouts.",children:e.jsx(P,{hoverable:!0,style:t,styles:{body:{padding:0,overflow:"hidden"}},children:e.jsxs(i,{justify:"space-between",children:[e.jsx("img",{alt:"avatar",style:r}),e.jsxs(i,{vertical:!0,align:"flex-end",justify:"space-between",style:{padding:32},children:[e.jsx(G.Title,{level:3,children:"“antd is an enterprise-class UI design language and React UI library.”"}),e.jsx(n,{type:"primary",href:"https://ant.design",target:"_blank",children:"Get Started"})]})]})})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'flex-start'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'center'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'flex-end'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'flex-start'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'flex-end'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 'large'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const A=["Primary","VerticalFlex","JustifyFlexStart","JustifyCenter","JustifyFlexEnd","AlignFlexStart","AlignCenter","AlignFlexEnd","LargeGap","ExampleBasic","ExampleAlign","ExampleGap","ExampleWrap","ExampleNesting"],I=Object.freeze(Object.defineProperty({__proto__:null,AlignCenter:g,AlignFlexEnd:y,AlignFlexStart:m,ExampleAlign:S,ExampleBasic:h,ExampleGap:f,ExampleNesting:v,ExampleWrap:j,JustifyCenter:d,JustifyFlexEnd:u,JustifyFlexStart:p,LargeGap:x,Primary:o,VerticalFlex:c,__namedExportsOrder:A,default:R},Symbol.toStringTag,{value:"Module"}));export{j as E,I as F,d as J,o as P,c as V,v as a};
