var $=Object.defineProperty,ee=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var I=(r,o,n)=>o in r?$(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,e=(r,o)=>{for(var n in o||(o={}))re.call(o,n)&&I(r,n,o[n]);if(C)for(var n of C(o))oe.call(o,n)&&I(r,n,o[n]);return r},a=(r,o)=>ee(r,ae(o));var t=(r,o,n)=>new Promise((N,L)=>{var Y=s=>{try{S(n.next(s))}catch(b){L(b)}},Z=s=>{try{S(n.throw(s))}catch(b){L(b)}},S=s=>s.done?N(s.value):Promise.resolve(s.value).then(Y,Z);S((n=n.apply(r,o)).next())});import{j as l}from"./jsx-runtime-CS-_a2eV.js";import{X as ne,F as se,I as te,o as le}from"./GlobalNavigation-5Ze4QgXZ.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const y=[{value:"United States1",label:"United States",children:[{value:"Michigan1",label:"Michigan",children:[{value:"Detroit1",label:"Detroit"},{value:"Lansing1",label:"Lansing"}]},{value:"California1",label:"California",children:[{value:"San Francisco1",label:"San Francisco"},{value:"San Jose1",label:"San Jose"}]}]},{value:"Canada1",label:"Canada",children:[{value:"Ontario1",label:"Ontario",children:[{value:"Toronto1",label:"Toronto"}]}]}],fe={title:"Components/Data Entry/QueryItem/ValueSelector/Cascader",component:ne.ValueSelector.Cascader,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{options:y}},c={args:{placeholder:"Default"}},i={args:{placeholder:"Simple List",options:[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"}]}},p={args:{placeholder:"Error",errorMessage:"test error"}},d={args:{placeholder:"With Icon",icon:"event"}},m={args:{placeholder:"On Select",onChange:r=>t(void 0,null,function*(){console.log(r)})}},u={args:{placeholder:"PreSelected",value:["Canada1","Ontario1","Toronto1"],onChange:(r,o)=>t(void 0,null,function*(){console.log(r)})}},g={args:{placeholder:"Load",loadData:r=>t(void 0,null,function*(){console.log(r)})}},h={args:{placeholder:"Loading Story",options:void 0,loadData:r=>t(void 0,null,function*(){yield new Promise((o,n)=>{setTimeout(()=>{o(y)},3e3)})})}},v={args:{options:[...y,{value:"G",label:"G",children:[{value:"H",label:"H",children:[{value:"IJK",label:l.jsx(l.Fragment,{children:l.jsxs(se,{children:[l.jsx(te,{name:"alicorn"}),l.jsx(le.Text,{children:"IJK"})]})}),searchLabel:"IJK"}]}]}]}};var x,T,f;c.parameters=a(e({},c.parameters),{docs:a(e({},(x=c.parameters)==null?void 0:x.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Default'
  }
}`},(f=(T=c.parameters)==null?void 0:T.docs)==null?void 0:f.source)})});var D,O,j;i.parameters=a(e({},i.parameters),{docs:a(e({},(D=i.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Simple List',
    options: [{
      value: 'United States',
      label: 'United States'
    }, {
      value: 'Canada',
      label: 'Canada'
    }]
  }
}`},(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source)})});var J,E,F;p.parameters=a(e({},p.parameters),{docs:a(e({},(J=p.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Error',
    errorMessage: 'test error'
  }
}`},(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source)})});var w,K,P;d.parameters=a(e({},d.parameters),{docs:a(e({},(w=d.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'With Icon',
    icon: 'event'
  }
}`},(P=(K=d.parameters)==null?void 0:K.docs)==null?void 0:P.source)})});var U,G,H;m.parameters=a(e({},m.parameters),{docs:a(e({},(U=m.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'On Select',
    onChange: async value => {
      console.log(value);
    }
  }
}`},(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var M,V,W;u.parameters=a(e({},u.parameters),{docs:a(e({},(M=u.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'PreSelected',
    value: ['Canada1', 'Ontario1', 'Toronto1'],
    onChange: async (values, _) => {
      console.log(values);
    }
  }
}`},(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source)})});var _,Q,A;g.parameters=a(e({},g.parameters),{docs:a(e({},(_=g.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Load',
    loadData: async (value: string) => {
      console.log(value);
    }
  }
}`},(A=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:A.source)})});var R,X,k;h.parameters=a(e({},h.parameters),{docs:a(e({},(R=h.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Loading Story',
    options: undefined,
    loadData: async (value: string) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(options);
        }, 3000);
      });
    }
  }
}`},(k=(X=h.parameters)==null?void 0:X.docs)==null?void 0:k.source)})});var q,z,B;v.parameters=a(e({},v.parameters),{docs:a(e({},(q=v.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  args: {
    options: [...options, {
      value: 'G',
      label: 'G',
      children: [{
        value: 'H',
        label: 'H',
        children: [{
          value: 'IJK',
          label: <>
                    <Flex>
                      <Icon name="alicorn" />
                      <Typography.Text>IJK</Typography.Text>
                    </Flex>
                  </>,
          searchLabel: 'IJK'
        }]
      }]
    }]
  }
}`},(B=(z=v.parameters)==null?void 0:z.docs)==null?void 0:B.source)})});const De=["Default","SimpleList","Error","WithIcon","OnSelect","PreSelectedValue","LoadData","Loading","SearchLabel"];export{c as Default,p as Error,g as LoadData,h as Loading,m as OnSelect,u as PreSelectedValue,v as SearchLabel,i as SimpleList,d as WithIcon,De as __namedExportsOrder,fe as default};
