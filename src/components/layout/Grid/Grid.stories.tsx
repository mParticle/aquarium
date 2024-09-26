import { type Meta, type StoryObj } from '@storybook/react'
import { type Grid, Row, Col } from 'antd'

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  // component: Grid,

  args: {},
}
export default meta

type Story = StoryObj<typeof Grid>

const divStyle: React.CSSProperties = {
  background: '#0092ff',
  padding: '8px 0',
}

export const Primary: Story = {
  render: () => (
    <>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={divStyle}>col-6</div>
        </Col>
      </Row>
    </>
  ),
}
