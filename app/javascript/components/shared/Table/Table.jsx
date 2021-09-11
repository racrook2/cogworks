import React from 'react';
import Spinner from 'images/Spinner.gif'
import { BACKGROUND } from 'utils/Colors';
import { BOX_SHADOW, LOWERED_BOX_SHADOW } from 'utils/BoxShadow';

const tableStyle = {
  borderCollapse: 'collapse',
  boxShadow: BOX_SHADOW,
  width: '100%',
  tableLayout: 'fixed',

  thead: {
    backgroundColor: BACKGROUND,
    position: 'sticky',
    top: 0,
    boxShadow: LOWERED_BOX_SHADOW,
    zIndex: 1
  },

  th: {
    padding: '0.5rem',
    textAlign: 'center'
  }
};

const loadingStyle = {
  display: 'block',
  margin: '5rem auto'
};

const key = (column) => {
  const content = column.content;

  if (typeof content === 'object') {
    return content.props.type.name;
  } else {
    return content;
  }
};

function Table({ columns, children, loading }) {
  return (
    <>
      { loading &&
        <img src={Spinner} css={loadingStyle} alt='Spinner' />
      }
      { !loading &&
        <table css={tableStyle}>
          <colgroup>
            {
              columns.map(column => {
                return (
                  <col
                    key={key(column)}
                    css={column.width ? { width: column.width } : {}}
                  />
                )
              })
            }
          </colgroup>
          <thead>
            <tr>
              {
                columns.map(column => {
                  return (
                    <th key={key(column)}>
                      { column.content }
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            { children }
          </tbody>
        </table>
      }
    </>
  )
}

export default Table
