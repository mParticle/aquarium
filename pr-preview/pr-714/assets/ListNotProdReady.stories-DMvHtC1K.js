import{j as m,L as p}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Not Prod Ready/Data Display/List",component:d=>m.jsx(p,{...d}),args:{dataSource:["item1","item2","item3"],renderItem:d=>m.jsx(p.Item,{children:d}),bordered:!1,footer:void 0,grid:void 0,header:void 0,itemLayout:"horizontal",loading:!1,locale:{emptyText:"No Data"},pagination:!1,size:"default",split:!0},argTypes:{itemLayout:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["default","large","small"]}}},r={},e={args:{bordered:!0}},a={args:{itemLayout:"vertical"}},o={args:{loading:!0}},s={args:{pagination:{current:1,total:50,pageSize:10}}},t={args:{grid:{gutter:16,column:4}}},n={args:{size:"large"}},i={args:{footer:m.jsx(m.Fragment,{children:"Custom Footer"})}},c={args:{split:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    itemLayout: 'vertical'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    pagination: {
      current: 1,
      total: 50,
      pageSize: 10
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    grid: {
      gutter: 16,
      column: 4
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    footer: <>Custom Footer</>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    split: false
  }
}`,...c.parameters?.docs?.source}}};const L=["Primary","BorderedList","VerticalLayout","LoadingIndicator","CustomPagination","CustomGrid","LargeSizeList","CustomFooter","NoSplitUnderListItem"];export{e as BorderedList,i as CustomFooter,t as CustomGrid,s as CustomPagination,n as LargeSizeList,o as LoadingIndicator,c as NoSplitUnderListItem,r as Primary,a as VerticalLayout,L as __namedExportsOrder,g as default};
