import React, { useState, useEffect } from 'react'
import Query from 'components/Pokedex/Query/Query'
import Table from 'components/shared/Table/Table'
import PokedexRow from 'components/Pokedex/PokedexRow/PokedexRow'

function Pokedex() {
  const [ loading, setLoading ] = useState(true);
  const [ pokemon, setPokemon ] = useState([]);

  useEffect(() => {
    fetch('/pokemon')
      .then(response =>
        response.json()
      )
      .then(data => {
        setLoading(false);
        setPokemon(data)
      })
  }, []);

  return (
    <>
      <Query />
      <Table
        columns={[
          '',
          'Name',
          'Type',
          'Ability',
          'HP',
          'Attack',
          'Defense',
          'Special Attack',
          'Special Defense',
          'Speed',
          'Total'
        ]}
        loading={loading}
      >
        {
          pokemon.map((pokemon, index) =>
            <PokedexRow key={pokemon.id} index={index} pokemon={pokemon} />
          )
        }
      </Table>
    </>
  )
}

export default Pokedex
