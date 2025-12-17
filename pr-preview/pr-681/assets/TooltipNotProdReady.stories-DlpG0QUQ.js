var ct=Object.defineProperty,pt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var v=(r,i,n)=>i in r?ct(r,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[i]=n,e=(r,i)=>{for(var n in i||(i={}))dt.call(i,n)&&v(r,n,i[n]);if(y)for(var n of y(i))ut.call(i,n)&&v(r,n,i[n]);return r},o=(r,i)=>pt(r,mt(i));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{T as a,e as l,i as ht,F as gt,l as wt,a as xt}from"./NavigationItemsService-G2W_lazU.js";import"./ErrorStateIcon-BAZ3JLG4.js";import"./SuccessStateIcon-BZRJwWZf.js";import"./WarningStateIcon-DA5locek.js";import"./_baseClone-DwBCp-Ss.js";import{r as b}from"./index-3OP4wdng.js";import{E as B}from"./ExampleStory-lw6q9SoW.js";import"./LightTheme-vAO8T2BA.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-CWQo_erP.js";import"./WarningFilled-D6ijQqgK.js";const Mt={title:"Components/Not Prod Ready/Data Display/Tooltip",component:r=>t.jsx(a,o(e({},r),{children:t.jsx(l,{children:"Tooltip element"})})),args:{title:"Tooltip content",arrow:!0,autoAdjustOverflow:!0,color:"",defaultOpen:!1,destroyTooltipOnHide:!1,fresh:!1,getPopupContainer:r=>document.body,mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayClassName:"",overlayStyle:{},overlayInnerStyle:{},placement:"top",trigger:"hover",zIndex:0,onOpenChange:r=>{}},argTypes:{color:{control:"color"},placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},p={},m={args:{title:"Different Tooltip Content"}},d={args:{color:"#fc0"}},u={args:{arrow:!1}},h={args:{placement:"bottom"}},g={args:{trigger:"click"}},w={args:{open:!0}},x={args:{trigger:"contextMenu"}},f={args:{trigger:"click",onOpenChange:r=>{alert(`onOpenChange: ${r}`)}}},T={render:()=>{const[r,i]=b.useState("Show"),n=b.useMemo(()=>r==="Hide"?!1:r==="Show"?!0:{pointAtCenter:!0},[r]),s=t.jsx("span",{children:"prompt text"}),c=80;return t.jsx(B,{title:"Show, hide or center arrow and change placements of the tooltip",children:t.jsxs(ht,{button:{style:{width:c,height:70,margin:4}},children:[t.jsx(gt,{justify:"center",children:t.jsx(wt,{value:r,options:["Show","Hide","Center"],onChange:st=>{i(String(st))},style:{marginBottom:24}})}),t.jsxs("div",{className:"demo",children:[t.jsxs("div",{style:{marginInlineStart:c,whiteSpace:"nowrap"},children:[t.jsx(a,{placement:"topLeft",title:s,arrow:n,children:t.jsx(l,{children:"TL"})}),t.jsx(a,{placement:"top",title:s,arrow:n,children:t.jsx(l,{children:"Top"})}),t.jsx(a,{placement:"topRight",title:s,arrow:n,children:t.jsx(l,{children:"TR"})})]}),t.jsxs("div",{style:{width:c,float:"inline-start"},children:[t.jsx(a,{placement:"leftTop",title:s,arrow:n,children:t.jsx(l,{children:"LT"})}),t.jsx(a,{placement:"left",title:s,arrow:n,children:t.jsx(l,{children:"Left"})}),t.jsx(a,{placement:"leftBottom",title:s,arrow:n,children:t.jsx(l,{children:"LB"})})]}),t.jsxs("div",{style:{width:c,marginInlineStart:c*4+24},children:[t.jsx(a,{placement:"rightTop",title:s,arrow:n,children:t.jsx(l,{children:"RT"})}),t.jsx(a,{placement:"right",title:s,arrow:n,children:t.jsx(l,{children:"Right"})}),t.jsx(a,{placement:"rightBottom",title:s,arrow:n,children:t.jsx(l,{children:"RB"})})]}),t.jsxs("div",{style:{marginInlineStart:c,clear:"both",whiteSpace:"nowrap"},children:[t.jsx(a,{placement:"bottomLeft",title:s,arrow:n,children:t.jsx(l,{children:"BL"})}),t.jsx(a,{placement:"bottom",title:s,arrow:n,children:t.jsx(l,{children:"Bottom"})}),t.jsx(a,{placement:"bottomRight",title:s,arrow:n,children:t.jsx(l,{children:"BR"})})]})]})]})})}},j={render:()=>{const[r,i]=b.useState(!0);return t.jsx(B,{title:'The Tooltip can be disabled by setting title="".',children:t.jsxs(xt,{children:[t.jsx(l,{onClick:()=>{i(!r)},children:r?"Enable":"Disable"}),t.jsx(a,{title:r?"":"prompt text",children:t.jsx("span",{children:"Tooltip will show on mouse enter."})})]})})}},S={render:()=>(b.useEffect(()=>{document.documentElement.scrollTop=document.documentElement.clientHeight,document.documentElement.scrollLeft=document.documentElement.clientWidth},[]),t.jsx(B,{title:"Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.",children:t.jsx("div",{children:t.jsx("div",{style:{height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(a,{title:"Thanks for using antd. Have a nice day!",trigger:"click",defaultOpen:!0,children:t.jsx(l,{children:"Scroll The Window, watch the tooltip move"})})})})}))};var C,A,E;p.parameters=o(e({},p.parameters),{docs:o(e({},(C=p.parameters)==null?void 0:C.docs),{source:e({originalSource:"{}"},(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source)})});var R,L,k;m.parameters=o(e({},m.parameters),{docs:o(e({},(R=m.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    title: 'Different Tooltip Content'
  }
}`},(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source)})});var W,O,D;d.parameters=o(e({},d.parameters),{docs:o(e({},(W=d.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    color: '#fc0'
  }
}`},(D=(O=d.parameters)==null?void 0:O.docs)==null?void 0:D.source)})});var H,P,I;u.parameters=o(e({},u.parameters),{docs:o(e({},(H=u.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    arrow: false
  }
}`},(I=(P=u.parameters)==null?void 0:P.docs)==null?void 0:I.source)})});var N,M,F;h.parameters=o(e({},h.parameters),{docs:o(e({},(N=h.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    placement: 'bottom'
  }
}`},(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.source)})});var _,$,z;g.parameters=o(e({},g.parameters),{docs:o(e({},(_=g.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    trigger: 'click'
  }
}`},(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source)})});var q,G,J;w.parameters=o(e({},w.parameters),{docs:o(e({},(q=w.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  args: {
    open: true
  }
}`},(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source)})});var K,Q,U;x.parameters=o(e({},x.parameters),{docs:o(e({},(K=x.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  args: {
    trigger: 'contextMenu'
  }
}`},(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var V,X,Y;f.parameters=o(e({},f.parameters),{docs:o(e({},(V=f.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  args: {
    trigger: 'click',
    onOpenChange: (open: boolean) => {
      alert(\`onOpenChange: \${open}\`);
    }
  }
}`},(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,tt,et;T.parameters=o(e({},T.parameters),{docs:o(e({},(Z=T.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  render: () => {
    const [arrow, setArrow] = useState('Show');
    const mergedArrow = useMemo(() => {
      if (arrow === 'Hide') {
        return false;
      }
      if (arrow === 'Show') {
        return true;
      }
      return {
        pointAtCenter: true
      };
    }, [arrow]);
    const text = <span>prompt text</span>;
    const buttonWidth = 80;
    const buttonHeight = 70;
    return <ExampleStory title={'Show, hide or center arrow and change placements of the tooltip'}>
        <ConfigProvider button={{
        style: {
          width: buttonWidth,
          height: buttonHeight,
          margin: 4
        }
      }}>
          <Flex justify="center">
            <Segmented value={arrow} options={['Show', 'Hide', 'Center']} onChange={val => {
            setArrow(String(val));
          }} style={{
            marginBottom: 24
          }} />
          </Flex>
          <div className="demo">
            <div style={{
            marginInlineStart: buttonWidth,
            whiteSpace: 'nowrap'
          }}>
              <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
                <Button>TL</Button>
              </Tooltip>
              <Tooltip placement="top" title={text} arrow={mergedArrow}>
                <Button>Top</Button>
              </Tooltip>
              <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
                <Button>TR</Button>
              </Tooltip>
            </div>
            <div style={{
            width: buttonWidth,
            float: 'inline-start'
          }}>
              <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
                <Button>LT</Button>
              </Tooltip>
              <Tooltip placement="left" title={text} arrow={mergedArrow}>
                <Button>Left</Button>
              </Tooltip>
              <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
                <Button>LB</Button>
              </Tooltip>
            </div>
            <div style={{
            width: buttonWidth,
            marginInlineStart: buttonWidth * 4 + 24
          }}>
              <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
                <Button>RT</Button>
              </Tooltip>
              <Tooltip placement="right" title={text} arrow={mergedArrow}>
                <Button>Right</Button>
              </Tooltip>
              <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
                <Button>RB</Button>
              </Tooltip>
            </div>
            <div style={{
            marginInlineStart: buttonWidth,
            clear: 'both',
            whiteSpace: 'nowrap'
          }}>
              <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
                <Button>BL</Button>
              </Tooltip>
              <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
                <Button>BR</Button>
              </Tooltip>
            </div>
          </div>
        </ConfigProvider>
      </ExampleStory>;
  }
}`},(et=(tt=T.parameters)==null?void 0:tt.docs)==null?void 0:et.source)})});var ot,rt,nt;j.parameters=o(e({},j.parameters),{docs:o(e({},(ot=j.parameters)==null?void 0:ot.docs),{source:e({originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(true);
    return <ExampleStory title='The Tooltip can be disabled by setting title="".'>
        <Space>
          <Button onClick={() => {
          setDisabled(!disabled);
        }}>
            {disabled ? 'Enable' : 'Disable'}
          </Button>
          <Tooltip title={disabled ? '' : 'prompt text'}>
            <span>Tooltip will show on mouse enter.</span>
          </Tooltip>
        </Space>
      </ExampleStory>;
  }
}`},(nt=(rt=j.parameters)==null?void 0:rt.docs)==null?void 0:nt.source)})});var it,at,lt;S.parameters=o(e({},S.parameters),{docs:o(e({},(it=S.parameters)==null?void 0:it.docs),{source:e({originalSource:`{
  render: () => {
    useEffect(() => {
      document.documentElement.scrollTop = document.documentElement.clientHeight;
      document.documentElement.scrollLeft = document.documentElement.clientWidth;
    }, []);
    return <ExampleStory title="Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.">
        <div>
          <div style={{
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <Tooltip title="Thanks for using antd. Have a nice day!" trigger="click" defaultOpen>
              <Button>Scroll The Window, watch the tooltip move</Button>
            </Tooltip>
          </div>
        </div>
      </ExampleStory>;
  }
}`},(lt=(at=S.parameters)==null?void 0:at.docs)==null?void 0:lt.source)})});const Ft=["Primary","Title","Color","NoArrow","BottomPlacement","ClickTrigger","AlwaysOpen","RightClick","ClickWithOnChange","ExampleArrowPlacements","ExampleDisabled","ExampleAutoShift"];export{w as AlwaysOpen,h as BottomPlacement,g as ClickTrigger,f as ClickWithOnChange,d as Color,T as ExampleArrowPlacements,S as ExampleAutoShift,j as ExampleDisabled,u as NoArrow,p as Primary,x as RightClick,m as Title,Ft as __namedExportsOrder,Mt as default};
