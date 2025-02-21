var ge=Object.defineProperty,xe=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var C=(n,o,t)=>o in n?ge(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,a=(n,o)=>{for(var t in o||(o={}))je.call(o,t)&&C(n,t,o[t]);if(U)for(var t of U(o))ve.call(o,t)&&C(n,t,o[t]);return n},s=(n,o)=>xe(n,he(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{r as A}from"./index-CNk6hRaE.js";import{A as r,I as c,b as l,B as b,g as L}from"./NavigationItemsService-BDA9pJrk.js";import"./_baseClone-DBzvlRjn.js";import{E as p}from"./ExampleStory-CUt30IL7.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const qe={title:"Components/Not Prod Ready/Data Display/Avatar",component:r,args:{alt:"Avatar",gap:4,icon:e.jsx(c,{name:"alicorn",size:"lg",color:"white"}),shape:"circle",size:"default",src:void 0,srcSet:void 0,draggable:!0,crossOrigin:"",onError:()=>!0},argTypes:{crossOrigin:{control:"select",options:["anonymous","use-credentials",""]},shape:{control:"select",options:["circle","square"]},draggable:{control:"select",options:[!0,!1,"true","false"]},icon:{control:"select",options:["Users","Sparkles"],mapping:{Users:e.jsx(c,{name:"users"}),Sparkles:e.jsx(c,{name:"predictions",variant:"duo-tone"})}}}},d={},m={args:{shape:"square"}},u={args:{size:"large"}},g={args:{size:"small"}},x={args:{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:120}}},h={args:{icon:"Sparkles"}},j={render:()=>e.jsx(p,{title:"Four sizes and two shapes are available.",children:e.jsxs(l,{direction:"vertical",size:16,children:[e.jsxs(l,{wrap:!0,size:16,children:[e.jsx(r,{size:64,icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{size:"large",icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{size:"small",icon:e.jsx(c,{name:"alicorn"})})]}),e.jsxs(l,{wrap:!0,size:16,children:[e.jsx(r,{shape:"square",size:64,icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{shape:"square",size:"large",icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{shape:"square",icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{shape:"square",size:"small",icon:e.jsx(c,{name:"alicorn"})})]})]})})},v={render:()=>{const n="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";return e.jsx(p,{title:"Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.",children:e.jsxs(l,{size:16,wrap:!0,children:[e.jsx(r,{icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{children:"U"}),e.jsx(r,{size:40,children:"USER"}),e.jsx(r,{src:n}),e.jsx(r,{src:e.jsx("img",{src:n,alt:"avatar"})}),e.jsx(r,{style:{backgroundColor:"#fde3cf",color:"#f56a00"},children:"U"}),e.jsx(r,{style:{backgroundColor:"#87d068"},icon:e.jsx(c,{name:"alicorn"})})]})})}},z={render:()=>e.jsx(p,{title:"Usually used for reminders and notifications.",children:e.jsxs(l,{size:24,children:[e.jsx(b,{count:1,children:e.jsx(r,{shape:"square",icon:e.jsx(c,{name:"alicorn"})})}),e.jsx(b,{dot:!0,children:e.jsx(r,{shape:"square",icon:e.jsx(c,{name:"alicorn"})})})]})})},S={render:()=>e.jsx(p,{title:"Avatar size can be automatically adjusted based on the screen size.",children:e.jsx(r,{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100},icon:e.jsx(c,{name:"alicorn"})})})},y={render:()=>{const n=["Edward","U","Lucy","Tom"],o=["#f56a00","#7265e6","#ffbf00","#00a2ae"],t=[4,3,2,1],[f,ie]=A.useState(n[0]),[le,pe]=A.useState(o[0]),[E,de]=A.useState(t[0]),me=()=>{const i=n.indexOf(f);ie(i<n.length-1?n[i+1]:n[0]),pe(i<o.length-1?o[i+1]:o[0])},ue=()=>{const i=t.indexOf(E);de(i<t.length-1?t[i+1]:t[0])};return e.jsxs(p,{title:"For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use gap to set the unit distance between left and right sides.",children:[e.jsx(r,{style:{backgroundColor:le,verticalAlign:"middle"},size:"large",gap:E,children:f}),e.jsx(L,{size:"small",style:{margin:"0 16px",verticalAlign:"middle"},onClick:me,children:"ChangeUser"}),e.jsx(L,{size:"small",style:{verticalAlign:"middle"},onClick:ue,children:"changeGap"})]})}};var w,I,q;d.parameters=s(a({},d.parameters),{docs:s(a({},(w=d.parameters)==null?void 0:w.docs),{source:a({originalSource:"{}"},(q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:q.source)})});var k,G,B;m.parameters=s(a({},m.parameters),{docs:s(a({},(k=m.parameters)==null?void 0:k.docs),{source:a({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(B=(G=m.parameters)==null?void 0:G.docs)==null?void 0:B.source)})});var R,O,F;u.parameters=s(a({},u.parameters),{docs:s(a({},(R=u.parameters)==null?void 0:R.docs),{source:a({originalSource:`{
  args: {
    size: 'large'
  }
}`},(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source)})});var P,T,D;g.parameters=s(a({},g.parameters),{docs:s(a({},(P=g.parameters)==null?void 0:P.docs),{source:a({originalSource:`{
  args: {
    size: 'small'
  }
}`},(D=(T=g.parameters)==null?void 0:T.docs)==null?void 0:D.source)})});var K,H,M;x.parameters=s(a({},x.parameters),{docs:s(a({},(K=x.parameters)==null?void 0:K.docs),{source:a({originalSource:`{
  args: {
    size: {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 120
    }
  }
}`},(M=(H=x.parameters)==null?void 0:H.docs)==null?void 0:M.source)})});var W,Y,_;h.parameters=s(a({},h.parameters),{docs:s(a({},(W=h.parameters)==null?void 0:W.docs),{source:a({originalSource:`{
  args: {
    icon: 'Sparkles'
  }
}`},(_=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var N,J,Q;j.parameters=s(a({},j.parameters),{docs:s(a({},(N=j.parameters)==null?void 0:N.docs),{source:a({originalSource:`{
  render: () => {
    return <ExampleStory title="Four sizes and two shapes are available.">
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size={64} icon={<Icon name="alicorn" />} />
            <Avatar size="large" icon={<Icon name="alicorn" />} />
            <Avatar icon={<Icon name="alicorn" />} />
            <Avatar size="small" icon={<Icon name="alicorn" />} />
          </Space>
          <Space wrap size={16}>
            <Avatar shape="square" size={64} icon={<Icon name="alicorn" />} />
            <Avatar shape="square" size="large" icon={<Icon name="alicorn" />} />
            <Avatar shape="square" icon={<Icon name="alicorn" />} />
            <Avatar shape="square" size="small" icon={<Icon name="alicorn" />} />
          </Space>
        </Space>
      </ExampleStory>;
  }
}`},(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var V,X,Z;v.parameters=s(a({},v.parameters),{docs:s(a({},(V=v.parameters)==null?void 0:V.docs),{source:a({originalSource:`{
  render: () => {
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
    return <ExampleStory title="Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.">
        <Space size={16} wrap>
          <Avatar icon={<Icon name="alicorn" />} />
          <Avatar>U</Avatar>
          <Avatar size={40}>USER</Avatar>
          <Avatar src={url} />
          <Avatar src={<img src={url} alt="avatar" />} />
          <Avatar style={{
          backgroundColor: '#fde3cf',
          color: '#f56a00'
        }}>U</Avatar>
          <Avatar style={{
          backgroundColor: '#87d068'
        }} icon={<Icon name="alicorn" />} />
        </Space>
      </ExampleStory>;
  }
}`},(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source)})});var $,ee,ae;z.parameters=s(a({},z.parameters),{docs:s(a({},($=z.parameters)==null?void 0:$.docs),{source:a({originalSource:`{
  render: () => {
    return <ExampleStory title="Usually used for reminders and notifications.">
        <Space size={24}>
          <Badge count={1}>
            <Avatar shape="square" icon={<Icon name="alicorn" />} />
          </Badge>
          <Badge dot>
            <Avatar shape="square" icon={<Icon name="alicorn" />} />
          </Badge>
        </Space>
      </ExampleStory>;
  }
}`},(ae=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:ae.source)})});var se,re,ne;S.parameters=s(a({},S.parameters),{docs:s(a({},(se=S.parameters)==null?void 0:se.docs),{source:a({originalSource:`{
  render: () => {
    return <ExampleStory title="Avatar size can be automatically adjusted based on the screen size.">
        <Avatar size={{
        xs: 24,
        sm: 32,
        md: 40,
        lg: 64,
        xl: 80,
        xxl: 100
      }} icon={<Icon name="alicorn" />} />
      </ExampleStory>;
  }
}`},(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source)})});var oe,te,ce;y.parameters=s(a({},y.parameters),{docs:s(a({},(oe=y.parameters)==null?void 0:oe.docs),{source:a({originalSource:`{
  render: () => {
    const UserList = ['Edward', 'U', 'Lucy', 'Tom'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    const GapList = [4, 3, 2, 1];
    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
    const [gap, setGap] = useState(GapList[0]);
    const changeUser = (): void => {
      const index = UserList.indexOf(user);
      setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
      setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
    };
    const changeGap = (): void => {
      const index = GapList.indexOf(gap);
      setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
    };
    return <ExampleStory title="For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use gap to set the unit distance between left and right sides.">
        <Avatar style={{
        backgroundColor: color,
        verticalAlign: 'middle'
      }} size="large" gap={gap}>
          {user}
        </Avatar>
        <Button size="small" style={{
        margin: '0 16px',
        verticalAlign: 'middle'
      }} onClick={changeUser}>
          ChangeUser
        </Button>
        <Button size="small" style={{
        verticalAlign: 'middle'
      }} onClick={changeGap}>
          changeGap
        </Button>
      </ExampleStory>;
  }
}`},(ce=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ce.source)})});const ke=["Primary","Square","Large","Small","CustomSizes","CustomIcon","ExampleBasic","ExampleTypes","ExampleWithBadge","ExampleResponsive","ExampleAutosetFontSize"];export{h as CustomIcon,x as CustomSizes,y as ExampleAutosetFontSize,j as ExampleBasic,S as ExampleResponsive,v as ExampleTypes,z as ExampleWithBadge,u as Large,d as Primary,g as Small,m as Square,ke as __namedExportsOrder,qe as default};
