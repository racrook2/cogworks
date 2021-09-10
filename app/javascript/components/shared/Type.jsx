import React from 'react';
import { TYPE_COLORS } from 'utils/Colors';

const typeStyle = {
  alignItems: 'center',
  borderRadius: '0.25rem',
  color: 'white',
  display: 'inline-flex',
  height: '1.5rem',
  justifyContent: 'center',
  paddingTop: '0.125rem',
  width: '4.5rem'
};

function Type({ type }) {
  return(
    <div css={[typeStyle, { backgroundColor: TYPE_COLORS[type.name] }]}>
      { type.name }
    </div>
  )
}

export default Type
