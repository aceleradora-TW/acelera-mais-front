
import { React } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

export const EvaluationChallenge = () => {
  return (
    <><section className="table">
      <div className="primeira">
        <p>Avaliação </p>
      </div>
      <div className="segunda">
        <span>Tipo: </span>
        <select name="select" id="select">
          <option value="BackEnd" selected>BackEnd</option>
          <option value="FrontEnd">FrontEnd</option>
        </select>
      </div>
    </section>
      <section className="head">
        <div className="button">
          <FontAwesomeIcon icon={faPrint} />
          <a href="download/acme-doc-2.0.1.txt" download="Acme Documentation (ver. 2.0.1).txt">Download PDF - </a>
        </div>

      </section></>
  )
}
export default EvaluationChallenge
