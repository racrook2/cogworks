import React from 'react'
import TableRow from 'components/shared/Table/TableRow/TableRow'
import PokedexNameCell from 'components/Pokedex/PokedexRow/PokedexNameCell/PokedexNameCell'
import PokedexTypeCell from 'components/Pokedex/PokedexRow/PokedexTypeCell/PokedexTypeCell'
import PokedexAbilityCell from 'components/Pokedex/PokedexRow/PokedexAbilityCell/PokedexAbilityCell'

function PokedexRow({ index, pokemon }) {
  return(
    <TableRow index={index}>
      <td className='Table__TableRow__td'>
        <PokedexNameCell
          name={pokemon.name}
          subname={pokemon.subname}
        />
      </td>
      <td className='Table__TableRow__td'>
        <PokedexTypeCell
          type_1={pokemon.type_1}
          type_2={pokemon.type_2}
        />
      </td>
      <td className='Table__TableRow__td'>
        <PokedexAbilityCell
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

export default PokedexRow
