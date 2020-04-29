import React from 'react'
import './PokedexAbilityCell.scss'

function PokedexAbilityCell({ ability_1, ability_2, hidden_ability }) {
  return(
    <div className='Pokedex__PokedexAbilityCell'>
      <div>
        { ability_1 && ability_1.name }
      </div>
      <div>
        { ability_2 && ability_2.name }
      </div>
      <div className='Pokedex__PokedexAbilityCell__hidden-ability'>
        { hidden_ability && hidden_ability.name }
      </div>
    </div>
  )
}

export default PokedexAbilityCell
