import { type INavigationAccount, type INavigationOrg } from 'src/components'

export function generateOrgs(orgs: number, accounts: number, workspaces: number): INavigationOrg[] {
  const finalOrgs: INavigationOrg[] = []

  for (let i = 0; i < orgs; i += 1) {
    const newOrg: INavigationOrg = {
      id: `org-${i}`,
      label: `Org ${i}`,
      accounts: [],
    }

    for (let j = 0; j < accounts; j += 1) {
      const newAccount: INavigationAccount = {
        id: `account-${i}-${j}`,
        label: `Account ${i}-${j}`,
        workspaces: [],
      }

      newOrg.accounts.push(newAccount)

      for (let k = 0; k < workspaces; k += 1) {
        newAccount.workspaces.push({
          id: `workspace-${i}-${j}-${k}`,
          label: `Workspace ${i}-${j}-${k}`,
          isActive: i === 0 && j === 0 && k === 0,
          onClick: () => {
            alert(`Selected Workspace ${i}-${j}-${k}`)
          },
        })
      }
    }

    finalOrgs.push(newOrg)
  }

  return finalOrgs
}
