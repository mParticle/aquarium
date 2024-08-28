import React from 'react'
import { Center, Flex, Icon } from 'src/components'
import { type SuiteLink, type SuiteLinks } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import type { IconNames } from 'src/types/icons'

interface ISuiteSelectorSuiteLinkProps {
  link: SuiteLink
  onLinkClick: (link: SuiteLink) => void
  unauthorizedLinks?: SuiteLinks[]
  activeLink: SuiteLinks
}

const elementNameMap: Record<SuiteLinks, string> = {
  oversight: 'Oversight',
  dataPlatform: 'Data Platform',
  customer360: 'Customer 360',
  predictions: 'Predictions',
  analytics: 'Analytics',
  segmentation: 'Segmentation',
} as const

const elementIconMap: Record<SuiteLinks, IconNames> = {
  oversight: 'oversight',
  dataPlatform: 'dataPlatform',
  customer360: 'C360',
  predictions: 'predictions',
  analytics: 'analytics',
  segmentation: 'segmentation',
} as const

export function SuiteSelectorSuiteLink(props: ISuiteSelectorSuiteLinkProps) {
  const getLinkClass = (link: SuiteLink): string => {
    const isActiveClass = props.activeLink === link.linkId ? ' suiteSelector__link--active' : ''
    const isUnauthorizedClass = props.unauthorizedLinks?.includes(link.linkId) ? ' suiteSelector__link--disabled' : ''
    const linkStateClass = isActiveClass || isUnauthorizedClass

    return `suiteSelector__link ${linkStateClass} `
  }

  const handleContainerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    props.onLinkClick(props.link)
  }

  return (
    <>
      <div onClick={handleContainerClick} className={getLinkClass(props.link)}>
        <Flex vertical align="center" gap="small">
          <NavigationIcon icon={renderLogo(elementIconMap[props.link.linkId])} label="" hideLabel />
          {elementNameMap[props.link.linkId]}
        </Flex>
      </div>
    </>
  )

  function renderLogo(name: IconNames) {
    return (
      <Center vertical className="suiteSelector__suiteLogo">
        <Icon name={name} size="md" color="brand" variant="duo-tone" />
      </Center>
    )
  }
}
