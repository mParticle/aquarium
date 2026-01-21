import{j as e}from"./jsx-runtime-u17CrQMm.js";import{ab as a,I as y}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{E as o}from"./ExampleStory-B49bSB_-.js";import{r as T}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const q={title:"Components/Not Prod Ready/Navigation/Pagination",component:a,args:{current:1,defaultCurrent:1,defaultPageSize:10,disabled:!1,hideOnSinglePage:!1,itemRender:(r,t,n)=>t==="page"?e.jsx("a",{children:r}):n,pageSize:10,pageSizeOptions:[10,20,50,100],responsive:!1,showLessItems:!1,showQuickJumper:!1,showSizeChanger:!1,showTitle:!0,showTotal:(r,t)=>`Total ${r} items`,simple:!1,size:"default",total:27,onChange:(r,t)=>{alert(`Page changed to ${r}, Page Size: ${t}`)},onShowSizeChange:(r,t)=>{alert(`Page Size changed to ${t}, Current Page: ${r}`)}}},i={},l={args:{size:"small"}},m={args:{responsive:!0}},u={args:{showQuickJumper:{goButton:e.jsx(y,{name:"alicorn"})}}},p={args:{showSizeChanger:!0,total:60}},c={args:{simple:!0}},g={args:{showLessItems:!0}},d={args:{showTotal:(r,t)=>`Showing ${t[0]}-${t[1]} of ${r} items`}},h={render:()=>e.jsx(o,{title:"Basic pagination.",children:e.jsx(a,{defaultCurrent:1,total:50})})},S={render:()=>e.jsx(o,{title:"More Pages.",children:e.jsx(a,{defaultCurrent:6,total:500})})},x={render:()=>{const r=(t,n)=>{console.log(t,n)};return e.jsxs(o,{title:"Change pageSize.",children:[e.jsx(a,{showSizeChanger:!0,onShowSizeChange:r,defaultCurrent:3,total:500}),e.jsx("br",{}),e.jsx(a,{showSizeChanger:!0,onShowSizeChange:r,defaultCurrent:3,total:500,disabled:!0})]})}},C={render:()=>{const r=t=>{console.log("Page: ",t)};return e.jsxs(o,{title:"Jump to a page directly.",children:[e.jsx(a,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:r}),e.jsx("br",{}),e.jsx(a,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:r,disabled:!0})]})}},w={render:()=>{const r=t=>`Total ${t} items`;return e.jsxs(o,{title:"Mini size pagination.",children:[e.jsx(a,{size:"small",total:50}),e.jsx(a,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),e.jsx(a,{size:"small",total:50,showTotal:r}),e.jsx(a,{size:"small",total:50,disabled:!0,showTotal:r,showSizeChanger:!0,showQuickJumper:!0})]})}},P={render:()=>e.jsxs(o,{title:"Simple mode.",children:[e.jsx(a,{simple:!0,defaultCurrent:2,total:50}),e.jsx("br",{}),e.jsx(a,{disabled:!0,simple:!0,defaultCurrent:2,total:50})]})},f={render:()=>{const[r,t]=T.useState(3),n=s=>{console.log(s),t(s)};return e.jsx(o,{title:"Controlled page number.",children:e.jsx(a,{current:r,onChange:n,total:50})})}},z={render:()=>e.jsxs(o,{title:"You can show the total number of data by setting showTotal.",children:[e.jsx(a,{total:85,showTotal:r=>`Total ${r} items`,defaultPageSize:20,defaultCurrent:1}),e.jsx("br",{}),e.jsx(a,{total:85,showTotal:(r,t)=>`${t[0]}-${t[1]} of ${r} items`,defaultPageSize:20,defaultCurrent:1})]})},E={render:()=>e.jsx(o,{title:"Show all configured prop.",children:e.jsx(a,{total:85,showSizeChanger:!0,showQuickJumper:!0,showTotal:r=>`Total ${r} items`})})},j={render:()=>{const r=(t,n,s)=>n==="prev"?e.jsx("a",{children:"Previous"}):n==="next"?e.jsx("a",{children:"Next"}):s;return e.jsx(o,{title:"Use text link for prev and next button.",children:e.jsx(a,{total:500,itemRender:r})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    responsive: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showQuickJumper: {
      goButton: <Icon name="alicorn" />
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showSizeChanger: true,
    total: 60
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    simple: true
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    showLessItems: true
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`\n  }\n}",...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Basic pagination.">
        <Pagination defaultCurrent={1} total={50} />
      </ExampleStory>;
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="More Pages.">
        <Pagination defaultCurrent={6} total={500} />
      </ExampleStory>;
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const showTotal: IPaginationProps['showTotal'] = total => \`Total \${total} items\`;
    return <ExampleStory title="Mini size pagination.">
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination size="small" total={50} showTotal={showTotal} />
        <Pagination size="small" total={50} disabled showTotal={showTotal} showSizeChanger showQuickJumper />
      </ExampleStory>;
  }
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Simple mode.">
        <Pagination simple defaultCurrent={2} total={50} />
        <br />
        <Pagination disabled simple defaultCurrent={2} total={50} />
      </ExampleStory>;
  }
}`,...P.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <ExampleStory title="You can show the total number of data by setting showTotal.">\n        <Pagination total={85} showTotal={total => `Total ${total} items`} defaultPageSize={20} defaultCurrent={1} />\n        <br />\n        <Pagination total={85} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} defaultPageSize={20} defaultCurrent={1} />\n      </ExampleStory>;\n  }\n}',...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Show all configured prop.">
        <Pagination total={85} showSizeChanger showQuickJumper showTotal={total => \`Total \${total} items\`} />
      </ExampleStory>;
  }
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const F=["Primary","SmallSize","ResponsivePagination","ShowQuickJumperWithButton","ShowSizeChangerDynamic","SimplePagination","ShowLessItemsPagination","CustomTotalText","ExampleBasic","ExampleMorePages","ExampleChangePageSize","ExampleJump","ExampleMini","ExampleSimple","ExampleControlled","ExampleTotalNumber","ExampleShowAll","ExamplePrevNext"];export{d as CustomTotalText,h as ExampleBasic,x as ExampleChangePageSize,f as ExampleControlled,C as ExampleJump,w as ExampleMini,S as ExampleMorePages,j as ExamplePrevNext,E as ExampleShowAll,P as ExampleSimple,z as ExampleTotalNumber,i as Primary,m as ResponsivePagination,g as ShowLessItemsPagination,u as ShowQuickJumperWithButton,p as ShowSizeChangerDynamic,c as SimplePagination,l as SmallSize,F as __namedExportsOrder,q as default};
