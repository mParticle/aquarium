import 'src/utils/utils.css'
import './workspace-selector.css'
import { Avatar, List, Popover } from 'src/components'
import { Input } from 'src/components'
import { Menu } from 'src/components'
import { type IMenuProps } from 'src/components'
import { Center } from 'src/components'
import { Button } from 'src/components'
import { Empty } from 'src/components'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type IWorkspaceSelectorDisplayItem } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationAccount } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationWorkspace } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { debounce } from 'src/utils/utils'
import { getInitials } from 'src/utils/utils'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
  signoutOptions?: {
    label?: string
    onSignout: () => void
  }
}

const WorkspaceSearchLabel = () => (
  <Center>
    <Empty description="No results found" imageStyle={{ height: '60px' }}></Empty>
  </Center>
)
const WorkspaceSignoutLabel = ({ signoutOptions }: { signoutOptions: IWorkspaceSelectorProps['signoutOptions'] }) => (
  <Button
    className="workspaceSelector__signoutButton"
    type="primary"
    onClick={_e => {
      signoutOptions?.onSignout()
    }}
  >
    {signoutOptions?.label ?? 'Sign Out of mParticle'}
  </Button>
)

const WorkspaceInputLabel = ({
  onSearch,
  searchTerm,
}: {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
}) => (
  <>
    <Input
      placeholder="Search"
      className="workspaceSelector__searchInput"
      onChange={onSearch}
      value={searchTerm}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
    />
  </>
)

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

  // const searchInput: MenuItemType = {
  //   key: 'search',
  //   className: 'workspaceSelector__search',
  //   label: <WorkspaceInputLabel onSearch={onSearch} searchTerm={searchTerm} />,
  // }
  //
  // const signoutButton = useRef<MenuItemType>({
  //   key: 'signout',
  //   className: 'workspaceSelector__signout',
  //   label: <WorkspaceSignoutLabel signoutOptions={props.signoutOptions} />,
  // })
  //
  // const noResultsEl: MenuItemType = {
  //   key: 'no-results',
  //   className: 'workspaceSelector__noResults',
  //   label: <WorkspaceSearchLabel />,
  // }
  //
  // const hasNoResults = !!searchTerm && !currentFilteredOrgs.length

  // const menuChildren = [
  //   ...(hasNoResults ? [noResultsEl] : menuItems),
  //   searchInput,
  //   props.signoutOptions ? signoutButton.current : null,
  // ]

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

  // const items: IMenuProps['items'] = [
  //   {
  //     key: 'WorkspaceSelector',
  //     icon: <Avatar className="workspaceSelector__avatar">{getInitials(activeWorkspace?.label)}</Avatar>,
  //     popupClassName: 'workspaceSelector',
  //     children: menuChildren,
  //   },
  // ]

  return (
    <Popover
      placement="right"
      overlayInnerStyle={{ padding: 4 }}
      content={
        <div style={{ height: 400, width: 300 }}>
          <div className="workspaceSelector__search">
            <WorkspaceInputLabel onSearch={onSearch} searchTerm={searchTerm} />
          </div>

          <ul
            style={{
              listStyle: 'none',
              paddingLeft: 0,
              marginBlockStart: 0,
              overflowY: 'scroll',
              overflowX: 'auto',
              height: 350,
            }}
          >
            {menuItems.map(item => (
              <li
                key={item.key}
                className={item.className}
                onClick={() => {
                  if (item.onClick) item.onClick()
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <WorkspaceSignoutLabel signoutOptions={props.signoutOptions} />
        </div>
      }
    >
      <div className="workspaceSelector__avatarContainer">
        <Avatar className="workspaceSelector__avatar">{getInitials(activeWorkspace?.label)}</Avatar>
      </div>
    </Popover>
    // <Menu
    //   // openKeys={['WorkspaceSelector']} // testing only
    //   className="globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector"
    //   items={items}
    //   onOpenChange={clearSearch}
    //   expandIcon={null}
    // />
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

  function clearSearch(): void {
    setSearchTerm('')
    setCurrentFilteredOrgs(props.orgs)
  }
}
