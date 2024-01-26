import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'src/components'

export function NavigationIcon({ icon }: { icon: IconDefinition }) {
  return (
    <>
      <Icon icon={icon} color="gray" border className="globalNavigation__icon" />
    </>
  )
}