var Ke=Object.defineProperty,Me=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var I=(s,t,o)=>t in s?Ke(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,e=(s,t)=>{for(var o in t||(t={}))We.call(t,o)&&I(s,o,t[o]);if(v)for(var o of v(t))_e.call(t,o)&&I(s,o,t[o]);return s},r=(s,t)=>Me(s,Pe(t));var U=(s,t,o)=>new Promise((Oe,w)=>{var ze=i=>{try{j(o.next(i))}catch(C){w(C)}},He=i=>{try{j(o.throw(i))}catch(C){w(C)}},j=i=>i.done?Oe(i.value):Promise.resolve(i.value).then(ze,He);j((o=o.apply(s,t)).next())});import{j as a}from"./jsx-runtime-CS-_a2eV.js";import{o as n,a as Fe,c as Ge}from"./GlobalNavigation-DTRh3LWh.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{E as qe}from"./ExampleStory-T2cOmwlO.js";import{r as Re}from"./index-Ca44TZ0D.js";import{e as Be}from"./index-C7MMNn6a.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";import"./index-TL6_15PV.js";const dr={title:"Components/General/Typography.Text",component:s=>a.jsx(n.Text,r(e({},s),{children:"Example Text"})),args:{code:!1,size:"base",copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,keyboard:!1,mark:!1,strong:!1,italic:!1,type:void 0,underline:!1,onClick:s=>{console.log("Text Clicked")}},argTypes:{type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]}}},c={play:s=>U(void 0,null,function*(){const t=s.canvasElement.querySelector("span");Be(t==null?void 0:t.textContent).toEqual("Example Text")})},p={args:{code:!0}},l={args:{copyable:!0}},d={args:{delete:!0}},g={args:{disabled:!0}},m={args:{editable:!0}},u={args:{keyboard:!0}},y={args:{mark:!0}},x={args:{strong:!0}},T={args:{italic:!0}},h={args:{type:"success"}},D={args:{type:"secondary"}},b={args:{type:"warning"}},S={args:{type:"danger"}},f={args:{underline:!0}},A={args:{onClick:s=>{alert("Custom Click Handler")}}},E={render:()=>a.jsx(qe,{title:a.jsx(a.Fragment,{children:" "}),children:a.jsxs(Fe,{direction:"vertical",children:[a.jsx(n.Text,{children:"Ant Design (default)"}),a.jsx(n.Text,{type:"secondary",children:"Ant Design (secondary)"}),a.jsx(n.Text,{type:"success",children:"Ant Design (success)"}),a.jsx(n.Text,{type:"warning",children:"Ant Design (warning)"}),a.jsx(n.Text,{type:"danger",children:"Ant Design (danger)"}),a.jsx(n.Text,{disabled:!0,children:"Ant Design (disabled)"}),a.jsx(n.Text,{mark:!0,children:"Ant Design (mark)"}),a.jsx(n.Text,{code:!0,children:"Ant Design (code)"}),a.jsx(n.Text,{keyboard:!0,children:"Ant Design (keyboard)"}),a.jsx(n.Text,{underline:!0,children:"Ant Design (underline)"}),a.jsx(n.Text,{delete:!0,children:"Ant Design (delete)"}),a.jsx(n.Text,{strong:!0,children:"Ant Design (strong)"}),a.jsx(n.Text,{italic:!0,children:"Ant Design (italic)"})]})})},k={render:()=>{const[s,t]=Re.useState(!0);return a.jsxs(qe,{title:"Toggle ellipsis on and off.",children:[a.jsx(Ge,{checked:s,onChange:()=>{t(!s)}}),a.jsx(n.Text,{style:s?{width:200}:void 0,ellipsis:s?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."}),a.jsx(n.Text,{code:!0,style:s?{width:200}:void 0,ellipsis:s?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}};var q,O,z;c.parameters=r(e({},c.parameters),{docs:r(e({},(q=c.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  play: async context => {
    const text = context.canvasElement.querySelector('span');
    void expect(text?.textContent).toEqual('Example Text');
  }
}`},(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source)})});var H,K,M;p.parameters=r(e({},p.parameters),{docs:r(e({},(H=p.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    code: true
  }
}`},(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source)})});var P,W,_;l.parameters=r(e({},l.parameters),{docs:r(e({},(P=l.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  args: {
    copyable: true
  }
}`},(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source)})});var F,G,R;d.parameters=r(e({},d.parameters),{docs:r(e({},(F=d.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    delete: true
  }
}`},(R=(G=d.parameters)==null?void 0:G.docs)==null?void 0:R.source)})});var B,J,L;g.parameters=r(e({},g.parameters),{docs:r(e({},(B=g.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source)})});var N,Q,V;m.parameters=r(e({},m.parameters),{docs:r(e({},(N=m.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    editable: true
  }
}`},(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});var X,Y,Z;u.parameters=r(e({},u.parameters),{docs:r(e({},(X=u.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    keyboard: true
  }
}`},(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var $,ee,re;y.parameters=r(e({},y.parameters),{docs:r(e({},($=y.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    mark: true
  }
}`},(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});var se,ae,te;x.parameters=r(e({},x.parameters),{docs:r(e({},(se=x.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    strong: true
  }
}`},(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var ne,oe,ie;T.parameters=r(e({},T.parameters),{docs:r(e({},(ne=T.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
  args: {
    italic: true
  }
}`},(ie=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ie.source)})});var ce,pe,le;h.parameters=r(e({},h.parameters),{docs:r(e({},(ce=h.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    type: 'success'
  }
}`},(le=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:le.source)})});var de,ge,me;D.parameters=r(e({},D.parameters),{docs:r(e({},(de=D.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  args: {
    type: 'secondary'
  }
}`},(me=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:me.source)})});var ue,ye,xe;b.parameters=r(e({},b.parameters),{docs:r(e({},(ue=b.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(xe=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:xe.source)})});var Te,he,De;S.parameters=r(e({},S.parameters),{docs:r(e({},(Te=S.parameters)==null?void 0:Te.docs),{source:e({originalSource:`{
  args: {
    type: 'danger'
  }
}`},(De=(he=S.parameters)==null?void 0:he.docs)==null?void 0:De.source)})});var be,Se,fe;f.parameters=r(e({},f.parameters),{docs:r(e({},(be=f.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
  args: {
    underline: true
  }
}`},(fe=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:fe.source)})});var Ae,Ee,ke;A.parameters=r(e({},A.parameters),{docs:r(e({},(Ae=A.parameters)==null?void 0:Ae.docs),{source:e({originalSource:`{
  args: {
    onClick: event => {
      alert('Custom Click Handler');
    }
  }
}`},(ke=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source)})});var je,Ce,we;E.parameters=r(e({},E.parameters),{docs:r(e({},(je=E.parameters)==null?void 0:je.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Text>Ant Design (default)</Typography.Text>
          <Typography.Text type="secondary">Ant Design (secondary)</Typography.Text>
          <Typography.Text type="success">Ant Design (success)</Typography.Text>
          <Typography.Text type="warning">Ant Design (warning)</Typography.Text>
          <Typography.Text type="danger">Ant Design (danger)</Typography.Text>
          <Typography.Text disabled>Ant Design (disabled)</Typography.Text>
          <Typography.Text mark>Ant Design (mark)</Typography.Text>
          <Typography.Text code>Ant Design (code)</Typography.Text>
          <Typography.Text keyboard>Ant Design (keyboard)</Typography.Text>
          <Typography.Text underline>Ant Design (underline)</Typography.Text>
          <Typography.Text delete>Ant Design (delete)</Typography.Text>
          <Typography.Text strong>Ant Design (strong)</Typography.Text>
          <Typography.Text italic>Ant Design (italic)</Typography.Text>
        </Space>
      </ExampleStory>;
  }
}`},(we=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:we.source)})});var ve,Ie,Ue;k.parameters=r(e({},k.parameters),{docs:r(e({},(ve=k.parameters)==null?void 0:ve.docs),{source:e({originalSource:`{
  render: () => {
    const [ellipsis, setEllipsis] = useState(true);
    return <ExampleStory title="Toggle ellipsis on and off.">
        <Switch checked={ellipsis} onChange={() => {
        setEllipsis(!ellipsis);
      }} />
        <Typography.Text style={ellipsis ? {
        width: 200
      } : undefined} ellipsis={ellipsis ? {
        tooltip: 'I am ellipsis now!'
      } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
        <Typography.Text code style={ellipsis ? {
        width: 200
      } : undefined} ellipsis={ellipsis ? {
        tooltip: 'I am ellipsis now!'
      } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
      </ExampleStory>;
  }
}`},(Ue=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Ue.source)})});const gr=["Primary","Code","Copyable","Deleted","Disabled","Editable","Keyboard","Marked","Strong","Italic","Success","Secondary","Warning","Danger","Underline","CustomOnClick","ExampleTexts","ExampleEllipsis"];export{p as Code,l as Copyable,A as CustomOnClick,S as Danger,d as Deleted,g as Disabled,m as Editable,k as ExampleEllipsis,E as ExampleTexts,T as Italic,u as Keyboard,y as Marked,c as Primary,D as Secondary,x as Strong,h as Success,f as Underline,b as Warning,gr as __namedExportsOrder,dr as default};
