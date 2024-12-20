var Je=Object.defineProperty,ke=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var $=(r,o,n)=>o in r?Je(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,e=(r,o)=>{for(var n in o||(o={}))Qe.call(o,n)&&$(r,n,o[n]);if(b)for(var n of b(o))Ie.call(o,n)&&$(r,n,o[n]);return r},a=(r,o)=>ke(r,ve(o));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{X as s,I as Me}from"./GlobalNavigation-BH4_nG0x.js";import"./_baseClone-DBzvlRjn.js";import{E as i}from"./ExampleStory-MZ1hVYeZ.js";import{r as Ne}from"./index-CNk6hRaE.js";const Re={title:"Components/Navigation/Pagination",component:s,args:{current:1,defaultCurrent:1,defaultPageSize:10,disabled:!1,hideOnSinglePage:!1,itemRender:(r,o,n)=>o==="page"?t.jsx("a",{children:r}):n,pageSize:10,pageSizeOptions:[10,20,50,100],responsive:!1,showLessItems:!1,showQuickJumper:!1,showSizeChanger:!1,showTitle:!0,showTotal:(r,o)=>`Total ${r} items`,simple:!1,size:"default",total:27,onChange:(r,o)=>{alert(`Page changed to ${r}, Page Size: ${o}`)},onShowSizeChange:(r,o)=>{alert(`Page Size changed to ${o}, Current Page: ${r}`)}}},l={},u={args:{size:"small"}},m={args:{responsive:!0}},c={args:{showQuickJumper:{goButton:t.jsx(Me,{name:"alicorn"})}}},p={args:{showSizeChanger:!0,total:60}},g={args:{simple:!0}},d={args:{showLessItems:!0}},h={args:{showTotal:(r,o)=>`Showing ${o[0]}-${o[1]} of ${r} items`}},S={render:()=>t.jsx(i,{title:"Basic pagination.",children:t.jsx(s,{defaultCurrent:1,total:50})})},x={render:()=>t.jsx(i,{title:"More Pages.",children:t.jsx(s,{defaultCurrent:6,total:500})})},C={render:()=>{const r=(o,n)=>{console.log(o,n)};return t.jsxs(i,{title:"Change pageSize.",children:[t.jsx(s,{showSizeChanger:!0,onShowSizeChange:r,defaultCurrent:3,total:500}),t.jsx("br",{}),t.jsx(s,{showSizeChanger:!0,onShowSizeChange:r,defaultCurrent:3,total:500,disabled:!0})]})}},w={render:()=>{const r=o=>{console.log("Page: ",o)};return t.jsxs(i,{title:"Jump to a page directly.",children:[t.jsx(s,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:r}),t.jsx("br",{}),t.jsx(s,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:r,disabled:!0})]})}},P={render:()=>{const r=o=>`Total ${o} items`;return t.jsxs(i,{title:"Mini size pagination.",children:[t.jsx(s,{size:"small",total:50}),t.jsx(s,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),t.jsx(s,{size:"small",total:50,showTotal:r}),t.jsx(s,{size:"small",total:50,disabled:!0,showTotal:r,showSizeChanger:!0,showQuickJumper:!0})]})}},f={render:()=>t.jsxs(i,{title:"Simple mode.",children:[t.jsx(s,{simple:!0,defaultCurrent:2,total:50}),t.jsx("br",{}),t.jsx(s,{disabled:!0,simple:!0,defaultCurrent:2,total:50})]})},z={render:()=>{const[r,o]=Ne.useState(3),n=T=>{console.log(T),o(T)};return t.jsx(i,{title:"Controlled page number.",children:t.jsx(s,{current:r,onChange:n,total:50})})}},E={render:()=>t.jsxs(i,{title:"You can show the total number of data by setting showTotal.",children:[t.jsx(s,{total:85,showTotal:r=>`Total ${r} items`,defaultPageSize:20,defaultCurrent:1}),t.jsx("br",{}),t.jsx(s,{total:85,showTotal:(r,o)=>`${o[0]}-${o[1]} of ${r} items`,defaultPageSize:20,defaultCurrent:1})]})},j={render:()=>t.jsx(i,{title:"Show all configured prop.",children:t.jsx(s,{total:85,showSizeChanger:!0,showQuickJumper:!0,showTotal:r=>`Total ${r} items`})})},y={render:()=>{const r=(o,n,T)=>n==="prev"?t.jsx("a",{children:"Previous"}):n==="next"?t.jsx("a",{children:"Next"}):T;return t.jsx(i,{title:"Use text link for prev and next button.",children:t.jsx(s,{total:500,itemRender:r})})}};var J,k,v;l.parameters=a(e({},l.parameters),{docs:a(e({},(J=l.parameters)==null?void 0:J.docs),{source:e({originalSource:"{}"},(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source)})});var Q,I,M;u.parameters=a(e({},u.parameters),{docs:a(e({},(Q=u.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source)})});var N,R,B;m.parameters=a(e({},m.parameters),{docs:a(e({},(N=m.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    responsive: true
  }
}`},(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source)})});var _,L,O;c.parameters=a(e({},c.parameters),{docs:a(e({},(_=c.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    showQuickJumper: {
      goButton: <Icon name="alicorn" />
    }
  }
}`},(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source)})});var A,D,U;p.parameters=a(e({},p.parameters),{docs:a(e({},(A=p.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    showSizeChanger: true,
    total: 60
  }
}`},(U=(D=p.parameters)==null?void 0:D.docs)==null?void 0:U.source)})});var W,Y,X;g.parameters=a(e({},g.parameters),{docs:a(e({},(W=g.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    simple: true
  }
}`},(X=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:X.source)})});var q,F,G;d.parameters=a(e({},d.parameters),{docs:a(e({},(q=d.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  args: {
    showLessItems: true
  }
}`},(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source)})});var H,K,V;h.parameters=a(e({},h.parameters),{docs:a(e({},(H=h.parameters)==null?void 0:H.docs),{source:e({originalSource:"{\n  args: {\n    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`\n  }\n}"},(V=(K=h.parameters)==null?void 0:K.docs)==null?void 0:V.source)})});var Z,ee,re;S.parameters=a(e({},S.parameters),{docs:a(e({},(Z=S.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Basic pagination.">
        <Pagination defaultCurrent={1} total={50} />
      </ExampleStory>;
  }
}`},(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});var ae,te,oe;x.parameters=a(e({},x.parameters),{docs:a(e({},(ae=x.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="More Pages.">
        <Pagination defaultCurrent={6} total={500} />
      </ExampleStory>;
  }
}`},(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source)})});var ne,se,ie;C.parameters=a(e({},C.parameters),{docs:a(e({},(ne=C.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
  render: () => {
    const onShowSizeChange: IPaginationProps['onShowSizeChange'] = (current, pageSize) => {
      console.log(current, pageSize);
    };
    return <ExampleStory title="Change pageSize.">
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
        <br />
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} disabled />
      </ExampleStory>;
  }
}`},(ie=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ie.source)})});var le,ue,me;w.parameters=a(e({},w.parameters),{docs:a(e({},(le=w.parameters)==null?void 0:le.docs),{source:e({originalSource:`{
  render: () => {
    const onChange: IPaginationProps['onChange'] = pageNumber => {
      console.log('Page: ', pageNumber);
    };
    return <ExampleStory title="Jump to a page directly.">
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        <br />
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
      </ExampleStory>;
  }
}`},(me=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:me.source)})});var ce,pe,ge;P.parameters=a(e({},P.parameters),{docs:a(e({},(ce=P.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  render: () => {
    const showTotal: IPaginationProps['showTotal'] = total => \`Total \${total} items\`;
    return <ExampleStory title="Mini size pagination.">
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination size="small" total={50} showTotal={showTotal} />
        <Pagination size="small" total={50} disabled showTotal={showTotal} showSizeChanger showQuickJumper />
      </ExampleStory>;
  }
}`},(ge=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ge.source)})});var de,he,Se;f.parameters=a(e({},f.parameters),{docs:a(e({},(de=f.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Simple mode.">
        <Pagination simple defaultCurrent={2} total={50} />
        <br />
        <Pagination disabled simple defaultCurrent={2} total={50} />
      </ExampleStory>;
  }
}`},(Se=(he=f.parameters)==null?void 0:he.docs)==null?void 0:Se.source)})});var xe,Ce,we;z.parameters=a(e({},z.parameters),{docs:a(e({},(xe=z.parameters)==null?void 0:xe.docs),{source:e({originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(3);
    const onChange: IPaginationProps['onChange'] = page => {
      console.log(page);
      setCurrent(page);
    };
    return <ExampleStory title="Controlled page number.">
        <Pagination current={current} onChange={onChange} total={50} />
      </ExampleStory>;
  }
}`},(we=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:we.source)})});var Pe,fe,ze;E.parameters=a(e({},E.parameters),{docs:a(e({},(Pe=E.parameters)==null?void 0:Pe.docs),{source:e({originalSource:'{\n  render: () => {\n    return <ExampleStory title="You can show the total number of data by setting showTotal.">\n        <Pagination total={85} showTotal={total => `Total ${total} items`} defaultPageSize={20} defaultCurrent={1} />\n        <br />\n        <Pagination total={85} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} defaultPageSize={20} defaultCurrent={1} />\n      </ExampleStory>;\n  }\n}'},(ze=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ze.source)})});var Ee,je,ye;j.parameters=a(e({},j.parameters),{docs:a(e({},(Ee=j.parameters)==null?void 0:Ee.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Show all configured prop.">
        <Pagination total={85} showSizeChanger showQuickJumper showTotal={total => \`Total \${total} items\`} />
      </ExampleStory>;
  }
}`},(ye=(je=j.parameters)==null?void 0:je.docs)==null?void 0:ye.source)})});var Te,be,$e;y.parameters=a(e({},y.parameters),{docs:a(e({},(Te=y.parameters)==null?void 0:Te.docs),{source:e({originalSource:`{
  render: () => {
    const itemRender: IPaginationProps['itemRender'] = (_, type, originalElement) => {
      if (type === 'prev') {
        return <a>Previous</a>;
      }
      if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
    };
    return <ExampleStory title="Use text link for prev and next button.">
        <Pagination total={500} itemRender={itemRender} />
      </ExampleStory>;
  }
}`},($e=(be=y.parameters)==null?void 0:be.docs)==null?void 0:$e.source)})});const Be=["Primary","SmallSize","ResponsivePagination","ShowQuickJumperWithButton","ShowSizeChangerDynamic","SimplePagination","ShowLessItemsPagination","CustomTotalText","ExampleBasic","ExampleMorePages","ExampleChangePageSize","ExampleJump","ExampleMini","ExampleSimple","ExampleControlled","ExampleTotalNumber","ExampleShowAll","ExamplePrevNext"],We=Object.freeze(Object.defineProperty({__proto__:null,CustomTotalText:h,ExampleBasic:S,ExampleChangePageSize:C,ExampleControlled:z,ExampleJump:w,ExampleMini:P,ExampleMorePages:x,ExamplePrevNext:y,ExampleShowAll:j,ExampleSimple:f,ExampleTotalNumber:E,Primary:l,ResponsivePagination:m,ShowLessItemsPagination:d,ShowQuickJumperWithButton:c,ShowSizeChangerDynamic:p,SimplePagination:g,SmallSize:u,__namedExportsOrder:Be,default:Re},Symbol.toStringTag,{value:"Module"}));export{We as P,Re as m};
