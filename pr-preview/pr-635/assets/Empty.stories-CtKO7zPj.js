var w=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var c=(r,t,e)=>t in r?w(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,o=(r,t)=>{for(var e in t||(t={}))S.call(t,e)&&c(r,e,t[e]);if(l)for(var e of l(t))B.call(t,e)&&c(r,e,t[e]);return r},n=(r,t)=>h(r,x(t));import{E}from"./NavigationItemsService-DW0upvLA.js";const T={title:"Components/Data Display/Empty",component:E,argTypes:{state:{control:{type:"radio"},options:["empty","error"]},title:{control:{type:"text"}},description:{control:{type:"text"}},button:{control:{type:"object"}}},args:{description:"No Data",state:"empty"}},a={args:{state:"empty",title:"No results found",description:"Try adjusting your search or filter to find what you're looking for.",defaultButton:{text:"Clear filters",onClick:()=>console.log("Clear filters clicked")}}},s={args:{state:"error",title:"Something went wrong",description:"We encountered an error while loading your data.",defaultButton:{text:"Try again",onClick:()=>console.log("Try again clicked")}}},i={args:{state:"empty",title:"Action required",description:"Choose how you would like to proceed.",defaultButton:{text:"Cancel",onClick:()=>console.log("Cancel clicked")},primaryButton:{text:"Continue",onClick:()=>console.log("Continue clicked")}}};var d,u,p;a.parameters=n(o({},a.parameters),{docs:n(o({},(d=a.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
  args: {
    state: 'empty',
    title: 'No results found',
    description: "Try adjusting your search or filter to find what you're looking for.",
    defaultButton: {
      text: 'Clear filters',
      onClick: () => console.log('Clear filters clicked')
    }
  }
}`},(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source)})});var g,m,y;s.parameters=n(o({},s.parameters),{docs:n(o({},(g=s.parameters)==null?void 0:g.docs),{source:o({originalSource:`{
  args: {
    state: 'error',
    title: 'Something went wrong',
    description: 'We encountered an error while loading your data.',
    defaultButton: {
      text: 'Try again',
      onClick: () => console.log('Try again clicked')
    }
  }
}`},(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source)})});var C,f,k;i.parameters=n(o({},i.parameters),{docs:n(o({},(C=i.parameters)==null?void 0:C.docs),{source:o({originalSource:`{
  args: {
    state: 'empty',
    title: 'Action required',
    description: 'Choose how you would like to proceed.',
    defaultButton: {
      text: 'Cancel',
      onClick: () => console.log('Cancel clicked')
    },
    primaryButton: {
      text: 'Continue',
      onClick: () => console.log('Continue clicked')
    }
  }
}`},(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source)})});const _=["EmptyState","ErrorState","TwoButtons"],D=Object.freeze(Object.defineProperty({__proto__:null,EmptyState:a,ErrorState:s,TwoButtons:i,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{D as E,T as m};
