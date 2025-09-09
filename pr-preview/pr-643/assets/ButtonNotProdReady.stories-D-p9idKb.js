var Le=Object.defineProperty,De=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var L=(s,a,o)=>a in s?Le(s,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[a]=o,e=(s,a)=>{for(var o in a||(a={}))Ie.call(a,o)&&L(s,o,a[o]);if(z)for(var o of z(a))Pe.call(a,o)&&L(s,o,a[o]);return s},r=(s,a)=>De(s,Ee(a));var D=(s,a,o)=>new Promise((Ce,v)=>{var ve=t=>{try{w(o.next(t))}catch(B){v(B)}},ze=t=>{try{w(o.throw(t))}catch(B){v(B)}},w=t=>t.done?Ce(t.value):Promise.resolve(t.value).then(ve,ze);w((o=o.apply(s,a)).next())});import{j as C}from"./jsx-runtime-CVnACwZl.js";import{f as Re,I as Be}from"./NavigationItemsService-B9puW6p-.js";import{u as We}from"./index-BU0ZtLqn.js";import"./ErrorStateIcon-BEU0OB1a.js";import"./_baseClone-CXAe4HsA.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const Ve={title:"Components/Not Prod Ready/General/Button",component:s=>{var a;return C.jsx(Re,r(e({},s),{children:(a=s.children)!=null?a:"Button Label"}))},args:{block:!1,danger:!1,disabled:!1,ghost:!1,href:void 0,htmlType:"button",icon:void 0,loading:!1,shape:"default",size:"middle",target:void 0,type:"primary",onClick:void 0},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},n={play:s=>D(void 0,null,function*(){const a=s.canvasElement.querySelector("button");if(a)yield We.click(a);else throw new Error("Button not found")})},c={args:{type:"dashed"}},i={args:{type:"text"}},m={args:{type:"link"}},d={args:{danger:!0}},p={args:{disabled:!0}},l={args:{ghost:!0}},u={args:{block:!0}},g={args:{type:"default",icon:C.jsx(Be,{name:"mpLogo",size:"sm",color:"default"}),variant:"with-new-icon"}},h={args:{icon:C.jsx(Be,{name:"dataPlatform",size:"xl"}),children:" ",type:"default",shape:"round",variant:"with-new-icon"}},f={args:{loading:!0}},y={args:{shape:"circle"}},S={args:{shape:"round"}},k={args:{size:"large"}},b={args:{size:"small"}},x={args:{onClick:s=>{alert("Button Clicked")}}};var E,I,P;n.parameters=r(e({},n.parameters),{docs:r(e({},(E=n.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  play: async context => {
    const button = context.canvasElement.querySelector('button');
    if (button) {
      await userEvent.click(button); // Click the button
    } else {
      throw new Error('Button not found');
    }
  }
}`},(P=(I=n.parameters)==null?void 0:I.docs)==null?void 0:P.source)})});var R,W,j;c.parameters=r(e({},c.parameters),{docs:r(e({},(R=c.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    type: 'dashed'
  }
}`},(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source)})});var T,G,q;i.parameters=r(e({},i.parameters),{docs:r(e({},(T=i.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    type: 'text'
  }
}`},(q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:q.source)})});var M,_,N;m.parameters=r(e({},m.parameters),{docs:r(e({},(M=m.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    type: 'link'
  }
}`},(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source)})});var O,A,F;d.parameters=r(e({},d.parameters),{docs:r(e({},(O=d.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    danger: true
  }
}`},(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source)})});var H,J,K;p.parameters=r(e({},p.parameters),{docs:r(e({},(H=p.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,U,V;l.parameters=r(e({},l.parameters),{docs:r(e({},(Q=l.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    ghost: true
  }
}`},(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var X,Y,Z;u.parameters=r(e({},u.parameters),{docs:r(e({},(X=u.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    block: true
  }
}`},(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var $,ee,re;g.parameters=r(e({},g.parameters),{docs:r(e({},($=g.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    type: 'default',
    icon: <Icon name="mpLogo" size="sm" color="default" />,
    variant: 'with-new-icon'
  }
}`},(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});var ae,se,oe;h.parameters=r(e({},h.parameters),{docs:r(e({},(ae=h.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  args: {
    icon: <Icon name="dataPlatform" size="xl" />,
    children: ' ',
    type: 'default',
    shape: 'round',
    variant: 'with-new-icon'
  }
}`},(oe=(se=h.parameters)==null?void 0:se.docs)==null?void 0:oe.source)})});var te,ne,ce;f.parameters=r(e({},f.parameters),{docs:r(e({},(te=f.parameters)==null?void 0:te.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(ce=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ce.source)})});var ie,me,de;y.parameters=r(e({},y.parameters),{docs:r(e({},(ie=y.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    shape: 'circle'
  }
}`},(de=(me=y.parameters)==null?void 0:me.docs)==null?void 0:de.source)})});var pe,le,ue;S.parameters=r(e({},S.parameters),{docs:r(e({},(pe=S.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
  args: {
    shape: 'round'
  }
}`},(ue=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ue.source)})});var ge,he,fe;k.parameters=r(e({},k.parameters),{docs:r(e({},(ge=k.parameters)==null?void 0:ge.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(fe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:fe.source)})});var ye,Se,ke;b.parameters=r(e({},b.parameters),{docs:r(e({},(ye=b.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(ke=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:ke.source)})});var be,xe,we;x.parameters=r(e({},x.parameters),{docs:r(e({},(be=x.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
  args: {
    onClick: e => {
      alert('Button Clicked');
    }
  }
}`},(we=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:we.source)})});const Xe=["Primary","Dashed","Text","Link","WithDanger","Disabled","Ghost","Block","WithIconDefaultColorSM","RoundIconButton","Loading","Circle","Round","Large","Small","PrimaryButtonWithClick"];export{u as Block,y as Circle,c as Dashed,p as Disabled,l as Ghost,k as Large,m as Link,f as Loading,n as Primary,x as PrimaryButtonWithClick,S as Round,h as RoundIconButton,b as Small,i as Text,d as WithDanger,g as WithIconDefaultColorSM,Xe as __namedExportsOrder,Ve as default};
