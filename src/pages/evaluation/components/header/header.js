import { React } from 'react'
import { Type } from '../select-type/select-type'

export const Header = ({ setDisableEvaluationButton }) => {
  return (
    <section className="head">
      <h1>Avaliação </h1>

      <Type setDisableEvaluationButton={setDisableEvaluationButton} />

    </section >
  )
}
