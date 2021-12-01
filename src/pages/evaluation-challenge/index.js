
import { React } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

export const EvaluationChallenge = () => {
  return (
    <div className="page-container">
      <section className="head">
          <h1>Avaliação </h1>
        <div className="select">
          <span>Tipo: </span>
          <select name="select" id="select">
            <option value="BackEnd" selected>BackEnd</option>
            <option value="FrontEnd">FrontEnd</option>
          </select>
        </div>
      </section>
      <section>
        <div className="download">
          <FontAwesomeIcon icon={faPrint} />
          <a href="download/acme-doc-2.0.1.txt" download="Acme Documentation (ver. 2.0.1).txt">Download PDF - </a>
        </div>
      </section>
    </div>
  )
}
export default EvaluationChallenge
