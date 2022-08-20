import React from "react"
import { Col, Row, Layout } from "antd"

const { Footer } = Layout

const LayoutFooter = () => {
  return (
    <Footer>
      <Row justify="center">
        <Col>Atlantia Beers made by Andrés Hernández</Col>
      </Row>
    </Footer>
  )
}

export default LayoutFooter
