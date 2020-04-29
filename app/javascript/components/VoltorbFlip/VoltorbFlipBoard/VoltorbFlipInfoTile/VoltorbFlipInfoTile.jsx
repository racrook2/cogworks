import React from 'react'
import './VoltorbFlipInfoTile.scss'

function VoltorbFlipInfoTile({ totalValue, voltorbCount }) {
  return(
    <div className='VoltorbFlip__VoltorbFlipInfoTile'>
      { totalValue }
      { voltorbCount }
    </div>
  )
}

export default VoltorbFlipInfoTile
