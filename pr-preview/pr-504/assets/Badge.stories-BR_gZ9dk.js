var Oe=Object.defineProperty,Re=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var T=(a,o,n)=>o in a?Oe(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,t=(a,o)=>{for(var n in o||(o={}))Ze.call(o,n)&&T(a,n,o[n]);if(q)for(var n of q(o))Ie.call(o,n)&&T(a,n,o[n]);return a},s=(a,o)=>Re(a,Pe(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{B as r,b as l,A as c,I as Ee,e as ze,c as z,C as Ue,d as A}from"./GlobalNavigation-r8xqL8Wz.js";import{E as i}from"./ExampleStory-D_C4hgcK.js";import"./_baseClone-DBzvlRjn.js";import{r as k}from"./index-CNk6hRaE.js";const _e={title:"Components/Data Display/Badge",component:r,args:{color:"",count:5,classNames:void 0,dot:!1,offset:void 0,overflowCount:99,showZero:!1,size:"default",status:void 0,styles:void 0,text:void 0,title:""},argTypes:{size:{control:"select",options:["default","small"]},status:{control:"select",options:["success","processing","default","error","warning"]}}},u={},p={args:{dot:!0}},m={args:{size:"small"}},g={args:{overflowCount:2}},h={args:{color:"#f60"}},x={args:{text:"Custom Text"}},f={args:{title:"Custom Hovering Text"}},S={render:()=>e.jsx(i,{title:"Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it. Or add a custom icon.",children:e.jsxs(l,{size:"middle",children:[e.jsx(r,{count:5,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(r,{count:0,showZero:!0,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(r,{count:e.jsx(Ee,{name:"mpLogo"}),children:e.jsx(c,{shape:"square",size:"large"})})]})})},w={render:()=>{const[a,o]=k.useState(!0);return e.jsx(i,{title:"Used in standalone when children is empty.",children:e.jsxs(l,{children:[e.jsx(ze,{checked:a,onChange:()=>{o(!a)}}),e.jsx(r,{count:a?11:0,showZero:!0,color:"#faad14"}),e.jsx(r,{count:a?25:0}),e.jsx(r,{count:a?e.jsx(Ee,{name:"mpLogo"}):0}),e.jsx(r,{className:"site-badge-count-109",count:a?109:0,style:{backgroundColor:"#52c41a"}})]})})}},j={render:()=>e.jsx(i,{title:"overflowCount+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99.",children:e.jsxs(l,{size:"large",children:[e.jsx(r,{count:99,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(r,{count:100,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(r,{count:99,overflowCount:10,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(r,{count:1e3,overflowCount:999,children:e.jsx(c,{shape:"square",size:"large"})})]})})},C={render:()=>{const[a,o]=k.useState(5),[n,ke]=k.useState(!0),qe=()=>{o(a+1)},Te=()=>{let d=a-1;d<0&&(d=0),o(d)},Ae=()=>{const d=Math.floor(Math.random()*100);o(d)},De=d=>{ke(d)};return e.jsx(i,{title:"The count will be animated as it changes.",children:e.jsxs(l,{direction:"vertical",children:[e.jsxs(l,{size:"large",children:[e.jsx(r,{count:a,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsxs(z.Group,{children:[e.jsx(z,{onClick:Te,icon:"-"}),e.jsx(z,{onClick:qe,icon:"+"}),e.jsx(z,{onClick:Ae,icon:"?"})]})]}),e.jsxs(l,{size:"large",children:[e.jsx(r,{dot:n,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(ze,{onChange:De,checked:n})]})]})})}},B={render:()=>e.jsx(i,{title:"Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.",children:e.jsx(r,{count:5,offset:[10,10],children:e.jsx(c,{shape:"square",size:"large"})})})},b={render:()=>e.jsxs(i,{title:"Standalone badge with status.",children:[e.jsxs(l,{children:[e.jsx(r,{status:"success"}),e.jsx(r,{status:"error"}),e.jsx(r,{status:"default"}),e.jsx(r,{status:"processing"}),e.jsx(r,{status:"warning"})]}),e.jsx("br",{}),e.jsxs(l,{direction:"vertical",children:[e.jsx(r,{status:"success",text:"Success"}),e.jsx(r,{status:"error",text:"Error"}),e.jsx(r,{status:"default",text:"Default"}),e.jsx(r,{status:"processing",text:"Processing"}),e.jsx(r,{status:"warning",text:"Warning"})]})]})},v={render:()=>e.jsx(i,{title:"Use ribbon badge.",children:e.jsx(l,{direction:"vertical",size:"middle",style:{width:"200px"},children:e.jsx(r.Ribbon,{text:"Ribbon",children:e.jsx(Ue,{title:"Card Title",size:"small",children:"Card Inner text"})})})})},y={render:()=>e.jsx(i,{title:"The badge can be wrapped with a tag to make it linkable.",children:e.jsx("a",{children:e.jsx(r,{count:5,children:e.jsx(c,{shape:"square",size:"large"})})})})},E={render:()=>{const a=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];return e.jsxs(i,{title:"We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.",children:[e.jsx(A,{orientation:"left",children:"Presets"}),e.jsx(l,{direction:"vertical",children:a.map(o=>e.jsx(r,{color:o,text:o},o))}),e.jsx(A,{orientation:"left",children:"Custom"}),e.jsxs(l,{direction:"vertical",children:[e.jsx(r,{color:"#f50",text:"#f50"}),e.jsx(r,{color:"rgb(45, 183, 245)",text:"rgb(45, 183, 245)"}),e.jsx(r,{color:"hsl(102, 53%, 61%)",text:"hsl(102, 53%, 61%)"}),e.jsx(r,{color:"hwb(205 6% 9%)",text:"hwb(205 6% 9%)"})]})]})}};var D,O,R;u.parameters=s(t({},u.parameters),{docs:s(t({},(D=u.parameters)==null?void 0:D.docs),{source:t({originalSource:"{}"},(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source)})});var P,Z,I;p.parameters=s(t({},p.parameters),{docs:s(t({},(P=p.parameters)==null?void 0:P.docs),{source:t({originalSource:`{
  args: {
    dot: true
  }
}`},(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source)})});var U,_,M;m.parameters=s(t({},m.parameters),{docs:s(t({},(U=m.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    size: 'small'
  }
}`},(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source)})});var H,L,W;g.parameters=s(t({},g.parameters),{docs:s(t({},(H=g.parameters)==null?void 0:H.docs),{source:t({originalSource:`{
  args: {
    overflowCount: 2
  }
}`},(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source)})});var G,N,Y;h.parameters=s(t({},h.parameters),{docs:s(t({},(G=h.parameters)==null?void 0:G.docs),{source:t({originalSource:`{
  args: {
    color: '#f60'
  }
}`},(Y=(N=h.parameters)==null?void 0:N.docs)==null?void 0:Y.source)})});var F,J,K;x.parameters=s(t({},x.parameters),{docs:s(t({},(F=x.parameters)==null?void 0:F.docs),{source:t({originalSource:`{
  args: {
    text: 'Custom Text'
  }
}`},(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,V,X;f.parameters=s(t({},f.parameters),{docs:s(t({},(Q=f.parameters)==null?void 0:Q.docs),{source:t({originalSource:`{
  args: {
    title: 'Custom Hovering Text'
  }
}`},(X=(V=f.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var $,ee,te;S.parameters=s(t({},S.parameters),{docs:s(t({},($=S.parameters)==null?void 0:$.docs),{source:t({originalSource:`{
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
}`},(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var se,re,ae;w.parameters=s(t({},w.parameters),{docs:s(t({},(se=w.parameters)==null?void 0:se.docs),{source:t({originalSource:`{
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
}`},(ae=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ae.source)})});var oe,ne,ce;j.parameters=s(t({},j.parameters),{docs:s(t({},(oe=j.parameters)==null?void 0:oe.docs),{source:t({originalSource:`{
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
}`},(ce=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ce.source)})});var le,ie,de;C.parameters=s(t({},C.parameters),{docs:s(t({},(le=C.parameters)==null?void 0:le.docs),{source:t({originalSource:`{
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
}`},(de=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:de.source)})});var ue,pe,me;B.parameters=s(t({},B.parameters),{docs:s(t({},(ue=B.parameters)==null?void 0:ue.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.">
        <Badge count={5} offset={[10, 10]}>
          <Avatar shape="square" size="large" />
        </Badge>
      </ExampleStory>;
  }
}`},(me=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var ge,he,xe;b.parameters=s(t({},b.parameters),{docs:s(t({},(ge=b.parameters)==null?void 0:ge.docs),{source:t({originalSource:`{
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
}`},(xe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:xe.source)})});var fe,Se,we;v.parameters=s(t({},v.parameters),{docs:s(t({},(fe=v.parameters)==null?void 0:fe.docs),{source:t({originalSource:`{
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
}`},(we=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:we.source)})});var je,Ce,Be;y.parameters=s(t({},y.parameters),{docs:s(t({},(je=y.parameters)==null?void 0:je.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="The badge can be wrapped with a tag to make it linkable.">
        <a>
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </a>
      </ExampleStory>;
  }
}`},(Be=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source)})});var be,ve,ye;E.parameters=s(t({},E.parameters),{docs:s(t({},(be=E.parameters)==null?void 0:be.docs),{source:t({originalSource:`{
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
}`},(ye=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:ye.source)})});const Me=["Primary","DotBadge","SmallSize","OverflowCount","CustomColor","CustomText","HoverTitle","ExampleBasic","ExampleStandalone","ExampleOverflowCount","ExampleDynamic","ExampleOffset","ExampleStatus","ExampleRibbon","ExampleClickable","ExampleColors"],Fe=Object.freeze(Object.defineProperty({__proto__:null,CustomColor:h,CustomText:x,DotBadge:p,ExampleBasic:S,ExampleClickable:y,ExampleColors:E,ExampleDynamic:C,ExampleOffset:B,ExampleOverflowCount:j,ExampleRibbon:v,ExampleStandalone:w,ExampleStatus:b,HoverTitle:f,OverflowCount:g,Primary:u,SmallSize:m,__namedExportsOrder:Me,default:_e},Symbol.toStringTag,{value:"Module"}));export{Fe as B};
