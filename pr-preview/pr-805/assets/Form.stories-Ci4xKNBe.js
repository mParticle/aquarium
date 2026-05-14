import{m as t,j as e,F as d,z as f,V as y,N as x,i as p,I as S,T as F}from"./iframe-D96v7dCn.js";const{expect:n,userEvent:m,within:g}=__STORYBOOK_MODULE_TEST__,h=`import { Button, Flex, Form, Icon, Input, Typography } from '@mparticle/aquarium'
import { SizeSm, SizeXs } from '@mparticle/aquarium/dist/style'

interface IFormValues {
  name?: string
  products?: Array<{ sku?: string }>
  submittedSummary?: string
}

const FormInstanceStatus = () => {
  const form = Form.useFormInstance<IFormValues>()
  const name = Form.useWatch('name', { form, preserve: true })

  return <Typography.Text type="secondary">{name ? 'Name: ' + name : 'Name not entered'}</Typography.Text>
}

export const BasicFormExample = () => {
  const [form] = Form.useForm<IFormValues>()
  const submittedSummary = Form.useWatch('submittedSummary', { form, preserve: true })

  return (
    <Form.Provider>
      <Form
        form={form}
        layout="vertical"
        name="basic-form"
        initialValues={{ products: [{ sku: '' }] }}
        onFinish={values => {
          const skuCount = values.products?.filter(product => product?.sku).length ?? 0
          form.setFieldValue(
            'submittedSummary',
            \`Submitted \${values.name} with \${skuCount} SKU\${skuCount === 1 ? '' : 's'}\`,
          )
        }}>
        <Flex vertical gap={SizeSm} style={{ maxWidth: 360 }}>
          <Form.Item<IFormValues>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Name is required' }]}
            style={{ marginBottom: 0 }}>
            <Input aria-label="Name" placeholder="Name" />
          </Form.Item>
          <FormInstanceStatus />
          <Form.Item label="Product SKUs" style={{ marginBottom: 0 }}>
            <Form.List name="products">
              {(fields, { add, remove }) => (
                <Flex vertical gap={SizeXs}>
                  {fields.map(field => (
                    <Flex key={field.key} align="center" gap={SizeXs}>
                      <Form.Item noStyle name={[field.name, 'sku']}>
                        <Input aria-label={\`SKU \${field.name + 1}\`} placeholder={\`SKU \${field.name + 1}\`} />
                      </Form.Item>
                      {fields.length > 1 && (
                        <Button
                          aria-label={\`Remove SKU \${field.name + 1}\`}
                          htmlType="button"
                          icon={<Icon name="delete" size="md" />}
                          onClick={() => remove(field.name)}
                        />
                      )}
                    </Flex>
                  ))}
                  <Button htmlType="button" icon={<Icon name="add" size="md" />} onClick={() => add({ sku: '' })}>
                    Add SKU
                  </Button>
                </Flex>
              )}
            </Form.List>
          </Form.Item>
          <Form.ErrorList errors={[]} />
          <Button htmlType="submit" type="primary" style={{ alignSelf: 'flex-start' }}>
            Save
          </Button>
          {submittedSummary && <Typography.Text>{submittedSummary}</Typography.Text>}
        </Flex>
      </Form>
    </Form.Provider>
  )
}`,b=()=>{const o=t.useFormInstance(),a=t.useWatch("name",{form:o,preserve:!0});return e.jsx(F.Text,{"data-testid":"watched-name",type:"secondary",children:a?`Name: ${a}`:"Name not entered"})},v=()=>{const[o]=t.useForm(),a=t.useWatch("submittedSummary",{form:o,preserve:!0});return e.jsx(t.Provider,{children:e.jsx(t,{form:o,layout:"vertical",name:"basic-form",initialValues:{products:[{sku:""}]},onFinish:s=>{const u=s.products?.filter(l=>l?.sku).length??0;o.setFieldValue("submittedSummary",`Submitted ${s.name} with ${u} SKU${u===1?"":"s"}`)},children:e.jsxs(d,{vertical:!0,gap:f,style:{maxWidth:360},children:[e.jsx(t.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Name is required"}],style:{marginBottom:0},children:e.jsx(y,{"aria-label":"Name",placeholder:"Name"})}),e.jsx(b,{}),e.jsx(t.Item,{label:"Product SKUs",style:{marginBottom:0},children:e.jsx(t.List,{name:"products",children:(s,{add:u,remove:l})=>e.jsxs(d,{vertical:!0,gap:x,children:[s.map(r=>e.jsxs(d,{align:"center",gap:x,children:[e.jsx(t.Item,{noStyle:!0,name:[r.name,"sku"],children:e.jsx(y,{"aria-label":`SKU ${r.name+1}`,placeholder:`SKU ${r.name+1}`})}),s.length>1&&e.jsx(p,{"aria-label":`Remove SKU ${r.name+1}`,htmlType:"button",icon:e.jsx(S,{name:"delete",size:"md"}),onClick:()=>l(r.name)})]},r.key)),e.jsx(p,{htmlType:"button",icon:e.jsx(S,{name:"add",size:"md"}),onClick:()=>u({sku:""}),children:"Add SKU"})]})})}),e.jsx(t.ErrorList,{errors:[]}),e.jsx(p,{htmlType:"submit",type:"primary",style:{alignSelf:"flex-start"},children:"Save"}),a&&e.jsx(F.Text,{"data-testid":"submitted-summary",children:a})]})})})},B={title:"Components/Data Entry/Form",component:t,args:{}},i={render:()=>e.jsx(v,{}),parameters:{docs:{source:{code:h,language:"tsx"}}}},c={tags:["!dev","play-test-validation"],render:()=>e.jsx(v,{}),play:async({canvasElement:o})=>{await n(typeof t.useForm).toBe("function"),await n(typeof t.useWatch).toBe("function"),await n(typeof t.useFormInstance).toBe("function"),await n(typeof t.Item).toBe("function"),await n(typeof t.List).toBe("function"),await n(typeof t.Provider).toBe("function"),await n(typeof t.ErrorList).toBe("function");const a=g(o);await m.type(a.getByLabelText("Name"),"Ada Lovelace"),await n(a.getByTestId("watched-name")).toHaveTextContent("Name: Ada Lovelace"),await m.type(a.getByLabelText("SKU 1"),"SKU-123"),await m.click(a.getByRole("button",{name:"Add SKU"})),await m.type(a.getByLabelText("SKU 2"),"SKU-456"),await n(a.getByRole("button",{name:"Remove SKU 2"})).toBeInTheDocument(),await m.click(a.getByRole("button",{name:"Save"})),await n(a.getByTestId("submitted-summary")).toHaveTextContent("Submitted Ada Lovelace with 2 SKUs")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <BasicFormExample />,
  parameters: {
    docs: {
      source: {
        code: basicFormExampleCode,
        language: 'tsx'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', 'play-test-validation'],
  render: () => <BasicFormExample />,
  play: async ({
    canvasElement
  }) => {
    await expect(typeof Form.useForm).toBe('function');
    await expect(typeof Form.useWatch).toBe('function');
    await expect(typeof Form.useFormInstance).toBe('function');
    await expect(typeof Form.Item).toBe('function');
    await expect(typeof Form.List).toBe('function');
    await expect(typeof Form.Provider).toBe('function');
    await expect(typeof Form.ErrorList).toBe('function');
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Name'), 'Ada Lovelace');
    await expect(canvas.getByTestId('watched-name')).toHaveTextContent('Name: Ada Lovelace');
    await userEvent.type(canvas.getByLabelText('SKU 1'), 'SKU-123');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add SKU'
    }));
    await userEvent.type(canvas.getByLabelText('SKU 2'), 'SKU-456');
    await expect(canvas.getByRole('button', {
      name: 'Remove SKU 2'
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(canvas.getByTestId('submitted-summary')).toHaveTextContent('Submitted Ada Lovelace with 2 SKUs');
  }
}`,...c.parameters?.docs?.source}}};const w=["Primary","StaticMembersValidation"],I=Object.freeze(Object.defineProperty({__proto__:null,Primary:i,StaticMembersValidation:c,__namedExportsOrder:w,default:B},Symbol.toStringTag,{value:"Module"}));export{I as F,B as m};
