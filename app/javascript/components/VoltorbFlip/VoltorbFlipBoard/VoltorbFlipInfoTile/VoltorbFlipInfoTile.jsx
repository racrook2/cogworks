import React from 'react'
import InfoTile from 'images/InfoTile.png'
import './VoltorbFlipInfoTile.scss'

function VoltorbFlipInfoTile({ totalValue, voltorbCount }) {
  return(
    <div className='VoltorbFlip__VoltorbFlipInfoTile'>
      <img
        src={InfoTile}
        className='VoltorbFlip__VoltorbFlipInfoTile__tile'
      />
      <span className='VoltorbFlip__VoltorbFlipInfoTile__value'>
        { totalValue }
      </span>
      <span className='VoltorbFlip__VoltorbFlipInfoTile__count'>
        { voltorbCount }
      </span>
    </div>
  )
}

export default VoltorbFlipInfoTile
