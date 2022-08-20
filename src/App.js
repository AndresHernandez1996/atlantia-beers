// Dependencies
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Layout
import { Layout } from "antd"
import Navbar from "./Layout/Navbar"

// Components
import PriceEvolution from "./components/PriceEvolution"
import PresenceByProduct from "./components/PresenceByProduct"
import ComparativeAnalytics from "./components/ComparativeAnalytics"
import AtlantiaBeers from "./components/AtlantiaBeers"
import LayoutFooter from "./Layout/LayoutFooter"

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Navbar />
          <Route path="/price-evolution">
            <PriceEvolution />
          </Route>
          <Route path="/presence-by-product">
            <PresenceByProduct />
          </Route>
          <Route path="/comparative-analytics">
            <ComparativeAnalytics />
          </Route>
          <Route path="/Home">
            <AtlantiaBeers />
          </Route>
          <LayoutFooter />
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
