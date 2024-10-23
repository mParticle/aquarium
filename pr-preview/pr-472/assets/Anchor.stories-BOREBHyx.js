var ae=Object.defineProperty,ie=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var S=(a,r,i)=>r in a?ae(a,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[r]=i,t=(a,r)=>{for(var i in r||(r={}))se.call(r,i)&&S(a,i,r[i]);if(j)for(var i of j(r))ce.call(r,i)&&S(a,i,r[i]);return a},n=(a,r)=>ie(a,oe(r));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{a6 as o}from"./GlobalNavigation-DgsMOKTE.js";import{E as s}from"./ExampleStory-9o0ONgm-.js";import"./_baseClone-u1J3oOXU.js";import{r as v}from"./index-CNk6hRaE.js";import{R as b,C as c}from"./row-4dnY1EES.js";import"./LightTheme-BtoaoHMG.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-0c7aa-qo.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./_getPrototype-CAOE_2rY.js";const Ce={title:"Components/Navigation/Anchor",component:o,args:{affix:!0,bounds:5,offsetTop:0,showInkInFixed:!1,targetOffset:void 0,direction:"vertical",replace:!1,items:[{key:"1",href:"#section1",title:"Section 1",target:"_blank",children:[]},{key:"2",href:"#section2",title:"Section 2",target:"_blank",children:[]}],onClick:(a,r)=>{alert("Anchor Click")}},argTypes:{direction:{control:"select",options:["vertical","horizontal"]}}},l={},h={args:{direction:"horizontal"}},p={args:{items:[{key:"a",href:"#itemA",title:"Item A",target:"_blank",children:[]},{key:"b",href:"#itemB",title:"Item B",target:"_blank",children:[]},{key:"c",href:"#itemC",title:"Item C",target:"_blank",children:[]},{key:"d",href:"#itemD",title:"Item D",target:"_blank",children:[]}]}},d={args:{affix:!1,showInkInFixed:!0}},m={render:()=>e.jsx(s,{title:"Basic usage",children:e.jsxs(b,{children:[e.jsxs(c,{span:16,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"}})]}),e.jsx(c,{span:8,children:e.jsx(o,{items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]})})},g={render:()=>e.jsxs(s,{title:"Horizontally aligned anchors.",children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx(o,{direction:"horizontal",items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})}),e.jsxs("div",{children:[e.jsx("div",{id:"part-1",style:{width:"100vw",height:"100vh",textAlign:"center",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{width:"100vw",height:"100vh",textAlign:"center",background:"rgba(0,0,255,0.02)"}}),e.jsx("div",{id:"part-3",style:{width:"100vw",height:"100vh",textAlign:"center",background:"#fffbe9"}})]})]})},f={render:()=>e.jsx(s,{title:"Do not change state when page is scrolling.",children:e.jsx(o,{affix:!1,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})},k={render:()=>{const a=(r,i)=>{r.preventDefault(),console.log(i)};return e.jsx(s,{title:"Customize the onClick event.",children:e.jsx(o,{affix:!1,onClick:a,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})}},y={render:()=>{const a=v.useRef(null),[r,i]=v.useState();return v.useEffect(()=>{var P;i((P=a.current)==null?void 0:P.clientHeight)},[]),e.jsx(s,{title:"Anchor target scroll to screen center.",children:e.jsxs("div",{children:[e.jsxs(b,{children:[e.jsxs(c,{span:18,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)",marginTop:"30vh"},children:"Part 1"}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"},children:"Part 2"}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"},children:"Part 3"})]}),e.jsx(c,{span:6,children:e.jsx(o,{targetOffset:r,items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]}),e.jsx("div",{style:{height:"30vh",background:"rgba(0,0,0,0.15)",position:"fixed",top:0,left:0,width:"75%",color:"#000"},ref:a,children:e.jsx("div",{children:"Fixed Top Block"})})]})})}},u={render:()=>{const a=r=>{console.log("Anchor:OnChange",r)};return e.jsx(s,{title:"Listening for anchor link change.",children:e.jsx(o,{affix:!1,onChange:a,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})}},x={render:()=>e.jsx(s,{title:"Replace path in browser history, so back button returns to previous page instead of previous anchor item.",children:e.jsxs(b,{children:[e.jsxs(c,{span:16,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"}})]}),e.jsx(c,{span:8,children:e.jsx(o,{replace:!0,items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]})})};var C,A,E;l.parameters=n(t({},l.parameters),{docs:n(t({},(C=l.parameters)==null?void 0:C.docs),{source:t({originalSource:"{}"},(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source)})});var w,I,R;h.parameters=n(t({},h.parameters),{docs:n(t({},(w=h.parameters)==null?void 0:w.docs),{source:t({originalSource:`{
  args: {
    direction: 'horizontal'
  }
}`},(R=(I=h.parameters)==null?void 0:I.docs)==null?void 0:R.source)})});var B,O,z;p.parameters=n(t({},p.parameters),{docs:n(t({},(B=p.parameters)==null?void 0:B.docs),{source:t({originalSource:`{
  args: {
    items: [{
      key: 'a',
      href: '#itemA',
      title: 'Item A',
      target: '_blank',
      children: []
    }, {
      key: 'b',
      href: '#itemB',
      title: 'Item B',
      target: '_blank',
      children: []
    }, {
      key: 'c',
      href: '#itemC',
      title: 'Item C',
      target: '_blank',
      children: []
    }, {
      key: 'd',
      href: '#itemD',
      title: 'Item D',
      target: '_blank',
      children: []
    }]
  }
}`},(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source)})});var H,L,_;d.parameters=n(t({},d.parameters),{docs:n(t({},(H=d.parameters)==null?void 0:H.docs),{source:t({originalSource:`{
  args: {
    affix: false,
    showInkInFixed: true
  }
}`},(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source)})});var D,T,F;m.parameters=n(t({},m.parameters),{docs:n(t({},(D=m.parameters)==null?void 0:D.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Basic usage">
        <Row>
          <Col span={16}>
            <div id="part-1" style={{
            height: '100vh',
            background: 'rgba(255,0,0,0.02)'
          }} />
            <div id="part-2" style={{
            height: '100vh',
            background: 'rgba(0,255,0,0.02)'
          }} />
            <div id="part-3" style={{
            height: '100vh',
            background: 'rgba(0,0,255,0.02)'
          }} />
          </Col>
          <Col span={8}>
            <Anchor items={[{
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1'
          }, {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2'
          }, {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3'
          }]} />
          </Col>
        </Row>
      </ExampleStory>;
  }
}`},(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source)})});var M,N,W;g.parameters=n(t({},g.parameters),{docs:n(t({},(M=g.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Horizontally aligned anchors.">
        <div style={{
        padding: '20px'
      }}>
          <Anchor direction="horizontal" items={[{
          key: 'part-1',
          href: '#part-1',
          title: 'Part 1'
        }, {
          key: 'part-2',
          href: '#part-2',
          title: 'Part 2'
        }, {
          key: 'part-3',
          href: '#part-3',
          title: 'Part 3'
        }]} />
        </div>
        <div>
          <div id="part-1" style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)'
        }} />
          <div id="part-2" style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)'
        }} />
          <div id="part-3" style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#fffbe9'
        }} />
        </div>
      </ExampleStory>;
  }
}`},(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source)})});var q,G,J;f.parameters=n(t({},f.parameters),{docs:n(t({},(q=f.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Do not change state when page is scrolling.">
        <Anchor affix={false} items={[{
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo'
      }, {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo'
      }, {
        key: '3',
        href: '#api',
        title: 'API',
        children: [{
          key: '4',
          href: '#anchor-props',
          title: 'Anchor Props'
        }, {
          key: '5',
          href: '#link-props',
          title: 'Link Props'
        }]
      }]} />
      </ExampleStory>;
  }
}`},(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source)})});var K,Q,U;k.parameters=n(t({},k.parameters),{docs:n(t({},(K=k.parameters)==null?void 0:K.docs),{source:t({originalSource:`{
  render: () => {
    const handleClick = (e: React.MouseEvent<HTMLElement>, link: {
      title: React.ReactNode;
      href: string;
    }) => {
      e.preventDefault();
      console.log(link);
    };
    return <ExampleStory title="Customize the onClick event.">
        <Anchor affix={false} onClick={handleClick} items={[{
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo'
      }, {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo'
      }, {
        key: '3',
        href: '#api',
        title: 'API',
        children: [{
          key: '4',
          href: '#anchor-props',
          title: 'Anchor Props'
        }, {
          key: '5',
          href: '#link-props',
          title: 'Link Props'
        }]
      }]} />
      </ExampleStory>;
  }
}`},(U=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var V,X,Y;y.parameters=n(t({},y.parameters),{docs:n(t({},(V=y.parameters)==null?void 0:V.docs),{source:t({originalSource:`{
  render: () => {
    const topRef = useRef<HTMLDivElement>(null);
    const [targetOffset, setTargetOffset] = useState<number>();
    useEffect(() => {
      setTargetOffset(topRef.current?.clientHeight);
    }, []);
    return <ExampleStory title="Anchor target scroll to screen center.">
        <div>
          <Row>
            <Col span={18}>
              <div id="part-1" style={{
              height: '100vh',
              background: 'rgba(255,0,0,0.02)',
              marginTop: '30vh'
            }}>
                Part 1
              </div>
              <div id="part-2" style={{
              height: '100vh',
              background: 'rgba(0,255,0,0.02)'
            }}>
                Part 2
              </div>
              <div id="part-3" style={{
              height: '100vh',
              background: 'rgba(0,0,255,0.02)'
            }}>
                Part 3
              </div>
            </Col>
            <Col span={6}>
              <Anchor targetOffset={targetOffset} items={[{
              key: 'part-1',
              href: '#part-1',
              title: 'Part 1'
            }, {
              key: 'part-2',
              href: '#part-2',
              title: 'Part 2'
            }, {
              key: 'part-3',
              href: '#part-3',
              title: 'Part 3'
            }]} />
            </Col>
          </Row>

          <div style={{
          height: '30vh',
          background: 'rgba(0,0,0,0.15)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          color: '#000'
        }} ref={topRef}>
            <div>Fixed Top Block</div>
          </div>
        </div>
      </ExampleStory>;
  }
}`},(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;u.parameters=n(t({},u.parameters),{docs:n(t({},(Z=u.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
  render: () => {
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    return <ExampleStory title="Listening for anchor link change.">
        <Anchor affix={false} onChange={onChange} items={[{
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo'
      }, {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo'
      }, {
        key: '3',
        href: '#api',
        title: 'API',
        children: [{
          key: '4',
          href: '#anchor-props',
          title: 'Anchor Props'
        }, {
          key: '5',
          href: '#link-props',
          title: 'Link Props'
        }]
      }]} />
      </ExampleStory>;
  }
}`},(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var te,ne,re;x.parameters=n(t({},x.parameters),{docs:n(t({},(te=x.parameters)==null?void 0:te.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Replace path in browser history, so back button returns to previous page instead of previous anchor item.">
        <Row>
          <Col span={16}>
            <div id="part-1" style={{
            height: '100vh',
            background: 'rgba(255,0,0,0.02)'
          }} />
            <div id="part-2" style={{
            height: '100vh',
            background: 'rgba(0,255,0,0.02)'
          }} />
            <div id="part-3" style={{
            height: '100vh',
            background: 'rgba(0,0,255,0.02)'
          }} />
          </Col>
          <Col span={8}>
            <Anchor replace items={[{
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1'
          }, {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2'
          }, {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3'
          }]} />
          </Col>
        </Row>
      </ExampleStory>;
  }
}`},(re=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:re.source)})});const Ae=["Primary","HorizontalDirection","WithCustomItems","ShowInkInFixed","ExampleBasic","ExampleHorizontal","ExampleAnchorStatic","ExampleOnclick","ExampleScrollOffset","ExampleLinkChange","ExampleReplaceHistory"];export{f as ExampleAnchorStatic,m as ExampleBasic,g as ExampleHorizontal,u as ExampleLinkChange,k as ExampleOnclick,x as ExampleReplaceHistory,y as ExampleScrollOffset,h as HorizontalDirection,l as Primary,d as ShowInkInFixed,p as WithCustomItems,Ae as __namedExportsOrder,Ce as default};
