import React from 'react'
import TableRow from 'components/shared/Table/TableRow'
import Type from 'components/shared/Type'

function MoveListRow({ index, move }) {
  return(
    <TableRow index={index}>
      <td className='Table__TableRow__td'>
        { move.name }
      </td>
      <td className='Table__TableRow__td'>
        <Type type={move.type} />
      </td>
      <td className='Table__TableRow__td'>
        { move.category }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { move.power }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { move.pp }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { move.accuracy }
      </td>
      <td className='Table__TableRow__td'>
        { move.description }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { move.probability }
      </td>
    </TableRow>
  )
}

export default MoveListRow
