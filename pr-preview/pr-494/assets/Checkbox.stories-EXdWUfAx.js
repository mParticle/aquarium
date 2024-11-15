var V=Object.defineProperty,$=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var y=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))K.call(t,n)&&y(e,n,t[n]);return e},a=(e,t)=>$(e,H(t));var S=(e,t,n)=>new Promise((r,o)=>{var C=s=>{try{i(n.next(s))}catch(x){o(x)}},g=s=>{try{i(n.throw(s))}catch(x){o(x)}},i=s=>s.done?r(s.value):Promise.resolve(s.value).then(C,g);i((n=n.apply(e,t)).next())});import{j as l}from"./jsx-runtime-BcCOBRXo.js";import{v as f,d as N}from"./GlobalNavigation-vXHgDRim.js";import"./_baseClone-DBzvlRjn.js";import{r as R}from"./index-CNk6hRaE.js";import{E as Q}from"./ExampleStory-Dxw3yFlX.js";import{e as v,u as U}from"./index-BU0ZtLqn.js";const X={title:"Components/Data Entry/Checkbox",component:e=>{var r,o;const[t,n]=R.useState((o=(r=e.checked)!=null?r:e.defaultChecked)!=null?o:!1);return l.jsx(f,a(c({},e),{checked:t,onChange:C=>{n(!t)}}))},args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,indeterminate:!1,onChange:e=>{alert(`checked = ${e.target.checked}`)}}},d={},h={args:{autoFocus:!0}},m={args:{defaultChecked:!0}},u={args:{disabled:!0}},p={args:{indeterminate:!0}},k={render:()=>{const e=["A","B","C"],t=["A","C"],[n,r]=R.useState(t),o=e.length===n.length,C=n.length>0&&n.length<e.length,g=i=>{r(i.target.checked?e:[])};return l.jsx(l.Fragment,{children:l.jsxs(Q,{title:"The `indeterminate` property can help achieve a 'check all' effect.",children:[l.jsx(f,{indeterminate:C,checked:o,onChange:g,children:"Check all"}),l.jsx(N,{}),l.jsx(f.Group,{options:e,value:n,onChange:r})]})})},play:e=>S(void 0,null,function*(){v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(2);const t=e.canvasElement.querySelector(".ant-checkbox-indeterminate");if(t)yield U.click(t);else throw new Error("Checkbox Indeterminate not found");v(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(4)})};var E,A,L;d.parameters=a(c({},d.parameters),{docs:a(c({},(E=d.parameters)==null?void 0:E.docs),{source:c({originalSource:"{}"},(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source)})});var j,I,O;h.parameters=a(c({},h.parameters),{docs:a(c({},(j=h.parameters)==null?void 0:j.docs),{source:c({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(O=(I=h.parameters)==null?void 0:I.docs)==null?void 0:O.source)})});var D,q,w;m.parameters=a(c({},m.parameters),{docs:a(c({},(D=m.parameters)==null?void 0:D.docs),{source:c({originalSource:`{
  args: {
    defaultChecked: true
  }
}`},(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source)})});var B,F,_;u.parameters=a(c({},u.parameters),{docs:a(c({},(B=u.parameters)==null?void 0:B.docs),{source:c({originalSource:`{
  args: {
    disabled: true
  }
}`},(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source)})});var P,T,G;p.parameters=a(c({},p.parameters),{docs:a(c({},(P=p.parameters)==null?void 0:P.docs),{source:c({originalSource:`{
  args: {
    indeterminate: true
  }
}`},(G=(T=p.parameters)==null?void 0:T.docs)==null?void 0:G.source)})});var W,z,M;k.parameters=a(c({},k.parameters),{docs:a(c({},(W=k.parameters)==null?void 0:W.docs),{source:c({originalSource:`{
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
}`},(M=(z=k.parameters)==null?void 0:z.docs)==null?void 0:M.source)})});const Y=["Primary","WithAutoFocus","DefaultChecked","Disabled","Indeterminate","ExampleCheckAll"],oe=Object.freeze(Object.defineProperty({__proto__:null,DefaultChecked:m,Disabled:u,ExampleCheckAll:k,Indeterminate:p,Primary:d,WithAutoFocus:h,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{oe as C,X as m};
