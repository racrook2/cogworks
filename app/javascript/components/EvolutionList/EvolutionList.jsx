import React, { useState, useEffect } from 'react';
import Table from 'components/shared/Table/Table';
import Row from 'components/EvolutionList/Row';
import PageLayout from 'components/layout/PageLayout';

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
    <PageLayout>
      <Table
        columns={
          [
            { content: 'Basic', width: '25%' },
            { content: '' },
            { content: 'Stage 1', width: '25%' },
            { content: ' ' },
            { content: 'Stage 2', width: '25%' }
          ]
        }
        loading={loading}
      >
        {
          evolutions.map((evolution, index) => {
            const key = `${evolution.basic_id}-${evolution.stage_2_id || evolution.stage_1_id}`;

            return (
              <Row
                key={key}
                index={index}
                evolution={evolution}
              />
            )
          })
        }
      </Table>
    </PageLayout>
  )
}

export default EvolutionList
