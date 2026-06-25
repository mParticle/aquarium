import { useRef, useState } from 'react'
import { Button, Checkbox, Divider, Dropdown, Flex, Icon } from 'src/components'
import {
  BorderRadiusLg,
  BoxShadowSecondary,
  ColorBgElevated,
  MarginXxs,
  Padding,
  PaddingSm,
  PaddingXxs,
  SizeSm,
} from 'src/styles/style'

export interface ICustomDropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ICustomDropdownProps {
  label?: string
  options: ICustomDropdownOption[]
  value?: string[]
  onChange?: (value: string[]) => void
  showFooter?: boolean
  onCancel?: () => void
  onApply?: () => void
  disabled?: boolean
}

export function CustomDropdown({
  label = 'Dropdown',
  options,
  value = [],
  onChange,
  showFooter = false,
  onCancel,
  onApply,
  disabled,
}: ICustomDropdownProps) {
  const [open, setOpen] = useState(false)
  const committedValue = useRef<string[]>(value)
  const [draft, setDraft] = useState<string[]>(value)

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      committedValue.current = value
      setDraft(value)
    }
    setOpen(nextOpen)
  }

  const handleCheck = (optionValue: string, checked: boolean) => {
    if (showFooter) {
      setDraft(checked ? [...draft, optionValue] : draft.filter(v => v !== optionValue))
    } else {
      onChange?.(checked ? [...value, optionValue] : value.filter(v => v !== optionValue))
    }
  }

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpenChange}
      trigger={['click']}
      disabled={disabled}
      dropdownRender={() => (
        <div
          style={{
            backgroundColor: ColorBgElevated,
            borderRadius: BorderRadiusLg,
            boxShadow: BoxShadowSecondary,
            padding: PaddingXxs,
            width: 250,
          }}>
          <Flex vertical>
            {options.map(option => (
              <div key={option.value} style={{ padding: `${MarginXxs} ${Padding} 0 ${PaddingSm}` }}>
                <Checkbox
                  checked={(showFooter ? draft : value).includes(option.value)}
                  disabled={option.disabled}
                  onChange={e => handleCheck(option.value, e.target.checked)}>
                  {option.label}
                </Checkbox>
              </div>
            ))}
            {showFooter && (
              <>
                <Divider style={{ margin: `${MarginXxs} 0` }} />
                <Flex
                  justify="flex-end"
                  gap={SizeSm}
                  style={{ padding: `${MarginXxs} ${Padding} ${MarginXxs} ${PaddingSm}` }}>
                  <Button
                    type="text"
                    onClick={() => {
                      onCancel?.()
                      setOpen(false)
                    }}>
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      onChange?.(draft)
                      onApply?.()
                      setOpen(false)
                    }}>
                    Show results
                  </Button>
                </Flex>
              </>
            )}
          </Flex>
        </div>
      )}>
      <Button disabled={disabled}>
        <Flex align="center" gap={SizeSm}>
          {label}
          <Icon name="dropdownOpen" size="sm" color="inherit" />
        </Flex>
      </Button>
    </Dropdown>
  )
}
