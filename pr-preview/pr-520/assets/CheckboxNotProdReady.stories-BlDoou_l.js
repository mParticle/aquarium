var W=Object.defineProperty,_=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))$.call(t,n)&&b(e,n,t[n]);return e},a=(e,t)=>_(e,N(t));var E=(e,t,n)=>new Promise((r,o)=>{var h=s=>{try{i(n.next(s))}catch(g){o(g)}},C=s=>{try{i(n.throw(s))}catch(g){o(g)}},i=s=>s.done?r(s.value):Promise.resolve(s.value).then(h,C);i((n=n.apply(e,t)).next())});import{j as l}from"./jsx-runtime-BcCOBRXo.js";import{w as x,c as z}from"./GlobalNavigation-Dd_dljeW.js";import"./_baseClone-DBzvlRjn.js";import{r as R}from"./index-CNk6hRaE.js";import{E as H}from"./ExampleStory-Byf237u0.js";import{e as v,u as J}from"./index-BU0ZtLqn.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const oe={title:"Components/Not Prod Ready/Data Entry/Checkbox",component:e=>{var r,o;const[t,n]=R.useState((o=(r=e.checked)!=null?r:e.defaultChecked)!=null?o:!1);return l.jsx(x,a(c({},e),{checked:t,onChange:h=>{n(!t)}}))},args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,indeterminate:!1,onChange:e=>{alert(`checked = ${e.target.checked}`)}}},d={args:{autoFocus:!0}},m={args:{defaultChecked:!0}},p={args:{disabled:!0}},k={args:{indeterminate:!0}},u={render:()=>{const e=["A","B","C"],t=["A","C"],[n,r]=R.useState(t),o=e.length===n.length,h=n.length>0&&n.length<e.length,C=i=>{r(i.target.checked?e:[])};return l.jsx(l.Fragment,{children:l.jsxs(H,{title:"The `indeterminate` property can help achieve a 'check all' effect.",children:[l.jsx(x,{indeterminate:h,checked:o,onChange:C,children:"Check all"}),l.jsx(z,{}),l.jsx(x.Group,{options:e,value:n,onChange:r})]})})},play:e=>E(void 0,null,function*(){v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(2);const t=e.canvasElement.querySelector(".ant-checkbox-indeterminate");if(t)yield J.click(t);else throw new Error("Checkbox Indeterminate not found");v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(4)})};var y,A,S;d.parameters=a(c({},d.parameters),{docs:a(c({},(y=d.parameters)==null?void 0:y.docs),{source:c({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source)})});var L,I,j;m.parameters=a(c({},m.parameters),{docs:a(c({},(L=m.parameters)==null?void 0:L.docs),{source:c({originalSource:`{
  args: {
    defaultChecked: true
  }
}`},(j=(I=m.parameters)==null?void 0:I.docs)==null?void 0:j.source)})});var w,D,O;p.parameters=a(c({},p.parameters),{docs:a(c({},(w=p.parameters)==null?void 0:w.docs),{source:c({originalSource:`{
  args: {
    disabled: true
  }
}`},(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source)})});var q,B,F;k.parameters=a(c({},k.parameters),{docs:a(c({},(q=k.parameters)==null?void 0:q.docs),{source:c({originalSource:`{
  args: {
    indeterminate: true
  }
}`},(F=(B=k.parameters)==null?void 0:B.docs)==null?void 0:F.source)})});var T,G,P;u.parameters=a(c({},u.parameters),{docs:a(c({},(T=u.parameters)==null?void 0:T.docs),{source:c({originalSource:`{
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
}`},(P=(G=u.parameters)==null?void 0:G.docs)==null?void 0:P.source)})});const se=["WithAutoFocus","DefaultChecked","Disabled","Indeterminate","ExampleCheckAll"];export{m as DefaultChecked,p as Disabled,u as ExampleCheckAll,k as Indeterminate,d as WithAutoFocus,se as __namedExportsOrder,oe as default};
