import React, { Children, ReactElement } from 'react'
import './miniMap.css'

export interface ISvgLink {
  elementId: string
  link: string
  variant?: 'regular' | 'black' | 'drop-shadow'
}

export interface ISvgLinkComplete extends ISvgLink {
  linkId: string
}

interface ISvgLinkerProps {
  links: ISvgLinkComplete[]
  children: React.ReactNode
  onLinkClick: (link: string) => void
  unauthorizedButtons: string[]
}

export const SvgLinker = ({ links, children, onLinkClick, unauthorizedButtons = [] }: ISvgLinkerProps) => {
  const handleContainerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    const href = target.closest('a')?.getAttribute('href')
    if (href) {
      const link = href.substring(1)
      handleLinkClick(link)
    }
  }

  return <div onClick={handleContainerClick}>{wrapButtonsIntoLinks(children)}</div>

  function handleLinkClick(link: string) {
    const button = links.find(b => b.link === link)
    if (button && !unauthorizedButtons.includes(button.elementId)) {
      onLinkClick(link)
    }
  }

  function wrapButtonsIntoLinks(parent: React.ReactNode): React.ReactNode {
    const wrapElement = (element: ReactElement): ReactElement => {
      const { id, children } = element.props
      const button = id && links.find(b => b.linkId === id)

      if (button) {
        const isUnauthorized = unauthorizedButtons.includes(button.elementId)
        const className = `svg-linker-root__button svg-linker-root__button--${button.variant}${
          isUnauthorized ? ' svg-linker-root__button--disabled' : ''
        }`

        return (
          <a
            key={id}
            href={`/${button.link}`}
            className={className}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              handleLinkClick(button.link)
            }}>
            {element}
          </a>
        )
      }

      const wrappedChildren = Children.map(children, child =>
        React.isValidElement(child) ? wrapElement(child as ReactElement) : child,
      )

      return React.cloneElement(element, { children: wrappedChildren })
    }

    return Children.map(parent, child => (React.isValidElement(child) ? wrapElement(child as ReactElement) : child))
  }
}

export default SvgLinker
