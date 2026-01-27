import{Q as h,j as a,I as g,F as S,T as v}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const u=[{value:"United States1",label:"United States",children:[{value:"Michigan1",label:"Michigan",children:[{value:"Detroit1",label:"Detroit"},{value:"Lansing1",label:"Lansing"}]},{value:"California1",label:"California",children:[{value:"San Francisco1",label:"San Francisco"},{value:"San Jose1",label:"San Jose"}]}]},{value:"Canada1",label:"Canada",children:[{value:"Ontario1",label:"Ontario",children:[{value:"Toronto1",label:"Toronto"}]}]}],f={title:"Components/Data Entry/QueryItem/ValueSelector/Cascader",component:h.ValueSelector.Cascader,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{options:u}},r={args:{placeholder:"Default"}},o={args:{placeholder:"Simple List",options:[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"}]}},n={args:{placeholder:"Error",errorMessage:"test error"}},s={args:{placeholder:"With Icon",icon:"event"}},l={args:{placeholder:"On Select",onChange:async e=>{console.log(e)}}},t={args:{placeholder:"PreSelected",value:["Canada1","Ontario1","Toronto1"],onChange:async(e,m)=>{console.log(e)}}},c={args:{placeholder:"Load",loadData:async e=>{console.log(e)}}},i={args:{suffixIcon:a.jsx(g,{name:"dropdownOpen",size:"sm"})}},d={args:{placeholder:"Loading Story",options:void 0,loadData:async e=>{await new Promise((m,b)=>{setTimeout(()=>{m(u)},3e3)})}}},p={args:{options:[...u,{value:"G",label:"G",children:[{value:"H",label:"H",children:[{value:"IJK",label:a.jsx(a.Fragment,{children:a.jsxs(S,{children:[a.jsx(g,{name:"alicorn"}),a.jsx(v.Text,{children:"IJK"})]})}),searchLabel:"IJK"}]}]}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error',
    errorMessage: 'test error'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'With Icon',
    icon: 'event'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'On Select',
    onChange: async value => {
      console.log(value);
    }
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'PreSelected',
    value: ['Canada1', 'Ontario1', 'Toronto1'],
    onChange: async (values, _) => {
      console.log(values);
    }
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Load',
    loadData: async (value: string) => {
      console.log(value);
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    suffixIcon: <Icon name="dropdownOpen" size="sm" />
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const x=["Default","SimpleList","Error","WithIcon","OnSelect","PreSelectedValue","LoadData","SuffixIcon","Loading","SearchLabel"];export{r as Default,n as Error,c as LoadData,d as Loading,l as OnSelect,t as PreSelectedValue,p as SearchLabel,o as SimpleList,i as SuffixIcon,s as WithIcon,x as __namedExportsOrder,f as default};
