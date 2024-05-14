import React, { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react'

export interface ISvgLink {
  elementId: string
  route: string
  variant: 'regular' | 'black' | 'drop-shadow'
}

interface ISvgLinkerProps {
  buttons: ISvgLink[]
  children: ReactElement
}

export const SvgLinker: React.FC<ISvgLinkerProps> = ({ buttons, children }) => {
  const wrapElementsIntoLinks = (element: ReactElement): ReactElement => {
    console.log(element, 'element')
    console.log(element.props.children, 'element.props.children')

    if (!element.props.children) return element

    const newChildren = Children.map(element.props.children, child => processChild(child))
    return cloneElement(element, {}, newChildren)
  }

  const processChild = (child: ReactNode): ReactNode => {
    if (!isValidElement(child)) return child

    console.log(child, 'child')

    if (isLinkableElement(child)) {
      console.log('Linkable element found:', child.props.id)
      return wrapElementWithLink(child)
    }

    if (hasChildren(child)) {
      console.log('Element has children:', child.props.children)
      return wrapElementsIntoLinks(child)
    }

    return child
  }

  const isLinkableElement = (child: ReactElement): child is ReactElement<{ id: string }> => {
    return typeof child.props.id === 'string'
  }

  const hasChildren = (child: ReactElement): boolean => {
    return !!child.props.children
  }

  const wrapElementWithLink = (child: ReactElement<{ id: string }>): ReactElement => {
    const link = buttons.find(btn => btn.elementId === child.props.id)
    if (!link) return child

    return (
      <a href={link.route} className={`svg-linker__link svg-linker__link--${link.variant}`} key={child.props.id}>
        {child}
      </a>
    )
  }

  return <>{wrapElementsIntoLinks(children)}</>
}
