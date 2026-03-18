var j=Object.defineProperty,O=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var p=(n,r,o)=>r in n?j(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o,e=(n,r)=>{for(var o in r||(r={}))_.call(r,o)&&p(n,o,r[o]);if(m)for(var o of m(r))z.call(r,o)&&p(n,o,r[o]);return n},t=(n,r)=>O(n,I(r));import{j as L}from"./jsx-runtime-C9TrHvcC.js";import{E as G,I as P}from"./UnauthorizedTooltip-7M2bYpM7.js";import"./ErrorStateIcon-Hj2swtO4.js";import"./SuccessStateIcon-CgCZPKUY.js";import"./WarningStateIcon-BGDwwk8W.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";const D={title:"Components/Data Display/Empty",component:G,argTypes:{state:{control:{type:"radio"},options:["empty","error"]},title:{control:{type:"text"}},description:{control:{type:"text"}},button:{control:{type:"object"}}},args:{description:"No Data",state:"empty"}},a={args:{state:"empty",title:"Nothing here yet",description:"Get started by adding your first item."},argTypes:{state:{control:"select",options:["empty","error"]},button:{table:{disable:!0}}}},s={args:{state:"empty",title:"Nothing here yet",description:"Get started by adding your first item to unlock powerful insights.",defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")},primaryButton:{text:"Add Item",icon:L.jsx(P,{name:"add",size:"sm"}),onClick:()=>console.log("Add content clicked")}}},i={parameters:{controls:{disable:!0}},args:{state:"empty",title:"There are no audiences yet",description:"Start targeting customers who matter the most and run smarter, more effective campaigns",primaryButton:{text:"Add Audience",icon:L.jsx(P,{name:"add",size:"sm"}),onClick:()=>console.log("Add Audience clicked")},defaultButton:{text:"Learn more",onClick:()=>console.log("Learn more clicked")}}},c={parameters:{controls:{disable:!0}},args:{state:"empty",title:"No results found",description:"No items match your current filters. Try changing them to view results.",defaultButton:{text:"Clear Filters",onClick:()=>console.log("Clear Filters clicked")}}},l={args:{state:"error",title:"Something went wrong",description:"Explain what went wrong. Keep it short.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}},d={parameters:{controls:{disable:!0}},args:{state:"error",title:"Audience Preview Failed",description:"Unable to load a preview at this time. Please try again.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}};var u,g,y;a.parameters=t(e({},a.parameters),{docs:t(e({},(u=a.parameters)==null?void 0:u.docs),{source:e({originalSource:`{
  args: {
    state: 'empty',
    title: 'Nothing here yet',
    description: 'Get started by adding your first item.'
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['empty', 'error']
    },
    button: {
      table: {
        disable: true
      }
    }
  }
}`},(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var h,k,x;s.parameters=t(e({},s.parameters),{docs:t(e({},(h=s.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
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
}`},(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source)})});var f,b,E;i.parameters=t(e({},i.parameters),{docs:t(e({},(f=i.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
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
}`},(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source)})});var w,C,S;c.parameters=t(e({},c.parameters),{docs:t(e({},(w=c.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
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
}`},(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source)})});var A,T,B;l.parameters=t(e({},l.parameters),{docs:t(e({},(A=l.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    state: 'error',
    title: 'Something went wrong',
    description: 'Explain what went wrong. Keep it short.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked')
    }
  }
}`},(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source)})});var N,v,F;d.parameters=t(e({},d.parameters),{docs:t(e({},(N=d.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
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
}`},(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.source)})});const R=["Playground","EmptyOnboarding","ExampleEmptyOnboarding","ExampleNoResultsEmptyState","ErrorEmptyState","ExampleErrorApiFailure"],W=Object.freeze(Object.defineProperty({__proto__:null,EmptyOnboarding:s,ErrorEmptyState:l,ExampleEmptyOnboarding:i,ExampleErrorApiFailure:d,ExampleNoResultsEmptyState:c,Playground:a,__namedExportsOrder:R,default:D},Symbol.toStringTag,{value:"Module"}));export{W as E,a as P,i as a,c as b,d as c};
