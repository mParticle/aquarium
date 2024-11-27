var ce=Object.defineProperty,pe=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var v=(r,i,n)=>i in r?ce(r,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[i]=n,t=(r,i)=>{for(var n in i||(i={}))me.call(i,n)&&v(r,n,i[n]);if(y)for(var n of y(i))ue.call(i,n)&&v(r,n,i[n]);return r},o=(r,i)=>pe(r,de(i));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{T as a,c as l,i as he,F as ge,o as we,b as xe}from"./GlobalNavigation-Bm-dxn4O.js";import"./_baseClone-DBzvlRjn.js";import{r as b}from"./index-CNk6hRaE.js";import{E as B}from"./ExampleStory-Da1tt4qP.js";const fe={title:"Components/Data Display/Tooltip",component:r=>e.jsx(a,o(t({},r),{children:e.jsx(l,{children:"Tooltip element"})})),args:{title:"Tooltip content",arrow:!0,autoAdjustOverflow:!0,color:"",defaultOpen:!1,destroyTooltipOnHide:!1,fresh:!1,getPopupContainer:r=>document.body,mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayClassName:"",overlayStyle:{},overlayInnerStyle:{},placement:"top",trigger:"hover",zIndex:0,onOpenChange:r=>{}},argTypes:{color:{control:"color"},placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextMenu"]}}},p={},d={args:{title:"Different Tooltip Content"}},m={args:{color:"#fc0"}},u={args:{arrow:!1}},h={args:{placement:"bottom"}},g={args:{trigger:"click"}},w={args:{open:!0}},x={args:{trigger:"contextMenu"}},f={args:{trigger:"click",onOpenChange:r=>{alert(`onOpenChange: ${r}`)}}},T={render:()=>{const[r,i]=b.useState("Show"),n=b.useMemo(()=>r==="Hide"?!1:r==="Show"?!0:{pointAtCenter:!0},[r]),s=e.jsx("span",{children:"prompt text"}),c=80;return e.jsx(B,{title:"Show, hide or center arrow and change placements of the tooltip",children:e.jsxs(he,{button:{style:{width:c,height:70,margin:4}},children:[e.jsx(ge,{justify:"center",children:e.jsx(we,{value:r,options:["Show","Hide","Center"],onChange:se=>{i(String(se))},style:{marginBottom:24}})}),e.jsxs("div",{className:"demo",children:[e.jsxs("div",{style:{marginInlineStart:c,whiteSpace:"nowrap"},children:[e.jsx(a,{placement:"topLeft",title:s,arrow:n,children:e.jsx(l,{children:"TL"})}),e.jsx(a,{placement:"top",title:s,arrow:n,children:e.jsx(l,{children:"Top"})}),e.jsx(a,{placement:"topRight",title:s,arrow:n,children:e.jsx(l,{children:"TR"})})]}),e.jsxs("div",{style:{width:c,float:"inline-start"},children:[e.jsx(a,{placement:"leftTop",title:s,arrow:n,children:e.jsx(l,{children:"LT"})}),e.jsx(a,{placement:"left",title:s,arrow:n,children:e.jsx(l,{children:"Left"})}),e.jsx(a,{placement:"leftBottom",title:s,arrow:n,children:e.jsx(l,{children:"LB"})})]}),e.jsxs("div",{style:{width:c,marginInlineStart:c*4+24},children:[e.jsx(a,{placement:"rightTop",title:s,arrow:n,children:e.jsx(l,{children:"RT"})}),e.jsx(a,{placement:"right",title:s,arrow:n,children:e.jsx(l,{children:"Right"})}),e.jsx(a,{placement:"rightBottom",title:s,arrow:n,children:e.jsx(l,{children:"RB"})})]}),e.jsxs("div",{style:{marginInlineStart:c,clear:"both",whiteSpace:"nowrap"},children:[e.jsx(a,{placement:"bottomLeft",title:s,arrow:n,children:e.jsx(l,{children:"BL"})}),e.jsx(a,{placement:"bottom",title:s,arrow:n,children:e.jsx(l,{children:"Bottom"})}),e.jsx(a,{placement:"bottomRight",title:s,arrow:n,children:e.jsx(l,{children:"BR"})})]})]})]})})}},j={render:()=>{const[r,i]=b.useState(!0);return e.jsx(B,{title:'The Tooltip can be disabled by setting title="".',children:e.jsxs(xe,{children:[e.jsx(l,{onClick:()=>{i(!r)},children:r?"Enable":"Disable"}),e.jsx(a,{title:r?"":"prompt text",children:e.jsx("span",{children:"Tooltip will show on mouse enter."})})]})})}},S={render:()=>(b.useEffect(()=>{document.documentElement.scrollTop=document.documentElement.clientHeight,document.documentElement.scrollLeft=document.documentElement.clientWidth},[]),e.jsx(B,{title:"Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.",children:e.jsx("div",{children:e.jsx("div",{style:{height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(a,{title:"Thanks for using antd. Have a nice day!",trigger:"click",defaultOpen:!0,children:e.jsx(l,{children:"Scroll The Window, watch the tooltip move"})})})})}))};var C,A,E;p.parameters=o(t({},p.parameters),{docs:o(t({},(C=p.parameters)==null?void 0:C.docs),{source:t({originalSource:"{}"},(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source)})});var L,R,k;d.parameters=o(t({},d.parameters),{docs:o(t({},(L=d.parameters)==null?void 0:L.docs),{source:t({originalSource:`{
  args: {
    title: 'Different Tooltip Content'
  }
}`},(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source)})});var O,W,D;m.parameters=o(t({},m.parameters),{docs:o(t({},(O=m.parameters)==null?void 0:O.docs),{source:t({originalSource:`{
  args: {
    color: '#fc0'
  }
}`},(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source)})});var H,P,I;u.parameters=o(t({},u.parameters),{docs:o(t({},(H=u.parameters)==null?void 0:H.docs),{source:t({originalSource:`{
  args: {
    arrow: false
  }
}`},(I=(P=u.parameters)==null?void 0:P.docs)==null?void 0:I.source)})});var _,M,N;h.parameters=o(t({},h.parameters),{docs:o(t({},(_=h.parameters)==null?void 0:_.docs),{source:t({originalSource:`{
  args: {
    placement: 'bottom'
  }
}`},(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source)})});var F,z,$;g.parameters=o(t({},g.parameters),{docs:o(t({},(F=g.parameters)==null?void 0:F.docs),{source:t({originalSource:`{
  args: {
    trigger: 'click'
  }
}`},($=(z=g.parameters)==null?void 0:z.docs)==null?void 0:$.source)})});var q,G,J;w.parameters=o(t({},w.parameters),{docs:o(t({},(q=w.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
  args: {
    open: true
  }
}`},(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source)})});var K,Q,U;x.parameters=o(t({},x.parameters),{docs:o(t({},(K=x.parameters)==null?void 0:K.docs),{source:t({originalSource:`{
  args: {
    trigger: 'contextMenu'
  }
}`},(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var V,X,Y;f.parameters=o(t({},f.parameters),{docs:o(t({},(V=f.parameters)==null?void 0:V.docs),{source:t({originalSource:`{
  args: {
    trigger: 'click',
    onOpenChange: (open: boolean) => {
      alert(\`onOpenChange: \${open}\`);
    }
  }
}`},(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,ee,te;T.parameters=o(t({},T.parameters),{docs:o(t({},(Z=T.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
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
}`},(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var oe,re,ne;j.parameters=o(t({},j.parameters),{docs:o(t({},(oe=j.parameters)==null?void 0:oe.docs),{source:t({originalSource:`{
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
}`},(ne=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ne.source)})});var ie,ae,le;S.parameters=o(t({},S.parameters),{docs:o(t({},(ie=S.parameters)==null?void 0:ie.docs),{source:t({originalSource:`{
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
}`},(le=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:le.source)})});const Te=["Primary","Title","Color","NoArrow","BottomPlacement","ClickTrigger","AlwaysOpen","RightClick","ClickWithOnChange","ExampleArrowPlacements","ExampleDisabled","ExampleAutoShift"],Ae=Object.freeze(Object.defineProperty({__proto__:null,AlwaysOpen:w,BottomPlacement:h,ClickTrigger:g,ClickWithOnChange:f,Color:m,ExampleArrowPlacements:T,ExampleAutoShift:S,ExampleDisabled:j,NoArrow:u,Primary:p,RightClick:x,Title:d,__namedExportsOrder:Te,default:fe},Symbol.toStringTag,{value:"Module"}));export{Ae as T,fe as m};
