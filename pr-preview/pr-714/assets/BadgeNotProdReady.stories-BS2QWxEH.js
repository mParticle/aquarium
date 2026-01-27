import{B as o,j as e,S as s,A as t,I as z,y as b,a0 as E,i as l,h as O,x as y}from"./iframe-D7Ys59RG.js";import{E as n}from"./ExampleStory-KHWp24Wn.js";import"./preload-helper-PPVm8Dsz.js";const I={title:"Components/Not Prod Ready/Data Display/Badge",component:o,args:{color:"",count:5,classNames:void 0,dot:!1,offset:void 0,overflowCount:99,showZero:!1,size:"default",status:void 0,styles:void 0,text:void 0,title:""},argTypes:{size:{control:"select",options:["default","small"]},status:{control:"select",options:["success","processing","default","error","warning"]}}},i={},d={args:{size:"small"}},u={args:{overflowCount:2}},p={args:{color:"#f60"}},m={args:{text:"Custom Text"}},h={args:{title:"Custom Hovering Text"}},g={render:()=>e.jsx(n,{title:"Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it. Or add a custom icon.",children:e.jsxs(s,{size:"middle",children:[e.jsx(o,{count:5,children:e.jsx(t,{shape:"square",size:"large"})}),e.jsx(o,{count:0,showZero:!0,children:e.jsx(t,{shape:"square",size:"large"})}),e.jsx(o,{count:e.jsx(z,{name:"mpLogo"}),children:e.jsx(t,{shape:"square",size:"large"})})]})})},x={render:()=>{const[r,a]=b.useState(!0);return e.jsx(n,{title:"Used in standalone when children is empty.",children:e.jsxs(s,{children:[e.jsx(E,{checked:r,onChange:()=>{a(!r)}}),e.jsx(o,{count:r?11:0,showZero:!0,color:"#faad14"}),e.jsx(o,{count:r?25:0}),e.jsx(o,{count:r?e.jsx(z,{name:"mpLogo"}):0}),e.jsx(o,{className:"site-badge-count-109",count:r?109:0,style:{backgroundColor:"#52c41a"}})]})})}},f={render:()=>e.jsx(n,{title:"overflowCount+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99.",children:e.jsxs(s,{size:"large",children:[e.jsx(o,{count:99,children:e.jsx(t,{shape:"square",size:"large"})}),e.jsx(o,{count:100,children:e.jsx(t,{shape:"square",size:"large"})}),e.jsx(o,{count:99,overflowCount:10,children:e.jsx(t,{shape:"square",size:"large"})}),e.jsx(o,{count:1e3,overflowCount:999,children:e.jsx(t,{shape:"square",size:"large"})})]})})},w={render:()=>{const[r,a]=b.useState(5),[B,k]=b.useState(!0),q=()=>{a(r+1)},T=()=>{let c=r-1;c<0&&(c=0),a(c)},A=()=>{const c=Math.floor(Math.random()*100);a(c)},D=c=>{k(c)};return e.jsx(n,{title:"The count will be animated as it changes.",children:e.jsxs(s,{orientation:"vertical",children:[e.jsxs(s,{size:"large",children:[e.jsx(o,{count:r,children:e.jsx(t,{shape:"square",size:"large"})}),e.jsxs(l.Group,{children:[e.jsx(l,{onClick:T,icon:"-"}),e.jsx(l,{onClick:q,icon:"+"}),e.jsx(l,{onClick:A,icon:"?"})]})]}),e.jsxs(s,{size:"large",children:[e.jsx(o,{dot:B,children:e.jsx(t,{shape:"square",size:"large"})}),e.jsx(E,{onChange:D,checked:B})]})]})})}},S={render:()=>e.jsx(n,{title:"Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.",children:e.jsx(o,{count:5,offset:[10,10],children:e.jsx(t,{shape:"square",size:"large"})})})},C={render:()=>e.jsx(n,{title:"Use ribbon badge.",children:e.jsx(s,{orientation:"vertical",size:"middle",style:{width:"200px"},children:e.jsx(o.Ribbon,{text:"Ribbon",children:e.jsx(O,{title:"Card Title",size:"small",children:"Card Inner text"})})})})},j={render:()=>e.jsx(n,{title:"The badge can be wrapped with a tag to make it linkable.",children:e.jsx("a",{children:e.jsx(o,{count:5,children:e.jsx(t,{shape:"square",size:"large"})})})})},v={render:()=>{const r=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];return e.jsxs(n,{title:"We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.",children:[e.jsx(y,{titlePlacement:"left",children:"Presets"}),e.jsx(s,{orientation:"vertical",children:r.map(a=>e.jsx(o,{color:a,text:a},a))}),e.jsx(y,{titlePlacement:"left",children:"Custom"}),e.jsxs(s,{orientation:"vertical",children:[e.jsx(o,{color:"#f50",text:"#f50"}),e.jsx(o,{color:"rgb(45, 183, 245)",text:"rgb(45, 183, 245)"}),e.jsx(o,{color:"hsl(102, 53%, 61%)",text:"hsl(102, 53%, 61%)"}),e.jsx(o,{color:"hwb(205 6% 9%)",text:"hwb(205 6% 9%)"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    overflowCount: 2
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#f60'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Custom Text'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Hovering Text'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it. Or add a custom icon.">
        <Space size="middle">
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={0} showZero>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={<Icon name="mpLogo" />}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Space>
      </ExampleStory>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <ExampleStory title="Used in standalone when children is empty.">
        <Space>
          <Switch checked={show} onChange={() => {
          setShow(!show);
        }} />
          <Badge count={show ? 11 : 0} showZero color="#faad14" />
          <Badge count={show ? 25 : 0} />
          <Badge count={show ? <Icon name="mpLogo" /> : 0} />
          <Badge className="site-badge-count-109" count={show ? 109 : 0} style={{
          backgroundColor: '#52c41a'
        }} />
        </Space>
      </ExampleStory>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="overflowCount+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99.">
        <Space size="large">
          <Badge count={99}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={100}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={99} overflowCount={10}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={1000} overflowCount={999}>
            <Avatar shape="square" size="large" />
          </Badge>
        </Space>
      </ExampleStory>;
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(5);
    const [show, setShow] = useState(true);
    const increase = () => {
      setCount(count + 1);
    };
    const decline = () => {
      let newCount = count - 1;
      if (newCount < 0) {
        newCount = 0;
      }
      setCount(newCount);
    };
    const random = () => {
      const newCount = Math.floor(Math.random() * 100);
      setCount(newCount);
    };
    const onChange = (checked: boolean) => {
      setShow(checked);
    };
    return <ExampleStory title="The count will be animated as it changes.">
        <Space orientation="vertical">
          <Space size="large">
            <Badge count={count}>
              <Avatar shape="square" size="large" />
            </Badge>
            <Button.Group>
              <Button onClick={decline} icon="-" />
              <Button onClick={increase} icon="+" />
              <Button onClick={random} icon="?" />
            </Button.Group>
          </Space>
          <Space size="large">
            <Badge dot={show}>
              <Avatar shape="square" size="large" />
            </Badge>
            <Switch onChange={onChange} checked={show} />
          </Space>
        </Space>
      </ExampleStory>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.">
        <Badge count={5} offset={[10, 10]}>
          <Avatar shape="square" size="large" />
        </Badge>
      </ExampleStory>;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Use ribbon badge.">
        <Space orientation="vertical" size="middle" style={{
        width: '200px'
      }}>
          <Badge.Ribbon text="Ribbon">
            <Card title="Card Title" size="small">
              Card Inner text
            </Card>
          </Badge.Ribbon>
        </Space>
      </ExampleStory>;
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="The badge can be wrapped with a tag to make it linkable.">
        <a>
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </a>
      </ExampleStory>;
  }
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];
    return <ExampleStory title="We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.">
        <Divider titlePlacement="left">Presets</Divider>
        <Space orientation="vertical">
          {colors.map(color => <Badge key={color} color={color} text={color} />)}
        </Space>
        <Divider titlePlacement="left">Custom</Divider>
        <Space orientation="vertical">
          <Badge color="#f50" text="#f50" />
          <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
          <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
          <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
        </Space>
      </ExampleStory>;
  }
}`,...v.parameters?.docs?.source}}};const U=["Primary","SmallSize","OverflowCount","CustomColor","CustomText","HoverTitle","ExampleBasic","ExampleStandalone","ExampleOverflowCount","ExampleDynamic","ExampleOffset","ExampleRibbon","ExampleClickable","ExampleColors"];export{p as CustomColor,m as CustomText,g as ExampleBasic,j as ExampleClickable,v as ExampleColors,w as ExampleDynamic,S as ExampleOffset,f as ExampleOverflowCount,C as ExampleRibbon,x as ExampleStandalone,h as HoverTitle,u as OverflowCount,i as Primary,d as SmallSize,U as __namedExportsOrder,I as default};
