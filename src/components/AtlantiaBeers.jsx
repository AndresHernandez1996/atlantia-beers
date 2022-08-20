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
      <Title level={2}>General Performance Analysis</Title>
      <Row gutter={[20, 20]}>
        <Col xl={16}>
          <PriceEvolution />
        </Col>
        <Col xl={8}>
          <PresenceByProduct />
        </Col>
        <Col xl={24}>
          <ComparativeAnalytics />
        </Col>
      </Row>
    </>
  )
}

export default AtlantiaBeers
