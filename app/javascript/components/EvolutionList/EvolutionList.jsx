import React, { useState, useEffect } from 'react';
import Table from 'components/shared/Table/Table'
import EvolutionListRow from 'components/EvolutionList/EvolutionListRow/EvolutionListRow'

function EvolutionList() {
  const [ loading, setLoading ] = useState(true);
  const [ evolutions, setEvolutions ] = useState([]);

  useEffect(() => {
    fetch('/evolutions')
      .then(response =>
        response.json()
      )
      .then(data => {
        setLoading(false);
        setEvolutions(data)
      })
  }, []);

  return (
    <Table
      columns={
        []
      }
      loading={loading}
    >
      {
        evolutions.map((evolution, index) =>
          <EvolutionListRow key={evolution.id} index={index} evolution={evolution} />
        )
      }
    </Table>
  )
}

export default EvolutionList
