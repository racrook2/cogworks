import React from 'react'
import TableRow from 'components/shared/Table/TableRow/TableRow'

function EvolutionListRow({ index, evolution }) {
  return(
    <TableRow index={index}>
      <td className='Table__TableRow__td'>
        { evolution.basic_name }
        { evolution.basic_subname }
        { evolution.basic_type_1 }
        { evolution.basic_type_2 }
      </td>
      <td className='Table__TableRow__td'>
        { evolution.level_1 &&
          `Level ${evolution.level_1}`
        }
        { evolution.method_1 }
      </td>
      <td className='Table__TableRow__td'>
        { evolution.stage_1_name }
        { evolution.stage_1_subname }
        { evolution.stage_1_type_1 }
        { evolution.stage_1_type_2 }
      </td>
      <td className='Table__TableRow__td'>
        { evolution.level_2 &&
          `Level ${evolution.level_2}`
        }
        { evolution.method_2 }
      </td>
      <td className='Table__TableRow__td'>
        { evolution.stage_2_name }
        { evolution.stage_2_subname }
        { evolution.stage_2_type_1 }
        { evolution.stage_2_type_2 }
      </td>
    </TableRow>
  )
}

export default EvolutionListRow
