var Ne=Object.defineProperty,We=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var R=(a,o,s)=>o in a?Ne(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,t=(a,o)=>{for(var s in o||(o={}))Oe.call(o,s)&&R(a,s,o[s]);if(M)for(var s of M(o))qe.call(o,s)&&R(a,s,o[s]);return a},r=(a,o)=>We(a,Pe(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{C as n,b as Ke,c as He,A as G,I as c,S as De}from"./GlobalNavigation-C7Y-WhNx.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import{E as i}from"./ExampleStory-BU9wJSzs.js";import{r as A}from"./index-CNk6hRaE.js";import{R as Je,C as k}from"./row-B98CqS5b.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const dt={title:"Components/Data Display/Card",component:a=>e.jsx(n,r(t({},a),{children:a.children})),args:{actions:void 0,activeTabKey:void 0,bodyStyle:void 0,bordered:!0,cover:void 0,defaultActiveTabKey:void 0,extra:void 0,headStyle:void 0,hoverable:!1,loading:!1,size:"default",tabBarExtraContent:void 0,tabList:void 0,tabProps:void 0,title:"Card Title",type:void 0,children:"Card Content",onTabChange:a=>{alert(`Tab Changed: ${a}`)}},argTypes:{size:{control:"select",options:["default","small"]}}},d={},l={args:{size:"small"}},p={args:{bordered:!1}},m={args:{hoverable:!0}},h={args:{loading:!0}},C={args:{children:"Custom Actions",actions:[e.jsx(Ke,{children:"Edit"},"edit")]}},b={args:{tabList:[{key:"tab1",tab:"Tab 1"},{key:"tab2",tab:"Tab 2"},{key:"tab3",tab:"Tab 3"}]}},g={args:{cover:e.jsx("img",{alt:"example",src:"https://example.com/cover.jpg"})}},y={args:{title:e.jsx(Ke,{children:"Any React Component"})}},x={args:{type:"inner"}},u={render:()=>e.jsx(i,{title:"You can use Card.Meta to support more flexible content.",children:e.jsx(n,{hoverable:!0,style:{width:240},cover:e.jsx("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),children:e.jsx(n.Meta,{title:"Europe Street beat",description:"www.instagram.com"})})})},v={render:()=>e.jsx(i,{title:"Cards usually cooperate with grid column layout in overview page.",children:e.jsxs(Je,{gutter:16,children:[e.jsx(k,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(k,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(k,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})})]})})},j={render:()=>{const a={width:"25%",textAlign:"center"};return e.jsx(i,{title:"Grid style card content.",children:e.jsxs(n,{title:"Card Title",children:[e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{hoverable:!1,style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"})]})})}},T={render:()=>{const[a,o]=A.useState(!0),s=L=>{o(!L)};return e.jsx(i,{title:"Shows a loading indicator while the contents of the card is being fetched.",children:e.jsxs(e.Fragment,{children:[e.jsx(He,{checked:!a,onChange:s}),e.jsx(n,{style:{width:300,marginTop:16},loading:a,children:e.jsx(n.Meta,{avatar:e.jsx(G,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),title:"Card title",description:"This is the description"})}),e.jsx(n,{style:{width:300,marginTop:16},actions:[e.jsx(c,{name:"mpLogo"},1),e.jsx(c,{name:"mpLogo"},2),e.jsx(c,{name:"mpLogo"},3)],children:e.jsx(De,{loading:a,avatar:!0,children:e.jsx(n.Meta,{avatar:e.jsx(G,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),title:"Card title",description:"This is the description"})})})]})})}},S={render:()=>e.jsx(i,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:e.jsxs(n,{title:"Card title",children:[e.jsx(n,{type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"}),e.jsx(n,{style:{marginTop:16},type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"})]})})},f={render:()=>{const a=[{key:"tab1",tab:"tab1"},{key:"tab2",tab:"tab2"}],o={tab1:e.jsx("p",{children:"content1"}),tab2:e.jsx("p",{children:"content2"})},s=[{key:"article",label:"article"},{key:"app",label:"app"},{key:"project",label:"project"}],L={article:e.jsx("p",{children:"article content"}),app:e.jsx("p",{children:"app content"}),project:e.jsx("p",{children:"project content"})},[I,Me]=A.useState("tab1"),[K,Re]=A.useState("app"),Be=w=>{Me(w)},ze=w=>{Re(w)};return e.jsxs(i,{title:"More content can be hosted.",children:[e.jsx(n,{style:{width:"100%"},title:"Card title",extra:e.jsx("a",{href:"#",children:"More"}),tabList:a,activeTabKey:I,onTabChange:Be,children:o[I]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n,{style:{width:"100%"},tabList:s,activeTabKey:K,tabBarExtraContent:e.jsx("a",{href:"#",children:"More"}),onTabChange:ze,tabProps:{size:"middle"},children:L[K]})]})}},E={render:()=>e.jsx(i,{title:"A Card that supports cover, avatar, title and description.",children:e.jsx(n,{style:{width:300},cover:e.jsx("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[e.jsx(c,{name:"mpLogo"},1),e.jsx(c,{name:"mpLogo"},2),e.jsx(c,{name:"mpLogo"},3)],children:e.jsx(n.Meta,{avatar:e.jsx(G,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=8"}),title:"Card title",description:"This is the description"})})})};var B,z,N;d.parameters=r(t({},d.parameters),{docs:r(t({},(B=d.parameters)==null?void 0:B.docs),{source:t({originalSource:"{}"},(N=(z=d.parameters)==null?void 0:z.docs)==null?void 0:N.source)})});var W,P,O;l.parameters=r(t({},l.parameters),{docs:r(t({},(W=l.parameters)==null?void 0:W.docs),{source:t({originalSource:`{
  args: {
    size: 'small'
  }
}`},(O=(P=l.parameters)==null?void 0:P.docs)==null?void 0:O.source)})});var q,H,D;p.parameters=r(t({},p.parameters),{docs:r(t({},(q=p.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
  args: {
    bordered: false
  }
}`},(D=(H=p.parameters)==null?void 0:H.docs)==null?void 0:D.source)})});var J,Q,Y;m.parameters=r(t({},m.parameters),{docs:r(t({},(J=m.parameters)==null?void 0:J.docs),{source:t({originalSource:`{
  args: {
    hoverable: true
  }
}`},(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source)})});var _,F,$;h.parameters=r(t({},h.parameters),{docs:r(t({},(_=h.parameters)==null?void 0:_.docs),{source:t({originalSource:`{
  args: {
    loading: true
  }
}`},($=(F=h.parameters)==null?void 0:F.docs)==null?void 0:$.source)})});var U,V,X;C.parameters=r(t({},C.parameters),{docs:r(t({},(U=C.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    children: 'Custom Actions',
    actions: [<Button key="edit">Edit</Button>]
  }
}`},(X=(V=C.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Z,ee,te;b.parameters=r(t({},b.parameters),{docs:r(t({},(Z=b.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
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
}`},(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var re,ae,ne;g.parameters=r(t({},g.parameters),{docs:r(t({},(re=g.parameters)==null?void 0:re.docs),{source:t({originalSource:`{
  args: {
    cover: <img alt="example" src="https://example.com/cover.jpg" />
  }
}`},(ne=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ne.source)})});var oe,se,ie;y.parameters=r(t({},y.parameters),{docs:r(t({},(oe=y.parameters)==null?void 0:oe.docs),{source:t({originalSource:`{
  args: {
    title: <Button>Any React Component</Button>
  }
}`},(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source)})});var ce,de,le;x.parameters=r(t({},x.parameters),{docs:r(t({},(ce=x.parameters)==null?void 0:ce.docs),{source:t({originalSource:`{
  args: {
    type: 'inner'
  }
}`},(le=(de=x.parameters)==null?void 0:de.docs)==null?void 0:le.source)})});var pe,me,he;u.parameters=r(t({},u.parameters),{docs:r(t({},(pe=u.parameters)==null?void 0:pe.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="You can use Card.Meta to support more flexible content.">
        <Card hoverable style={{
        width: 240
      }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </ExampleStory>;
  }
}`},(he=(me=u.parameters)==null?void 0:me.docs)==null?void 0:he.source)})});var Ce,be,ge;v.parameters=r(t({},v.parameters),{docs:r(t({},(Ce=v.parameters)==null?void 0:Ce.docs),{source:t({originalSource:`{
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
}`},(ge=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ge.source)})});var ye,xe,ue;j.parameters=r(t({},j.parameters),{docs:r(t({},(ye=j.parameters)==null?void 0:ye.docs),{source:t({originalSource:`{
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
}`},(ue=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ue.source)})});var ve,je,Te;T.parameters=r(t({},T.parameters),{docs:r(t({},(ve=T.parameters)==null?void 0:ve.docs),{source:t({originalSource:`{
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
}`},(Te=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Te.source)})});var Se,fe,Ee;S.parameters=r(t({},S.parameters),{docs:r(t({},(Se=S.parameters)==null?void 0:Se.docs),{source:t({originalSource:`{
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
}`},(Ee=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source)})});var Le,we,ke;f.parameters=r(t({},f.parameters),{docs:r(t({},(Le=f.parameters)==null?void 0:Le.docs),{source:t({originalSource:`{
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
}`},(ke=(we=f.parameters)==null?void 0:we.docs)==null?void 0:ke.source)})});var Ge,Ae,Ie;E.parameters=r(t({},E.parameters),{docs:r(t({},(Ge=E.parameters)==null?void 0:Ge.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="A Card that supports cover, avatar, title and description.">
        <Card style={{
        width: 300
      }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<Icon name="mpLogo" key={1} />, <Icon name="mpLogo" key={2} />, <Icon name="mpLogo" key={3} />]}>
          <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />} title="Card title" description="This is the description" />
        </Card>
      </ExampleStory>;
  }
}`},(Ie=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source)})});const lt=["Primary","SmallSize","NoBorder","Hoverable","Loading","WithActions","WithTabs","WithCover","CustomTitle","InnerStyle","ExampleMeta","ExampleColumn","ExampleGrid","ExampleLoading","ExampleInnerCard","ExampleWithTabs","ExampleContentConfiguration"];export{y as CustomTitle,v as ExampleColumn,E as ExampleContentConfiguration,j as ExampleGrid,S as ExampleInnerCard,T as ExampleLoading,u as ExampleMeta,f as ExampleWithTabs,m as Hoverable,x as InnerStyle,h as Loading,p as NoBorder,d as Primary,l as SmallSize,C as WithActions,g as WithCover,b as WithTabs,lt as __namedExportsOrder,dt as default};
