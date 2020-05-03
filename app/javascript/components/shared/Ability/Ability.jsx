import React from 'react'
import './Ability.scss'

function Ability({ ability }) {
  return(
    <div className='Ability'>
      <span className='Ability__name'>
        { ability.name }
      </span>
      <span className='Ability__description'>
        { ability.description }
      </span>
    </div>
  )
}

export default Ability
