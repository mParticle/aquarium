import './suite-selector.css'
import { ConfigProvider } from 'antd'
import React from 'react'
import { Button, Col, Flex, Row } from 'src/components'
import {
  type ISuiteSelectorOptions,
  type SuiteLink,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { SuiteSelectorSuiteLink } from 'src/components/navigation/GlobalNavigation/SuiteSelector/SuiteSelectorSuiteLink'

type ISuiteSelectorContentProps = ISuiteSelectorOptions

export function SuiteSelectorContent(props: ISuiteSelectorContentProps) {
  const handleLinkClick = (link: SuiteLink): void => {
    const isLinkUnauthorized = props.unauthorizedLinks?.includes(link.linkId)

    if (link) {
      if (isLinkUnauthorized) props.onUnauthorizedClick?.(link)
      else props.onLinkClick(link)
    }
  }

  return (
    <ConfigProvider>
      <div className="u-padding-xxs">
        <Row gutter={[0, 4]} className="suiteSelector__content">
          {props.links.map(link => (
            <Col span={8} key={link.linkId}>
              <SuiteSelectorSuiteLink
                link={link}
                unauthorizedLinks={props.unauthorizedLinks}
                activeLink={props.activeLink}
                onLinkClick={() => {
                  handleLinkClick(link)
                }}
              />
            </Col>
          ))}
        </Row>

        {renderOverviewButton()}
      </div>
    </ConfigProvider>
  )

  function renderOverviewButton() {
    return (
      <>
        <Flex align="center" justify="start">
          <Button type="primary" href={props.overviewHref || '/'}>
            Go to Overview
          </Button>
        </Flex>
      </>
    )
  }
}
