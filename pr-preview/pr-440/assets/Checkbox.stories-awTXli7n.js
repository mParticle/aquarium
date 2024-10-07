var $=Object.defineProperty,z=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var E=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&E(e,n,t[n]);if(b)for(var n of b(t))K.call(t,n)&&E(e,n,t[n]);return e},r=(e,t)=>z(e,H(t));var y=(e,t,n)=>new Promise((a,o)=>{var d=s=>{try{l(n.next(s))}catch(x){o(x)}},g=s=>{try{l(n.throw(s))}catch(x){o(x)}},l=s=>s.done?a(s.value):Promise.resolve(s.value).then(d,g);l((n=n.apply(e,t)).next())});import{j as i}from"./jsx-runtime-BcCOBRXo.js";import{N as f,D as M}from"./GlobalNavigation-MJTY1eGI.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import{r as V}from"./index-CNk6hRaE.js";import{E as Q}from"./ExampleStory-CC47hYtC.js";import{e as v,u as U}from"./index-C7MMNn6a.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";import"./index-TL6_15PV.js";const ge={title:"Components/Data Entry/Checkbox",component:e=>{var a,o;const[t,n]=V.useState((o=(a=e.checked)!=null?a:e.defaultChecked)!=null?o:!1);return i.jsx(f,r(c({},e),{checked:t,onChange:d=>{n(!t)}}))},args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,indeterminate:!1,onChange:e=>{alert(`checked = ${e.target.checked}`)}}},h={},m={args:{autoFocus:!0}},p={args:{defaultChecked:!0}},u={args:{disabled:!0}},k={args:{indeterminate:!0}},C={render:()=>{const e=["A","B","C"],t=["A","C"],[n,a]=V.useState(t),o=e.length===n.length,d=n.length>0&&n.length<e.length,g=l=>{a(l.target.checked?e:[])};return i.jsx(i.Fragment,{children:i.jsxs(Q,{title:"The `indeterminate` property can help achieve a 'check all' effect.",children:[i.jsx(f,{indeterminate:d,checked:o,onChange:g,children:"Check all"}),i.jsx(M,{}),i.jsx(f.Group,{options:e,value:n,onChange:a})]})})},play:e=>y(void 0,null,function*(){v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(2);const t=e.canvasElement.querySelector(".ant-checkbox-indeterminate");if(t)yield U.click(t);else throw new Error("Checkbox Indeterminate not found");v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(4)})};var A,S,L;h.parameters=r(c({},h.parameters),{docs:r(c({},(A=h.parameters)==null?void 0:A.docs),{source:c({originalSource:"{}"},(L=(S=h.parameters)==null?void 0:S.docs)==null?void 0:L.source)})});var I,j,D;m.parameters=r(c({},m.parameters),{docs:r(c({},(I=m.parameters)==null?void 0:I.docs),{source:c({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(D=(j=m.parameters)==null?void 0:j.docs)==null?void 0:D.source)})});var O,q,w;p.parameters=r(c({},p.parameters),{docs:r(c({},(O=p.parameters)==null?void 0:O.docs),{source:c({originalSource:`{
  args: {
    defaultChecked: true
  }
}`},(w=(q=p.parameters)==null?void 0:q.docs)==null?void 0:w.source)})});var B,F,P;u.parameters=r(c({},u.parameters),{docs:r(c({},(B=u.parameters)==null?void 0:B.docs),{source:c({originalSource:`{
  args: {
    disabled: true
  }
}`},(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source)})});var T,G,W;k.parameters=r(c({},k.parameters),{docs:r(c({},(T=k.parameters)==null?void 0:T.docs),{source:c({originalSource:`{
  args: {
    indeterminate: true
  }
}`},(W=(G=k.parameters)==null?void 0:G.docs)==null?void 0:W.source)})});var _,N,R;C.parameters=r(c({},C.parameters),{docs:r(c({},(_=C.parameters)==null?void 0:_.docs),{source:c({originalSource:`{
  render: () => {
    const plainOptions = ['A', 'B', 'C'];
    const defaultCheckedList = ['A', 'C'];
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const onCheckAllChange: ICheckboxProps['onChange'] = e => {
      setCheckedList(e.target.checked ? plainOptions : []);
    };
    return <>
        <ExampleStory title="The \`indeterminate\` property can help achieve a 'check all' effect.">
          <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={onCheckAllChange}>
            Check all
          </Checkbox>
          <Divider />
          <Checkbox.Group options={plainOptions} value={checkedList} onChange={setCheckedList} />
        </ExampleStory>
      </>;
  },
  play: async context => {
    void expect(context.canvasElement.querySelectorAll('.ant-checkbox-checked').length).toBe(2);
    const checkboxIndeterminate = context.canvasElement.querySelector('.ant-checkbox-indeterminate');
    if (checkboxIndeterminate) {
      await userEvent.click(checkboxIndeterminate);
    } else {
      throw new Error('Checkbox Indeterminate not found');
    }
    void expect(context.canvasElement.querySelectorAll('.ant-checkbox-checked').length).toBe(4);
  }
}`},(R=(N=C.parameters)==null?void 0:N.docs)==null?void 0:R.source)})});const xe=["Primary","WithAutoFocus","DefaultChecked","Disabled","Indeterminate","ExampleCheckAll"];export{p as DefaultChecked,u as Disabled,C as ExampleCheckAll,k as Indeterminate,h as Primary,m as WithAutoFocus,xe as __namedExportsOrder,ge as default};
