var re=Object.defineProperty,ae=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var S=(n,l,t)=>l in n?re(n,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[l]=t,s=(n,l)=>{for(var t in l||(l={}))ne.call(l,t)&&S(n,t,l[t]);if(w)for(var t of w(l))le.call(l,t)&&S(n,t,l[t]);return n},c=(n,l)=>ae(n,te(l));var b=(n,l,t)=>new Promise((d,i)=>{var u=m=>{try{f(t.next(m))}catch(v){i(v)}},C=m=>{try{f(t.throw(m))}catch(v){i(v)}},f=m=>m.done?d(m.value):Promise.resolve(m.value).then(u,C);f((t=t.apply(n,l)).next())});import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{r as k}from"./index-3OP4wdng.js";import{F as r,i as a,j as T,k as N,l as F,m as j,n as W,o as M,p as A,q as E,r as P,s as H,t as z,u as R,v as I,w as D,x as L,y as V,z as Q,A as _,B as O,D as X,E as Y,h as q,C as G,G as J,H as K,I as U,J as Z,K as $,L as oo,N as eo,O as ro,P as ao,Q as to,R as no,S as lo,T as io,U as so,V as co,W as mo,X as fo,Y as xo,Z as po,_ as ho,$ as go,a0 as yo,a1 as uo,a2 as Co,a3 as vo,a4 as Bo,a5 as wo,a6 as So,a7 as bo,a8 as ko,a9 as To,aa as No,ab as Fo,ac as jo,ad as Wo,ae as Mo,af as Ao,ag as Eo,ah as Po,ai as Ho,aj as zo,ak as Ro,al as Io,am as Do,an as Lo,ao as ie,ap as se}from"./style-CRGKMnX3.js";const de={title:"EOY Cleanup/Color Palette"},ce=({value:n})=>{const l=n.includes("rgba")||n==="transparent",t=n.match(/rgba?\([^)]+,\s*([\d.]+)\)/),d=t?parseFloat(t[1]):1,i=l&&d<.5;return o.jsx("div",{style:{width:"60px",height:"20px",backgroundColor:n,borderRadius:"4px",border:"1px solid #e5e5e5",position:"relative",marginRight:"12px"},children:i&&o.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px",borderRadius:"4px"}})})},me=({name:n,tokenName:l})=>{const[t,d]=k.useState(!1),[i,u]=k.useState(!1),C=f=>b(void 0,null,function*(){f.preventDefault(),f.stopPropagation();try{yield navigator.clipboard.writeText(l),u(!0),d(!0),setTimeout(()=>{u(!1),d(!1)},2e3)}catch(m){console.error("Failed to copy:",m)}});return o.jsx("div",{style:{position:"relative",display:"inline-block"},children:o.jsxs("span",{onClick:f=>{C(f)},onMouseEnter:()=>!i&&d(!0),onMouseLeave:()=>!i&&d(!1),style:{display:"inline-flex",alignItems:"center",gap:"6px",backgroundColor:"#f5f5f5",padding:"4px 8px",borderRadius:"4px",fontSize:se,fontFamily:ie,cursor:"pointer",position:"relative"},children:[n,t&&o.jsxs("div",{style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px",backgroundColor:"#333",color:"#fff",padding:"6px 10px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",zIndex:1e3,pointerEvents:"none"},children:[i?"Copied!":"Copy to clipboard",o.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #333"}})]})]})})},e=({swatch:n,name:l,tokenName:t,value:d})=>o.jsxs("tr",{children:[o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(ce,{value:n})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:l}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:r},children:o.jsx(me,{name:t,tokenName:t})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontFamily:r,fontSize:a,color:"rgba(0, 0, 0, 0.88)"},children:d})]}),B=({title:n})=>o.jsx("tr",{children:o.jsx("td",{colSpan:4,style:{padding:"24px 16px 12px",borderBottom:"1px solid #f0f0f0",fontSize:a,fontFamily:r,fontWeight:600,backgroundColor:"#ffffff"},children:o.jsx("span",{style:{display:"inline-block",marginBottom:"4px"},children:n})})}),x={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Brand Colors"}),o.jsx("h3",{children:"Primary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:T,name:"Primary 1",tokenName:"MpBrandPrimary1",value:T}),o.jsx(e,{swatch:N,name:"Primary 2",tokenName:"MpBrandPrimary2",value:N}),o.jsx(e,{swatch:F,name:"Primary 3",tokenName:"MpBrandPrimary3",value:F}),o.jsx(e,{swatch:j,name:"Primary 4",tokenName:"MpBrandPrimary4",value:j}),o.jsx(e,{swatch:W,name:"Primary 5",tokenName:"MpBrandPrimary5",value:W}),o.jsx(e,{swatch:M,name:"Primary 6",tokenName:"MpBrandPrimary6",value:M}),o.jsx(e,{swatch:A,name:"Primary 7",tokenName:"MpBrandPrimary7",value:A}),o.jsx(e,{swatch:E,name:"Primary 8",tokenName:"MpBrandPrimary8",value:E}),o.jsx(e,{swatch:P,name:"Primary 9",tokenName:"MpBrandPrimary9",value:P}),o.jsx(e,{swatch:H,name:"Primary 10",tokenName:"MpBrandPrimary10",value:H})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Secondary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:z,name:"Secondary 1",tokenName:"MpBrandSecondary1",value:z}),o.jsx(e,{swatch:R,name:"Secondary 2",tokenName:"MpBrandSecondary2",value:R}),o.jsx(e,{swatch:I,name:"Secondary 3",tokenName:"MpBrandSecondary3",value:I}),o.jsx(e,{swatch:D,name:"Secondary 4",tokenName:"MpBrandSecondary4",value:D}),o.jsx(e,{swatch:L,name:"Secondary 5",tokenName:"MpBrandSecondary5",value:L}),o.jsx(e,{swatch:V,name:"Secondary 6",tokenName:"MpBrandSecondary6",value:V}),o.jsx(e,{swatch:Q,name:"Secondary 7",tokenName:"MpBrandSecondary7",value:Q}),o.jsx(e,{swatch:_,name:"Secondary 8",tokenName:"MpBrandSecondary8",value:_}),o.jsx(e,{swatch:O,name:"Secondary 9",tokenName:"MpBrandSecondary9",value:O}),o.jsx(e,{swatch:X,name:"Secondary 10",tokenName:"MpBrandSecondary10",value:X})]})]})]})},p={render:()=>{const n=[{swatch:Y,name:"Primary",tokenName:"ColorPrimary",value:Y},{swatch:q,name:"Warning",tokenName:"ColorWarning",value:q},{swatch:G,name:"Error",tokenName:"ColorError",value:G},{swatch:J,name:"Info",tokenName:"ColorInfo",value:J},{swatch:K,name:"Link",tokenName:"ColorLink",value:K}],l=[{swatch:U,name:"Success",tokenName:"ColorSuccess",value:U},{swatch:Z,name:"Success Background",tokenName:"ColorSuccessBg",value:Z},{swatch:$,name:"Success Background Hover",tokenName:"ColorSuccessBgHover",value:$},{swatch:oo,name:"Success Border",tokenName:"ColorSuccessBorder",value:oo},{swatch:eo,name:"Success Border Hover",tokenName:"ColorSuccessBorderHover",value:eo},{swatch:ro,name:"Success Hover",tokenName:"ColorSuccessHover",value:ro},{swatch:ao,name:"Success Active",tokenName:"ColorSuccessActive",value:ao},{swatch:to,name:"Success Text Hover",tokenName:"ColorSuccessTextHover",value:to},{swatch:no,name:"Success Text",tokenName:"ColorSuccessText",value:no},{swatch:lo,name:"Success Text Active",tokenName:"ColorSuccessTextActive",value:lo}],t=[{swatch:io,name:"Error Background",tokenName:"ColorErrorBg",value:io},{swatch:so,name:"Error Background Hover",tokenName:"ColorErrorBgHover",value:so},{swatch:co,name:"Error Background Active",tokenName:"ColorErrorBgActive",value:co},{swatch:mo,name:"Error Border",tokenName:"ColorErrorBorder",value:mo},{swatch:fo,name:"Error Border Hover",tokenName:"ColorErrorBorderHover",value:fo},{swatch:xo,name:"Error Hover",tokenName:"ColorErrorHover",value:xo},{swatch:po,name:"Error Active",tokenName:"ColorErrorActive",value:po},{swatch:ho,name:"Error Text Hover",tokenName:"ColorErrorTextHover",value:ho},{swatch:go,name:"Error Text",tokenName:"ColorErrorText",value:go},{swatch:yo,name:"Error Text Active",tokenName:"ColorErrorTextActive",value:yo}],d=[{swatch:uo,name:"Warning Background",tokenName:"ColorWarningBg",value:uo},{swatch:Co,name:"Warning Background Hover",tokenName:"ColorWarningBgHover",value:Co},{swatch:vo,name:"Warning Border",tokenName:"ColorWarningBorder",value:vo},{swatch:Bo,name:"Warning Border Hover",tokenName:"ColorWarningBorderHover",value:Bo},{swatch:wo,name:"Warning Hover",tokenName:"ColorWarningHover",value:wo},{swatch:So,name:"Warning Active",tokenName:"ColorWarningActive",value:So},{swatch:bo,name:"Warning Text Hover",tokenName:"ColorWarningTextHover",value:bo},{swatch:ko,name:"Warning Text",tokenName:"ColorWarningText",value:ko},{swatch:To,name:"Warning Text Active",tokenName:"ColorWarningTextActive",value:To}];return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Semantic Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[n.map(i=>o.jsx(e,s({},i),i.tokenName)),o.jsx(B,{title:"Success Tokens"}),l.map(i=>o.jsx(e,s({},i),i.tokenName)),o.jsx(B,{title:"Error Tokens"}),t.map(i=>o.jsx(e,s({},i),i.tokenName)),o.jsx(B,{title:"Warning Tokens"}),d.map(i=>o.jsx(e,s({},i),i.tokenName))]})]})]})}},h={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Text Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:No,name:"Text",tokenName:"ColorText",value:No}),o.jsx(e,{swatch:Fo,name:"Text Heading",tokenName:"ColorTextHeading",value:Fo}),o.jsx(e,{swatch:jo,name:"Text Label",tokenName:"ColorTextLabel",value:jo}),o.jsx(e,{swatch:Wo,name:"Text Description",tokenName:"ColorTextDescription",value:Wo}),o.jsx(e,{swatch:Mo,name:"Text Secondary",tokenName:"ColorTextSecondary",value:Mo}),o.jsx(e,{swatch:Ao,name:"Text Tertiary",tokenName:"ColorTextTertiary",value:Ao}),o.jsx(e,{swatch:Eo,name:"Text Quaternary",tokenName:"ColorTextQuaternary",value:Eo}),o.jsx(e,{swatch:Po,name:"Text Placeholder",tokenName:"ColorTextPlaceholder",value:Po}),o.jsx(e,{swatch:Ho,name:"Text Disabled",tokenName:"ColorTextDisabled",value:Ho})]})]})]})},g={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Icon Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:zo,name:"Icon Strong",tokenName:"MpColorIconStrong",value:zo}),o.jsx(e,{swatch:Ro,name:"Icon Brand",tokenName:"MpColorIconBrand",value:Ro})]})]})]})},y={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Border Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:r},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(e,{swatch:Io,name:"Border",tokenName:"ColorBorder",value:Io}),o.jsx(e,{swatch:Do,name:"Border Secondary",tokenName:"ColorBorderSecondary",value:Do}),o.jsx(e,{swatch:Lo,name:"Border Disabled",tokenName:"MpColorBorderDisabled",value:Lo})]})]})]})};var Vo,Qo,_o;x.parameters=c(s({},x.parameters),{docs:c(s({},(Vo=x.parameters)==null?void 0:Vo.docs),{source:s({originalSource:`{
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
}`},(_o=(Qo=x.parameters)==null?void 0:Qo.docs)==null?void 0:_o.source)})});var Oo,Xo,Yo;p.parameters=c(s({},p.parameters),{docs:c(s({},(Oo=p.parameters)==null?void 0:Oo.docs),{source:s({originalSource:`{
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
}`},(Yo=(Xo=p.parameters)==null?void 0:Xo.docs)==null?void 0:Yo.source)})});var qo,Go,Jo;h.parameters=c(s({},h.parameters),{docs:c(s({},(qo=h.parameters)==null?void 0:qo.docs),{source:s({originalSource:`{
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
}`},(Jo=(Go=h.parameters)==null?void 0:Go.docs)==null?void 0:Jo.source)})});var Ko,Uo,Zo;g.parameters=c(s({},g.parameters),{docs:c(s({},(Ko=g.parameters)==null?void 0:Ko.docs),{source:s({originalSource:`{
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
}`},(Zo=(Uo=g.parameters)==null?void 0:Uo.docs)==null?void 0:Zo.source)})});var $o,oe,ee;y.parameters=c(s({},y.parameters),{docs:c(s({},($o=y.parameters)==null?void 0:$o.docs),{source:s({originalSource:`{
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
}`},(ee=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ee.source)})});const fe=["Primary","Semantic","Text","Icons","Borders"],ye=Object.freeze(Object.defineProperty({__proto__:null,Borders:y,Icons:g,Primary:x,Semantic:p,Text:h,__namedExportsOrder:fe,default:de},Symbol.toStringTag,{value:"Module"}));export{y as B,ye as C,g as I,x as P,p as S,h as T};
