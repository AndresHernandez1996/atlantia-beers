//Dependencies
import React, { useState, useEffect } from "react"
import Chart from "react-apexcharts"

// Utils
import requestApi from "../utils/requestApi"

// Constants
import { apiMatrix } from "../commons/constants"

//Entities
import PresenceProductIn from "../Entities/PresenceProductIn"

import { Card, Col, Row, Typography } from "antd"
const { Title } = Typography

const PresenceByProduct = () => {
  const [presenceData, setPresenceData] = useState([])
  const [series, setSeries] = useState([])
  const [options, setOptions] = useState({})

  useEffect(() => {
    requestApi(apiMatrix.presenceShareChart, setPresenceData)
  }, [])

  useEffect(() => {
    const priceEvolutionIn = new PresenceProductIn({ data: presenceData })
    setSeries(priceEvolutionIn.series)
    setOptions(priceEvolutionIn.options)
  }, [presenceData])

  return (
    <>
      <Title level={3}>Presence Share By Product</Title>
      <Card bordered={false}>
        <Row justify="center" align="middle">
          <Col>
            <Chart options={options} series={series} type="pie" width={380} />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default PresenceByProduct
