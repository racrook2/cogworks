import React, { useState, useEffect } from 'react';
import Table from 'components/shared/Table/Table'
import AbilityListRow from 'components/AbilityList/AbilityListRow/AbilityListRow'

function AbilityList() {
  const [ loading, setLoading ] = useState(true);
  const [ abilities, setAbilities ] = useState([]);

  useEffect(() => {
    fetch('/abilities')
      .then(response =>
        response.json()
      )
      .then(data => {
        setLoading(false);
        setAbilities(data)
      })
  }, []);

  return (
    <Table
      columns={
        [
          'Name',
          'Description'
        ]
      }
      loading={loading}
    >
      {
        abilities.map((ability, index) =>
          <AbilityListRow key={ability.id} index={index} ability={ability} />
        )
      }
    </Table>
  )
}

export default AbilityList
