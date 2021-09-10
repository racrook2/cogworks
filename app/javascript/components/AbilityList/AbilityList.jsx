import React, { useState, useEffect } from 'react';
import Table from 'components/shared/Table/Table';
import Row from 'components/AbilityList/Row';
import PageLayout from 'components/layout/PageLayout';

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
    <PageLayout>
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
            <Row key={ability.id} index={index} ability={ability} />
          )
        }
      </Table>
    </PageLayout>
  )
}

export default AbilityList
