var ge=Object.defineProperty,xe=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var U=(n,t,o)=>t in n?ge(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,a=(n,t)=>{for(var o in t||(t={}))je.call(t,o)&&U(n,o,t[o]);if(b)for(var o of b(t))ve.call(t,o)&&U(n,o,t[o]);return n},s=(n,t)=>xe(n,he(t));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{r as A}from"./index-CNk6hRaE.js";import{A as r,I as c,b as z,B as C,k as L}from"./GlobalNavigation-B0-Njj2b.js";import"./_baseClone-DBzvlRjn.js";import{E as y}from"./ExampleStory-O0x_-XlM.js";const Se={title:"Components/Data Display/Avatar",component:r,args:{alt:"Avatar",gap:4,icon:e.jsx(c,{name:"alicorn",size:"lg",color:"white"}),shape:"circle",size:"default",src:void 0,srcSet:void 0,draggable:!0,crossOrigin:"",onError:()=>!0},argTypes:{crossOrigin:{control:"select",options:["anonymous","use-credentials",""]},shape:{control:"select",options:["circle","square"]},draggable:{control:"select",options:[!0,!1,"true","false"]},icon:{control:"select",options:["Users","Sparkles"],mapping:{Users:e.jsx(c,{name:"users"}),Sparkles:e.jsx(c,{name:"predictions",variant:"duo-tone"})}}}},l={},d={args:{shape:"square"}},p={args:{size:"large"}},m={args:{size:"small"}},u={args:{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:120}}},g={args:{icon:"Sparkles"}},x={render:()=>e.jsx(y,{title:"Four sizes and two shapes are available.",children:e.jsxs(z,{direction:"vertical",size:16,children:[e.jsxs(z,{wrap:!0,size:16,children:[e.jsx(r,{size:64,icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{size:"large",icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{size:"small",icon:e.jsx(c,{name:"alicorn"})})]}),e.jsxs(z,{wrap:!0,size:16,children:[e.jsx(r,{shape:"square",size:64,icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{shape:"square",size:"large",icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{shape:"square",icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{shape:"square",size:"small",icon:e.jsx(c,{name:"alicorn"})})]})]})})},h={render:()=>{const n="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";return e.jsx(y,{title:"Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.",children:e.jsxs(z,{size:16,wrap:!0,children:[e.jsx(r,{icon:e.jsx(c,{name:"alicorn"})}),e.jsx(r,{children:"U"}),e.jsx(r,{size:40,children:"USER"}),e.jsx(r,{src:n}),e.jsx(r,{src:e.jsx("img",{src:n,alt:"avatar"})}),e.jsx(r,{style:{backgroundColor:"#fde3cf",color:"#f56a00"},children:"U"}),e.jsx(r,{style:{backgroundColor:"#87d068"},icon:e.jsx(c,{name:"alicorn"})})]})})}},j={render:()=>e.jsx(y,{title:"Usually used for reminders and notifications.",children:e.jsxs(z,{size:24,children:[e.jsx(C,{count:1,children:e.jsx(r,{shape:"square",icon:e.jsx(c,{name:"alicorn"})})}),e.jsx(C,{dot:!0,children:e.jsx(r,{shape:"square",icon:e.jsx(c,{name:"alicorn"})})})]})})},v={render:()=>e.jsx(y,{title:"Avatar size can be automatically adjusted based on the screen size.",children:e.jsx(r,{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100},icon:e.jsx(c,{name:"alicorn"})})})},S={render:()=>{const n=["Edward","U","Lucy","Tom"],t=["#f56a00","#7265e6","#ffbf00","#00a2ae"],o=[4,3,2,1],[f,ie]=A.useState(n[0]),[le,de]=A.useState(t[0]),[E,pe]=A.useState(o[0]),me=()=>{const i=n.indexOf(f);ie(i<n.length-1?n[i+1]:n[0]),de(i<t.length-1?t[i+1]:t[0])},ue=()=>{const i=o.indexOf(E);pe(i<o.length-1?o[i+1]:o[0])};return e.jsxs(y,{title:"For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use gap to set the unit distance between left and right sides.",children:[e.jsx(r,{style:{backgroundColor:le,verticalAlign:"middle"},size:"large",gap:E,children:f}),e.jsx(L,{size:"small",style:{margin:"0 16px",verticalAlign:"middle"},onClick:me,children:"ChangeUser"}),e.jsx(L,{size:"small",style:{verticalAlign:"middle"},onClick:ue,children:"changeGap"})]})}};var w,I,k;l.parameters=s(a({},l.parameters),{docs:s(a({},(w=l.parameters)==null?void 0:w.docs),{source:a({originalSource:"{}"},(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source)})});var q,G,B;d.parameters=s(a({},d.parameters),{docs:s(a({},(q=d.parameters)==null?void 0:q.docs),{source:a({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(B=(G=d.parameters)==null?void 0:G.docs)==null?void 0:B.source)})});var O,R,F;p.parameters=s(a({},p.parameters),{docs:s(a({},(O=p.parameters)==null?void 0:O.docs),{source:a({originalSource:`{
  args: {
    size: 'large'
  }
}`},(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source)})});var T,_,P;m.parameters=s(a({},m.parameters),{docs:s(a({},(T=m.parameters)==null?void 0:T.docs),{source:a({originalSource:`{
  args: {
    size: 'small'
  }
}`},(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source)})});var D,K,M;u.parameters=s(a({},u.parameters),{docs:s(a({},(D=u.parameters)==null?void 0:D.docs),{source:a({originalSource:`{
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
}`},(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source)})});var H,W,Y;g.parameters=s(a({},g.parameters),{docs:s(a({},(H=g.parameters)==null?void 0:H.docs),{source:a({originalSource:`{
  args: {
    icon: 'Sparkles'
  }
}`},(Y=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Y.source)})});var J,N,Q;x.parameters=s(a({},x.parameters),{docs:s(a({},(J=x.parameters)==null?void 0:J.docs),{source:a({originalSource:`{
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
}`},(Q=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Q.source)})});var V,X,Z;h.parameters=s(a({},h.parameters),{docs:s(a({},(V=h.parameters)==null?void 0:V.docs),{source:a({originalSource:`{
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
}`},(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source)})});var $,ee,ae;j.parameters=s(a({},j.parameters),{docs:s(a({},($=j.parameters)==null?void 0:$.docs),{source:a({originalSource:`{
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
}`},(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source)})});var se,re,ne;v.parameters=s(a({},v.parameters),{docs:s(a({},(se=v.parameters)==null?void 0:se.docs),{source:a({originalSource:`{
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
}`},(ne=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ne.source)})});var te,oe,ce;S.parameters=s(a({},S.parameters),{docs:s(a({},(te=S.parameters)==null?void 0:te.docs),{source:a({originalSource:`{
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
}`},(ce=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ce.source)})});const ze=["Primary","Square","Large","Small","CustomSizes","CustomIcon","ExampleBasic","ExampleTypes","ExampleWithBadge","ExampleResponsive","ExampleAutosetFontSize"],Ce=Object.freeze(Object.defineProperty({__proto__:null,CustomIcon:g,CustomSizes:u,ExampleAutosetFontSize:S,ExampleBasic:x,ExampleResponsive:v,ExampleTypes:h,ExampleWithBadge:j,Large:p,Primary:l,Small:m,Square:d,__namedExportsOrder:ze,default:Se},Symbol.toStringTag,{value:"Module"}));export{Ce as A,Se as m};
