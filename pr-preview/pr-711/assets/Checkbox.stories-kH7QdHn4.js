var H=Object.defineProperty,z=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var C=(a,t,s)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,r=(a,t)=>{for(var s in t||(t={}))B.call(t,s)&&C(a,s,t[s]);if(k)for(var s of k(t))K.call(t,s)&&C(a,s,t[s]);return a},o=(a,t)=>z(a,A(t));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{t as i,T as q}from"./NavigationItemsService-BG28S98x.js";import"./ErrorStateIcon-CDVbo1xI.js";import"./SuccessStateIcon-DoC_qUQO.js";import"./WarningStateIcon-5DlDDKFK.js";import"./_baseClone-DwBCp-Ss.js";import{r as b}from"./index-3OP4wdng.js";const R={title:"Components/Data Entry/Checkbox",component:a=>{var n,c;const[t,s]=b.useState((c=(n=a.checked)!=null?n:a.defaultChecked)!=null?c:!1);return e.jsx(i,o(r({},a),{checked:t,onChange:l=>{s(!t)}}))},args:{defaultChecked:!0,disabled:!1},argTypes:{defaultChecked:{control:"boolean"},disabled:{control:"boolean"}}},y=[{label:"Feature A",value:"feature-a"},{label:"Feature B",value:"feature-b"},{label:"Feature C",value:"feature-c"}],V={display:"grid",gap:"0.75rem",maxWidth:"28rem"},Y=()=>{const[a,t]=b.useState(!1);return e.jsxs("div",{style:V,children:[e.jsx(i,{checked:a,onChange:s=>{t(s.target.checked)},children:"Default (interactive)"}),e.jsx(i,{defaultChecked:!0,children:"Checked"}),e.jsx(i,{indeterminate:!0,children:"Indeterminate"}),e.jsx(i,{disabled:!0,children:"Disabled"}),e.jsx(i,{disabled:!0,defaultChecked:!0,children:"Disabled and checked"})]})},J=()=>{const[a,t]=b.useState(["feature-a","feature-c"]),s={display:"grid",gap:"0.75rem",maxWidth:"22rem"},n=y.map(d=>d.value),c=a.length===y.length,l=a.length>0&&!c;return e.jsxs("div",{style:s,children:[e.jsx(i,{indeterminate:l,checked:c,onChange:d=>{t(d.target.checked?n:[])},style:{color:"#1F2937"},children:"Select all features"}),e.jsx("div",{style:{display:"grid",gap:"0.5rem",paddingLeft:"2rem"},children:e.jsx(i.Group,{options:y,value:a,onChange:d=>{t(d)},style:{display:"grid",gap:"0.5rem"}})})]})},N=[{label:"Product updates",value:"product-updates",description:"Important improvements, release notes, and early access invitations."},{label:"Webinars and events",value:"events",description:"Invitations to upcoming live sessions, workshops, and community meetups."},{label:"Security advisories",value:"security",description:"Critical notifications about security and compliance-related changes."}],Q=()=>{const[a,t]=b.useState(["product-updates"]),s=(n,c)=>{t(l=>c?l.includes(n)?l:[...l,n]:l.filter(d=>d!==n))};return e.jsx("div",{style:{display:"grid",gap:"1rem",maxWidth:"32rem"},children:N.map(n=>{const c=a.includes(n.value);return e.jsx(i,{checked:c,onChange:l=>{s(n.value,l.target.checked)},children:e.jsxs("div",{style:{display:"grid",gap:"0.25rem"},children:[e.jsx("span",{style:{color:"#1F2937",lineHeight:1.4},children:n.label}),e.jsx("span",{style:{color:"#6B7280",fontSize:"0.875rem",lineHeight:1.4},children:n.description})]})},n.value)})})},X=()=>{const[a,t]=b.useState(!0),s={maxWidth:"48rem"};return e.jsx("div",{style:s,children:e.jsx(i,{checked:a,onChange:n=>{t(n.target.checked)},style:{alignItems:"flex-start"},children:e.jsx("div",{style:{color:"#1F2937",lineHeight:1.6},children:"I agree to the terms, policies, and any other legal guidelines required to use this service, including matters related to privacy, data usage, third-party tools, cookies, and future updates to the agreement."})})})},Z=()=>e.jsx(q,{title:"You don’t have permission to change this setting",children:e.jsx(i,{disabled:!0,defaultChecked:!0,children:"Checkbox label"})}),p={args:{disabled:!1,children:"Checkbox label"}},h={name:"States showcase",render:()=>e.jsx(Y,{}),parameters:{docs:{description:{story:"Display the default, checked, indeterminate, and disabled states together for fast visual comparison."}}}},u={name:"Disabled with tooltip",render:()=>e.jsx(Z,{}),parameters:{docs:{description:{story:"Wrap a disabled checkbox with a tooltip to explain why the option is unavailable."}}}},m={name:"Group selection",render:()=>e.jsx(J,{}),parameters:{docs:{description:{story:"Use `Checkbox.Group` to render related choices. Combine it with a single Checkbox to create a “Select all” control when needed."}}}},g={name:"Multiple options",render:()=>e.jsx(Q,{}),parameters:{docs:{description:{story:"Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails."}}}},x={name:"Long form consent",render:()=>e.jsx(X,{}),parameters:{docs:{description:{story:"Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability."}}}};var f,S,v;p.parameters=o(r({},p.parameters),{docs:o(r({},(f=p.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    disabled: false,
    children: 'Checkbox label'
  }
}`},(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source)})});var j,w,E;h.parameters=o(r({},h.parameters),{docs:o(r({},(j=h.parameters)==null?void 0:j.docs),{source:r({originalSource:`{
  name: 'States showcase',
  render: () => <CheckboxStatesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Display the default, checked, indeterminate, and disabled states together for fast visual comparison.'
      }
    }
  }
}`},(E=(w=h.parameters)==null?void 0:w.docs)==null?void 0:E.source)})});var D,L,W;u.parameters=o(r({},u.parameters),{docs:o(r({},(D=u.parameters)==null?void 0:D.docs),{source:r({originalSource:`{
  name: 'Disabled with tooltip',
  render: () => <DisabledWithTooltipExample />,
  parameters: {
    docs: {
      description: {
        story: 'Wrap a disabled checkbox with a tooltip to explain why the option is unavailable.'
      }
    }
  }
}`},(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source)})});var G,O,F;m.parameters=o(r({},m.parameters),{docs:o(r({},(G=m.parameters)==null?void 0:G.docs),{source:r({originalSource:`{
  name: 'Group selection',
  render: () => <CheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`Checkbox.Group\` to render related choices. Combine it with a single Checkbox to create a “Select all” control when needed.'
      }
    }
  }
}`},(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source)})});var T,I,M;g.parameters=o(r({},g.parameters),{docs:o(r({},(T=g.parameters)==null?void 0:T.docs),{source:r({originalSource:`{
  name: 'Multiple options',
  render: () => <CheckboxListExample />,
  parameters: {
    docs: {
      description: {
        story: 'Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails.'
      }
    }
  }
}`},(M=(I=g.parameters)==null?void 0:I.docs)==null?void 0:M.source)})});var _,P,U;x.parameters=o(r({},x.parameters),{docs:o(r({},(_=x.parameters)==null?void 0:_.docs),{source:r({originalSource:`{
  name: 'Long form consent',
  render: () => <LongLegalCopyExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability.'
      }
    }
  }
}`},(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source)})});const $=["Primary","StatesShowcase","DisabledWithTooltip","GroupSelection","MultipleOptions","LongFormConsent"],ce=Object.freeze(Object.defineProperty({__proto__:null,DisabledWithTooltip:u,GroupSelection:m,LongFormConsent:x,MultipleOptions:g,Primary:p,StatesShowcase:h,__namedExportsOrder:$,default:R},Symbol.toStringTag,{value:"Module"}));export{ce as C,u as D,m as G,x as L,g as M,p as P,h as S};
