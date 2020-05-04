import React from 'react'
import Ability from 'components/shared/Ability/Ability'
import './AbilityCell.scss'

function AbilityCell({ ability_1, ability_2, hidden_ability }) {
  return(
    <div className='Pokedex__AbilityCell'>
      { ability_1 &&
        <Ability ability={ability_1} />
      }
      { ability_2 &&
      <Ability ability={ability_2} />
      }
      { hidden_ability &&
        <div className='Pokedex__AbilityCell__hidden-ability'>
          <Ability ability={hidden_ability} />
        </div>
      }
    </div>
  )
}

export default AbilityCell
