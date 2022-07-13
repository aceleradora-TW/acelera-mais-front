import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import DefaultButton from '../../components/buttons/default'
import { Modal } from '../../components/modal'
import { client } from '../../service'
import { Answer } from './components/answer/answer'
import { Header } from './components/header/header.js'
import { Score } from './components/select-note/select-note'
import { Container, Download, ContainerButtons, Anchor } from './styled'
import { useTranslation } from 'react-i18next'

const EvaluationChallenge = () => {
  const [exercise, setExercise] = useState(null)
  const [disableEvaluationButton, setDisableEvaluationButton] = useState(true)
  const { t } = useTranslation()

  const exerciseId = window.location.pathname.split('/')[2]

  useEffect(() => {
    client.get(`/exercise/${exerciseId}`) // traz informacao do back atraves do endpoint
      .then(res => (res.data))
      .then(res => setExercise(res.exercise))
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleCancel = () => {
    client.patch(`evaluation/${exercise.id}`, { mentorName: 'cancelado' })
    history.back()
  }

  if (!exercise) return null

  const exerciseName = exercise.name
  const exerciseLink = exercise.link

  return (
    <>
      <Container >
        <h1>{t('evaluation.title')}</h1>
        <div key={exercise.id}>
          <Header setDisableEvaluationButton={setDisableEvaluationButton} />

          <Download>
            <Anchor href={exerciseLink} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faPrint} />
              Download: {exerciseName}
            </Anchor>
          </Download>

          <Answer exercise={exercise} />

          <ContainerButtons>

            <DefaultButton text={t('evaluation.cancel')} onClick={handleCancel} />
            <Modal classe={'primary'} text={t('evaluation.evaluate')} title={`${t('evaluation.title')} ${exercise.name}`} disabled={disableEvaluationButton} >

              <Score exercise={exercise} />

            </Modal>

          </ContainerButtons>
        </div>
      </Container >
    </>
  )
}

export default EvaluationChallenge
