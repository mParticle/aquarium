import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as z}from"./iframe-DPsSDxI5.js";import{A as a,I as r,S as n,B as f,a as E}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{E as i}from"./ExampleStory-D9NFb6Ax.js";import"./preload-helper-PPVm8Dsz.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";const V={title:"Components/Not Prod Ready/Data Display/Avatar",component:a,args:{alt:"Avatar",gap:4,icon:e.jsx(r,{name:"alicorn",size:"lg",color:"white"}),shape:"circle",size:"default",src:void 0,srcSet:void 0,draggable:!0,crossOrigin:"",onError:()=>!0},argTypes:{crossOrigin:{control:"select",options:["anonymous","use-credentials",""]},shape:{control:"select",options:["circle","square"]},draggable:{control:"select",options:[!0,!1,"true","false"]},icon:{control:"select",options:["Users","Sparkles"],mapping:{Users:e.jsx(r,{name:"users"}),Sparkles:e.jsx(r,{name:"predictions",variant:"duo-tone"})}}}},l={},p={args:{shape:"square"}},m={args:{size:"large"}},d={args:{size:"small"}},u={args:{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:120}}},g={args:{icon:"Sparkles"}},x={render:()=>e.jsx(i,{title:"Four sizes and two shapes are available.",children:e.jsxs(n,{orientation:"vertical",size:16,children:[e.jsxs(n,{wrap:!0,size:16,children:[e.jsx(a,{size:64,icon:e.jsx(r,{name:"alicorn"})}),e.jsx(a,{size:"large",icon:e.jsx(r,{name:"alicorn"})}),e.jsx(a,{icon:e.jsx(r,{name:"alicorn"})}),e.jsx(a,{size:"small",icon:e.jsx(r,{name:"alicorn"})})]}),e.jsxs(n,{wrap:!0,size:16,children:[e.jsx(a,{shape:"square",size:64,icon:e.jsx(r,{name:"alicorn"})}),e.jsx(a,{shape:"square",size:"large",icon:e.jsx(r,{name:"alicorn"})}),e.jsx(a,{shape:"square",icon:e.jsx(r,{name:"alicorn"})}),e.jsx(a,{shape:"square",size:"small",icon:e.jsx(r,{name:"alicorn"})})]})]})})},h={render:()=>{const s="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";return e.jsx(i,{title:"Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.",children:e.jsxs(n,{size:16,wrap:!0,children:[e.jsx(a,{icon:e.jsx(r,{name:"alicorn"})}),e.jsx(a,{children:"U"}),e.jsx(a,{size:40,children:"USER"}),e.jsx(a,{src:s}),e.jsx(a,{src:e.jsx("img",{src:s,alt:"avatar"})}),e.jsx(a,{style:{backgroundColor:"#fde3cf",color:"#f56a00"},children:"U"}),e.jsx(a,{style:{backgroundColor:"#87d068"},icon:e.jsx(r,{name:"alicorn"})})]})})}},j={render:()=>e.jsx(i,{title:"Usually used for reminders and notifications.",children:e.jsxs(n,{size:24,children:[e.jsx(f,{count:1,children:e.jsx(a,{shape:"square",icon:e.jsx(r,{name:"alicorn"})})}),e.jsx(f,{dot:!0,children:e.jsx(a,{shape:"square",icon:e.jsx(r,{name:"alicorn"})})})]})})},v={render:()=>e.jsx(i,{title:"Avatar size can be automatically adjusted based on the screen size.",children:e.jsx(a,{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100},icon:e.jsx(r,{name:"alicorn"})})})},S={render:()=>{const s=["Edward","U","Lucy","Tom"],c=["#f56a00","#7265e6","#ffbf00","#00a2ae"],t=[4,3,2,1],[y,U]=z.useState(s[0]),[C,b]=z.useState(c[0]),[A,L]=z.useState(t[0]),w=()=>{const o=s.indexOf(y);U(o<s.length-1?s[o+1]:s[0]),b(o<c.length-1?c[o+1]:c[0])},I=()=>{const o=t.indexOf(A);L(o<t.length-1?t[o+1]:t[0])};return e.jsxs(i,{title:"For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use gap to set the unit distance between left and right sides.",children:[e.jsx(a,{style:{backgroundColor:C,verticalAlign:"middle"},size:"large",gap:A,children:y}),e.jsx(E,{size:"small",style:{margin:"0 16px",verticalAlign:"middle"},onClick:w,children:"ChangeUser"}),e.jsx(E,{size:"small",style:{verticalAlign:"middle"},onClick:I,children:"changeGap"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'square'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const X=["Primary","Square","Large","Small","CustomSizes","CustomIcon","ExampleBasic","ExampleTypes","ExampleWithBadge","ExampleResponsive","ExampleAutosetFontSize"];export{g as CustomIcon,u as CustomSizes,S as ExampleAutosetFontSize,x as ExampleBasic,v as ExampleResponsive,h as ExampleTypes,j as ExampleWithBadge,m as Large,l as Primary,d as Small,p as Square,X as __namedExportsOrder,V as default};
