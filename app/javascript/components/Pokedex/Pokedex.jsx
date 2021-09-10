import React, { useState, useEffect } from 'react';
import QueryBuilder from 'components/Pokedex/QueryBuilder/QueryBuilder';
import Table from 'components/shared/Table/Table';
import PokedexRow from 'components/Pokedex/PokedexRow/PokedexRow';
import PageLayout from 'components/layout/PageLayout';

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

  const handleSubmit = (data) => {
    setLoading(true);

    fetch(`/pokemon?conditions=${JSON.stringify(data)}`)
      .then(response =>
        response.json()
      )
      .then(data => {
        setLoading(false);
        setPokemon(data)
      })
  };

  return (
    <PageLayout>
      <QueryBuilder handleSubmit={handleSubmit} />
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
    </PageLayout>
  )
}

export default Pokedex
