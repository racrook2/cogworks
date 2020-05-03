import React from 'react';
import Spinner from 'images/Spinner.gif'
import './Table.scss'

function Table({ columns, children, loading }) {
  return (
    <table className='Table'>
      <thead>
        <tr>
          {
            columns.map(column =>
              <th
                className='Table__header'
                key={column}
              >
                { column }
              </th>
            )
          }
        </tr>
      </thead>
      <tbody>
        { loading &&
          <tr>
            <td className='Table__loading' colSpan={columns.length}>
              <img src={Spinner} alt='Spinner' />
            </td>
          </tr> }
        { !loading && children }
      </tbody>
    </table>
  )
}

export default Table
