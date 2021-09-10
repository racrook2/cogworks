import React, { useState, useEffect } from 'react';
import Table from 'components/shared/Table/Table';
import Row from 'components/MoveList/Row';
import PageLayout from 'components/layout/PageLayout';

function MoveList() {
  const [ loading, setLoading ] = useState(true);
  const [ moves, setMoves ] = useState([]);

  useEffect(() => {
    fetch('/moves')
      .then(response =>
        response.json()
      )
      .then(data => {
        setLoading(false);
        setMoves(data)
      })
  }, []);

  return (
    <PageLayout>
      <Table
        columns={
          [
            'Name',
            'Type',
            'Category',
            'Power',
            'Accuracy',
            'PP',
            'Description',
            'Probability'
          ]
        }
        loading={loading}
      >
        {
          moves.map((move, index) =>
            <Row key={move.id} index={index} move={move} />
          )
        }
      </Table>
    </PageLayout>
  )
}

export default MoveList
