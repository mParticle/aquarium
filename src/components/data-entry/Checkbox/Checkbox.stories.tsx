import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Checkbox, Tooltip, Typography, Flex } from 'src/components'
import { useState } from 'react'
import { SizeSm, SizeXs, SizeXl } from 'src/styles/style'

export type CheckboxValueType = string | number | boolean

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Data Entry/Checkbox',
  component: props => {
    const [checked, setChecked] = useState<boolean>(props.checked ?? props.defaultChecked ?? false)
    return (
      <Checkbox
        {...props}
        checked={checked}
        onChange={_e => {
          setChecked(!checked)
        }}
      />
    )
  },

  args: {
    defaultChecked: true,
    disabled: false,
  },
  argTypes: {
    defaultChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}
export default meta

type Story = StoryObj<typeof Checkbox>

const featureOptions = [
  { label: 'Feature A', value: 'feature-a' },
  { label: 'Feature B', value: 'feature-b' },
  { label: 'Feature C', value: 'feature-c' },
]

const CheckboxStatesExample = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div style={{ display: 'grid', gap: SizeSm, maxWidth: '448px' }}>
      <Checkbox
        checked={isChecked}
        onChange={event => {
          setIsChecked(event.target.checked)
        }}>
        Default (interactive)
      </Checkbox>
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox indeterminate>Indeterminate</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled defaultChecked>
        Disabled and checked
      </Checkbox>
    </div>
  )
}

const VerticalCheckboxGroupExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<CheckboxValueType[]>(['feature-a', 'feature-c'])

  const allValues = featureOptions.map(option => option.value)
  const isAllSelected = selectedOptions.length === featureOptions.length
  const isIndeterminate = selectedOptions.length > 0 && !isAllSelected

  return (
    <Flex vertical gap={SizeXs} style={{ maxWidth: '448px' }}>
      <Checkbox
        indeterminate={isIndeterminate}
        checked={isAllSelected}
        onChange={event => {
          setSelectedOptions(event.target.checked ? allValues : [])
        }}>
        Check all
      </Checkbox>
      <Checkbox.Group
        options={featureOptions}
        value={selectedOptions}
        style={{ display: 'flex', flexDirection: 'column', gap: SizeXs }}
        onChange={(values: CheckboxValueType[]) => {
          setSelectedOptions(values)
        }}
      />
    </Flex>
  )
}

const CheckboxGroupExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<CheckboxValueType[]>(['feature-a', 'feature-c'])

  const allValues = featureOptions.map(option => option.value)
  const isAllSelected = selectedOptions.length === featureOptions.length
  const isIndeterminate = selectedOptions.length > 0 && !isAllSelected

  return (
    <div style={{ display: 'grid', gap: SizeSm, maxWidth: '448px' }}>
      <Checkbox
        indeterminate={isIndeterminate}
        checked={isAllSelected}
        onChange={event => {
          setSelectedOptions(event.target.checked ? allValues : [])
        }}>
        Select all features
      </Checkbox>
      <div style={{ display: 'grid', gap: SizeXs, paddingLeft: SizeXl }}>
        <Checkbox.Group
          options={featureOptions}
          value={selectedOptions}
          onChange={(values: CheckboxValueType[]) => {
            setSelectedOptions(values)
          }}
        />
      </div>
    </div>
  )
}

const preferenceOptions = [
  {
    label: 'Product updates',
    value: 'product-updates',
    description: 'Important improvements, release notes, and early access invitations.',
  },
  {
    label: 'Webinars and events',
    value: 'events',
    description: 'Invitations to upcoming live sessions, workshops, and community meetups.',
  },
  {
    label: 'Security advisories',
    value: 'security',
    description: 'Critical notifications about security and compliance-related changes.',
  },
]

const CheckboxListExample = () => {
  const [selectedValues, setSelectedValues] = useState<CheckboxValueType[]>(['product-updates'])

  const toggleValue = (value: CheckboxValueType, shouldSelect: boolean) => {
    setSelectedValues(previousValues => {
      if (shouldSelect) {
        return previousValues.includes(value) ? previousValues : [...previousValues, value]
      }

      return previousValues.filter(existingValue => existingValue !== value)
    })
  }

  return (
    <div style={{ display: 'grid', gap: SizeSm, maxWidth: '512px' }}>
      {preferenceOptions.map(option => {
        const isChecked = selectedValues.includes(option.value)
        return (
          <Checkbox
            key={option.value}
            checked={isChecked}
            onChange={event => {
              toggleValue(option.value, event.target.checked)
            }}>
            <Flex vertical>
              <Typography.Text>{option.label}</Typography.Text>
              <Typography.Text type="secondary">{option.description}</Typography.Text>
            </Flex>
          </Checkbox>
        )
      })}
    </div>
  )
}

const settingsOptions = [
  {
    label: 'Email notifications',
    value: 'email-notifications',
    line1: 'Receive updates about account activity and security alerts.',
    line2: 'You can customize frequency in your notification preferences.',
  },
  {
    label: 'Usage analytics',
    value: 'usage-analytics',
    line1: 'Share anonymous usage data to help improve the product.',
    line2: 'No personally identifiable information is collected or shared.',
  },
  {
    label: 'Beta features',
    value: 'beta-features',
    line1: 'Get early access to new features before they are generally available.',
    line2: 'Beta features may change or be removed without prior notice.',
  },
]

const CheckboxWithTitleAndTwoLinesExample = () => {
  const [selectedValues, setSelectedValues] = useState<CheckboxValueType[]>(['email-notifications'])

  const toggleValue = (value: CheckboxValueType, shouldSelect: boolean) => {
    setSelectedValues(previousValues => {
      if (shouldSelect) {
        return previousValues.includes(value) ? previousValues : [...previousValues, value]
      }

      return previousValues.filter(existingValue => existingValue !== value)
    })
  }

  return (
    <div style={{ display: 'grid', gap: SizeSm, maxWidth: '512px' }}>
      {settingsOptions.map(option => {
        const isChecked = selectedValues.includes(option.value)
        return (
          <Checkbox
            key={option.value}
            checked={isChecked}
            onChange={event => {
              toggleValue(option.value, event.target.checked)
            }}>
            <Flex vertical>
              <Typography.Text strong>{option.label}</Typography.Text>
              <Typography.Text type="secondary">{option.line1}</Typography.Text>
              <Typography.Text type="secondary">{option.line2}</Typography.Text>
            </Flex>
          </Checkbox>
        )
      })}
    </div>
  )
}

const LongLegalCopyExample = () => {
  const [checked, setChecked] = useState(true)

  return (
    <div style={{ maxWidth: '512px' }}>
      <Checkbox
        checked={checked}
        onChange={event => {
          setChecked(event.target.checked)
        }}>
        <Typography.Text>
          I agree to the terms, policies, and any other legal guidelines required to use this service, including matters
          related to privacy, data usage, third-party tools, cookies, and future updates to the agreement.
        </Typography.Text>
      </Checkbox>
    </div>
  )
}

const DisabledWithTooltipExample = () => (
  <Tooltip title="You don’t have permission to change this setting">
    <Checkbox disabled defaultChecked>
      Checkbox label
    </Checkbox>
  </Tooltip>
)

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {
  args: {
    disabled: false,
    children: 'Checkbox label',
  },
}

export const StatesShowcase: Story = {
  name: 'States showcase',
  render: () => <CheckboxStatesExample />,
  parameters: {
    docs: {
      description: {
        story: 'Display the default, checked, indeterminate, and disabled states together for fast visual comparison.',
      },
    },
  },
}

export const DisabledWithTooltip: Story = {
  name: 'Disabled with tooltip',
  render: () => <DisabledWithTooltipExample />,
  parameters: {
    docs: {
      description: {
        story: 'Wrap a disabled checkbox with a tooltip to explain why the option is unavailable.',
      },
    },
  },
}

export const GroupSelection: Story = {
  name: 'Group selection',
  render: () => <CheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Use `Checkbox.Group` to render related choices. Combine it with a single Checkbox to create a "Select all" control when needed.',
      },
    },
  },
}

export const VerticalGroup: Story = {
  name: 'Vertical group',
  render: () => <VerticalCheckboxGroupExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Combine a "Check all" control with a vertically stacked `Checkbox.Group`. The leading checkbox reflects the indeterminate state when only some options are selected.',
      },
    },
  },
}

export const MultipleOptions: Story = {
  name: 'Multiple options',
  render: () => <CheckboxListExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Stack individual checkboxes to present detailed choices. Each checkbox can include supporting text to clarify what opting in entails.',
      },
    },
  },
}

export const TitleWithTwoLines: Story = {
  name: 'Title with two lines of text',
  render: () => <CheckboxWithTitleAndTwoLinesExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Use a bold title with two lines of secondary text to give users enough context about each option. This pattern works well for settings and preference panels.',
      },
    },
  },
}

export const LongFormConsent: Story = {
  name: 'Long form consent',
  render: () => <LongLegalCopyExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Use a single Checkbox with stacked typography for lengthy consent copy. Keep supporting text in a secondary color to maintain readability.',
      },
    },
  },
}
