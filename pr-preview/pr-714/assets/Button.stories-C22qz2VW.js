import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a as r,z as w,F as t,T as b,I as a,i as I,G as v}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{B as R,f as D,u as F,t as M,v as L}from"./style-C-7nCLOl.js";const{userEvent:P}=__STORYBOOK_MODULE_TEST__,O={title:"Components/General/Button",component:n=>e.jsx(r,{...n,children:n.children??"Button Label"}),args:{danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},s={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(w,{type:"info",showIcon:!1,style:{backgroundColor:F,border:`1px solid ${D}`,borderRadius:R,width:"100%",marginBottom:0},message:e.jsxs(t,{align:"center",gap:M,children:[e.jsx(b.Text,{size:"xl",children:"💡"}),e.jsxs(b.Text,{size:"base",children:["Use the"," ",e.jsx(b.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",underline:!0,children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},o={args:{type:"primary",children:"Primary"},play:async n=>{const z=n.canvasElement.querySelector("button");if(z)await P.click(z);else throw new Error("Button not found")}},i={args:{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}},c={args:{type:"default",children:"Secondary"}},d={args:{type:"default",icon:e.jsx(a,{size:"sm",name:"transformation"}),children:"Secondary"}},l={args:{type:"dashed",children:"Tertiary"}},p={args:{type:"dashed",icon:e.jsx(a,{size:"sm",name:"add"}),children:"Tertiary"}},m={args:{type:"link",children:"Link"}},u={args:{type:"link",icon:e.jsx(a,{name:"add"}),children:"Link"}},y={args:{type:"text",children:"Text"}},h={args:{type:"default",danger:!0,children:"Delete"}},g={args:{type:"primary",loading:!0,children:"Loading"}},x={args:{type:"text",loading:!0,children:"Load more"}},f={render:()=>e.jsxs(t,{wrap:!0,gap:L,align:"center",children:[e.jsx(r,{type:"primary",children:"Primary"}),e.jsx(r,{type:"default",children:"Secondary"}),e.jsx(r,{type:"dashed",children:"Tertiary"}),e.jsx(r,{type:"text",children:"Text"}),e.jsx(r,{type:"link",children:"Link"})]})},j={render:()=>e.jsxs(t,{wrap:!0,gap:L,align:"center",children:[e.jsx(r,{type:"primary",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Primary"}),e.jsx(r,{type:"default",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Secondary"}),e.jsx(r,{type:"dashed",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Tertiary"}),e.jsx(r,{type:"text",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Text"}),e.jsx(r,{type:"link",icon:e.jsx(a,{name:"add",size:"sm"}),children:"Link"})]})},T={render:()=>e.jsxs(t,{gap:L,align:"center",children:[e.jsx(r,{type:"default",size:"small",children:"Small"}),e.jsx(r,{type:"default",children:"Default"}),e.jsx(r,{type:"default",size:"large",children:"Large"})]})},B={render:()=>e.jsxs(t,{wrap:!0,gap:L,align:"center",children:[e.jsx(r,{type:"primary",icon:e.jsx(a,{name:"add"}),"aria-label":"Primary action"}),e.jsx(r,{type:"default",icon:e.jsx(a,{name:"add"}),"aria-label":"Secondary action"}),e.jsx(r,{type:"dashed",icon:e.jsx(a,{name:"add"}),"aria-label":"Tertiary action"}),e.jsx(r,{type:"text",icon:e.jsx(a,{name:"add"}),"aria-label":"Refresh"}),e.jsx(r,{type:"link",icon:e.jsx(a,{name:"add"}),"aria-label":"Navigate"})]})},S={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{gap:"small",align:"center",children:[e.jsx(I,{title:"Fetch new data from the server",children:e.jsx(r,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),e.jsx(I,{title:"Refresh and fetch latest data",children:e.jsx(r,{type:"text",icon:e.jsx(a,{name:"refresh",size:"sm",color:"strong"})})})]})})},k={render:()=>{const n={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:z})=>{console.log("Selected:",z)}};return e.jsx(v,{menu:n,children:e.jsx(r,{icon:e.jsx(a,{name:"refresh",size:"sm"}),children:e.jsx(b.Text,{children:"Refresh Now"})})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        state: 'hidden'
      }
    }
  },
  render: () => {
    return <Alert type="info" showIcon={false} style={{
      backgroundColor: ColorWhite,
      border: \`1px solid \${ColorBorderSecondary}\`,
      borderRadius: BorderRadiusLg,
      width: '100%',
      marginBottom: 0
    }} message={<Flex align="center" gap={SizeXs}>
            <Typography.Text size="xl">💡</Typography.Text>
            <Typography.Text size="base">
              Use the{' '}
              <Typography.Link href="https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary" underline>
                Typography.Link
              </Typography.Link>{' '}
              when navigating to a new URL or external page.
            </Typography.Text>
          </Flex>} />;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'Primary'
  },
  play: async context => {
    const button = context.canvasElement.querySelector('button');
    if (button) {
      await userEvent.click(button); // Click the button
    } else {
      throw new Error('Button not found');
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" size="sm" />}>
          Primary
        </Button>
        <Button type="default" icon={<Icon name="add" size="sm" />}>
          Secondary
        </Button>
        <Button type="dashed" icon={<Icon name="add" size="sm" />}>
          Tertiary
        </Button>
        <Button type="text" icon={<Icon name="add" size="sm" />}>
          Text
        </Button>
        <Button type="link" icon={<Icon name="add" size="sm" />}>
          Link
        </Button>
      </Flex>;
  }
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex gap={MarginMd} align="center">
        <Button type="default" size="small">
          Small
        </Button>
        <Button type="default">Default</Button>
        <Button type="default" size="large">
          Large
        </Button>
      </Flex>;
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Flex gap="small" align="center">
          <Tooltip title="Fetch new data from the server">
            <Button type="text" icon={<Icon name="refresh" size="sm" color="text" />}>
              Refresh
            </Button>
          </Tooltip>

          <Tooltip title="Refresh and fetch latest data">
            <Button type="text" icon={<Icon name="refresh" size="sm" color="strong" />} />
          </Tooltip>
        </Flex>
      </>;
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refreshMenu: MenuProps = {
      items: [{
        key: 'refresh-columns',
        label: 'Refresh Columns'
      }, {
        key: 'refresh-values',
        label: 'Refresh Values'
      }],
      onClick: ({
        key
      }) => {
        console.log('Selected:', key);
      }
    };
    return <Dropdown menu={refreshMenu}>
        <Button icon={<Icon name="refresh" size="sm" />}>
          <Typography.Text>Refresh Now</Typography.Text>
        </Button>
      </Dropdown>;
  }
}`,...k.parameters?.docs?.source}}};const C=["LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options"],A=Object.freeze(Object.defineProperty({__proto__:null,Danger:h,Dashed:l,DashedWithIcon:p,Default:c,DefaultWithIcon:d,IconOnly:B,IconTypesOverview:j,Link:m,LinkUsageNote:s,LinkWithIcon:u,Loading:g,LoadingText:x,Primary:o,PrimaryWithIcon:i,Refresh:S,SizeExamples:T,Text:y,TypesOverview:f,With2Options:k,__namedExportsOrder:C,default:O},Symbol.toStringTag,{value:"Module"}));export{A as B,h as D,j as I,s as L,T as S,f as T,B as a,g as b,x as c};
