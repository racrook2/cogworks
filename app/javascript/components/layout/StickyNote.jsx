import React from 'react';
import { SHADOW } from 'utils/Colors';

let HIGHLIGHT, COLORS, FALLBACK;

if (localStorage.getItem('cogworksDarkMode')) {
  HIGHLIGHT = 'gray';
  FALLBACK = '#555555';
  COLORS = {
    green: '#18453B',
    pink: '#722F37',
    blue: '#2C3968',
    yellow: '#954535'
  };
} else {
  HIGHLIGHT = 'white';
  FALLBACK = 'whitesmoke';
  COLORS = {
    green: 'lightgreen',
    pink: 'pink',
    blue: 'lightblue',
    yellow: 'lemonchiffon'
  };
}

const stickyNoteStyle = {
  padding: '1rem',
  border: `1px solid ${SHADOW}`,
  boxShadow: `0 0.5rem 0.5rem ${SHADOW}`,
  width: '12.5rem',
  height: '12.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const StickyNote = ({ image, caption, color, right = false }) => {
  const marginLeft = right ? '1rem' : '-3rem';
  const marginRight = right ? '-9rem' : '1rem';
  const additionalStyle = {
    float: right ? 'right' : 'left',
    margin: `0.25rem ${marginRight} 0.5rem ${marginLeft}`,
    background: `linear-gradient(135deg, ${HIGHLIGHT} -100%, ${COLORS[color] || FALLBACK})`
  };

  return (
    <span css={[stickyNoteStyle, additionalStyle]}>
      <img src={image} />
      <span>{caption}</span>
    </span>
  )
};

export default StickyNote;
