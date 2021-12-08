
import { React, useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import DefaultButton from '../../components/buttons/default'
import PrimaryButton from '../../components/buttons/primary'
import { Modal } from '../../components/modal'
import exercises from '../../mocks/exercise-mock.json'
import Select from '../../components/select'

export const EvaluationChallenge = () => {
  const exercise = exercises[0]
  const [exerciseTypeSelected, setExerciseTypeSelected] = useState(false)
  const [disableEvaluationButton, setDisableEvaluationButton] = useState(true)

  return (
    <div className="page-container">
      <section className="head">
        <h1>Avaliação </h1>
        <div>
          <Select
            onChange={() => {
              setExerciseTypeSelected(true)
            }
            }
            label="Tipo:"
            placeholder="Escolha uma opção"
            options={[
              { label: 'Backend', value: 'backend' },
              { label: 'Frontend', value: 'frontend' },
              { label: 'Fullstack', value: 'fullstack' }
            ]} />
          {exerciseTypeSelected
            ? <PrimaryButton text="Alterar" onClick={() => {
              setExerciseTypeSelected(false)
              setDisableEvaluationButton(false)
              alert('Alterado com sucesso')
            }} />
            : null}
        </div>
      </section >

      <div className="download">
        <FontAwesomeIcon icon={faPrint} />
        <a href={exercise.links.pdf}> Download PDF</a>
      </div>
      <div className="answer">
        <h2>Respostas enviadas:</h2>
        <div>
          <a className="button-default" href={exercise.links.zip}><FontAwesomeIcon icon={faLink} /> download zip</a>
          <a className="button-default" href={exercise.links.github}><FontAwesomeIcon icon={faCodeBranch} /> link do repositório</a>
        </div>
      </div>
      <div className="buttons">
        <DefaultButton text="cancelar" />
        <Modal classe={'button-primary'} text="Avaliar" title="Avaliação" disabled={disableEvaluationButton} >
          <div className="form-group">
            <Select
              label="Nota:"
              placeholder="Escolha uma opção"
              options={[
                { label: 0, value: 0 },
                { label: 1, value: 1 },
                { label: 2, value: 2 },
                { label: 3, value: 3 },
                { label: 4, value: 4 },
                { label: 5, value: 5 }
              ]} ></Select>
            <textarea label="mensagem" className="form-control" id="message-text"></textarea>
            <PrimaryButton text="Enviar avaliação" />
          </div>
        </Modal>
      </div>
    </div >
  )
}
export default EvaluationChallenge
