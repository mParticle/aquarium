import { Center } from 'src/components'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'

export function SuiteLogo(props: IGlobalNavigationLogo) {
  return (
    <Center vertical className="globalNavigation__suiteLogo">
      <NavigationIcon icon={props.icon} label="" hideLabel={true} className="globalNavigation__icon--suiteLogo" />
      {props.label}
      <div className="globalNavigation__divider" />
    </Center>
  )
}