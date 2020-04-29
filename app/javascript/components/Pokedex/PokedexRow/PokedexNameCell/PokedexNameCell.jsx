import React from 'react'
import './PokedexNameCell.scss'

function PokedexNameCell({ name, subname }) {
  return(
    <div className='Pokedex__PokedexNameCell'>
      <div>
        { name }
      </div>
      <div className='Pokedex__PokedexNameCell__subname'>
        { subname }
      </div>
    </div>
  )
}

export default PokedexNameCell
