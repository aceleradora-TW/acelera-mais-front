import { React } from 'react'
import { Type } from '../select-type/select-type'
import { HeaderContainer } from '../../styled'

export const Header = ({ setDisableEvaluationButton }) => {
  return (
    <HeaderContainer>

      <Type setDisableEvaluationButton={setDisableEvaluationButton} />

    </HeaderContainer>
  )
}
