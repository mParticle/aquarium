import{j as e,bc as t,bd as a,c9 as c,ca as S,cb as z,cc as h,cd as F,ce as b,cf as N,c8 as m,cg as u,y as g,c7 as j}from"./iframe-_QPLlW2H.js";const k={title:"EOY Cleanup/Typography"},w=({name:i,tokenName:s})=>{const[d,n]=g.useState(!1),[p,f]=g.useState(!1),x=async l=>{l.preventDefault(),l.stopPropagation();try{await navigator.clipboard.writeText(s),f(!0),n(!0),setTimeout(()=>{f(!1),n(!1)},2e3)}catch(y){console.error("Failed to copy:",y)}};return e.jsx("div",{style:{position:"relative",display:"inline-block"},children:e.jsxs("span",{onClick:l=>{x(l)},onMouseEnter:()=>!p&&n(!0),onMouseLeave:()=>!p&&n(!1),style:{display:"inline-flex",alignItems:"center",gap:"6px",backgroundColor:"#f5f5f5",padding:"4px 8px",borderRadius:"4px",fontSize:m,fontFamily:j,cursor:"pointer",position:"relative"},children:[i,d&&e.jsxs("div",{style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px",backgroundColor:"#333",color:"#fff",padding:"6px 10px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",zIndex:1e3,pointerEvents:"none"},children:[p?"Copied!":"Copy to clipboard",e.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #333"}})]})]})})},o=({fontSize:i,displayName:s,tokenName:d})=>{const n=parseInt(i.replace("px",""));return e.jsxs("tr",{children:[e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:t},children:e.jsx("div",{style:{fontSize:i,fontWeight:400,minWidth:n>=30?"60px":"40px",fontFamily:t},children:"Aa"})}),e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:t},children:s}),e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:t},children:e.jsx(w,{name:d,tokenName:d})}),e.jsx("td",{style:{width:"25%",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontSize:a,color:"rgba(0, 0, 0, 0.88)",fontFamily:t},children:i})]})},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Font Sizes"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#fafafa"},children:[e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:t},children:"Example"}),e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:t},children:"Name"}),e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:t},children:"Token name"}),e.jsx("th",{style:{width:"25%",textAlign:"left",padding:"12px 16px",borderBottom:"1px solid #f0f0f0",fontWeight:600,fontSize:a,color:"rgba(0, 0, 0, 0.88)",background:"#fafafa",fontFamily:t},children:"Value"})]})}),e.jsxs("tbody",{children:[e.jsx(o,{fontSize:c,displayName:"Heading 1",tokenName:"FontSizeHeading1"}),e.jsx(o,{fontSize:S,displayName:"Heading 2",tokenName:"FontSizeHeading2"}),e.jsx(o,{fontSize:z,displayName:"Heading 3",tokenName:"FontSizeHeading3"}),e.jsx(o,{fontSize:h,displayName:"Heading 4",tokenName:"FontSizeHeading4"}),e.jsx(o,{fontSize:F,displayName:"Heading 5",tokenName:"FontSizeHeading5"}),e.jsx(o,{fontSize:b,displayName:"Extra Large",tokenName:"FontSizeXl"}),e.jsx(o,{fontSize:N,displayName:"Large",tokenName:"FontSizeLg"}),e.jsx(o,{fontSize:a,displayName:"Base",tokenName:"FontSize"}),e.jsx(o,{fontSize:m,displayName:"Small",tokenName:"FontSizeSm"}),e.jsx(o,{fontSize:u,displayName:"Icon",tokenName:"FontSizeIcon"})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const H=["FontSizes"],B=Object.freeze(Object.defineProperty({__proto__:null,FontSizes:r,__namedExportsOrder:H,default:k},Symbol.toStringTag,{value:"Module"}));export{r as F,B as T};
