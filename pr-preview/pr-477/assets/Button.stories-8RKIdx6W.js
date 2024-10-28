var _e=Object.defineProperty,Oe=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var E=(s,a,o)=>a in s?_e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[a]=o,e=(s,a)=>{for(var o in a||(a={}))Fe.call(a,o)&&E(s,o,a[o]);if(W)for(var o of W(a))He.call(a,o)&&E(s,o,a[o]);return s},r=(s,a)=>Oe(s,Ae(a));var j=(s,a,o)=>new Promise((Te,D)=>{var Ge=t=>{try{L(o.next(t))}catch(z){D(z)}},qe=t=>{try{L(o.throw(t))}catch(z){D(z)}},L=t=>t.done?Te(t.value):Promise.resolve(t.value).then(Ge,qe);L((o=o.apply(s,a)).next())});import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{k as Je,I as C}from"./GlobalNavigation-BwiYukOq.js";import{u as Ke}from"./index-BU0ZtLqn.js";import"./_baseClone-DBzvlRjn.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const cr={title:"Components/General/Button",component:s=>{var a;return n.jsx(Je,r(e({},s),{children:(a=s.children)!=null?a:"Button Label"}))},args:{block:!1,danger:!1,disabled:!1,ghost:!1,href:void 0,htmlType:"button",icon:void 0,loading:!1,shape:"default",size:"middle",target:void 0,type:"primary",onClick:void 0},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},c={play:s=>j(void 0,null,function*(){const a=s.canvasElement.querySelector("button");if(a)yield Ke.click(a);else throw new Error("Button not found")})},i={args:{type:"default"}},m={args:{type:"dashed"}},p={args:{type:"text"}},d={args:{type:"link"}},u={args:{danger:!0}},l={args:{disabled:!0}},g={args:{ghost:!0}},h={args:{block:!0}},f={args:{icon:n.jsx(C,{name:"mpLogo"})}},y={args:{type:"default",icon:n.jsx(C,{name:"mpLogo",size:"sm"}),variant:"with-new-icon"}},S={args:{type:"default",icon:n.jsx(C,{name:"mpLogo",size:"sm",color:"default"}),variant:"with-new-icon"}},k={args:{icon:n.jsx(C,{name:"dataPlatform",size:"xl"}),children:" ",type:"default",shape:"round",variant:"with-new-icon"}},w={args:{loading:!0}},x={args:{shape:"circle"}},b={args:{shape:"round"}},v={args:{size:"large"}},I={args:{size:"small"}},B={args:{onClick:s=>{alert("Button Clicked")}}};var P,R,M;c.parameters=r(e({},c.parameters),{docs:r(e({},(P=c.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
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
}`},(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source)})});var se,oe,te;h.parameters=r(e({},h.parameters),{docs:r(e({},(se=h.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    block: true
  }
}`},(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source)})});var ne,ce,ie;f.parameters=r(e({},f.parameters),{docs:r(e({},(ne=f.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
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
}`},(ve=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ve.source)})});var Ie,Be,Ce;b.parameters=r(e({},b.parameters),{docs:r(e({},(Ie=b.parameters)==null?void 0:Ie.docs),{source:e({originalSource:`{
  args: {
    shape: 'round'
  }
}`},(Ce=(Be=b.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source)})});var Le,ze,De;v.parameters=r(e({},v.parameters),{docs:r(e({},(Le=v.parameters)==null?void 0:Le.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(De=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:De.source)})});var We,Ee,je;I.parameters=r(e({},I.parameters),{docs:r(e({},(We=I.parameters)==null?void 0:We.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(je=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:je.source)})});var Pe,Re,Me;B.parameters=r(e({},B.parameters),{docs:r(e({},(Pe=B.parameters)==null?void 0:Pe.docs),{source:e({originalSource:`{
  args: {
    onClick: e => {
      alert('Button Clicked');
    }
  }
}`},(Me=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:Me.source)})});const ir=["Primary","Default","Dashed","Text","Link","WithDanger","Disabled","Ghost","Block","WithIcon","WithIconSM","WithIconDefaultColorSM","RoundIconButton","Loading","Circle","Round","Large","Small","PrimaryButtonWithClick"];export{h as Block,x as Circle,m as Dashed,i as Default,l as Disabled,g as Ghost,v as Large,d as Link,w as Loading,c as Primary,B as PrimaryButtonWithClick,b as Round,k as RoundIconButton,I as Small,p as Text,u as WithDanger,f as WithIcon,S as WithIconDefaultColorSM,y as WithIconSM,ir as __namedExportsOrder,cr as default};
