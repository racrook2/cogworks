import React from 'react';
import { BODY, BACKGROUND } from 'utils/Colors';

const tableRowStyle = {
  height: '4rem',

  td: {
    padding: '0.5rem'
  },

  '.Table__TableRow__td--number': {
    textAlign: 'center'
  },

  '.Table__TableRow__td--strong': {
    fontWeight: 'bold'
  }
};

const evenStyle = {
  backgroundColor: BODY
};

const oddStyle = {
  backgroundColor: BACKGROUND
};

function TableRow({ index, children }) {
  return(
    <tr css={[tableRowStyle, index % 2 === 0 ? evenStyle : oddStyle]}>
      { children }
    </tr>
  )
}

export default TableRow
