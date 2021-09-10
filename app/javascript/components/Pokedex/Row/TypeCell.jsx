import React from 'react'
import Type from 'components/shared/Type'

const typeStyle = {
  display: 'flex',

  'span + span': {
    marginLeft: '6px'
  }
};

function TypeCell({ type1, type2, centered }) {
  return(
    <div css={[typeStyle, centered ? { justifyContent: 'center' } : {}]}>
      { type1 &&
        <span>
          <Type type={type1} />
        </span>
      }
      { type2 &&
        <span>
          <Type type={type2} />
        </span>
      }
    </div>
  )
}

export default TypeCell
