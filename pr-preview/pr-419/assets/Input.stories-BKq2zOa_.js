var Se=Object.defineProperty,be=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var j=(s,a,t)=>a in s?Se(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,e=(s,a)=>{for(var t in a||(a={}))ye.call(a,t)&&j(s,t,a[t]);if(W)for(var t of W(a))Ee.call(a,t)&&j(s,t,a[t]);return s},r=(s,a)=>be(s,ve(a));var F=(s,a,t)=>new Promise((n,l)=>{var i=c=>{try{w(t.next(c))}catch(C){l(C)}},xe=c=>{try{w(t.throw(c))}catch(C){l(C)}},w=c=>c.done?n(c.value):Promise.resolve(c.value).then(i,xe);w((t=t.apply(s,a)).next())});import{j as o}from"./jsx-runtime-CS-_a2eV.js";import{J as he,a as I,b as B}from"./GlobalNavigation-5Ze4QgXZ.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{E as we}from"./ExampleStory-BjUjgIql.js";import{r as Ce}from"./index-Ca44TZ0D.js";import{e as A,u as Be}from"./index-C7MMNn6a.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";import"./index-TL6_15PV.js";const Oe={title:"Components/Data Entry/Input",component:he,args:{placeholder:"Input Placeholder",addonAfter:void 0,addonBefore:void 0,allowClear:!1,bordered:!0,classNames:{},count:void 0,defaultValue:"",disabled:!1,id:void 0,maxLength:void 0,prefix:void 0,showCount:!1,status:void 0,styles:{},size:"middle",suffix:void 0,type:"text",value:"",onChange:s=>{console.log("Input changed: "+s.target.value)},onPressEnter:s=>{console.log("Enter key pressed: "+String(s))}},argTypes:{status:{control:"select",options:["warning","error"]},size:{control:"select",options:["small","medium","large"]}}},u={args:{status:"error"}},p={args:{type:"textarea"}},m={args:{size:"large"}},d={args:{size:"middle"}},g={args:{size:"small"}},f={},h={args:{addonBefore:"https://",placeholder:"Enter URL"}},x={args:{addonAfter:".com",placeholder:"Domain"}},S={args:{allowClear:!0,placeholder:"Clearable Input"}},b={args:{disabled:!0}},v={args:{maxLength:10,placeholder:"Max 10 characters"}},y={args:{prefix:"@",suffix:".com",placeholder:"Email"}},E={args:{value:"Test value"},render:(s,a)=>{const t=Ce.useRef(null),n=(l="start")=>{var i;(i=t.current)==null||i.focus({cursor:l})};return o.jsx(we,{title:a.name,children:o.jsxs(I,{direction:"vertical",style:{width:"100%"},children:[o.jsxs(I,{wrap:!0,children:[o.jsx(B,{onClick:()=>{n("start")},children:"Focus at start"}),o.jsx(B,{onClick:()=>{n("end")},children:"Focus at last"}),o.jsx(B,{onClick:()=>{n("all")},children:"Focus to select all"})]}),o.jsx("br",{}),o.jsx(he,r(e({},s),{defaultValue:"Welcome to the Aquarium",ref:t}))]})})},play:s=>F(void 0,null,function*(){const a=s.canvasElement.querySelector("input");yield A(a).toBeInTheDocument();const t=s.canvasElement.querySelectorAll("button");yield A(t.length).toBe(3);for(const n of t)a==null||a.blur(),yield Be.click(n),yield A(a).toHaveFocus(),a==null||a.blur()})};var R,k,D;u.parameters=r(e({},u.parameters),{docs:r(e({},(R=u.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    status: 'error'
  }
}`},(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.source)})});var L,z,M;p.parameters=r(e({},p.parameters),{docs:r(e({},(L=p.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  args: {
    type: 'textarea'
  }
}`},(M=(z=p.parameters)==null?void 0:z.docs)==null?void 0:M.source)})});var T,q,P;m.parameters=r(e({},m.parameters),{docs:r(e({},(T=m.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(P=(q=m.parameters)==null?void 0:q.docs)==null?void 0:P.source)})});var H,V,U;d.parameters=r(e({},d.parameters),{docs:r(e({},(H=d.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    size: 'middle'
  }
}`},(U=(V=d.parameters)==null?void 0:V.docs)==null?void 0:U.source)})});var _,J,N;g.parameters=r(e({},g.parameters),{docs:r(e({},(_=g.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(N=(J=g.parameters)==null?void 0:J.docs)==null?void 0:N.source)})});var O,G,K;f.parameters=r(e({},f.parameters),{docs:r(e({},(O=f.parameters)==null?void 0:O.docs),{source:e({originalSource:"{}"},(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.source)})});var Q,X,Y;h.parameters=r(e({},h.parameters),{docs:r(e({},(Q=h.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    addonBefore: 'https://',
    placeholder: 'Enter URL'
  }
}`},(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;x.parameters=r(e({},x.parameters),{docs:r(e({},(Z=x.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  args: {
    addonAfter: '.com',
    placeholder: 'Domain'
  }
}`},(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var re,ae,te;S.parameters=r(e({},S.parameters),{docs:r(e({},(re=S.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    allowClear: true,
    placeholder: 'Clearable Input'
  }
}`},(te=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var se,oe,ne;b.parameters=r(e({},b.parameters),{docs:r(e({},(se=b.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.source)})});var ce,le,ie;v.parameters=r(e({},v.parameters),{docs:r(e({},(ce=v.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters'
  }
}`},(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source)})});var ue,pe,me;y.parameters=r(e({},y.parameters),{docs:r(e({},(ue=y.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  args: {
    prefix: '@',
    suffix: '.com',
    placeholder: 'Email'
  }
}`},(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var de,ge,fe;E.parameters=r(e({},E.parameters),{docs:r(e({},(de=E.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  args: {
    value: 'Test value'
  },
  render: (props, meta) => {
    const inputRef = useRef<InputRef>(null);
    const focus = (cursor: 'start' | 'end' | 'all' = 'start') => {
      inputRef.current?.focus({
        cursor
      });
    };
    return <ExampleStory title={meta.name}>
        <Space direction="vertical" style={{
        width: '100%'
      }}>
          <Space wrap>
            <Button onClick={() => {
            focus('start');
          }}>
              Focus at start
            </Button>
            <Button onClick={() => {
            focus('end');
          }}>
              Focus at last
            </Button>
            <Button onClick={() => {
            focus('all');
          }}>
              Focus to select all
            </Button>
          </Space>
          <br />
          <Input {...props} defaultValue="Welcome to the Aquarium" ref={inputRef} />
        </Space>
      </ExampleStory>;
  },
  play: async story => {
    const input = story.canvasElement.querySelector('input');
    await expect(input).toBeInTheDocument();
    const buttons = story.canvasElement.querySelectorAll('button');
    await expect(buttons.length).toBe(3);
    for (const button of buttons) {
      input?.blur();
      await userEvent.click(button);
      await expect(input).toHaveFocus();
      input?.blur();
    }
  }
}`},(fe=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:fe.source)})});const Ge=["Error","TextArea","Large","Middle","Small","Primary","WithHttpsBefore","WithDotComAfter","AllowClear","Disabled","WithMaxLength","WithPrefixAndSuffix","WithFocusManagement"];export{S as AllowClear,b as Disabled,u as Error,m as Large,d as Middle,f as Primary,g as Small,p as TextArea,x as WithDotComAfter,E as WithFocusManagement,h as WithHttpsBefore,v as WithMaxLength,y as WithPrefixAndSuffix,Ge as __namedExportsOrder,Oe as default};