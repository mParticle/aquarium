import{aU as t,j as e,au as x,av as o,y as u}from"./iframe-B6Y2oegk.js";import{E as a}from"./ExampleStory-Dokjh494.js";const v={title:"Components/Not Prod Ready/Navigation/Anchor",component:t,args:{affix:!0,bounds:5,offsetTop:0,showInkInFixed:!1,targetOffset:void 0,direction:"vertical",replace:!1,items:[{key:"1",href:"#section1",title:"Section 1",target:"_blank",children:[]},{key:"2",href:"#section2",title:"Section 2",target:"_blank",children:[]}],onClick:(r,i)=>{alert("Anchor Click")}},argTypes:{direction:{control:"select",options:["vertical","horizontal"]}}},n={},s={args:{direction:"horizontal"}},c={args:{items:[{key:"a",href:"#itemA",title:"Item A",target:"_blank",children:[]},{key:"b",href:"#itemB",title:"Item B",target:"_blank",children:[]},{key:"c",href:"#itemC",title:"Item C",target:"_blank",children:[]},{key:"d",href:"#itemD",title:"Item D",target:"_blank",children:[]}]}},l={args:{affix:!1,showInkInFixed:!0}},h={render:()=>e.jsx(a,{title:"Basic usage",children:e.jsxs(x,{children:[e.jsxs(o,{span:16,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"}})]}),e.jsx(o,{span:8,children:e.jsx(t,{items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]})})},p={render:()=>e.jsxs(a,{title:"Horizontally aligned anchors.",children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx(t,{direction:"horizontal",items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})}),e.jsxs("div",{children:[e.jsx("div",{id:"part-1",style:{width:"100vw",height:"100vh",textAlign:"center",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{width:"100vw",height:"100vh",textAlign:"center",background:"rgba(0,0,255,0.02)"}}),e.jsx("div",{id:"part-3",style:{width:"100vw",height:"100vh",textAlign:"center",background:"#fffbe9"}})]})]})},d={render:()=>e.jsx(a,{title:"Do not change state when page is scrolling.",children:e.jsx(t,{affix:!1,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})},m={render:()=>{const r=(i,y)=>{i.preventDefault(),console.log(y)};return e.jsx(a,{title:"Customize the onClick event.",children:e.jsx(t,{affix:!1,onClick:r,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})}},g={render:()=>{const r=u.useRef(null),[i,y]=u.useState();return u.useEffect(()=>{y(r.current?.clientHeight)},[]),e.jsx(a,{title:"Anchor target scroll to screen center.",children:e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsxs(o,{span:18,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)",marginTop:"30vh"},children:"Part 1"}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"},children:"Part 2"}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"},children:"Part 3"})]}),e.jsx(o,{span:6,children:e.jsx(t,{targetOffset:i,items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]}),e.jsx("div",{style:{height:"30vh",background:"rgba(0,0,0,0.15)",position:"fixed",top:0,left:0,width:"75%",color:"#000"},ref:r,children:e.jsx("div",{children:"Fixed Top Block"})})]})})}},f={render:()=>{const r=i=>{console.log("Anchor:OnChange",i)};return e.jsx(a,{title:"Listening for anchor link change.",children:e.jsx(t,{affix:!1,onChange:r,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})})}},k={render:()=>e.jsx(a,{title:"Replace path in browser history, so back button returns to previous page instead of previous anchor item.",children:e.jsxs(x,{children:[e.jsxs(o,{span:16,children:[e.jsx("div",{id:"part-1",style:{height:"100vh",background:"rgba(255,0,0,0.02)"}}),e.jsx("div",{id:"part-2",style:{height:"100vh",background:"rgba(0,255,0,0.02)"}}),e.jsx("div",{id:"part-3",style:{height:"100vh",background:"rgba(0,0,255,0.02)"}})]}),e.jsx(o,{span:8,children:e.jsx(t,{replace:!0,items:[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}]})})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    affix: false,
    showInkInFixed: true
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const b=["Primary","HorizontalDirection","WithCustomItems","ShowInkInFixed","ExampleBasic","ExampleHorizontal","ExampleAnchorStatic","ExampleOnclick","ExampleScrollOffset","ExampleLinkChange","ExampleReplaceHistory"],j=Object.freeze(Object.defineProperty({__proto__:null,ExampleAnchorStatic:d,ExampleBasic:h,ExampleHorizontal:p,ExampleLinkChange:f,ExampleOnclick:m,ExampleReplaceHistory:k,ExampleScrollOffset:g,HorizontalDirection:s,Primary:n,ShowInkInFixed:l,WithCustomItems:c,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{j as A,v as m};
