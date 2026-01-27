import{E as i,j as n,I as s}from"./iframe-B6Y2oegk.js";const c={title:"Components/Data Display/Empty",component:i,argTypes:{state:{control:{type:"radio"},options:["empty","error"]},title:{control:{type:"text"}},description:{control:{type:"text"}},button:{control:{type:"object"}}},args:{description:"No Data",state:"empty"}},e={args:{state:"empty",title:"Nothing here yet",description:"Get started by adding your first item to unlock powerful insights.",defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")},primaryButton:{text:"Add Item",icon:n.jsx(s,{name:"add",size:"sm"}),onClick:()=>console.log("Add content clicked")}}},t={parameters:{controls:{disable:!0}},args:{state:"empty",title:"There are no audiences yet",description:"Start targeting customers who matter the most and run smarter, more effective campaigns",primaryButton:{text:"Add Audience",icon:n.jsx(s,{name:"add",size:"sm"}),onClick:()=>console.log("Add Audience clicked")},defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")}}},r={parameters:{controls:{disable:!0}},args:{state:"empty",title:"No results found",description:"No items match your current filters. Try changing them to view results.",defaultButton:{text:"Clear Filters",onClick:()=>console.log("Clear Filters clicked")}}},o={args:{state:"error",title:"Something went wrong",description:"Explain what went wrong. Keep it short.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}},a={parameters:{controls:{disable:!0}},args:{state:"error",title:"Audience Preview Failed",description:"Unable to load a preview at this time. Please try again.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'empty',
    title: 'Nothing here yet',
    description: 'Get started by adding your first item to unlock powerful insights.',
    defaultButton: {
      text: 'Learn more',
      onClick: () => console.log('Learn more clicked')
    },
    primaryButton: {
      text: 'Add Item',
      icon: <Icon name="add" size="sm" />,
      onClick: () => console.log('Add content clicked')
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    state: 'empty',
    title: 'There are no audiences yet',
    description: 'Start targeting customers who matter the most and run smarter, more effective campaigns',
    primaryButton: {
      text: 'Add Audience',
      icon: <Icon name="add" size="sm" />,
      onClick: () => console.log('Add Audience clicked')
    },
    defaultButton: {
      text: 'Learn more',
      onClick: () => console.log('Learn more clicked')
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    state: 'empty',
    title: 'No results found',
    description: 'No items match your current filters. Try changing them to view results.',
    defaultButton: {
      text: 'Clear Filters',
      onClick: () => console.log('Clear Filters clicked')
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error',
    title: 'Something went wrong',
    description: 'Explain what went wrong. Keep it short.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked')
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    state: 'error',
    title: 'Audience Preview Failed',
    description: 'Unable to load a preview at this time. Please try again.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked')
    }
  }
}`,...a.parameters?.docs?.source}}};const l=["EmptyOnboarding","ExampleEmptyOnboarding","ExampleNoResultsEmptyState","ErrorEmptyState","ExampleErrorApiFailure"],m=Object.freeze(Object.defineProperty({__proto__:null,EmptyOnboarding:e,ErrorEmptyState:o,ExampleEmptyOnboarding:t,ExampleErrorApiFailure:a,ExampleNoResultsEmptyState:r,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{m as E,t as a,r as b,a as c};
