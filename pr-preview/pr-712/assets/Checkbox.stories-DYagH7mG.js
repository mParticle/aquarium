var K=Object.defineProperty,X=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(a,t,s)=>t in a?K(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,r=(a,t)=>{for(var s in t||(t={}))B.call(t,s)&&f(a,s,t[s]);if(C)for(var s of C(t))R.call(t,s)&&f(a,s,t[s]);return a},o=(a,t)=>X(a,q(t));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{t as c,T as V,F as Y,b as y}from"./NavigationItemsService-DAKspliy.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import{r as g}from"./index-3OP4wdng.js";import{r as k,s as H,t as J}from"./style-BbwCNso5.js";const N={title:"Components/Data Entry/Checkbox",component:a=>{var n,d;const[t,s]=g.useState((d=(n=a.checked)!=null?n:a.defaultChecked)!=null?d:!1);return e.jsx(c,o(r({},a),{checked:t,onChange:i=>{s(!t)}}))},args:{defaultChecked:!0,disabled:!1},argTypes:{defaultChecked:{control:"boolean"},disabled:{control:"boolean"}}},b=[{label:"Feature A",value:"feature-a"},{label:"Feature B",value:"feature-b"},{label:"Feature C",value:"feature-c"}],Q=()=>{const[a,t]=g.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:k,maxWidth:"448px"},children:[e.jsx(c,{checked:a,onChange:s=>{t(s.target.checked)},children:"Default (interactive)"}),e.jsx(c,{defaultChecked:!0,children:"Checked"}),e.jsx(c,{indeterminate:!0,children:"Indeterminate"}),e.jsx(c,{disabled:!0,children:"Disabled"}),e.jsx(c,{disabled:!0,defaultChecked:!0,children:"Disabled and checked"})]})},Z=()=>{const[a,t]=g.useState(["feature-a","feature-c"]),s=b.map(i=>i.value),n=a.length===b.length,d=a.length>0&&!n;return e.jsxs("div",{style:{display:"grid",gap:k,maxWidth:"448px"},children:[e.jsx(c,{indeterminate:d,checked:n,onChange:i=>{t(i.target.checked?s:[])},children:"Select all features"}),e.jsx("div",{style:{display:"grid",gap:J,paddingLeft:H},children:e.jsx(c.Group,{options:b,value:a,onChange:i=>{t(i)}})})]})},$=[{label:"Product updates",value:"product-updates",description:"Important improvements, release notes, and early access invitations."},{label:"Webinars and events",value:"events",description:"Invitations to upcoming live sessions, workshops, and community meetups."},{label:"Security advisories",value:"security",description:"Critical notifications about security and compliance-related changes."}],ee=()=>{const[a,t]=g.useState(["product-updates"]),s=(n,d)=>{t(i=>d?i.includes(n)?i:[...i,n]:i.filter(A=>A!==n))};return e.jsx("div",{style:{display:"grid",gap:k,maxWidth:"512px"},children:$.map(n=>{const d=a.includes(n.value);return e.jsx(c,{checked:d,onChange:i=>{s(n.value,i.target.checked)},children:e.jsxs(Y,{vertical:!0,children:[e.jsx(y.Text,{children:n.label}),e.jsx(y.Text,{type:"secondary",children:n.description})]})},n.value)})})},te=()=>{const[a,t]=g.useState(!0);return e.jsx("div",{style:{maxWidth:"512px"},children:e.jsx(c,{checked:a,onChange:s=>{t(s.target.checked)},children:e.jsx(y.Text,{children:"I agree to the terms, policies, and any other legal guidelines required to use this service, including matters related to privacy, data usage, third-party tools, cookies, and future updates to the agreement."})})})},ae=()=>e.jsx(V,{title:"You don’t have permission to change this setting",children:e.jsx(c,{disabled:!0,defaultChecked:!0,children:"Checkbox label"})}),l={args:{disabled:!1,children:"Checkbox label"}},p={name:"States showcase",render:()=>e.jsx(Q,{}),parameters:{docs:{description:{story:"Display the default, checked, indeterminate, and disabled states together for fast visual comparison."}}}},h={name:"Disabled with tooltip",render:()=>e.jsx(ae,{}),parameters:{docs:{description:{story:"Wrap a disabled checkbox with a tooltip to explain why the option is unavailable."}}}},u={name:"Group selection",render:()=>e.jsx(Z,{}),parameters:{docs:{description:{story:"Use `Checkbox.Group` to render related choices. Combine it with a single Checkbox to create a “Select all” control when needed."}}}},m={name:"Multiple options",render:()=>e.jsx(ee,{}),parameters:{docs:{description:{story:"Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails."}}}},x={name:"Long form consent",render:()=>e.jsx(te,{}),parameters:{docs:{description:{story:"Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability."}}}};var S,j,v;l.parameters=o(r({},l.parameters),{docs:o(r({},(S=l.parameters)==null?void 0:S.docs),{source:r({originalSource:`{
  args: {
    disabled: false,
    children: 'Checkbox label'
  }
}`},(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source)})});var w,E,D;p.parameters=o(r({},p.parameters),{docs:o(r({},(w=p.parameters)==null?void 0:w.docs),{source:r({originalSource:`{
  name: 'States showcase',
  render: () => <CheckboxStatesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Display the default, checked, indeterminate, and disabled states together for fast visual comparison.'
      }
    }
  }
}`},(D=(E=p.parameters)==null?void 0:E.docs)==null?void 0:D.source)})});var L,T,W;h.parameters=o(r({},h.parameters),{docs:o(r({},(L=h.parameters)==null?void 0:L.docs),{source:r({originalSource:`{
  name: 'Disabled with tooltip',
  render: () => <DisabledWithTooltipExample />,
  parameters: {
    docs: {
      description: {
        story: 'Wrap a disabled checkbox with a tooltip to explain why the option is unavailable.'
      }
    }
  }
}`},(W=(T=h.parameters)==null?void 0:T.docs)==null?void 0:W.source)})});var G,O,F;u.parameters=o(r({},u.parameters),{docs:o(r({},(G=u.parameters)==null?void 0:G.docs),{source:r({originalSource:`{
  name: 'Group selection',
  render: () => <CheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`Checkbox.Group\` to render related choices. Combine it with a single Checkbox to create a “Select all” control when needed.'
      }
    }
  }
}`},(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source)})});var I,M,_;m.parameters=o(r({},m.parameters),{docs:o(r({},(I=m.parameters)==null?void 0:I.docs),{source:r({originalSource:`{
  name: 'Multiple options',
  render: () => <CheckboxListExample />,
  parameters: {
    docs: {
      description: {
        story: 'Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails.'
      }
    }
  }
}`},(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source)})});var P,z,U;x.parameters=o(r({},x.parameters),{docs:o(r({},(P=x.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  name: 'Long form consent',
  render: () => <LongLegalCopyExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability.'
      }
    }
  }
}`},(U=(z=x.parameters)==null?void 0:z.docs)==null?void 0:U.source)})});const se=["Primary","StatesShowcase","DisabledWithTooltip","GroupSelection","MultipleOptions","LongFormConsent"],ue=Object.freeze(Object.defineProperty({__proto__:null,DisabledWithTooltip:h,GroupSelection:u,LongFormConsent:x,MultipleOptions:m,Primary:l,StatesShowcase:p,__namedExportsOrder:se,default:N},Symbol.toStringTag,{value:"Module"}));export{ue as C,h as D,u as G,x as L,m as M,l as P,p as S};
