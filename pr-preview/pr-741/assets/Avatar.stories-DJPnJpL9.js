var U=Object.defineProperty,V=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var A=(n,a,t)=>a in n?U(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,e=(n,a)=>{for(var t in a||(a={}))Y.call(a,t)&&A(n,t,a[t]);if(v)for(var t of v(a))Z.call(a,t)&&A(n,t,a[t]);return n},r=(n,a)=>V(n,X(a));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{A as o,a as S,I as K,B as P}from"./UnauthorizedTooltip-DgY4FgY0.js";import"./ErrorStateIcon-XxioHWtm.js";import"./SuccessStateIcon-DGQ4YAcn.js";import"./WarningStateIcon-DAHpwnh-.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{A as N,w as $,v as ee,aq as ae}from"./style-DXf4Rsq5.js";const c={backgroundColor:$,color:N},Q={name:"userProfiles",size:"lg"},h=parseInt(ae,10),re={title:"Components/Data Display/Avatar",component:o},l={args:{shape:"circle",size:"default",children:"MP"},argTypes:{shape:{control:"select",options:["circle","square"]},size:{control:"select",options:["small","default","large"]}}},i={render:()=>s.jsxs(S,{size:h,children:[s.jsx(o,{style:c,children:"MP"}),s.jsx(o,{shape:"square",style:c,children:"MP"})]})},p={render:()=>s.jsxs(S,{size:h,children:[s.jsx(o,{size:"small",style:c,children:"MP"}),s.jsx(o,{style:c,children:"MP"}),s.jsx(o,{size:"large",style:c,children:"MP"})]})},m={args:{src:"https://randomuser.me/api/portraits/women/72.jpg",alt:"Avatar with photo"}},d={args:{style:c,icon:s.jsx(K,e({},Q))}},u={args:{children:"MP"}},y={render:()=>s.jsxs(S,{size:h,children:[s.jsx(P,{count:3,size:"small",children:s.jsx(o,{style:c,icon:s.jsx(K,e({},Q))})}),s.jsx(P,{dot:!0,children:s.jsx(o,{style:c,children:"MP"})})]})},g={render:()=>{const n=[{name:"Chloe Martinez",src:"https://randomuser.me/api/portraits/women/65.jpg"},{name:"Ernest Wallace",src:"https://randomuser.me/api/portraits/men/34.jpg"},{name:"Priya Patel",initials:"PP"},{name:"Lars Ostergaard",initials:"LO"}];return s.jsx(S,{direction:"vertical",size:h,children:s.jsx(o.Group,{max:{count:3,style:{color:N,backgroundColor:ee},popover:{trigger:"click",placement:"bottom"}},children:n.map(a=>{const t=a.initials!=null?c:void 0;return s.jsx(o,{src:a.src,alt:a.name,style:t,children:a.initials},a.name)})})})}};var z,j,x;l.parameters=r(e({},l.parameters),{docs:r(e({},(z=l.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    shape: 'circle',
    size: 'default',
    children: 'MP'
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square']
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large']
    }
  }
}`},(x=(j=l.parameters)==null?void 0:j.docs)==null?void 0:x.source)})});var M,B,f;i.parameters=r(e({},i.parameters),{docs:r(e({},(M=i.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={spaceSize}>
        <Avatar style={neutralAvatarStyle}>MP</Avatar>
        <Avatar shape="square" style={neutralAvatarStyle}>
          MP
        </Avatar>
      </Space>;
  }
}`},(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source)})});var I,T,b;p.parameters=r(e({},p.parameters),{docs:r(e({},(I=p.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={spaceSize}>
        <Avatar size="small" style={neutralAvatarStyle}>
          MP
        </Avatar>
        <Avatar style={neutralAvatarStyle}>MP</Avatar>
        <Avatar size="large" style={neutralAvatarStyle}>
          MP
        </Avatar>
      </Space>;
  }
}`},(b=(T=p.parameters)==null?void 0:T.docs)==null?void 0:b.source)})});var E,w,O;m.parameters=r(e({},m.parameters),{docs:r(e({},(E=m.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/women/72.jpg',
    alt: 'Avatar with photo'
  }
}`},(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source)})});var W,k,C;d.parameters=r(e({},d.parameters),{docs:r(e({},(W=d.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    style: neutralAvatarStyle,
    icon: <Icon {...neutralIconProps} />
  }
}`},(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source)})});var _,q,G;u.parameters=r(e({},u.parameters),{docs:r(e({},(_=u.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    children: 'MP'
  }
}`},(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});var L,D,R;y.parameters=r(e({},y.parameters),{docs:r(e({},(L=y.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={spaceSize}>
        <Badge count={3} size="small">
          <Avatar style={neutralAvatarStyle} icon={<Icon {...neutralIconProps} />} />
        </Badge>
        <Badge dot>
          <Avatar style={neutralAvatarStyle}>MP</Avatar>
        </Badge>
      </Space>;
  }
}`},(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source)})});var F,H,J;g.parameters=r(e({},g.parameters),{docs:r(e({},(F=g.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  render: () => {
    const teammates = [{
      name: 'Chloe Martinez',
      src: 'https://randomuser.me/api/portraits/women/65.jpg'
    }, {
      name: 'Ernest Wallace',
      src: 'https://randomuser.me/api/portraits/men/34.jpg'
    }, {
      name: 'Priya Patel',
      initials: 'PP'
    }, {
      name: 'Lars Ostergaard',
      initials: 'LO'
    }];
    return <Space direction="vertical" size={spaceSize}>
        <Avatar.Group max={{
        count: 3,
        style: {
          color: MpBrandSecondary8,
          backgroundColor: MpBrandSecondary3
        },
        popover: {
          trigger: 'click',
          placement: 'bottom'
        }
      }}>
          {teammates.map(teammate => {
          const style = teammate.initials != null ? neutralAvatarStyle : undefined;
          return <Avatar key={teammate.name} src={teammate.src} alt={teammate.name} style={style}>
                {teammate.initials}
              </Avatar>;
        })}
        </Avatar.Group>
      </Space>;
  }
}`},(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});const se=["Playground","ShapeExamples","SizeExamples","TypePhoto","TypeIcon","TypeInitials","WithBadge","WithGroup"],ue=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,ShapeExamples:i,SizeExamples:p,TypeIcon:d,TypeInitials:u,TypePhoto:m,WithBadge:y,WithGroup:g,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{ue as A,l as P,i as S,m as T,y as W,p as a,d as b,u as c};
