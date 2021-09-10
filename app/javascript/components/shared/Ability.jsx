import React, { useState } from 'react'
import { BACKGROUND, PRIMARY_TEXT, SECONDARY_TEXT, SHADOW } from 'utils/Colors';

const abilityStyle = {
  position: 'relative',

  'span:first-of-type': {
    borderBottom: `1px dashed ${SECONDARY_TEXT}`,
    display: 'inline-block'
  },

  'span + span': {
    background: BACKGROUND,
    border: `1px solid ${SHADOW}`,
    color: PRIMARY_TEXT,
    left: 0,
    marginLeft: '-0.5rem',
    padding: '0.5rem',
    position: 'absolute',
    visibility: 'hidden',
    zIndex: 2
  }
};

function Ability({ ability }) {
  const [direction, setDirection] = useState('bottom');

  const getDirection = (e) => {
    if (e.target.nextSibling.getBoundingClientRect().y < 0) {
      setDirection('top');
    } else {
      setDirection('bottom');
    }
  };

  const resetDirection = (e) => {
    setDirection('bottom');
  };

  const hoverStyle = {
    'span:first-of-type:hover + span': {
      visibility: 'visible',
      [direction]: 'calc(100% + 0.5rem)'
    }
  };

  return(
    <div css={[abilityStyle, hoverStyle]}>
      <span onMouseOver={getDirection} onMouseOut={resetDirection}>
        { ability.name }
      </span>
      <span>
        { ability.description }
      </span>
    </div>
  )
}

export default Ability
