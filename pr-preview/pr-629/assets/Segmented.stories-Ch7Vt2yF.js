var F=Object.defineProperty,R=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(o,n,r)=>n in o?F(o,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[n]=r,s=(o,n)=>{for(var r in n||(n={}))G.call(n,r)&&y(o,r,n[r]);if(g)for(var r of g(n))k.call(n,r)&&y(o,r,n[r]);return o},t=(o,n)=>R(o,A(n));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{p as u,q as D,r as m,s as x,t as _,M as E,u as $,v as q,w as O,g as V,x as a,y as v,G as p,z as I,T as L}from"./NavigationItemsService-CbxcKt_T.js";import{r as H}from"./index-CNk6hRaE.js";import"./_baseClone-DBzvlRjn.js";const W={title:"Components/Data Display/Segmented",component:u,args:{options:["Mode A","Mode B"]}},d={},i={render:()=>{const[o,n]=H.useState("Preview");return e.jsxs("div",{style:{padding:D,border:`1px solid ${m}`,borderRadius:x,boxSizing:"border-box"},children:[e.jsx(u,{options:["Preview","Code"],value:o,onChange:r=>n(String(r)),style:{marginBottom:_}}),e.jsx("div",{style:{background:E,border:`1px solid ${m}`,borderRadius:x,padding:$,fontFamily:q,fontSize:O,height:"120px",width:"400px",boxSizing:"border-box",overflow:"hidden"},children:o==="Preview"?e.jsx("div",{style:{margin:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsx(V,{variant:"default",children:"Button"})}):e.jsxs("div",{style:{margin:0,padding:0},children:[e.jsxs("div",{style:{margin:0,lineHeight:1.4},children:[e.jsx("span",{style:{color:a},children:"1 "}),e.jsx("span",{style:{color:v},children:"const"})," ",e.jsx("span",{style:{color:p},children:"MyButton"})," = ()"," ","=> {"]}),e.jsxs("div",{style:{margin:0,lineHeight:1.4},children:[e.jsx("span",{style:{color:a},children:"2 "}),e.jsx("span",{style:{color:v},children:"return"})," ","<",e.jsx("span",{style:{color:p},children:"Button"})," variant=",e.jsx("span",{style:{color:I},children:'"default"'}),">"]}),e.jsxs("div",{style:{margin:0,lineHeight:1.4},children:[e.jsx("span",{style:{color:a},children:"3 "}),"Button"]}),e.jsxs("div",{style:{margin:0,lineHeight:1.4},children:[e.jsx("span",{style:{color:a},children:"4 "}),"</",e.jsx("span",{style:{color:p},children:"Button"}),">"]}),e.jsxs("div",{style:{margin:0,lineHeight:1.4},children:[e.jsx("span",{style:{color:a},children:"5 "}),"}"]})]})})]})}},l={args:{options:["Mode A","Mode B"],disabled:!0}},c={render:()=>{const[o,n]=H.useState("Mode A");return e.jsx(u,{value:o,onChange:r=>n(String(r)),options:["Mode A",{label:e.jsx(L,{title:"Your plan does not support this feature. Contact your admin for access",children:e.jsx("span",{style:{cursor:"not-allowed",color:"#999"},children:"Mode B"})}),value:"Mode B",disabled:!0}]})}};var h,S,b;d.parameters=t(s({},d.parameters),{docs:t(s({},(h=d.parameters)==null?void 0:h.docs),{source:s({originalSource:"{}"},(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source)})});var M,j,B;i.parameters=t(s({},i.parameters),{docs:t(s({},(M=i.parameters)==null?void 0:M.docs),{source:s({originalSource:`{
  render: () => {
    const [viewMode, setViewMode] = useState('Preview');
    return <div style={{
      padding: PaddingLg,
      border: \`1px solid \${ColorBorderSecondary}\`,
      borderRadius: BorderRadius,
      boxSizing: 'border-box'
    }}>
        <Segmented options={['Preview', 'Code']} value={viewMode} onChange={value => setViewMode(String(value))} style={{
        marginBottom: PaddingMd
      }} />

        <div style={{
        background: MpBrandSecondary2,
        border: \`1px solid \${ColorBorderSecondary}\`,
        borderRadius: BorderRadius,
        padding: Padding,
        fontFamily: FontFamilyCode,
        fontSize: FontSize,
        height: '120px',
        width: '400px',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
          {viewMode === 'Preview' ? <div style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}>
              <Button variant="default">Button</Button>
            </div> : <div style={{
          margin: 0,
          padding: 0
        }}>
              <div style={{
            margin: 0,
            lineHeight: 1.4
          }}>
                <span style={{
              color: ColorTextSecondary
            }}>1 </span>
                <span style={{
              color: Purple6
            }}>const</span> <span style={{
              color: Geekblue6
            }}>MyButton</span> = (){' '}
                {'=> {'}
              </div>
              <div style={{
            margin: 0,
            lineHeight: 1.4
          }}>
                <span style={{
              color: ColorTextSecondary
            }}>2 </span>
                <span style={{
              color: Purple6
            }}>return</span> {'<'}
                <span style={{
              color: Geekblue6
            }}>Button</span> variant=
                <span style={{
              color: Green6
            }}>&quot;default&quot;</span>
                {'>'}
              </div>
              <div style={{
            margin: 0,
            lineHeight: 1.4
          }}>
                <span style={{
              color: ColorTextSecondary
            }}>3 </span>
                Button
              </div>
              <div style={{
            margin: 0,
            lineHeight: 1.4
          }}>
                <span style={{
              color: ColorTextSecondary
            }}>4 </span>
                {'</'}
                <span style={{
              color: Geekblue6
            }}>Button</span>
                {'>'}
              </div>
              <div style={{
            margin: 0,
            lineHeight: 1.4
          }}>
                <span style={{
              color: ColorTextSecondary
            }}>5 </span>
                {'}'}
              </div>
            </div>}
        </div>
      </div>;
  }
}`},(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source)})});var C,f,w;l.parameters=t(s({},l.parameters),{docs:t(s({},(C=l.parameters)==null?void 0:C.docs),{source:s({originalSource:`{
  args: {
    options: ['Mode A', 'Mode B'],
    disabled: true
  }
}`},(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source)})});var P,T,z;c.parameters=t(s({},c.parameters),{docs:t(s({},(P=c.parameters)==null?void 0:P.docs),{source:s({originalSource:`{
  render: () => {
    const [mode, setMode] = useState('Mode A');
    return <Segmented value={mode} onChange={value => setMode(String(value))} options={['Mode A', {
      label: <Tooltip title="Your plan does not support this feature. Contact your admin for access">
                <span style={{
          cursor: 'not-allowed',
          color: '#999'
        }}>Mode B</span>
              </Tooltip>,
      value: 'Mode B',
      disabled: true
    }]} />;
  }
}`},(z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:z.source)})});const Y=["Primary","CodeExample","Disabled","DisabledWithTooltip"],X=Object.freeze(Object.defineProperty({__proto__:null,CodeExample:i,Disabled:l,DisabledWithTooltip:c,Primary:d,__namedExportsOrder:Y,default:W},Symbol.toStringTag,{value:"Module"}));export{i as C,X as S};
