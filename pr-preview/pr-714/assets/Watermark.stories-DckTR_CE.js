import{j as e,aF as o,m as t,y as b,F as I,T as C,z as P,aC as E,ac as v,Y as m,i as z,ae as T,ah as W}from"./iframe-D7Ys59RG.js";import{E as k}from"./ExampleStory-KHWp24Wn.js";import"./preload-helper-PPVm8Dsz.js";const _={title:"Components/Not Prod Ready/Watermark",component:n=>e.jsx(o,{...n,children:e.jsx("div",{style:{height:500,width:500}})}),args:{width:120,height:64,inherit:!0,rotate:-22,zIndex:9,image:void 0,content:"Watermark",font:{color:"rgba(0, 0, 0, 0.15)",fontSize:16,fontWeight:"normal",fontFamily:"sans-serif",fontStyle:"normal",textAlign:"center"},gap:[100,100],offset:[50,50]}},d={},p={args:{content:["Watermark 1","Watermark 2","Watermark 3"]}},h={args:{font:{fontFamily:"Helvetica",fontSize:16,color:"rgba(255, 0, 0, 0.2)",textAlign:"right"}}},u={args:{gap:[200,150]}},g={args:{offset:[100,80]}},f={args:{rotate:45}},x={render:()=>e.jsx(k,{title:"The most basic usage.",children:e.jsx(o,{content:"Ant Design",children:e.jsx("div",{style:{height:500}})})})},y={render:()=>e.jsx(k,{title:"Use content to set a string array to specify multi-line text watermark content.",children:e.jsx(o,{content:["Ant Design","Happy Working"],children:e.jsx("div",{style:{height:500}})})})},w={render:()=>{const[n]=t.useForm(),[a,j]=b.useState({content:"Ant Design",color:"rgba(0, 0, 0, 0.15)",fontSize:16,zIndex:11,rotate:-22,gap:[100,100],offset:void 0}),{content:s,color:r,fontSize:i,zIndex:A,rotate:l,gap:c,offset:D}=a,F={content:s,zIndex:A,rotate:l,gap:c,offset:D,font:{color:typeof r=="string"?r:typeof r=="object"&&"toRgbString"in r?r.toRgbString():String(r),fontSize:i}};return e.jsx(k,{title:"Preview the watermark effect by configuring custom parameters.",children:e.jsxs(I,{gap:"middle",children:[e.jsxs(o,{...F,children:[e.jsx(C.Paragraph,{children:"The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design."}),e.jsx(C.Paragraph,{children:"Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience."}),e.jsx(C.Paragraph,{children:"Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural."}),e.jsx("img",{style:{zIndex:10,width:"100%",maxWidth:800,position:"relative"},src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ",alt:"img"})]}),e.jsxs(t,{style:{width:280,flexShrink:0,borderLeft:"1px solid #eee",paddingInlineStart:16},form:n,layout:"vertical",initialValues:a,onValuesChange:(B,M)=>{j(M)},children:[e.jsx(t.Item,{name:"content",label:"Content",children:e.jsx(P,{placeholder:"请输入"})}),e.jsx(t.Item,{name:"color",label:"Color",children:e.jsx(E,{})}),e.jsx(t.Item,{name:"fontSize",label:"FontSize",children:e.jsx(v,{step:1,min:1,max:100})}),e.jsx(t.Item,{name:"zIndex",label:"zIndex",children:e.jsx(v,{step:1,min:0,max:100})}),e.jsx(t.Item,{name:"rotate",label:"Rotate",children:e.jsx(v,{step:1,min:-180,max:180})}),e.jsx(t.Item,{label:"Gap",style:{marginBottom:0},children:e.jsxs(I,{gap:"small",children:[e.jsx(t.Item,{name:["gap",0],children:e.jsx(m,{placeholder:"gapX",style:{width:"100%"}})}),e.jsx(t.Item,{name:["gap",1],children:e.jsx(m,{placeholder:"gapY",style:{width:"100%"}})})]})}),e.jsx(t.Item,{label:"Offset",style:{marginBottom:0},children:e.jsxs(I,{gap:"small",children:[e.jsx(t.Item,{name:["offset",0],children:e.jsx(m,{placeholder:"offsetLeft",style:{width:"100%"}})}),e.jsx(t.Item,{name:["offset",1],children:e.jsx(m,{placeholder:"offsetTop",style:{width:"100%"}})})]})})]})]})})}},S={render:()=>{const n={height:300,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(150, 150, 150, 0.2)"},a=e.jsx("div",{style:n,children:"A mock height"}),[j,s]=b.useState(!1),[r,i]=b.useState(!1),[A,l]=b.useState(!1),c=()=>{s(!1)},D=()=>{i(!1)},F=()=>{l(!1)};return e.jsx(k,{title:"Use in Modal and Drawer.",children:e.jsxs(e.Fragment,{children:[e.jsxs(I,{gap:"middle",children:[e.jsx(z,{type:"primary",onClick:()=>{s(!0)},children:"Show in Modal"}),e.jsx(z,{type:"primary",onClick:()=>{i(!0)},children:"Show in Drawer"}),e.jsx(z,{type:"primary",onClick:()=>{l(!0)},children:"Not Shown in Drawer"})]}),e.jsxs(o,{content:"Ant Design",children:[e.jsx(T,{destroyOnClose:!0,open:j,title:"Modal",onCancel:c,onOk:c,children:a}),e.jsx(W,{destroyOnClose:!0,open:r,title:"Drawer",onClose:D,children:a})]}),e.jsx(o,{content:"Ant Design",inherit:!1,children:e.jsx(W,{destroyOnClose:!0,open:A,title:"Drawer",onClose:F,children:a})})]})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: ['Watermark 1', 'Watermark 2', 'Watermark 3']
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    font: {
      fontFamily: 'Helvetica',
      fontSize: 16,
      color: 'rgba(255, 0, 0, 0.2)',
      textAlign: 'right'
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    gap: [200, 150]
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    offset: [100, 80]
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    rotate: 45
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="The most basic usage.">
        <Watermark content="Ant Design">
          <div style={{
          height: 500
        }} />
        </Watermark>
      </ExampleStory>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Use content to set a string array to specify multi-line text watermark content.">
        <Watermark content={['Ant Design', 'Happy Working']}>
          <div style={{
          height: 500
        }} />
        </Watermark>
      </ExampleStory>;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const H=["Primary","Content","Font","Gap","Offset","RotatedWatermark","ExampleBasic","ExampleMultiline","ExampleConfig","ExampleModalOrDrawer"];export{p as Content,x as ExampleBasic,w as ExampleConfig,S as ExampleModalOrDrawer,y as ExampleMultiline,h as Font,u as Gap,g as Offset,d as Primary,f as RotatedWatermark,H as __namedExportsOrder,_ as default};
