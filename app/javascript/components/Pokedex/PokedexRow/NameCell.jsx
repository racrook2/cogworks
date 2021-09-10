import React from 'react'
import { SECONDARY_TEXT } from 'utils/Colors';

const subnameStyle = {
  color: SECONDARY_TEXT,
  fontSize: '0.75rem',
  fontStyle: 'italic'
};

function NameCell({ name, subname }) {
  return(
    <div>
      <div>
        { name }
      </div>
      <div css={subnameStyle}>
        { subname }
      </div>
    </div>
  )
}

export default NameCell
