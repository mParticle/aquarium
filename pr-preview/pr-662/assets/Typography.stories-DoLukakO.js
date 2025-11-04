var k=Object.defineProperty,w=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var z=(a,t,o)=>t in a?k(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,m=(a,t)=>{for(var o in t||(t={}))T.call(t,o)&&z(a,o,t[o]);if(c)for(var o of c(t))B.call(t,o)&&z(a,o,t[o]);return a},S=(a,t)=>w(a,H(t));var h=(a,t,o)=>new Promise((l,p)=>{var g=i=>{try{s(o.next(i))}catch(y){p(y)}},x=i=>{try{s(o.throw(i))}catch(y){p(y)}},s=i=>i.done?l(i.value):Promise.resolve(i.value).then(g,x);s((o=o.apply(a,t)).next())});import{j as e}from"./jsx-runtime-CVnACwZl.js";import{r as F}from"./index-3OP4wdng.js";import{v as r,w as d,ag as R,ah as C,ai as v,aj as E,ak as L,al as W,am as A,ae as j,an as I,af as X}from"./style-B9rgtfuS.js";const _={title:"EOY Cleanup/Typography"},O=({name:a,tokenName:t})=>{const[o,l]=F.useState(!1),[p,g]=F.useState(!1),x=s=>h(void 0,null,function*(){s.preventDefault(),s.stopPropagation();try{yield navigator.clipboard.writeText(t),g(!0),l(!0),setTimeout(()=>{g(!1),l(!1)},2e3)}catch(i){console.error("Failed to copy:",i)}});return e.jsx("div",{style:{position:"relative",display:"inline-block"},children:e.jsxs("span",{onClick:s=>{x(s)},onMouseEnter:()=>!p&&l(!0),onMouseLeave:()=>!p&&l(!1),style:{display:"inline-flex",alignItems:"center",gap:"6px",backgroundColor:"#f5f5f5",padding:"4px 8px",borderRadius:"4px",fontSize:j,fontFamily:X,cursor:"pointer",position:"relative"},children:[a,o&&e.jsxs("div",{style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px",backgroundColor:"#333",color:"#fff",padding:"6px 10px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",zIndex:1e3,pointerEvents:"none"},children:[p?"Copied!":"Copy to clipboard",e.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #333"}})]})]})})},n=({fontSize:a,displayName:t,tokenName:o})=>{const l=parseInt(a.replace("px",""));return e.jsxs("tr",{children:[e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:r,color:"rgba(0, 0, 0, 0.88)",fontFamily:d},children:e.jsx("div",{style:{fontSize:a,fontWeight:400,minWidth:l>=30?"60px":"40px",fontFamily:d},children:"Aa"})}),e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:r,color:"rgba(0, 0, 0, 0.88)",fontFamily:d},children:t}),e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:r,color:"rgba(0, 0, 0, 0.88)",fontFamily:d},children:e.jsx(O,{name:o,tokenName:o})}),e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:r,color:"rgba(0, 0, 0, 0.88)",fontFamily:d},children:a})]})},f={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Font Sizes"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:r,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:d},children:"Example"}),e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:r,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:d},children:"Name"}),e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:r,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:d},children:"Token name"}),e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:r,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:d},children:"Value"})]})}),e.jsxs("tbody",{children:[e.jsx(n,{fontSize:R,displayName:"Heading 1",tokenName:"FontSizeHeading1"}),e.jsx(n,{fontSize:C,displayName:"Heading 2",tokenName:"FontSizeHeading2"}),e.jsx(n,{fontSize:v,displayName:"Heading 3",tokenName:"FontSizeHeading3"}),e.jsx(n,{fontSize:E,displayName:"Heading 4",tokenName:"FontSizeHeading4"}),e.jsx(n,{fontSize:L,displayName:"Heading 5",tokenName:"FontSizeHeading5"}),e.jsx(n,{fontSize:W,displayName:"Extra Large",tokenName:"FontSizeXl"}),e.jsx(n,{fontSize:A,displayName:"Large",tokenName:"FontSizeLg"}),e.jsx(n,{fontSize:r,displayName:"Base",tokenName:"FontSize"}),e.jsx(n,{fontSize:j,displayName:"Small",tokenName:"FontSizeSm"}),e.jsx(n,{fontSize:I,displayName:"Icon",tokenName:"FontSizeIcon"})]})]})]})};var b,N,u;f.parameters=S(m({},f.parameters),{docs:S(m({},(b=f.parameters)==null?void 0:b.docs),{source:m({originalSource:`{
  render: () => {
    return <>
        <h2>Font Sizes</h2>
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
            <TypographyRow fontSize={FontSizeHeading1} displayName="Heading 1" tokenName="FontSizeHeading1" />
            <TypographyRow fontSize={FontSizeHeading2} displayName="Heading 2" tokenName="FontSizeHeading2" />
            <TypographyRow fontSize={FontSizeHeading3} displayName="Heading 3" tokenName="FontSizeHeading3" />
            <TypographyRow fontSize={FontSizeHeading4} displayName="Heading 4" tokenName="FontSizeHeading4" />
            <TypographyRow fontSize={FontSizeHeading5} displayName="Heading 5" tokenName="FontSizeHeading5" />
            <TypographyRow fontSize={FontSizeXl} displayName="Extra Large" tokenName="FontSizeXl" />
            <TypographyRow fontSize={FontSizeLg} displayName="Large" tokenName="FontSizeLg" />
            <TypographyRow fontSize={FontSize} displayName="Base" tokenName="FontSize" />
            <TypographyRow fontSize={FontSizeSm} displayName="Small" tokenName="FontSizeSm" />
            <TypographyRow fontSize={FontSizeIcon} displayName="Icon" tokenName="FontSizeIcon" />
          </tbody>
        </table>
      </>;
  }
}`},(u=(N=f.parameters)==null?void 0:N.docs)==null?void 0:u.source)})});const M=["FontSizes"],q=Object.freeze(Object.defineProperty({__proto__:null,FontSizes:f,__namedExportsOrder:M,default:_},Symbol.toStringTag,{value:"Module"}));export{f as F,q as T};
