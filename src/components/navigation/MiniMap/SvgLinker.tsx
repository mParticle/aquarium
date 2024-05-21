import React, { Children, ReactElement } from 'react'

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
  const wrapButtonsIntoLinks = (parent: React.ReactNode): React.ReactNode => {
    return Children.map(parent, child => {
      if (!React.isValidElement(child)) return child

      const childElement = child as ReactElement
      if (childElement.type === 'svg') {
        const svgContent = childElement.props.children
        const idsInSVG = findIdsInSvg(svgContent)
        console.log(svgContent, 'childElement')

        return idsInSVG.map((id: string) => {
          const button = buttons.find(b => b.elementId === id)
          if (button) {
            return (
              <a
                key={button.elementId}
                href={`/${button.route}`}
                className={`overview-map-root__button overview-map-root__button--${button.variant}`}>
                {React.cloneElement(childElement, { key: id })} {/* Clone SVG element with a unique key */}
              </a>
            )
          } else {
            return null
          }
        })
      } else {
        return child // Return non-SVG elements as is
      }
    })
  }

  const findIdsInSvg = (svgContent: React.ReactNode): string[] => {
    const ids: string[] = []
    Children.forEach(svgContent, child => {
      if (React.isValidElement(child)) {
        const childElement = child as ReactElement
        const id = childElement.props['id'] || childElement.props['id'] // Accessing 'id' attribute for SVG elements
        if (id) {
          ids.push(id)
        }
      }
    })
    return ids
  }

  return <div>{wrapButtonsIntoLinks(children)}</div>
}

export default SvgLinker
