import { React } from 'react'
import { Type } from '../select-type/select-type'
// import { StyledHeader } from '../../styled'

export const Header = ({ setDisableEvaluationButton }) => {
  return (
    <section className="head">
      {/* <StyledHeader> */}
      <h1>Avaliação </h1>

      <Type setDisableEvaluationButton={setDisableEvaluationButton} />
      {/* </StyledHeader> */}
    </section >
  )
}
