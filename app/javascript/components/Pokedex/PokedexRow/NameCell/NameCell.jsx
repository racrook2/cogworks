import React from 'react'
import './NameCell.scss'

function NameCell({ name, subname }) {
  return(
    <div className='Pokedex__NameCell'>
      <div>
        { name }
      </div>
      <div className='Pokedex__NameCell__subname'>
        { subname }
      </div>
    </div>
  )
}

export default NameCell
