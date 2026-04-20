import{ca as t,aE as g,j as o,c9 as i}from"./iframe-BxbdC_qw.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/AI/Suggestion",component:t},e={render:s=>{const[n,r]=g.useState("");return o.jsx(t,{...s,children:({onTrigger:l,onKeyDown:u})=>o.jsx(i,{value:n,onChange:a=>{r(a),l(a==="/")},onKeyDown:u,placeholder:'Type "/" to trigger suggestions'})})},args:{items:[{label:"Tell me about Aquarium",value:"tell-aquarium"},{label:"How to add a component?",value:"add-component"},{label:"Show design tokens",value:"show-tokens"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Suggestion {...args}>
        {({
        onTrigger,
        onKeyDown
      }) => <Sender value={value} onChange={nextValue => {
        setValue(nextValue);
        onTrigger(nextValue === '/');
      }} onKeyDown={onKeyDown} placeholder='Type "/" to trigger suggestions' />}
      </Suggestion>;
  },
  args: {
    items: [{
      label: 'Tell me about Aquarium',
      value: 'tell-aquarium'
    }, {
      label: 'How to add a component?',
      value: 'add-component'
    }, {
      label: 'Show design tokens',
      value: 'show-tokens'
    }]
  }
}`,...e.parameters?.docs?.source}}};const p=["Basic"];export{e as Basic,p as __namedExportsOrder,d as default};
