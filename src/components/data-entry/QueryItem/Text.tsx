import { AutoComplete } from 'src/components'
import { useEffect, useState } from 'react'
import './query-item.css'

interface ITextProps {
  value?: string;
  filterKey?: string;
  showValuesFromKey?: string;
  _options?: [];
  placeHolder?: string;
  onSelected: (selectedOption: any) => void;
}

export const Text = ({ value, placeHolder, _options, onSelected, showValuesFromKey = 'type' }: ITextProps) => {

  const [inputValue, setInputValue] = useState(value || '')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(undefined) // Variable de estado para el objeto seleccionado
  const [options, setOptions] = useState<{ value: string }[]>([])

  useEffect(() => {
    if (_options) {
      const mappedOptions = _options.map((option: any) => ({
        value: option[showValuesFromKey],
        label: option[showValuesFromKey]
      }))
      setOptions(mappedOptions)
    }
  }, [])

  useEffect(() => {
    if (selectedOption) {
      onSelected(selectedOption)
    }
  }, [selectedOption])

  useEffect(() => {
    if (inputValue === '') setIsOpen(false)
  }, [inputValue])

  const handleChange = (text: string) => {
    setIsOpen(true)
    setInputValue(text)
  }

  const handleBlur = () => setIsOpen(false)


  const handleSelect = (value: string, option: any) => {
    setIsOpen(false)
    setSelectedOption(option)
  }

  const handleFilterOption = (value: string, option: any) => {
    const optionValue: string = option?.value?.toString().toLowerCase() || ''
    const inputValue: string = value.toString().toLowerCase()
    return optionValue.includes(inputValue)
  }

  return (
    <AutoComplete
      className={'query-item query-item-text'}
      style={{width: '20rem'}}
      placeholder={placeHolder}
      options={options}
      value={inputValue}
      onChange={handleChange}
      filterOption={handleFilterOption}
      open={isOpen}
      onBlur={handleBlur}
      onSelect={handleSelect}
    />
  )
}