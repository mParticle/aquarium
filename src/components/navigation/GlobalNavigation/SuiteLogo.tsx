import { Center } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

export function SuiteLogo(props: IGlobalNavigationLogo) {
  return (
    <Center vertical className="globalNavigation__suiteLogo" onClick={props.onSuiteLogoClick}>
      <NavigationIcon icon={props.icon} label="" hideLabel className="globalNavigation__icon--suiteLogo" />
      {props.label}
    </Center>
  )
}
