import React from 'react'
import Ability from 'components/shared/Ability/Ability'
import './PokedexAbilityCell.scss'

function PokedexAbilityCell({ ability_1, ability_2, hidden_ability }) {
  return(
    <div className='Pokedex__PokedexAbilityCell'>
      { ability_1 &&
        <Ability ability={ability_1} />
      }
      { ability_2 &&
      <Ability ability={ability_2} />
      }
      { hidden_ability &&
        <div className='Pokedex__PokedexAbilityCell__hidden-ability'>
          <Ability ability={hidden_ability} />
        </div>
      }
    </div>
  )
}

export default PokedexAbilityCell
