import { type ChangeEvent, type RefObject } from 'react'
import type { IWorkspaceSelectorProps } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'
import { Input, type InputRef, type IWorkspaceSelectorDisplayItem } from 'src/components'
import { WorkspaceSelectorContentItems } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelectorContentItems'
import { WorkspaceNoResults } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceNoResults'
import { WorkspaceSignout } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSignout'

type WorkspaceSelectorContentProps = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
  hasSearchInput: boolean
  inputRef: RefObject<InputRef>
  hasNoResults: boolean
  menuItems: IWorkspaceSelectorDisplayItem[]
  signoutOptions?: IWorkspaceSelectorProps['signoutOptions']
}

export function WorkspaceSelectorContent(props: WorkspaceSelectorContentProps) {
  const { onSearch, searchTerm, hasSearchInput, inputRef, hasNoResults, menuItems, signoutOptions } = props

  return (
    <div className="workspaceSelector__popoverContent">
      {hasSearchInput && (
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
      )}

      {hasNoResults ? <WorkspaceNoResults /> : <WorkspaceSelectorContentItems menuItems={menuItems} />}

      <WorkspaceSignout signoutOptions={signoutOptions} />
    </div>
  )
}
