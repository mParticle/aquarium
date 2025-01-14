var ee=Object.defineProperty,re=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var b=(a,r,t)=>r in a?ee(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,e=(a,r)=>{for(var t in r||(r={}))ae.call(r,t)&&b(a,t,r[t]);if(S)for(var t of S(r))se.call(r,t)&&b(a,t,r[t]);return a},n=(a,r)=>re(a,ne(r));var z=(a,r,t)=>new Promise((Y,j)=>{var Z=o=>{try{x(t.next(o))}catch(I){j(I)}},$=o=>{try{x(t.throw(o))}catch(I){j(I)}},x=o=>o.done?Y(o.value):Promise.resolve(o.value).then(Z,$);x((t=t.apply(a,r)).next())});import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{c as f,I as c,F as te,e as oe}from"./GlobalNavigation-Dd580nG0.js";import{u as ce}from"./index-BU0ZtLqn.js";import"./_baseClone-DBzvlRjn.js";const ie={title:"Components/General/Button",component:a=>{var r;return s.jsx(f,n(e({},a),{children:(r=a.children)!=null?r:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},i={args:{type:"primary",children:"Create"},play:a=>z(void 0,null,function*(){const r=a.canvasElement.querySelector("button");if(r)yield ce.click(r);else throw new Error("Button not found")})},d={args:{type:"primary",icon:s.jsx(c,{name:"add",size:"sm"}),children:"Add"}},l={args:{type:"default",children:"Cancel"}},m={args:{type:"default",icon:s.jsx(c,{size:"sm",name:"transformation"}),children:"View Columns"}},p={args:{type:"dashed"}},u={args:{type:"dashed",icon:s.jsx(c,{size:"sm",name:"add"}),children:"Connect Output"}},y={args:{type:"link",children:"Retry"}},h={args:{type:"link",icon:s.jsx(c,{name:"add"}),children:"Add Audience Criteria"}},g={render:()=>s.jsx(s.Fragment,{children:s.jsxs(te,{gap:"small",align:"center",children:[s.jsx(f,{icon:s.jsx(c,{name:"zoomOut"})}),s.jsx("span",{children:"100%"}),s.jsx(f,{icon:s.jsx(c,{name:"zoomIn"})}),s.jsx(oe,{type:"vertical"}),s.jsx(f,{icon:s.jsx(c,{name:"fitToScreen"})})]})})};var k,C,D;i.parameters=n(e({},i.parameters),{docs:n(e({},(k=i.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    children: 'Create'
  },
  play: async context => {
    const button = context.canvasElement.querySelector('button');
    if (button) {
      await userEvent.click(button); // Click the button
    } else {
      throw new Error('Button not found');
    }
  }
}`},(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source)})});var B,v,O;d.parameters=n(e({},d.parameters),{docs:n(e({},(B=d.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Add'
  }
}`},(O=(v=d.parameters)==null?void 0:v.docs)==null?void 0:O.source)})});var w,E,W;l.parameters=n(e({},l.parameters),{docs:n(e({},(w=l.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    children: 'Cancel'
  }
}`},(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source)})});var A,L,P;m.parameters=n(e({},m.parameters),{docs:n(e({},(A=m.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'View Columns'
  }
}`},(P=(L=m.parameters)==null?void 0:L.docs)==null?void 0:P.source)})});var _,F,T;p.parameters=n(e({},p.parameters),{docs:n(e({},(_=p.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed'
  }
}`},(T=(F=p.parameters)==null?void 0:F.docs)==null?void 0:T.source)})});var R,q,V;u.parameters=n(e({},u.parameters),{docs:n(e({},(R=u.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Connect Output'
  }
}`},(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source)})});var G,M,H;y.parameters=n(e({},y.parameters),{docs:n(e({},(G=y.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    children: 'Retry'
  }
}`},(H=(M=y.parameters)==null?void 0:M.docs)==null?void 0:H.source)})});var J,K,N;h.parameters=n(e({},h.parameters),{docs:n(e({},(J=h.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Add Audience Criteria'
  }
}`},(N=(K=h.parameters)==null?void 0:K.docs)==null?void 0:N.source)})});var Q,U,X;g.parameters=n(e({},g.parameters),{docs:n(e({},(Q=g.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  render: () => {
    return <>
        <Flex gap="small" align="center">
          <Button icon={<Icon name="zoomOut" />} />
          <span>100%</span>
          <Button icon={<Icon name="zoomIn" />} />
          <Divider type="vertical" />
          <Button icon={<Icon name="fitToScreen" />} />
        </Flex>
      </>;
  }
}`},(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source)})});const de=["Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","IconOnly"],he=Object.freeze(Object.defineProperty({__proto__:null,Dashed:p,DashedWithIcon:u,Default:l,DefaultWithIcon:m,IconOnly:g,Link:y,LinkWithIcon:h,Primary:i,PrimaryWithIcon:d,__namedExportsOrder:de,default:ie},Symbol.toStringTag,{value:"Module"}));export{he as B,m as D,g as I,h as L,d as P,i as a,l as b,u as c,p as d,y as e};
