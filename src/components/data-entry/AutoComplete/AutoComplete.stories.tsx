import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import { AutoComplete, Flex, Icon, Input, Space } from 'src/components'
import { type IAutoCompleteProps } from 'src/components/data-entry/AutoComplete/AutoComplete'
import { type ISelectProps } from 'src/components/data-entry/Select/Select'
import { ExampleStory } from 'src/utils/ExampleStory'

const baseOptions = [
  { label: 'The quick brown fox jumps over the lazy dog', value: 1 },
  { label: 'Waxy and quivering, jocks fumble the pizza', value: 2 },
  { label: 'When zombies arrive, quickly fax judge Pat', value: 3 },
  { label: 'Pack my red box with five dozen quality jugs', value: 4 },
  { label: 'The quick onyx goblin jumps over the lazy dwarf', value: 5 },
]

const meta: Meta<typeof AutoComplete> = {
  title: 'Aquarium/Data Entry/AutoComplete',
  component: props => {
    const [value, setValue] = useState<IAutoCompleteProps['value']>('')
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([])

    const getPanelValue = (searchText: string): IAutoCompleteProps['options'] => {
      if (!searchText) return []
      return baseOptions.filter(o => o.label.toLowerCase().includes(searchText.toLowerCase()))
    }

    const onSearch = (text: string) => {
      setOptions(getPanelValue(text))
    }
    const onSelect = (value: string) => {
      console.log('you selected value: ' + value)
    }

    return (
      <>
        <AutoComplete
          {...props}
          value={value}
          options={options}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={setValue}
        />
      </>
    )
  },

  args: {
    allowClear: false,
    autoFocus: false,
    backfill: false,
    bordered: true,
    defaultActiveFirstOption: true,
    options: baseOptions,
    defaultOpen: undefined,
    defaultValue: undefined,
    disabled: false,
    popupClassName: undefined,
    // filterOption: true,
    open: undefined,
    placeholder: 'Search AutoComplete',
    status: undefined,
    style: { width: 200 },
    value: undefined,
    onBlur: () => {
      console.log('Blur Event')
    },
    onChange: value => {
      alert(`Selected Value: ${value}`)
    },
    onDropdownVisibleChange: open => {
      console.log(`Dropdown Open: ${open}`)
    },
    onFocus: () => {
      console.log('Focus Event')
    },
    onSearch: value => {
      alert(`Search Value: ${value}`)
    },
    onSelect: (value, option) => {
      alert(`Selected Value: ${value}, Option: ${String(option.label)}`)
    },
    onClear: () => {
      alert('Clear Event')
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['error', 'warning'],
    },
  },
}
export default meta

type Story = StoryObj<typeof AutoComplete>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const ClearButton: Story = {
  args: {
    allowClear: true,
  },
}

export const Placeholder: Story = {
  args: {
    placeholder: 'Custom Placeholder Text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const NotFound: Story = {
  args: {
    notFoundContent: <>Custom Not Found Component goes here</>,
  },
}

export const Borderless: Story = {
  args: {
    bordered: false,
  },
}

export const ExampleBasic: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([])
    const [anotherOptions, setAnotherOptions] = useState<IAutoCompleteProps['options']>([])

    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat),
    })
    const getPanelValue = (searchText: string) =>
      !searchText
        ? []
        : ([mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options'])
    const onSelect = (data: string) => {
      alert('onSelect:' + data)
    }
    const onChange = (data: string) => {
      setValue(data)
    }

    return (
      <>
        <ExampleStory title="Basic Usage, set data source of autocomplete with options property.">
          <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={text => {
              setOptions(getPanelValue(text))
            }}
            placeholder="input here"
          />
          <br />
          <br />
          <AutoComplete
            value={value}
            options={anotherOptions}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={text => {
              setAnotherOptions(getPanelValue(text))
            }}
            onChange={onChange}
            placeholder="control mode"
          />
        </ExampleStory>
      </>
    )
  },
}

export const ExampleCustomized: Story = {
  render: () => {
    const [options, setOptions] = useState<Array<{ value: string; label: string }>>([])

    const handleSearch = (value: string) => {
      let res: Array<{ value: string; label: string }>
      if (!value || value.includes('@')) {
        res = []
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(domain => ({
          value,
          label: `${value}@${domain}`,
        }))
      }
      setOptions(res)
    }

    return (
      <>
        <ExampleStory title="You could set custom Option label.">
          <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here" options={options} />
        </ExampleStory>
      </>
    )
  },
}

export const ExampleCustomizeInput: Story = {
  render: () => {
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([])

    const handleSearch = (value: string) => {
      setOptions(
        !value
          ? []
          : ([{ value }, { value: value + value }, { value: value + value + value }] as IAutoCompleteProps['options']),
      )
    }

    const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
      console.log('handleKeyPress', ev)
    }

    const onSelect = (value: string) => {
      alert('selected: ' + value)
    }

    return (
      <ExampleStory title="Customize Input Component">
        <AutoComplete options={options} style={{ width: 200 }} onSelect={onSelect} onSearch={handleSearch}>
          <Input.TextArea
            placeholder="input here"
            className="custom"
            style={{ height: 50 }}
            onKeyPress={handleKeyPress}
          />
        </AutoComplete>
      </ExampleStory>
    )
  },
}

export const ExampleNonCaseSensitive: Story = {
  render: () => {
    return (
      <>
        <ExampleStory title="A non-case-sensitive AutoComplete.">
          <AutoComplete
            style={{ width: 200 }}
            options={baseOptions.map(o => ({
              ...o,
              label: o.label.toUpperCase(),
            }))}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) =>
              option?.label?.toString().toUpperCase().includes(inputValue.toUpperCase()) ?? false
            }
          />
        </ExampleStory>
      </>
    )
  },
}

export const ExampleLookupPatternsCertainCategory: Story = {
  render: () => {
    const renderTitle = (title: string) => (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer">
          more
        </a>
      </span>
    )

    const renderItem = (title: string, count: number) => ({
      value: title,
      label: (
        <Flex justify="space-between">
          {title}
          <span>
            <Icon name="mpLogo" />
            {count}
          </span>
        </Flex>
      ),
    })

    const options = [
      {
        label: renderTitle('Libraries'),
        options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
      },
      {
        label: renderTitle('Solutions'),
        options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
      },
      {
        label: renderTitle('Articles'),
        options: [renderItem('AntDesign design language', 100000)],
      },
    ]

    return (
      <>
        <ExampleStory
          title={
            <>
              Demonstration of{' '}
              <a href="https://ant.design/docs/spec/reaction/#lookup-patterns" target="_blank" rel="noreferrer">
                Lookup Patterns: Certain Category
              </a>
              Basic Usage, set options of autocomplete with options property.
            </>
          }>
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            popupMatchSelectWidth={500}
            style={{ width: 250 }}
            options={options}
            size="large">
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
        </ExampleStory>
      </>
    )
  },
}

export const ExampleLookupPatternsUnCertainCategory: Story = {
  render: () => {
    const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

    const searchResult = (query: string) =>
      new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
          const category = `${query}${idx}`
          return {
            value: category,
            label: (
              <Flex justify="space-between">
                <span>
                  Found {query} on{' '}
                  <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                    {category}
                  </a>
                </span>
                <span>{getRandomInt(200, 100)} results</span>
              </Flex>
            ),
          }
        })

    const [options, setOptions] = useState<ISelectProps<object>['options']>([])
    const handleSearch = (value: string) => {
      setOptions(value !== '' ? searchResult(value) : [])
    }
    const onSelect = (value: string) => {
      alert('selected: ' + value)
    }

    return (
      <>
        <ExampleStory
          title={
            <>
              Demonstration of{' '}
              <a href="https://ant.design/docs/spec/reaction#lookup-patterns" target="_blank" rel="noreferrer">
                Lookup Patterns: Certain Category
              </a>
              Basic Usage, set options of autocomplete with options property.
            </>
          }>
          <AutoComplete
            popupMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            size="large">
            <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>
        </ExampleStory>
      </>
    )
  },
}

export const ExampleStatus: Story = {
  render: () => {
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat),
    })
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([])
    const [anotherOptions, setAnotherOptions] = useState<IAutoCompleteProps['options']>([])
    const getPanelValue = (searchText: string) =>
      !searchText
        ? []
        : ([mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options'])

    return (
      <ExampleStory title="Add status to AutoComplete with status, which could be error or warning.">
        <Space direction="vertical" style={{ width: '100%' }}>
          <AutoComplete
            placeholder="Error"
            options={options}
            onSearch={text => {
              setOptions(getPanelValue(text))
            }}
            status="error"
            style={{ width: 200 }}
          />
          <AutoComplete
            placeholder="Warning"
            options={anotherOptions}
            onSearch={text => {
              setAnotherOptions(getPanelValue(text))
            }}
            status="warning"
            style={{ width: 200 }}
          />
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleClearButton: Story = {
  render: () => {
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat),
    })
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([])
    const getPanelValue = (searchText: string) =>
      !searchText
        ? []
        : ([mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options'])

    return (
      <>
        <ExampleStory title="Customize clear button">
          <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSearch={text => {
              setOptions(getPanelValue(text))
            }}
            placeholder="No clear icon"
            allowClear={false}
          />
          <br />
          <br />
          <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSearch={text => {
              setOptions(getPanelValue(text))
            }}
            placeholder="Customized clear icon"
            allowClear={{ clearIcon: <Icon name="mpLogo" /> }}
          />
        </ExampleStory>
      </>
    )
  },
}