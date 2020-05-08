import React from 'react'
import TableRow from 'components/shared/Table/TableRow/TableRow'
import Type from 'components/shared/Type/Type'

function TypeChartRow({ index, type, columns, typeRelations }) {
  return(
    <>
      { typeRelations &&
        <TableRow index={index}>
          <td className='Table__TableRow__td'>
            <Type type={type} />
          </td>
          {
            columns.map(type =>
              <td
                className='Table__TableRow__td Table__TableRow__td--number'
                key={type.name}
              >
                { typeRelations[type.name] !== undefined && '╳' }
                { typeRelations[type.name] }
              </td>
            )
          }
        </TableRow>
      }
    </>
  )
}

export default TypeChartRow
