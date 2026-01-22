import{j as e}from"./jsx-runtime-u17CrQMm.js";import{q as n,i as k,F as C,T as g}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{r as m}from"./iframe-DPsSDxI5.js";import{r as b,s as f,t as S}from"./style-C-7nCLOl.js";const j={title:"Components/Data Entry/Checkbox",component:t=>{const[r,o]=m.useState(t.checked??t.defaultChecked??!1);return e.jsx(n,{...t,checked:r,onChange:a=>{o(!r)}})},args:{defaultChecked:!0,disabled:!1},argTypes:{defaultChecked:{control:"boolean"},disabled:{control:"boolean"}}},x=[{label:"Feature A",value:"feature-a"},{label:"Feature B",value:"feature-b"},{label:"Feature C",value:"feature-c"}],v=()=>{const[t,r]=m.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:b,maxWidth:"448px"},children:[e.jsx(n,{checked:t,onChange:o=>{r(o.target.checked)},children:"Default (interactive)"}),e.jsx(n,{defaultChecked:!0,children:"Checked"}),e.jsx(n,{indeterminate:!0,children:"Indeterminate"}),e.jsx(n,{disabled:!0,children:"Disabled"}),e.jsx(n,{disabled:!0,defaultChecked:!0,children:"Disabled and checked"})]})},w=()=>{const[t,r]=m.useState(["feature-a","feature-c"]),o=x.map(s=>s.value),a=t.length===x.length,i=t.length>0&&!a;return e.jsxs("div",{style:{display:"grid",gap:b,maxWidth:"448px"},children:[e.jsx(n,{indeterminate:i,checked:a,onChange:s=>{r(s.target.checked?o:[])},children:"Select all features"}),e.jsx("div",{style:{display:"grid",gap:S,paddingLeft:f},children:e.jsx(n.Group,{options:x,value:t,onChange:s=>{r(s)}})})]})},E=[{label:"Product updates",value:"product-updates",description:"Important improvements, release notes, and early access invitations."},{label:"Webinars and events",value:"events",description:"Invitations to upcoming live sessions, workshops, and community meetups."},{label:"Security advisories",value:"security",description:"Critical notifications about security and compliance-related changes."}],D=()=>{const[t,r]=m.useState(["product-updates"]),o=(a,i)=>{r(s=>i?s.includes(a)?s:[...s,a]:s.filter(y=>y!==a))};return e.jsx("div",{style:{display:"grid",gap:b,maxWidth:"512px"},children:E.map(a=>{const i=t.includes(a.value);return e.jsx(n,{checked:i,onChange:s=>{o(a.value,s.target.checked)},children:e.jsxs(C,{vertical:!0,children:[e.jsx(g.Text,{children:a.label}),e.jsx(g.Text,{type:"secondary",children:a.description})]})},a.value)})})},L=()=>{const[t,r]=m.useState(!0);return e.jsx("div",{style:{maxWidth:"512px"},children:e.jsx(n,{checked:t,onChange:o=>{r(o.target.checked)},children:e.jsx(g.Text,{children:"I agree to the terms, policies, and any other legal guidelines required to use this service, including matters related to privacy, data usage, third-party tools, cookies, and future updates to the agreement."})})})},T=()=>e.jsx(k,{title:"You don’t have permission to change this setting",children:e.jsx(n,{disabled:!0,defaultChecked:!0,children:"Checkbox label"})}),c={args:{disabled:!1,children:"Checkbox label"}},d={name:"States showcase",render:()=>e.jsx(v,{}),parameters:{docs:{description:{story:"Display the default, checked, indeterminate, and disabled states together for fast visual comparison."}}}},l={name:"Disabled with tooltip",render:()=>e.jsx(T,{}),parameters:{docs:{description:{story:"Wrap a disabled checkbox with a tooltip to explain why the option is unavailable."}}}},p={name:"Group selection",render:()=>e.jsx(w,{}),parameters:{docs:{description:{story:"Use `Checkbox.Group` to render related choices. Combine it with a single Checkbox to create a “Select all” control when needed."}}}},h={name:"Multiple options",render:()=>e.jsx(D,{}),parameters:{docs:{description:{story:"Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails."}}}},u={name:"Long form consent",render:()=>e.jsx(L,{}),parameters:{docs:{description:{story:"Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    children: 'Checkbox label'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'States showcase',
  render: () => <CheckboxStatesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Display the default, checked, indeterminate, and disabled states together for fast visual comparison.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with tooltip',
  render: () => <DisabledWithTooltipExample />,
  parameters: {
    docs: {
      description: {
        story: 'Wrap a disabled checkbox with a tooltip to explain why the option is unavailable.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Group selection',
  render: () => <CheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`Checkbox.Group\` to render related choices. Combine it with a single Checkbox to create a “Select all” control when needed.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Multiple options',
  render: () => <CheckboxListExample />,
  parameters: {
    docs: {
      description: {
        story: 'Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Long form consent',
  render: () => <LongLegalCopyExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const W=["Primary","StatesShowcase","DisabledWithTooltip","GroupSelection","MultipleOptions","LongFormConsent"],z=Object.freeze(Object.defineProperty({__proto__:null,DisabledWithTooltip:l,GroupSelection:p,LongFormConsent:u,MultipleOptions:h,Primary:c,StatesShowcase:d,__namedExportsOrder:W,default:j},Symbol.toStringTag,{value:"Module"}));export{z as C,l as D,p as G,u as L,h as M,c as P,d as S};
