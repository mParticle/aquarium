var Ge=Object.defineProperty,Ae=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var Ke=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var K=(a,o,s)=>o in a?Ge(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,t=(a,o)=>{for(var s in o||(o={}))Ke.call(o,s)&&K(a,s,o[s]);if(I)for(var s of I(o))Me.call(o,s)&&K(a,s,o[s]);return a},r=(a,o)=>Ae(a,Ie(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{e as n,o as fe,z as Re,A as w,I as c,S as Be}from"./GlobalNavigation-ByoW-fgh.js";import"./_baseClone-DBzvlRjn.js";import{E as i}from"./ExampleStory-Bj2tg3wU.js";import{r as k}from"./index-CNk6hRaE.js";import{R as ze,C as L}from"./row-B-7Rp2bC.js";import"./LightTheme-BtoaoHMG.js";import"./useToken-NzVyqXGc.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const $e={title:"Components/Not Prod Ready/Data Display/Card",component:a=>e.jsx(n,r(t({},a),{children:a.children})),args:{actions:void 0,activeTabKey:void 0,bodyStyle:void 0,bordered:!0,cover:void 0,defaultActiveTabKey:void 0,extra:void 0,headStyle:void 0,hoverable:!1,loading:!1,size:"default",tabBarExtraContent:void 0,tabList:void 0,tabProps:void 0,title:"Card Title",type:void 0,children:"Card Content",onTabChange:a=>{alert(`Tab Changed: ${a}`)}},argTypes:{size:{control:"select",options:["default","small"]}}},d={args:{size:"small"}},l={args:{bordered:!1}},p={args:{loading:!0}},m={args:{children:"Custom Actions",actions:[e.jsx(fe,{children:"Edit"},"edit")]}},h={args:{tabList:[{key:"tab1",tab:"Tab 1"},{key:"tab2",tab:"Tab 2"},{key:"tab3",tab:"Tab 3"}]}},C={args:{cover:e.jsx("img",{alt:"example",src:"https://example.com/cover.jpg"})}},b={args:{title:e.jsx(fe,{children:"Any React Component"})}},g={args:{type:"inner"}},y={render:()=>e.jsx(i,{title:"You can use Card.Meta to support more flexible content.",children:e.jsx(n,{hoverable:!0,style:{width:240},cover:e.jsx("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),children:e.jsx(n.Meta,{title:"Europe Street beat",description:"www.instagram.com"})})})},x={render:()=>e.jsx(i,{title:"Cards usually cooperate with grid column layout in overview page.",children:e.jsxs(ze,{gutter:16,children:[e.jsx(L,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(L,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(L,{span:8,children:e.jsx(n,{title:"Card title",bordered:!1,children:"Card content"})})]})})},u={render:()=>{const a={width:"25%",textAlign:"center"};return e.jsx(i,{title:"Grid style card content.",children:e.jsxs(n,{title:"Card Title",children:[e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{hoverable:!1,style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"}),e.jsx(n.Grid,{style:a,children:"Content"})]})})}},v={render:()=>{const[a,o]=k.useState(!0),s=f=>{o(!f)};return e.jsx(i,{title:"Shows a loading indicator while the contents of the card is being fetched.",children:e.jsxs(e.Fragment,{children:[e.jsx(Re,{checked:!a,onChange:s}),e.jsx(n,{style:{width:300,marginTop:16},loading:a,children:e.jsx(n.Meta,{avatar:e.jsx(w,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),title:"Card title",description:"This is the description"})}),e.jsx(n,{style:{width:300,marginTop:16},actions:[e.jsx(c,{name:"mpLogo"},1),e.jsx(c,{name:"mpLogo"},2),e.jsx(c,{name:"mpLogo"},3)],children:e.jsx(Be,{loading:a,avatar:!0,children:e.jsx(n.Meta,{avatar:e.jsx(w,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),title:"Card title",description:"This is the description"})})})]})})}},j={render:()=>e.jsx(i,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:e.jsxs(n,{title:"Card title",children:[e.jsx(n,{type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"}),e.jsx(n,{style:{marginTop:16},type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"})]})})},T={render:()=>{const a=[{key:"tab1",tab:"tab1"},{key:"tab2",tab:"tab2"}],o={tab1:e.jsx("p",{children:"content1"}),tab2:e.jsx("p",{children:"content2"})},s=[{key:"article",label:"article"},{key:"app",label:"app"},{key:"project",label:"project"}],f={article:e.jsx("p",{children:"article content"}),app:e.jsx("p",{children:"app content"}),project:e.jsx("p",{children:"project content"})},[G,Ee]=k.useState("tab1"),[A,Le]=k.useState("app"),we=E=>{Ee(E)},ke=E=>{Le(E)};return e.jsxs(i,{title:"More content can be hosted.",children:[e.jsx(n,{style:{width:"100%"},title:"Card title",extra:e.jsx("a",{href:"#",children:"More"}),tabList:a,activeTabKey:G,onTabChange:we,children:o[G]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n,{style:{width:"100%"},tabList:s,activeTabKey:A,tabBarExtraContent:e.jsx("a",{href:"#",children:"More"}),onTabChange:ke,tabProps:{size:"middle"},children:f[A]})]})}},S={render:()=>e.jsx(i,{title:"A Card that supports cover, avatar, title and description.",children:e.jsx(n,{style:{width:300},cover:e.jsx("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[e.jsx(c,{name:"mpLogo"},1),e.jsx(c,{name:"mpLogo"},2),e.jsx(c,{name:"mpLogo"},3)],children:e.jsx(n.Meta,{avatar:e.jsx(w,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=8"}),title:"Card title",description:"This is the description"})})})};var M,R,B;d.parameters=r(t({},d.parameters),{docs:r(t({},(M=d.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  args: {
    size: 'small'
  }
}`},(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source)})});var z,N,W;l.parameters=r(t({},l.parameters),{docs:r(t({},(z=l.parameters)==null?void 0:z.docs),{source:t({originalSource:`{
  args: {
    bordered: false
  }
}`},(W=(N=l.parameters)==null?void 0:N.docs)==null?void 0:W.source)})});var O,P,q;p.parameters=r(t({},p.parameters),{docs:r(t({},(O=p.parameters)==null?void 0:O.docs),{source:t({originalSource:`{
  args: {
    loading: true
  }
}`},(q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:q.source)})});var D,H,J;m.parameters=r(t({},m.parameters),{docs:r(t({},(D=m.parameters)==null?void 0:D.docs),{source:t({originalSource:`{
  args: {
    children: 'Custom Actions',
    actions: [<Button key="edit">Edit</Button>]
  }
}`},(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var Q,Y,_;h.parameters=r(t({},h.parameters),{docs:r(t({},(Q=h.parameters)==null?void 0:Q.docs),{source:t({originalSource:`{
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
}`},(_=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var F,$,U;C.parameters=r(t({},C.parameters),{docs:r(t({},(F=C.parameters)==null?void 0:F.docs),{source:t({originalSource:`{
  args: {
    cover: <img alt="example" src="https://example.com/cover.jpg" />
  }
}`},(U=($=C.parameters)==null?void 0:$.docs)==null?void 0:U.source)})});var V,X,Z;b.parameters=r(t({},b.parameters),{docs:r(t({},(V=b.parameters)==null?void 0:V.docs),{source:t({originalSource:`{
  args: {
    title: <Button>Any React Component</Button>
  }
}`},(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source)})});var ee,te,re;g.parameters=r(t({},g.parameters),{docs:r(t({},(ee=g.parameters)==null?void 0:ee.docs),{source:t({originalSource:`{
  args: {
    type: 'inner'
  }
}`},(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source)})});var ae,ne,oe;y.parameters=r(t({},y.parameters),{docs:r(t({},(ae=y.parameters)==null?void 0:ae.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="You can use Card.Meta to support more flexible content.">
        <Card hoverable style={{
        width: 240
      }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </ExampleStory>;
  }
}`},(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source)})});var se,ie,ce;x.parameters=r(t({},x.parameters),{docs:r(t({},(se=x.parameters)==null?void 0:se.docs),{source:t({originalSource:`{
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
}`},(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var de,le,pe;u.parameters=r(t({},u.parameters),{docs:r(t({},(de=u.parameters)==null?void 0:de.docs),{source:t({originalSource:`{
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
}`},(pe=(le=u.parameters)==null?void 0:le.docs)==null?void 0:pe.source)})});var me,he,Ce;v.parameters=r(t({},v.parameters),{docs:r(t({},(me=v.parameters)==null?void 0:me.docs),{source:t({originalSource:`{
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
}`},(Ce=(he=v.parameters)==null?void 0:he.docs)==null?void 0:Ce.source)})});var be,ge,ye;j.parameters=r(t({},j.parameters),{docs:r(t({},(be=j.parameters)==null?void 0:be.docs),{source:t({originalSource:`{
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
}`},(ye=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ye.source)})});var xe,ue,ve;T.parameters=r(t({},T.parameters),{docs:r(t({},(xe=T.parameters)==null?void 0:xe.docs),{source:t({originalSource:`{
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
}`},(ve=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:ve.source)})});var je,Te,Se;S.parameters=r(t({},S.parameters),{docs:r(t({},(je=S.parameters)==null?void 0:je.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="A Card that supports cover, avatar, title and description.">
        <Card style={{
        width: 300
      }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<Icon name="mpLogo" key={1} />, <Icon name="mpLogo" key={2} />, <Icon name="mpLogo" key={3} />]}>
          <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />} title="Card title" description="This is the description" />
        </Card>
      </ExampleStory>;
  }
}`},(Se=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Se.source)})});const Ue=["SmallSize","NoBorder","Loading","WithActions","WithTabs","WithCover","CustomTitle","InnerStyle","ExampleMeta","ExampleColumn","ExampleGrid","ExampleLoading","ExampleInnerCard","ExampleWithTabs","ExampleContentConfiguration"];export{b as CustomTitle,x as ExampleColumn,S as ExampleContentConfiguration,u as ExampleGrid,j as ExampleInnerCard,v as ExampleLoading,y as ExampleMeta,T as ExampleWithTabs,g as InnerStyle,p as Loading,l as NoBorder,d as SmallSize,m as WithActions,C as WithCover,h as WithTabs,Ue as __namedExportsOrder,$e as default};
