import React from "react"
import { Link } from "react-router-dom"

const AtlantiaBeers = () => {
  return (
    <div>
      <h1>Hola</h1>
      <nav>
        <ul>
          <li>
            <Link to="/price-evolution">PriceEvolution</Link>
          </li>
          <li>
            <Link to="/presence-by-product">PresenceByProduct</Link>
          </li>
          <li>
            <Link to="/comparative-analytics">ComparativeAnalytics</Link>
          </li>
          <li>
            <Link to="/comparative-analytics">AtlantiaBeers home</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AtlantiaBeers
