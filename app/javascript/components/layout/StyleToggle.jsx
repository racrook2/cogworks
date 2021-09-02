import React from 'react';
import { BODY, SHADOW } from 'utils/Colors';

const COOKIE = 'cogworksDarkMode';
const DARK_MODE = localStorage.getItem(COOKIE);
const BORDER = '0.25rem';

const toggleStyle = {
  height: '2.375rem',
  width: '4.25rem',
  borderRadius: `calc(1.25rem + ${BORDER})`,
  background: SHADOW,
  border: `${BORDER} solid ${SHADOW}`,

  button: {
    fontSize: '1.75rem',
    cursor: 'pointer',
    background: BODY,
    border: 'none',
    borderRadius: '1.25rem',
    float: DARK_MODE ? 'right' : 'left',
    height: '2.375rem',
    width: '2.375rem'
  }
};

const toggleCookie = () => {
  if (DARK_MODE) {
    localStorage.removeItem(COOKIE);
  } else {
    localStorage.setItem(COOKIE, true);
  }

  window.location.reload();
};

const StyleToggle = () => {
  return (
    <div css={toggleStyle}>
      <button onClick={toggleCookie}>
        {DARK_MODE ? '🌝' : '🌞'}
      </button>
    </div>
  );
};

export default StyleToggle;
