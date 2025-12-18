var J=Object.defineProperty,K=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var h=(n,a,s)=>a in n?J(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,e=(n,a)=>{for(var s in a||(a={}))Q.call(a,s)&&h(n,s,a[s]);if(v)for(var s of v(a))U.call(a,s)&&h(n,s,a[s]);return n},t=(n,a)=>K(n,N(a));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{A as o,a as S,I as R,B as P}from"./NavigationItemsService-H-zr7KOW.js";import"./ErrorStateIcon-DpdQJbTK.js";import"./SuccessStateIcon-DGsBjHVw.js";import"./WarningStateIcon-Ca9ILDC8.js";import"./_baseClone-DwBCp-Ss.js";import{i as F,j as V,k as X,l as Y,S as Z}from"./style-Ck3qT1hX.js";const c={backgroundColor:V,color:F},H={name:"userProfiles",size:"lg",color:X},g=parseInt(Z,10),$={title:"Components/Data Display/Avatar",component:o},i={render:()=>r.jsxs(S,{size:g,children:[r.jsx(o,{style:c,children:"MP"}),r.jsx(o,{shape:"square",style:c,children:"MP"})]})},l={render:()=>r.jsxs(S,{size:g,children:[r.jsx(o,{size:"small",style:c,children:"MP"}),r.jsx(o,{style:c,children:"MP"}),r.jsx(o,{size:"large",style:c,children:"MP"})]})},p={args:{src:"https://randomuser.me/api/portraits/women/72.jpg",alt:"Avatar with photo"}},m={args:{style:c,icon:r.jsx(R,e({},H))}},d={args:{children:"MP"}},u={render:()=>r.jsxs(S,{size:g,children:[r.jsx(P,{count:3,size:"small",children:r.jsx(o,{style:c,icon:r.jsx(R,e({},H))})}),r.jsx(P,{dot:!0,children:r.jsx(o,{style:c,children:"MP"})})]})},y={render:()=>{const n=[{name:"Chloe Martinez",src:"https://randomuser.me/api/portraits/women/65.jpg"},{name:"Ernest Wallace",src:"https://randomuser.me/api/portraits/men/34.jpg"},{name:"Priya Patel",initials:"PP"},{name:"Lars Ostergaard",initials:"LO"}];return r.jsx(S,{direction:"vertical",size:g,children:r.jsx(o.Group,{maxCount:3,maxPopoverTrigger:"click",maxPopoverPlacement:"bottom",maxStyle:{color:F,backgroundColor:Y},children:n.map(a=>{const s=a.initials!=null?c:void 0;return r.jsx(o,{src:a.src,alt:a.name,style:s,children:a.initials},a.name)})})})}};var A,x,j;i.parameters=t(e({},i.parameters),{docs:t(e({},(A=i.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  render: () => {
    return <Space size={spaceSize}>
        <Avatar style={neutralAvatarStyle}>MP</Avatar>
        <Avatar shape="square" style={neutralAvatarStyle}>
          MP
        </Avatar>
      </Space>;
  }
}`},(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source)})});var z,M,B;l.parameters=t(e({},l.parameters),{docs:t(e({},(z=l.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
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
}`},(B=(M=l.parameters)==null?void 0:M.docs)==null?void 0:B.source)})});var I,T,b;p.parameters=t(e({},p.parameters),{docs:t(e({},(I=p.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/women/72.jpg',
    alt: 'Avatar with photo'
  }
}`},(b=(T=p.parameters)==null?void 0:T.docs)==null?void 0:b.source)})});var C,f,E;m.parameters=t(e({},m.parameters),{docs:t(e({},(C=m.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    style: neutralAvatarStyle,
    icon: <Icon {...neutralIconProps} />
  }
}`},(E=(f=m.parameters)==null?void 0:f.docs)==null?void 0:E.source)})});var W,k,O;d.parameters=t(e({},d.parameters),{docs:t(e({},(W=d.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    children: 'MP'
  }
}`},(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.source)})});var w,_,G;u.parameters=t(e({},u.parameters),{docs:t(e({},(w=u.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
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
}`},(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source)})});var L,q,D;y.parameters=t(e({},y.parameters),{docs:t(e({},(L=y.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
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
        <Avatar.Group maxCount={3} maxPopoverTrigger="click" maxPopoverPlacement="bottom" maxStyle={{
        color: MpBrandSecondary8,
        backgroundColor: MpBrandSecondary3
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
}`},(D=(q=y.parameters)==null?void 0:q.docs)==null?void 0:D.source)})});const ee=["ShapeExamples","SizeExamples","TypePhoto","TypeIcon","TypeInitials","WithBadge","WithGroup"],le=Object.freeze(Object.defineProperty({__proto__:null,ShapeExamples:i,SizeExamples:l,TypeIcon:m,TypeInitials:d,TypePhoto:p,WithBadge:u,WithGroup:y,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{le as A,i as S,p as T,u as W,l as a,m as b,d as c};
