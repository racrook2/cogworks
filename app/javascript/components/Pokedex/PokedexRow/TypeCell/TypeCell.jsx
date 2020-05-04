import React from 'react'
import Type from 'components/shared/Type/Type'
import './TypeCell.scss'

function TypeCell({ type_1, type_2 }) {
  return(
    <div className='Pokedex__TypeCell'>
      { type_1 &&
        <span className='Pokedex__TypeCell__type'>
          <Type type={type_1} />
        </span>
      }
      { type_2 &&
        <span className='Pokedex__TypeCell__type'>
          <Type type={type_2} />
        </span>
      }
    </div>
  )
}

export default TypeCell
