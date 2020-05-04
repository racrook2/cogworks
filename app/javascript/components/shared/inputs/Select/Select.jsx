import React from 'react'

function Select({ options, onChange }) {
  return(
    <select defaultValue='' onChange={onChange}>
      <option value='' disabled hidden />
      {
        options.map(option =>
          <option
            key={option[0]}
            value={option[0]}
          >
            { option[1] }
          </option>
        )
      }
    </select>
  )
}

export default Select
