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
  const [exercise, setExercise] = useState({
    exerciseStatement: 'aloo', name: 'oi'
  })
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

  useEffect(() => {
    const exerciseId = window.location.pathname.split('/')[2]
    console.log(exerciseId)
    getExercise(exerciseId)
  }, [])

  const handleCancel = () => {
    client.patch(`/evaluation/${exercise.evaluation.id}`, { mentorName: 'cancelado' })
    history.back()
  }

  return (
    <>
      <Container >
        <div className="nav-challengs-between">
          <h1>{t('evaluation.title')}</h1>
        </div>
        <div key={exercise.id}>
          <Header setDisableEvaluationButton={setDisableEvaluationButton} />

          <Download>
            <Anchor href={exercise.exerciseStatement} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faPrint} />
              {t('evaluation.exerciseStatement')}
            </Anchor>
          </Download>

          <Answer exercise={exercise} />

          <ContainerButtons>

            <DefaultButton text={t('evaluation.cancel')} onClick={handleCancel} />
            <Modal className={'primary'} text={t('evaluation.evaluate')} title={`${t('evaluation.title')} ${exercise.name}`} disabled={disableEvaluationButton} >

              <Score exercise={exercise} />

            </Modal>

          </ContainerButtons>
        </div>
      </Container >
    </>
  )
}

export default EvaluationChallenge
