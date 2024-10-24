var he=Object.defineProperty,ue=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var E=(a,o,n)=>o in a?he(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,t=(a,o)=>{for(var n in o||(o={}))fe.call(o,n)&&E(a,n,o[n]);if(P)for(var n of P(o))xe.call(o,n)&&E(a,n,o[n]);return a},r=(a,o)=>ue(a,ge(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{at as l,H as s,F as j,d as z,c as ye,ai as we,a3 as W,J as h,k as M,M as Se,O as T}from"./GlobalNavigation-OEfOQ4rJ.js";import{E as D}from"./ExampleStory-K03bKO0J.js";import"./_baseClone-DBzvlRjn.js";import{r as A}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const Be={title:"Components/Not Prod Ready/Watermark",component:a=>e.jsx(l,r(t({},a),{children:e.jsx("div",{style:{height:500,width:500}})})),args:{width:120,height:64,inherit:!0,rotate:-22,zIndex:9,image:void 0,content:"Watermark",font:{color:"rgba(0, 0, 0, 0.15)",fontSize:16,fontWeight:"normal",fontFamily:"sans-serif",fontStyle:"normal",textAlign:"center"},gap:[100,100],offset:[50,50]}},u={},g={args:{content:["Watermark 1","Watermark 2","Watermark 3"]}},f={args:{font:{fontFamily:"Helvetica",fontSize:16,color:"rgba(255, 0, 0, 0.2)",textAlign:"right"}}},x={args:{gap:[200,150]}},y={args:{offset:[100,80]}},w={args:{rotate:45}},S={render:()=>e.jsx(D,{title:"The most basic usage.",children:e.jsx(l,{content:"Ant Design",children:e.jsx("div",{style:{height:500}})})})},b={render:()=>e.jsx(D,{title:"Use content to set a string array to specify multi-line text watermark content.",children:e.jsx(l,{content:["Ant Design","Happy Working"],children:e.jsx("div",{style:{height:500}})})})},I={render:()=>{const[a]=s.useForm(),[o,n]=A.useState({content:"Ant Design",color:"rgba(0, 0, 0, 0.15)",fontSize:16,zIndex:11,rotate:-22,gap:[100,100],offset:void 0}),{content:c,color:i,fontSize:m,zIndex:F,rotate:d,gap:p,offset:C}=o,v={content:c,zIndex:F,rotate:d,gap:p,offset:C,font:{color:typeof i=="string"?i:typeof i=="object"&&"toRgbString"in i?i.toRgbString():String(i),fontSize:m}};return e.jsx(D,{title:"Preview the watermark effect by configuring custom parameters.",children:e.jsxs(j,{gap:"middle",children:[e.jsxs(l,r(t({},v),{children:[e.jsx(z.Paragraph,{children:"The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design."}),e.jsx(z.Paragraph,{children:"Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience."}),e.jsx(z.Paragraph,{children:"Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural."}),e.jsx("img",{style:{zIndex:10,width:"100%",maxWidth:800,position:"relative"},src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ",alt:"img"})]})),e.jsxs(s,{style:{width:280,flexShrink:0,borderLeft:"1px solid #eee",paddingInlineStart:16},form:a,layout:"vertical",initialValues:o,onValuesChange:(be,pe)=>{n(pe)},children:[e.jsx(s.Item,{name:"content",label:"Content",children:e.jsx(ye,{placeholder:"请输入"})}),e.jsx(s.Item,{name:"color",label:"Color",children:e.jsx(we,{})}),e.jsx(s.Item,{name:"fontSize",label:"FontSize",children:e.jsx(W,{step:1,min:1,max:100})}),e.jsx(s.Item,{name:"zIndex",label:"zIndex",children:e.jsx(W,{step:1,min:0,max:100})}),e.jsx(s.Item,{name:"rotate",label:"Rotate",children:e.jsx(W,{step:1,min:-180,max:180})}),e.jsx(s.Item,{label:"Gap",style:{marginBottom:0},children:e.jsxs(j,{gap:"small",children:[e.jsx(s.Item,{name:["gap",0],children:e.jsx(h,{placeholder:"gapX",style:{width:"100%"}})}),e.jsx(s.Item,{name:["gap",1],children:e.jsx(h,{placeholder:"gapY",style:{width:"100%"}})})]})}),e.jsx(s.Item,{label:"Offset",style:{marginBottom:0},children:e.jsxs(j,{gap:"small",children:[e.jsx(s.Item,{name:["offset",0],children:e.jsx(h,{placeholder:"offsetLeft",style:{width:"100%"}})}),e.jsx(s.Item,{name:["offset",1],children:e.jsx(h,{placeholder:"offsetTop",style:{width:"100%"}})})]})})]})]})})}},k={render:()=>{const a={height:300,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(150, 150, 150, 0.2)"},o=e.jsx("div",{style:a,children:"A mock height"}),[n,c]=A.useState(!1),[i,m]=A.useState(!1),[F,d]=A.useState(!1),p=()=>{c(!1)},C=()=>{m(!1)},v=()=>{d(!1)};return e.jsx(D,{title:"Use in Modal and Drawer.",children:e.jsxs(e.Fragment,{children:[e.jsxs(j,{gap:"middle",children:[e.jsx(M,{type:"primary",onClick:()=>{c(!0)},children:"Show in Modal"}),e.jsx(M,{type:"primary",onClick:()=>{m(!0)},children:"Show in Drawer"}),e.jsx(M,{type:"primary",onClick:()=>{d(!0)},children:"Not Shown in Drawer"})]}),e.jsxs(l,{content:"Ant Design",children:[e.jsx(Se,{destroyOnClose:!0,open:n,title:"Modal",onCancel:p,onOk:p,children:o}),e.jsx(T,{destroyOnClose:!0,open:i,title:"Drawer",onClose:C,children:o})]}),e.jsx(l,{content:"Ant Design",inherit:!1,children:e.jsx(T,{destroyOnClose:!0,open:F,title:"Drawer",onClose:v,children:o})})]})})}};var O,B,R;u.parameters=r(t({},u.parameters),{docs:r(t({},(O=u.parameters)==null?void 0:O.docs),{source:t({originalSource:"{}"},(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source)})});var N,_,H;g.parameters=r(t({},g.parameters),{docs:r(t({},(N=g.parameters)==null?void 0:N.docs),{source:t({originalSource:`{
  args: {
    content: ['Watermark 1', 'Watermark 2', 'Watermark 3']
  }
}`},(H=(_=g.parameters)==null?void 0:_.docs)==null?void 0:H.source)})});var L,G,Q;f.parameters=r(t({},f.parameters),{docs:r(t({},(L=f.parameters)==null?void 0:L.docs),{source:t({originalSource:`{
  args: {
    font: {
      fontFamily: 'Helvetica',
      fontSize: 16,
      color: 'rgba(255, 0, 0, 0.2)',
      textAlign: 'right'
    }
  }
}`},(Q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Q.source)})});var U,V,X;x.parameters=r(t({},x.parameters),{docs:r(t({},(U=x.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    gap: [200, 150]
  }
}`},(X=(V=x.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Y,J,q;y.parameters=r(t({},y.parameters),{docs:r(t({},(Y=y.parameters)==null?void 0:Y.docs),{source:t({originalSource:`{
  args: {
    offset: [100, 80]
  }
}`},(q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:q.source)})});var K,Z,$;w.parameters=r(t({},w.parameters),{docs:r(t({},(K=w.parameters)==null?void 0:K.docs),{source:t({originalSource:`{
  args: {
    rotate: 45
  }
}`},($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ee,te,re;S.parameters=r(t({},S.parameters),{docs:r(t({},(ee=S.parameters)==null?void 0:ee.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="The most basic usage.">
        <Watermark content="Ant Design">
          <div style={{
          height: 500
        }} />
        </Watermark>
      </ExampleStory>;
  }
}`},(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source)})});var oe,ae,ne;b.parameters=r(t({},b.parameters),{docs:r(t({},(oe=b.parameters)==null?void 0:oe.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Use content to set a string array to specify multi-line text watermark content.">
        <Watermark content={['Ant Design', 'Happy Working']}>
          <div style={{
          height: 500
        }} />
        </Watermark>
      </ExampleStory>;
  }
}`},(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source)})});var se,ie,le;I.parameters=r(t({},I.parameters),{docs:r(t({},(se=I.parameters)==null?void 0:se.docs),{source:t({originalSource:`{
  render: () => {
    type Color = GetProp<IColorPickerProps, 'value'>;
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
        color: typeof color === 'string' ? color : typeof color === 'object' && 'toRgbString' in color ? color.toRgbString() : String(color),
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
}`},(le=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:le.source)})});var ce,me,de;k.parameters=r(t({},k.parameters),{docs:r(t({},(ce=k.parameters)==null?void 0:ce.docs),{source:t({originalSource:`{
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
}`},(de=(me=k.parameters)==null?void 0:me.docs)==null?void 0:de.source)})});const Re=["Primary","Content","Font","Gap","Offset","RotatedWatermark","ExampleBasic","ExampleMultiline","ExampleConfig","ExampleModalOrDrawer"];export{g as Content,S as ExampleBasic,I as ExampleConfig,k as ExampleModalOrDrawer,b as ExampleMultiline,f as Font,x as Gap,y as Offset,u as Primary,w as RotatedWatermark,Re as __namedExportsOrder,Be as default};
