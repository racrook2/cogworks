import React from 'react'
import './LinkButton.scss'

function LinkButton({ onClick, children }) {
  return(
    <button
      className='LinkButton'
      type='button'
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default LinkButton
