import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r,a as b,I as B,f as F,e as d,G as A,z as n,c as G,aj as C,A as P}from"./UnauthorizedTooltip-C-uexwNG.js";import{E as u}from"./ExampleStory-B49bSB_-.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{r as p}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const re={title:"Components/Not Prod Ready/Feedback/Skeleton",component:t=>e.jsx(r,{...t,style:{height:"200px",width:"200px"}}),args:{avatar:!1,loading:!0,paragraph:!1,round:!1,title:!1}},h={args:{paragraph:!0}},m={args:{avatar:{shape:"circle",size:"large"}}},g={args:{paragraph:{rows:7}}},S={args:{round:!0,paragraph:!0}},x={args:{title:{width:70}}},v={render:()=>e.jsx(u,{title:"Simplest Skeleton usage.",children:e.jsx(r,{})})},y={render:()=>e.jsx(u,{title:"Complex combination with avatar and multiple paragraphs.",children:e.jsx(r,{avatar:!0,paragraph:{rows:4}})})},k={render:()=>{const[t,i]=p.useState(!1),[o,I]=p.useState(!1),[l,a]=p.useState("default"),[c,z]=p.useState("default"),[R,E]=p.useState("circle"),w=s=>{i(s)},L=s=>{I(s)},T=s=>{a(s.target.value)},D=s=>{z(s.target.value)},q=s=>{E(s.target.value)};return e.jsxs(u,{title:"Skeleton Button, Avatar, Input, Image and Node.",children:[e.jsxs(b,{children:[e.jsx(r.Button,{active:t,size:l,shape:c,block:o}),e.jsx(r.Avatar,{active:t,size:l,shape:R}),e.jsx(r.Input,{active:t,size:l})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(r.Button,{active:t,size:l,shape:c,block:o}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(r.Input,{active:t,size:l,block:o}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(b,{children:[e.jsx(r.Image,{active:t}),e.jsx(r.Node,{active:t,children:e.jsx(B,{name:"mpLogo",size:"xxxxl",color:"success"})})]}),e.jsx(F,{}),e.jsx(d,{layout:"inline",style:{margin:"16px 0"},children:e.jsxs(b,{size:16,wrap:!0,children:[e.jsx(d.Item,{label:"Active",children:e.jsx(A,{checked:t,onChange:w})}),e.jsx(d.Item,{label:"Button and Input Block",children:e.jsx(A,{checked:o,onChange:L})}),e.jsx(d.Item,{label:"Size",children:e.jsxs(n.Group,{value:l,onChange:T,children:[e.jsx(n.Button,{value:"default",children:"Default"}),e.jsx(n.Button,{value:"large",children:"Large"}),e.jsx(n.Button,{value:"small",children:"Small"})]})}),e.jsx(d.Item,{label:"Button Shape",children:e.jsxs(n.Group,{value:c,onChange:D,children:[e.jsx(n.Button,{value:"default",children:"Default"}),e.jsx(n.Button,{value:"square",children:"Square"}),e.jsx(n.Button,{value:"round",children:"Round"}),e.jsx(n.Button,{value:"circle",children:"Circle"})]})}),e.jsx(d.Item,{label:"Avatar Shape",children:e.jsxs(n.Group,{value:R,onChange:q,children:[e.jsx(n.Button,{value:"square",children:"Square"}),e.jsx(n.Button,{value:"circle",children:"Circle"})]})})]})})]})}},j={render:()=>{const[t,i]=p.useState(!1),o=()=>{i(!0),setTimeout(()=>{i(!1)},3e3)};return e.jsx(u,{title:"Skeleton contains sub component.",children:e.jsxs(b,{orientation:"vertical",style:{width:"100%"},size:16,children:[e.jsxs(r,{loading:t,children:[e.jsx("h4",{style:{marginBottom:16},children:"Ant Design, a design language"}),e.jsx("p",{children:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."})]}),e.jsx(G,{onClick:o,disabled:t,children:"Show Skeleton"})]})})}},f={render:()=>{const t=Array.from({length:3}).map((a,c)=>({href:"https://ant.design",title:`ant design part ${c+1}`,avatar:`https://api.dicebear.com/7.x/miniavs/svg?seed=${c}`,description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."})),i=({icon:a,text:c})=>e.jsxs(e.Fragment,{children:[p.createElement(a,{style:{marginRight:8}}),c]}),[o,I]=p.useState(!0),l=a=>{I(!a)};return e.jsxs(u,{title:"Use skeleton in list component.",children:[e.jsx(A,{checked:!o,onChange:l,style:{marginBottom:16}}),e.jsx(C,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:a=>e.jsx(C.Item,{actions:o?void 0:[e.jsx(i,{icon:e.jsx(B,{name:"alicorn"}),text:"156"},"list-vertical-star-o"),e.jsx(i,{icon:e.jsx(B,{name:"users"}),text:"156"},"list-vertical-like-o"),e.jsx(i,{icon:e.jsx(B,{name:"setup"}),text:"2"},"list-vertical-message")],extra:!o&&e.jsx("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}),children:e.jsxs(r,{loading:o,avatar:!0,children:[e.jsx(C.Item.Meta,{avatar:e.jsx(P,{src:a.avatar}),title:e.jsx("a",{href:a.href,children:a.title}),description:a.description}),a.content]})},a.title)})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    paragraph: true
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    avatar: {
      shape: 'circle',
      size: 'large'
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    paragraph: {
      rows: 7
    }
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    round: true,
    paragraph: true
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: {
      width: 70
    }
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Simplest Skeleton usage.">
        <Skeleton />
      </ExampleStory>;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Complex combination with avatar and multiple paragraphs.">
        <Skeleton avatar paragraph={{
        rows: 4
      }} />
      </ExampleStory>;
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState<boolean>(false);
    const showSkeleton = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    return <ExampleStory title="Skeleton contains sub component.">
        <Space orientation="vertical" style={{
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
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const oe=["Primary","AvatarPlaceholder","Paragraph","RoundEdges","Title","ExampleBasic","ExampleCombiniation","ExampleConfigs","ExampleSubComponent","ExampleList"];export{m as AvatarPlaceholder,v as ExampleBasic,y as ExampleCombiniation,k as ExampleConfigs,f as ExampleList,j as ExampleSubComponent,g as Paragraph,h as Primary,S as RoundEdges,x as Title,oe as __namedExportsOrder,re as default};
