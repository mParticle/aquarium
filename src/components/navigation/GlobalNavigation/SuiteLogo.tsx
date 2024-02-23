import { Center } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { type IGlobalNavigationLogo } from "src/components/navigation/GlobalNavigation/GlobalNavigationItems";

export function SuiteLogo(props: IGlobalNavigationLogo) {
  return (
    <Center vertical className="globalNavigation__suiteLogo">
      <NavigationIcon icon={props.icon} label="" hideLabel={true} className="globalNavigation__icon--suiteLogo" />
      {props.label}
      <div className="globalNavigation__divider" />
    </Center>
  )
}