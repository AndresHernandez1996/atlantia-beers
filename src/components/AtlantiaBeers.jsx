import React from "react"
import ComparativeAnalytics from "./ComparativeAnalytics"
import PresenceByProduct from "./PresenceByProduct"
import PriceEvolution from "./PriceEvolution"

const AtlantiaBeers = () => {
  return (
    <>
      <PriceEvolution />
      <PresenceByProduct />
      <ComparativeAnalytics />
    </>
  )
}

export default AtlantiaBeers
