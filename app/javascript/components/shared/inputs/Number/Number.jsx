import React from 'react'

function Number({ min, max, onChange }) {
  return(
    <input
      type='number'
      min={min}
      max={max}
      onChange={onChange}
    />
  )
}

export default Number
