import React from 'react'
import Type from 'components/shared/Type/Type'
import './PokedexTypeCell.scss'

function PokedexTypeCell({ type_1, type_2 }) {
  return(
    <div className='Pokedex__PokedexTypeCell'>
      { type_1 &&
        <span className='Pokedex__PokedexTypeCell__type'>
          <Type type={type_1} />
        </span>
      }
      { type_2 &&
        <span className='Pokedex__PokedexTypeCell__type'>
          <Type type={type_2} />
        </span>
      }
    </div>
  )
}

export default PokedexTypeCell
