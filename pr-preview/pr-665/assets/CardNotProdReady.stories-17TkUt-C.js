var fe=Object.defineProperty,Ee=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var I=(a,o,s)=>o in a?fe(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,t=(a,o)=>{for(var s in o||(o={}))we.call(o,s)&&I(a,s,o[s]);if(A)for(var s of A(o))ke.call(o,s)&&I(a,s,o[s]);return a},r=(a,o)=>Ee(a,Le(o));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{C as n,e as Ge,v as Ae,A as L,S as Ie,I as c}from"./NavigationItemsService-mhbM9los.js";import"./ErrorStateIcon-DB4_bVGf.js";import"./SuccessStateIcon-C3QDfC-0.js";import"./WarningStateIcon-vZ0xXRsU.js";import"./_baseClone-DwBCp-Ss.js";import{E as i}from"./ExampleStory-JfMM2Hjn.js";import{r as w}from"./index-3OP4wdng.js";import{R as Ke,C as E}from"./row-DlEJUZa0.js";import"./LightTheme-BtoaoHMG.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./AntdIcon-DRQs8XP6.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./style-BvWo89XW.js";import"./WarningFilled-D6ijQqgK.js";const Ze={title:"Components/Not Prod Ready/Data Display/Card",component:a=>e.jsx(n,r(t({},a),{children:a.children})),args:{actions:void 0,activeTabKey:void 0,bodyStyle:void 0,bordered:!0,cover:void 0,defaultActiveTabKey:void 0,extra:void 0,headStyle:void 0,hoverable:!1,loading:!1,size:"default",tabBarExtraContent:void 0,tabList:void 0,tabProps:void 0,title:"Card Title",type:void 0,children:"Card Content",onTabChange:a=>{alert(`Tab Changed: ${a}`)}},argTypes:{size:{control:"select",options:["default","small"]}}},d={args:{size:"small"}},l={args:{bordered:!1}},p={args:{loading:!0}},m={args:{children:"Custom Actions",actions:[e.jsx(Ge,{children:"Edit"},"edit")]}},h={args:{tabList:[{key:"tab1",tab:"Tab 1"},{key:"tab2",tab:"Tab 2"},{key:"tab3",tab:"Tab 3"}]}},C={args:{cover:e.jsx("img",{alt:"example",src:"https://example.com/cover.jpg"})}},b={args:{type:"inner"}},g={render:()=>e.jsx(i,{title:"You can use Card.Meta to support more flexible content.",children:e.jsx(n,{hoverable:!0,style:{width:240},cover:e.jsx("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),children:e.jsx(n.Meta,{title:"Europe Street beat",description:"www.instagram.com"})})})},y={render:()=>e.jsx(i,{title:"Cards usually cooperate with grid column layout in overview page.",children:e.jsxs(Ke,{gutter:16,children:[e.jsx(E,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(E,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(E,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})})]})})},x={render:()=>{const a={width:"25%",textAlign:"center"};return e.jsx(i,{title:"Grid style card content.",children:e.jsxs(n,{title:"Card Title",children:[e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{hoverable:!1,style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"})]})})}},u={render:()=>{const[a,o]=w.useState(!0),s=S=>{o(!S)};return e.jsx(i,{title:"Shows a loading indicator while the contents of the card is being fetched.",children:e.jsxs(e.Fragment,{children:[e.jsx(Ae,{checked:!a,onChange:s}),e.jsx(n,{style:{width:300,marginTop:16},loading:a,children:e.jsx(n.Meta,{avatar:e.jsx(L,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),title:"Card title",description:"This is the description"})}),e.jsx(n,{style:{width:300,marginTop:16},actions:[e.jsx(c,{name:"mpLogo"},1),e.jsx(c,{name:"mpLogo"},2),e.jsx(c,{name:"mpLogo"},3)],children:e.jsx(Ie,{loading:a,avatar:!0,children:e.jsx(n.Meta,{avatar:e.jsx(L,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),title:"Card title",description:"This is the description"})})})]})})}},v={render:()=>e.jsx(i,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:e.jsxs(n,{title:"Card title",children:[e.jsx(n,{type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"}),e.jsx(n,{style:{marginTop:16},type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"})]})})},j={render:()=>{const a=[{key:"tab1",tab:"tab1"},{key:"tab2",tab:"tab2"}],o={tab1:e.jsx("p",{children:"content1"}),tab2:e.jsx("p",{children:"content2"})},s=[{key:"article",label:"article"},{key:"app",label:"app"},{key:"project",label:"project"}],S={article:e.jsx("p",{children:"article content"}),app:e.jsx("p",{children:"app content"}),project:e.jsx("p",{children:"project content"})},[k,ve]=w.useState("tab1"),[G,je]=w.useState("app"),Te=f=>{ve(f)},Se=f=>{je(f)};return e.jsxs(i,{title:"More content can be hosted.",children:[e.jsx(n,{style:{width:"100%"},title:"Card title",extra:e.jsx("a",{href:"#",children:"More"}),tabList:a,activeTabKey:k,onTabChange:Te,children:o[k]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n,{style:{width:"100%"},tabList:s,activeTabKey:G,tabBarExtraContent:e.jsx("a",{href:"#",children:"More"}),onTabChange:Se,tabProps:{size:"middle"},children:S[G]})]})}},T={render:()=>e.jsx(i,{title:"A Card that supports cover, avatar, title and description.",children:e.jsx(n,{style:{width:300},cover:e.jsx("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[e.jsx(c,{name:"mpLogo"},1),e.jsx(c,{name:"mpLogo"},2),e.jsx(c,{name:"mpLogo"},3)],children:e.jsx(n.Meta,{avatar:e.jsx(L,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=8"}),title:"Card title",description:"This is the description"})})})};var K,M,R;d.parameters=r(t({},d.parameters),{docs:r(t({},(K=d.parameters)==null?void 0:K.docs),{source:t({originalSource:`{
  args: {
    size: 'small'
  }
}`},(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source)})});var N,z,B;l.parameters=r(t({},l.parameters),{docs:r(t({},(N=l.parameters)==null?void 0:N.docs),{source:t({originalSource:`{
  args: {
    bordered: false
  }
}`},(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source)})});var W,O,P;p.parameters=r(t({},p.parameters),{docs:r(t({},(W=p.parameters)==null?void 0:W.docs),{source:t({originalSource:`{
  args: {
    loading: true
  }
}`},(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source)})});var q,D,H;m.parameters=r(t({},m.parameters),{docs:r(t({},(q=m.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
  args: {
    children: 'Custom Actions',
    actions: [<Button key="edit">Edit</Button>]
  }
}`},(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source)})});var J,Q,Y;h.parameters=r(t({},h.parameters),{docs:r(t({},(J=h.parameters)==null?void 0:J.docs),{source:t({originalSource:`{
  args: {
    tabList: [{
      key: 'tab1',
      tab: 'Tab 1'
    }, {
      key: 'tab2',
      tab: 'Tab 2'
    }, {
      key: 'tab3',
      tab: 'Tab 3'
    }]
  }
}`},(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source)})});var _,F,$;C.parameters=r(t({},C.parameters),{docs:r(t({},(_=C.parameters)==null?void 0:_.docs),{source:t({originalSource:`{
  args: {
    cover: <img alt="example" src="https://example.com/cover.jpg" />
  }
}`},($=(F=C.parameters)==null?void 0:F.docs)==null?void 0:$.source)})});var U,V,X;b.parameters=r(t({},b.parameters),{docs:r(t({},(U=b.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    type: 'inner'
  }
}`},(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Z,ee,te;g.parameters=r(t({},g.parameters),{docs:r(t({},(Z=g.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="You can use Card.Meta to support more flexible content.">
        <Card hoverable style={{
        width: 240
      }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </ExampleStory>;
  }
}`},(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var re,ae,ne;y.parameters=r(t({},y.parameters),{docs:r(t({},(re=y.parameters)==null?void 0:re.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Cards usually cooperate with grid column layout in overview page.">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </ExampleStory>;
  }
}`},(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source)})});var oe,se,ie;x.parameters=r(t({},x.parameters),{docs:r(t({},(oe=x.parameters)==null?void 0:oe.docs),{source:t({originalSource:`{
  render: () => {
    const gridStyle: React.CSSProperties = {
      width: '25%',
      textAlign: 'center'
    };
    return <ExampleStory title="Grid style card content.">
        <Card title="Card Title">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            Content
          </Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </ExampleStory>;
  }
}`},(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source)})});var ce,de,le;u.parameters=r(t({},u.parameters),{docs:r(t({},(ce=u.parameters)==null?void 0:ce.docs),{source:t({originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(true);
    const onChange = (checked: boolean) => {
      setLoading(!checked);
    };
    return <ExampleStory title="Shows a loading indicator while the contents of the card is being fetched.">
        <>
          <Switch checked={!loading} onChange={onChange} />
          <Card style={{
          width: 300,
          marginTop: 16
        }} loading={loading}>
            <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />} title="Card title" description="This is the description" />
          </Card>
          <Card style={{
          width: 300,
          marginTop: 16
        }} actions={[<Icon name="mpLogo" key={1} />, <Icon name="mpLogo" key={2} />, <Icon name="mpLogo" key={3} />]}>
            <Skeleton loading={loading} avatar>
              <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />} title="Card title" description="This is the description" />
            </Skeleton>
          </Card>
        </>
      </ExampleStory>;
  }
}`},(le=(de=u.parameters)==null?void 0:de.docs)==null?void 0:le.source)})});var pe,me,he;v.parameters=r(t({},v.parameters),{docs:r(t({},(pe=v.parameters)==null?void 0:pe.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="It can be placed inside the ordinary card to display the information of the multilevel structure.">
        <Card title="Card title">
          <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
            Inner Card content
          </Card>
          <Card style={{
          marginTop: 16
        }} type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
            Inner Card content
          </Card>
        </Card>
      </ExampleStory>;
  }
}`},(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source)})});var Ce,be,ge;j.parameters=r(t({},j.parameters),{docs:r(t({},(Ce=j.parameters)==null?void 0:Ce.docs),{source:t({originalSource:`{
  render: () => {
    const tabList = [{
      key: 'tab1',
      tab: 'tab1'
    }, {
      key: 'tab2',
      tab: 'tab2'
    }];
    const contentList: Record<string, React.ReactNode> = {
      tab1: <p>content1</p>,
      tab2: <p>content2</p>
    };
    const tabListNoTitle = [{
      key: 'article',
      label: 'article'
    }, {
      key: 'app',
      label: 'app'
    }, {
      key: 'project',
      label: 'project'
    }];
    const contentListNoTitle: Record<string, React.ReactNode> = {
      article: <p>article content</p>,
      app: <p>app content</p>,
      project: <p>project content</p>
    };
    const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
    const [activeTabKey2, setActiveTabKey2] = useState<string>('app');
    const onTab1Change = (key: string) => {
      setActiveTabKey1(key);
    };
    const onTab2Change = (key: string) => {
      setActiveTabKey2(key);
    };
    return <ExampleStory title="More content can be hosted.">
        <Card style={{
        width: '100%'
      }} title="Card title" extra={<a href="#">More</a>} tabList={tabList} activeTabKey={activeTabKey1} onTabChange={onTab1Change}>
          {contentList[activeTabKey1]}
        </Card>
        <br />
        <br />
        <Card style={{
        width: '100%'
      }} tabList={tabListNoTitle} activeTabKey={activeTabKey2} tabBarExtraContent={<a href="#">More</a>} onTabChange={onTab2Change} tabProps={{
        size: 'middle'
      }}>
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </ExampleStory>;
  }
}`},(ge=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ge.source)})});var ye,xe,ue;T.parameters=r(t({},T.parameters),{docs:r(t({},(ye=T.parameters)==null?void 0:ye.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="A Card that supports cover, avatar, title and description.">
        <Card style={{
        width: 300
      }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<Icon name="mpLogo" key={1} />, <Icon name="mpLogo" key={2} />, <Icon name="mpLogo" key={3} />]}>
          <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />} title="Card title" description="This is the description" />
        </Card>
      </ExampleStory>;
  }
}`},(ue=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ue.source)})});const et=["SmallSize","NoBorder","Loading","WithActions","WithTabs","WithCover","InnerStyle","ExampleMeta","ExampleColumn","ExampleGrid","ExampleLoading","ExampleInnerCard","ExampleWithTabs","ExampleContentConfiguration"];export{y as ExampleColumn,T as ExampleContentConfiguration,x as ExampleGrid,v as ExampleInnerCard,u as ExampleLoading,g as ExampleMeta,j as ExampleWithTabs,b as InnerStyle,p as Loading,l as NoBorder,d as SmallSize,m as WithActions,C as WithCover,h as WithTabs,et as __namedExportsOrder,Ze as default};
