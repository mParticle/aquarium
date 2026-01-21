import{j as e}from"./jsx-runtime-u17CrQMm.js";import{aq as s,z as o}from"./UnauthorizedTooltip-C-uexwNG.js";import{E as f}from"./ExampleStory-B49bSB_-.js";import{r as E}from"./iframe-ZAwtOOsv.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const t={margin:0,height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},N={title:"Components/Not Prod Ready/Carousel",component:r=>e.jsxs(s,{...r,style:{maxWidth:"800px"},children:[e.jsx("div",{children:e.jsx("h3",{style:t,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"4"})})]}),args:{autoplay:!1,autoplaySpeed:3e3,dotPosition:"bottom",dots:!0,fade:!1,infinite:!0,speed:500,easing:"linear",effect:"scrollx",waitForAnimate:!1},argTypes:{effect:{control:"select",options:["scrollx","fade"]}}},n={},a={args:{autoplay:!0}},i={args:{autoplaySpeed:750,autoplay:!0}},l={args:{dotPosition:"top"}},d={args:{dots:!1}},c={args:{fade:!0,effect:"fade"}},p={args:{easing:"linear"}},h={args:{infinite:!1}},u={args:{speed:1e3}},m={args:{waitForAnimate:!0}},x={render:()=>{const r=j=>{console.log(j)};return e.jsx(f,{title:"Basic Usage",children:e.jsxs(s,{afterChange:r,children:[e.jsx("div",{children:e.jsx("h3",{style:t,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"4"})})]})})}},y={render:()=>{const[r,j]=E.useState("bottom"),S=({target:{value:C}})=>{j(C)};return e.jsxs(f,{title:"There are 4 position options available.",children:[e.jsxs(o.Group,{onChange:S,value:r,style:{marginBottom:8},children:[e.jsx(o.Button,{value:"bottom",children:"Bottom"}),e.jsx(o.Button,{value:"top",children:"Top"}),e.jsx(o.Button,{value:"left",children:"Left"}),e.jsx(o.Button,{value:"right",children:"Right"})]}),e.jsxs(s,{dotPosition:r,style:{maxHeight:"140px"},children:[e.jsx("div",{children:e.jsx("h3",{style:t,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"4"})})]})]})}},g={render:()=>e.jsx(f,{title:"Timing of scrolling to the next card/picture.",children:e.jsxs(s,{autoplay:!0,children:[e.jsx("div",{children:e.jsx("h3",{style:t,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"4"})})]})})},v={render:()=>e.jsxs(f,{title:"Slides use fade for transition.",children:[e.jsxs(s,{effect:"fade",children:[e.jsx("div",{children:e.jsx("h3",{style:t,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:t,children:"4"})})]})," "]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    autoplay: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    autoplaySpeed: 750,
    autoplay: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dotPosition: 'top'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dots: false
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fade: true,
    effect: 'fade'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    easing: 'linear'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    infinite: false
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 1000
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    waitForAnimate: true
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onChange = (currentSlide: number) => {
      console.log(currentSlide);
    };
    return <ExampleStory title="Basic Usage">
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </ExampleStory>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    type DotPosition = CarouselProps['dotPosition'];
    const [dotPosition, setDotPosition] = useState<DotPosition>('bottom');
    const handlePositionChange = ({
      target: {
        value
      }
    }: RadioChangeEvent) => {
      setDotPosition(value as DotPosition);
    };
    return <ExampleStory title="There are 4 position options available.">
        <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{
        marginBottom: 8
      }}>
          <Radio.Button value="bottom">Bottom</Radio.Button>
          <Radio.Button value="top">Top</Radio.Button>
          <Radio.Button value="left">Left</Radio.Button>
          <Radio.Button value="right">Right</Radio.Button>
        </Radio.Group>
        <Carousel dotPosition={dotPosition} style={{
        maxHeight: '140px'
      }}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </ExampleStory>;
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Timing of scrolling to the next card/picture.">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </ExampleStory>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Slides use fade for transition.">
        <Carousel effect="fade">
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>{' '}
      </ExampleStory>;
  }
}`,...v.parameters?.docs?.source}}};const O=["Primary","WithAutoplay","CustomAutoplaySpeed","CustomDotPosition","WithoutDots","WithFadeEffect","WithLinearEasing","WithoutInfiniteLoop","CustomSpeed","WaitForAnimate","ExampleBasic","ExamplePosition","ExampleAutoScroll","ExampleFadeIn"];export{i as CustomAutoplaySpeed,l as CustomDotPosition,u as CustomSpeed,g as ExampleAutoScroll,x as ExampleBasic,v as ExampleFadeIn,y as ExamplePosition,n as Primary,m as WaitForAnimate,a as WithAutoplay,c as WithFadeEffect,p as WithLinearEasing,d as WithoutDots,h as WithoutInfiniteLoop,O as __namedExportsOrder,N as default};
