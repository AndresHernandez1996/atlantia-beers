import React from "react"
import { Col, Row, Typography } from "antd"

// Components
import ComparativeAnalytics from "./ComparativeAnalytics"
import PresenceByProduct from "./PresenceByProduct"
import PriceEvolution from "./PriceEvolution"

const { Title } = Typography

const AtlantiaBeers = () => {
  return (
    <>
      <Title level={2} className="my-1">
        General Performance Analysis
      </Title>
      <Row gutter={[20, 20]} className="mb-1">
        <Col xl={15} md={12} sm={24} xs={24}>
          <PriceEvolution />
        </Col>
        <Col xl={9} md={12} sm={24} xs={24}>
          <PresenceByProduct />
        </Col>
      </Row>
      <Row>
        <Col xl={24} md={24} xs={24}>
          <ComparativeAnalytics />
        </Col>
      </Row>
    </>
  )
}

export default AtlantiaBeers
