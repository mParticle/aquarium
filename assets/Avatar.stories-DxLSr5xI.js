import{A as a,j as e,M as g,a as P,b as d,I as S,B as y,c as z,d as j}from"./iframe-DSlDJxzW.js";const r={backgroundColor:P,color:g},h={name:"userProfiles",size:"lg"},u=parseInt(j,10),x={title:"Components/Data Display/Avatar",component:a},t={args:{shape:"circle",size:"default",children:"MP"},argTypes:{shape:{control:"select",options:["circle","square"]},size:{control:"select",options:["small","default","large"]}}},n={render:()=>e.jsxs(d,{size:u,children:[e.jsx(a,{style:r,children:"MP"}),e.jsx(a,{shape:"square",style:r,children:"MP"})]})},o={render:()=>e.jsxs(d,{size:u,children:[e.jsx(a,{size:"small",style:r,children:"MP"}),e.jsx(a,{style:r,children:"MP"}),e.jsx(a,{size:"large",style:r,children:"MP"})]})},c={args:{src:"https://randomuser.me/api/portraits/women/72.jpg",alt:"Avatar with photo"}},l={args:{style:r,icon:e.jsx(S,{...h})}},i={args:{children:"MP"}},p={render:()=>e.jsxs(d,{size:u,children:[e.jsx(y,{count:3,size:"small",children:e.jsx(a,{style:r,icon:e.jsx(S,{...h})})}),e.jsx(y,{dot:!0,children:e.jsx(a,{style:r,children:"MP"})})]})},m={render:()=>{const v=[{name:"Chloe Martinez",src:"https://randomuser.me/api/portraits/women/65.jpg"},{name:"Ernest Wallace",src:"https://randomuser.me/api/portraits/men/34.jpg"},{name:"Priya Patel",initials:"PP"},{name:"Lars Ostergaard",initials:"LO"}];return e.jsx(d,{orientation:"vertical",size:u,children:e.jsx(a.Group,{max:{count:3,style:{color:g,backgroundColor:z},popover:{trigger:"click",placement:"bottom"}},children:v.map(s=>{const A=s.initials!=null?r:void 0;return e.jsx(a,{src:s.src,alt:s.name,style:A,children:s.initials},s.name)})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space size={spaceSize}>
        <Avatar style={neutralAvatarStyle}>MP</Avatar>
        <Avatar shape="square" style={neutralAvatarStyle}>
          MP
        </Avatar>
      </Space>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/women/72.jpg',
    alt: 'Avatar with photo'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    style: neutralAvatarStyle,
    icon: <Icon {...neutralIconProps} />
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'MP'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const M=["Playground","ShapeExamples","SizeExamples","TypePhoto","TypeIcon","TypeInitials","WithBadge","WithGroup"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,ShapeExamples:n,SizeExamples:o,TypeIcon:l,TypeInitials:i,TypePhoto:c,WithBadge:p,WithGroup:m,__namedExportsOrder:M,default:x},Symbol.toStringTag,{value:"Module"}));export{I as A,t as P,n as S,c as T,p as W,o as a,l as b,i as c};
