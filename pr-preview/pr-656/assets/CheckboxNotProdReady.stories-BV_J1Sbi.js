var W=Object.defineProperty,_=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))$.call(t,n)&&b(e,n,t[n]);return e},r=(e,t)=>_(e,N(t));var E=(e,t,n)=>new Promise((a,o)=>{var h=s=>{try{l(n.next(s))}catch(g){o(g)}},C=s=>{try{l(n.throw(s))}catch(g){o(g)}},l=s=>s.done?a(s.value):Promise.resolve(s.value).then(h,C);l((n=n.apply(e,t)).next())});import{j as i}from"./jsx-runtime-CVnACwZl.js";import{s as x,b as z}from"./NavigationItemsService-DJaS36DY.js";import"./ErrorStateIcon-w4D1x5VF.js";import"./SuccessStateIcon-D6uerxEu.js";import"./WarningStateIcon-DR3bdROO.js";import"./_baseClone-CXAe4HsA.js";import{r as R}from"./index-3OP4wdng.js";import{E as H}from"./ExampleStory-BQ6ECSWc.js";import{e as v,u as J}from"./index-BU0ZtLqn.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./style-DZvg_om7.js";import"./WarningFilled-CZ1UPkPI.js";const pe={title:"Components/Not Prod Ready/Data Entry/Checkbox",component:e=>{var a,o;const[t,n]=R.useState((o=(a=e.checked)!=null?a:e.defaultChecked)!=null?o:!1);return i.jsx(x,r(c({},e),{checked:t,onChange:h=>{n(!t)}}))},args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,indeterminate:!1,onChange:e=>{alert(`checked = ${e.target.checked}`)}}},d={args:{autoFocus:!0}},m={args:{defaultChecked:!0}},p={args:{disabled:!0}},k={args:{indeterminate:!0}},u={render:()=>{const e=["A","B","C"],t=["A","C"],[n,a]=R.useState(t),o=e.length===n.length,h=n.length>0&&n.length<e.length,C=l=>{a(l.target.checked?e:[])};return i.jsx(i.Fragment,{children:i.jsxs(H,{title:"The `indeterminate` property can help achieve a 'check all' effect.",children:[i.jsx(x,{indeterminate:h,checked:o,onChange:C,children:"Check all"}),i.jsx(z,{}),i.jsx(x.Group,{options:e,value:n,onChange:a})]})})},play:e=>E(void 0,null,function*(){v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(2);const t=e.canvasElement.querySelector(".ant-checkbox-indeterminate");if(t)yield J.click(t);else throw new Error("Checkbox Indeterminate not found");v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(4)})};var y,A,S;d.parameters=r(c({},d.parameters),{docs:r(c({},(y=d.parameters)==null?void 0:y.docs),{source:c({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source)})});var L,I,j;m.parameters=r(c({},m.parameters),{docs:r(c({},(L=m.parameters)==null?void 0:L.docs),{source:c({originalSource:`{
  args: {
    defaultChecked: true
  }
}`},(j=(I=m.parameters)==null?void 0:I.docs)==null?void 0:j.source)})});var D,O,q;p.parameters=r(c({},p.parameters),{docs:r(c({},(D=p.parameters)==null?void 0:D.docs),{source:c({originalSource:`{
  args: {
    disabled: true
  }
}`},(q=(O=p.parameters)==null?void 0:O.docs)==null?void 0:q.source)})});var w,B,F;k.parameters=r(c({},k.parameters),{docs:r(c({},(w=k.parameters)==null?void 0:w.docs),{source:c({originalSource:`{
  args: {
    indeterminate: true
  }
}`},(F=(B=k.parameters)==null?void 0:B.docs)==null?void 0:F.source)})});var T,G,P;u.parameters=r(c({},u.parameters),{docs:r(c({},(T=u.parameters)==null?void 0:T.docs),{source:c({originalSource:`{
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
}`},(P=(G=u.parameters)==null?void 0:G.docs)==null?void 0:P.source)})});const ke=["WithAutoFocus","DefaultChecked","Disabled","Indeterminate","ExampleCheckAll"];export{m as DefaultChecked,p as Disabled,u as ExampleCheckAll,k as Indeterminate,d as WithAutoFocus,ke as __namedExportsOrder,pe as default};
