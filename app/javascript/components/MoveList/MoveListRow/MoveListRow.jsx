import React from 'react'
import TableRow from 'components/shared/Table/TableRow/TableRow'
import Type from 'components/shared/Type/Type'

function MoveListRow({ index, move }) {
  return(
    <TableRow index={index}>
      <td>
        { move.name }
      </td>
      <td>
        <Type type={move.type} />
      </td>
      <td>
        { move.category }
      </td>
      <td>
        { move.power }
      </td>
      <td>
        { move.pp }
      </td>
      <td>
        { move.accuracy }
      </td>
      <td>
        { move.description }
      </td>
      <td>
        { move.probability }
      </td>
    </TableRow>
  )
}

export default MoveListRow
