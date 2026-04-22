import{j as o,aW as r,aX as a,aY as p,aZ as g,a_ as y,a$ as u,b0 as C,b1 as b,b2 as B,b3 as v,b4 as w,b5 as S,b6 as k,k as T,b as N,a as F,b7 as W,b8 as M,b9 as j,M as A,ba as E,bb as H,bc as P,e as z,f as R,C as I,bd as D,d as L,be as V,bf as Q,bg as _,bh as O,bi as q,bj as G,bk as J,bl as K,bm as X,bn as Y,bo as Z,bp as $,bq as U,br as oo,bs as eo,bt as ro,bu as ao,aH as to,bv as no,bw as lo,bx as io,by as so,bz as co,bA as mo,bB as fo,bC as xo,bD as ho,bE as po,bF as go,bG as yo,bH as uo,bI as Co,aN as bo,ak as Bo,bJ as vo,g as wo,bK as So,bL as ko,bM as To,bN as No,a5 as Fo,bO as Wo}from"./iframe-CcEJbbNh.js";import{C as Mo}from"./CopyableToken-CxeA7q02.js";const jo={title:"Design Tokens/Color Palette"},Ao=({value:n})=>{const d=n.includes("rgba")||n==="transparent",l=n.match(/rgba?\([^)]+,\s*([\d.]+)\)/),i=l?parseFloat(l[1]):1,t=d&&i<.5;return o.jsx("div",{style:{width:"60px",height:"20px",backgroundColor:n,borderRadius:"4px",border:"1px solid #e5e5e5",position:"relative",marginRight:"12px"},children:t&&o.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px",borderRadius:"4px"}})})},e=({swatch:n,name:d,tokenName:l,value:i})=>o.jsxs("tr",{children:[o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(Ao,{value:n})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:d}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(Mo,{name:l})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontFamily:r,fontSize:a,color:"rgba(0, 0, 0, 0.88)"},children:i})]}),h=({title:n})=>o.jsx("tr",{children:o.jsx("td",{colSpan:4,style:{padding:"24px 16px 12px",borderBottom:"1px solid #f0f0f0",fontSize:a,fontFamily:r,fontWeight:600,backgroundColor:"#ffffff"},children:o.jsx("span",{style:{display:"inline-block",marginBottom:"4px"},children:n})})}),s={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Brand Colors"}),o.jsx("h3",{children:"Primary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:p,name:"Primary 1",tokenName:"MpBrandPrimary1",value:p}),o.jsx(e,{swatch:g,name:"Primary 2",tokenName:"MpBrandPrimary2",value:g}),o.jsx(e,{swatch:y,name:"Primary 3",tokenName:"MpBrandPrimary3",value:y}),o.jsx(e,{swatch:u,name:"Primary 4",tokenName:"MpBrandPrimary4",value:u}),o.jsx(e,{swatch:C,name:"Primary 5",tokenName:"MpBrandPrimary5",value:C}),o.jsx(e,{swatch:b,name:"Primary 6",tokenName:"MpBrandPrimary6",value:b}),o.jsx(e,{swatch:B,name:"Primary 7",tokenName:"MpBrandPrimary7",value:B}),o.jsx(e,{swatch:v,name:"Primary 8",tokenName:"MpBrandPrimary8",value:v}),o.jsx(e,{swatch:w,name:"Primary 9",tokenName:"MpBrandPrimary9",value:w}),o.jsx(e,{swatch:S,name:"Primary 10",tokenName:"MpBrandPrimary10",value:S})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Secondary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:k,name:"Secondary 1",tokenName:"MpBrandSecondary1",value:k}),o.jsx(e,{swatch:T,name:"Secondary 2",tokenName:"MpBrandSecondary2",value:T}),o.jsx(e,{swatch:N,name:"Secondary 3",tokenName:"MpBrandSecondary3",value:N}),o.jsx(e,{swatch:F,name:"Secondary 4",tokenName:"MpBrandSecondary4",value:F}),o.jsx(e,{swatch:W,name:"Secondary 5",tokenName:"MpBrandSecondary5",value:W}),o.jsx(e,{swatch:M,name:"Secondary 6",tokenName:"MpBrandSecondary6",value:M}),o.jsx(e,{swatch:j,name:"Secondary 7",tokenName:"MpBrandSecondary7",value:j}),o.jsx(e,{swatch:A,name:"Secondary 8",tokenName:"MpBrandSecondary8",value:A}),o.jsx(e,{swatch:E,name:"Secondary 9",tokenName:"MpBrandSecondary9",value:E}),o.jsx(e,{swatch:H,name:"Secondary 10",tokenName:"MpBrandSecondary10",value:H})]})]})]})},c={render:()=>{const n=[{swatch:P,name:"Primary",tokenName:"ColorPrimary",value:P},{swatch:z,name:"Warning",tokenName:"ColorWarning",value:z},{swatch:R,name:"Error",tokenName:"ColorError",value:R},{swatch:I,name:"Info",tokenName:"ColorInfo",value:I},{swatch:D,name:"Link",tokenName:"ColorLink",value:D}],d=[{swatch:L,name:"Success",tokenName:"ColorSuccess",value:L},{swatch:V,name:"Success Background",tokenName:"ColorSuccessBg",value:V},{swatch:Q,name:"Success Background Hover",tokenName:"ColorSuccessBgHover",value:Q},{swatch:_,name:"Success Border",tokenName:"ColorSuccessBorder",value:_},{swatch:O,name:"Success Border Hover",tokenName:"ColorSuccessBorderHover",value:O},{swatch:q,name:"Success Hover",tokenName:"ColorSuccessHover",value:q},{swatch:G,name:"Success Active",tokenName:"ColorSuccessActive",value:G},{swatch:J,name:"Success Text Hover",tokenName:"ColorSuccessTextHover",value:J},{swatch:K,name:"Success Text",tokenName:"ColorSuccessText",value:K},{swatch:X,name:"Success Text Active",tokenName:"ColorSuccessTextActive",value:X}],l=[{swatch:Y,name:"Error Background",tokenName:"ColorErrorBg",value:Y},{swatch:Z,name:"Error Background Hover",tokenName:"ColorErrorBgHover",value:Z},{swatch:$,name:"Error Background Active",tokenName:"ColorErrorBgActive",value:$},{swatch:U,name:"Error Border",tokenName:"ColorErrorBorder",value:U},{swatch:oo,name:"Error Border Hover",tokenName:"ColorErrorBorderHover",value:oo},{swatch:eo,name:"Error Hover",tokenName:"ColorErrorHover",value:eo},{swatch:ro,name:"Error Active",tokenName:"ColorErrorActive",value:ro},{swatch:ao,name:"Error Text Hover",tokenName:"ColorErrorTextHover",value:ao},{swatch:to,name:"Error Text",tokenName:"ColorErrorText",value:to},{swatch:no,name:"Error Text Active",tokenName:"ColorErrorTextActive",value:no}],i=[{swatch:lo,name:"Warning Background",tokenName:"ColorWarningBg",value:lo},{swatch:io,name:"Warning Background Hover",tokenName:"ColorWarningBgHover",value:io},{swatch:so,name:"Warning Border",tokenName:"ColorWarningBorder",value:so},{swatch:co,name:"Warning Border Hover",tokenName:"ColorWarningBorderHover",value:co},{swatch:mo,name:"Warning Hover",tokenName:"ColorWarningHover",value:mo},{swatch:fo,name:"Warning Active",tokenName:"ColorWarningActive",value:fo},{swatch:xo,name:"Warning Text Hover",tokenName:"ColorWarningTextHover",value:xo},{swatch:ho,name:"Warning Text",tokenName:"ColorWarningText",value:ho},{swatch:po,name:"Warning Text Active",tokenName:"ColorWarningTextActive",value:po}];return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Semantic Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[n.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Success Tokens"}),d.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Error Tokens"}),l.map(t=>o.jsx(e,{...t},t.tokenName)),o.jsx(h,{title:"Warning Tokens"}),i.map(t=>o.jsx(e,{...t},t.tokenName))]})]})]})}},m={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Text Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:go,name:"Text",tokenName:"ColorText",value:go}),o.jsx(e,{swatch:yo,name:"Text Heading",tokenName:"ColorTextHeading",value:yo}),o.jsx(e,{swatch:uo,name:"Text Label",tokenName:"ColorTextLabel",value:uo}),o.jsx(e,{swatch:Co,name:"Text Description",tokenName:"ColorTextDescription",value:Co}),o.jsx(e,{swatch:bo,name:"Text Secondary",tokenName:"ColorTextSecondary",value:bo}),o.jsx(e,{swatch:Bo,name:"Text Tertiary",tokenName:"ColorTextTertiary",value:Bo}),o.jsx(e,{swatch:vo,name:"Text Quaternary",tokenName:"ColorTextQuaternary",value:vo}),o.jsx(e,{swatch:wo,name:"Text Placeholder",tokenName:"ColorTextPlaceholder",value:wo}),o.jsx(e,{swatch:So,name:"Text Disabled",tokenName:"ColorTextDisabled",value:So})]})]})]})},f={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Icon Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:ko,name:"Icon Strong",tokenName:"MpColorIconStrong",value:ko}),o.jsx(e,{swatch:To,name:"Icon Brand",tokenName:"MpColorIconBrand",value:To})]})]})]})},x={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Border Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:No,name:"Border",tokenName:"ColorBorder",value:No}),o.jsx(e,{swatch:Fo,name:"Border Secondary",tokenName:"ColorBorderSecondary",value:Fo}),o.jsx(e,{swatch:Wo,name:"Border Disabled",tokenName:"MpColorBorderDisabled",value:Wo})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Eo=["Primary","Semantic","Text","Icons","Borders"],zo=Object.freeze(Object.defineProperty({__proto__:null,Borders:x,Icons:f,Primary:s,Semantic:c,Text:m,__namedExportsOrder:Eo,default:jo},Symbol.toStringTag,{value:"Module"}));export{x as B,zo as C,f as I,s as P,c as S,m as T};
