var ie=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var j=(i,a,o)=>a in i?ie(i,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[a]=o,t=(i,a)=>{for(var o in a||(a={}))se.call(a,o)&&j(i,o,a[o]);if(S)for(var o of S(a))ce.call(a,o)&&j(i,o,a[o]);return i},r=(i,a)=>oe(i,ne(a));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{a0 as n}from"./NavigationItemsService-CjwQR0DC.js";import{E as s}from"./ExampleStory-B2BCt9Jh.js";import"./ErrorStateIcon-Clx5lk_q.js";import"./SuccessStateIcon-CrBP74im.js";import"./WarningStateIcon-irkX5OVh.js";import"./_baseClone-DwBCp-Ss.js";import{r as v}from"./index-3OP4wdng.js";import{R as b,C as c}from"./row-DlEJUZa0.js";const le={title:"Components/Not Prod Ready/Navigation/Anchor",component:n,args:{affix:!0,bounds:5,offsetTop:0,showInkInFixed:!1,targetOffset:void 0,direction:"vertical",replace:!1,items:[{key:"1",href:"#section1",title:"Section 1",target:"_blank",children:[]},{key:"2",href:"#section2",title:"Section 2",target:"_blank",children:[]}],onClick:(i,a)=>{alert("Anchor Click")}},argTypes:{direction:{control:"select",options:["vertical","horizontal"]}}},l={},h={args:{direction:"horizontal"}},p={args:{items:[{key:"a",href:"#itemA",title:"Item A",target:"_blank",children:[]},{key:"b",href:"#itemB",title:"Item B",target:"_blank",children:[]},{key:"c",href:"#itemC",title:"Item C",target:"_blank",children:[]},{key:"d",href:"#itemD",title:"Item D",target:"_blank",children:[]}]}},d={args:{affix:!1,showInkInFixed:!0}},m={render:()=>e.jsx(s,{title:"Basic usage",children:e.jsxs(b,{children:[e.jsxs(c,{span:16,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"}})]}),e.jsx(c,{span:8,children:e.jsx(n,{items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]})})},g={render:()=>e.jsxs(s,{title:"Horizontally aligned anchors.",children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{direction:"horizontal",items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})}),e.jsxs("div",{children:[e.jsx("div",{id:"part-1",style:{width:"100vw",height:"100vh",textAlign:"center",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{width:"100vw",height:"100vh",textAlign:"center",background:"rgba(0,0,255,0.02)"}}),e.jsx("div",{id:"part-3",style:{width:"100vw",height:"100vh",textAlign:"center",background:"#fffbe9"}})]})]})},f={render:()=>e.jsx(s,{title:"Do not change state when page is scrolling.",children:e.jsx(n,{affix:!1,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})},k={render:()=>{const i=(a,o)=>{a.preventDefault(),console.log(o)};return e.jsx(s,{title:"Customize the onClick event.",children:e.jsx(n,{affix:!1,onClick:i,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})}},y={render:()=>{const i=v.useRef(null),[a,o]=v.useState();return v.useEffect(()=>{var P;o((P=i.current)==null?void 0:P.clientHeight)},[]),e.jsx(s,{title:"Anchor target scroll to screen center.",children:e.jsxs("div",{children:[e.jsxs(b,{children:[e.jsxs(c,{span:18,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)",marginTop:"30vh"},children:"Part 1"}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"},children:"Part 2"}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"},children:"Part 3"})]}),e.jsx(c,{span:6,children:e.jsx(n,{targetOffset:a,items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]}),e.jsx("div",{style:{height:"30vh",background:"rgba(0,0,0,0.15)",position:"fixed",top:0,left:0,width:"75%",color:"#000"},ref:i,children:e.jsx("div",{children:"Fixed Top Block"})})]})})}},u={render:()=>{const i=a=>{console.log("Anchor:OnChange",a)};return e.jsx(s,{title:"Listening for anchor link change.",children:e.jsx(n,{affix:!1,onChange:i,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})}},x={render:()=>e.jsx(s,{title:"Replace path in browser history, so back button returns to previous page instead of previous anchor item.",children:e.jsxs(b,{children:[e.jsxs(c,{span:16,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"}})]}),e.jsx(c,{span:8,children:e.jsx(n,{replace:!0,items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]})})};var A,C,E;l.parameters=r(t({},l.parameters),{docs:r(t({},(A=l.parameters)==null?void 0:A.docs),{source:t({originalSource:"{}"},(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source)})});var w,I,R;h.parameters=r(t({},h.parameters),{docs:r(t({},(w=h.parameters)==null?void 0:w.docs),{source:t({originalSource:`{
  args: {
    direction: 'horizontal'
  }
}`},(R=(I=h.parameters)==null?void 0:I.docs)==null?void 0:R.source)})});var O,B,_;p.parameters=r(t({},p.parameters),{docs:r(t({},(O=p.parameters)==null?void 0:O.docs),{source:t({originalSource:`{
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
}`},(_=(B=p.parameters)==null?void 0:B.docs)==null?void 0:_.source)})});var z,H,L;d.parameters=r(t({},d.parameters),{docs:r(t({},(z=d.parameters)==null?void 0:z.docs),{source:t({originalSource:`{
  args: {
    affix: false,
    showInkInFixed: true
  }
}`},(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source)})});var T,D,F;m.parameters=r(t({},m.parameters),{docs:r(t({},(T=m.parameters)==null?void 0:T.docs),{source:t({originalSource:`{
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
}`},(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source)})});var M,N,W;g.parameters=r(t({},g.parameters),{docs:r(t({},(M=g.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
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
}`},(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source)})});var q,G,J;f.parameters=r(t({},f.parameters),{docs:r(t({},(q=f.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
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
}`},(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source)})});var K,Q,U;k.parameters=r(t({},k.parameters),{docs:r(t({},(K=k.parameters)==null?void 0:K.docs),{source:t({originalSource:`{
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
}`},(U=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var V,X,Y;y.parameters=r(t({},y.parameters),{docs:r(t({},(V=y.parameters)==null?void 0:V.docs),{source:t({originalSource:`{
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
}`},(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;u.parameters=r(t({},u.parameters),{docs:r(t({},(Z=u.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
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
}`},(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var te,re,ae;x.parameters=r(t({},x.parameters),{docs:r(t({},(te=x.parameters)==null?void 0:te.docs),{source:t({originalSource:`{
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
}`},(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source)})});const he=["Primary","HorizontalDirection","WithCustomItems","ShowInkInFixed","ExampleBasic","ExampleHorizontal","ExampleAnchorStatic","ExampleOnclick","ExampleScrollOffset","ExampleLinkChange","ExampleReplaceHistory"],be=Object.freeze(Object.defineProperty({__proto__:null,ExampleAnchorStatic:f,ExampleBasic:m,ExampleHorizontal:g,ExampleLinkChange:u,ExampleOnclick:k,ExampleReplaceHistory:x,ExampleScrollOffset:y,HorizontalDirection:h,Primary:l,ShowInkInFixed:d,WithCustomItems:p,__namedExportsOrder:he,default:le},Symbol.toStringTag,{value:"Module"}));export{be as A,le as m};
