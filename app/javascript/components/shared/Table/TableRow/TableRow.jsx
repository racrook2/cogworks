import React from 'react'
import './TableRow.scss'

function TableRow({ index, className, children }) {
  return(
    <tr className={`Table__TableRow ${className} ${index % 2 === 0 ? 'Table__TableRow--even' : 'Table__TableRow--odd'}`}>
      { children }
    </tr>
  )
}

export default TableRow
