import{j as o,bc as r,bd as a,be as y,bf as u,bg as C,bh as b,bi as v,bj as B,bk as w,bl as S,bm as k,bn as T,bo as N,k as F,b as j,a as W,bp as M,bq as A,br as E,M as P,bs as H,bt as z,C as R,e as I,f as D,bu as L,bv as V,d as Q,bw as _,bx as O,by as X,bz as Y,bA as q,bB as G,bC as J,bD as K,bE as U,bF as Z,bG as $,bH as oo,bI as eo,bJ as ro,bK as ao,bL as to,bM as no,b7 as lo,bN as io,bO as so,bP as co,bQ as mo,bR as fo,bS as xo,bT as po,bU as ho,bV as go,bW as yo,bX as uo,bY as Co,bZ as bo,b_ as vo,b$ as Bo,aj as wo,c0 as So,c1 as ko,c2 as To,c3 as No,c4 as Fo,c5 as jo,g as Wo,c6 as Mo,y as Ao,c7 as Ho,c8 as zo}from"./iframe-D7Ys59RG.js";const Ro={title:"EOY Cleanup/Color Palette"},Io=({value:n})=>{const s=n.includes("rgba")||n==="transparent",i=n.match(/rgba?\([^)]+,\s*([\d.]+)\)/),l=i?parseFloat(i[1]):1,t=s&&l<.5;return o.jsx("div",{style:{width:"60px",height:"20px",backgroundColor:n,borderRadius:"4px",border:"1px solid #e5e5e5",position:"relative",marginRight:"12px"},children:t&&o.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px",borderRadius:"4px"}})})},Do=({name:n,tokenName:s})=>{const[i,l]=Ao.useState(!1),[t,g]=Ao.useState(!1),Eo=async p=>{p.preventDefault(),p.stopPropagation();try{await navigator.clipboard.writeText(s),g(!0),l(!0),setTimeout(()=>{g(!1),l(!1)},2e3)}catch(Po){console.error("Failed to copy:",Po)}};return o.jsx("div",{style:{position:"relative",display:"inline-block"},children:o.jsxs("span",{onClick:p=>{Eo(p)},onMouseEnter:()=>!t&&l(!0),onMouseLeave:()=>!t&&l(!1),style:{display:"inline-flex",alignItems:"center",gap:"6px",backgroundColor:"#f5f5f5",padding:"4px 8px",borderRadius:"4px",fontSize:zo,fontFamily:Ho,cursor:"pointer",position:"relative"},children:[n,i&&o.jsxs("div",{style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px",backgroundColor:"#333",color:"#fff",padding:"6px 10px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",zIndex:1e3,pointerEvents:"none"},children:[t?"Copied!":"Copy to clipboard",o.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #333"}})]})]})})},e=({swatch:n,name:s,tokenName:i,value:l})=>o.jsxs("tr",{children:[o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(Io,{value:n})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:s}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(Do,{name:i,tokenName:i})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontFamily:r,fontSize:a,color:"rgba(0, 0, 0, 0.88)"},children:l})]}),h=({title:n})=>o.jsx("tr",{children:o.jsx("td",{colSpan:4,style:{padding:"24px 16px 12px",borderBottom:"1px solid #f0f0f0",fontSize:a,fontFamily:r,fontWeight:600,backgroundColor:"#ffffff"},children:o.jsx("span",{style:{display:"inline-block",marginBottom:"4px"},children:n})})}),d={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Brand Colors"}),o.jsx("h3",{children:"Primary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:y,name:"Primary 1",tokenName:"MpBrandPrimary1",value:y}),o.jsx(e,{swatch:u,name:"Primary 2",tokenName:"MpBrandPrimary2",value:u}),o.jsx(e,{swatch:C,name:"Primary 3",tokenName:"MpBrandPrimary3",value:C}),o.jsx(e,{swatch:b,name:"Primary 4",tokenName:"MpBrandPrimary4",value:b}),o.jsx(e,{swatch:v,name:"Primary 5",tokenName:"MpBrandPrimary5",value:v}),o.jsx(e,{swatch:B,name:"Primary 6",tokenName:"MpBrandPrimary6",value:B}),o.jsx(e,{swatch:w,name:"Primary 7",tokenName:"MpBrandPrimary7",value:w}),o.jsx(e,{swatch:S,name:"Primary 8",tokenName:"MpBrandPrimary8",value:S}),o.jsx(e,{swatch:k,name:"Primary 9",tokenName:"MpBrandPrimary9",value:k}),o.jsx(e,{swatch:T,name:"Primary 10",tokenName:"MpBrandPrimary10",value:T})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Secondary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:N,name:"Secondary 1",tokenName:"MpBrandSecondary1",value:N}),o.jsx(e,{swatch:F,name:"Secondary 2",tokenName:"MpBrandSecondary2",value:F}),o.jsx(e,{swatch:j,name:"Secondary 3",tokenName:"MpBrandSecondary3",value:j}),o.jsx(e,{swatch:W,name:"Secondary 4",tokenName:"MpBrandSecondary4",value:W}),o.jsx(e,{swatch:M,name:"Secondary 5",tokenName:"MpBrandSecondary5",value:M}),o.jsx(e,{swatch:A,name:"Secondary 6",tokenName:"MpBrandSecondary6",value:A}),o.jsx(e,{swatch:E,name:"Secondary 7",tokenName:"MpBrandSecondary7",value:E}),o.jsx(e,{swatch:P,name:"Secondary 8",tokenName:"MpBrandSecondary8",value:P}),o.jsx(e,{swatch:H,name:"Secondary 9",tokenName:"MpBrandSecondary9",value:H}),o.jsx(e,{swatch:z,name:"Secondary 10",tokenName:"MpBrandSecondary10",value:z})]})]})]})},c={render:()=>{const n=[{swatch:R,name:"Primary",tokenName:"ColorPrimary",value:R},{swatch:I,name:"Warning",tokenName:"ColorWarning",value:I},{swatch:D,name:"Error",tokenName:"ColorError",value:D},{swatch:L,name:"Info",tokenName:"ColorInfo",value:L},{swatch:V,name:"Link",tokenName:"ColorLink",value:V}],s=[{swatch:Q,name:"Success",tokenName:"ColorSuccess",value:Q},{swatch:_,name:"Success Background",tokenName:"ColorSuccessBg",value:_},{swatch:O,name:"Success Background Hover",tokenName:"ColorSuccessBgHover",value:O},{swatch:X,name:"Success Border",tokenName:"ColorSuccessBorder",value:X},{swatch:Y,name:"Success Border Hover",tokenName:"ColorSuccessBorderHover",value:Y},{swatch:q,name:"Success Hover",tokenName:"ColorSuccessHover",value:q},{swatch:G,name:"Success Active",tokenName:"ColorSuccessActive",value:G},{swatch:J,name:"Success Text Hover",tokenName:"ColorSuccessTextHover",value:J},{swatch:K,name:"Success Text",tokenName:"ColorSuccessText",value:K},{swatch:U,name:"Success Text Active",tokenName:"ColorSuccessTextActive",value:U}],i=[{swatch:Z,name:"Error Background",tokenName:"ColorErrorBg",value:Z},{swatch:$,name:"Error Background Hover",tokenName:"ColorErrorBgHover",value:$},{swatch:oo,name:"Error Background Active",tokenName:"ColorErrorBgActive",value:oo},{swatch:eo,name:"Error Border",tokenName:"ColorErrorBorder",value:eo},{swatch:ro,name:"Error Border Hover",tokenName:"ColorErrorBorderHover",value:ro},{swatch:ao,name:"Error Hover",tokenName:"ColorErrorHover",value:ao},{swatch:to,name:"Error Active",tokenName:"ColorErrorActive",value:to},{swatch:no,name:"Error Text Hover",tokenName:"ColorErrorTextHover",value:no},{swatch:lo,name:"Error Text",tokenName:"ColorErrorText",value:lo},{swatch:io,name:"Error Text Active",tokenName:"ColorErrorTextActive",value:io}],l=[{swatch:so,name:"Warning Background",tokenName:"ColorWarningBg",value:so},{swatch:co,name:"Warning Background Hover",tokenName:"ColorWarningBgHover",value:co},{swatch:mo,name:"Warning Border",tokenName:"ColorWarningBorder",value:mo},{swatch:fo,name:"Warning Border Hover",tokenName:"ColorWarningBorderHover",value:fo},{swatch:xo,name:"Warning Hover",tokenName:"ColorWarningHover",value:xo},{swatch:po,name:"Warning Active",tokenName:"ColorWarningActive",value:po},{swatch:ho,name:"Warning Text Hover",tokenName:"ColorWarningTextHover",value:ho},{swatch:go,name:"Warning Text",tokenName:"ColorWarningText",value:go},{swatch:yo,name:"Warning Text Active",tokenName:"ColorWarningTextActive",value:yo}];return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Semantic Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[n.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Success Tokens"}),s.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Error Tokens"}),i.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Warning Tokens"}),l.map(t=>o.jsx(e,{...t},t.tokenName))]})]})]})}},m={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Text Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:uo,name:"Text",tokenName:"ColorText",value:uo}),o.jsx(e,{swatch:Co,name:"Text Heading",tokenName:"ColorTextHeading",value:Co}),o.jsx(e,{swatch:bo,name:"Text Label",tokenName:"ColorTextLabel",value:bo}),o.jsx(e,{swatch:vo,name:"Text Description",tokenName:"ColorTextDescription",value:vo}),o.jsx(e,{swatch:Bo,name:"Text Secondary",tokenName:"ColorTextSecondary",value:Bo}),o.jsx(e,{swatch:wo,name:"Text Tertiary",tokenName:"ColorTextTertiary",value:wo}),o.jsx(e,{swatch:So,name:"Text Quaternary",tokenName:"ColorTextQuaternary",value:So}),o.jsx(e,{swatch:ko,name:"Text Placeholder",tokenName:"ColorTextPlaceholder",value:ko}),o.jsx(e,{swatch:To,name:"Text Disabled",tokenName:"ColorTextDisabled",value:To})]})]})]})},f={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Icon Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:No,name:"Icon Strong",tokenName:"MpColorIconStrong",value:No}),o.jsx(e,{swatch:Fo,name:"Icon Brand",tokenName:"MpColorIconBrand",value:Fo})]})]})]})},x={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Border Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:jo,name:"Border",tokenName:"ColorBorder",value:jo}),o.jsx(e,{swatch:Wo,name:"Border Secondary",tokenName:"ColorBorderSecondary",value:Wo}),o.jsx(e,{swatch:Mo,name:"Border Disabled",tokenName:"MpColorBorderDisabled",value:Mo})]})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Lo=["Primary","Semantic","Text","Icons","Borders"],Qo=Object.freeze(Object.defineProperty({__proto__:null,Borders:x,Icons:f,Primary:d,Semantic:c,Text:m,__namedExportsOrder:Lo,default:Ro},Symbol.toStringTag,{value:"Module"}));export{x as B,Qo as C,f as I,d as P,c as S,m as T};
