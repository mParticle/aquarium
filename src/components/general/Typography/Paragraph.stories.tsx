import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Paragraph } from 'src/components/general/Typography/Typography'
import { ExampleStory } from 'src/utils/ExampleStory'
import { useMemo } from 'react'
import { useState } from 'react'
import { Radio } from 'src/components'
import { Switch } from 'src/components'
import { Slider } from 'src/components'
import MpLogo from 'src/assets/svg/mpLogo.svg?react'

const meta: Meta<typeof Paragraph> = {
  title: 'Aquarium/General/Paragraph',
  component: props => <Paragraph {...props}>Paragraph text goes here</Paragraph>,

  args: {
    code: false,
    copyable: false,
    delete: false,
    disabled: false,
    editable: false,
    ellipsis: false,
    mark: false,
    strong: false,
    italic: false,
    type: undefined,
    underline: false,
    onClick: event => {
      console.log('Paragraph Clicked')
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['secondary', 'success', 'warning', 'danger'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Paragraph>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const Code: Story = {
  args: {
    code: true,
  },
}

export const Copyable: Story = {
  args: {
    copyable: true,
  },
}

export const DeletedLine: Story = {
  args: {
    delete: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Editable: Story = {
  args: {
    editable: true,
  },
}

export const Ellipsis: Story = {
  args: {
    ellipsis: true,
  },
}

export const Marked: Story = {
  args: {
    mark: true,
  },
}

export const Strong: Story = {
  args: {
    strong: true,
  },
}

export const Italic: Story = {
  args: {
    italic: true,
  },
}

export const Success: Story = {
  args: {
    type: 'success',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
  },
}

export const Danger: Story = {
  args: {
    type: 'danger',
  },
}

export const Underline: Story = {
  args: {
    underline: true,
  },
}

export const CustomOnClick: Story = {
  args: {
    onClick: event => {
      alert('Custom Click Handler')
    },
  },
}

export const ExampleEditable: Story = {
  render: () => {
    const [editableStr, setEditableStr] = useState('This is an editable text.')
    const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
      'This is a loooooooooooooooooooooooooooooooong editable text with suffix.',
    )
    const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] = useMemo(
      () => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)],
      [editableStrWithSuffix],
    )
    const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.')
    const [clickTriggerStr, setClickTriggerStr] = useState('Text or icon as trigger - click to start editing.')
    const [chooseTrigger, setChooseTrigger] = useState<Array<'icon' | 'text'>>(['icon'])
    const [customEnterIconStr, setCustomEnterIconStr] = useState(
      'Editable text with a custom enter icon in edit field.',
    )
    const [noEnterIconStr, setNoEnterIconStr] = useState('Editable text with no enter icon in edit field.')
    const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.')
    const [lengthLimitedStr, setLengthLimitedStr] = useState('This is an editable text with limited length.')

    const radioToState = (input: string): Array<'icon' | 'text'> => {
      switch (input) {
        case 'text':
          return ['text']
        case 'both':
          return ['icon', 'text']
        case 'icon':
        default:
          return ['icon']
      }
    }

    const stateToRadio = useMemo<string>(() => {
      if (chooseTrigger.includes('text')) {
        return chooseTrigger.includes('icon') ? 'both' : 'text'
      }
      return 'icon'
    }, [chooseTrigger])

    return (
      <ExampleStory title="Make Typography editable.">
        <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
        <Paragraph
          editable={{
            onChange: setEditableStrWithSuffix,
            text: editableStrWithSuffix,
          }}
          ellipsis={{
            suffix: editableStrWithSuffixSuffixPart,
          }}
        >
          {editableStrWithSuffixStartPart}
        </Paragraph>
        <Paragraph
          editable={{
            icon: <MpLogo/>,
            tooltip: 'click to edit text',
            onChange: setCustomIconStr,
          }}
        >
          {customIconStr}
        </Paragraph>
        Trigger edit with:{' '}
        <Radio.Group onChange={e => { setChooseTrigger(radioToState(e.target.value as string)); }} value={stateToRadio}>
          <Radio value="icon">icon</Radio>
          <Radio value="text">text</Radio>
          <Radio value="both">both</Radio>
        </Radio.Group>
        <Paragraph
          editable={{
            tooltip: 'click to edit text',
            onChange: setClickTriggerStr,
            triggerType: chooseTrigger,
          }}
        >
          {clickTriggerStr}
        </Paragraph>
        <Paragraph
          editable={{
            icon: <MpLogo/>,
            tooltip: 'click to edit text',
            onChange: setCustomEnterIconStr,
            enterIcon: <MpLogo/>,
          }}
        >
          {customEnterIconStr}
        </Paragraph>
        <Paragraph
          editable={{
            icon: <MpLogo/>,
            tooltip: 'click to edit text',
            onChange: setNoEnterIconStr,
            enterIcon: null,
          }}
        >
          {noEnterIconStr}
        </Paragraph>
        <Paragraph editable={{ tooltip: false, onChange: setHideTooltipStr }}>{hideTooltipStr}</Paragraph>
        <Paragraph
          editable={{
            onChange: setLengthLimitedStr,
            maxLength: 50,
            autoSize: { maxRows: 5, minRows: 3 },
          }}
        >
          {lengthLimitedStr}
        </Paragraph>
      </ExampleStory>
    )
  },
}

export const ExampleCopyable: Story = {
  render: () => {
    return (
      <ExampleStory title="Make Typography copyable.">
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        <Paragraph
          copyable={{
            icon: [<MpLogo key={1}/>, <MpLogo key={2}/>],
            tooltips: ['click here', 'you clicked!!'],
          }}
        >
          Custom Copy icon and replace tooltips text.
        </Paragraph>
        <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
      </ExampleStory>
    )
  },
}

export const ExampleEllipsis: Story = {
  render: () => {
    const [ellipsis, setEllipsis] = useState(true)
    return (
      <ExampleStory title="Multiple line ellipsis support. You can use tooltip to config ellipsis tooltip. Recommend expandable when have lots of content.">
        <Switch
          checked={ellipsis}
          onChange={() => {
            setEllipsis(!ellipsis)
          }}
        />
        <Paragraph ellipsis={ellipsis}>
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is
          refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED
          Team. Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>

        <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is
          refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED
          Team. Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </ExampleStory>
    )
  },
}

export const ExampleSuffix: Story = {
  render: () => {
    const [rows, setRows] = useState(1)

    const article =
      "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life"
    return (
      <ExampleStory title="Add suffix ellipsis support.">
        <Slider value={rows} min={1} max={10} onChange={setRows} />
        <Paragraph
          ellipsis={{
            rows,
            expandable: true,
            suffix: '--William Shakespeare',
            onEllipsis: ellipsis => {
              console.log('Ellipsis changed:', ellipsis)
            },
          }}
          title={`${article}--William Shakespeare`}
        >
          {article}
        </Paragraph>
      </ExampleStory>
    )
  },
}