import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as e,c as o,i as B,F as y,m as v,a as C}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{r as T}from"./iframe-ZAwtOOsv.js";import{E as S}from"./ExampleStory-B49bSB_-.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const K={title:"Components/Not Prod Ready/Data Display/Tooltip",component:r=>t.jsx(e,{...r,children:t.jsx(o,{children:"Tooltip element"})}),args:{title:"Tooltip content",arrow:!0,autoAdjustOverflow:!0,color:"",defaultOpen:!1,destroyTooltipOnHide:!1,fresh:!1,getPopupContainer:r=>document.body,mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayClassName:"",overlayStyle:{},overlayInnerStyle:{},placement:"top",trigger:"hover",zIndex:0,onOpenChange:r=>{}},argTypes:{color:{control:"color"},placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},l={},s={args:{title:"Different Tooltip Content"}},c={args:{color:"#fc0"}},p={args:{arrow:!1}},m={args:{placement:"bottom"}},d={args:{trigger:"click"}},u={args:{open:!0}},h={args:{trigger:"contextMenu"}},g={args:{trigger:"click",onOpenChange:r=>{alert(`onOpenChange: ${r}`)}}},w={render:()=>{const[r,j]=T.useState("Show"),n=T.useMemo(()=>r==="Hide"?!1:r==="Show"?!0:{pointAtCenter:!0},[r]),i=t.jsx("span",{children:"prompt text"}),a=80;return t.jsx(S,{title:"Show, hide or center arrow and change placements of the tooltip",children:t.jsxs(B,{button:{style:{width:a,height:70,margin:4}},children:[t.jsx(y,{justify:"center",children:t.jsx(v,{value:r,options:["Show","Hide","Center"],onChange:b=>{j(String(b))},style:{marginBottom:24}})}),t.jsxs("div",{className:"demo",children:[t.jsxs("div",{style:{marginInlineStart:a,whiteSpace:"nowrap"},children:[t.jsx(e,{placement:"topLeft",title:i,arrow:n,children:t.jsx(o,{children:"TL"})}),t.jsx(e,{placement:"top",title:i,arrow:n,children:t.jsx(o,{children:"Top"})}),t.jsx(e,{placement:"topRight",title:i,arrow:n,children:t.jsx(o,{children:"TR"})})]}),t.jsxs("div",{style:{width:a,float:"inline-start"},children:[t.jsx(e,{placement:"leftTop",title:i,arrow:n,children:t.jsx(o,{children:"LT"})}),t.jsx(e,{placement:"left",title:i,arrow:n,children:t.jsx(o,{children:"Left"})}),t.jsx(e,{placement:"leftBottom",title:i,arrow:n,children:t.jsx(o,{children:"LB"})})]}),t.jsxs("div",{style:{width:a,marginInlineStart:a*4+24},children:[t.jsx(e,{placement:"rightTop",title:i,arrow:n,children:t.jsx(o,{children:"RT"})}),t.jsx(e,{placement:"right",title:i,arrow:n,children:t.jsx(o,{children:"Right"})}),t.jsx(e,{placement:"rightBottom",title:i,arrow:n,children:t.jsx(o,{children:"RB"})})]}),t.jsxs("div",{style:{marginInlineStart:a,clear:"both",whiteSpace:"nowrap"},children:[t.jsx(e,{placement:"bottomLeft",title:i,arrow:n,children:t.jsx(o,{children:"BL"})}),t.jsx(e,{placement:"bottom",title:i,arrow:n,children:t.jsx(o,{children:"Bottom"})}),t.jsx(e,{placement:"bottomRight",title:i,arrow:n,children:t.jsx(o,{children:"BR"})})]})]})]})})}},x={render:()=>{const[r,j]=T.useState(!0);return t.jsx(S,{title:'The Tooltip can be disabled by setting title="".',children:t.jsxs(C,{children:[t.jsx(o,{onClick:()=>{j(!r)},children:r?"Enable":"Disable"}),t.jsx(e,{title:r?"":"prompt text",children:t.jsx("span",{children:"Tooltip will show on mouse enter."})})]})})}},f={render:()=>(T.useEffect(()=>{document.documentElement.scrollTop=document.documentElement.clientHeight,document.documentElement.scrollLeft=document.documentElement.clientWidth},[]),t.jsx(S,{title:"Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.",children:t.jsx("div",{children:t.jsx("div",{style:{height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(e,{title:"Thanks for using antd. Have a nice day!",trigger:"click",defaultOpen:!0,children:t.jsx(o,{children:"Scroll The Window, watch the tooltip move"})})})})}))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Different Tooltip Content'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#fc0'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    arrow: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'contextMenu'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'click',
    onOpenChange: (open: boolean) => {
      alert(\`onOpenChange: \${open}\`);
    }
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const Q=["Primary","Title","Color","NoArrow","BottomPlacement","ClickTrigger","AlwaysOpen","RightClick","ClickWithOnChange","ExampleArrowPlacements","ExampleDisabled","ExampleAutoShift"];export{u as AlwaysOpen,m as BottomPlacement,d as ClickTrigger,g as ClickWithOnChange,c as Color,w as ExampleArrowPlacements,f as ExampleAutoShift,x as ExampleDisabled,p as NoArrow,l as Primary,h as RightClick,s as Title,Q as __namedExportsOrder,K as default};
