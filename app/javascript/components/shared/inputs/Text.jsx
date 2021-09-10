import React from 'react'

function Text({ onChange }) {
  return(
    <input
      type='text'
      onChange={onChange}
    />
  )
}

export default Text
