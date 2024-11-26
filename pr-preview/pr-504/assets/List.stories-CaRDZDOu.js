var H=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var S=(a,o,s)=>o in a?H(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,r=(a,o)=>{for(var s in o||(o={}))Q.call(o,s)&&S(a,s,o[s]);if(L)for(var s of L(o))W.call(o,s)&&S(a,s,o[s]);return a},e=(a,o)=>J(a,K(o));import{j as g}from"./jsx-runtime-BcCOBRXo.js";import{L as f}from"./GlobalNavigation-IKF90X1u.js";const X={title:"Components/Data Display/List",component:a=>g.jsx(f,r({},a)),args:{dataSource:["item1","item2","item3"],renderItem:a=>g.jsx(f.Item,{children:a}),bordered:!1,footer:void 0,grid:void 0,header:void 0,itemLayout:"horizontal",loading:!1,locale:{emptyText:"No Data"},pagination:!1,size:"default",split:!0},argTypes:{itemLayout:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["default","large","small"]}}},t={},n={args:{bordered:!0}},i={args:{itemLayout:"vertical"}},c={args:{loading:!0}},m={args:{pagination:{current:1,total:50,pageSize:10}}},d={args:{grid:{gutter:16,column:4}}},p={args:{size:"large"}},u={args:{footer:g.jsx(g.Fragment,{children:"Custom Footer"})}},l={args:{split:!1}};var y,z,C;t.parameters=e(r({},t.parameters),{docs:e(r({},(y=t.parameters)==null?void 0:y.docs),{source:r({originalSource:"{}"},(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source)})});var x,j,v;n.parameters=e(r({},n.parameters),{docs:e(r({},(x=n.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  args: {
    bordered: true
  }
}`},(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source)})});var b,I,_;i.parameters=e(r({},i.parameters),{docs:e(r({},(b=i.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    itemLayout: 'vertical'
  }
}`},(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source)})});var h,F,P;c.parameters=e(r({},c.parameters),{docs:e(r({},(h=c.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    loading: true
  }
}`},(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source)})});var D,N,O;m.parameters=e(r({},m.parameters),{docs:e(r({},(D=m.parameters)==null?void 0:D.docs),{source:r({originalSource:`{
  args: {
    pagination: {
      current: 1,
      total: 50,
      pageSize: 10
    }
  }
}`},(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source)})});var T,B,E;d.parameters=e(r({},d.parameters),{docs:e(r({},(T=d.parameters)==null?void 0:T.docs),{source:r({originalSource:`{
  args: {
    grid: {
      gutter: 16,
      column: 4
    }
  }
}`},(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source)})});var G,U,V;p.parameters=e(r({},p.parameters),{docs:e(r({},(G=p.parameters)==null?void 0:G.docs),{source:r({originalSource:`{
  args: {
    size: 'large'
  }
}`},(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var M,R,k;u.parameters=e(r({},u.parameters),{docs:e(r({},(M=u.parameters)==null?void 0:M.docs),{source:r({originalSource:`{
  args: {
    footer: <>Custom Footer</>
  }
}`},(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source)})});var q,w,A;l.parameters=e(r({},l.parameters),{docs:e(r({},(q=l.parameters)==null?void 0:q.docs),{source:r({originalSource:`{
  args: {
    split: false
  }
}`},(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source)})});const Y=["Primary","BorderedList","VerticalLayout","LoadingIndicator","CustomPagination","CustomGrid","LargeSizeList","CustomFooter","NoSplitUnderListItem"],er=Object.freeze(Object.defineProperty({__proto__:null,BorderedList:n,CustomFooter:u,CustomGrid:d,CustomPagination:m,LargeSizeList:p,LoadingIndicator:c,NoSplitUnderListItem:l,Primary:t,VerticalLayout:i,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{er as L,X as m};
