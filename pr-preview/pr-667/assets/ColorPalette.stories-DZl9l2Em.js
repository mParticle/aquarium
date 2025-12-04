var zo=Object.defineProperty,vo=Object.defineProperties;var Mo=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var Wo=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable;var S=(n,l,r)=>l in n?zo(n,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[l]=r,d=(n,l)=>{for(var r in l||(l={}))Wo.call(l,r)&&S(n,r,l[r]);if(C)for(var r of C(l))Po.call(l,r)&&S(n,r,l[r]);return n},s=(n,l)=>vo(n,Mo(l));var w=(n,l,r)=>new Promise((i,c)=>{var y=f=>{try{x(r.next(f))}catch(u){c(u)}},b=f=>{try{x(r.throw(f))}catch(u){c(u)}},x=f=>f.done?i(f.value):Promise.resolve(f.value).then(y,b);x((r=r.apply(n,l)).next())});import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{r as B}from"./index-3OP4wdng.js";import{w as e,x as t,y as k,z as F,A as j,D as T,E as N,G as z,H as v,I as M,J as W,K as P,L as A,j as R,N as E,O as L,Q as V,R as D,T as I,U as H,V as Q,W as _,i as O,X,h as Y,C as G,Y as J,Z as K,_ as U,$ as Z,a0 as $,a1 as q,a2 as oo,u as ao,a3 as eo,a4 as to,a5 as ro,a6 as no,a7 as lo,a8 as io,a9 as fo,aa as so,p as co,ab as xo,ac as po,ad as mo,ae as ho,l as go,af as Ao,ag as Ro}from"./style-CTFkSbyR.js";const Eo={title:"EOY Cleanup/Color Palette"},Lo=({value:n})=>{const l=n.includes("rgba")||n==="transparent",r=n.match(/rgba?\([^)]+,\s*([\d.]+)\)/),i=r?parseFloat(r[1]):1,c=l&&i<.5;return o.jsx("div",{style:{width:"60px",height:"20px",backgroundColor:n,borderRadius:"4px",border:"1px solid #e5e5e5",position:"relative",marginRight:"12px"},children:c&&o.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px",borderRadius:"4px"}})})},Vo=({name:n,tokenName:l})=>{const[r,i]=B.useState(!1),[c,y]=B.useState(!1),b=x=>w(void 0,null,function*(){x.preventDefault(),x.stopPropagation();try{yield navigator.clipboard.writeText(l),y(!0),i(!0),setTimeout(()=>{y(!1),i(!1)},2e3)}catch(f){console.error("Failed to copy:",f)}});return o.jsx("div",{style:{position:"relative",display:"inline-block"},children:o.jsxs("span",{onClick:x=>{b(x)},onMouseEnter:()=>!c&&i(!0),onMouseLeave:()=>!c&&i(!1),style:{display:"inline-flex",alignItems:"center",gap:"6px",backgroundColor:"#f5f5f5",padding:"4px 8px",borderRadius:"4px",fontSize:Ro,fontFamily:Ao,cursor:"pointer",position:"relative"},children:[n,r&&o.jsxs("div",{style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px",backgroundColor:"#333",color:"#fff",padding:"6px 10px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",zIndex:1e3,pointerEvents:"none"},children:[c?"Copied!":"Copy to clipboard",o.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #333"}})]})]})})},a=({swatch:n,name:l,tokenName:r,value:i})=>o.jsxs("tr",{children:[o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:t,color:"rgba(0, 0, 0, 0.88)",fontFamily:e},children:o.jsx(Lo,{value:n})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:t,color:"rgba(0, 0, 0, 0.88)",fontFamily:e},children:l}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:t,color:"rgba(0, 0, 0, 0.88)",fontFamily:e},children:o.jsx(Vo,{name:r,tokenName:r})}),o.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontFamily:e,fontSize:t,color:"rgba(0, 0, 0, 0.88)"},children:i})]}),p={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Brand Colors"}),o.jsx("h3",{children:"Primary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:k,name:"Primary 1",tokenName:"MpBrandPrimary1",value:k}),o.jsx(a,{swatch:F,name:"Primary 2",tokenName:"MpBrandPrimary2",value:F}),o.jsx(a,{swatch:j,name:"Primary 3",tokenName:"MpBrandPrimary3",value:j}),o.jsx(a,{swatch:T,name:"Primary 4",tokenName:"MpBrandPrimary4",value:T}),o.jsx(a,{swatch:N,name:"Primary 5",tokenName:"MpBrandPrimary5",value:N}),o.jsx(a,{swatch:z,name:"Primary 6",tokenName:"MpBrandPrimary6",value:z}),o.jsx(a,{swatch:v,name:"Primary 7",tokenName:"MpBrandPrimary7",value:v}),o.jsx(a,{swatch:M,name:"Primary 8",tokenName:"MpBrandPrimary8",value:M}),o.jsx(a,{swatch:W,name:"Primary 9",tokenName:"MpBrandPrimary9",value:W}),o.jsx(a,{swatch:P,name:"Primary 10",tokenName:"MpBrandPrimary10",value:P})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Secondary"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:A,name:"Secondary 1",tokenName:"MpBrandSecondary1",value:A}),o.jsx(a,{swatch:R,name:"Secondary 2",tokenName:"MpBrandSecondary2",value:R}),o.jsx(a,{swatch:E,name:"Secondary 3",tokenName:"MpBrandSecondary3",value:E}),o.jsx(a,{swatch:L,name:"Secondary 4",tokenName:"MpBrandSecondary4",value:L}),o.jsx(a,{swatch:V,name:"Secondary 5",tokenName:"MpBrandSecondary5",value:V}),o.jsx(a,{swatch:D,name:"Secondary 6",tokenName:"MpBrandSecondary6",value:D}),o.jsx(a,{swatch:I,name:"Secondary 7",tokenName:"MpBrandSecondary7",value:I}),o.jsx(a,{swatch:H,name:"Secondary 8",tokenName:"MpBrandSecondary8",value:H}),o.jsx(a,{swatch:Q,name:"Secondary 9",tokenName:"MpBrandSecondary9",value:Q}),o.jsx(a,{swatch:_,name:"Secondary 10",tokenName:"MpBrandSecondary10",value:_})]})]})]})},m={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Semantic Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:O,name:"Primary",tokenName:"ColorPrimary",value:O}),o.jsx(a,{swatch:X,name:"Success",tokenName:"ColorSuccess",value:X}),o.jsx(a,{swatch:Y,name:"Warning",tokenName:"ColorWarning",value:Y}),o.jsx(a,{swatch:G,name:"Error",tokenName:"ColorError",value:G}),o.jsx(a,{swatch:J,name:"Info",tokenName:"ColorInfo",value:J}),o.jsx(a,{swatch:K,name:"Link",tokenName:"ColorLink",value:K})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Success Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:U,name:"Success Background",tokenName:"ColorSuccessBg",value:U}),o.jsx(a,{swatch:Z,name:"Success Border",tokenName:"ColorSuccessBorder",value:Z}),o.jsx(a,{swatch:$,name:"Success Text",tokenName:"ColorSuccessText",value:$})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Error Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:q,name:"Error Background",tokenName:"ColorErrorBg",value:q}),o.jsx(a,{swatch:oo,name:"Error Border",tokenName:"ColorErrorBorder",value:oo}),o.jsx(a,{swatch:ao,name:"Error Text",tokenName:"ColorErrorText",value:ao})]})]}),o.jsx("h3",{style:{marginTop:"32px"},children:"Warning Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:eo,name:"Warning Background",tokenName:"ColorWarningBg",value:eo}),o.jsx(a,{swatch:to,name:"Warning Border",tokenName:"ColorWarningBorder",value:to}),o.jsx(a,{swatch:ro,name:"Warning Text",tokenName:"ColorWarningText",value:ro})]})]})]})},h={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Text Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:no,name:"Text",tokenName:"ColorText",value:no}),o.jsx(a,{swatch:lo,name:"Text Heading",tokenName:"ColorTextHeading",value:lo}),o.jsx(a,{swatch:io,name:"Text Label",tokenName:"ColorTextLabel",value:io}),o.jsx(a,{swatch:fo,name:"Text Description",tokenName:"ColorTextDescription",value:fo}),o.jsx(a,{swatch:so,name:"Text Secondary",tokenName:"ColorTextSecondary",value:so}),o.jsx(a,{swatch:co,name:"Text Tertiary",tokenName:"ColorTextTertiary",value:co}),o.jsx(a,{swatch:xo,name:"Text Quaternary",tokenName:"ColorTextQuaternary",value:xo}),o.jsx(a,{swatch:po,name:"Text Placeholder",tokenName:"ColorTextPlaceholder",value:po}),o.jsx(a,{swatch:mo,name:"Text Disabled",tokenName:"ColorTextDisabled",value:mo})]})]})]})},g={render:()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Border Colors"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Example"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Token name"}),o.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:t,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:e},children:"Value"})]})}),o.jsxs("tbody",{children:[o.jsx(a,{swatch:ho,name:"Border",tokenName:"ColorBorder",value:ho}),o.jsx(a,{swatch:go,name:"Border Secondary",tokenName:"ColorBorderSecondary",value:go})]})]})]})};var yo,bo,uo;p.parameters=s(d({},p.parameters),{docs:s(d({},(yo=p.parameters)==null?void 0:yo.docs),{source:d({originalSource:`{
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
}`},(uo=(bo=p.parameters)==null?void 0:bo.docs)==null?void 0:uo.source)})});var Co,So,wo;m.parameters=s(d({},m.parameters),{docs:s(d({},(Co=m.parameters)==null?void 0:Co.docs),{source:d({originalSource:`{
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
}`},(wo=(So=m.parameters)==null?void 0:So.docs)==null?void 0:wo.source)})});var Bo,ko,Fo;h.parameters=s(d({},h.parameters),{docs:s(d({},(Bo=h.parameters)==null?void 0:Bo.docs),{source:d({originalSource:`{
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
}`},(Fo=(ko=h.parameters)==null?void 0:ko.docs)==null?void 0:Fo.source)})});var jo,To,No;g.parameters=s(d({},g.parameters),{docs:s(d({},(jo=g.parameters)==null?void 0:jo.docs),{source:d({originalSource:`{
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
          </tbody>
        </table>
      </>;
  }
}`},(No=(To=g.parameters)==null?void 0:To.docs)==null?void 0:No.source)})});const Do=["Primary","Semantic","Text","Borders"],Oo=Object.freeze(Object.defineProperty({__proto__:null,Borders:g,Primary:p,Semantic:m,Text:h,__namedExportsOrder:Do,default:Eo},Symbol.toStringTag,{value:"Module"}));export{g as B,Oo as C,p as P,m as S,h as T};
