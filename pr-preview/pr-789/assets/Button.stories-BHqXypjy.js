import{k as n,j as e,I as r,b5 as W,b6 as C,aC as A,b7 as _,F as t,aY as N,T as a,b8 as s,aN as o,b9 as q}from"./iframe-DVjcQFZr.js";import{s as F,i as E,a as M,b as P}from"./Trash01-DBQB84ns.js";const{userEvent:$}=__STORYBOOK_MODULE_TEST__,V={title:"Components/General/Button",component:n,args:{children:"Button Label",danger:!1,disabled:!1,ghost:!1,loading:!1,shape:"default",size:"middle",type:"primary"},argTypes:{shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},type:{control:"select",options:["primary","dashed","link","text","default"]}}},U={none:void 0,plus:e.jsx(r,{name:M,size:"sm"}),edit:e.jsx(r,{name:E,size:"sm"}),delete:e.jsx(r,{name:F,size:"sm"})},i={args:{type:"primary",size:"middle",shape:"default",danger:!1,disabled:!1,loading:!1,ghost:!1,children:"Button Label",icon:void 0},argTypes:{type:{control:"select",options:["primary","default","dashed","text","link"]},size:{control:"select",options:["small","middle","large"]},shape:{control:"select",options:["default","circle","round"]},danger:{control:"select",options:[!1,!0]},disabled:{control:"select",options:[!1,!0]},loading:{control:"select",options:[!1,!0]},ghost:{control:"select",options:[!1,!0]},icon:{control:"select",options:Object.keys(U),mapping:U}}},c={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(W,{type:"info",showIcon:!1,style:{backgroundColor:_,border:`1px solid ${A}`,borderRadius:C,width:"100%",marginBottom:0},message:e.jsxs(t,{align:"center",gap:N,children:[e.jsx(a.Text,{size:"xl",children:"💡"}),e.jsxs(a.Text,{size:"base",children:["Use the"," ",e.jsx(a.Link,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",color:"ColorText",children:"Typography.Link"})," ","when navigating to a new URL or external page."]})]})})},l={args:{type:"primary",children:"Primary"},play:async O=>{const R=O.canvasElement.querySelector("button");if(R)await $.click(R);else throw new Error("Button not found")}},d={args:{type:"primary",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Primary"}},p={args:{type:"default",children:"Secondary"}},m={args:{type:"default",icon:e.jsx(r,{size:"sm",name:"transformation"}),children:"Secondary"}},u={args:{type:"dashed",children:"Tertiary"}},y={args:{type:"dashed",icon:e.jsx(r,{size:"sm",name:"add"}),children:"Tertiary"}},h={args:{type:"link",children:"Link"}},g={args:{type:"link",icon:e.jsx(r,{name:"add"}),children:"Link"}},x={args:{type:"text",children:"Text"}},f={args:{type:"default",danger:!0,children:"Delete"}},j={args:{type:"primary",loading:!0,children:"Loading"}},B={args:{type:"text",loading:!0,children:"Load more"}},T={render:()=>e.jsxs(t,{wrap:!0,gap:s,align:"center",children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"default",children:"Secondary"}),e.jsx(n,{type:"dashed",children:"Tertiary"}),e.jsx(n,{type:"text",children:"Text"}),e.jsx(n,{type:"link",children:"Link"})]})},z={render:()=>e.jsxs(t,{wrap:!0,gap:s,align:"center",children:[e.jsx(n,{color:"default",variant:"solid",children:"Dark"}),e.jsx(n,{color:"default",variant:"solid",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Dark with Icon"}),e.jsx(n,{color:"default",variant:"solid",disabled:!0,children:"Dark Disabled"})]})},I={render:()=>e.jsxs(t,{wrap:!0,gap:s,align:"center",children:[e.jsx(n,{type:"primary",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Primary"}),e.jsx(n,{type:"default",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Secondary"}),e.jsx(n,{type:"dashed",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Tertiary"}),e.jsx(n,{type:"text",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Text"}),e.jsx(n,{type:"link",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Link"})]})},k={render:()=>e.jsxs(t,{gap:s,align:"center",children:[e.jsx(n,{type:"default",size:"small",children:"Small"}),e.jsx(n,{type:"default",children:"Default"}),e.jsx(n,{type:"default",size:"large",children:"Large"})]})},S={render:()=>e.jsxs(t,{wrap:!0,gap:s,align:"center",children:[e.jsx(n,{type:"primary",icon:e.jsx(r,{name:"add"}),"aria-label":"Primary action"}),e.jsx(n,{type:"default",icon:e.jsx(r,{name:"add"}),"aria-label":"Secondary action"}),e.jsx(n,{type:"dashed",icon:e.jsx(r,{name:"add"}),"aria-label":"Tertiary action"}),e.jsx(n,{type:"text",icon:e.jsx(r,{name:"add"}),"aria-label":"Refresh"}),e.jsx(n,{type:"link",icon:e.jsx(r,{name:"add"}),"aria-label":"Navigate"})]})},b={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{gap:"small",align:"center",children:[e.jsx(o,{title:"Fetch new data from the server",children:e.jsx(n,{type:"text",icon:e.jsx(r,{name:"refresh",size:"sm",color:"text"}),children:"Refresh"})}),e.jsx(o,{title:"Refresh and fetch latest data",children:e.jsx(n,{type:"text",icon:e.jsx(r,{name:"refresh",size:"sm",color:"strong"})})})]})})},w={render:()=>{const O={items:[{key:"refresh-columns",label:"Refresh Columns"},{key:"refresh-values",label:"Refresh Values"}],onClick:({key:R})=>{console.log("Selected:",R)}};return e.jsx(q,{menu:O,children:e.jsx(n,{icon:e.jsx(r,{name:"refresh",size:"sm"}),children:e.jsx(a.Text,{children:"Refresh Now"})})})}},v={render:()=>e.jsxs(t,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(n,{type:"primary",icon:e.jsx(r,{name:"add",size:"sm"}),children:"Add Item"}),e.jsx(n,{type:"default",icon:e.jsx(r,{name:"edit",size:"sm"}),children:"Edit"}),e.jsx(n,{type:"default",danger:!0,icon:e.jsx(r,{name:"delete",size:"sm"}),children:"Delete"})]})},L={render:()=>e.jsxs(t,{gap:"middle",align:"center",wrap:"wrap",children:[e.jsx(n,{type:"primary",icon:e.jsx(r,{name:M,size:"sm"}),children:"Add Item"}),e.jsx(n,{type:"default",icon:e.jsx(r,{name:E,size:"sm"}),children:"Edit"}),e.jsx(n,{type:"default",danger:!0,icon:e.jsx(r,{name:F,size:"sm"}),children:"Delete"})]})},D={render:()=>e.jsxs(t,{vertical:!0,gap:"large",children:[e.jsx("div",{children:e.jsx(a.Title,{level:4,children:"Buttons with Rokt/Untitled UI Icons"})}),e.jsxs("div",{children:[e.jsx(a.Title,{level:5,children:"Action Buttons"}),e.jsxs(t,{wrap:!0,gap:s,align:"center",children:[e.jsx(n,{type:"primary",icon:e.jsx(r,{name:M,size:"sm"}),children:"Add Item"}),e.jsx(n,{type:"default",icon:e.jsx(r,{name:P,size:"sm"}),children:"Search"}),e.jsx(n,{type:"default",icon:e.jsx(r,{name:E,size:"sm"}),children:"Edit"}),e.jsx(n,{type:"default",danger:!0,icon:e.jsx(r,{name:F,size:"sm"}),children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx(a.Title,{level:5,children:"Icon-Only Buttons"}),e.jsxs(t,{wrap:!0,gap:s,align:"center",children:[e.jsx(o,{title:"Add new item",children:e.jsx(n,{type:"primary",icon:e.jsx(r,{name:M,size:"sm"})})}),e.jsx(o,{title:"Search",children:e.jsx(n,{type:"default",icon:e.jsx(r,{name:P,size:"sm"})})}),e.jsx(o,{title:"Edit",children:e.jsx(n,{type:"default",icon:e.jsx(r,{name:E,size:"sm"})})}),e.jsx(o,{title:"Delete",children:e.jsx(n,{type:"default",danger:!0,icon:e.jsx(r,{name:F,size:"sm"})})})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'middle',
    shape: 'default',
    danger: false,
    disabled: false,
    loading: false,
    ghost: false,
    children: 'Button Label',
    icon: undefined
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link']
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large']
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round']
    },
    danger: {
      control: 'select',
      options: [false, true]
    },
    disabled: {
      control: 'select',
      options: [false, true]
    },
    loading: {
      control: 'select',
      options: [false, true]
    },
    ghost: {
      control: 'select',
      options: [false, true]
    },
    icon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
              <Typography.Link href="https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary" color="ColorText">
                Typography.Link
              </Typography.Link>{' '}
              when navigating to a new URL or external page.
            </Typography.Text>
          </Flex>} />;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    icon: <Icon name="add" size="sm" />,
    children: 'Primary'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    children: 'Secondary'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    icon: <Icon size="sm" name="transformation" />,
    children: 'Secondary'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    children: 'Tertiary'
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    icon: <Icon size="sm" name="add" />,
    children: 'Tertiary'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    children: 'Link'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'link',
    icon: <Icon name="add" />,
    children: 'Link'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Text'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    danger: true,
    children: 'Delete'
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading'
  }
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    loading: true,
    children: 'Load more'
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary">Primary</Button>
        <Button type="default">Secondary</Button>
        <Button type="dashed">Tertiary</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
      </Flex>;
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button color="default" variant="solid">
          Dark
        </Button>
        <Button color="default" variant="solid" icon={<Icon name="add" size="sm" />}>
          Dark with Icon
        </Button>
        <Button color="default" variant="solid" disabled>
          Dark Disabled
        </Button>
      </Flex>;
  }
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex wrap gap={MarginMd} align="center">
        <Button type="primary" icon={<Icon name="add" />} aria-label="Primary action" />
        <Button type="default" icon={<Icon name="add" />} aria-label="Secondary action" />
        <Button type="dashed" icon={<Icon name="add" />} aria-label="Tertiary action" />
        <Button type="text" icon={<Icon name="add" />} aria-label="Refresh" />
        <Button type="link" icon={<Icon name="add" />} aria-label="Navigate" />
      </Flex>;
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex gap="middle" align="center" wrap="wrap">
        <Button type="primary" icon={<Icon name="add" size="sm" />}>
          Add Item
        </Button>
        <Button type="default" icon={<Icon name="edit" size="sm" />}>
          Edit
        </Button>
        <Button type="default" danger icon={<Icon name="delete" size="sm" />}>
          Delete
        </Button>
      </Flex>;
  }
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex gap="middle" align="center" wrap="wrap">
        <Button type="primary" icon={<Icon name={RoktPlus} size="sm" />}>
          Add Item
        </Button>
        <Button type="default" icon={<Icon name={RoktEdit} size="sm" />}>
          Edit
        </Button>
        <Button type="default" danger icon={<Icon name={RoktTrash} size="sm" />}>
          Delete
        </Button>
      </Flex>;
  }
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Flex vertical gap="large">
        <div>
          <Typography.Title level={4}>Buttons with Rokt/Untitled UI Icons</Typography.Title>
        </div>

        <div>
          <Typography.Title level={5}>Action Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Button type="primary" icon={<Icon name={RoktPlus} size="sm" />}>
              Add Item
            </Button>
            <Button type="default" icon={<Icon name={RoktSearch} size="sm" />}>
              Search
            </Button>
            <Button type="default" icon={<Icon name={RoktEdit} size="sm" />}>
              Edit
            </Button>
            <Button type="default" danger icon={<Icon name={RoktTrash} size="sm" />}>
              Delete
            </Button>
          </Flex>
        </div>

        <div>
          <Typography.Title level={5}>Icon-Only Buttons</Typography.Title>
          <Flex wrap gap={MarginMd} align="center">
            <Tooltip title="Add new item">
              <Button type="primary" icon={<Icon name={RoktPlus} size="sm" />} />
            </Tooltip>
            <Tooltip title="Search">
              <Button type="default" icon={<Icon name={RoktSearch} size="sm" />} />
            </Tooltip>
            <Tooltip title="Edit">
              <Button type="default" icon={<Icon name={RoktEdit} size="sm" />} />
            </Tooltip>
            <Tooltip title="Delete">
              <Button type="default" danger icon={<Icon name={RoktTrash} size="sm" />} />
            </Tooltip>
          </Flex>
        </div>
      </Flex>;
  }
}`,...D.parameters?.docs?.source}}};const X=["Playground","LinkUsageNote","Primary","PrimaryWithIcon","Default","DefaultWithIcon","Dashed","DashedWithIcon","Link","LinkWithIcon","Text","Danger","Loading","LoadingText","TypesOverview","DarkButton","IconTypesOverview","SizeExamples","IconOnly","Refresh","With2Options","ButtonsWithLocalIcons","ButtonsWithUntitledUIIcons","WithUntitledUIIcons"],K=Object.freeze(Object.defineProperty({__proto__:null,ButtonsWithLocalIcons:v,ButtonsWithUntitledUIIcons:L,Danger:f,DarkButton:z,Dashed:u,DashedWithIcon:y,Default:p,DefaultWithIcon:m,IconOnly:S,IconTypesOverview:I,Link:h,LinkUsageNote:c,LinkWithIcon:g,Loading:j,LoadingText:B,Playground:i,Primary:l,PrimaryWithIcon:d,Refresh:b,SizeExamples:k,Text:x,TypesOverview:T,With2Options:w,WithUntitledUIIcons:D,__namedExportsOrder:X,default:V},Symbol.toStringTag,{value:"Module"}));export{K as B,z as D,I,c as L,i as P,b as R,k as S,T,w as W,S as a,v as b,L as c,j as d,B as e,f};
