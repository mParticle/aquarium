var Oe=Object.defineProperty,Re=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var T=(a,o,n)=>o in a?Oe(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,t=(a,o)=>{for(var n in o||(o={}))Ie.call(o,n)&&T(a,n,o[n]);if(q)for(var n of q(o))Pe.call(o,n)&&T(a,n,o[n]);return a},r=(a,o)=>Re(a,Ze(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{f as s,c as i,A as c,I as ye,g as ze,B as u,h as Ue,b as A}from"./GlobalNavigation-DsscZZet.js";import{E as l}from"./ExampleStory-CGL8sr8h.js";import"./ConfigProvider-C77M1HMj.js";import"./_baseClone-BjCwUuX-.js";import{r as k}from"./index-CNk6hRaE.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const st={title:"Components/Data Display/Badge",component:s,args:{color:"",count:5,classNames:void 0,dot:!1,offset:void 0,overflowCount:99,showZero:!1,size:"default",status:void 0,styles:void 0,text:void 0,title:""},argTypes:{size:{control:"select",options:["default","small"]},status:{control:"select",options:["success","processing","default","error","warning"]}}},p={},m={args:{dot:!0}},g={args:{size:"small"}},h={args:{overflowCount:2}},x={args:{color:"#f60"}},f={args:{text:"Custom Text"}},S={args:{title:"Custom Hovering Text"}},w={render:()=>e.jsx(l,{title:"Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it. Or add a custom icon.",children:e.jsxs(i,{size:"middle",children:[e.jsx(s,{count:5,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:0,showZero:!0,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:e.jsx(ye,{name:"mpLogo"}),children:e.jsx(c,{shape:"square",size:"large"})})]})})},j={render:()=>{const[a,o]=k.useState(!0);return e.jsx(l,{title:"Used in standalone when children is empty.",children:e.jsxs(i,{children:[e.jsx(ze,{checked:a,onChange:()=>{o(!a)}}),e.jsx(s,{count:a?11:0,showZero:!0,color:"#faad14"}),e.jsx(s,{count:a?25:0}),e.jsx(s,{count:a?e.jsx(ye,{name:"mpLogo"}):0}),e.jsx(s,{className:"site-badge-count-109",count:a?109:0,style:{backgroundColor:"#52c41a"}})]})})}},C={render:()=>e.jsx(l,{title:"overflowCount+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99.",children:e.jsxs(i,{size:"large",children:[e.jsx(s,{count:99,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:100,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:99,overflowCount:10,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:1e3,overflowCount:999,children:e.jsx(c,{shape:"square",size:"large"})})]})})},B={render:()=>{const[a,o]=k.useState(5),[n,ke]=k.useState(!0),qe=()=>{o(a+1)},Te=()=>{let d=a-1;d<0&&(d=0),o(d)},Ae=()=>{const d=Math.floor(Math.random()*100);o(d)},De=d=>{ke(d)};return e.jsx(l,{title:"The count will be animated as it changes.",children:e.jsxs(i,{direction:"vertical",children:[e.jsxs(i,{size:"large",children:[e.jsx(s,{count:a,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsxs(u.Group,{children:[e.jsx(u,{onClick:Te,icon:"-"}),e.jsx(u,{onClick:qe,icon:"+"}),e.jsx(u,{onClick:Ae,icon:"?"})]})]}),e.jsxs(i,{size:"large",children:[e.jsx(s,{dot:n,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(ze,{onChange:De,checked:n})]})]})})}},b={render:()=>e.jsx(l,{title:"Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.",children:e.jsx(s,{count:5,offset:[10,10],children:e.jsx(c,{shape:"square",size:"large"})})})},v={render:()=>e.jsxs(l,{title:"Standalone badge with status.",children:[e.jsxs(i,{children:[e.jsx(s,{status:"success"}),e.jsx(s,{status:"error"}),e.jsx(s,{status:"default"}),e.jsx(s,{status:"processing"}),e.jsx(s,{status:"warning"})]}),e.jsx("br",{}),e.jsxs(i,{direction:"vertical",children:[e.jsx(s,{status:"success",text:"Success"}),e.jsx(s,{status:"error",text:"Error"}),e.jsx(s,{status:"default",text:"Default"}),e.jsx(s,{status:"processing",text:"Processing"}),e.jsx(s,{status:"warning",text:"Warning"})]})]})},E={render:()=>e.jsx(l,{title:"Use ribbon badge.",children:e.jsx(i,{direction:"vertical",size:"middle",style:{width:"200px"},children:e.jsx(s.Ribbon,{text:"Ribbon",children:e.jsx(Ue,{title:"Card Title",size:"small",children:"Card Inner text"})})})})},y={render:()=>e.jsx(l,{title:"The badge can be wrapped with a tag to make it linkable.",children:e.jsx("a",{children:e.jsx(s,{count:5,children:e.jsx(c,{shape:"square",size:"large"})})})})},z={render:()=>{const a=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];return e.jsxs(l,{title:"We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.",children:[e.jsx(A,{orientation:"left",children:"Presets"}),e.jsx(i,{direction:"vertical",children:a.map(o=>e.jsx(s,{color:o,text:o},o))}),e.jsx(A,{orientation:"left",children:"Custom"}),e.jsxs(i,{direction:"vertical",children:[e.jsx(s,{color:"#f50",text:"#f50"}),e.jsx(s,{color:"rgb(45, 183, 245)",text:"rgb(45, 183, 245)"}),e.jsx(s,{color:"hsl(102, 53%, 61%)",text:"hsl(102, 53%, 61%)"}),e.jsx(s,{color:"hwb(205 6% 9%)",text:"hwb(205 6% 9%)"})]})]})}};var D,O,R;p.parameters=r(t({},p.parameters),{docs:r(t({},(D=p.parameters)==null?void 0:D.docs),{source:t({originalSource:"{}"},(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source)})});var Z,I,P;m.parameters=r(t({},m.parameters),{docs:r(t({},(Z=m.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
  args: {
    dot: true
  }
}`},(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source)})});var U,H,L;g.parameters=r(t({},g.parameters),{docs:r(t({},(U=g.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    size: 'small'
  }
}`},(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source)})});var M,W,G;h.parameters=r(t({},h.parameters),{docs:r(t({},(M=h.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  args: {
    overflowCount: 2
  }
}`},(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source)})});var N,Y,_;x.parameters=r(t({},x.parameters),{docs:r(t({},(N=x.parameters)==null?void 0:N.docs),{source:t({originalSource:`{
  args: {
    color: '#f60'
  }
}`},(_=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var F,J,K;f.parameters=r(t({},f.parameters),{docs:r(t({},(F=f.parameters)==null?void 0:F.docs),{source:t({originalSource:`{
  args: {
    text: 'Custom Text'
  }
}`},(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,V,X;S.parameters=r(t({},S.parameters),{docs:r(t({},(Q=S.parameters)==null?void 0:Q.docs),{source:t({originalSource:`{
  args: {
    title: 'Custom Hovering Text'
  }
}`},(X=(V=S.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var $,ee,te;w.parameters=r(t({},w.parameters),{docs:r(t({},($=w.parameters)==null?void 0:$.docs),{source:t({originalSource:`{
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
}`},(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var re,se,ae;j.parameters=r(t({},j.parameters),{docs:r(t({},(re=j.parameters)==null?void 0:re.docs),{source:t({originalSource:`{
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
}`},(ae=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ae.source)})});var oe,ne,ce;C.parameters=r(t({},C.parameters),{docs:r(t({},(oe=C.parameters)==null?void 0:oe.docs),{source:t({originalSource:`{
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
}`},(ce=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ce.source)})});var ie,le,de;B.parameters=r(t({},B.parameters),{docs:r(t({},(ie=B.parameters)==null?void 0:ie.docs),{source:t({originalSource:`{
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
        <Space direction="vertical">
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
}`},(de=(le=B.parameters)==null?void 0:le.docs)==null?void 0:de.source)})});var ue,pe,me;b.parameters=r(t({},b.parameters),{docs:r(t({},(ue=b.parameters)==null?void 0:ue.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.">
        <Badge count={5} offset={[10, 10]}>
          <Avatar shape="square" size="large" />
        </Badge>
      </ExampleStory>;
  }
}`},(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var ge,he,xe;v.parameters=r(t({},v.parameters),{docs:r(t({},(ge=v.parameters)==null?void 0:ge.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Standalone badge with status.">
        <Space>
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="default" />
          <Badge status="processing" />
          <Badge status="warning" />
        </Space>
        <br />
        <Space direction="vertical">
          <Badge status="success" text="Success" />
          <Badge status="error" text="Error" />
          <Badge status="default" text="Default" />
          <Badge status="processing" text="Processing" />
          <Badge status="warning" text="Warning" />
        </Space>
      </ExampleStory>;
  }
}`},(xe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:xe.source)})});var fe,Se,we;E.parameters=r(t({},E.parameters),{docs:r(t({},(fe=E.parameters)==null?void 0:fe.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Use ribbon badge.">
        <Space direction="vertical" size="middle" style={{
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
}`},(we=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:we.source)})});var je,Ce,Be;y.parameters=r(t({},y.parameters),{docs:r(t({},(je=y.parameters)==null?void 0:je.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="The badge can be wrapped with a tag to make it linkable.">
        <a>
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </a>
      </ExampleStory>;
  }
}`},(Be=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source)})});var be,ve,Ee;z.parameters=r(t({},z.parameters),{docs:r(t({},(be=z.parameters)==null?void 0:be.docs),{source:t({originalSource:`{
  render: () => {
    const colors = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];
    return <ExampleStory title="We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.">
        <Divider orientation="left">Presets</Divider>
        <Space direction="vertical">
          {colors.map(color => <Badge key={color} color={color} text={color} />)}
        </Space>
        <Divider orientation="left">Custom</Divider>
        <Space direction="vertical">
          <Badge color="#f50" text="#f50" />
          <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
          <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
          <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
        </Space>
      </ExampleStory>;
  }
}`},(Ee=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source)})});const at=["Primary","DotBadge","SmallSize","OverflowCount","CustomColor","CustomText","HoverTitle","ExampleBasic","ExampleStandalone","ExampleOverflowCount","ExampleDynamic","ExampleOffset","ExampleStatus","ExampleRibbon","ExampleClickable","ExampleColors"];export{x as CustomColor,f as CustomText,m as DotBadge,w as ExampleBasic,y as ExampleClickable,z as ExampleColors,B as ExampleDynamic,b as ExampleOffset,C as ExampleOverflowCount,E as ExampleRibbon,j as ExampleStandalone,v as ExampleStatus,S as HoverTitle,h as OverflowCount,p as Primary,g as SmallSize,at as __namedExportsOrder,st as default};
