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

const sidewaysStyle = {
  height: '4.5rem',
  width: '1.5rem',
  writingMode: 'vertical-rl'
};

function Type({ type, sideways }) {
  return(
    <div
      css={[
        typeStyle,
        { backgroundColor: TYPE_COLORS[type.name || type] },
        sideways ? sidewaysStyle : {}
      ]}
    >
      { type.name || type }
    </div>
  )
}

export default Type
