import { Dropdown as AntDropdown } from 'antd'
import { type DropdownProps as AntDropdownProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IDropdownProps extends AntDropdownProps {}
/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * Please use the Select component instead. You can find more details here:
 * https://mparticle.github.io/aquarium/?path=/docs/components-data-entry-select--documentation
 */
export const Dropdown = (props: IDropdownProps) => {
  return (
    <ConfigProvider>
      <AntDropdown {...props}>{props.children}</AntDropdown>
    </ConfigProvider>
  )
}

Dropdown.Button = AntDropdown.Button
