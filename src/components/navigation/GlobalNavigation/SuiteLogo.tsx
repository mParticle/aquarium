import { Center } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { type IBaseGlobalNavigationItem } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

export interface IGlobalNavigationLogoProps extends IBaseGlobalNavigationItem {
  onSuiteLogoClick: () => void
}

export function SuiteLogo(props: IGlobalNavigationLogoProps) {
  return (
    <Center vertical className="globalNavigation__suiteLogo" onClick={props.onSuiteLogoClick}>
      <NavigationIcon icon={props.icon} label="" hideLabel className="globalNavigation__icon--suiteLogo" />
      {props.label}
    </Center>
  )
}