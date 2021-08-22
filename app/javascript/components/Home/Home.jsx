import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <aside css={{ background: 'red' }}>
    <Link to='/pokedex'>Pokédex</Link>
    <Link to='/type_chart'>Type Chart</Link>
    <Link to='/ability_list'>Ability List</Link>
    <Link to='/move_list'>Move List</Link>
    <Link to='/evolution_list'>Evolution List</Link>
    <Link to='/voltorb_flip'>Voltorb Flip</Link>
  </aside>
);

export default Home;
