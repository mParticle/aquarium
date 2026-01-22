import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-DPsSDxI5.js";import{L as r,N as a,O as u,Q as C,R as v,T as B,U as w,V as S,W as b,X as k,Y as T,Z as N,_ as F,g as j,b as W,a as M,$ as A,a0 as E,a1 as P,M as H,a2 as z,a3 as R,C as I,d as D,e as L,a4 as V,a5 as Q,c as _,a6 as O,a7 as X,a8 as K,a9 as Y,aa as q,ab as G,ac as J,ad as U,ae as Z,af as $,ag as oo,ah as eo,ai as ro,aj as ao,ak as to,al as no,am as lo,K as io,an as so,ao as co,ap as mo,aq as fo,ar as xo,as as po,at as ho,au as go,av as yo,aw as uo,ax as Co,ay as vo,az as Bo,aA as wo,aB as So,z as bo,aC as ko,aD as To,aE as No,aF as Fo,aG as jo,aH as Wo,f as Mo,aI as Ao,aJ as Ho,aK as zo}from"./style-C-7nCLOl.js";const Ro={title:"EOY Cleanup/Color Palette"},Io=({value:n})=>{const s=n.includes("rgba")||n==="transparent",i=n.match(/rgba?\([^)]+,\s*([\d.]+)\)/),l=i?parseFloat(i[1]):1,t=s&&l<.5;return o.jsx("div",{style:{width:"60px",height:"20px",backgroundColor:n,borderRadius:"4px",border:"1px solid #e5e5e5",position:"relative",marginRight:"12px"},children:t&&o.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px",borderRadius:"4px"}})})},Do=({name:n,tokenName:s})=>{const[i,l]=y.useState(!1),[t,g]=y.useState(!1),Eo=async p=>{p.preventDefault(),p.stopPropagation();try{await navigator.clipboard.writeText(s),g(!0),l(!0),setTimeout(()=>{g(!1),l(!1)},2e3)}catch(Po){console.error("Failed to copy:",Po)}};return o.jsx("div",{style:{position:"relative",display:"inline-block"},children:o.jsxs("span",{onClick:p=>{Eo(p)},onMouseEnter:()=>!t&&l(!0),onMouseLeave:()=>!t&&l(!1),style:{display:"inline-flex",alignItems:"center",gap:"6px",backgroundColor:"#f5f5f5",padding:"4px 8px",borderRadius:"4px",fontSize:zo,fontFamily:Ho,cursor:"pointer",position:"relative"},children:[n,i&&o.jsxs("div",{style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px",backgroundColor:"#333",color:"#fff",padding:"6px 10px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",zIndex:1e3,pointerEvents:"none"},children:[t?"Copied!":"Copy to clipboard",o.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #333"}})]})]})})},e=({swatch:n,name:s,tokenName:i,value:l})=>o.jsxs("tr",{children:[o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(Io,{value:n})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:s}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(Do,{name:i,tokenName:i})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontFamily:r,fontSize:a,color:"rgba(0, 0, 0, 0.88)"},children:l})]}),h=({title:n})=>o.jsx("tr",{children:o.jsx("td",{colSpan:4,style:{padding:"24px 16px 12px",borderBottom:"1px solid #f0f0f0",fontSize:a,fontFamily:r,fontWeight:600,backgroundColor:"#ffffff"},children:o.jsx("span",{style:{display:"inline-block",marginBottom:"4px"},children:n})})}),d={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Brand Colors"}),o.jsx("h3",{children:"Primary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:u,name:"Primary 1",tokenName:"MpBrandPrimary1",value:u}),o.jsx(e,{swatch:C,name:"Primary 2",tokenName:"MpBrandPrimary2",value:C}),o.jsx(e,{swatch:v,name:"Primary 3",tokenName:"MpBrandPrimary3",value:v}),o.jsx(e,{swatch:B,name:"Primary 4",tokenName:"MpBrandPrimary4",value:B}),o.jsx(e,{swatch:w,name:"Primary 5",tokenName:"MpBrandPrimary5",value:w}),o.jsx(e,{swatch:S,name:"Primary 6",tokenName:"MpBrandPrimary6",value:S}),o.jsx(e,{swatch:b,name:"Primary 7",tokenName:"MpBrandPrimary7",value:b}),o.jsx(e,{swatch:k,name:"Primary 8",tokenName:"MpBrandPrimary8",value:k}),o.jsx(e,{swatch:T,name:"Primary 9",tokenName:"MpBrandPrimary9",value:T}),o.jsx(e,{swatch:N,name:"Primary 10",tokenName:"MpBrandPrimary10",value:N})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Secondary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:F,name:"Secondary 1",tokenName:"MpBrandSecondary1",value:F}),o.jsx(e,{swatch:j,name:"Secondary 2",tokenName:"MpBrandSecondary2",value:j}),o.jsx(e,{swatch:W,name:"Secondary 3",tokenName:"MpBrandSecondary3",value:W}),o.jsx(e,{swatch:M,name:"Secondary 4",tokenName:"MpBrandSecondary4",value:M}),o.jsx(e,{swatch:A,name:"Secondary 5",tokenName:"MpBrandSecondary5",value:A}),o.jsx(e,{swatch:E,name:"Secondary 6",tokenName:"MpBrandSecondary6",value:E}),o.jsx(e,{swatch:P,name:"Secondary 7",tokenName:"MpBrandSecondary7",value:P}),o.jsx(e,{swatch:H,name:"Secondary 8",tokenName:"MpBrandSecondary8",value:H}),o.jsx(e,{swatch:z,name:"Secondary 9",tokenName:"MpBrandSecondary9",value:z}),o.jsx(e,{swatch:R,name:"Secondary 10",tokenName:"MpBrandSecondary10",value:R})]})]})]})},c={render:()=>{const n=[{swatch:I,name:"Primary",tokenName:"ColorPrimary",value:I},{swatch:D,name:"Warning",tokenName:"ColorWarning",value:D},{swatch:L,name:"Error",tokenName:"ColorError",value:L},{swatch:V,name:"Info",tokenName:"ColorInfo",value:V},{swatch:Q,name:"Link",tokenName:"ColorLink",value:Q}],s=[{swatch:_,name:"Success",tokenName:"ColorSuccess",value:_},{swatch:O,name:"Success Background",tokenName:"ColorSuccessBg",value:O},{swatch:X,name:"Success Background Hover",tokenName:"ColorSuccessBgHover",value:X},{swatch:K,name:"Success Border",tokenName:"ColorSuccessBorder",value:K},{swatch:Y,name:"Success Border Hover",tokenName:"ColorSuccessBorderHover",value:Y},{swatch:q,name:"Success Hover",tokenName:"ColorSuccessHover",value:q},{swatch:G,name:"Success Active",tokenName:"ColorSuccessActive",value:G},{swatch:J,name:"Success Text Hover",tokenName:"ColorSuccessTextHover",value:J},{swatch:U,name:"Success Text",tokenName:"ColorSuccessText",value:U},{swatch:Z,name:"Success Text Active",tokenName:"ColorSuccessTextActive",value:Z}],i=[{swatch:$,name:"Error Background",tokenName:"ColorErrorBg",value:$},{swatch:oo,name:"Error Background Hover",tokenName:"ColorErrorBgHover",value:oo},{swatch:eo,name:"Error Background Active",tokenName:"ColorErrorBgActive",value:eo},{swatch:ro,name:"Error Border",tokenName:"ColorErrorBorder",value:ro},{swatch:ao,name:"Error Border Hover",tokenName:"ColorErrorBorderHover",value:ao},{swatch:to,name:"Error Hover",tokenName:"ColorErrorHover",value:to},{swatch:no,name:"Error Active",tokenName:"ColorErrorActive",value:no},{swatch:lo,name:"Error Text Hover",tokenName:"ColorErrorTextHover",value:lo},{swatch:io,name:"Error Text",tokenName:"ColorErrorText",value:io},{swatch:so,name:"Error Text Active",tokenName:"ColorErrorTextActive",value:so}],l=[{swatch:co,name:"Warning Background",tokenName:"ColorWarningBg",value:co},{swatch:mo,name:"Warning Background Hover",tokenName:"ColorWarningBgHover",value:mo},{swatch:fo,name:"Warning Border",tokenName:"ColorWarningBorder",value:fo},{swatch:xo,name:"Warning Border Hover",tokenName:"ColorWarningBorderHover",value:xo},{swatch:po,name:"Warning Hover",tokenName:"ColorWarningHover",value:po},{swatch:ho,name:"Warning Active",tokenName:"ColorWarningActive",value:ho},{swatch:go,name:"Warning Text Hover",tokenName:"ColorWarningTextHover",value:go},{swatch:yo,name:"Warning Text",tokenName:"ColorWarningText",value:yo},{swatch:uo,name:"Warning Text Active",tokenName:"ColorWarningTextActive",value:uo}];return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Semantic Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[n.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Success Tokens"}),s.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Error Tokens"}),i.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Warning Tokens"}),l.map(t=>o.jsx(e,{...t},t.tokenName))]})]})]})}},m={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Text Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:Co,name:"Text",tokenName:"ColorText",value:Co}),o.jsx(e,{swatch:vo,name:"Text Heading",tokenName:"ColorTextHeading",value:vo}),o.jsx(e,{swatch:Bo,name:"Text Label",tokenName:"ColorTextLabel",value:Bo}),o.jsx(e,{swatch:wo,name:"Text Description",tokenName:"ColorTextDescription",value:wo}),o.jsx(e,{swatch:So,name:"Text Secondary",tokenName:"ColorTextSecondary",value:So}),o.jsx(e,{swatch:bo,name:"Text Tertiary",tokenName:"ColorTextTertiary",value:bo}),o.jsx(e,{swatch:ko,name:"Text Quaternary",tokenName:"ColorTextQuaternary",value:ko}),o.jsx(e,{swatch:To,name:"Text Placeholder",tokenName:"ColorTextPlaceholder",value:To}),o.jsx(e,{swatch:No,name:"Text Disabled",tokenName:"ColorTextDisabled",value:No})]})]})]})},f={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Icon Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:Fo,name:"Icon Strong",tokenName:"MpColorIconStrong",value:Fo}),o.jsx(e,{swatch:jo,name:"Icon Brand",tokenName:"MpColorIconBrand",value:jo})]})]})]})},x={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Border Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:Wo,name:"Border",tokenName:"ColorBorder",value:Wo}),o.jsx(e,{swatch:Mo,name:"Border Secondary",tokenName:"ColorBorderSecondary",value:Mo}),o.jsx(e,{swatch:Ao,name:"Border Disabled",tokenName:"MpColorBorderDisabled",value:Ao})]})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Brand Colors</h2>
        <h3>Primary</h3>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            backgroundColor: '#fafafa'
          }}>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Example
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Token name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <ColorRow swatch={MpBrandPrimary1} name="Primary 1" tokenName="MpBrandPrimary1" value={MpBrandPrimary1} />
            <ColorRow swatch={MpBrandPrimary2} name="Primary 2" tokenName="MpBrandPrimary2" value={MpBrandPrimary2} />
            <ColorRow swatch={MpBrandPrimary3} name="Primary 3" tokenName="MpBrandPrimary3" value={MpBrandPrimary3} />
            <ColorRow swatch={MpBrandPrimary4} name="Primary 4" tokenName="MpBrandPrimary4" value={MpBrandPrimary4} />
            <ColorRow swatch={MpBrandPrimary5} name="Primary 5" tokenName="MpBrandPrimary5" value={MpBrandPrimary5} />
            <ColorRow swatch={MpBrandPrimary6} name="Primary 6" tokenName="MpBrandPrimary6" value={MpBrandPrimary6} />
            <ColorRow swatch={MpBrandPrimary7} name="Primary 7" tokenName="MpBrandPrimary7" value={MpBrandPrimary7} />
            <ColorRow swatch={MpBrandPrimary8} name="Primary 8" tokenName="MpBrandPrimary8" value={MpBrandPrimary8} />
            <ColorRow swatch={MpBrandPrimary9} name="Primary 9" tokenName="MpBrandPrimary9" value={MpBrandPrimary9} />
            <ColorRow swatch={MpBrandPrimary10} name="Primary 10" tokenName="MpBrandPrimary10" value={MpBrandPrimary10} />
          </tbody>
        </table>

        <h3 style={{
        marginTop: '32px'
      }}>Secondary</h3>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            backgroundColor: '#fafafa'
          }}>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Example
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Token name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <ColorRow swatch={MpBrandSecondary1} name="Secondary 1" tokenName="MpBrandSecondary1" value={MpBrandSecondary1} />
            <ColorRow swatch={MpBrandSecondary2} name="Secondary 2" tokenName="MpBrandSecondary2" value={MpBrandSecondary2} />
            <ColorRow swatch={MpBrandSecondary3} name="Secondary 3" tokenName="MpBrandSecondary3" value={MpBrandSecondary3} />
            <ColorRow swatch={MpBrandSecondary4} name="Secondary 4" tokenName="MpBrandSecondary4" value={MpBrandSecondary4} />
            <ColorRow swatch={MpBrandSecondary5} name="Secondary 5" tokenName="MpBrandSecondary5" value={MpBrandSecondary5} />
            <ColorRow swatch={MpBrandSecondary6} name="Secondary 6" tokenName="MpBrandSecondary6" value={MpBrandSecondary6} />
            <ColorRow swatch={MpBrandSecondary7} name="Secondary 7" tokenName="MpBrandSecondary7" value={MpBrandSecondary7} />
            <ColorRow swatch={MpBrandSecondary8} name="Secondary 8" tokenName="MpBrandSecondary8" value={MpBrandSecondary8} />
            <ColorRow swatch={MpBrandSecondary9} name="Secondary 9" tokenName="MpBrandSecondary9" value={MpBrandSecondary9} />
            <ColorRow swatch={MpBrandSecondary10} name="Secondary 10" tokenName="MpBrandSecondary10" value={MpBrandSecondary10} />
          </tbody>
        </table>
      </>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const semanticRows = [{
      swatch: ColorPrimary,
      name: 'Primary',
      tokenName: 'ColorPrimary',
      value: ColorPrimary
    }, {
      swatch: ColorWarning,
      name: 'Warning',
      tokenName: 'ColorWarning',
      value: ColorWarning
    }, {
      swatch: ColorError,
      name: 'Error',
      tokenName: 'ColorError',
      value: ColorError
    }, {
      swatch: ColorInfo,
      name: 'Info',
      tokenName: 'ColorInfo',
      value: ColorInfo
    }, {
      swatch: ColorLink,
      name: 'Link',
      tokenName: 'ColorLink',
      value: ColorLink
    }];
    const successRows = [{
      swatch: ColorSuccess,
      name: 'Success',
      tokenName: 'ColorSuccess',
      value: ColorSuccess
    }, {
      swatch: ColorSuccessBg,
      name: 'Success Background',
      tokenName: 'ColorSuccessBg',
      value: ColorSuccessBg
    }, {
      swatch: ColorSuccessBgHover,
      name: 'Success Background Hover',
      tokenName: 'ColorSuccessBgHover',
      value: ColorSuccessBgHover
    }, {
      swatch: ColorSuccessBorder,
      name: 'Success Border',
      tokenName: 'ColorSuccessBorder',
      value: ColorSuccessBorder
    }, {
      swatch: ColorSuccessBorderHover,
      name: 'Success Border Hover',
      tokenName: 'ColorSuccessBorderHover',
      value: ColorSuccessBorderHover
    }, {
      swatch: ColorSuccessHover,
      name: 'Success Hover',
      tokenName: 'ColorSuccessHover',
      value: ColorSuccessHover
    }, {
      swatch: ColorSuccessActive,
      name: 'Success Active',
      tokenName: 'ColorSuccessActive',
      value: ColorSuccessActive
    }, {
      swatch: ColorSuccessTextHover,
      name: 'Success Text Hover',
      tokenName: 'ColorSuccessTextHover',
      value: ColorSuccessTextHover
    }, {
      swatch: ColorSuccessText,
      name: 'Success Text',
      tokenName: 'ColorSuccessText',
      value: ColorSuccessText
    }, {
      swatch: ColorSuccessTextActive,
      name: 'Success Text Active',
      tokenName: 'ColorSuccessTextActive',
      value: ColorSuccessTextActive
    }];
    const errorRows = [{
      swatch: ColorErrorBg,
      name: 'Error Background',
      tokenName: 'ColorErrorBg',
      value: ColorErrorBg
    }, {
      swatch: ColorErrorBgHover,
      name: 'Error Background Hover',
      tokenName: 'ColorErrorBgHover',
      value: ColorErrorBgHover
    }, {
      swatch: ColorErrorBgActive,
      name: 'Error Background Active',
      tokenName: 'ColorErrorBgActive',
      value: ColorErrorBgActive
    }, {
      swatch: ColorErrorBorder,
      name: 'Error Border',
      tokenName: 'ColorErrorBorder',
      value: ColorErrorBorder
    }, {
      swatch: ColorErrorBorderHover,
      name: 'Error Border Hover',
      tokenName: 'ColorErrorBorderHover',
      value: ColorErrorBorderHover
    }, {
      swatch: ColorErrorHover,
      name: 'Error Hover',
      tokenName: 'ColorErrorHover',
      value: ColorErrorHover
    }, {
      swatch: ColorErrorActive,
      name: 'Error Active',
      tokenName: 'ColorErrorActive',
      value: ColorErrorActive
    }, {
      swatch: ColorErrorTextHover,
      name: 'Error Text Hover',
      tokenName: 'ColorErrorTextHover',
      value: ColorErrorTextHover
    }, {
      swatch: ColorErrorText,
      name: 'Error Text',
      tokenName: 'ColorErrorText',
      value: ColorErrorText
    }, {
      swatch: ColorErrorTextActive,
      name: 'Error Text Active',
      tokenName: 'ColorErrorTextActive',
      value: ColorErrorTextActive
    }];
    const warningRows = [{
      swatch: ColorWarningBg,
      name: 'Warning Background',
      tokenName: 'ColorWarningBg',
      value: ColorWarningBg
    }, {
      swatch: ColorWarningBgHover,
      name: 'Warning Background Hover',
      tokenName: 'ColorWarningBgHover',
      value: ColorWarningBgHover
    }, {
      swatch: ColorWarningBorder,
      name: 'Warning Border',
      tokenName: 'ColorWarningBorder',
      value: ColorWarningBorder
    }, {
      swatch: ColorWarningBorderHover,
      name: 'Warning Border Hover',
      tokenName: 'ColorWarningBorderHover',
      value: ColorWarningBorderHover
    }, {
      swatch: ColorWarningHover,
      name: 'Warning Hover',
      tokenName: 'ColorWarningHover',
      value: ColorWarningHover
    }, {
      swatch: ColorWarningActive,
      name: 'Warning Active',
      tokenName: 'ColorWarningActive',
      value: ColorWarningActive
    }, {
      swatch: ColorWarningTextHover,
      name: 'Warning Text Hover',
      tokenName: 'ColorWarningTextHover',
      value: ColorWarningTextHover
    }, {
      swatch: ColorWarningText,
      name: 'Warning Text',
      tokenName: 'ColorWarningText',
      value: ColorWarningText
    }, {
      swatch: ColorWarningTextActive,
      name: 'Warning Text Active',
      tokenName: 'ColorWarningTextActive',
      value: ColorWarningTextActive
    }];
    return <>
        <h2>Semantic Colors</h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            backgroundColor: '#fafafa'
          }}>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Example
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Token name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {semanticRows.map(row => <ColorRow key={row.tokenName} {...row} />)}
            <ColorSectionRow title="Success Tokens" />
            {successRows.map(row => <ColorRow key={row.tokenName} {...row} />)}
            <ColorSectionRow title="Error Tokens" />
            {errorRows.map(row => <ColorRow key={row.tokenName} {...row} />)}
            <ColorSectionRow title="Warning Tokens" />
            {warningRows.map(row => <ColorRow key={row.tokenName} {...row} />)}
          </tbody>
        </table>
      </>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Text Colors</h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            backgroundColor: '#fafafa'
          }}>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Example
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Token name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <ColorRow swatch={ColorText} name="Text" tokenName="ColorText" value={ColorText} />
            <ColorRow swatch={ColorTextHeading} name="Text Heading" tokenName="ColorTextHeading" value={ColorTextHeading} />
            <ColorRow swatch={ColorTextLabel} name="Text Label" tokenName="ColorTextLabel" value={ColorTextLabel} />
            <ColorRow swatch={ColorTextDescription} name="Text Description" tokenName="ColorTextDescription" value={ColorTextDescription} />
            <ColorRow swatch={ColorTextSecondary} name="Text Secondary" tokenName="ColorTextSecondary" value={ColorTextSecondary} />
            <ColorRow swatch={ColorTextTertiary} name="Text Tertiary" tokenName="ColorTextTertiary" value={ColorTextTertiary} />
            <ColorRow swatch={ColorTextQuaternary} name="Text Quaternary" tokenName="ColorTextQuaternary" value={ColorTextQuaternary} />
            <ColorRow swatch={ColorTextPlaceholder} name="Text Placeholder" tokenName="ColorTextPlaceholder" value={ColorTextPlaceholder} />
            <ColorRow swatch={ColorTextDisabled} name="Text Disabled" tokenName="ColorTextDisabled" value={ColorTextDisabled} />
          </tbody>
        </table>
      </>;
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Icon Colors</h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            backgroundColor: '#fafafa'
          }}>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Example
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Token name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <ColorRow swatch={MpColorIconStrong} name="Icon Strong" tokenName="MpColorIconStrong" value={MpColorIconStrong} />
            <ColorRow swatch={MpColorIconBrand} name="Icon Brand" tokenName="MpColorIconBrand" value={MpColorIconBrand} />
          </tbody>
        </table>
      </>;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Border Colors</h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            backgroundColor: '#fafafa'
          }}>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Example
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Token name
              </th>
              <th style={{
              width: '25%',
              textAlign: 'left',
              padding: '12px 16px',
              borderBottom: '1px solid #f0f0f0',
              fontWeight: 600,
              fontSize: FontSize,
              color: 'rgba(0, 0, 0, 0.88)',
              background: '#fafafa',
              fontFamily: FontFamily
            }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <ColorRow swatch={ColorBorder} name="Border" tokenName="ColorBorder" value={ColorBorder} />
            <ColorRow swatch={ColorBorderSecondary} name="Border Secondary" tokenName="ColorBorderSecondary" value={ColorBorderSecondary} />
            <ColorRow swatch={MpColorBorderDisabled} name="Border Disabled" tokenName="MpColorBorderDisabled" value={MpColorBorderDisabled} />
          </tbody>
        </table>
      </>;
  }
}`,...x.parameters?.docs?.source}}};const Lo=["Primary","Semantic","Text","Icons","Borders"],Oo=Object.freeze(Object.defineProperty({__proto__:null,Borders:x,Icons:f,Primary:d,Semantic:c,Text:m,__namedExportsOrder:Lo,default:Ro},Symbol.toStringTag,{value:"Module"}));export{x as B,Oo as C,f as I,d as P,c as S,m as T};
