import React from 'react'
import { StyledSortButton } from '../../../../components/buttons/sort/styled'
import { useTranslation } from 'react-i18next'
import Icon from '../../../../components/icon'

export const SortButton = ({ onClick, translate, icon }) => {
  const { t } = useTranslation()

  return (
    <div>
    <StyledSortButton onClick={onClick}> {t(translate)}   <Icon icon={icon}/></StyledSortButton>
    </div>
  )
}
