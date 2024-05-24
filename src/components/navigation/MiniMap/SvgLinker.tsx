import React, { Children, ReactElement } from 'react'
import './miniMap.css'

export interface ISvgLink {
  elementId: string
  route: string
  variant: 'regular' | 'black' | 'drop-shadow'
}

interface ISvgLinkerProps {
  buttons: ISvgLink[]
  children: React.ReactNode
}

export const SvgLinker: React.FC<ISvgLinkerProps> = ({ buttons, children }) => {
  console.log(children, 'children')

  const wrapButtonsIntoLinks = (parent: React.ReactNode): React.ReactNode => {
    const wrapElement = (element: ReactElement): ReactElement => {
      if (element.type === 'svg') {
        const idsInSVG = findIdsInSvg(element.props.children)
        console.log(idsInSVG, 'IDs in SVG')

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
            console.log(`Wrapping element with id: ${id} with link to ${button.route}`)
            return (
              <a
                key={id}
                href={`/${button.route}`}
                style={{ backgroundColor: 'red' }} // Inline style for testing
                className={`overview-map-root__button overview-map-root__button--${button.variant}`}>
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

  const findIdsInSvg = (svgContent: React.ReactNode): string[] => {
    const ids: string[] = []

    const searchIds = (node: React.ReactNode) => {
      Children.forEach(node, child => {
        if (React.isValidElement(child)) {
          const childElement = child as ReactElement
          const id = childElement.props.id
          if (id) {
            ids.push(id)
          }
          if (childElement.props.children) {
            searchIds(childElement.props.children)
          }
        }
      })
    }

    searchIds(svgContent)
    return ids
  }

  return <div>{wrapButtonsIntoLinks(children)}</div>
}

export default SvgLinker
