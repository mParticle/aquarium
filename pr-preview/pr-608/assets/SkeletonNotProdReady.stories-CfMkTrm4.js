var Se=Object.defineProperty,xe=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var L=(a,o,n)=>o in a?Se(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,t=(a,o)=>{for(var n in o||(o={}))ye.call(o,n)&&L(a,n,o[n]);if(w)for(var n of w(o))ke.call(o,n)&&L(a,n,o[n]);return a},r=(a,o)=>xe(a,ve(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{S as l,b as I,I as C,c as je,i as h,z,R as i,g as fe,a9 as R,A as be}from"./NavigationItemsService-DgZIzBO3.js";import{E as m}from"./ExampleStory-Crlm849B.js";import"./_baseClone-DBzvlRjn.js";import{r as u}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const Fe={title:"Components/Not Prod Ready/Feedback/Skeleton",component:a=>e.jsx(l,r(t({},a),{style:{height:"200px",width:"200px"}})),args:{avatar:!1,loading:!0,paragraph:!1,round:!1,title:!1}},g={args:{paragraph:!0}},S={args:{avatar:{shape:"circle",size:"large"}}},x={args:{paragraph:{rows:7}}},v={args:{round:!0,paragraph:!0}},y={args:{title:{width:70}}},k={render:()=>e.jsx(m,{title:"Simplest Skeleton usage.",children:e.jsx(l,{})})},j={render:()=>e.jsx(m,{title:"Complex combination with avatar and multiple paragraphs.",children:e.jsx(l,{avatar:!0,paragraph:{rows:4}})})},f={render:()=>{const[a,o]=u.useState(!1),[n,A]=u.useState(!1),[p,s]=u.useState("default"),[d,ce]=u.useState("default"),[E,pe]=u.useState("circle"),de=c=>{o(c)},ue=c=>{A(c)},he=c=>{s(c.target.value)},me=c=>{ce(c.target.value)},ge=c=>{pe(c.target.value)};return e.jsxs(m,{title:"Skeleton Button, Avatar, Input, Image and Node.",children:[e.jsxs(I,{children:[e.jsx(l.Button,{active:a,size:p,shape:d,block:n}),e.jsx(l.Avatar,{active:a,size:p,shape:E}),e.jsx(l.Input,{active:a,size:p})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l.Button,{active:a,size:p,shape:d,block:n}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l.Input,{active:a,size:p,block:n}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(I,{children:[e.jsx(l.Image,{active:a}),e.jsx(l.Node,{active:a,children:e.jsx(C,{name:"mpLogo",size:"xxxxl",color:"success"})})]}),e.jsx(je,{}),e.jsx(h,{layout:"inline",style:{margin:"16px 0"},children:e.jsxs(I,{size:16,wrap:!0,children:[e.jsx(h.Item,{label:"Active",children:e.jsx(z,{checked:a,onChange:de})}),e.jsx(h.Item,{label:"Button and Input Block",children:e.jsx(z,{checked:n,onChange:ue})}),e.jsx(h.Item,{label:"Size",children:e.jsxs(i.Group,{value:p,onChange:he,children:[e.jsx(i.Button,{value:"default",children:"Default"}),e.jsx(i.Button,{value:"large",children:"Large"}),e.jsx(i.Button,{value:"small",children:"Small"})]})}),e.jsx(h.Item,{label:"Button Shape",children:e.jsxs(i.Group,{value:d,onChange:me,children:[e.jsx(i.Button,{value:"default",children:"Default"}),e.jsx(i.Button,{value:"square",children:"Square"}),e.jsx(i.Button,{value:"round",children:"Round"}),e.jsx(i.Button,{value:"circle",children:"Circle"})]})}),e.jsx(h.Item,{label:"Avatar Shape",children:e.jsxs(i.Group,{value:E,onChange:ge,children:[e.jsx(i.Button,{value:"square",children:"Square"}),e.jsx(i.Button,{value:"circle",children:"Circle"})]})})]})})]})}},b={render:()=>{const[a,o]=u.useState(!1),n=()=>{o(!0),setTimeout(()=>{o(!1)},3e3)};return e.jsx(m,{title:"Skeleton contains sub component.",children:e.jsxs(I,{direction:"vertical",style:{width:"100%"},size:16,children:[e.jsxs(l,{loading:a,children:[e.jsx("h4",{style:{marginBottom:16},children:"Ant Design, a design language"}),e.jsx("p",{children:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."})]}),e.jsx(fe,{onClick:n,disabled:a,children:"Show Skeleton"})]})})}},B={render:()=>{const a=Array.from({length:3}).map((s,d)=>({href:"https://ant.design",title:`ant design part ${d+1}`,avatar:`https://api.dicebear.com/7.x/miniavs/svg?seed=${d}`,description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."})),o=({icon:s,text:d})=>e.jsxs(e.Fragment,{children:[u.createElement(s,{style:{marginRight:8}}),d]}),[n,A]=u.useState(!0),p=s=>{A(!s)};return e.jsxs(m,{title:"Use skeleton in list component.",children:[e.jsx(z,{checked:!n,onChange:p,style:{marginBottom:16}}),e.jsx(R,{itemLayout:"vertical",size:"large",dataSource:a,renderItem:s=>e.jsx(R.Item,{actions:n?void 0:[e.jsx(o,{icon:e.jsx(C,{name:"alicorn"}),text:"156"},"list-vertical-star-o"),e.jsx(o,{icon:e.jsx(C,{name:"users"}),text:"156"},"list-vertical-like-o"),e.jsx(o,{icon:e.jsx(C,{name:"setup"}),text:"2"},"list-vertical-message")],extra:!n&&e.jsx("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}),children:e.jsxs(l,{loading:n,avatar:!0,children:[e.jsx(R.Item.Meta,{avatar:e.jsx(be,{src:s.avatar}),title:e.jsx("a",{href:s.href,children:s.title}),description:s.description}),s.content]})},s.title)})]})}};var T,D,q;g.parameters=r(t({},g.parameters),{docs:r(t({},(T=g.parameters)==null?void 0:T.docs),{source:t({originalSource:`{
  args: {
    paragraph: true
  }
}`},(q=(D=g.parameters)==null?void 0:D.docs)==null?void 0:q.source)})});var F,G,P;S.parameters=r(t({},S.parameters),{docs:r(t({},(F=S.parameters)==null?void 0:F.docs),{source:t({originalSource:`{
  args: {
    avatar: {
      shape: 'circle',
      size: 'large'
    }
  }
}`},(P=(G=S.parameters)==null?void 0:G.docs)==null?void 0:P.source)})});var N,U,W;x.parameters=r(t({},x.parameters),{docs:r(t({},(N=x.parameters)==null?void 0:N.docs),{source:t({originalSource:`{
  args: {
    paragraph: {
      rows: 7
    }
  }
}`},(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source)})});var _,$,K;v.parameters=r(t({},v.parameters),{docs:r(t({},(_=v.parameters)==null?void 0:_.docs),{source:t({originalSource:`{
  args: {
    round: true,
    paragraph: true
  }
}`},(K=($=v.parameters)==null?void 0:$.docs)==null?void 0:K.source)})});var M,Q,X;y.parameters=r(t({},y.parameters),{docs:r(t({},(M=y.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  args: {
    title: {
      width: 70
    }
  }
}`},(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Z,O,H;k.parameters=r(t({},k.parameters),{docs:r(t({},(Z=k.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Simplest Skeleton usage.">
        <Skeleton />
      </ExampleStory>;
  }
}`},(H=(O=k.parameters)==null?void 0:O.docs)==null?void 0:H.source)})});var J,V,Y;j.parameters=r(t({},j.parameters),{docs:r(t({},(J=j.parameters)==null?void 0:J.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Complex combination with avatar and multiple paragraphs.">
        <Skeleton avatar paragraph={{
        rows: 4
      }} />
      </ExampleStory>;
  }
}`},(Y=(V=j.parameters)==null?void 0:V.docs)==null?void 0:Y.source)})});var ee,te,ae;f.parameters=r(t({},f.parameters),{docs:r(t({},(ee=f.parameters)==null?void 0:ee.docs),{source:t({originalSource:`{
  render: () => {
    type SizeType = 'default' | 'small' | 'large';
    type ButtonShapeType = 'circle' | 'square' | 'round' | 'default';
    type AvatarShapeType = 'circle' | 'square';
    const [active, setActive] = useState(false);
    const [block, setBlock] = useState(false);
    const [size, setSize] = useState<SizeType>('default');
    const [buttonShape, setButtonShape] = useState<ButtonShapeType>('default');
    const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');
    const handleActiveChange = (checked: boolean): void => {
      setActive(checked);
    };
    const handleBlockChange = (checked: boolean): void => {
      setBlock(checked);
    };
    const handleSizeChange = (e: RadioChangeEvent): void => {
      setSize(e.target.value as SizeType);
    };
    const handleShapeButton = (e: RadioChangeEvent): void => {
      setButtonShape(e.target.value as ButtonShapeType);
    };
    const handleAvatarShape = (e: RadioChangeEvent): void => {
      setAvatarShape(e.target.value as AvatarShapeType);
    };
    return <ExampleStory title="Skeleton Button, Avatar, Input, Image and Node.">
        <Space>
          <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
          <Skeleton.Input active={active} size={size} />
        </Space>
        <br />
        <br />
        <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
        <br />
        <br />
        <Skeleton.Input active={active} size={size} block={block} />
        <br />
        <br />
        <Space>
          <Skeleton.Image active={active} />
          <Skeleton.Node active={active}>
            <Icon name="mpLogo" size="xxxxl" color="success" />
          </Skeleton.Node>
        </Space>
        <Divider />
        <Form layout="inline" style={{
        margin: '16px 0'
      }}>
          <Space size={16} wrap>
            <Form.Item label="Active">
              <Switch checked={active} onChange={handleActiveChange} />
            </Form.Item>
            <Form.Item label="Button and Input Block">
              <Switch checked={block} onChange={handleBlockChange} />
            </Form.Item>
            <Form.Item label="Size">
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Button Shape">
              <Radio.Group value={buttonShape} onChange={handleShapeButton}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="square">Square</Radio.Button>
                <Radio.Button value="round">Round</Radio.Button>
                <Radio.Button value="circle">Circle</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Avatar Shape">
              <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
                <Radio.Button value="square">Square</Radio.Button>
                <Radio.Button value="circle">Circle</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Space>
        </Form>
      </ExampleStory>;
  }
}`},(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source)})});var ne,re,oe;b.parameters=r(t({},b.parameters),{docs:r(t({},(ne=b.parameters)==null?void 0:ne.docs),{source:t({originalSource:`{
  render: () => {
    const [loading, setLoading] = useState<boolean>(false);
    const showSkeleton = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    return <ExampleStory title="Skeleton contains sub component.">
        <Space direction="vertical" style={{
        width: '100%'
      }} size={16}>
          <Skeleton loading={loading}>
            <h4 style={{
            marginBottom: 16
          }}>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and high quality design resources (Sketch and
              Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
          </Skeleton>
          <Button onClick={showSkeleton} disabled={loading}>
            Show Skeleton
          </Button>
        </Space>
      </ExampleStory>;
  }
}`},(oe=(re=b.parameters)==null?void 0:re.docs)==null?void 0:oe.source)})});var se,ie,le;B.parameters=r(t({},B.parameters),{docs:r(t({},(se=B.parameters)==null?void 0:se.docs),{source:t({originalSource:`{
  render: () => {
    interface IconTextProps {
      icon: any;
      text: React.ReactNode;
    }
    const listData = Array.from({
      length: 3
    }).map((_, i) => ({
      href: 'https://ant.design',
      title: \`ant design part \${i + 1}\`,
      avatar: \`https://api.dicebear.com/7.x/miniavs/svg?seed=\${i}\`,
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }));
    const IconText: React.FC<IconTextProps> = ({
      icon,
      text
    }: {
      icon: any;
      text: any;
    }) => <>
        {createElement(icon, {
        style: {
          marginRight: 8
        }
      })}
        {text}
      </>;
    const [loading, setLoading] = useState(true);
    const onChange = (checked: boolean) => {
      setLoading(!checked);
    };
    return <ExampleStory title="Use skeleton in list component.">
        <Switch checked={!loading} onChange={onChange} style={{
        marginBottom: 16
      }} />
        <List itemLayout="vertical" size="large" dataSource={listData} renderItem={item => <List.Item key={item.title} actions={!loading ? [<IconText icon={<Icon name="alicorn"></Icon>} text="156" key="list-vertical-star-o" />, <IconText icon={<Icon name="users" />} text="156" key="list-vertical-like-o" />, <IconText icon={<Icon name="setup" />} text="2" key="list-vertical-message" />] : undefined} extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
              <Skeleton loading={loading} avatar>
                <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
                {item.content}
              </Skeleton>
            </List.Item>} />
      </ExampleStory>;
  }
}`},(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source)})});const Ge=["Primary","AvatarPlaceholder","Paragraph","RoundEdges","Title","ExampleBasic","ExampleCombiniation","ExampleConfigs","ExampleSubComponent","ExampleList"];export{S as AvatarPlaceholder,k as ExampleBasic,j as ExampleCombiniation,f as ExampleConfigs,B as ExampleList,b as ExampleSubComponent,x as Paragraph,g as Primary,v as RoundEdges,y as Title,Ge as __namedExportsOrder,Fe as default};
