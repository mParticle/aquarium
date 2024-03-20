import 'src/utils/utils.css'
import './workspace-selector.css'
import {
  Avatar,
  type IAvatarProps,
  type INavigationAccount,
  type INavigationOrg,
  type INavigationWorkspace,
  type IWorkspaceSelectorDisplayItem,
  Popover,
} from 'src/components'
import { Flex } from 'src/components'
import { CheckIcon } from 'src/components'
import React, { type ChangeEvent, useRef, useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { debounce, hasImageAtSrc } from 'src/utils/utils'
import { getInitials } from 'src/utils/utils'

// TODO: Need to make our Input component comply with forwardRef to be able to import it from src/components
// As soon as https://github.com/mParticle/aquarium/pull/123 is merged
import { type InputRef } from 'antd'
import { WorkspaceSelectorContent } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelectorContent'
import { useMount } from 'src/hooks/useMount'
import { PaddingXxs } from 'src/styles/style'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
  avatarOptions?: IAvatarProps
  signoutOptions?: {
    label?: string
    onSignout: () => void
  }
}

function moveToTheTop<T>(array: T[], index: number): T[] {
  return [array[index], ...array.slice(0, index), ...array.slice(index + 1)]
}

function sortOrgsByActiveWorkspace(orgs: INavigationOrg[]): INavigationOrg[] {
  const activeOrgIndex = orgs.findIndex(org =>
    org.accounts.find(account => account.workspaces.find(workspace => workspace.isActive)),
  )

  if (activeOrgIndex >= 0) {
    const activeOrg = orgs[activeOrgIndex]
    const activeAccountIndex = activeOrg.accounts.findIndex(account =>
      account.workspaces.find(workspace => workspace.isActive),
    )

    if (activeAccountIndex >= 0) {
      const activeAccount = activeOrg.accounts[activeAccountIndex]
      activeOrg.accounts = moveToTheTop(activeOrg.accounts, activeAccountIndex)

      const activeWorkspaceIndex = activeAccount.workspaces.findIndex(workspace => workspace.isActive)
      activeAccount.workspaces = moveToTheTop(activeAccount.workspaces, activeWorkspaceIndex)

      return moveToTheTop(orgs, activeOrgIndex)
    }
  }

  return orgs
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const inputRef = useRef<InputRef>(null)

  const sortedOrgs = useMemo(() => {
    return sortOrgsByActiveWorkspace(props.orgs)
  }, [props.orgs])

  const [currentFilteredOrgs, setCurrentFilteredOrgs] = useState<INavigationOrg[]>(sortedOrgs)

  const [hasImage, setHasImage] = useState<boolean>(false)

  useEffect(() => {
    // since we are setting state from props, when the props change be sure to update the state
    setCurrentFilteredOrgs(sortedOrgs)
  }, [sortedOrgs])

  useMount(() => {
    const avatarImageSrc = props.avatarOptions?.src ?? props.avatarOptions?.srcSet
    if (typeof avatarImageSrc === 'string') {
      void hasImageAtSrc(avatarImageSrc, setHasImage)
    }
  })

  const setCurrentFilteredOrgsDebounced = useCallback(debounce(setCurrentFilteredOrgs, 200), [])

  const hasNoResults = !!searchTerm && !currentFilteredOrgs.length

  const menuItems: IWorkspaceSelectorDisplayItem[] = useMemo(
    () => generateDisplayItems(/* currentFilteredOrgs */),
    [currentFilteredOrgs],
  )

  const activeWorkspace = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return sortedOrgs
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
  }, [sortedOrgs])

  const workspaceInitials = getInitials(activeWorkspace?.label)

  // This seems to be the only way of consistently focusing the input on the first open
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
      overlayInnerStyle={{ padding: PaddingXxs }}
      overlayClassName="workspaceSelector__popover"
      onOpenChange={focusOnInput}
      afterOpenChange={focusOnInput}
      content={
        <WorkspaceSelectorContent
          onSearch={onSearch}
          searchTerm={searchTerm}
          inputRef={inputRef}
          hasNoResults={hasNoResults}
          signoutOptions={props.signoutOptions}
          menuItems={menuItems}
        />
      }>
      <div className="globalNavigation__item workspaceSelector__menuItem">
        <Avatar {...props.avatarOptions} className="workspaceSelector__avatar">
          {getInitialsIfNoImage(hasImage, workspaceInitials)}
        </Avatar>
      </div>
    </Popover>
  )

  function getInitialsIfNoImage(hasImage: boolean, initials: string): string {
    return hasImage ? '' : initials
  }

  function generateDisplayItems(): IWorkspaceSelectorDisplayItem[] {
    return currentFilteredOrgs.reduce<IWorkspaceSelectorDisplayItem[]>((total, org) => {
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
            label: (
              <Flex justify="space-between" align="center">
                {workspace.label}
                {workspace.isActive && <CheckIcon className="workspaceSelector__activeIcon" />}
              </Flex>
            ),
            id: workspace.id,
            key: `${workspace.id}_${workspace.label}`,
            onClick: workspace.onClick,
            isActive: workspace.isActive,
          })
        })
      })

      return total
    }, [])
  }

  function onSearch(e: ChangeEvent<HTMLInputElement>): void {
    const newSearchTerm = e.target.value.toLowerCase()
    setSearchTerm(newSearchTerm)

    if (newSearchTerm) {
      const filteredOrgs = getFilteredOrgs()
      setCurrentFilteredOrgsDebounced(filteredOrgs)
    } else {
      // reset list immediately so it feels faster
      setCurrentFilteredOrgs(sortedOrgs)
    }

    function getFilteredOrgs(): INavigationOrg[] {
      return sortedOrgs.reduce<INavigationOrg[]>((total, org) => {
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
