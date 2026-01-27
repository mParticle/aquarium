import{j as e,A as a,I as s,S as o,B as f,y as z,i as E}from"./iframe-_QPLlW2H.js";import{E as c}from"./ExampleStory-z2QCavMP.js";import"./preload-helper-PPVm8Dsz.js";const B={title:"Components/Not Prod Ready/Data Display/Avatar",component:a,args:{alt:"Avatar",gap:4,icon:e.jsx(s,{name:"alicorn",size:"lg",color:"white"}),shape:"circle",size:"default",src:void 0,srcSet:void 0,draggable:!0,crossOrigin:"",onError:()=>!0},argTypes:{crossOrigin:{control:"select",options:["anonymous","use-credentials",""]},shape:{control:"select",options:["circle","square"]},draggable:{control:"select",options:[!0,!1,"true","false"]},icon:{control:"select",options:["Users","Sparkles"],mapping:{Users:e.jsx(s,{name:"users"}),Sparkles:e.jsx(s,{name:"predictions",variant:"duo-tone"})}}}},l={},d={args:{shape:"square"}},p={args:{size:"large"}},m={args:{size:"small"}},u={args:{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:120}}},g={args:{icon:"Sparkles"}},x={render:()=>e.jsx(c,{title:"Four sizes and two shapes are available.",children:e.jsxs(o,{orientation:"vertical",size:16,children:[e.jsxs(o,{wrap:!0,size:16,children:[e.jsx(a,{size:64,icon:e.jsx(s,{name:"alicorn"})}),e.jsx(a,{size:"large",icon:e.jsx(s,{name:"alicorn"})}),e.jsx(a,{icon:e.jsx(s,{name:"alicorn"})}),e.jsx(a,{size:"small",icon:e.jsx(s,{name:"alicorn"})})]}),e.jsxs(o,{wrap:!0,size:16,children:[e.jsx(a,{shape:"square",size:64,icon:e.jsx(s,{name:"alicorn"})}),e.jsx(a,{shape:"square",size:"large",icon:e.jsx(s,{name:"alicorn"})}),e.jsx(a,{shape:"square",icon:e.jsx(s,{name:"alicorn"})}),e.jsx(a,{shape:"square",size:"small",icon:e.jsx(s,{name:"alicorn"})})]})]})})},h={render:()=>{const r="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";return e.jsx(c,{title:"Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.",children:e.jsxs(o,{size:16,wrap:!0,children:[e.jsx(a,{icon:e.jsx(s,{name:"alicorn"})}),e.jsx(a,{children:"U"}),e.jsx(a,{size:40,children:"USER"}),e.jsx(a,{src:r}),e.jsx(a,{src:e.jsx("img",{src:r,alt:"avatar"})}),e.jsx(a,{style:{backgroundColor:"#fde3cf",color:"#f56a00"},children:"U"}),e.jsx(a,{style:{backgroundColor:"#87d068"},icon:e.jsx(s,{name:"alicorn"})})]})})}},j={render:()=>e.jsx(c,{title:"Usually used for reminders and notifications.",children:e.jsxs(o,{size:24,children:[e.jsx(f,{count:1,children:e.jsx(a,{shape:"square",icon:e.jsx(s,{name:"alicorn"})})}),e.jsx(f,{dot:!0,children:e.jsx(a,{shape:"square",icon:e.jsx(s,{name:"alicorn"})})})]})})},v={render:()=>e.jsx(c,{title:"Avatar size can be automatically adjusted based on the screen size.",children:e.jsx(a,{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100},icon:e.jsx(s,{name:"alicorn"})})})},S={render:()=>{const r=["Edward","U","Lucy","Tom"],i=["#f56a00","#7265e6","#ffbf00","#00a2ae"],t=[4,3,2,1],[y,U]=z.useState(r[0]),[C,b]=z.useState(i[0]),[A,L]=z.useState(t[0]),w=()=>{const n=r.indexOf(y);U(n<r.length-1?r[n+1]:r[0]),b(n<i.length-1?i[n+1]:i[0])},I=()=>{const n=t.indexOf(A);L(n<t.length-1?t[n+1]:t[0])};return e.jsxs(c,{title:"For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use gap to set the unit distance between left and right sides.",children:[e.jsx(a,{style:{backgroundColor:C,verticalAlign:"middle"},size:"large",gap:A,children:y}),e.jsx(E,{size:"small",style:{margin:"0 16px",verticalAlign:"middle"},onClick:w,children:"ChangeUser"}),e.jsx(E,{size:"small",style:{verticalAlign:"middle"},onClick:I,children:"changeGap"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'square'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'Sparkles'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Four sizes and two shapes are available.">
        <Space orientation="vertical" size={16}>
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const R=["Primary","Square","Large","Small","CustomSizes","CustomIcon","ExampleBasic","ExampleTypes","ExampleWithBadge","ExampleResponsive","ExampleAutosetFontSize"];export{g as CustomIcon,u as CustomSizes,S as ExampleAutosetFontSize,x as ExampleBasic,v as ExampleResponsive,h as ExampleTypes,j as ExampleWithBadge,p as Large,l as Primary,m as Small,d as Square,R as __namedExportsOrder,B as default};
