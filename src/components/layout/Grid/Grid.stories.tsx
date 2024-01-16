import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Grid, Row, Col } from "antd";
import React from "react";
import { Divider } from "antd";

const meta: Meta<typeof Grid> = {
  title: "Aquarium/Layout/Grid",
  // component: Grid,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Grid>


const divStyle: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

export const Primary: Story = {
  render: () => <>
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
  </>,
}; 