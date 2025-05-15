var je=Object.defineProperty,ve=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var B=(s,a,n)=>a in s?je(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,e=(s,a)=>{for(var n in a||(a={}))ze.call(a,n)&&B(s,n,a[n]);if(E)for(var n of E(a))we.call(a,n)&&B(s,n,a[n]);return s},r=(s,a)=>ve(s,be(a));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{F as l,R as p,p as R,g as o,ad as Fe,e as Ce,f as Ee}from"./NavigationItemsService-DgZIzBO3.js";import{E as m}from"./ExampleStory-Crlm849B.js";import"./_baseClone-DBzvlRjn.js";import{r as d}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const Le={title:"Components/Layout/Flex",component:s=>t.jsx(t.Fragment,{children:t.jsx(l,r(e({},s),{style:{width:200,height:108,borderRadius:6,border:"1px solid #40a9ff"},children:Array.from({length:4}).map((a,n)=>t.jsx("div",{style:{width:20,height:54,backgroundColor:n%2?"#1677ff":"#1677ffbf"}},n))}))}),args:{vertical:!1,wrap:"nowrap",justify:"stretch",align:"normal",flex:"0 1 auto",gap:"middle",component:"div"},argTypes:{wrap:{control:"select",options:["nowrap","wrap","wrap-reverse","initial","revert","revert-layer","unset"]},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly","stretch"]},align:{control:"select",options:["normal","stretch","center","flex-start","flex-end","self-start","self-end","baseline"]}}},u={},g={args:{vertical:!0}},y={args:{justify:"flex-start"}},x={args:{justify:"center"}},h={args:{justify:"flex-end"}},f={args:{align:"flex-start"}},S={args:{align:"center"}},j={args:{align:"flex-end"}},v={args:{gap:"large"}},b={render:()=>{const s={width:"25%",height:54},[a,n]=d.useState("horizontal");return t.jsx(m,{title:"The basic usage.",children:t.jsxs(l,{gap:"middle",vertical:!0,children:[t.jsxs(p.Group,{value:a,onChange:c=>{n(c.target.value)},children:[t.jsx(p,{value:"horizontal",children:"horizontal"}),t.jsx(p,{value:"vertical",children:"vertical"})]}),t.jsx(l,{vertical:a==="vertical",children:Array.from({length:4}).map((c,i)=>t.jsx("div",{style:r(e({},s),{backgroundColor:i%2?"#1677ff":"#1677ffbf"})},i))})]})})}},z={render:()=>{const s={width:"100%",height:120,borderRadius:6,border:"1px solid #40a9ff"},a=["flex-start","center","flex-end","space-between","space-around","space-evenly"],n=["flex-start","center","flex-end"],[c,i]=d.useState(a[0]),[fe,Se]=d.useState(n[0]);return t.jsx(m,{title:"Set align.",children:t.jsxs(l,{gap:"middle",align:"start",vertical:!0,children:[t.jsx("p",{children:"Select justify :"}),t.jsx(R,{options:a,onChange:i}),t.jsx("p",{children:"Select align :"}),t.jsx(R,{options:n,onChange:Se}),t.jsxs(l,{style:s,justify:c,align:fe,children:[t.jsx(o,{type:"primary",children:"Primary"}),t.jsx(o,{type:"primary",children:"Primary"}),t.jsx(o,{type:"primary",children:"Primary"}),t.jsx(o,{type:"primary",children:"Primary"})]})]})})}},w={render:()=>{const[s,a]=d.useState("small"),[n,c]=d.useState(0);return t.jsx(m,{title:"Set the gap between elements, which has three preset sizes: small, middle, large, You can also customize the gap size.",children:t.jsxs(l,{gap:"middle",vertical:!0,children:[t.jsx(p.Group,{value:s,onChange:i=>{a(i.target.value)},children:["small","middle","large","customize"].map(i=>t.jsx(p,{value:i,children:i},i))}),s==="customize"&&t.jsx(Fe,{value:n,onChange:c}),t.jsxs(l,{gap:s!=="customize"?s:n,children:[t.jsx(o,{type:"primary",children:"Primary"}),t.jsx(o,{children:"Default"}),t.jsx(o,{type:"dashed",children:"Dashed"}),t.jsx(o,{type:"link",children:"Link"})]})]})})}},F={render:()=>t.jsx(m,{title:"Auto wrap line.",children:t.jsx(l,{wrap:"wrap",gap:"small",children:Array.from({length:24},(s,a)=>t.jsx(o,{type:"primary",children:"Button"},a))})})},C={render:()=>{const s={width:620},a={display:"block",width:273};return t.jsx(m,{title:"Nesting can achieve more complex layouts.",children:t.jsx(Ce,{hoverable:!0,style:s,styles:{body:{padding:0,overflow:"hidden"}},children:t.jsxs(l,{justify:"space-between",children:[t.jsx("img",{alt:"avatar",style:a}),t.jsxs(l,{vertical:!0,align:"flex-end",justify:"space-between",style:{padding:32},children:[t.jsx(Ee.Title,{level:3,children:"“antd is an enterprise-class UI design language and React UI library.”"}),t.jsx(o,{type:"primary",href:"https://ant.design",target:"_blank",children:"Get Started"})]})]})})})}};var G,P,A;u.parameters=r(e({},u.parameters),{docs:r(e({},(G=u.parameters)==null?void 0:G.docs),{source:e({originalSource:"{}"},(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source)})});var k,I,T;g.parameters=r(e({},g.parameters),{docs:r(e({},(k=g.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    vertical: true
  }
}`},(T=(I=g.parameters)==null?void 0:I.docs)==null?void 0:T.source)})});var O,J,_;y.parameters=r(e({},y.parameters),{docs:r(e({},(O=y.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    justify: 'flex-start'
  }
}`},(_=(J=y.parameters)==null?void 0:J.docs)==null?void 0:_.source)})});var D,L,V;x.parameters=r(e({},x.parameters),{docs:r(e({},(D=x.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    justify: 'center'
  }
}`},(V=(L=x.parameters)==null?void 0:L.docs)==null?void 0:V.source)})});var N,U,W;h.parameters=r(e({},h.parameters),{docs:r(e({},(N=h.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    justify: 'flex-end'
  }
}`},(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source)})});var Y,q,H;f.parameters=r(e({},f.parameters),{docs:r(e({},(Y=f.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    align: 'flex-start'
  }
}`},(H=(q=f.parameters)==null?void 0:q.docs)==null?void 0:H.source)})});var K,M,Q;S.parameters=r(e({},S.parameters),{docs:r(e({},(K=S.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  args: {
    align: 'center'
  }
}`},(Q=(M=S.parameters)==null?void 0:M.docs)==null?void 0:Q.source)})});var X,Z,$;j.parameters=r(e({},j.parameters),{docs:r(e({},(X=j.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    align: 'flex-end'
  }
}`},($=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ee,te,re;v.parameters=r(e({},v.parameters),{docs:r(e({},(ee=v.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  args: {
    gap: 'large'
  }
}`},(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source)})});var ae,se,ne;b.parameters=r(e({},b.parameters),{docs:r(e({},(ae=b.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
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
}`},(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source)})});var ie,oe,le;z.parameters=r(e({},z.parameters),{docs:r(e({},(ie=z.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
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
}`},(le=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:le.source)})});var ce,pe,de;w.parameters=r(e({},w.parameters),{docs:r(e({},(ce=w.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
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
}`},(de=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:de.source)})});var me,ue,ge;F.parameters=r(e({},F.parameters),{docs:r(e({},(me=F.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(ge=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ge.source)})});var ye,xe,he;C.parameters=r(e({},C.parameters),{docs:r(e({},(ye=C.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
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
}`},(he=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:he.source)})});const Ve=["Primary","VerticalFlex","JustifyFlexStart","JustifyCenter","JustifyFlexEnd","AlignFlexStart","AlignCenter","AlignFlexEnd","LargeGap","ExampleBasic","ExampleAlign","ExampleGap","ExampleWrap","ExampleNesting"];export{S as AlignCenter,j as AlignFlexEnd,f as AlignFlexStart,z as ExampleAlign,b as ExampleBasic,w as ExampleGap,C as ExampleNesting,F as ExampleWrap,x as JustifyCenter,h as JustifyFlexEnd,y as JustifyFlexStart,v as LargeGap,u as Primary,g as VerticalFlex,Ve as __namedExportsOrder,Le as default};
