var ne=Object.defineProperty,se=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var L=(r,o,n)=>o in r?ne(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,e=(r,o)=>{for(var n in o||(o={}))le.call(o,n)&&L(r,n,o[n]);if(x)for(var n of x(o))ce.call(o,n)&&L(r,n,o[n]);return r},a=(r,o)=>se(r,te(o));var l=(r,o,n)=>new Promise((ae,I)=>{var re=s=>{try{b(n.next(s))}catch(f){I(f)}},oe=s=>{try{b(n.throw(s))}catch(f){I(f)}},b=s=>s.done?ae(s.value):Promise.resolve(s.value).then(re,oe);b((n=n.apply(r,o)).next())});import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{Q as ie,I as ee,F as de,f as pe}from"./NavigationItemsService-DCzAD1pv.js";import"./_baseClone-DBzvlRjn.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const y=[{value:"United States1",label:"United States",children:[{value:"Michigan1",label:"Michigan",children:[{value:"Detroit1",label:"Detroit"},{value:"Lansing1",label:"Lansing"}]},{value:"California1",label:"California",children:[{value:"San Francisco1",label:"San Francisco"},{value:"San Jose1",label:"San Jose"}]}]},{value:"Canada1",label:"Canada",children:[{value:"Ontario1",label:"Ontario",children:[{value:"Toronto1",label:"Toronto"}]}]}],Le={title:"Components/Data Entry/QueryItem/ValueSelector/Cascader",component:ie.ValueSelector.Cascader,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{options:y}},c={args:{placeholder:"Default"}},i={args:{placeholder:"Simple List",options:[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"}]}},d={args:{placeholder:"Error",errorMessage:"test error"}},p={args:{placeholder:"With Icon",icon:"event"}},u={args:{placeholder:"On Select",onChange:r=>l(void 0,null,function*(){console.log(r)})}},m={args:{placeholder:"PreSelected",value:["Canada1","Ontario1","Toronto1"],onChange:(r,o)=>l(void 0,null,function*(){console.log(r)})}},g={args:{placeholder:"Load",loadData:r=>l(void 0,null,function*(){console.log(r)})}},h={args:{suffixIcon:t.jsx(ee,{name:"dropdownOpen",size:"sm"})}},S={args:{placeholder:"Loading Story",options:void 0,loadData:r=>l(void 0,null,function*(){yield new Promise((o,n)=>{setTimeout(()=>{o(y)},3e3)})})}},v={args:{options:[...y,{value:"G",label:"G",children:[{value:"H",label:"H",children:[{value:"IJK",label:t.jsx(t.Fragment,{children:t.jsxs(de,{children:[t.jsx(ee,{name:"alicorn"}),t.jsx(pe.Text,{children:"IJK"})]})}),searchLabel:"IJK"}]}]}]}};var C,T,D;c.parameters=a(e({},c.parameters),{docs:a(e({},(C=c.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Default'
  }
}`},(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.source)})});var O,j,w;i.parameters=a(e({},i.parameters),{docs:a(e({},(O=i.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
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
}`},(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source)})});var J,E,F;d.parameters=a(e({},d.parameters),{docs:a(e({},(J=d.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Error',
    errorMessage: 'test error'
  }
}`},(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source)})});var K,P,U;p.parameters=a(e({},p.parameters),{docs:a(e({},(K=p.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'With Icon',
    icon: 'event'
  }
}`},(U=(P=p.parameters)==null?void 0:P.docs)==null?void 0:U.source)})});var G,H,M;u.parameters=a(e({},u.parameters),{docs:a(e({},(G=u.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'On Select',
    onChange: async value => {
      console.log(value);
    }
  }
}`},(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source)})});var Q,V,W;m.parameters=a(e({},m.parameters),{docs:a(e({},(Q=m.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'PreSelected',
    value: ['Canada1', 'Ontario1', 'Toronto1'],
    onChange: async (values, _) => {
      console.log(values);
    }
  }
}`},(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source)})});var _,z,A;g.parameters=a(e({},g.parameters),{docs:a(e({},(_=g.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Load',
    loadData: async (value: string) => {
      console.log(value);
    }
  }
}`},(A=(z=g.parameters)==null?void 0:z.docs)==null?void 0:A.source)})});var R,k,q;h.parameters=a(e({},h.parameters),{docs:a(e({},(R=h.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    suffixIcon: <Icon name="dropdownOpen" size="sm" />
  }
}`},(q=(k=h.parameters)==null?void 0:k.docs)==null?void 0:q.source)})});var B,N,X;S.parameters=a(e({},S.parameters),{docs:a(e({},(B=S.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
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
}`},(X=(N=S.parameters)==null?void 0:N.docs)==null?void 0:X.source)})});var Y,Z,$;v.parameters=a(e({},v.parameters),{docs:a(e({},(Y=v.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
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
}`},($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});const Ce=["Default","SimpleList","Error","WithIcon","OnSelect","PreSelectedValue","LoadData","SuffixIcon","Loading","SearchLabel"];export{c as Default,d as Error,g as LoadData,S as Loading,u as OnSelect,m as PreSelectedValue,v as SearchLabel,i as SimpleList,h as SuffixIcon,p as WithIcon,Ce as __namedExportsOrder,Le as default};
