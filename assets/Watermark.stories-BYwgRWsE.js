var he=Object.defineProperty,ue=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var P=(o,r,a)=>r in o?he(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,n=(o,r)=>{for(var a in r||(r={}))fe.call(r,a)&&P(o,a,r[a]);if(E)for(var a of E(r))xe.call(r,a)&&P(o,a,r[a]);return o},t=(o,r)=>ue(o,ge(r));import{j as e}from"./jsx-runtime-CS-_a2eV.js";import{ac as i,O as s,F as j,o as z,J as ye,M as we,Z as W,U as h,b as M,a4 as Se,a1 as T}from"./GlobalNavigation-BFudnXls.js";import{E as F}from"./ExampleStory-BvanXuvo.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{r as A}from"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const _e={title:"Components/Feedback/Watermark",component:o=>e.jsx(i,t(n({},o),{children:e.jsx("div",{style:{height:500,width:500}})})),args:{width:120,height:64,inherit:!0,rotate:-22,zIndex:9,image:void 0,content:"Watermark",font:{color:"rgba(0, 0, 0, 0.15)",fontSize:16,fontWeight:"normal",fontFamily:"sans-serif",fontStyle:"normal",textAlign:"center"},gap:[100,100],offset:[50,50]}},u={},g={args:{content:["Watermark 1","Watermark 2","Watermark 3"]}},f={args:{font:{fontFamily:"Helvetica",fontSize:16,color:"rgba(255, 0, 0, 0.2)",textAlign:"right"}}},x={args:{gap:[200,150]}},y={args:{offset:[100,80]}},w={args:{rotate:45}},S={render:()=>e.jsx(F,{title:"The most basic usage.",children:e.jsx(i,{content:"Ant Design",children:e.jsx("div",{style:{height:500}})})})},b={render:()=>e.jsx(F,{title:"Use content to set a string array to specify multi-line text watermark content.",children:e.jsx(i,{content:["Ant Design","Happy Working"],children:e.jsx("div",{style:{height:500}})})})},I={render:()=>{const[o]=s.useForm(),[r,a]=A.useState({content:"Ant Design",color:"rgba(0, 0, 0, 0.15)",fontSize:16,zIndex:11,rotate:-22,gap:[100,100],offset:void 0}),{content:c,color:l,fontSize:m,zIndex:D,rotate:d,gap:p,offset:C}=r,v={content:c,zIndex:D,rotate:d,gap:p,offset:C,font:{color:typeof l=="string"?l:l.toRgbString(),fontSize:m}};return e.jsx(F,{title:"Preview the watermark effect by configuring custom parameters.",children:e.jsxs(j,{gap:"middle",children:[e.jsxs(i,t(n({},v),{children:[e.jsx(z.Paragraph,{children:"The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design."}),e.jsx(z.Paragraph,{children:"Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience."}),e.jsx(z.Paragraph,{children:"Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural."}),e.jsx("img",{style:{zIndex:10,width:"100%",maxWidth:800,position:"relative"},src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ",alt:"img"})]})),e.jsxs(s,{style:{width:280,flexShrink:0,borderLeft:"1px solid #eee",paddingInlineStart:16},form:o,layout:"vertical",initialValues:r,onValuesChange:(be,pe)=>{a(pe)},children:[e.jsx(s.Item,{name:"content",label:"Content",children:e.jsx(ye,{placeholder:"请输入"})}),e.jsx(s.Item,{name:"color",label:"Color",children:e.jsx(we,{})}),e.jsx(s.Item,{name:"fontSize",label:"FontSize",children:e.jsx(W,{step:1,min:1,max:100})}),e.jsx(s.Item,{name:"zIndex",label:"zIndex",children:e.jsx(W,{step:1,min:0,max:100})}),e.jsx(s.Item,{name:"rotate",label:"Rotate",children:e.jsx(W,{step:1,min:-180,max:180})}),e.jsx(s.Item,{label:"Gap",style:{marginBottom:0},children:e.jsxs(j,{gap:"small",children:[e.jsx(s.Item,{name:["gap",0],children:e.jsx(h,{placeholder:"gapX",style:{width:"100%"}})}),e.jsx(s.Item,{name:["gap",1],children:e.jsx(h,{placeholder:"gapY",style:{width:"100%"}})})]})}),e.jsx(s.Item,{label:"Offset",style:{marginBottom:0},children:e.jsxs(j,{gap:"small",children:[e.jsx(s.Item,{name:["offset",0],children:e.jsx(h,{placeholder:"offsetLeft",style:{width:"100%"}})}),e.jsx(s.Item,{name:["offset",1],children:e.jsx(h,{placeholder:"offsetTop",style:{width:"100%"}})})]})})]})]})})}},k={render:()=>{const o={height:300,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(150, 150, 150, 0.2)"},r=e.jsx("div",{style:o,children:"A mock height"}),[a,c]=A.useState(!1),[l,m]=A.useState(!1),[D,d]=A.useState(!1),p=()=>{c(!1)},C=()=>{m(!1)},v=()=>{d(!1)};return e.jsx(F,{title:"Use in Modal and Drawer.",children:e.jsxs(e.Fragment,{children:[e.jsxs(j,{gap:"middle",children:[e.jsx(M,{type:"primary",onClick:()=>{c(!0)},children:"Show in Modal"}),e.jsx(M,{type:"primary",onClick:()=>{m(!0)},children:"Show in Drawer"}),e.jsx(M,{type:"primary",onClick:()=>{d(!0)},children:"Not Shown in Drawer"})]}),e.jsxs(i,{content:"Ant Design",children:[e.jsx(Se,{destroyOnClose:!0,open:a,title:"Modal",onCancel:p,onOk:p,children:r}),e.jsx(T,{destroyOnClose:!0,open:l,title:"Drawer",onClose:C,children:r})]}),e.jsx(i,{content:"Ant Design",inherit:!1,children:e.jsx(T,{destroyOnClose:!0,open:D,title:"Drawer",onClose:v,children:r})})]})})}};var B,O,N;u.parameters=t(n({},u.parameters),{docs:t(n({},(B=u.parameters)==null?void 0:B.docs),{source:n({originalSource:"{}"},(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source)})});var R,_,H;g.parameters=t(n({},g.parameters),{docs:t(n({},(R=g.parameters)==null?void 0:R.docs),{source:n({originalSource:`{
  args: {
    content: ['Watermark 1', 'Watermark 2', 'Watermark 3']
  }
}`},(H=(_=g.parameters)==null?void 0:_.docs)==null?void 0:H.source)})});var L,G,U;f.parameters=t(n({},f.parameters),{docs:t(n({},(L=f.parameters)==null?void 0:L.docs),{source:n({originalSource:`{
  args: {
    font: {
      fontFamily: 'Helvetica',
      fontSize: 16,
      color: 'rgba(255, 0, 0, 0.2)',
      textAlign: 'right'
    }
  }
}`},(U=(G=f.parameters)==null?void 0:G.docs)==null?void 0:U.source)})});var Q,V,X;x.parameters=t(n({},x.parameters),{docs:t(n({},(Q=x.parameters)==null?void 0:Q.docs),{source:n({originalSource:`{
  args: {
    gap: [200, 150]
  }
}`},(X=(V=x.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Y,J,Z;y.parameters=t(n({},y.parameters),{docs:t(n({},(Y=y.parameters)==null?void 0:Y.docs),{source:n({originalSource:`{
  args: {
    offset: [100, 80]
  }
}`},(Z=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Z.source)})});var q,K,$;w.parameters=t(n({},w.parameters),{docs:t(n({},(q=w.parameters)==null?void 0:q.docs),{source:n({originalSource:`{
  args: {
    rotate: 45
  }
}`},($=(K=w.parameters)==null?void 0:K.docs)==null?void 0:$.source)})});var ee,ne,te;S.parameters=t(n({},S.parameters),{docs:t(n({},(ee=S.parameters)==null?void 0:ee.docs),{source:n({originalSource:`{
  render: () => {
    return <ExampleStory title="The most basic usage.">
        <Watermark content="Ant Design">
          <div style={{
          height: 500
        }} />
        </Watermark>
      </ExampleStory>;
  }
}`},(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source)})});var re,oe,ae;b.parameters=t(n({},b.parameters),{docs:t(n({},(re=b.parameters)==null?void 0:re.docs),{source:n({originalSource:`{
  render: () => {
    return <ExampleStory title="Use content to set a string array to specify multi-line text watermark content.">
        <Watermark content={['Ant Design', 'Happy Working']}>
          <div style={{
          height: 500
        }} />
        </Watermark>
      </ExampleStory>;
  }
}`},(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source)})});var se,ie,le;I.parameters=t(n({},I.parameters),{docs:t(n({},(se=I.parameters)==null?void 0:se.docs),{source:n({originalSource:`{
  render: () => {
    type Color = GetProp<IColorPickerProps, 'color'>;
    interface WatermarkConfig {
      content: string;
      color: string | Color;
      fontSize: number;
      zIndex: number;
      rotate: number;
      gap: [number, number];
      offset?: [number, number];
    }
    const [form] = Form.useForm();
    const [config, setConfig] = useState<WatermarkConfig>({
      content: 'Ant Design',
      color: 'rgba(0, 0, 0, 0.15)',
      fontSize: 16,
      zIndex: 11,
      rotate: -22,
      gap: [100, 100],
      offset: undefined
    });
    const {
      content,
      color,
      fontSize,
      zIndex,
      rotate,
      gap,
      offset
    } = config;
    const watermarkProps: IWatermarkProps = {
      content,
      zIndex,
      rotate,
      gap,
      offset,
      font: {
        color: typeof color === 'string' ? color : color.toRgbString(),
        fontSize
      }
    };
    return <ExampleStory title="Preview the watermark effect by configuring custom parameters.">
        <Flex gap="middle">
          <Watermark {...watermarkProps}>
            <Typography.Paragraph>
              The light-speed iteration of the digital world makes products more complex. However, human consciousness
              and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction
              will be the consistent direction of Ant Design.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Natural user cognition: According to cognitive psychology, about 80% of external information is obtained
              through visual channels. The most important visual elements in the interface design, including layout,
              colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the
              user&apos;s cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely
              adding other sensory channels such as hearing, touch can create a richer and more natural product
              experience.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Natural user behavior: In the interaction with the system, the designer should fully understand the
              relationship between users, system roles, and task objectives, and also contextually organize system
              functions and services. At the same time, a series of methods such as behavior analysis, artificial
              intelligence and sensors could be applied to assist users to make effective decisions and reduce extra
              operations of users, to save users&apos; mental and physical resources and make human-computer interaction
              more natural.
            </Typography.Paragraph>
            <img style={{
            zIndex: 10,
            width: '100%',
            maxWidth: 800,
            position: 'relative'
          }} src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ" alt="img" />
          </Watermark>
          <Form style={{
          width: 280,
          flexShrink: 0,
          borderLeft: '1px solid #eee',
          paddingInlineStart: 16
        }} form={form} layout="vertical" initialValues={config} onValuesChange={(_, values: WatermarkConfig) => {
          setConfig(values);
        }}>
            <Form.Item name="content" label="Content">
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item name="color" label="Color">
              <ColorPicker />
            </Form.Item>
            <Form.Item name="fontSize" label="FontSize">
              <Slider step={1} min={1} max={100} />
            </Form.Item>
            <Form.Item name="zIndex" label="zIndex">
              <Slider step={1} min={0} max={100} />
            </Form.Item>
            <Form.Item name="rotate" label="Rotate">
              <Slider step={1} min={-180} max={180} />
            </Form.Item>
            <Form.Item label="Gap" style={{
            marginBottom: 0
          }}>
              <Flex gap="small">
                <Form.Item name={['gap', 0]}>
                  <InputNumber placeholder="gapX" style={{
                  width: '100%'
                }} />
                </Form.Item>
                <Form.Item name={['gap', 1]}>
                  <InputNumber placeholder="gapY" style={{
                  width: '100%'
                }} />
                </Form.Item>
              </Flex>
            </Form.Item>
            <Form.Item label="Offset" style={{
            marginBottom: 0
          }}>
              <Flex gap="small">
                <Form.Item name={['offset', 0]}>
                  <InputNumber placeholder="offsetLeft" style={{
                  width: '100%'
                }} />
                </Form.Item>
                <Form.Item name={['offset', 1]}>
                  <InputNumber placeholder="offsetTop" style={{
                  width: '100%'
                }} />
                </Form.Item>
              </Flex>
            </Form.Item>
          </Form>
        </Flex>
      </ExampleStory>;
  }
}`},(le=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:le.source)})});var ce,me,de;k.parameters=t(n({},k.parameters),{docs:t(n({},(ce=k.parameters)==null?void 0:ce.docs),{source:n({originalSource:`{
  render: () => {
    const style: React.CSSProperties = {
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(150, 150, 150, 0.2)'
    };
    const placeholder = <div style={style}>A mock height</div>;
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showDrawer2, setShowDrawer2] = useState(false);
    const closeModal = (): void => {
      setShowModal(false);
    };
    const closeDrawer = (): void => {
      setShowDrawer(false);
    };
    const closeDrawer2 = (): void => {
      setShowDrawer2(false);
    };
    return <ExampleStory title="Use in Modal and Drawer.">
        <>
          <Flex gap="middle">
            <Button type="primary" onClick={() => {
            setShowModal(true);
          }}>
              Show in Modal
            </Button>
            <Button type="primary" onClick={() => {
            setShowDrawer(true);
          }}>
              Show in Drawer
            </Button>
            <Button type="primary" onClick={() => {
            setShowDrawer2(true);
          }}>
              Not Shown in Drawer
            </Button>
          </Flex>
          <Watermark content="Ant Design">
            <Modal destroyOnClose open={showModal} title="Modal" onCancel={closeModal} onOk={closeModal}>
              {placeholder}
            </Modal>
            <Drawer destroyOnClose open={showDrawer} title="Drawer" onClose={closeDrawer}>
              {placeholder}
            </Drawer>
          </Watermark>
          <Watermark content="Ant Design" inherit={false}>
            <Drawer destroyOnClose open={showDrawer2} title="Drawer" onClose={closeDrawer2}>
              {placeholder}
            </Drawer>
          </Watermark>
        </>
      </ExampleStory>;
  }
}`},(de=(me=k.parameters)==null?void 0:me.docs)==null?void 0:de.source)})});const He=["Primary","Content","Font","Gap","Offset","RotatedWatermark","ExampleBasic","ExampleMultiline","ExampleConfig","ExampleModalOrDrawer"];export{g as Content,S as ExampleBasic,I as ExampleConfig,k as ExampleModalOrDrawer,b as ExampleMultiline,f as Font,x as Gap,y as Offset,u as Primary,w as RotatedWatermark,He as __namedExportsOrder,_e as default};
