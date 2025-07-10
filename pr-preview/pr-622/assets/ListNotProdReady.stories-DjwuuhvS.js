var J=Object.defineProperty,K=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var S=(a,o,t)=>o in a?J(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,r=(a,o)=>{for(var t in o||(o={}))Q.call(o,t)&&S(a,t,o[t]);if(L)for(var t of L(o))W.call(o,t)&&S(a,t,o[t]);return a},e=(a,o)=>K(a,M(o));import{j as g}from"./jsx-runtime-BcCOBRXo.js";import{L as f}from"./NavigationItemsService-C50Ck2Cz.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const ir={title:"Components/Not Prod Ready/Data Display/List",component:a=>g.jsx(f,r({},a)),args:{dataSource:["item1","item2","item3"],renderItem:a=>g.jsx(f.Item,{children:a}),bordered:!1,footer:void 0,grid:void 0,header:void 0,itemLayout:"horizontal",loading:!1,locale:{emptyText:"No Data"},pagination:!1,size:"default",split:!0},argTypes:{itemLayout:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["default","large","small"]}}},s={},n={args:{bordered:!0}},i={args:{itemLayout:"vertical"}},c={args:{loading:!0}},m={args:{pagination:{current:1,total:50,pageSize:10}}},d={args:{grid:{gutter:16,column:4}}},p={args:{size:"large"}},u={args:{footer:g.jsx(g.Fragment,{children:"Custom Footer"})}},l={args:{split:!1}};var y,z,C;s.parameters=e(r({},s.parameters),{docs:e(r({},(y=s.parameters)==null?void 0:y.docs),{source:r({originalSource:"{}"},(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source)})});var x,v,I;n.parameters=e(r({},n.parameters),{docs:e(r({},(x=n.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  args: {
    bordered: true
  }
}`},(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source)})});var h,j,F;i.parameters=e(r({},i.parameters),{docs:e(r({},(h=i.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    itemLayout: 'vertical'
  }
}`},(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source)})});var P,N,b;c.parameters=e(r({},c.parameters),{docs:e(r({},(P=c.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    loading: true
  }
}`},(b=(N=c.parameters)==null?void 0:N.docs)==null?void 0:b.source)})});var D,B,E;m.parameters=e(r({},m.parameters),{docs:e(r({},(D=m.parameters)==null?void 0:D.docs),{source:r({originalSource:`{
  args: {
    pagination: {
      current: 1,
      total: 50,
      pageSize: 10
    }
  }
}`},(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source)})});var G,R,T;d.parameters=e(r({},d.parameters),{docs:e(r({},(G=d.parameters)==null?void 0:G.docs),{source:r({originalSource:`{
  args: {
    grid: {
      gutter: 16,
      column: 4
    }
  }
}`},(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source)})});var U,V,_;p.parameters=e(r({},p.parameters),{docs:e(r({},(U=p.parameters)==null?void 0:U.docs),{source:r({originalSource:`{
  args: {
    size: 'large'
  }
}`},(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source)})});var O,k,q;u.parameters=e(r({},u.parameters),{docs:e(r({},(O=u.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    footer: <>Custom Footer</>
  }
}`},(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source)})});var w,A,H;l.parameters=e(r({},l.parameters),{docs:e(r({},(w=l.parameters)==null?void 0:w.docs),{source:r({originalSource:`{
  args: {
    split: false
  }
}`},(H=(A=l.parameters)==null?void 0:A.docs)==null?void 0:H.source)})});const cr=["Primary","BorderedList","VerticalLayout","LoadingIndicator","CustomPagination","CustomGrid","LargeSizeList","CustomFooter","NoSplitUnderListItem"];export{n as BorderedList,u as CustomFooter,d as CustomGrid,m as CustomPagination,p as LargeSizeList,c as LoadingIndicator,l as NoSplitUnderListItem,s as Primary,i as VerticalLayout,cr as __namedExportsOrder,ir as default};
