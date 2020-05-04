import React from 'react'
import Select from 'components/shared/inputs/Select/Select'
import Text from 'components/shared/inputs/Text/Text'
import Number from 'components/shared/inputs/Number/Number'
import LinkButton from 'components/shared/buttons/LinkButton/LinkButton'

function Condition({ id, condition, updateCondition, removeCondition }) {
  const isNumericalAttribute = attribute => (
    ['hp', 'atk', 'def', 'spa', 'spd', 'spe'].includes(attribute)
  );

  const attributeCondition = attribute => {
    let newCondition = { attribute: attribute };

    if (isNumericalAttribute(attribute)) {
      newCondition.comparison = undefined
    } else {
      newCondition.comparison = 'eq'
    }

    return newCondition;
  };

  return(
    <div>
      { id }
      <Select
        options={[
          ['name', 'Name'],
          ['types', 'Type'],
          ['abilities', 'Ability'],
          ['hp', 'HP'],
          ['atk', 'Attack'],
          ['def', 'Defense'],
          ['spa', 'Special Attack'],
          ['spd', 'Special Defense'],
          ['spe', 'Speed'],
        ]}
        onChange={
          e => updateCondition(
            id, attributeCondition(e.target.value)
          )
        }
      />
      { isNumericalAttribute(condition.attribute) &&
        <>
          is
          <Select
            options={[
              ['eq', 'Equal to'],
              ['gt', 'Greater than'],
              ['lt', 'Less than'],
              ['between', 'Between']
            ]}
            onChange={
              e => updateCondition(
                id, { comparison: e.target.value }
              )
            }
          />
        </>
      }
      { !isNumericalAttribute(condition.attribute) &&
        condition.comparison &&
        <>
          is
          <Text
            onChange={
              e => updateCondition(
                id, { value: e.target.value }
              )
            }
          />
        </>
      }
      { isNumericalAttribute(condition.attribute) &&
        condition.comparison &&
        <Number
          min={0}
          max={255}
          onChange={
            e => updateCondition(
              id, { value: e.target.value }
            )
          }
        />
      }
      { isNumericalAttribute(condition.attribute) &&
        condition.comparison === 'between' &&
        <>
          and
          <Number
            min={0}
            max={255}
            onChange={
              e => updateCondition(
                id, { value: e.target.value }
              )
            }
          />
        </>
      }
      <LinkButton onClick={() => removeCondition(id)}>╳</LinkButton>
    </div>
  )
}

export default Condition
