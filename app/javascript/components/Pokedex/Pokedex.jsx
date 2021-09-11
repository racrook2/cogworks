import React, { useState, useEffect } from 'react';
import QueryBuilder from 'components/Pokedex/QueryBuilder/QueryBuilder';
import Table from 'components/shared/Table/Table';
import Row from 'components/Pokedex/Row/Row';
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
          { content: '', width: '3rem' },
          { content: 'Name', width: '7.5rem' },
          { content: 'Type', width: '10.5rem' },
          { content: 'Ability', width: '7.5rem' },
          { content: 'HP' },
          { content: 'Attack' },
          { content: 'Defense' },
          { content: 'Special Attack' },
          { content: 'Special Defense' },
          { content: 'Speed' },
          { content: 'Total' }
        ]}
        loading={loading}
      >
        {
          pokemon.map((pokemon, index) =>
            <Row key={pokemon.id} index={index} pokemon={pokemon} />
          )
        }
      </Table>
    </PageLayout>
  )
}

export default Pokedex
