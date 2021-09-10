import React from 'react';
import Spinner from 'images/Spinner.gif'
import { BACKGROUND } from 'utils/Colors';
import { BOX_SHADOW } from 'utils/BoxShadow';

const tableStyle = {
  borderCollapse: 'collapse',
  boxShadow: BOX_SHADOW,

  thead: {
    backgroundColor: BACKGROUND,
    position: 'sticky',
    top: 0
  },

  th: {
    padding: '0.5rem',
    textAlign: 'center'
  }
};

const loadingStyle = {
  height: '25rem',
  textAlign: 'center'
};

function Table({ columns, children, loading }) {
  return (
    <table css={tableStyle}>
      <thead>
        <tr>
          {
            columns.map(column => {
              const key = typeof column === 'object' ? column.props.type.name : column;

              return (
                <th key={key}>
                  { column }
                </th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        { loading &&
          <tr>
            <td css={loadingStyle} colSpan={columns.length}>
              <img src={Spinner} alt='Spinner' />
            </td>
          </tr> }
        { !loading && children }
      </tbody>
    </table>
  )
}

export default Table
