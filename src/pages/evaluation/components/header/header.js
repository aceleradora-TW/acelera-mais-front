import { React } from 'react'
import { Type } from '../select-type/select-type'
import { HeaderContainer } from '../../styled'

export const Header = ({ setDisableEvaluationButton, defaultType }) => {
  return (
    <HeaderContainer>

      <Type setDisableEvaluationButton={setDisableEvaluationButton} defaultType={defaultType} />

    </HeaderContainer>
  )
}
