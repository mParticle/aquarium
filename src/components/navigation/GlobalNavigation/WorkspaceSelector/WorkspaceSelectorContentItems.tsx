import { type IWorkspaceSelectorDisplayItem } from 'src/components'

type WorkspaceSelectorContentItemsProps = {
  menuItems: IWorkspaceSelectorDisplayItem[]
}
export function WorkspaceSelectorContentItems({ menuItems }: WorkspaceSelectorContentItemsProps) {
  return (
    <ul className="workspaceSelector__itemsList">
      {menuItems.map(item => (
        <li key={item.key} className={item.className} onClick={item.onClick}>
          {item.label}
        </li>
      ))}
    </ul>
  )
}
