import React from 'react'
import './Type.scss'

function Type({ type }) {
  return(
    <div className={`Type Type--${type.name}`}>
      { type.name }
    </div>
  )
}

export default Type
