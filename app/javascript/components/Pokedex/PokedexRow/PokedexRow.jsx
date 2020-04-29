import React from 'react'
import PokedexNameCell from 'components/Pokedex/PokedexRow/PokedexNameCell/PokedexNameCell'
import PokedexTypeCell from 'components/Pokedex/PokedexRow/PokedexTypeCell/PokedexTypeCell'
import PokedexAbilityCell from 'components/Pokedex/PokedexRow/PokedexAbilityCell/PokedexAbilityCell'
import './PokedexRow.scss'

function PokedexRow({ index, pokemon }) {
  return(
    <tr className={`Pokedex__PokedexRow ${index % 2 === 0 ? 'Pokedex__PokedexRow--even' : 'Pokedex__PokedexRow--odd'}`}>
      <td className='Pokedex__PokedexRow__td'>
        <PokedexNameCell
          name={pokemon.name}
          subname={pokemon.subname}
        />
      </td>
      <td className='Pokedex__PokedexRow__td'>
        <PokedexTypeCell
          type_1={pokemon.type_1}
          type_2={pokemon.type_2}
        />
      </td>
      <td className='Pokedex__PokedexRow__td'>
        <PokedexAbilityCell
          ability_1={pokemon.ability_1}
          ability_2={pokemon.ability_2}
          hidden_ability={pokemon.hidden_ability}
        />
      </td>
      <td className='Pokedex__PokedexRow__td Pokedex__PokedexRow__td--stat'>
        { pokemon.hp }
      </td>
      <td className='Pokedex__PokedexRow__td Pokedex__PokedexRow__td--stat'>
        { pokemon.atk }
      </td>
      <td className='Pokedex__PokedexRow__td Pokedex__PokedexRow__td--stat'>
        { pokemon.def }
      </td>
      <td className='Pokedex__PokedexRow__td Pokedex__PokedexRow__td--stat'>
        { pokemon.spa }
      </td>
      <td className='Pokedex__PokedexRow__td Pokedex__PokedexRow__td--stat'>
        { pokemon.spd }
      </td>
      <td className='Pokedex__PokedexRow__td Pokedex__PokedexRow__td--stat'>
        { pokemon.spe }
      </td>
      <td className='Pokedex__PokedexRow__td Pokedex__PokedexRow__td--stat Pokedex__PokedexRow__td--bst'>
        { pokemon.bst }
      </td>
    </tr>
  )
}

export default PokedexRow
