import 'src/utils/utils.css'
import './workspace-selector.css'
import { Avatar } from 'src/components'
import { Menu } from 'src/components'
import { type IMenuProps } from 'src/components'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type IWorkspaceSelectorDisplayItem } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationAccount } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationWorkspace } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type MenuItemType } from 'src/components/navigation/Menu/Menu'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useRef } from 'react'
import { debounce } from 'src/utils/utils'
import { getInitials } from 'src/utils/utils'
import { WorkspaceSearchLabel } from 'src/components/navigation/GlobalNavigation/WorkspaceSearchLabel'
import { WorkspaceSignoutLabel } from 'src/components/navigation/GlobalNavigation/WorkspaceSignoutLabel'
import { WorkspaceInputLabel } from 'src/components/navigation/GlobalNavigation/WorkspaceInputLabel'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
  signoutOptions?: {
    label?: string
    onSignout: () => void
  }
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const [currentFilteredOrgs, setCurrentFilteredOrgs] = useState<INavigationOrg[]>(props.orgs)
  useEffect(() => {
    // since we are setting state from props, when the props change be sure to update the state
    setCurrentFilteredOrgs(props.orgs)
  }, props.orgs)

  const setCurrentFilteredOrgsDebounced = useCallback(debounce(setCurrentFilteredOrgs, 200), [])

  const menuItems: IWorkspaceSelectorDisplayItem[] = useMemo(
    () => generateDisplayItems(/* currentFilteredOrgs */),
    currentFilteredOrgs,
  )

  // todo: this probably doesnt need to be calculated on every render
  const activeWorkspace: INavigationWorkspace = props.orgs
    .flatMap<INavigationWorkspace>(org => {
      let flattenedSelectors: INavigationWorkspace[] = []

      const { accounts } = org
      if (accounts) {
        const workspaces = accounts.flatMap(({ workspaces }) => workspaces)
        flattenedSelectors = flattenedSelectors.concat(workspaces)
      }

      return flattenedSelectors
    })
    .find(workspaceCandidate => (workspaceCandidate as INavigationWorkspace).isActive) as INavigationWorkspace

  const items: IMenuProps['items'] = [
    {
      key: 'WorkspaceSelector',
      icon: <Avatar className="workspaceSelector__avatar">{getInitials(activeWorkspace?.label)}</Avatar>,
      popupClassName: 'workspaceSelector',
      children: createMenuChildren(),
    },
  ]

  return (
    <Menu
      // openKeys={['WorkspaceSelector']} // testing only
      className="globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector"
      items={items}
      onOpenChange={clearSearch}
      expandIcon={null}
    />
  )

  function generateDisplayItems(): IWorkspaceSelectorDisplayItem[] {
    return currentFilteredOrgs.reduce<IWorkspaceSelectorDisplayItem[]>((total, org) => {
      total.push({
        type: 'org',
        className: 'workspaceSelector__orgName' + (org.label ? '' : ' u-display-none'),
        label: org.label,
        id: org.id,
        key: org.id,
        accounts: org.accounts, // todo: these are ending up in the html as attributes..
        workspaces: org.accounts.flatMap(account => account.workspaces),
      })

      org.accounts.forEach(account => {
        total.push({
          type: 'account',
          className: 'workspaceSelector__accountName' + (account.label ? '' : ' u-display-none'),
          label: account.label,
          id: account.id,
          key: account.id,
          workspaces: account.workspaces,
        })

        account.workspaces.forEach(workspace => {
          total.push({
            type: 'workspace',
            className:
              'workspaceSelector__workspaceName' +
              (workspace.isActive ? ' workspaceSelector__workspaceName--active' : ''),
            label: workspace.label,
            id: workspace.id,
            key: workspace.id,
            onClick: workspace.onClick,
          })
        })
      })

      return total
    }, [])
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    const newSearchTerm = e.target.value.toLowerCase()
    setSearchTerm(newSearchTerm)

    if (newSearchTerm) {
      const filteredOrgs = getFilteredOrgs()
      setCurrentFilteredOrgsDebounced(filteredOrgs)
    } else {
      // reset list immediately so it feels faster
      setCurrentFilteredOrgs(props.orgs)
    }

    function getFilteredOrgs(): INavigationOrg[] {
      return props.orgs.reduce<INavigationOrg[]>((total, org) => {
        if (isHit(org)) {
          total.push(org)
        } else {
          const workingOrg: INavigationOrg = { ...org }
          workingOrg.accounts = []
          org.accounts.forEach(account => {
            const workingAccount = { ...account }
            workingAccount.workspaces = []

            if (isHit(account)) {
              workingOrg.accounts.push(account)
            } else {
              account.workspaces.forEach(workspace => {
                if (isHit(workspace)) {
                  workingAccount.workspaces.push(workspace)
                }
              })
              if (workingAccount.workspaces.length) {
                workingOrg.accounts.push(workingAccount)
              }
            }
          })

          if (workingOrg.accounts.length) total.push(workingOrg)
        }

        return total
      }, [])

      function isHit(item: INavigationOrg | INavigationAccount | INavigationWorkspace): boolean {
        return (
          (!!item.label && item.label.toString().toLowerCase().includes(newSearchTerm)) ||
          (!!item.id && item.id.toString().toLowerCase().includes(newSearchTerm))
        )
      }
    }
  }

  function clearSearch(): void {
    setSearchTerm('')
    setCurrentFilteredOrgs(props.orgs)
  }

  function createMenuChildren(): (MenuItemType | null)[] {
    const searchInput: MenuItemType = {
      key: 'search',
      className: 'workspaceSelector__search',
      label: <WorkspaceInputLabel onSearch={onSearch} searchTerm={searchTerm} />,
    }

    const signoutButton = useRef<MenuItemType>({
      key: 'signout',
      className: 'workspaceSelector__signout',
      label: <WorkspaceSignoutLabel signoutOptions={props.signoutOptions} />,
    })

    const noResultsEl: MenuItemType = {
      key: 'no-results',
      className: 'workspaceSelector__noResults',
      label: <WorkspaceSearchLabel />,
    }

    const hasNoResults = !!searchTerm && !currentFilteredOrgs.length

    return [
      ...(hasNoResults ? [noResultsEl] : menuItems),
      searchInput,
      props.signoutOptions ? signoutButton.current : null,
    ]
  }
}