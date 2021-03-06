import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'components/Home/Home'
import Pokedex from 'components/Pokedex/Pokedex'
import TypeChart from 'components/TypeChart/TypeChart'
import AbilityList from 'components/AbilityList/AbilityList'
import MoveList from 'components/MoveList/MoveList'
import EvolutionList from 'components/EvolutionList/EvolutionList'
import VoltorbFlip from 'components/VoltorbFlip/VoltorbFlip'

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/pokedex' exact component={Pokedex} />
      <Route path='/type_chart' exact component={TypeChart} />
      <Route path='/ability_list' exact component={AbilityList} />
      <Route path='/move_list' exact component={MoveList} />
      <Route path='/evolution_list' exact component={EvolutionList} />
      <Route path='/voltorb_flip' exact component={VoltorbFlip} />
    </Switch>
  </Router>
)
