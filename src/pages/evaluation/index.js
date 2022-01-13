
import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import DefaultButton from '../../components/buttons/default'
import { Modal } from '../../components/modal'
import exercises from '../../mocks/exercise-mock.json'
import { client } from '../../service'
import { Answer } from './components/answer/answer'
import { Header } from './components/header/header.js'
import { Score } from './components/select-note/select-note'
import { Container, Download, Buttons, Anchor } from './styled'

const EvaluationChallenge = () => {
  const exercisePDF = exercises[0]
  const [exercise, setExercise] = useState(null)
  const [disableEvaluationButton, setDisableEvaluationButton] = useState(true)

  const id = window.location.pathname.split('/')[2]

  useEffect(() => {
    client.get(`/exercise/${id}`)
      .then(res => (res.data))
      .then(res => setExercise(res))
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleCancel = () => {
    client.patch(`evaluation/${exercise.evaluation.id}`, { mentorName: 'cancelado' })
    history.back()
  }

  if (!exercise) return null

  return (

    <Container>

      <Header setDisableEvaluationButton={setDisableEvaluationButton} />

      <Download>
        <Anchor href={exercisePDF.links.pdf} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faPrint} />
          Download PDF
        </Anchor>
      </Download>

      <Answer exercise={exercise} />

      <Buttons>

        <DefaultButton text="Cancelar" onClick={handleCancel} />
        <Modal classe={'button-primary'} text="Avaliar" title="Avaliação" disabled={disableEvaluationButton} >

          <Score exercise={exercise} />

        </Modal>

      </Buttons>

    </Container >
  )
}

export default EvaluationChallenge
