import React, { useState } from 'react'
import { StyledSortTable } from '../buttons/sort/styled'
import Icon from '../icon'
import { faSortNumericDown, faSortNumericUp } from '@fortawesome/free-solid-svg-icons'
export const SortTable = ({
  label,
  sort,
  items,
  setItems,
  iconUp = faSortNumericUp,
  iconDown = faSortNumericDown
}) => {
  const [icon, setIcon] = useState(iconDown)
  const [checked, setChecked] = useState(false)
  const [orientation, setOrientation] = useState(-1)

  const updateIcon = () => {
    const icone = !checked ? iconUp : iconDown
    setIcon(icone)
  }

  const sortBy = () => {
    setOrientation(orientation * -1)
    setItems([...items.sort((a, b) => sort(a, b) * orientation)])
    updateIcon()
    setChecked(!checked)
  }

  return (
    <div>
      <StyledSortTable onClick={sortBy}> {label}   <Icon icon={icon} /></StyledSortTable>
    </div>
  )
}
