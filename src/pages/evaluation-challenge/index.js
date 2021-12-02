
import { React } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import Buttons from '../../components/buttons/default'
import Button from '../../components/buttons/primary'
import { Modal } from '../../components/modal'
import { Input } from '../../components/inputs'
import exercises from '../../mocks/exercise-mock.json'

export const EvaluationChallenge = () => {
  const exercise = exercises[0]
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
        <a href={exercise.links.pdf}><FontAwesomeIcon icon={faPrint} /> Download PDF</a>
      </div>
      <div className="answer">
        <h2>Respostas enviadas:</h2>
        <div>
          <a className="button-default" href={exercise.links.zip}><FontAwesomeIcon icon={faLink} /> download zip</a>
          <a className="button-default" href={exercise.links.github}><FontAwesomeIcon icon={faCodeBranch} /> link do repositório</a>
        </div>
      </div>
      <div className="buttons">
        <Buttons classe={'button-default'} text="cancelar"></Buttons>
        <Modal classe={'button-primary'} text="avaliar" title="Avaliação">
          <div className="select2">
            <span>Nota: </span>
            <select name="select" id="select">
              <option value="BackEnd" selected>BackEnd</option>
              <option value="FrontEnd">FrontEnd</option>
            </select>
          </div>
          <div className="feedback">
          <Input type="text" className="feedback" label="Feedback:" />
          </div>
          <Button classe={'button-primary'} text="Enviar avaliação"></Button>
        </Modal>
      </div>
    </div>
  )
}
export default EvaluationChallenge
