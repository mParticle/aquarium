var J=Object.defineProperty,K=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var S=(o,a,t)=>a in o?J(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,r=(o,a)=>{for(var t in a||(a={}))Q.call(a,t)&&S(o,t,a[t]);if(L)for(var t of L(a))W.call(a,t)&&S(o,t,a[t]);return o},e=(o,a)=>K(o,M(a));import{j as g}from"./jsx-runtime-CVnACwZl.js";import{L as f}from"./NavigationItemsService-YeOdRdLJ.js";import"./index-3OP4wdng.js";import"./ErrorStateIcon-DxzO0Lf8.js";import"./style-C11LJCJh.js";import"./extends-CF3RwP-h.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./WarningFilled-Z3CHH0B0.js";import"./SuccessStateIcon-BWqCdJgP.js";import"./WarningStateIcon-D0I_b7vf.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";const gr={title:"Components/Not Prod Ready/Data Display/List",component:o=>g.jsx(f,r({},o)),args:{dataSource:["item1","item2","item3"],renderItem:o=>g.jsx(f.Item,{children:o}),bordered:!1,footer:void 0,grid:void 0,header:void 0,itemLayout:"horizontal",loading:!1,locale:{emptyText:"No Data"},pagination:!1,size:"default",split:!0},argTypes:{itemLayout:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["default","large","small"]}}},s={},i={args:{bordered:!0}},n={args:{itemLayout:"vertical"}},m={args:{loading:!0}},c={args:{pagination:{current:1,total:50,pageSize:10}}},p={args:{grid:{gutter:16,column:4}}},d={args:{size:"large"}},u={args:{footer:g.jsx(g.Fragment,{children:"Custom Footer"})}},l={args:{split:!1}};var y,z,C;s.parameters=e(r({},s.parameters),{docs:e(r({},(y=s.parameters)==null?void 0:y.docs),{source:r({originalSource:"{}"},(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source)})});var x,v,I;i.parameters=e(r({},i.parameters),{docs:e(r({},(x=i.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  args: {
    bordered: true
  }
}`},(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source)})});var h,j,F;n.parameters=e(r({},n.parameters),{docs:e(r({},(h=n.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    itemLayout: 'vertical'
  }
}`},(F=(j=n.parameters)==null?void 0:j.docs)==null?void 0:F.source)})});var P,N,b;m.parameters=e(r({},m.parameters),{docs:e(r({},(P=m.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    loading: true
  }
}`},(b=(N=m.parameters)==null?void 0:N.docs)==null?void 0:b.source)})});var D,B,E;c.parameters=e(r({},c.parameters),{docs:e(r({},(D=c.parameters)==null?void 0:D.docs),{source:r({originalSource:`{
  args: {
    pagination: {
      current: 1,
      total: 50,
      pageSize: 10
    }
  }
}`},(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source)})});var G,R,T;p.parameters=e(r({},p.parameters),{docs:e(r({},(G=p.parameters)==null?void 0:G.docs),{source:r({originalSource:`{
  args: {
    grid: {
      gutter: 16,
      column: 4
    }
  }
}`},(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source)})});var U,V,_;d.parameters=e(r({},d.parameters),{docs:e(r({},(U=d.parameters)==null?void 0:U.docs),{source:r({originalSource:`{
  args: {
    size: 'large'
  }
}`},(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source)})});var O,k,q;u.parameters=e(r({},u.parameters),{docs:e(r({},(O=u.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    footer: <>Custom Footer</>
  }
}`},(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source)})});var w,A,H;l.parameters=e(r({},l.parameters),{docs:e(r({},(w=l.parameters)==null?void 0:w.docs),{source:r({originalSource:`{
  args: {
    split: false
  }
}`},(H=(A=l.parameters)==null?void 0:A.docs)==null?void 0:H.source)})});const Lr=["Primary","BorderedList","VerticalLayout","LoadingIndicator","CustomPagination","CustomGrid","LargeSizeList","CustomFooter","NoSplitUnderListItem"];export{i as BorderedList,u as CustomFooter,p as CustomGrid,c as CustomPagination,d as LargeSizeList,m as LoadingIndicator,l as NoSplitUnderListItem,s as Primary,n as VerticalLayout,Lr as __namedExportsOrder,gr as default};
