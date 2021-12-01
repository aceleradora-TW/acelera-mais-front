
import { React } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import Buttons from '../../components/buttons/default'
import Button from '../../components/buttons/primary'
import { Modal } from '../../components/modal'

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
      <div className="download">
        <FontAwesomeIcon icon={faPrint} />
        <a href="download/acme-doc-2.0.1.txt" download="Acme Documentation (ver. 2.0.1).txt">Download PDF - </a>
      </div>
      <div className="answer">
        <h2>Respostas enviadas:</h2>
        <div>
          <FontAwesomeIcon icon={faLink} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCodeBranch} />
        </div>
      </div>
      <Buttons classe={'button-default'} text="cancelar"></Buttons>
      <Modal classe={'button-primary'} text="avaliar" title="Avaliação">
        <div className="select">
          <span>Nota: </span>
          <select name="select" id="select">
            <option value="BackEnd" selected>BackEnd</option>
            <option value="FrontEnd">FrontEnd</option>
          </select>
        </div>
        <Button classe={'button-primary'} text="Enviar avaliação"></Button>
      </Modal>
    </div>
  )
}
export default EvaluationChallenge
