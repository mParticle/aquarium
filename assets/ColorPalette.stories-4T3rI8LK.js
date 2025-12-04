var Eo=Object.defineProperty,Io=Object.defineProperties;var Do=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Vo=Object.prototype.hasOwnProperty,Lo=Object.prototype.propertyIsEnumerable;var B=(n,l,r)=>l in n?Eo(n,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[l]=r,d=(n,l)=>{for(var r in l||(l={}))Vo.call(l,r)&&B(n,r,l[r]);if(S)for(var r of S(l))Lo.call(l,r)&&B(n,r,l[r]);return n},i=(n,l)=>Io(n,Do(l));var w=(n,l,r)=>new Promise((f,c)=>{var b=s=>{try{x(r.next(s))}catch(C){c(C)}},u=s=>{try{x(r.throw(s))}catch(C){c(C)}},x=s=>s.done?f(s.value):Promise.resolve(s.value).then(b,u);x((r=r.apply(n,l)).next())});import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{r as k}from"./index-3OP4wdng.js";import{v as e,w as t,x as F,y as j,z as T,A as z,D as M,E as N,G as v,H as W,I as P,J as A,K as R,j as E,L as I,N as D,O as V,Q as L,R as H,T as Q,U as _,V as O,i as X,W as Y,h as G,C as J,X as K,Y as U,Z,_ as $,$ as q,a0 as oo,a1 as ao,t as eo,a2 as to,a3 as ro,a4 as no,a5 as lo,a6 as io,a7 as fo,a8 as so,a9 as co,n as xo,aa as po,ab as mo,ac as ho,ad as go,ae as yo,af as bo,l as uo,ag as Co,ah as Ho,ai as Qo}from"./style-DdnVebKF.js";const _o={title:"EOY Cleanup/Color Palette"},Oo=({value:n})=>{const l=n.includes("rgba")||n==="transparent",r=n.match(/rgba?\([^)]+,\s*([\d.]+)\)/),f=r?parseFloat(r[1]):1,c=l&&f<.5;return o.jsx("div",{style:{width:"60px",height:"20px",backgroundColor:n,borderRadius:"4px",border:"1px solid #e5e5e5",position:"relative",marginRight:"12px"},children:c&&o.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px",borderRadius:"4px"}})})},Xo=({name:n,tokenName:l})=>{const[r,f]=k.useState(!1),[c,b]=k.useState(!1),u=x=>w(void 0,null,function*(){x.preventDefault(),x.stopPropagation();try{yield navigator.clipboard.writeText(l),b(!0),f(!0),setTimeout(()=>{b(!1),f(!1)},2e3)}catch(s){console.error("Failed to copy:",s)}});return o.jsx("div",{style:{position:"relative",display:"inline-block"},children:o.jsxs("span",{onClick:x=>{u(x)},onMouseEnter:()=>!c&&f(!0),onMouseLeave:()=>!c&&f(!1),style:{display:"inline-flex",alignItems:"center",gap:"6px",backgroundColor:"#f5f5f5",padding:"4px 8px",borderRadius:"4px",fontSize:Qo,fontFamily:Ho,cursor:"pointer",position:"relative"},children:[n,r&&o.jsxs("div",{style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px",backgroundColor:"#333",color:"#fff",padding:"6px 10px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",zIndex:1e3,pointerEvents:"none"},children:[c?"Copied!":"Copy to clipboard",o.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #333"}})]})]})})},a=({swatch:n,name:l,tokenName:r,value:f})=>o.jsxs("tr",{children:[o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:t,color:"rgba(0, 0, 0, 0.88)",fontFamily:e},children:o.jsx(Oo,{value:n})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:t,color:"rgba(0, 0, 0, 0.88)",fontFamily:e},children:l}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:t,color:"rgba(0, 0, 0, 0.88)",fontFamily:e},children:o.jsx(Xo,{name:r,tokenName:r})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontFamily:e,fontSize:t,color:"rgba(0, 0, 0, 0.88)"},children:f})]}),p={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Brand Colors"}),o.jsx("h3",{children:"Primary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:F,name:"Primary 1",tokenName:"MpBrandPrimary1",value:F}),o.jsx(a,{swatch:j,name:"Primary 2",tokenName:"MpBrandPrimary2",value:j}),o.jsx(a,{swatch:T,name:"Primary 3",tokenName:"MpBrandPrimary3",value:T}),o.jsx(a,{swatch:z,name:"Primary 4",tokenName:"MpBrandPrimary4",value:z}),o.jsx(a,{swatch:M,name:"Primary 5",tokenName:"MpBrandPrimary5",value:M}),o.jsx(a,{swatch:N,name:"Primary 6",tokenName:"MpBrandPrimary6",value:N}),o.jsx(a,{swatch:v,name:"Primary 7",tokenName:"MpBrandPrimary7",value:v}),o.jsx(a,{swatch:W,name:"Primary 8",tokenName:"MpBrandPrimary8",value:W}),o.jsx(a,{swatch:P,name:"Primary 9",tokenName:"MpBrandPrimary9",value:P}),o.jsx(a,{swatch:A,name:"Primary 10",tokenName:"MpBrandPrimary10",value:A})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Secondary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:R,name:"Secondary 1",tokenName:"MpBrandSecondary1",value:R}),o.jsx(a,{swatch:E,name:"Secondary 2",tokenName:"MpBrandSecondary2",value:E}),o.jsx(a,{swatch:I,name:"Secondary 3",tokenName:"MpBrandSecondary3",value:I}),o.jsx(a,{swatch:D,name:"Secondary 4",tokenName:"MpBrandSecondary4",value:D}),o.jsx(a,{swatch:V,name:"Secondary 5",tokenName:"MpBrandSecondary5",value:V}),o.jsx(a,{swatch:L,name:"Secondary 6",tokenName:"MpBrandSecondary6",value:L}),o.jsx(a,{swatch:H,name:"Secondary 7",tokenName:"MpBrandSecondary7",value:H}),o.jsx(a,{swatch:Q,name:"Secondary 8",tokenName:"MpBrandSecondary8",value:Q}),o.jsx(a,{swatch:_,name:"Secondary 9",tokenName:"MpBrandSecondary9",value:_}),o.jsx(a,{swatch:O,name:"Secondary 10",tokenName:"MpBrandSecondary10",value:O})]})]})]})},m={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Semantic Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:X,name:"Primary",tokenName:"ColorPrimary",value:X}),o.jsx(a,{swatch:Y,name:"Success",tokenName:"ColorSuccess",value:Y}),o.jsx(a,{swatch:G,name:"Warning",tokenName:"ColorWarning",value:G}),o.jsx(a,{swatch:J,name:"Error",tokenName:"ColorError",value:J}),o.jsx(a,{swatch:K,name:"Info",tokenName:"ColorInfo",value:K}),o.jsx(a,{swatch:U,name:"Link",tokenName:"ColorLink",value:U})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Success Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:Z,name:"Success Background",tokenName:"ColorSuccessBg",value:Z}),o.jsx(a,{swatch:$,name:"Success Border",tokenName:"ColorSuccessBorder",value:$}),o.jsx(a,{swatch:q,name:"Success Text",tokenName:"ColorSuccessText",value:q})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Error Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:oo,name:"Error Background",tokenName:"ColorErrorBg",value:oo}),o.jsx(a,{swatch:ao,name:"Error Border",tokenName:"ColorErrorBorder",value:ao}),o.jsx(a,{swatch:eo,name:"Error Text",tokenName:"ColorErrorText",value:eo})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Warning Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:to,name:"Warning Background",tokenName:"ColorWarningBg",value:to}),o.jsx(a,{swatch:ro,name:"Warning Border",tokenName:"ColorWarningBorder",value:ro}),o.jsx(a,{swatch:no,name:"Warning Text",tokenName:"ColorWarningText",value:no})]})]})]})},h={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Text Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:lo,name:"Text",tokenName:"ColorText",value:lo}),o.jsx(a,{swatch:io,name:"Text Heading",tokenName:"ColorTextHeading",value:io}),o.jsx(a,{swatch:fo,name:"Text Label",tokenName:"ColorTextLabel",value:fo}),o.jsx(a,{swatch:so,name:"Text Description",tokenName:"ColorTextDescription",value:so}),o.jsx(a,{swatch:co,name:"Text Secondary",tokenName:"ColorTextSecondary",value:co}),o.jsx(a,{swatch:xo,name:"Text Tertiary",tokenName:"ColorTextTertiary",value:xo}),o.jsx(a,{swatch:po,name:"Text Quaternary",tokenName:"ColorTextQuaternary",value:po}),o.jsx(a,{swatch:mo,name:"Text Placeholder",tokenName:"ColorTextPlaceholder",value:mo}),o.jsx(a,{swatch:ho,name:"Text Disabled",tokenName:"ColorTextDisabled",value:ho})]})]})]})},g={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Icon Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:go,name:"Icon Strong",tokenName:"MpColorIconStrong",value:go}),o.jsx(a,{swatch:yo,name:"Icon Brand",tokenName:"MpColorIconBrand",value:yo})]})]})]})},y={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Border Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:bo,name:"Border",tokenName:"ColorBorder",value:bo}),o.jsx(a,{swatch:uo,name:"Border Secondary",tokenName:"ColorBorderSecondary",value:uo}),o.jsx(a,{swatch:Co,name:"Border Disabled",tokenName:"MpColorBorderDisabled",value:Co})]})]})]})};var So,Bo,wo;p.parameters=i(d({},p.parameters),{docs:i(d({},(So=p.parameters)==null?void 0:So.docs),{source:d({originalSource:`{
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
}`},(wo=(Bo=p.parameters)==null?void 0:Bo.docs)==null?void 0:wo.source)})});var ko,Fo,jo;m.parameters=i(d({},m.parameters),{docs:i(d({},(ko=m.parameters)==null?void 0:ko.docs),{source:d({originalSource:`{
  render: () => {
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
            <ColorRow swatch={ColorPrimary} name="Primary" tokenName="ColorPrimary" value={ColorPrimary} />
            <ColorRow swatch={ColorSuccess} name="Success" tokenName="ColorSuccess" value={ColorSuccess} />
            <ColorRow swatch={ColorWarning} name="Warning" tokenName="ColorWarning" value={ColorWarning} />
            <ColorRow swatch={ColorError} name="Error" tokenName="ColorError" value={ColorError} />
            <ColorRow swatch={ColorInfo} name="Info" tokenName="ColorInfo" value={ColorInfo} />
            <ColorRow swatch={ColorLink} name="Link" tokenName="ColorLink" value={ColorLink} />
          </tbody>
        </table>

        <h3 style={{
        marginTop: '32px'
      }}>Success Colors</h3>
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
            <ColorRow swatch={ColorSuccessBg} name="Success Background" tokenName="ColorSuccessBg" value={ColorSuccessBg} />
            <ColorRow swatch={ColorSuccessBorder} name="Success Border" tokenName="ColorSuccessBorder" value={ColorSuccessBorder} />
            <ColorRow swatch={ColorSuccessText} name="Success Text" tokenName="ColorSuccessText" value={ColorSuccessText} />
          </tbody>
        </table>

        <h3 style={{
        marginTop: '32px'
      }}>Error Colors</h3>
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
            <ColorRow swatch={ColorErrorBg} name="Error Background" tokenName="ColorErrorBg" value={ColorErrorBg} />
            <ColorRow swatch={ColorErrorBorder} name="Error Border" tokenName="ColorErrorBorder" value={ColorErrorBorder} />
            <ColorRow swatch={ColorErrorText} name="Error Text" tokenName="ColorErrorText" value={ColorErrorText} />
          </tbody>
        </table>

        <h3 style={{
        marginTop: '32px'
      }}>Warning Colors</h3>
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
            <ColorRow swatch={ColorWarningBg} name="Warning Background" tokenName="ColorWarningBg" value={ColorWarningBg} />
            <ColorRow swatch={ColorWarningBorder} name="Warning Border" tokenName="ColorWarningBorder" value={ColorWarningBorder} />
            <ColorRow swatch={ColorWarningText} name="Warning Text" tokenName="ColorWarningText" value={ColorWarningText} />
          </tbody>
        </table>
      </>;
  }
}`},(jo=(Fo=m.parameters)==null?void 0:Fo.docs)==null?void 0:jo.source)})});var To,zo,Mo;h.parameters=i(d({},h.parameters),{docs:i(d({},(To=h.parameters)==null?void 0:To.docs),{source:d({originalSource:`{
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
}`},(Mo=(zo=h.parameters)==null?void 0:zo.docs)==null?void 0:Mo.source)})});var No,vo,Wo;g.parameters=i(d({},g.parameters),{docs:i(d({},(No=g.parameters)==null?void 0:No.docs),{source:d({originalSource:`{
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
}`},(Wo=(vo=g.parameters)==null?void 0:vo.docs)==null?void 0:Wo.source)})});var Po,Ao,Ro;y.parameters=i(d({},y.parameters),{docs:i(d({},(Po=y.parameters)==null?void 0:Po.docs),{source:d({originalSource:`{
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
}`},(Ro=(Ao=y.parameters)==null?void 0:Ao.docs)==null?void 0:Ro.source)})});const Yo=["Primary","Semantic","Text","Icons","Borders"],Zo=Object.freeze(Object.defineProperty({__proto__:null,Borders:y,Icons:g,Primary:p,Semantic:m,Text:h,__namedExportsOrder:Yo,default:_o},Symbol.toStringTag,{value:"Module"}));export{y as B,Zo as C,g as I,p as P,m as S,h as T};
