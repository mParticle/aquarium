var ee=Object.defineProperty,re=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var b=(n,r,t)=>r in n?ee(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t,e=(n,r)=>{for(var t in r||(r={}))ne.call(r,t)&&b(n,t,r[t]);if(S)for(var t of S(r))se.call(r,t)&&b(n,t,r[t]);return n},a=(n,r)=>re(n,ae(r));var z=(n,r,t)=>new Promise((Y,j)=>{var Z=o=>{try{x(t.next(o))}catch(I){j(I)}},$=o=>{try{x(t.throw(o))}catch(I){j(I)}},x=o=>o.done?Y(o.value):Promise.resolve(o.value).then(Z,$);x((t=t.apply(n,r)).next())});import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{g as f,I as c,F as te,f as oe,c as ce}from"./NavigationItemsService-8V5giOZP.js";import{u as ie}from"./index-BU0ZtLqn.js";import"./_baseClone-DBzvlRjn.js";const de={title:"Components/General/Button",component:n=>{var r;return s.jsx(f,a(e({},n),{children:(r=n.children)!=null?r:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},i={args:{type:"primary",children:"Create"},play:n=>z(void 0,null,function*(){const r=n.canvasElement.querySelector("button");if(r)yield ie.click(r);else throw new Error("Button not found")})},d={args:{type:"primary",icon:s.jsx(c,{name:"add",size:"sm"}),children:"Add"}},l={args:{type:"default",children:"Cancel"}},m={args:{type:"default",icon:s.jsx(c,{size:"sm",name:"transformation"}),children:"View Columns"}},p={args:{type:"dashed"}},u={args:{type:"dashed",icon:s.jsx(c,{size:"sm",name:"add"}),children:"Connect Output"}},y={args:{type:"link",children:"Retry"}},h={args:{type:"link",icon:s.jsx(c,{name:"add"}),children:"Add Audience Criteria"}},g={render:()=>s.jsx(s.Fragment,{children:s.jsxs(te,{gap:"small",align:"center",children:[s.jsx(f,{icon:s.jsx(c,{name:"zoomOut"})}),s.jsx(oe.Text,{children:"100%"}),s.jsx(f,{icon:s.jsx(c,{name:"zoomIn"})}),s.jsx(ce,{type:"vertical"}),s.jsx(f,{icon:s.jsx(c,{name:"fitToScreen"})})]})})};var k,C,D;i.parameters=a(e({},i.parameters),{docs:a(e({},(k=i.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
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
}`},(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source)})});var B,T,v;d.parameters=a(e({},d.parameters),{docs:a(e({},(B=d.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Add'
  }
}`},(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source)})});var O,w,E;l.parameters=a(e({},l.parameters),{docs:a(e({},(O=l.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    children: 'Cancel'
  }
}`},(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source)})});var W,A,L;m.parameters=a(e({},m.parameters),{docs:a(e({},(W=m.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'View Columns'
  }
}`},(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source)})});var P,_,F;p.parameters=a(e({},p.parameters),{docs:a(e({},(P=p.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed'
  }
}`},(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source)})});var R,q,V;u.parameters=a(e({},u.parameters),{docs:a(e({},(R=u.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Connect Output'
  }
}`},(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source)})});var G,M,H;y.parameters=a(e({},y.parameters),{docs:a(e({},(G=y.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    children: 'Retry'
  }
}`},(H=(M=y.parameters)==null?void 0:M.docs)==null?void 0:H.source)})});var J,K,N;h.parameters=a(e({},h.parameters),{docs:a(e({},(J=h.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Add Audience Criteria'
  }
}`},(N=(K=h.parameters)==null?void 0:K.docs)==null?void 0:N.source)})});var Q,U,X;g.parameters=a(e({},g.parameters),{docs:a(e({},(Q=g.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  render: () => {
    return <>
        <Flex gap="small" align="center">
          <Button icon={<Icon name="zoomOut" />} />
          <Typography.Text>100%</Typography.Text>
          <Button icon={<Icon name="zoomIn" />} />
          <Divider type="vertical" />
          <Button icon={<Icon name="fitToScreen" />} />
        </Flex>
      </>;
  }
}`},(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source)})});const le=["Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","IconOnly"],ge=Object.freeze(Object.defineProperty({__proto__:null,Dashed:p,DashedWithIcon:u,Default:l,DefaultWithIcon:m,IconOnly:g,Link:y,LinkWithIcon:h,Primary:i,PrimaryWithIcon:d,__namedExportsOrder:le,default:de},Symbol.toStringTag,{value:"Module"}));export{ge as B,m as D,g as I,h as L,d as P,i as a,l as b,u as c,p as d,y as e};
