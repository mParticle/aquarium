import {
  Button,
  Flex,
  Popover,
  RoktChevronDown,
  Typography,
  type IButtonProps,
  type IPopoverProps,
} from 'src/components'
import { ColorBorderSecondary, LineWidth, PaddingSm, PaddingXs, PaddingXxs, SizeMd, SizeSm } from 'src/styles/style'
import {
  type ComponentProps,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

export interface IFilterControlButtonContentArgs<TValue> {
  value: TValue
  draftValue: TValue
  isOpen: boolean
  isActive: boolean
}

export interface IFilterControlContentArgs<TValue> extends IFilterControlButtonContentArgs<TValue> {
  setDraftValue: Dispatch<SetStateAction<TValue>>
  clearDraft: () => void
  apply: () => void
  close: () => void
}

export interface IFilterControlProps<TValue> {
  id?: string
  value: TValue
  onChange: (value: TValue) => void
  getEmptyValue: (value: TValue) => TValue
  isEmpty: (value: TValue) => boolean
  renderButtonContent: (args: IFilterControlButtonContentArgs<TValue>) => ReactNode
  children: (args: IFilterControlContentArgs<TValue>) => ReactNode
  disabled?: boolean
  applyText?: string
  clearText?: string
  width?: number | string
  minWidth?: number | string
  maxWidth?: number | string
  maxBodyHeight?: number | string
  isApplyDisabled?: (draftValue: TValue, value: TValue) => boolean
  bodyProps?: Omit<ComponentProps<'div'>, 'children'>
  buttonProps?: Omit<IButtonProps, 'children' | 'disabled' | 'icon' | 'id' | 'onClick' | 'shape' | 'type'>
  popoverProps?: Omit<IPopoverProps, 'children' | 'content' | 'onOpenChange' | 'open' | 'overlayInnerStyle' | 'trigger'>
}

/**
 * FilterControl provides the shared shell for filters that commit changes explicitly.
 * It owns the trigger button, popover layout, draft value, clear/apply actions, and
 * discard-on-close behavior while consumers define the value type, active/empty state,
 * trigger label, and filter-specific content.
 */
export const FilterControl = <TValue,>({
  id,
  value,
  onChange,
  getEmptyValue,
  isEmpty,
  renderButtonContent,
  children,
  disabled = false,
  applyText = 'Apply',
  clearText = 'Clear',
  width,
  minWidth = 240,
  maxWidth = 420,
  maxBodyHeight,
  isApplyDisabled,
  bodyProps,
  buttonProps,
  popoverProps,
}: IFilterControlProps<TValue>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [draftValue, setDraftValue] = useState(value)
  const isPopoverOpen = isOpen && !disabled
  const displayedDraftValue = isPopoverOpen ? draftValue : value
  const isActive = !isEmpty(value)

  const close = useCallback(() => {
    setDraftValue(value)
    setIsOpen(false)
  }, [value])

  useEffect(() => {
    if (!disabled || !isOpen) return

    // Disabling an open control should behave like closing it, including discarding draft state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    close()
  }, [close, disabled, isOpen])

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (disabled) return

      if (nextOpen) {
        setDraftValue(value)
        setIsOpen(true)
        return
      }

      close()
    },
    [close, disabled, value],
  )

  const clearDraft = useCallback(() => {
    setDraftValue(getEmptyValue(value))
  }, [getEmptyValue, value])

  const apply = useCallback(() => {
    onChange(draftValue)
    setIsOpen(false)
  }, [draftValue, onChange])

  const shouldDisableApply = isApplyDisabled?.(draftValue, value) ?? false

  const renderArgs = useMemo(
    () => ({
      value,
      draftValue: displayedDraftValue,
      isOpen: isPopoverOpen,
      isActive,
      setDraftValue,
      clearDraft,
      apply,
      close,
    }),
    [apply, clearDraft, close, displayedDraftValue, isActive, isPopoverOpen, value],
  )

  const content = (
    <Flex
      vertical
      style={{
        width,
        minWidth,
        maxWidth,
      }}>
      <div
        {...bodyProps}
        style={{
          maxHeight: maxBodyHeight,
          overflowY: maxBodyHeight ? 'auto' : undefined,
          ...bodyProps?.style,
        }}>
        {children(renderArgs)}
      </div>
      <Flex
        align="center"
        justify="flex-end"
        gap={SizeSm}
        style={{
          borderTop: `${LineWidth} solid ${ColorBorderSecondary}`,
          padding: `${PaddingXs} ${PaddingSm} ${PaddingXxs} ${PaddingSm}`,
        }}>
        <Button
          id={id ? `${id}-clear-button` : undefined}
          type="text"
          size="middle"
          disabled={isEmpty(draftValue)}
          onClick={clearDraft}>
          {clearText}
        </Button>
        <Button
          id={id ? `${id}-apply-button` : undefined}
          type="primary"
          size="middle"
          disabled={shouldDisableApply}
          onClick={apply}>
          {applyText}
        </Button>
      </Flex>
    </Flex>
  )

  return (
    <Popover
      arrow={false}
      align={{ offset: [0, 16] }}
      placement="bottomLeft"
      trigger="click"
      {...popoverProps}
      overlayInnerStyle={{ padding: 0 }}
      open={isPopoverOpen}
      onOpenChange={handleOpenChange}
      content={content}>
      <Button
        {...buttonProps}
        id={id}
        aria-expanded={isPopoverOpen}
        aria-haspopup="dialog"
        disabled={disabled}
        shape="default"
        type={isPopoverOpen || isActive ? 'primary' : 'default'}>
        <Flex align="center" gap={SizeSm}>
          <Typography.Text style={{ color: 'inherit' }}>
            {renderButtonContent({ value, draftValue: displayedDraftValue, isOpen: isPopoverOpen, isActive })}
          </Typography.Text>
          <RoktChevronDown style={{ height: SizeMd, width: SizeMd }} />
        </Flex>
      </Button>
    </Popover>
  )
}
