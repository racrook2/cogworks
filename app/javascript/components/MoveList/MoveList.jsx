import React, { useState, useEffect } from 'react';
import Table from 'components/shared/Table/Table'
import MoveListRow from 'components/MoveList/MoveListRow/MoveListRow'

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
          <MoveListRow key={move.id} index={index} move={move} />
        )
      }
    </Table>
  )
}

export default MoveList
