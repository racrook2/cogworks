import React from 'react'
import Tile from 'images/Tile.png'
import Tile0 from 'images/Tile0.png'
import Tile1 from 'images/Tile1.png'
import Tile2 from 'images/Tile2.png'
import Tile3 from 'images/Tile3.png'

const tiles = {
  0: Tile0,
  1: Tile1,
  2: Tile2,
  3: Tile3
};

const numberTileStyle = {
  color: 'white',
  fontWeight: 'bold',
  position: 'relative',

  span: {
    position: 'absolute'
  },

  'span:first-of-type': {
    left: '9px',
    top: '7px',

    '& + span': {
      right: '8px',
      top: '7px',

      '& + span': {
        left: '9px',
        bottom: '4px',

        '& + span': {
          right: '8px',
          bottom: '4px'
        }
      }
    }
  },

  img: {
    verticalAlign: 'middle'
  }
};

const selectedStyle = {
  outline: '0.25rem red solid'
};

function NumberTile({ value, selected, flipped, notes, onClick }) {
  return (
    <div css={[numberTileStyle, selected ? selectedStyle : {}]}>
      {!flipped &&
        <>
          <span>{notes[0] && '0'}</span>
          <span>{notes[1] && '1'}</span>
          <span>{notes[2] && '2'}</span>
          <span>{notes[3] && '3'}</span>
        </>
      }
      <img
        src={flipped ? tiles[value] : Tile}
        alt='Number Tile'
        onClick={onClick}
      />
    </div>
  )
}

export default NumberTile
