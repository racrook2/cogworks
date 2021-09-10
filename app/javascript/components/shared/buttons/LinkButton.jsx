import React from 'react';
import {SECONDARY_TEXT} from 'utils/Colors';

const linkButtonStyle = {
  background: 'none',
  border: 'none',
  color: SECONDARY_TEXT,
  cursor: 'pointer',
  fontSize: '100%'
};

function LinkButton({ onClick, children }) {
  return(
    <button
      css={linkButtonStyle}
      type='button'
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default LinkButton
