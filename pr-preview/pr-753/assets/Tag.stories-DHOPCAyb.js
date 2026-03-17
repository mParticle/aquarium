var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var x=(s,n,l)=>n in s?X(s,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[n]=l,e=(s,n)=>{for(var l in n||(n={}))$.call(n,l)&&x(s,l,n[l]);if(f)for(var l of f(n))ee.call(n,l)&&x(s,l,n[l]);return s},a=(s,n)=>Y(s,Z(n));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{m as o,a as c,R as re}from"./UnauthorizedTooltip-Bup24dnF.js";import"./ErrorStateIcon-BHmLeD-u.js";import"./SuccessStateIcon-BxuateXz.js";import"./WarningStateIcon-3dZZcMfk.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";const ae={title:"Components/Data Display/Tag",component:s=>r.jsx(o,a(e({},s),{children:"Tag"})),parameters:{docs:{description:{component:`The Tag component displays small, labeled elements used to categorize, identify, or highlight content.
Tags are versatile for indicating types or other identifiers and can include text, icons, or color coding to enhance readability and organization.`}}}},t={args:{color:"default",bordered:!0,closable:!1,children:"Tag Label"},argTypes:{color:{control:"select",options:["default","success","processing","error","warning","blue","gold","purple"]},bordered:{control:"select",options:[!1,!0]},closable:{control:"select",options:[!1,!0]}}},d={args:{color:"default",bordered:!0},argTypes:{color:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>r.jsxs(c,{direction:"vertical",children:[r.jsx(o,{color:"blue",children:"Prod"}),r.jsx(o,{color:"purple",children:"Dev"}),r.jsx(o,{color:"default",children:"Default"})]})},u={render:()=>r.jsxs(c,{size:[24,24],wrap:!0,children:[r.jsx(o,{bordered:!0,color:"default",children:"New"}),r.jsx(o,{bordered:!0,color:"default",children:"Beta"})]})},i={render:()=>r.jsxs(c,{size:[24,24],wrap:!0,children:[r.jsx(o,{bordered:!0,color:"success",children:"Strong"}),r.jsx(o,{bordered:!0,color:"warning",children:"Moderate"}),r.jsx(o,{bordered:!0,color:"error",children:"Weak"})]})},p={render:()=>{const s=[{color:"default",label:"Default"},{color:"blue",label:"Blue"},{color:"gold",label:"Gold"},{color:"purple",label:"Purple"}];return r.jsx(c,{size:[16,16],wrap:!0,children:s.map(n=>r.jsx(o,{bordered:!0,color:n.color,children:n.label},n.label))})}},g={render:()=>r.jsx(o,{color:"default",bordered:!1,children:"Borderless Tag"})},m={parameters:{docs:{source:{state:"hidden"}}},render:()=>r.jsx(o,{bordered:!0,color:"default",icon:r.jsx(re,{}),children:"Tag with icon"})},T={render:()=>r.jsx(o,{bordered:!0,color:"default",closable:!0,children:"Closable Tag"})},b={render:()=>r.jsxs(c,{size:[16,16],children:[r.jsx(o.CheckableTag,{bordered:!0,checked:!0,children:"Checked Tag"}),r.jsx(o.CheckableTag,{bordered:!0,checked:!1,children:"Unchecked Tag"})]})},h={render:()=>r.jsxs(c,{size:[16,16],children:[r.jsx(o,{bordered:!0,color:"blue",children:"Prod"}),r.jsx(o,{bordered:!0,color:"purple",children:"Dev"})]})};var j,S,k;t.parameters=a(e({},t.parameters),{docs:a(e({},(j=t.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    color: 'default',
    bordered: true,
    closable: false,
    children: 'Tag Label'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'success', 'processing', 'error', 'warning', 'blue', 'gold', 'purple']
    },
    bordered: {
      control: 'select',
      options: [false, true]
    },
    closable: {
      control: 'select',
      options: [false, true]
    }
  }
}`},(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var C,w,y;d.parameters=a(e({},d.parameters),{docs:a(e({},(C=d.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    color: 'default',
    bordered: true
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <Space direction="vertical">
        <Tag color="blue">Prod</Tag>
        <Tag color="purple">Dev</Tag>
        <Tag color="default">Default</Tag>
      </Space>;
  }
}`},(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source)})});var E,v,z;u.parameters=a(e({},u.parameters),{docs:a(e({},(E=u.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[24, 24]} wrap>
        <Tag bordered color="default">
          New
        </Tag>
        <Tag bordered color="default">
          Beta
        </Tag>
      </Space>;
  }
}`},(z=(v=u.parameters)==null?void 0:v.docs)==null?void 0:z.source)})});var P,D,B;i.parameters=a(e({},i.parameters),{docs:a(e({},(P=i.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[24, 24]} wrap>
        <Tag bordered color="success">
          Strong
        </Tag>
        <Tag bordered color="warning">
          Moderate
        </Tag>
        <Tag bordered color="error">
          Weak
        </Tag>
      </Space>;
  }
}`},(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source)})});var I,O,_;p.parameters=a(e({},p.parameters),{docs:a(e({},(I=p.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  render: () => {
    const tags = [{
      color: 'default',
      label: 'Default'
    }, {
      color: 'blue',
      label: 'Blue'
    }, {
      color: 'gold',
      label: 'Gold'
    }, {
      color: 'purple',
      label: 'Purple'
    }] as const;
    return <Space size={[16, 16]} wrap>
        {tags.map(tag => <Tag key={tag.label} bordered color={tag.color}>
            {tag.label}
          </Tag>)}
      </Space>;
  }
}`},(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source)})});var W,H,M;g.parameters=a(e({},g.parameters),{docs:a(e({},(W=g.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  render: () => {
    return <Tag color="default" bordered={false}>
        Borderless Tag
      </Tag>;
  }
}`},(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source)})});var R,G,L;m.parameters=a(e({},m.parameters),{docs:a(e({},(R=m.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  parameters: {
    docs: {
      source: {
        state: 'hidden'
      }
    }
  },
  render: () => {
    return <Tag bordered color="default" icon={<ClockCircleOutlined />}>
        Tag with icon
      </Tag>;
  }
}`},(L=(G=m.parameters)==null?void 0:G.docs)==null?void 0:L.source)})});var N,U,q;T.parameters=a(e({},T.parameters),{docs:a(e({},(N=T.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  render: () => {
    return <Tag bordered color="default" closable>
        Closable Tag
      </Tag>;
  }
}`},(q=(U=T.parameters)==null?void 0:U.docs)==null?void 0:q.source)})});var A,F,J;b.parameters=a(e({},b.parameters),{docs:a(e({},(A=b.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[16, 16]}>
        <Tag.CheckableTag bordered checked>
          Checked Tag
        </Tag.CheckableTag>
        <Tag.CheckableTag bordered checked={false}>
          Unchecked Tag
        </Tag.CheckableTag>
      </Space>;
  }
}`},(J=(F=b.parameters)==null?void 0:F.docs)==null?void 0:J.source)})});var K,Q,V;h.parameters=a(e({},h.parameters),{docs:a(e({},(K=h.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={[16, 16]}>
        <Tag bordered color="blue">
          Prod
        </Tag>
        <Tag bordered color="purple">
          Dev
        </Tag>
      </Space>;
  }
}`},(V=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});const oe=["Playground","Primary","InfoTags","HealthTags","TagOverviewCards","BorderlessTagExample","TagWithIconExample","ClosableTagExample","ClickableTagExample","EnvironmentTagsExample"],pe=Object.freeze(Object.defineProperty({__proto__:null,BorderlessTagExample:g,ClickableTagExample:b,ClosableTagExample:T,EnvironmentTagsExample:h,HealthTags:i,InfoTags:u,Playground:t,Primary:d,TagOverviewCards:p,TagWithIconExample:m,__namedExportsOrder:oe,default:ae},Symbol.toStringTag,{value:"Module"}));export{g as B,T as C,h as E,i as H,u as I,t as P,pe as T,p as a,m as b,b as c};
