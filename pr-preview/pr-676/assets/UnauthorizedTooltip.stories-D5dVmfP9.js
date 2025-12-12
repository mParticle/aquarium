var v=Object.defineProperty,T=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var l=(t,e,o)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))j.call(e,o)&&l(t,o,e[o]);if(d)for(var o of d(e))b.call(e,o)&&l(t,o,e[o]);return t},s=(t,e)=>T(t,M(e));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{r as R}from"./index-3OP4wdng.js";import{a7 as y,e as B,R as u,c as p}from"./NavigationItemsService-C9aICYdS.js";import"./ErrorStateIcon-Dp4qFLnX.js";import"./SuccessStateIcon-Cjq1MrS7.js";import"./WarningStateIcon-BfqZzRuE.js";import"./_baseClone-DwBCp-Ss.js";import{o as O}from"./style-BEITWmqT.js";const S={title:"UX Patterns/PermissionsRestrictions",component:y,parameters:{layout:"centered"},argTypes:{isAuthorized:{control:"boolean",description:"Whether the user is authorized to perform the action",defaultValue:!1},unauthorizedMessage:{control:"text",description:"Custom message to display when unauthorized"}}},i={args:{isAuthorized:!1,children:r.jsx(B,{disabled:!0,children:"Delete"})}},n={render:()=>{const[t,e]=R.useState("option2"),o=r.jsxs(p.Text,{tooltip:!0,children:["You don't have permissions for this action."," ",r.jsx(p.Link,{href:"/",tooltip:!0,children:"Learn More"})]});return r.jsxs(u.Group,{value:t,onChange:z=>e(z.target.value),children:[r.jsx("div",{style:{marginBottom:O},children:r.jsx(y,{isAuthorized:!1,unauthorizedMessage:o,placement:"right",children:r.jsx(u,{value:"option1",disabled:!0,children:"Option 1"})})}),r.jsx(u,{value:"option2",children:"Option 2"})]})}};var c,h,m;i.parameters=s(a({},i.parameters),{docs:s(a({},(c=i.parameters)==null?void 0:c.docs),{source:a({originalSource:`{
  args: {
    isAuthorized: false,
    children: <Button disabled>Delete</Button>
  }
}`},(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source)})});var g,x,f;n.parameters=s(a({},n.parameters),{docs:s(a({},(g=n.parameters)==null?void 0:g.docs),{source:a({originalSource:`{
  render: () => {
    const [value, setValue] = useState('option2');
    const unauthorizedMessage = <Typography.Text tooltip>
        You don&apos;t have permissions for this action.{' '}
        <Typography.Link href="/" tooltip>
          Learn More
        </Typography.Link>
      </Typography.Text>;
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
}`},(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source)})});const U=["DisabledButton","ModalExample"],P=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:i,ModalExample:n,__namedExportsOrder:U,default:S},Symbol.toStringTag,{value:"Module"}));export{i as D,n as M,P as U};
