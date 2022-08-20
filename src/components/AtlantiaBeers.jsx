import React from "react"
import { Button, Typography } from "antd"

// Utils
import requestApi from "../utils/requestApi"

// Components
import ComparativeAnalytics from "./ComparativeAnalytics"
import PresenceByProduct from "./PresenceByProduct"
import PriceEvolution from "./PriceEvolution"

const { Title } = Typography

const AtlantiaBeers = () => {
  const callApi = () =>
    requestApi(
      "https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/"
    )

  return (
    <>
      <Title level={2}>General Performance Analysis</Title>
      <Button onClick={() => callApi()}>Click</Button>
      <PriceEvolution />
      <PresenceByProduct />
      <ComparativeAnalytics />
    </>
  )
}

export default AtlantiaBeers
