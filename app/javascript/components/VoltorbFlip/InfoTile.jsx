import React from 'react'
import InfoTileImage from 'images/InfoTile.png'

const infoTileStyle = {
  color: 'white',
  fontWeight: 'bold',
  position: 'relative',

  img: {
    verticalAlign: 'middle'
  },

  'span:first-of-type': {
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: '10px'
  },

  'span + span' : {
    position: 'absolute',
    right: '14px',
    top: '48px'
  }
};

function InfoTile({ totalValue, voltorbCount }) {
  return(
    <div css={infoTileStyle}>
      <img
        src={InfoTileImage}
        alt='Info Tile'
      />
      <span>
        { totalValue }
      </span>
      <span>
        { voltorbCount }
      </span>
    </div>
  )
}

export default InfoTile
