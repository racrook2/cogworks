import React from 'react'
import TableRow from 'components/shared/Table/TableRow'
import NameCell from 'components/Pokedex/Row/NameCell'
import TypeCell from 'components/Pokedex/Row/TypeCell'
import AbilityCell from 'components/Pokedex/Row/AbilityCell'

function Row({ index, pokemon }) {
  const formatNumber = number => `#${String(number).padStart(3, 0)}`;

  return(
    <TableRow index={index}>
      <td className='Table__TableRow__td Table__TableRow__td--number Table__TableRow__td--strong'>
        { formatNumber(pokemon.number) }
      </td>
      <td className='Table__TableRow__td'>
        <NameCell
          name={pokemon.name}
          subname={pokemon.subname}
        />
      </td>
      <td className='Table__TableRow__td'>
        <TypeCell
          type1={pokemon.type_1}
          type2={pokemon.type_2}
          centered
        />
      </td>
      <td className='Table__TableRow__td'>
        <AbilityCell
          ability_1={pokemon.ability_1}
          ability_2={pokemon.ability_2}
          hidden_ability={pokemon.hidden_ability}
        />
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { pokemon.hp }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { pokemon.atk }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { pokemon.def }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { pokemon.spa }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { pokemon.spd }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number'>
        { pokemon.spe }
      </td>
      <td className='Table__TableRow__td Table__TableRow__td--number Table__TableRow__td--strong'>
        { pokemon.bst }
      </td>
    </TableRow>
  )
}

export default Row
