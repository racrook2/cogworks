import React from 'react'
import Type from 'components/shared/Type'

const typeStyle = {
  display: 'flex',
  justifyContent: 'center',

  'span + span': {
    marginLeft: '6px'
  }
};

function TypeCell({ type_1, type_2 }) {
  return(
    <div css={typeStyle}>
      { type_1 &&
        <span>
          <Type type={type_1} />
        </span>
      }
      { type_2 &&
        <span>
          <Type type={type_2} />
        </span>
      }
    </div>
  )
}

export default TypeCell
