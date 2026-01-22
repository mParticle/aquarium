import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as a,S as m,I as y,B as u}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{M as S,a as A,b as P,S as j}from"./style-C-7nCLOl.js";const r={backgroundColor:A,color:S},g={name:"userProfiles",size:"lg"},d=parseInt(j,10),x={title:"Components/Data Display/Avatar",component:a},s={render:()=>e.jsxs(m,{size:d,children:[e.jsx(a,{style:r,children:"MP"}),e.jsx(a,{shape:"square",style:r,children:"MP"})]})},n={render:()=>e.jsxs(m,{size:d,children:[e.jsx(a,{size:"small",style:r,children:"MP"}),e.jsx(a,{style:r,children:"MP"}),e.jsx(a,{size:"large",style:r,children:"MP"})]})},o={args:{src:"https://randomuser.me/api/portraits/women/72.jpg",alt:"Avatar with photo"}},c={args:{style:r,icon:e.jsx(y,{...g})}},i={args:{children:"MP"}},l={render:()=>e.jsxs(m,{size:d,children:[e.jsx(u,{count:3,size:"small",children:e.jsx(a,{style:r,icon:e.jsx(y,{...g})})}),e.jsx(u,{dot:!0,children:e.jsx(a,{style:r,children:"MP"})})]})},p={render:()=>{const h=[{name:"Chloe Martinez",src:"https://randomuser.me/api/portraits/women/65.jpg"},{name:"Ernest Wallace",src:"https://randomuser.me/api/portraits/men/34.jpg"},{name:"Priya Patel",initials:"PP"},{name:"Lars Ostergaard",initials:"LO"}];return e.jsx(m,{orientation:"vertical",size:d,children:e.jsx(a.Group,{max:{count:3,style:{color:S,backgroundColor:P},popover:{trigger:"click",placement:"bottom"}},children:h.map(t=>{const v=t.initials!=null?r:void 0;return e.jsx(a,{src:t.src,alt:t.name,style:v,children:t.initials},t.name)})})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space size={spaceSize}>
        <Avatar style={neutralAvatarStyle}>MP</Avatar>
        <Avatar shape="square" style={neutralAvatarStyle}>
          MP
        </Avatar>
      </Space>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/women/72.jpg',
    alt: 'Avatar with photo'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    style: neutralAvatarStyle,
    icon: <Icon {...neutralIconProps} />
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'MP'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <Space orientation="vertical" size={spaceSize}>
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
}`,...p.parameters?.docs?.source}}};const z=["ShapeExamples","SizeExamples","TypePhoto","TypeIcon","TypeInitials","WithBadge","WithGroup"],T=Object.freeze(Object.defineProperty({__proto__:null,ShapeExamples:s,SizeExamples:n,TypeIcon:c,TypeInitials:i,TypePhoto:o,WithBadge:l,WithGroup:p,__namedExportsOrder:z,default:x},Symbol.toStringTag,{value:"Module"}));export{T as A,s as S,o as T,l as W,n as a,c as b,i as c};
