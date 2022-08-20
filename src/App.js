// Dependencies
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import PriceEvolution from "./components/PriceEvolution"
import PresenceByProduct from "./components/PresenceByProduct"
import ComparativeAnalytics from "./components/ComparativeAnalytics"
import AtlantiaBeers from "./components/AtlantiaBeers"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/price-evolution">
          <PriceEvolution />
        </Route>
        <Route path="/presence-by-product">
          <PresenceByProduct />
        </Route>
        <Route path="/comparative-analytics">
          <ComparativeAnalytics />
        </Route>
        <Route path="/">
          <AtlantiaBeers />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
