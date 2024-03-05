import 'src/utils/utils.css'
import './workspace-selector.css'
import {
  Avatar,
  type INavigationAccount,
  type INavigationOrg,
  type INavigationWorkspace,
  type IWorkspaceSelectorDisplayItem,
  Popover,
} from 'src/components'
import { useRef, useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { debounce } from 'src/utils/utils'
import { getInitials } from 'src/utils/utils'

// Need to make our Input component comply with forwardRef to be able to import it from src/components
// Couldn't make it work as of right now
import { Input, type InputRef } from 'antd'
import { WorkspaceNoResults } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceNoResults'
import { WorkspaceSignout } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSignout'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
  signoutOptions?: {
    label?: string
    onSignout: () => void
  }
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const inputRef = useRef<InputRef>(null)

  const [currentFilteredOrgs, setCurrentFilteredOrgs] = useState<INavigationOrg[]>(props.orgs)
  useEffect(() => {
    // since we are setting state from props, when the props change be sure to update the state
    setCurrentFilteredOrgs(props.orgs)
  }, props.orgs)

  const setCurrentFilteredOrgsDebounced = useCallback(debounce(setCurrentFilteredOrgs, 200), [])

  const menuItems: IWorkspaceSelectorDisplayItem[] = useMemo(
    () => generateDisplayItems(/* currentFilteredOrgs */),
    [currentFilteredOrgs],
  )

  const hasNoResults = !!searchTerm && !currentFilteredOrgs.length

  // todo: this probably doesnt need to be calculated on every render
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
    .find(workspaceCandidate => workspaceCandidate.isActive)!

  // This seems to be the only way of consistenly focusing the input on the first open
  // We should find a better way to do this and not rely on setTimout
  const focusOnInput = (open: boolean) => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus({
          cursor: 'all',
        })
      }, 0)
    }
  }

  return (
    <Popover
      arrow={false}
      placement="right"
      // Can't seem to find a way to access it via className
      overlayInnerStyle={{ padding: 4 }}
      overlayClassName="workspaceSelector__popover"
      onOpenChange={focusOnInput}
      afterOpenChange={focusOnInput}
      content={
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

          {hasNoResults ? (
            <WorkspaceNoResults />
          ) : (
            <ul className="workspaceSelector__itemsList">
              {menuItems.map(item => (
                <li key={item.key} className={item.className} onClick={item.onClick}>
                  {item.label}
                </li>
              ))}
            </ul>
          )}

          <WorkspaceSignout signoutOptions={props.signoutOptions} />
        </div>
      }
    >
      <div className="globalNavigation__item workspaceSelector__menuItem">
        <Avatar className="workspaceSelector__avatar">{getInitials(activeWorkspace?.label)}</Avatar>
      </div>
    </Popover>
  )

  function generateDisplayItems(): IWorkspaceSelectorDisplayItem[] {
    const items = currentFilteredOrgs.reduce<IWorkspaceSelectorDisplayItem[]>((total, org) => {
      total.push({
        type: 'org',
        className: 'workspaceSelector__orgName' + (org.label ? '' : ' u-display-none'),
        label: org.label,
        id: org.id,
        key: `${org.id}_${org.label}`,
        accounts: org.accounts,
        workspaces: org.accounts.flatMap(account => account.workspaces),
      })

      org.accounts.forEach(account => {
        total.push({
          type: 'account',
          className: 'workspaceSelector__accountName' + (account.label ? '' : ' u-display-none'),
          label: account.label,
          id: account.id,
          key: `${account.id}_${account.label}`,
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
            key: `${workspace.id}_${workspace.label}`,
            onClick: workspace.onClick,
          })
        })
      })

      return total
    }, [])

    // prevent attributes to end up in the HTML
    return items.map(item => ({
      type: item.type,
      className: item.className,
      label: item.label,
      id: item.id,
      key: item.key,
      onClick: item.onClick,
    }))
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
}