var ye=Object.defineProperty,ze=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var k=(t,a,n)=>a in t?ye(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(t,a)=>{for(var n in a||(a={}))ke.call(a,n)&&k(t,n,a[n]);if(E)for(var n of E(a))qe.call(a,n)&&k(t,n,a[n]);return t},o=(t,a)=>ze(t,Ee(a));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{B as s,a as i,A as c,I as we,v as Se,e as u,C as Te,b as q}from"./NavigationItemsService-DJaS36DY.js";import{E as l}from"./ExampleStory-BQ6ECSWc.js";import"./ErrorStateIcon-w4D1x5VF.js";import"./SuccessStateIcon-D6uerxEu.js";import"./WarningStateIcon-DR3bdROO.js";import"./_baseClone-CXAe4HsA.js";import{r as z}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./style-DZvg_om7.js";import"./WarningFilled-CZ1UPkPI.js";const Qe={title:"Components/Not Prod Ready/Data Display/Badge",component:s,args:{color:"",count:5,classNames:void 0,dot:!1,offset:void 0,overflowCount:99,showZero:!1,size:"default",status:void 0,styles:void 0,text:void 0,title:""},argTypes:{size:{control:"select",options:["default","small"]},status:{control:"select",options:["success","processing","default","error","warning"]}}},p={},m={args:{size:"small"}},h={args:{overflowCount:2}},g={args:{color:"#f60"}},x={args:{text:"Custom Text"}},f={args:{title:"Custom Hovering Text"}},w={render:()=>e.jsx(l,{title:"Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it. Or add a custom icon.",children:e.jsxs(i,{size:"middle",children:[e.jsx(s,{count:5,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:0,showZero:!0,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:e.jsx(we,{name:"mpLogo"}),children:e.jsx(c,{shape:"square",size:"large"})})]})})},S={render:()=>{const[t,a]=z.useState(!0);return e.jsx(l,{title:"Used in standalone when children is empty.",children:e.jsxs(i,{children:[e.jsx(Se,{checked:t,onChange:()=>{a(!t)}}),e.jsx(s,{count:t?11:0,showZero:!0,color:"#faad14"}),e.jsx(s,{count:t?25:0}),e.jsx(s,{count:t?e.jsx(we,{name:"mpLogo"}):0}),e.jsx(s,{className:"site-badge-count-109",count:t?109:0,style:{backgroundColor:"#52c41a"}})]})})}},C={render:()=>e.jsx(l,{title:"overflowCount+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99.",children:e.jsxs(i,{size:"large",children:[e.jsx(s,{count:99,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:100,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:99,overflowCount:10,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(s,{count:1e3,overflowCount:999,children:e.jsx(c,{shape:"square",size:"large"})})]})})},j={render:()=>{const[t,a]=z.useState(5),[n,Ce]=z.useState(!0),je=()=>{a(t+1)},ve=()=>{let d=t-1;d<0&&(d=0),a(d)},be=()=>{const d=Math.floor(Math.random()*100);a(d)},Be=d=>{Ce(d)};return e.jsx(l,{title:"The count will be animated as it changes.",children:e.jsxs(i,{direction:"vertical",children:[e.jsxs(i,{size:"large",children:[e.jsx(s,{count:t,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsxs(u.Group,{children:[e.jsx(u,{onClick:ve,icon:"-"}),e.jsx(u,{onClick:je,icon:"+"}),e.jsx(u,{onClick:be,icon:"?"})]})]}),e.jsxs(i,{size:"large",children:[e.jsx(s,{dot:n,children:e.jsx(c,{shape:"square",size:"large"})}),e.jsx(Se,{onChange:Be,checked:n})]})]})})}},v={render:()=>e.jsx(l,{title:"Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.",children:e.jsx(s,{count:5,offset:[10,10],children:e.jsx(c,{shape:"square",size:"large"})})})},b={render:()=>e.jsx(l,{title:"Use ribbon badge.",children:e.jsx(i,{direction:"vertical",size:"middle",style:{width:"200px"},children:e.jsx(s.Ribbon,{text:"Ribbon",children:e.jsx(Te,{title:"Card Title",size:"small",children:"Card Inner text"})})})})},B={render:()=>e.jsx(l,{title:"The badge can be wrapped with a tag to make it linkable.",children:e.jsx("a",{children:e.jsx(s,{count:5,children:e.jsx(c,{shape:"square",size:"large"})})})})},y={render:()=>{const t=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];return e.jsxs(l,{title:"We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.",children:[e.jsx(q,{orientation:"left",children:"Presets"}),e.jsx(i,{direction:"vertical",children:t.map(a=>e.jsx(s,{color:a,text:a},a))}),e.jsx(q,{orientation:"left",children:"Custom"}),e.jsxs(i,{direction:"vertical",children:[e.jsx(s,{color:"#f50",text:"#f50"}),e.jsx(s,{color:"rgb(45, 183, 245)",text:"rgb(45, 183, 245)"}),e.jsx(s,{color:"hsl(102, 53%, 61%)",text:"hsl(102, 53%, 61%)"}),e.jsx(s,{color:"hwb(205 6% 9%)",text:"hwb(205 6% 9%)"})]})]})}};var T,A,D;p.parameters=o(r({},p.parameters),{docs:o(r({},(T=p.parameters)==null?void 0:T.docs),{source:r({originalSource:"{}"},(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source)})});var O,R,Z;m.parameters=o(r({},m.parameters),{docs:o(r({},(O=m.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    size: 'small'
  }
}`},(Z=(R=m.parameters)==null?void 0:R.docs)==null?void 0:Z.source)})});var I,U,P;h.parameters=o(r({},h.parameters),{docs:o(r({},(I=h.parameters)==null?void 0:I.docs),{source:r({originalSource:`{
  args: {
    overflowCount: 2
  }
}`},(P=(U=h.parameters)==null?void 0:U.docs)==null?void 0:P.source)})});var H,L,M;g.parameters=o(r({},g.parameters),{docs:o(r({},(H=g.parameters)==null?void 0:H.docs),{source:r({originalSource:`{
  args: {
    color: '#f60'
  }
}`},(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source)})});var N,G,W;x.parameters=o(r({},x.parameters),{docs:o(r({},(N=x.parameters)==null?void 0:N.docs),{source:r({originalSource:`{
  args: {
    text: 'Custom Text'
  }
}`},(W=(G=x.parameters)==null?void 0:G.docs)==null?void 0:W.source)})});var Y,_,F;f.parameters=o(r({},f.parameters),{docs:o(r({},(Y=f.parameters)==null?void 0:Y.docs),{source:r({originalSource:`{
  args: {
    title: 'Custom Hovering Text'
  }
}`},(F=(_=f.parameters)==null?void 0:_.docs)==null?void 0:F.source)})});var J,K,Q;w.parameters=o(r({},w.parameters),{docs:o(r({},(J=w.parameters)==null?void 0:J.docs),{source:r({originalSource:`{
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
}`},(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var V,X,$;S.parameters=o(r({},S.parameters),{docs:o(r({},(V=S.parameters)==null?void 0:V.docs),{source:r({originalSource:`{
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
}`},($=(X=S.parameters)==null?void 0:X.docs)==null?void 0:$.source)})});var ee,re,oe;C.parameters=o(r({},C.parameters),{docs:o(r({},(ee=C.parameters)==null?void 0:ee.docs),{source:r({originalSource:`{
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
}`},(oe=(re=C.parameters)==null?void 0:re.docs)==null?void 0:oe.source)})});var te,ae,se;j.parameters=o(r({},j.parameters),{docs:o(r({},(te=j.parameters)==null?void 0:te.docs),{source:r({originalSource:`{
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
}`},(se=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:se.source)})});var ne,ce,ie;v.parameters=o(r({},v.parameters),{docs:o(r({},(ne=v.parameters)==null?void 0:ne.docs),{source:r({originalSource:`{
  render: () => {
    return <ExampleStory title="Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.">
        <Badge count={5} offset={[10, 10]}>
          <Avatar shape="square" size="large" />
        </Badge>
      </ExampleStory>;
  }
}`},(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source)})});var le,de,ue;b.parameters=o(r({},b.parameters),{docs:o(r({},(le=b.parameters)==null?void 0:le.docs),{source:r({originalSource:`{
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
}`},(ue=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ue.source)})});var pe,me,he;B.parameters=o(r({},B.parameters),{docs:o(r({},(pe=B.parameters)==null?void 0:pe.docs),{source:r({originalSource:`{
  render: () => {
    return <ExampleStory title="The badge can be wrapped with a tag to make it linkable.">
        <a>
          <Badge count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </a>
      </ExampleStory>;
  }
}`},(he=(me=B.parameters)==null?void 0:me.docs)==null?void 0:he.source)})});var ge,xe,fe;y.parameters=o(r({},y.parameters),{docs:o(r({},(ge=y.parameters)==null?void 0:ge.docs),{source:r({originalSource:`{
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
}`},(fe=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:fe.source)})});const Ve=["Primary","SmallSize","OverflowCount","CustomColor","CustomText","HoverTitle","ExampleBasic","ExampleStandalone","ExampleOverflowCount","ExampleDynamic","ExampleOffset","ExampleRibbon","ExampleClickable","ExampleColors"];export{g as CustomColor,x as CustomText,w as ExampleBasic,B as ExampleClickable,y as ExampleColors,j as ExampleDynamic,v as ExampleOffset,C as ExampleOverflowCount,b as ExampleRibbon,S as ExampleStandalone,f as HoverTitle,h as OverflowCount,p as Primary,m as SmallSize,Ve as __namedExportsOrder,Qe as default};
