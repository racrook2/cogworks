import React from 'react';
import PokedexRow from 'components/Pokedex/PokedexRow/PokedexRow'
import './Pokedex.scss'

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    fetch('/pokemon')
      .then(response =>
        response.json()
      )
      .then(data =>
        this.setState({ pokemon: data })
      )
  }

  render() {
    return (
      <table className='Pokedex'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Ability</th>
            <th>HP</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Special Attack</th>
            <th>Special Defense</th>
            <th>Speed</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.pokemon.map((pokemon, index) => {
              return (
                <PokedexRow key={pokemon.id} index={index} pokemon={pokemon} />
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Pokedex
