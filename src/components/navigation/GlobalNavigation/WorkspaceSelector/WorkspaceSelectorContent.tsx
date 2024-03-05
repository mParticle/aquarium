import { type ChangeEvent, type RefObject } from 'react'
import { Input, type InputRef } from 'antd'
import { WorkspaceSearchLabel } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceNoResults'
import { WorkspaceSignoutLabel } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSignout'
import type { IWorkspaceSelectorProps } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'
import type { IWorkspaceSelectorDisplayItem } from 'src/components'
import { WorkspaceSelectorContentItems } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelectorContentItems'

type WorkspaceSelectorContentProps = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
  inputRef: RefObject<InputRef>
  hasNoResults: boolean
  menuItems: IWorkspaceSelectorDisplayItem[]
  signoutOptions?: IWorkspaceSelectorProps['signoutOptions']
}

export function WorkspaceSelectorContent(props: WorkspaceSelectorContentProps) {
  const { onSearch, searchTerm, inputRef, hasNoResults, menuItems, signoutOptions } = props

  return (
    <div className="workspaceSelector__popoverContent">
      <div className="workspaceSelector__search">
        <Input
          placeholder="Search"
          className="workspaceSelector__searchInput"
          onChange={onSearch}
          value={searchTerm}
          ref={inputRef}
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
          }}
        />
      </div>

      {hasNoResults ? <WorkspaceSearchLabel /> : <WorkspaceSelectorContentItems menuItems={menuItems} />}

      <WorkspaceSignoutLabel signoutOptions={signoutOptions} />
    </div>
  )
}
