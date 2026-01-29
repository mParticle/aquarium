var N=Object.defineProperty,F=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var m=(a,t,o)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,e=(a,t)=>{for(var o in t||(t={}))j.call(t,o)&&m(a,o,t[o]);if(d)for(var o of d(t))O.call(t,o)&&m(a,o,t[o]);return a},r=(a,t)=>F(a,L(t));import{j as T}from"./jsx-runtime-C9TrHvcC.js";import{E as I,I as v}from"./UnauthorizedTooltip-TkELsoFl.js";import"./ErrorStateIcon-DUBIhooN.js";import"./SuccessStateIcon-CAlvzbJu.js";import"./WarningStateIcon-BcB0QJx4.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";const _={title:"Components/Data Display/Empty",component:I,argTypes:{state:{control:{type:"radio"},options:["empty","error"]},title:{control:{type:"text"}},description:{control:{type:"text"}},button:{control:{type:"object"}}},args:{description:"No Data",state:"empty"}},n={args:{state:"empty",title:"Nothing here yet",description:"Get started by adding your first item to unlock powerful insights.",defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")},primaryButton:{text:"Add Item",icon:T.jsx(v,{name:"add",size:"sm"}),onClick:()=>console.log("Add content clicked")}}},s={parameters:{controls:{disable:!0}},args:{state:"empty",title:"There are no audiences yet",description:"Start targeting customers who matter the most and run smarter, more effective campaigns",primaryButton:{text:"Add Audience",icon:T.jsx(v,{name:"add",size:"sm"}),onClick:()=>console.log("Add Audience clicked")},defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")}}},i={parameters:{controls:{disable:!0}},args:{state:"empty",title:"No results found",description:"No items match your current filters. Try changing them to view results.",defaultButton:{text:"Clear Filters",onClick:()=>console.log("Clear Filters clicked")}}},c={args:{state:"error",title:"Something went wrong",description:"Explain what went wrong. Keep it short.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}},l={parameters:{controls:{disable:!0}},args:{state:"error",title:"Audience Preview Failed",description:"Unable to load a preview at this time. Please try again.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}};var p,u,g;n.parameters=r(e({},n.parameters),{docs:r(e({},(p=n.parameters)==null?void 0:p.docs),{source:e({originalSource:`{
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
}`},(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source)})});var y,k,x;s.parameters=r(e({},s.parameters),{docs:r(e({},(y=s.parameters)==null?void 0:y.docs),{source:e({originalSource:`{
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
}`},(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source)})});var f,E,h;i.parameters=r(e({},i.parameters),{docs:r(e({},(f=i.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
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
}`},(h=(E=i.parameters)==null?void 0:E.docs)==null?void 0:h.source)})});var b,w,C;c.parameters=r(e({},c.parameters),{docs:r(e({},(b=c.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
  args: {
    state: 'error',
    title: 'Something went wrong',
    description: 'Explain what went wrong. Keep it short.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked')
    }
  }
}`},(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source)})});var A,S,B;l.parameters=r(e({},l.parameters),{docs:r(e({},(A=l.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
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
}`},(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source)})});const z=["EmptyOnboarding","ExampleEmptyOnboarding","ExampleNoResultsEmptyState","ErrorEmptyState","ExampleErrorApiFailure"],H=Object.freeze(Object.defineProperty({__proto__:null,EmptyOnboarding:n,ErrorEmptyState:c,ExampleEmptyOnboarding:s,ExampleErrorApiFailure:l,ExampleNoResultsEmptyState:i,__namedExportsOrder:z,default:_},Symbol.toStringTag,{value:"Module"}));export{H as E,s as a,i as b,l as c};
