import React, { Children, ReactElement } from 'react'
import './miniMap.css'

export interface ISvgLink {
  elementId: string
  href: string
  variant?: 'regular' | 'black' | 'drop-shadow'
  isUnauthorized?: boolean
  isActive?: boolean
}

interface ISvgLinkerProps {
  links: ISvgLink[]
  children: React.ReactNode
  onLinkClick: (link: ISvgLink) => void
}

export const SvgLinker = (props: ISvgLinkerProps) => {
  const handleContainerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    const href = target.closest('a')?.getAttribute('href')
    const link = props.links.find(b => b.href === href)

    if (link) {
      props.onLinkClick(link)
    }
  }

  return (
    <div onClick={handleContainerClick} className="svg-linker__container">
      {wrapButtonsIntoLinks(props.children)}
    </div>
  )

  function wrapButtonsIntoLinks(parent: React.ReactNode): React.ReactNode {
    const wrapElement = (element: ReactElement): ReactElement => {
      const { id, children } = element.props
      const link = props.links.find(b => b.elementId === id)

      if (link) {
        const isActiveClass = link.isActive ? ' svg-linker-root__button--active' : ''
        const isUnauthorizedClass = link.isUnauthorized ? ' svg-linker-root__button--disabled' : ''
        const linkStateClass = isActiveClass || isUnauthorizedClass

        const className = `svg-linker-root__button svg-linker-root__button--${link.variant} ${linkStateClass} `

        return (
          <a key={id} href={link.href} className={className}>
            {element}
          </a>
        )
      }

      const wrappedChildren = wrapButtonsIntoLinks(children)

      return React.createElement(element.type, { ...element.props, children: wrappedChildren })
    }

    return Children.map(parent, child => (React.isValidElement(child) ? wrapElement(child as ReactElement) : child))
  }
}

export default SvgLinker
