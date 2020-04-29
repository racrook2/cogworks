import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'components/Home/Home'
import Pokedex from 'components/Pokedex/Pokedex'
import VoltorbFlip from 'components/VoltorbFlip/VoltorbFlip'

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/pokedex' exact component={Pokedex} />
      <Route path='/voltorb_flip' exact component={VoltorbFlip} />
    </Switch>
  </Router>
)
