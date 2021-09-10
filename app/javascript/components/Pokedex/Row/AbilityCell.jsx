import React from 'react'
import Ability from 'components/shared/Ability'
import { SECONDARY_TEXT } from 'utils/Colors';

const hiddenAbilityStyle = {
  color: SECONDARY_TEXT,
  fontStyle: 'italic'
};

function AbilityCell({ ability_1, ability_2, hidden_ability }) {
  return(
    <div>
      { ability_1 &&
        <Ability ability={ability_1} />
      }
      { ability_2 &&
      <Ability ability={ability_2} />
      }
      { hidden_ability &&
        <div css={hiddenAbilityStyle}>
          <Ability ability={hidden_ability} />
        </div>
      }
    </div>
  )
}

export default AbilityCell
