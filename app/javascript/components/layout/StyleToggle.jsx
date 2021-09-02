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
  display: 'flex',
  justifyContent: DARK_MODE ? 'right' : 'left',

  button: {
    fontSize: '1.75rem',
    cursor: 'pointer',
    background: BODY,
    border: 'none',
    borderRadius: '1.25rem',
    height: '2.375rem',
    width: '2.375rem'
  }
};

const animateToggle = (toggle, i = 0) => {
  setTimeout(() => {
    const tick = i + 0.125;

    if (localStorage.getItem(COOKIE)) {
      toggle.style.setProperty('margin-right', `${i}rem`);
      toggle.style.setProperty('margin-left', `${1.875 - i}rem`);
    } else {
      toggle.style.setProperty('margin-left', `${i}rem`);
      toggle.style.setProperty('margin-right', `${1.875 - i}rem`);
    }

    if (i < 1.875) {
      animateToggle(toggle, tick);
    } else {
      toggleCookie();
    }
  }, 10);
};

const toggleCookie = () => {
  if (localStorage.getItem(COOKIE)) {
    localStorage.removeItem(COOKIE);
  } else {
    localStorage.setItem(COOKIE, true);
  }

  window.location.reload();
};

const StyleToggle = () => {
  return (
    <div css={toggleStyle}>
      <button onClick={e => animateToggle(e.target) }>
        {DARK_MODE ? '🌝' : '🌞'}
      </button>
    </div>
  );
};

export default StyleToggle;
