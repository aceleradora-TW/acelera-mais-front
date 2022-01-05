
import { React, useState, useEffect } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import DefaultButton from '../../components/buttons/default'
// import PrimaryButton from '../../components/buttons/primary'
// import SucessButton from '../../components/buttons/sucess'
import { Modal } from '../../components/modal'
import exercises from '../../mocks/exercise-mock.json'
import { client } from '../../service'
import { Answer } from './components/answer/answer'
import { Header } from './components/header/header.js'
// import Select from '../../components/select'
import { Score } from './components/select-note/select-note'

const EvaluationChallenge = () => {
  const exercisePDF = exercises[0]
  const [exercise, setExercise] = useState(null)
  // const [score] = useState('')
  // const [exerciseTypeSelected, setExerciseTypeSelected] = useState(false)
  const [disableEvaluationButton] = useState(true)
  // const [exerciseType] = useState()
  // const [feedback] = useState('')

  const id = window.location.pathname.split('/')[2]

  useEffect(() => {
    client.get(`/exercise/${id}`)
      .then(res => (res.data))
      .then(res => setExercise(res))
      .catch(err => {
        console.log(err)
      })
  }, [])

  // const handleTextArea = (event) => {
  //   setFeedback(event.target.value)
  // }

  // const handleScore = (event) => {
  //   setScore(event.target.value)
  // }

  // const evaluation = {
  //   feedback,
  //   score
  // }

  // const handleSubmit = () => {
  //   const id = exercise.evaluation.id
  //   client.patch(`evaluation/${id}`, evaluation)
  //   alert('Atualizado com sucesso!')
  //   history.back()
  // }

  // const handleTypeSubmit = () => {
  //   client.patch(`exercise/${id}`, { type: exerciseType })
  // }

  const handleCancel = () => {
    client.patch(`evaluation/${exercise.evaluation.id}`, { mentorName: 'cancelado' })
    history.back()
  }

  if (!exercise) return null

  return (
    <div className="page-container">

      <Header />

      <div className="download">
        <FontAwesomeIcon icon={faPrint} />
        <a href={exercisePDF.links.pdf} target='_blank' rel='noreferrer'> Download PDF</a>
      </div>

      <Answer exercise={exercise} />

      <div className="buttons">
        <DefaultButton text="Cancelar" onClick={handleCancel} />
        <Modal classe={'button-primary'} text="Avaliar" title="Avaliação" disabled={disableEvaluationButton} >
          {/* <div className="form-group">
            < Select
              label="Nota:"
              placeholder="Escolha uma nota"
              onChange={handleScore}
              options={
                [
                  { label: 0, value: 0 },
                  { label: 1, value: 1 },
                  { label: 2, value: 2 },
                  { label: 3, value: 3 },
                  { label: 4, value: 4 },
                  { label: 5, value: 5 }
                ]} ></Select >

            <textarea label="mensagem" className="form-control" id="message-text" onChange={handleTextArea} ></textarea>
            <PrimaryButton text="Enviar avaliação" onClick={handleSubmit} />
          </div> */}

          <Score />

        </Modal>
      </div>
    </div >
  )
}

export default EvaluationChallenge
