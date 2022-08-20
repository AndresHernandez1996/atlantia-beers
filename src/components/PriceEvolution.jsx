//Dependencies
import React, { useState, useEffect } from "react"
import Chart from "react-apexcharts"

// Utils
import requestApi from "../utils/requestApi"

// Constants
import { apiMatrix } from "../commons/constants"

//Entities
import PriceEvolutionIn from "../Entities/PriceEvolutionIn"

import { Card, Typography } from "antd"
const { Title } = Typography

const PriceEvolution = () => {
  const [priceData, setPriceData] = useState([])
  const [series, setSeries] = useState([])
  const [options, setOptions] = useState({})

  useEffect(() => {
    requestApi(apiMatrix.priceEvolutionChart, setPriceData)
  }, [])

  useEffect(() => {
    const priceEvolutionIn = new PriceEvolutionIn({ data: priceData })
    setSeries(priceEvolutionIn.series)
    setOptions(priceEvolutionIn.options)
  }, [priceData])

  return (
    <>
      <Title level={3}>Price Evolution</Title>
      <Card bordered={false}>
        <Chart options={options} series={series} type="area" height={350} />
      </Card>
    </>
  )
}

export default PriceEvolution
