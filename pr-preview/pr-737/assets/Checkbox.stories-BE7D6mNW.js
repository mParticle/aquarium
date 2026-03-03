var Q=Object.defineProperty,Z=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var T=(t,a,o)=>a in t?Q(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(t,a)=>{for(var o in a||(a={}))ee.call(a,o)&&T(t,o,a[o]);if(j)for(var o of j(a))te.call(a,o)&&T(t,o,a[o]);return t},i=(t,a)=>Z(t,$(a));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{t as l,T as ae,F as w,b as p}from"./UnauthorizedTooltip-dyLu4nQN.js";import"./ErrorStateIcon-qKzc1GK1.js";import"./SuccessStateIcon-Yh_2FoSB.js";import"./WarningStateIcon-C0qQ2T-3.js";import"./_baseClone-DwBCp-Ss.js";import{r as d}from"./index-3OP4wdng.js";import{au as C,av as se,aw as S}from"./style-DU2SNM1h.js";const re={title:"Components/Data Entry/Checkbox",component:t=>{var s,c;const[a,o]=d.useState((c=(s=t.checked)!=null?s:t.defaultChecked)!=null?c:!1);return e.jsx(l,i(n({},t),{checked:a,onChange:r=>{o(!a)}}))},args:{defaultChecked:!0,disabled:!1},argTypes:{defaultChecked:{control:"boolean"},disabled:{control:"boolean"}}},h=[{label:"Feature A",value:"feature-a"},{label:"Feature B",value:"feature-b"},{label:"Feature C",value:"feature-c"}],ne=()=>{const[t,a]=d.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:C,maxWidth:"448px"},children:[e.jsx(l,{checked:t,onChange:o=>{a(o.target.checked)},children:"Default (interactive)"}),e.jsx(l,{defaultChecked:!0,children:"Checked"}),e.jsx(l,{indeterminate:!0,children:"Indeterminate"}),e.jsx(l,{disabled:!0,children:"Disabled"}),e.jsx(l,{disabled:!0,defaultChecked:!0,children:"Disabled and checked"})]})},oe=()=>{const[t,a]=d.useState(["feature-a","feature-c"]),o=h.map(r=>r.value),s=t.length===h.length,c=t.length>0&&!s;return e.jsxs(w,{vertical:!0,gap:S,style:{maxWidth:"448px"},children:[e.jsx(l,{indeterminate:c,checked:s,onChange:r=>{a(r.target.checked?o:[])},children:"Check all"}),e.jsx(l.Group,{options:h,value:t,style:{display:"flex",flexDirection:"column",gap:S},onChange:r=>{a(r)}})]})},ie=()=>{const[t,a]=d.useState(["feature-a","feature-c"]),o=h.map(r=>r.value),s=t.length===h.length,c=t.length>0&&!s;return e.jsxs("div",{style:{display:"grid",gap:C,maxWidth:"448px"},children:[e.jsx(l,{indeterminate:c,checked:s,onChange:r=>{a(r.target.checked?o:[])},children:"Select all features"}),e.jsx("div",{style:{display:"grid",gap:S,paddingLeft:se},children:e.jsx(l.Group,{options:h,value:t,onChange:r=>{a(r)}})})]})},ce=[{label:"Product updates",value:"product-updates",description:"Important improvements, release notes, and early access invitations."},{label:"Webinars and events",value:"events",description:"Invitations to upcoming live sessions, workshops, and community meetups."},{label:"Security advisories",value:"security",description:"Critical notifications about security and compliance-related changes."}],le=()=>{const[t,a]=d.useState(["product-updates"]),o=(s,c)=>{a(r=>c?r.includes(s)?r:[...r,s]:r.filter(v=>v!==s))};return e.jsx("div",{style:{display:"grid",gap:C,maxWidth:"512px"},children:ce.map(s=>{const c=t.includes(s.value);return e.jsx(l,{checked:c,onChange:r=>{o(s.value,r.target.checked)},children:e.jsxs(w,{vertical:!0,children:[e.jsx(p.Text,{children:s.label}),e.jsx(p.Text,{type:"secondary",children:s.description})]})},s.value)})})},de=[{label:"Email notifications",value:"email-notifications",line1:"Receive updates about account activity and security alerts.",line2:"You can customize frequency in your notification preferences."},{label:"Usage analytics",value:"usage-analytics",line1:"Share anonymous usage data to help improve the product.",line2:"No personally identifiable information is collected or shared."},{label:"Beta features",value:"beta-features",line1:"Get early access to new features before they are generally available.",line2:"Beta features may change or be removed without prior notice."}],pe=()=>{const[t,a]=d.useState(["email-notifications"]),o=(s,c)=>{a(r=>c?r.includes(s)?r:[...r,s]:r.filter(v=>v!==s))};return e.jsx("div",{style:{display:"grid",gap:C,maxWidth:"512px"},children:de.map(s=>{const c=t.includes(s.value);return e.jsx(l,{checked:c,onChange:r=>{o(s.value,r.target.checked)},children:e.jsxs(w,{vertical:!0,children:[e.jsx(p.Text,{strong:!0,children:s.label}),e.jsx(p.Text,{type:"secondary",children:s.line1}),e.jsx(p.Text,{type:"secondary",children:s.line2})]})},s.value)})})},he=()=>{const[t,a]=d.useState(!0);return e.jsx("div",{style:{maxWidth:"512px"},children:e.jsx(l,{checked:t,onChange:o=>{a(o.target.checked)},children:e.jsx(p.Text,{children:"I agree to the terms, policies, and any other legal guidelines required to use this service, including matters related to privacy, data usage, third-party tools, cookies, and future updates to the agreement."})})})},ue=()=>e.jsx(ae,{title:"You don’t have permission to change this setting",children:e.jsx(l,{disabled:!0,defaultChecked:!0,children:"Checkbox label"})}),u={args:{disabled:!1,children:"Checkbox label"}},m={name:"States showcase",render:()=>e.jsx(ne,{}),parameters:{docs:{description:{story:"Display the default, checked, indeterminate, and disabled states together for fast visual comparison."}}}},x={name:"Disabled with tooltip",render:()=>e.jsx(ue,{}),parameters:{docs:{description:{story:"Wrap a disabled checkbox with a tooltip to explain why the option is unavailable."}}}},g={name:"Group selection",render:()=>e.jsx(ie,{}),parameters:{docs:{description:{story:'Use `Checkbox.Group` to render related choices. Combine it with a single Checkbox to create a "Select all" control when needed.'}}}},b={name:"Vertical group",render:()=>e.jsx(oe,{}),parameters:{docs:{description:{story:'Combine a "Check all" control with a vertically stacked `Checkbox.Group`. The leading checkbox reflects the indeterminate state when only some options are selected.'}}}},y={name:"Multiple options",render:()=>e.jsx(le,{}),parameters:{docs:{description:{story:"Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails."}}}},k={name:"Title with two lines of text",render:()=>e.jsx(pe,{}),parameters:{docs:{description:{story:"Use a bold title with two lines of secondary text to give users enough context about each option. This pattern works well for settings and preference panels."}}}},f={name:"Long form consent",render:()=>e.jsx(he,{}),parameters:{docs:{description:{story:"Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability."}}}};var E,G,W;u.parameters=i(n({},u.parameters),{docs:i(n({},(E=u.parameters)==null?void 0:E.docs),{source:n({originalSource:`{
  args: {
    disabled: false,
    children: 'Checkbox label'
  }
}`},(W=(G=u.parameters)==null?void 0:G.docs)==null?void 0:W.source)})});var L,D,O;m.parameters=i(n({},m.parameters),{docs:i(n({},(L=m.parameters)==null?void 0:L.docs),{source:n({originalSource:`{
  name: 'States showcase',
  render: () => <CheckboxStatesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Display the default, checked, indeterminate, and disabled states together for fast visual comparison.'
      }
    }
  }
}`},(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source)})});var V,F,I;x.parameters=i(n({},x.parameters),{docs:i(n({},(V=x.parameters)==null?void 0:V.docs),{source:n({originalSource:`{
  name: 'Disabled with tooltip',
  render: () => <DisabledWithTooltipExample />,
  parameters: {
    docs: {
      description: {
        story: 'Wrap a disabled checkbox with a tooltip to explain why the option is unavailable.'
      }
    }
  }
}`},(I=(F=x.parameters)==null?void 0:F.docs)==null?void 0:I.source)})});var U,M,_;g.parameters=i(n({},g.parameters),{docs:i(n({},(U=g.parameters)==null?void 0:U.docs),{source:n({originalSource:`{
  name: 'Group selection',
  render: () => <CheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`Checkbox.Group\` to render related choices. Combine it with a single Checkbox to create a "Select all" control when needed.'
      }
    }
  }
}`},(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source)})});var z,A,P;b.parameters=i(n({},b.parameters),{docs:i(n({},(z=b.parameters)==null?void 0:z.docs),{source:n({originalSource:`{
  name: 'Vertical group',
  render: () => <VerticalCheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Combine a "Check all" control with a vertically stacked \`Checkbox.Group\`. The leading checkbox reflects the indeterminate state when only some options are selected.'
      }
    }
  }
}`},(P=(A=b.parameters)==null?void 0:A.docs)==null?void 0:P.source)})});var B,q,K;y.parameters=i(n({},y.parameters),{docs:i(n({},(B=y.parameters)==null?void 0:B.docs),{source:n({originalSource:`{
  name: 'Multiple options',
  render: () => <CheckboxListExample />,
  parameters: {
    docs: {
      description: {
        story: 'Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails.'
      }
    }
  }
}`},(K=(q=y.parameters)==null?void 0:q.docs)==null?void 0:K.source)})});var R,X,Y;k.parameters=i(n({},k.parameters),{docs:i(n({},(R=k.parameters)==null?void 0:R.docs),{source:n({originalSource:`{
  name: 'Title with two lines of text',
  render: () => <CheckboxWithTitleAndTwoLinesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use a bold title with two lines of secondary text to give users enough context about each option. This pattern works well for settings and preference panels.'
      }
    }
  }
}`},(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var N,H,J;f.parameters=i(n({},f.parameters),{docs:i(n({},(N=f.parameters)==null?void 0:N.docs),{source:n({originalSource:`{
  name: 'Long form consent',
  render: () => <LongLegalCopyExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability.'
      }
    }
  }
}`},(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});const me=["Primary","StatesShowcase","DisabledWithTooltip","GroupSelection","VerticalGroup","MultipleOptions","TitleWithTwoLines","LongFormConsent"],we=Object.freeze(Object.defineProperty({__proto__:null,DisabledWithTooltip:x,GroupSelection:g,LongFormConsent:f,MultipleOptions:y,Primary:u,StatesShowcase:m,TitleWithTwoLines:k,VerticalGroup:b,__namedExportsOrder:me,default:re},Symbol.toStringTag,{value:"Module"}));export{we as C,x as D,g as G,f as L,y as M,u as P,m as S,k as T,b as V};
