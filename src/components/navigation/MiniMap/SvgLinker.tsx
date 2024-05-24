import React, { Children, ReactElement, useCallback } from 'react'
import './miniMap.css'

export interface ISvgLink {
  elementId: string
  route: string
  variant: 'regular' | 'black' | 'drop-shadow'
}

interface ISvgLinkerProps {
  buttons: ISvgLink[]
  children: React.ReactNode
  onLinkClick: (route: string) => void
  isAuthorizedRoute: (route: string) => boolean
}

export const SvgLinker: React.FC<ISvgLinkerProps> = ({ buttons, children, onLinkClick, isAuthorizedRoute }) => {
  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLElement
      const href = target.closest('a')?.getAttribute('href')
      if (href) {
        const route = href.substring(1)
        onLinkClick(route)
      }
    },
    [onLinkClick],
  )

  const wrapButtonsIntoLinks = (parent: React.ReactNode): React.ReactNode => {
    const wrapElement = (element: ReactElement): ReactElement => {
      if (element.type === 'svg') {
        const wrappedSvgContent = Children.map(element.props.children, child => {
          if (!React.isValidElement(child)) return child
          return wrapElement(child)
        })

        return React.cloneElement(element, { children: wrappedSvgContent })
      } else {
        const id = element.props.id
        if (id) {
          const button = buttons.find(b => b.elementId === id)
          if (button) {
            return (
              <a
                key={id}
                href={`/${button.route}`}
                className={`svg-linker-root__button svg-linker-root__button--${button.variant}${
                  isAuthorizedRoute(button.route) ? '' : ' svg-linker-root__button--disabled'
                }`}
                onClick={e => {
                  e.preventDefault()
                  if (isAuthorizedRoute(button.route)) {
                    onLinkClick(button.route)
                  } else {
                    alert('You are not authorized to access this page.')
                  }
                }}>
                {element}
              </a>
            )
          }
        }
        if (element.props.children) {
          const wrappedChildren = Children.map(element.props.children, child => {
            if (!React.isValidElement(child)) return child
            return wrapElement(child)
          })
          return React.cloneElement(element, { children: wrappedChildren })
        }
        return element
      }
    }

    return Children.map(parent, child => {
      if (!React.isValidElement(child)) return child
      return wrapElement(child as ReactElement)
    })
  }

  return <div onClick={handleContainerClick}>{wrapButtonsIntoLinks(children)}</div>
}

export default SvgLinker
