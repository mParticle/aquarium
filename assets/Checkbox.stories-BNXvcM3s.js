import{j as e,aE as c,aW as r,aQ as k,aN as v,aX as j,aY as C,F as S,T as l}from"./iframe-CeKtREzi.js";const w={title:"Components/Data Entry/Checkbox",component:s=>{const[n,o]=c.useState(s.checked??s.defaultChecked??!1);return e.jsx(r,{...s,checked:n,onChange:t=>{o(!n)}})},args:{defaultChecked:!0,disabled:!1},argTypes:{defaultChecked:{control:"boolean"},disabled:{control:"boolean"}}},d=[{label:"Feature A",value:"feature-a"},{label:"Feature B",value:"feature-b"},{label:"Feature C",value:"feature-c"}],T=()=>{const[s,n]=c.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:k,maxWidth:"448px"},children:[e.jsx(r,{checked:s,onChange:o=>{n(o.target.checked)},children:"Default (interactive)"}),e.jsx(r,{defaultChecked:!0,children:"Checked"}),e.jsx(r,{indeterminate:!0,children:"Indeterminate"}),e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{disabled:!0,defaultChecked:!0,children:"Disabled and checked"})]})},E=()=>{const[s,n]=c.useState(["feature-a","feature-c"]),o=d.map(a=>a.value),t=s.length===d.length,i=s.length>0&&!t;return e.jsxs(S,{vertical:!0,gap:C,style:{maxWidth:"448px"},children:[e.jsx(r,{indeterminate:i,checked:t,onChange:a=>{n(a.target.checked?o:[])},children:"Check all"}),e.jsx(r.Group,{options:d,value:s,style:{display:"flex",flexDirection:"column",gap:C},onChange:a=>{n(a)}})]})},G=()=>{const[s,n]=c.useState(["feature-a","feature-c"]),o=d.map(a=>a.value),t=s.length===d.length,i=s.length>0&&!t;return e.jsxs("div",{style:{display:"grid",gap:k,maxWidth:"448px"},children:[e.jsx(r,{indeterminate:i,checked:t,onChange:a=>{n(a.target.checked?o:[])},children:"Select all features"}),e.jsx("div",{style:{display:"grid",gap:C,paddingLeft:j},children:e.jsx(r.Group,{options:d,value:s,onChange:a=>{n(a)}})})]})},W=[{label:"Product updates",value:"product-updates",description:"Important improvements, release notes, and early access invitations."},{label:"Webinars and events",value:"events",description:"Invitations to upcoming live sessions, workshops, and community meetups."},{label:"Security advisories",value:"security",description:"Critical notifications about security and compliance-related changes."}],L=()=>{const[s,n]=c.useState(["product-updates"]),o=(t,i)=>{n(a=>i?a.includes(t)?a:[...a,t]:a.filter(f=>f!==t))};return e.jsx("div",{style:{display:"grid",gap:k,maxWidth:"512px"},children:W.map(t=>{const i=s.includes(t.value);return e.jsx(r,{checked:i,onChange:a=>{o(t.value,a.target.checked)},children:e.jsxs(S,{vertical:!0,children:[e.jsx(l.Text,{children:t.label}),e.jsx(l.Text,{type:"secondary",children:t.description})]})},t.value)})})},D=[{label:"Email notifications",value:"email-notifications",line1:"Receive updates about account activity and security alerts.",line2:"You can customize frequency in your notification preferences."},{label:"Usage analytics",value:"usage-analytics",line1:"Share anonymous usage data to help improve the product.",line2:"No personally identifiable information is collected or shared."},{label:"Beta features",value:"beta-features",line1:"Get early access to new features before they are generally available.",line2:"Beta features may change or be removed without prior notice."}],O=()=>{const[s,n]=c.useState(["email-notifications"]),o=(t,i)=>{n(a=>i?a.includes(t)?a:[...a,t]:a.filter(f=>f!==t))};return e.jsx("div",{style:{display:"grid",gap:k,maxWidth:"512px"},children:D.map(t=>{const i=s.includes(t.value);return e.jsx(r,{checked:i,onChange:a=>{o(t.value,a.target.checked)},children:e.jsxs(S,{vertical:!0,children:[e.jsx(l.Text,{strong:!0,children:t.label}),e.jsx(l.Text,{type:"secondary",children:t.line1}),e.jsx(l.Text,{type:"secondary",children:t.line2})]})},t.value)})})},V=()=>{const[s,n]=c.useState(!0);return e.jsx("div",{style:{maxWidth:"512px"},children:e.jsx(r,{checked:s,onChange:o=>{n(o.target.checked)},children:e.jsx(l.Text,{children:"I agree to the terms, policies, and any other legal guidelines required to use this service, including matters related to privacy, data usage, third-party tools, cookies, and future updates to the agreement."})})})},F=()=>e.jsx(v,{title:"You don’t have permission to change this setting",children:e.jsx(r,{disabled:!0,defaultChecked:!0,children:"Checkbox label"})}),p={args:{disabled:!1,children:"Checkbox label"}},h={name:"States showcase",render:()=>e.jsx(T,{}),parameters:{docs:{description:{story:"Display the default, checked, indeterminate, and disabled states together for fast visual comparison."}}}},u={name:"Disabled with tooltip",render:()=>e.jsx(F,{}),parameters:{docs:{description:{story:"Wrap a disabled checkbox with a tooltip to explain why the option is unavailable."}}}},m={name:"Group selection",render:()=>e.jsx(G,{}),parameters:{docs:{description:{story:'Use `Checkbox.Group` to render related choices. Combine it with a single Checkbox to create a "Select all" control when needed.'}}}},x={name:"Vertical group",render:()=>e.jsx(E,{}),parameters:{docs:{description:{story:'Combine a "Check all" control with a vertically stacked `Checkbox.Group`. The leading checkbox reflects the indeterminate state when only some options are selected.'}}}},g={name:"Multiple options",render:()=>e.jsx(L,{}),parameters:{docs:{description:{story:"Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails."}}}},b={name:"Title with two lines of text",render:()=>e.jsx(O,{}),parameters:{docs:{description:{story:"Use a bold title with two lines of secondary text to give users enough context about each option. This pattern works well for settings and preference panels."}}}},y={name:"Long form consent",render:()=>e.jsx(V,{}),parameters:{docs:{description:{story:"Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    children: 'Checkbox label'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'States showcase',
  render: () => <CheckboxStatesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Display the default, checked, indeterminate, and disabled states together for fast visual comparison.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with tooltip',
  render: () => <DisabledWithTooltipExample />,
  parameters: {
    docs: {
      description: {
        story: 'Wrap a disabled checkbox with a tooltip to explain why the option is unavailable.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Group selection',
  render: () => <CheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`Checkbox.Group\` to render related choices. Combine it with a single Checkbox to create a "Select all" control when needed.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Vertical group',
  render: () => <VerticalCheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Combine a "Check all" control with a vertically stacked \`Checkbox.Group\`. The leading checkbox reflects the indeterminate state when only some options are selected.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Multiple options',
  render: () => <CheckboxListExample />,
  parameters: {
    docs: {
      description: {
        story: 'Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Title with two lines of text',
  render: () => <CheckboxWithTitleAndTwoLinesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use a bold title with two lines of secondary text to give users enough context about each option. This pattern works well for settings and preference panels.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Long form consent',
  render: () => <LongLegalCopyExample />,
  parameters: {
    docs: {
      description: {
        story: 'Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const I=["Primary","StatesShowcase","DisabledWithTooltip","GroupSelection","VerticalGroup","MultipleOptions","TitleWithTwoLines","LongFormConsent"],_=Object.freeze(Object.defineProperty({__proto__:null,DisabledWithTooltip:u,GroupSelection:m,LongFormConsent:y,MultipleOptions:g,Primary:p,StatesShowcase:h,TitleWithTwoLines:b,VerticalGroup:x,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{_ as C,u as D,m as G,y as L,g as M,p as P,h as S,b as T,x as V};
