import React from 'react'
import Board from 'components/VoltorbFlip/Board'
import PageLayout from 'components/layout/PageLayout';

function VoltorbFlip() {
  return(
    <PageLayout>
      <Board rows={5} cols={5} />
    </PageLayout>
  )
}

export default VoltorbFlip
