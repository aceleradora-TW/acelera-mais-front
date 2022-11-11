import React, { useState } from 'react'
import { StyledSortTable } from '../buttons/sort/styled'
import Icon from '../icon'
import { faSortNumericDown, faSortNumericUp } from '@fortawesome/free-solid-svg-icons'
export const SortTable = ({
  label,
  setItems,
  setOrientation,
  iconUp = faSortNumericUp,
  iconDown = faSortNumericDown
}) => {
  const [icon, setIcon] = useState(iconDown)
  const [checked, setChecked] = useState(false)

  const updateIcon = () => {
    const icone = !checked ? iconUp : iconDown
    setIcon(icone)
  }

  const sortBy = () => {
    updateIcon()
    setOrientation('DESC')
    setChecked(!checked)
  }

  return (
    <div>
      <StyledSortTable onClick={sortBy}> {label}   <Icon icon={icon} /></StyledSortTable>
    </div>
  )
}
