import{j as e,h as t,i as K,au as M,av as S,y as f,a0 as R,A as E,ar as N,I as n}from"./iframe-_QPLlW2H.js";import{E as r}from"./ExampleStory-z2QCavMP.js";import"./preload-helper-PPVm8Dsz.js";const O={title:"Components/Not Prod Ready/Data Display/Card",component:a=>e.jsx(t,{...a,children:a.children}),args:{actions:void 0,activeTabKey:void 0,bodyStyle:void 0,bordered:!0,cover:void 0,defaultActiveTabKey:void 0,extra:void 0,headStyle:void 0,hoverable:!1,loading:!1,size:"default",tabBarExtraContent:void 0,tabList:void 0,tabProps:void 0,title:"Card Title",type:void 0,children:"Card Content",onTabChange:a=>{alert(`Tab Changed: ${a}`)}},argTypes:{size:{control:"select",options:["default","small"]}}},s={args:{size:"small"}},o={args:{bordered:!1}},i={args:{loading:!0}},c={args:{children:"Custom Actions",actions:[e.jsx(K,{children:"Edit"},"edit")]}},d={args:{tabList:[{key:"tab1",tab:"Tab 1"},{key:"tab2",tab:"Tab 2"},{key:"tab3",tab:"Tab 3"}]}},l={args:{cover:e.jsx("img",{alt:"example",src:"https://example.com/cover.jpg"})}},p={args:{type:"inner"}},m={render:()=>e.jsx(r,{title:"You can use Card.Meta to support more flexible content.",children:e.jsx(t,{hoverable:!0,style:{width:240},cover:e.jsx("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),children:e.jsx(t.Meta,{title:"Europe Street beat",description:"www.instagram.com"})})})},h={render:()=>e.jsx(r,{title:"Cards usually cooperate with grid column layout in overview page.",children:e.jsxs(M,{gutter:16,children:[e.jsx(S,{span:8,children:e.jsx(t,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(S,{span:8,children:e.jsx(t,{title:"Card title",bordered:!1,children:"Card content"})}),e.jsx(S,{span:8,children:e.jsx(t,{title:"Card title",bordered:!1,children:"Card content"})})]})})},C={render:()=>{const a={width:"25%",textAlign:"center"};return e.jsx(r,{title:"Grid style card content.",children:e.jsxs(t,{title:"Card Title",children:[e.jsx(t.Grid,{style:a,children:"Content"}),e.jsx(t.Grid,{hoverable:!1,style:a,children:"Content"}),e.jsx(t.Grid,{style:a,children:"Content"}),e.jsx(t.Grid,{style:a,children:"Content"}),e.jsx(t.Grid,{style:a,children:"Content"}),e.jsx(t.Grid,{style:a,children:"Content"}),e.jsx(t.Grid,{style:a,children:"Content"})]})})}},b={render:()=>{const[a,u]=f.useState(!0),v=j=>{u(!j)};return e.jsx(r,{title:"Shows a loading indicator while the contents of the card is being fetched.",children:e.jsxs(e.Fragment,{children:[e.jsx(R,{checked:!a,onChange:v}),e.jsx(t,{style:{width:300,marginTop:16},loading:a,children:e.jsx(t.Meta,{avatar:e.jsx(E,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),title:"Card title",description:"This is the description"})}),e.jsx(t,{style:{width:300,marginTop:16},actions:[e.jsx(n,{name:"mpLogo"},1),e.jsx(n,{name:"mpLogo"},2),e.jsx(n,{name:"mpLogo"},3)],children:e.jsx(N,{loading:a,avatar:!0,children:e.jsx(t.Meta,{avatar:e.jsx(E,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),title:"Card title",description:"This is the description"})})})]})})}},g={render:()=>e.jsx(r,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:e.jsxs(t,{title:"Card title",children:[e.jsx(t,{type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"}),e.jsx(t,{style:{marginTop:16},type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"})]})})},y={render:()=>{const a=[{key:"tab1",tab:"tab1"},{key:"tab2",tab:"tab2"}],u={tab1:e.jsx("p",{children:"content1"}),tab2:e.jsx("p",{children:"content2"})},v=[{key:"article",label:"article"},{key:"app",label:"app"},{key:"project",label:"project"}],j={article:e.jsx("p",{children:"article content"}),app:e.jsx("p",{children:"app content"}),project:e.jsx("p",{children:"project content"})},[L,k]=f.useState("tab1"),[w,G]=f.useState("app"),A=T=>{k(T)},I=T=>{G(T)};return e.jsxs(r,{title:"More content can be hosted.",children:[e.jsx(t,{style:{width:"100%"},title:"Card title",extra:e.jsx("a",{href:"#",children:"More"}),tabList:a,activeTabKey:L,onTabChange:A,children:u[L]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(t,{style:{width:"100%"},tabList:v,activeTabKey:w,tabBarExtraContent:e.jsx("a",{href:"#",children:"More"}),onTabChange:I,tabProps:{size:"middle"},children:j[w]})]})}},x={render:()=>e.jsx(r,{title:"A Card that supports cover, avatar, title and description.",children:e.jsx(t,{style:{width:300},cover:e.jsx("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[e.jsx(n,{name:"mpLogo"},1),e.jsx(n,{name:"mpLogo"},2),e.jsx(n,{name:"mpLogo"},3)],children:e.jsx(t.Meta,{avatar:e.jsx(E,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=8"}),title:"Card title",description:"This is the description"})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Custom Actions',
    actions: [<Button key="edit">Edit</Button>]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    cover: <img alt="example" src="https://example.com/cover.jpg" />
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'inner'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="You can use Card.Meta to support more flexible content.">
        <Card hoverable style={{
        width: 240
      }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </ExampleStory>;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="A Card that supports cover, avatar, title and description.">
        <Card style={{
        width: 300
      }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<Icon name="mpLogo" key={1} />, <Icon name="mpLogo" key={2} />, <Icon name="mpLogo" key={3} />]}>
          <Card.Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />} title="Card title" description="This is the description" />
        </Card>
      </ExampleStory>;
  }
}`,...x.parameters?.docs?.source}}};const P=["SmallSize","NoBorder","Loading","WithActions","WithTabs","WithCover","InnerStyle","ExampleMeta","ExampleColumn","ExampleGrid","ExampleLoading","ExampleInnerCard","ExampleWithTabs","ExampleContentConfiguration"];export{h as ExampleColumn,x as ExampleContentConfiguration,C as ExampleGrid,g as ExampleInnerCard,b as ExampleLoading,m as ExampleMeta,y as ExampleWithTabs,p as InnerStyle,i as Loading,o as NoBorder,s as SmallSize,c as WithActions,l as WithCover,d as WithTabs,P as __namedExportsOrder,O as default};
