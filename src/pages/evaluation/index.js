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
  const [exercise, setExercise] = useState({})
  const [disableEvaluationButton, setDisableEvaluationButton] = useState(true)
  const { t } = useTranslation()

  const getExercise = async (id) => {
    const exerciseResult = await client.get(`/exercise/${id}`)
      .then(res => (res.data))
      .then(res => res.exercise)
      .catch(err => {
        return err
      })
    console.log(exerciseResult)
    setExercise({ ...exerciseResult })
  }

  const hasExerciseType = ({ exerciseType }) => !exerciseType

  useEffect(() => {
    const exerciseId = window.location.pathname.split('/')[2]
    getExercise(exerciseId)
    client.get(`/exercise/${exerciseId}`)
      .then(res => (res.data))
      .then(res => {
        setExercise(res.data.exercise)
        setDisableEvaluationButton(hasExerciseType(res.exercise))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleCancel = () => {
    client.patch(`/evaluation/${exercise.evaluation.id}`, { mentorName: 'cancelado' })
    history.back()
  }

  return (
    <>
      <Container >
        <div className="nav-challengs-between">
          <h1>{`${t('evaluation.title')} ${exercise.name}`}</h1>
        </div>
        <div key={exercise.id}>
          <Header
            setDisableEvaluationButton={setDisableEvaluationButton}
            defaultType={exercise.exerciseType}
          />

          <Download>
            <Anchor href={exercise.exerciseStatement} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faPrint} />
              {t('evaluation.exerciseStatement')}
            </Anchor>
          </Download>

          <Answer exercise={exercise} />

          <ContainerButtons>

            <DefaultButton text={t('evaluation.cancel')} onClick={handleCancel} />
            <Modal
              className={'primary'}
              text={t('evaluation.evaluate')}
              title={`${t('evaluation.title')} ${exercise.name}`}
              disabled={disableEvaluationButton}
            >

              <Score exercise={exercise} />

            </Modal>

          </ContainerButtons>
        </div>
      </Container >
    </>
  )
}

export default EvaluationChallenge
