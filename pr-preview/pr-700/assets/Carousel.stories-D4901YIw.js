var xe=Object.defineProperty,ye=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var B=(s,n,a)=>n in s?xe(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a,t=(s,n)=>{for(var a in n||(n={}))ve.call(n,a)&&B(s,a,n[a]);if(P)for(var a of P(n))fe.call(n,a)&&B(s,a,n[a]);return s},r=(s,n)=>ye(s,ge(n));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{an as l,y as i}from"./NavigationItemsService-DyhLlsD-.js";import{E}from"./ExampleStory-Dda1Ffrl.js";import{r as je}from"./index-3OP4wdng.js";import"./ErrorStateIcon-CFRZUseq.js";import"./SuccessStateIcon-Beh0MlUq.js";import"./WarningStateIcon-BsxCnJCe.js";import"./_baseClone-DwBCp-Ss.js";import"./LightTheme-vAO8T2BA.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BCoF0-gZ.js";import"./WarningFilled-D6ijQqgK.js";const o={margin:0,height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},Ne={title:"Components/Not Prod Ready/Carousel",component:s=>e.jsxs(l,r(t({},s),{style:{maxWidth:"800px"},children:[e.jsx("div",{children:e.jsx("h3",{style:o,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"4"})})]})),args:{autoplay:!1,autoplaySpeed:3e3,dotPosition:"bottom",dots:!0,fade:!1,infinite:!0,speed:500,easing:"linear",effect:"scrollx",waitForAnimate:!1},argTypes:{effect:{control:"select",options:["scrollx","fade"]}}},d={},c={args:{autoplay:!0}},p={args:{autoplaySpeed:750,autoplay:!0}},h={args:{dotPosition:"top"}},u={args:{dots:!1}},m={args:{fade:!0,effect:"fade"}},x={args:{easing:"linear"}},y={args:{infinite:!1}},g={args:{speed:1e3}},v={args:{waitForAnimate:!0}},f={render:()=>{const s=n=>{console.log(n)};return e.jsx(E,{title:"Basic Usage",children:e.jsxs(l,{afterChange:s,children:[e.jsx("div",{children:e.jsx("h3",{style:o,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"4"})})]})})}},j={render:()=>{const[s,n]=je.useState("bottom"),a=({target:{value:me}})=>{n(me)};return e.jsxs(E,{title:"There are 4 position options available.",children:[e.jsxs(i.Group,{onChange:a,value:s,style:{marginBottom:8},children:[e.jsx(i.Button,{value:"bottom",children:"Bottom"}),e.jsx(i.Button,{value:"top",children:"Top"}),e.jsx(i.Button,{value:"left",children:"Left"}),e.jsx(i.Button,{value:"right",children:"Right"})]}),e.jsxs(l,{dotPosition:s,style:{maxHeight:"140px"},children:[e.jsx("div",{children:e.jsx("h3",{style:o,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"4"})})]})]})}},S={render:()=>e.jsx(E,{title:"Timing of scrolling to the next card/picture.",children:e.jsxs(l,{autoplay:!0,children:[e.jsx("div",{children:e.jsx("h3",{style:o,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"4"})})]})})},C={render:()=>e.jsxs(E,{title:"Slides use fade for transition.",children:[e.jsxs(l,{effect:"fade",children:[e.jsx("div",{children:e.jsx("h3",{style:o,children:"1"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"2"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"3"})}),e.jsx("div",{children:e.jsx("h3",{style:o,children:"4"})})]})," "]})};var R,W,A;d.parameters=r(t({},d.parameters),{docs:r(t({},(R=d.parameters)==null?void 0:R.docs),{source:t({originalSource:"{}"},(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source)})});var D,b,F;c.parameters=r(t({},c.parameters),{docs:r(t({},(D=c.parameters)==null?void 0:D.docs),{source:t({originalSource:`{
  args: {
    autoplay: true
  }
}`},(F=(b=c.parameters)==null?void 0:b.docs)==null?void 0:F.source)})});var T,L,I;p.parameters=r(t({},p.parameters),{docs:r(t({},(T=p.parameters)==null?void 0:T.docs),{source:t({originalSource:`{
  args: {
    autoplaySpeed: 750,
    autoplay: true
  }
}`},(I=(L=p.parameters)==null?void 0:L.docs)==null?void 0:I.source)})});var w,G,H;h.parameters=r(t({},h.parameters),{docs:r(t({},(w=h.parameters)==null?void 0:w.docs),{source:t({originalSource:`{
  args: {
    dotPosition: 'top'
  }
}`},(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var U,_,k;u.parameters=r(t({},u.parameters),{docs:r(t({},(U=u.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    dots: false
  }
}`},(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source)})});var N,O,q;m.parameters=r(t({},m.parameters),{docs:r(t({},(N=m.parameters)==null?void 0:N.docs),{source:t({originalSource:`{
  args: {
    fade: true,
    effect: 'fade'
  }
}`},(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source)})});var z,J,K;x.parameters=r(t({},x.parameters),{docs:r(t({},(z=x.parameters)==null?void 0:z.docs),{source:t({originalSource:`{
  args: {
    easing: 'linear'
  }
}`},(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var M,Q,V;y.parameters=r(t({},y.parameters),{docs:r(t({},(M=y.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  args: {
    infinite: false
  }
}`},(V=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});var X,Y,Z;g.parameters=r(t({},g.parameters),{docs:r(t({},(X=g.parameters)==null?void 0:X.docs),{source:t({originalSource:`{
  args: {
    speed: 1000
  }
}`},(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var $,ee,te;v.parameters=r(t({},v.parameters),{docs:r(t({},($=v.parameters)==null?void 0:$.docs),{source:t({originalSource:`{
  args: {
    waitForAnimate: true
  }
}`},(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var re,oe,se;f.parameters=r(t({},f.parameters),{docs:r(t({},(re=f.parameters)==null?void 0:re.docs),{source:t({originalSource:`{
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
}`},(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source)})});var ne,ae,ie;j.parameters=r(t({},j.parameters),{docs:r(t({},(ne=j.parameters)==null?void 0:ne.docs),{source:t({originalSource:`{
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
}`},(ie=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ie.source)})});var le,de,ce;S.parameters=r(t({},S.parameters),{docs:r(t({},(le=S.parameters)==null?void 0:le.docs),{source:t({originalSource:`{
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
}`},(ce=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ce.source)})});var pe,he,ue;C.parameters=r(t({},C.parameters),{docs:r(t({},(pe=C.parameters)==null?void 0:pe.docs),{source:t({originalSource:`{
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
}`},(ue=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ue.source)})});const Oe=["Primary","WithAutoplay","CustomAutoplaySpeed","CustomDotPosition","WithoutDots","WithFadeEffect","WithLinearEasing","WithoutInfiniteLoop","CustomSpeed","WaitForAnimate","ExampleBasic","ExamplePosition","ExampleAutoScroll","ExampleFadeIn"];export{p as CustomAutoplaySpeed,h as CustomDotPosition,g as CustomSpeed,S as ExampleAutoScroll,f as ExampleBasic,C as ExampleFadeIn,j as ExamplePosition,d as Primary,v as WaitForAnimate,c as WithAutoplay,m as WithFadeEffect,x as WithLinearEasing,u as WithoutDots,y as WithoutInfiniteLoop,Oe as __namedExportsOrder,Ne as default};
