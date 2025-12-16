var oe=Object.defineProperty,ce=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var T=(a,t,s)=>t in a?oe(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,e=(a,t)=>{for(var s in t||(t={}))le.call(t,s)&&T(a,s,t[s]);if(S)for(var s of S(t))de.call(t,s)&&T(a,s,t[s]);return a},n=(a,t)=>ce(a,ie(t));var b=(a,t,s)=>new Promise((te,z)=>{var ae=c=>{try{j(s.next(c))}catch(I){z(I)}},se=c=>{try{j(s.throw(c))}catch(I){z(I)}},j=c=>c.done?te(c.value):Promise.resolve(c.value).then(ae,se);j((s=s.apply(a,t)).next())});import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{e as i,I as o,F as ne,c as me,b as pe,T as B}from"./NavigationItemsService-WTZgN3kn.js";import{u as ue}from"./index-9E5VwD_6.js";import"./ErrorStateIcon-Blx6SzZO.js";import"./SuccessStateIcon-DLTjR5NH.js";import"./WarningStateIcon-CeDKqNwP.js";import"./_baseClone-DwBCp-Ss.js";const he={title:"Components/General/Button",component:a=>{var t;return r.jsx(i,n(e({},a),{children:(t=a.children)!=null?t:"Button Label"}))},args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},l={args:{type:"primary",children:"Create"},play:a=>b(void 0,null,function*(){const t=a.canvasElement.querySelector("button");if(t)yield ue.click(t);else throw new Error("Button not found")})},d={args:{type:"primary",icon:r.jsx(o,{name:"add",size:"sm"}),children:"Add"}},m={args:{type:"default",children:"Cancel"}},p={args:{type:"default",icon:r.jsx(o,{size:"sm",name:"transformation"}),children:"View Columns"}},u={args:{type:"dashed"}},h={args:{type:"dashed",icon:r.jsx(o,{size:"sm",name:"add"}),children:"Connect Output"}},y={args:{type:"link",children:"Retry"}},g={args:{type:"link",icon:r.jsx(o,{name:"add"}),children:"Add Audience Criteria"}},x={render:()=>r.jsx(r.Fragment,{children:r.jsxs(ne,{gap:"small",align:"center",children:[r.jsx(i,{icon:r.jsx(o,{name:"zoomOut"})}),r.jsx(me.Text,{children:"100%"}),r.jsx(i,{icon:r.jsx(o,{name:"zoomIn"})}),r.jsx(pe,{type:"vertical"}),r.jsx(i,{icon:r.jsx(o,{name:"fitToScreen"})})]})})},f={render:()=>r.jsx(r.Fragment,{children:r.jsxs(ne,{gap:"small",align:"center",children:[r.jsx(B,{title:"Fetch new data from the server",children:r.jsx(i,{type:"text",icon:r.jsx(o,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),r.jsx(B,{title:"Refresh and fetch latest data",children:r.jsx(i,{type:"text",icon:r.jsx(o,{name:"refresh",size:"sm",color:"strong"})})})]})})};var k,C,v;l.parameters=n(e({},l.parameters),{docs:n(e({},(k=l.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
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
}`},(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source)})});var D,w,F;d.parameters=n(e({},d.parameters),{docs:n(e({},(D=d.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Add'
  }
}`},(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source)})});var O,R,E;m.parameters=n(e({},m.parameters),{docs:n(e({},(O=m.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    children: 'Cancel'
  }
}`},(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source)})});var W,A,L;p.parameters=n(e({},p.parameters),{docs:n(e({},(W=p.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'View Columns'
  }
}`},(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source)})});var P,_,q;u.parameters=n(e({},u.parameters),{docs:n(e({},(P=u.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed'
  }
}`},(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source)})});var V,G,M;h.parameters=n(e({},h.parameters),{docs:n(e({},(V=h.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Connect Output'
  }
}`},(M=(G=h.parameters)==null?void 0:G.docs)==null?void 0:M.source)})});var H,J,K;y.parameters=n(e({},y.parameters),{docs:n(e({},(H=y.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    children: 'Retry'
  }
}`},(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var N,Q,U;g.parameters=n(e({},g.parameters),{docs:n(e({},(N=g.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Add Audience Criteria'
  }
}`},(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var X,Y,Z;x.parameters=n(e({},x.parameters),{docs:n(e({},(X=x.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
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
}`},(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var $,ee,re;f.parameters=n(e({},f.parameters),{docs:n(e({},($=f.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  render: () => {
    return <>
        <Flex gap="small" align="center">
          <Tooltip title="Fetch new data from the server">
            <Button type="text" icon={<Icon name="refresh" size="sm" color="text" />}>
              Refresh
            </Button>
          </Tooltip>

          <Tooltip title="Refresh and fetch latest data">
            <Button type="text" icon={<Icon name="refresh" size="sm" color="strong" />} />
          </Tooltip>
        </Flex>
      </>;
  }
}`},(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});const ye=["Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","IconOnly","Refresh"],be=Object.freeze(Object.defineProperty({__proto__:null,Dashed:u,DashedWithIcon:h,Default:m,DefaultWithIcon:p,IconOnly:x,Link:y,LinkWithIcon:g,Primary:l,PrimaryWithIcon:d,Refresh:f,__namedExportsOrder:ye,default:he},Symbol.toStringTag,{value:"Module"}));export{be as B,p as D,x as I,g as L,d as P,l as a,m as b,h as c,u as d,y as e};
