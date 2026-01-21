import{M as t}from"./UnauthorizedTooltip-C-uexwNG.js";const l={title:"UX Patterns/MoreActionsButton",component:t,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"Whether the button is disabled",defaultValue:!1}}},e={args:{menuItems:{items:[{key:"edit",label:"Edit",onClick:()=>alert("Edit clicked")},{key:"copy",label:"Copy",onClick:()=>alert("Copy clicked")},{key:"delete",label:"Delete",danger:!0,onClick:()=>alert("Delete clicked")}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    menuItems: {
      items: [{
        key: 'edit',
        label: 'Edit',
        onClick: () => alert('Edit clicked')
      }, {
        key: 'copy',
        label: 'Copy',
        onClick: () => alert('Copy clicked')
      }, {
        key: 'delete',
        label: 'Delete',
        danger: true,
        onClick: () => alert('Delete clicked')
      }]
    }
  }
}`,...e.parameters?.docs?.source}}};const n=["Default"],r=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:n,default:l},Symbol.toStringTag,{value:"Module"}));export{r as M,l as m};
