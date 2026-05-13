import { type Meta, type StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { Button, Flex, Icon, Input, Typography } from 'src/components'
import { Form } from 'src/components/data-entry/Form/Form'
import { SizeSm, SizeXs } from 'src/styles/style'

interface IFormValues {
  name?: string
  products?: Array<{ sku?: string }>
  submittedSummary?: string
}

const basicFormExampleCode = `import { Button, Flex, Form, Icon, Input, Typography } from '@mparticle/aquarium'
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
}`

const FormInstanceStatus = () => {
  const form = Form.useFormInstance<IFormValues>()
  const name = Form.useWatch('name', { form, preserve: true })

  return (
    <Typography.Text data-testid="watched-name" type="secondary">
      {name ? `Name: ${name}` : 'Name not entered'}
    </Typography.Text>
  )
}

const BasicFormExample = () => {
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
            `Submitted ${values.name} with ${skuCount} SKU${skuCount === 1 ? '' : 's'}`,
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
                        <Input aria-label={`SKU ${field.name + 1}`} placeholder={`SKU ${field.name + 1}`} />
                      </Form.Item>
                      {fields.length > 1 && (
                        <Button
                          aria-label={`Remove SKU ${field.name + 1}`}
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
          {submittedSummary && <Typography.Text data-testid="submitted-summary">{submittedSummary}</Typography.Text>}
        </Flex>
      </Form>
    </Form.Provider>
  )
}

const meta: Meta<typeof Form> = {
  title: 'Components/Data Entry/Form',
  component: Form,

  args: {},
}
export default meta

type Story = StoryObj<typeof Form>

export const Primary: Story = {
  render: () => <BasicFormExample />,
  parameters: {
    docs: {
      source: {
        code: basicFormExampleCode,
        language: 'tsx',
      },
    },
  },
}

export const StaticMembersValidation: Story = {
  tags: ['!dev', 'play-test-validation'],
  render: () => <BasicFormExample />,
  play: async ({ canvasElement }) => {
    await expect(typeof Form.useForm).toBe('function')
    await expect(typeof Form.useWatch).toBe('function')
    await expect(typeof Form.useFormInstance).toBe('function')
    await expect(typeof Form.Item).toBe('function')
    await expect(typeof Form.List).toBe('function')
    await expect(typeof Form.Provider).toBe('function')
    await expect(typeof Form.ErrorList).toBe('function')

    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByLabelText('Name'), 'Ada Lovelace')
    await expect(canvas.getByTestId('watched-name')).toHaveTextContent('Name: Ada Lovelace')

    await userEvent.type(canvas.getByLabelText('SKU 1'), 'SKU-123')
    await userEvent.click(canvas.getByRole('button', { name: 'Add SKU' }))
    await userEvent.type(canvas.getByLabelText('SKU 2'), 'SKU-456')
    await expect(canvas.getByRole('button', { name: 'Remove SKU 2' })).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Save' }))

    await expect(canvas.getByTestId('submitted-summary')).toHaveTextContent('Submitted Ada Lovelace with 2 SKUs')
  },
}
