import React from 'react';
import TableRow from 'components/shared/Table/TableRow';
import NameCell from 'components/Pokedex/Row/NameCell';
import TypeCell from 'components/Pokedex/Row/TypeCell';

function Row({ index, evolution }) {
  return(
    <TableRow index={index}>
      <td className='Table__TableRow__td'>
        <NameCell
          name={evolution.basic_name}
          subname={evolution.basic_subname}
        />
        <TypeCell
          type1={evolution.basic_type_1}
          type2={evolution.basic_type_2}
        />
      </td>
      <td className='Table__TableRow__td'>
        { evolution.level_1 &&
          `Level ${evolution.level_1}`
        }
        { evolution.method_1 }
      </td>
      <td className='Table__TableRow__td'>
        <NameCell
          name={evolution.stage_1_name}
          subname={evolution.stage_1_subname}
        />
        <TypeCell
          type1={evolution.stage_1_type_1}
          type2={evolution.stage_1_type_2}
        />
      </td>
      <td className='Table__TableRow__td'>
        { evolution.level_2 &&
          `Level ${evolution.level_2}`
        }
        { evolution.method_2 }
      </td>
      <td className='Table__TableRow__td'>
        <NameCell
          name={evolution.stage_2_name}
          subname={evolution.stage_2_subname}
        />
        <TypeCell
          type1={evolution.stage_2_type_1}
          type2={evolution.stage_2_type_2}
        />
      </td>
    </TableRow>
  )
}

export default Row
