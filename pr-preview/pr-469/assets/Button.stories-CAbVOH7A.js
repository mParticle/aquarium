var _e=Object.defineProperty,Oe=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var E=(o,a,s)=>a in o?_e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,e=(o,a)=>{for(var s in a||(a={}))Fe.call(a,s)&&E(o,s,a[s]);if(W)for(var s of W(a))He.call(a,s)&&E(o,s,a[s]);return o},r=(o,a)=>Oe(o,Ae(a));var j=(o,a,s)=>new Promise((Te,D)=>{var Ge=t=>{try{L(s.next(t))}catch(z){D(z)}},qe=t=>{try{L(s.throw(t))}catch(z){D(z)}},L=t=>t.done?Te(t.value):Promise.resolve(t.value).then(Ge,qe);L((s=s.apply(o,a)).next())});import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{B as Je,I as C}from"./GlobalNavigation-DpExnP0a.js";import{u as Ke}from"./index-C7MMNn6a.js";import"./ConfigProvider-BRwLXval.js";import"./_baseClone-BjCwUuX-.js";import"./index-CNk6hRaE.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./index-TL6_15PV.js";import"./LightTheme-BtoaoHMG.js";import"./_getPrototype-CAOE_2rY.js";const dr={title:"Components/General/Button",component:o=>{var a;return n.jsx(Je,r(e({},o),{children:(a=o.children)!=null?a:"Button Label"}))},args:{block:!1,danger:!1,disabled:!1,ghost:!1,href:void 0,htmlType:"button",icon:void 0,loading:!1,shape:"default",size:"middle",target:void 0,type:"primary",onClick:void 0},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},c={play:o=>j(void 0,null,function*(){const a=o.canvasElement.querySelector("button");if(a)yield Ke.click(a);else throw new Error("Button not found")})},i={args:{type:"default"}},m={args:{type:"dashed"}},p={args:{type:"text"}},d={args:{type:"link"}},u={args:{danger:!0}},l={args:{disabled:!0}},g={args:{ghost:!0}},h={args:{block:!0}},f={args:{icon:n.jsx(C,{name:"mpLogo"})}},y={args:{type:"default",icon:n.jsx(C,{name:"mpLogo",size:"sm"}),variant:"with-new-icon"}},S={args:{type:"default",icon:n.jsx(C,{name:"mpLogo",size:"sm",color:"default"}),variant:"with-new-icon"}},k={args:{icon:n.jsx(C,{name:"dataPlatform",size:"xl"}),children:" ",type:"default",shape:"round",variant:"with-new-icon"}},w={args:{loading:!0}},x={args:{shape:"circle"}},b={args:{shape:"round"}},v={args:{size:"large"}},B={args:{size:"small"}},I={args:{onClick:o=>{alert("Button Clicked")}}};var P,R,M;c.parameters=r(e({},c.parameters),{docs:r(e({},(P=c.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  play: async context => {
    const button = context.canvasElement.querySelector('button');
    if (button) {
      await userEvent.click(button); // Click the button
    } else {
      throw new Error('Button not found');
    }
  }
}`},(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source)})});var T,G,q;i.parameters=r(e({},i.parameters),{docs:r(e({},(T=i.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    type: 'default'
  }
}`},(q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:q.source)})});var _,O,A;m.parameters=r(e({},m.parameters),{docs:r(e({},(_=m.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed'
  }
}`},(A=(O=m.parameters)==null?void 0:O.docs)==null?void 0:A.source)})});var F,H,J;p.parameters=r(e({},p.parameters),{docs:r(e({},(F=p.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    type: 'text'
  }
}`},(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var K,N,Q;d.parameters=r(e({},d.parameters),{docs:r(e({},(K=d.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  args: {
    type: 'link'
  }
}`},(Q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Q.source)})});var U,V,X;u.parameters=r(e({},u.parameters),{docs:r(e({},(U=u.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
  args: {
    danger: true
  }
}`},(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Y,Z,$;l.parameters=r(e({},l.parameters),{docs:r(e({},(Y=l.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ee,re,ae;g.parameters=r(e({},g.parameters),{docs:r(e({},(ee=g.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  args: {
    ghost: true
  }
}`},(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source)})});var oe,se,te;h.parameters=r(e({},h.parameters),{docs:r(e({},(oe=h.parameters)==null?void 0:oe.docs),{source:e({originalSource:`{
  args: {
    block: true
  }
}`},(te=(se=h.parameters)==null?void 0:se.docs)==null?void 0:te.source)})});var ne,ce,ie;f.parameters=r(e({},f.parameters),{docs:r(e({},(ne=f.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />
  }
}`},(ie=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ie.source)})});var me,pe,de;y.parameters=r(e({},y.parameters),{docs:r(e({},(me=y.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon name="mpLogo" size="sm" />,
    variant: 'with-new-icon'
  }
}`},(de=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:de.source)})});var ue,le,ge;S.parameters=r(e({},S.parameters),{docs:r(e({},(ue=S.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon name="mpLogo" size="sm" color="default" />,
    variant: 'with-new-icon'
  }
}`},(ge=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ge.source)})});var he,fe,ye;k.parameters=r(e({},k.parameters),{docs:r(e({},(he=k.parameters)==null?void 0:he.docs),{source:e({originalSource:`{
  args: {
    icon: <Icon name="dataPlatform" size="xl" />,
    children: ' ',
    type: 'default',
    shape: 'round',
    variant: 'with-new-icon'
  }
}`},(ye=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:ye.source)})});var Se,ke,we;w.parameters=r(e({},w.parameters),{docs:r(e({},(Se=w.parameters)==null?void 0:Se.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(we=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:we.source)})});var xe,be,ve;x.parameters=r(e({},x.parameters),{docs:r(e({},(xe=x.parameters)==null?void 0:xe.docs),{source:e({originalSource:`{
  args: {
    shape: 'circle'
  }
}`},(ve=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ve.source)})});var Be,Ie,Ce;b.parameters=r(e({},b.parameters),{docs:r(e({},(Be=b.parameters)==null?void 0:Be.docs),{source:e({originalSource:`{
  args: {
    shape: 'round'
  }
}`},(Ce=(Ie=b.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source)})});var Le,ze,De;v.parameters=r(e({},v.parameters),{docs:r(e({},(Le=v.parameters)==null?void 0:Le.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(De=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:De.source)})});var We,Ee,je;B.parameters=r(e({},B.parameters),{docs:r(e({},(We=B.parameters)==null?void 0:We.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(je=(Ee=B.parameters)==null?void 0:Ee.docs)==null?void 0:je.source)})});var Pe,Re,Me;I.parameters=r(e({},I.parameters),{docs:r(e({},(Pe=I.parameters)==null?void 0:Pe.docs),{source:e({originalSource:`{
  args: {
    onClick: e => {
      alert('Button Clicked');
    }
  }
}`},(Me=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Me.source)})});const ur=["Primary","Default","Dashed","Text","Link","WithDanger","Disabled","Ghost","Block","WithIcon","WithIconSM","WithIconDefaultColorSM","RoundIconButton","Loading","Circle","Round","Large","Small","PrimaryButtonWithClick"];export{h as Block,x as Circle,m as Dashed,i as Default,l as Disabled,g as Ghost,v as Large,d as Link,w as Loading,c as Primary,I as PrimaryButtonWithClick,b as Round,k as RoundIconButton,B as Small,p as Text,u as WithDanger,f as WithIcon,S as WithIconDefaultColorSM,y as WithIconSM,ur as __namedExportsOrder,dr as default};
