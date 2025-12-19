import { type IWorkspaceSelectorDisplayItem, List } from 'src/components'
import VirtualList from '@rc-component/virtual-list'

type WorkspaceSelectorContentItemsProps = {
  menuItems: IWorkspaceSelectorDisplayItem[]
}

const CONTAINER_HEIGHT = 324
const ITEM_HEIGHT = 20

export function WorkspaceSelectorContentItems({ menuItems }: WorkspaceSelectorContentItemsProps) {
  return (
    <List className="workspaceSelector__itemsList">
      <VirtualList data={menuItems} height={CONTAINER_HEIGHT} itemHeight={ITEM_HEIGHT} itemKey="key">
        {item => (
          <li key={item.key} className={item.className} onClick={item.onClick}>
            {item.label}
          </li>
        )}
      </VirtualList>
    </List>
  )
}
