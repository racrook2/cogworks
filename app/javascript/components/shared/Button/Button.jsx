import React from 'react'

function LinkButton({ onClick, children }) {
  return(
    <button
      type='button'
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default LinkButton
