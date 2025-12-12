var Je=Object.defineProperty,ke=Object.defineProperties;var Qe=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var $=(r,o,n)=>o in r?Je(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,e=(r,o)=>{for(var n in o||(o={}))ve.call(o,n)&&$(r,n,o[n]);if(b)for(var n of b(o))Ie.call(o,n)&&$(r,n,o[n]);return r},t=(r,o)=>ke(r,Qe(o));import{j as a}from"./jsx-runtime-C9TrHvcC.js";import{a7 as s,I as Ne}from"./NavigationItemsService-DckIeg9P.js";import"./ErrorStateIcon-tcH5z2Kq.js";import"./SuccessStateIcon--57R4X2e.js";import"./WarningStateIcon-BxWKhc6z.js";import"./_baseClone-DwBCp-Ss.js";import{E as i}from"./ExampleStory-C2GnqyEh.js";import{r as Re}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BAkx2Mzk.js";import"./WarningFilled-D6ijQqgK.js";const tr={title:"Components/Not Prod Ready/Navigation/Pagination",component:s,args:{current:1,defaultCurrent:1,defaultPageSize:10,disabled:!1,hideOnSinglePage:!1,itemRender:(r,o,n)=>o==="page"?a.jsx("a",{children:r}):n,pageSize:10,pageSizeOptions:[10,20,50,100],responsive:!1,showLessItems:!1,showQuickJumper:!1,showSizeChanger:!1,showTitle:!0,showTotal:(r,o)=>`Total ${r} items`,simple:!1,size:"default",total:27,onChange:(r,o)=>{alert(`Page changed to ${r}, Page Size: ${o}`)},onShowSizeChange:(r,o)=>{alert(`Page Size changed to ${o}, Current Page: ${r}`)}}},m={},u={args:{size:"small"}},p={args:{responsive:!0}},c={args:{showQuickJumper:{goButton:a.jsx(Ne,{name:"alicorn"})}}},g={args:{showSizeChanger:!0,total:60}},d={args:{simple:!0}},h={args:{showLessItems:!0}},S={args:{showTotal:(r,o)=>`Showing ${o[0]}-${o[1]} of ${r} items`}},x={render:()=>a.jsx(i,{title:"Basic pagination.",children:a.jsx(s,{defaultCurrent:1,total:50})})},C={render:()=>a.jsx(i,{title:"More Pages.",children:a.jsx(s,{defaultCurrent:6,total:500})})},w={render:()=>{const r=(o,n)=>{console.log(o,n)};return a.jsxs(i,{title:"Change pageSize.",children:[a.jsx(s,{showSizeChanger:!0,onShowSizeChange:r,defaultCurrent:3,total:500}),a.jsx("br",{}),a.jsx(s,{showSizeChanger:!0,onShowSizeChange:r,defaultCurrent:3,total:500,disabled:!0})]})}},P={render:()=>{const r=o=>{console.log("Page: ",o)};return a.jsxs(i,{title:"Jump to a page directly.",children:[a.jsx(s,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:r}),a.jsx("br",{}),a.jsx(s,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:r,disabled:!0})]})}},f={render:()=>{const r=o=>`Total ${o} items`;return a.jsxs(i,{title:"Mini size pagination.",children:[a.jsx(s,{size:"small",total:50}),a.jsx(s,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),a.jsx(s,{size:"small",total:50,showTotal:r}),a.jsx(s,{size:"small",total:50,disabled:!0,showTotal:r,showSizeChanger:!0,showQuickJumper:!0})]})}},z={render:()=>a.jsxs(i,{title:"Simple mode.",children:[a.jsx(s,{simple:!0,defaultCurrent:2,total:50}),a.jsx("br",{}),a.jsx(s,{disabled:!0,simple:!0,defaultCurrent:2,total:50})]})},E={render:()=>{const[r,o]=Re.useState(3),n=l=>{console.log(l),o(l)};return a.jsx(i,{title:"Controlled page number.",children:a.jsx(s,{current:r,onChange:n,total:50})})}},j={render:()=>a.jsxs(i,{title:"You can show the total number of data by setting showTotal.",children:[a.jsx(s,{total:85,showTotal:r=>`Total ${r} items`,defaultPageSize:20,defaultCurrent:1}),a.jsx("br",{}),a.jsx(s,{total:85,showTotal:(r,o)=>`${o[0]}-${o[1]} of ${r} items`,defaultPageSize:20,defaultCurrent:1})]})},y={render:()=>a.jsx(i,{title:"Show all configured prop.",children:a.jsx(s,{total:85,showSizeChanger:!0,showQuickJumper:!0,showTotal:r=>`Total ${r} items`})})},T={render:()=>{const r=(o,n,l)=>n==="prev"?a.jsx("a",{children:"Previous"}):n==="next"?a.jsx("a",{children:"Next"}):l;return a.jsx(i,{title:"Use text link for prev and next button.",children:a.jsx(s,{total:500,itemRender:r})})}};var J,k,Q;m.parameters=t(e({},m.parameters),{docs:t(e({},(J=m.parameters)==null?void 0:J.docs),{source:e({originalSource:"{}"},(Q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:Q.source)})});var v,I,N;u.parameters=t(e({},u.parameters),{docs:t(e({},(v=u.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source)})});var R,B,M;p.parameters=t(e({},p.parameters),{docs:t(e({},(R=p.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    responsive: true
  }
}`},(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source)})});var L,_,O;c.parameters=t(e({},c.parameters),{docs:t(e({},(L=c.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  args: {
    showQuickJumper: {
      goButton: <Icon name="alicorn" />
    }
  }
}`},(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source)})});var A,D,U;g.parameters=t(e({},g.parameters),{docs:t(e({},(A=g.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    showSizeChanger: true,
    total: 60
  }
}`},(U=(D=g.parameters)==null?void 0:D.docs)==null?void 0:U.source)})});var W,Y,q;d.parameters=t(e({},d.parameters),{docs:t(e({},(W=d.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    simple: true
  }
}`},(q=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:q.source)})});var F,G,H;h.parameters=t(e({},h.parameters),{docs:t(e({},(F=h.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    showLessItems: true
  }
}`},(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var K,V,X;S.parameters=t(e({},S.parameters),{docs:t(e({},(K=S.parameters)==null?void 0:K.docs),{source:e({originalSource:"{\n  args: {\n    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`\n  }\n}"},(X=(V=S.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Z,ee,re;x.parameters=t(e({},x.parameters),{docs:t(e({},(Z=x.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Basic pagination.">
        <Pagination defaultCurrent={1} total={50} />
      </ExampleStory>;
  }
}`},(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});var te,ae,oe;C.parameters=t(e({},C.parameters),{docs:t(e({},(te=C.parameters)==null?void 0:te.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="More Pages.">
        <Pagination defaultCurrent={6} total={500} />
      </ExampleStory>;
  }
}`},(oe=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:oe.source)})});var ne,se,ie;w.parameters=t(e({},w.parameters),{docs:t(e({},(ne=w.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
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
}`},(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.source)})});var le,me,ue;P.parameters=t(e({},P.parameters),{docs:t(e({},(le=P.parameters)==null?void 0:le.docs),{source:e({originalSource:`{
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
}`},(ue=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ue.source)})});var pe,ce,ge;f.parameters=t(e({},f.parameters),{docs:t(e({},(pe=f.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
  render: () => {
    const showTotal: IPaginationProps['showTotal'] = total => \`Total \${total} items\`;
    return <ExampleStory title="Mini size pagination.">
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination size="small" total={50} showTotal={showTotal} />
        <Pagination size="small" total={50} disabled showTotal={showTotal} showSizeChanger showQuickJumper />
      </ExampleStory>;
  }
}`},(ge=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ge.source)})});var de,he,Se;z.parameters=t(e({},z.parameters),{docs:t(e({},(de=z.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Simple mode.">
        <Pagination simple defaultCurrent={2} total={50} />
        <br />
        <Pagination disabled simple defaultCurrent={2} total={50} />
      </ExampleStory>;
  }
}`},(Se=(he=z.parameters)==null?void 0:he.docs)==null?void 0:Se.source)})});var xe,Ce,we;E.parameters=t(e({},E.parameters),{docs:t(e({},(xe=E.parameters)==null?void 0:xe.docs),{source:e({originalSource:`{
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
}`},(we=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:we.source)})});var Pe,fe,ze;j.parameters=t(e({},j.parameters),{docs:t(e({},(Pe=j.parameters)==null?void 0:Pe.docs),{source:e({originalSource:'{\n  render: () => {\n    return <ExampleStory title="You can show the total number of data by setting showTotal.">\n        <Pagination total={85} showTotal={total => `Total ${total} items`} defaultPageSize={20} defaultCurrent={1} />\n        <br />\n        <Pagination total={85} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} defaultPageSize={20} defaultCurrent={1} />\n      </ExampleStory>;\n  }\n}'},(ze=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:ze.source)})});var Ee,je,ye;y.parameters=t(e({},y.parameters),{docs:t(e({},(Ee=y.parameters)==null?void 0:Ee.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Show all configured prop.">
        <Pagination total={85} showSizeChanger showQuickJumper showTotal={total => \`Total \${total} items\`} />
      </ExampleStory>;
  }
}`},(ye=(je=y.parameters)==null?void 0:je.docs)==null?void 0:ye.source)})});var Te,be,$e;T.parameters=t(e({},T.parameters),{docs:t(e({},(Te=T.parameters)==null?void 0:Te.docs),{source:e({originalSource:`{
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
}`},($e=(be=T.parameters)==null?void 0:be.docs)==null?void 0:$e.source)})});const ar=["Primary","SmallSize","ResponsivePagination","ShowQuickJumperWithButton","ShowSizeChangerDynamic","SimplePagination","ShowLessItemsPagination","CustomTotalText","ExampleBasic","ExampleMorePages","ExampleChangePageSize","ExampleJump","ExampleMini","ExampleSimple","ExampleControlled","ExampleTotalNumber","ExampleShowAll","ExamplePrevNext"];export{S as CustomTotalText,x as ExampleBasic,w as ExampleChangePageSize,E as ExampleControlled,P as ExampleJump,f as ExampleMini,C as ExampleMorePages,T as ExamplePrevNext,y as ExampleShowAll,z as ExampleSimple,j as ExampleTotalNumber,m as Primary,p as ResponsivePagination,h as ShowLessItemsPagination,c as ShowQuickJumperWithButton,g as ShowSizeChangerDynamic,d as SimplePagination,u as SmallSize,ar as __namedExportsOrder,tr as default};
