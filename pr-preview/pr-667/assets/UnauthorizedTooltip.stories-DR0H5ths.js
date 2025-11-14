var v=Object.defineProperty,j=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var l=(t,e,o)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))b.call(e,o)&&l(t,o,e[o]);if(d)for(var o of d(e))R.call(e,o)&&l(t,o,e[o]);return t},s=(t,e)=>j(t,M(e));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{r as y}from"./index-3OP4wdng.js";import{a6 as x,e as B,R as u}from"./NavigationItemsService-BeUgPi48.js";import"./ErrorStateIcon-Clx5lk_q.js";import"./SuccessStateIcon-CrBP74im.js";import"./WarningStateIcon-irkX5OVh.js";import"./_baseClone-DwBCp-Ss.js";import{s as D}from"./style-BvWo89XW.js";const O={title:"UX Patterns/PermissionsRestrictions",component:x,parameters:{layout:"centered"},argTypes:{isAuthorized:{control:"boolean",description:"Whether the user is authorized to perform the action",defaultValue:!1},unauthorizedMessage:{control:"text",description:"Custom message to display when unauthorized"}}},i={args:{isAuthorized:!1,children:r.jsx(B,{disabled:!0,children:"Delete"})}},n={render:()=>{const[t,e]=y.useState("option2"),o=r.jsxs(r.Fragment,{children:["You don't have permissions for this action."," ",r.jsx("a",{href:"#",style:{color:"inherit",textDecoration:"underline",cursor:"pointer"},children:"Learn more."})]});return r.jsxs(u.Group,{value:t,onChange:z=>e(z.target.value),children:[r.jsx("div",{style:{marginBottom:D},children:r.jsx(x,{isAuthorized:!1,unauthorizedMessage:o,placement:"right",children:r.jsx(u,{value:"option1",disabled:!0,children:"Option 1"})})}),r.jsx(u,{value:"option2",children:"Option 2"})]})}};var p,c,h;i.parameters=s(a({},i.parameters),{docs:s(a({},(p=i.parameters)==null?void 0:p.docs),{source:a({originalSource:`{
  args: {
    isAuthorized: false,
    children: <Button disabled>Delete</Button>
  }
}`},(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source)})});var m,g,f;n.parameters=s(a({},n.parameters),{docs:s(a({},(m=n.parameters)==null?void 0:m.docs),{source:a({originalSource:`{
  render: () => {
    const [value, setValue] = useState('option2');
    const unauthorizedMessage = <>
        You don&apos;t have permissions for this action.{' '}
        <a href="#" style={{
        color: 'inherit',
        textDecoration: 'underline',
        cursor: 'pointer'
      }}>
          Learn more.
        </a>
      </>;
    return <Radio.Group value={value} onChange={e => setValue(e.target.value as string)}>
        <div style={{
        marginBottom: Margin
      }}>
          <UnauthorizedTooltip isAuthorized={false} unauthorizedMessage={unauthorizedMessage} placement="right">
            <Radio value="option1" disabled>
              Option 1
            </Radio>
          </UnauthorizedTooltip>
        </div>
        <Radio value="option2">Option 2</Radio>
      </Radio.Group>;
  }
}`},(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source)})});const S=["DisabledButton","ModalExample"],L=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:i,ModalExample:n,__namedExportsOrder:S,default:O},Symbol.toStringTag,{value:"Module"}));export{i as D,n as M,L as U};
