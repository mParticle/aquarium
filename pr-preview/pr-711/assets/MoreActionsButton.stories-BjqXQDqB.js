var u=Object.defineProperty,p=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(l,e,t)=>e in l?u(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,o=(l,e)=>{for(var t in e||(e={}))m.call(e,t)&&c(l,t,e[t]);if(a)for(var t of a(e))y.call(e,t)&&c(l,t,e[t]);return l},r=(l,e)=>p(l,k(e));import{M as b}from"./NavigationItemsService-BG28S98x.js";const C={title:"UX Patterns/MoreActionsButton",component:b,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"Whether the button is disabled",defaultValue:!1}}},n={args:{menuItems:{items:[{key:"edit",label:"Edit",onClick:()=>alert("Edit clicked")},{key:"copy",label:"Copy",onClick:()=>alert("Copy clicked")},{key:"delete",label:"Delete",danger:!0,onClick:()=>alert("Delete clicked")}]}}};var i,s,d;n.parameters=r(o({},n.parameters),{docs:r(o({},(i=n.parameters)==null?void 0:i.docs),{source:o({originalSource:`{
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
}`},(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source)})});const f=["Default"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:f,default:C},Symbol.toStringTag,{value:"Module"}));export{M,C as m};
