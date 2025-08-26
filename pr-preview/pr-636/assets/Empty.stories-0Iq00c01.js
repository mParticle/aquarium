var T=Object.defineProperty,A=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var p=(a,t,o)=>t in a?T(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,e=(a,t)=>{for(var o in t||(t={}))L.call(t,o)&&p(a,o,t[o]);if(m)for(var o of m(t))N.call(t,o)&&p(a,o,t[o]);return a},r=(a,t)=>A(a,F(t));import{j as O}from"./jsx-runtime-BcCOBRXo.js";import{E as j,I as _}from"./NavigationItemsService-CYzsnZyn.js";import"./_baseClone-DBzvlRjn.js";const z={title:"Components/Data Display/Empty",component:j,argTypes:{state:{control:{type:"radio"},options:["empty","error"]},title:{control:{type:"text"}},description:{control:{type:"text"}},button:{control:{type:"object"}}},args:{description:"No Data",state:"empty"}},n={args:{state:"empty",title:"You don't have any content yet",description:"Start building and organizing your workspace to unlock powerful features and insights.",defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")},primaryButton:{text:"+ Create content",onClick:()=>console.log("Create content clicked")}}},s={parameters:{controls:{disable:!0}},args:{state:"empty",title:"You don't have any audiences yet",description:"Start targeting customers who matter the most and run smarter, more effective campaigns",primaryButton:{text:"Create Audience",icon:O.jsx(_,{name:"add",size:"sm"}),onClick:()=>console.log("Create Audience clicked")},defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")}}},i={parameters:{controls:{disable:!0}},args:{state:"empty",title:"No results found",description:"No items match your current filters. Try changing them to view results.",defaultButton:{text:"Clear Filters",onClick:()=>console.log("Clear Filters clicked")}}},c={args:{state:"error",title:"Something went wrong",description:"Explain what went wrong. Keep it short.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}},l={parameters:{controls:{disable:!0}},args:{state:"error",title:"Audience Preview Failed",description:"Unable to load a preview at this time. Please try again.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}};var d,u,g;n.parameters=r(e({},n.parameters),{docs:r(e({},(d=n.parameters)==null?void 0:d.docs),{source:e({originalSource:`{
  args: {
    state: 'empty',
    title: "You don't have any content yet",
    description: 'Start building and organizing your workspace to unlock powerful features and insights.',
    defaultButton: {
      text: 'Learn more',
      onClick: () => console.log('Learn more clicked')
    },
    primaryButton: {
      text: '+ Create content',
      onClick: () => console.log('Create content clicked')
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
    title: "You don't have any audiences yet",
    description: 'Start targeting customers who matter the most and run smarter, more effective campaigns',
    primaryButton: {
      text: 'Create Audience',
      icon: <Icon name="add" size="sm" />,
      onClick: () => console.log('Create Audience clicked')
    },
    defaultButton: {
      text: 'Learn more',
      onClick: () => console.log('Learn more clicked')
    }
  }
}`},(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source)})});var f,C,E;i.parameters=r(e({},i.parameters),{docs:r(e({},(f=i.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
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
}`},(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source)})});var h,w,b;c.parameters=r(e({},c.parameters),{docs:r(e({},(h=c.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
  args: {
    state: 'error',
    title: 'Something went wrong',
    description: 'Explain what went wrong. Keep it short.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked')
    }
  }
}`},(b=(w=c.parameters)==null?void 0:w.docs)==null?void 0:b.source)})});var S,B,v;l.parameters=r(e({},l.parameters),{docs:r(e({},(S=l.parameters)==null?void 0:S.docs),{source:e({originalSource:`{
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
}`},(v=(B=l.parameters)==null?void 0:B.docs)==null?void 0:v.source)})});const P=["EmptyOnboarding","ExampleEmptyOnboarding","ExampleNoResultsEmptyState","ErrorEmptyState","ExampleErrorApiFailure"],K=Object.freeze(Object.defineProperty({__proto__:null,EmptyOnboarding:n,ErrorEmptyState:c,ExampleEmptyOnboarding:s,ExampleErrorApiFailure:l,ExampleNoResultsEmptyState:i,__namedExportsOrder:P,default:z},Symbol.toStringTag,{value:"Module"}));export{K as E,s as a,i as b,c};
