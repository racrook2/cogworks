import React from 'react'
import TableRow from 'components/shared/Table/TableRow'

function Row({ index, ability }) {
  return(
    <TableRow index={index}>
      <td className='Table__TableRow__td'>
        { ability.name }
      </td>
      <td className='Table__TableRow__td'>
        { ability.description }
      </td>
    </TableRow>
  )
}

export default Row
