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
  const [challenge, setChallenge] = useState(null)
  const [disableEvaluationButton, setDisableEvaluationButton] = useState(true)
  const { t } = useTranslation()

  const id = window.location.pathname.split('/')[2]

  useEffect(() => {
    client.get(`/challenge/${id}`)
      .then(res => (res.data))
      .then(res => setChallenge(res))
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleCancel = () => {
    client.patch(`evaluation/${challenge.evaluation.id}`, { mentorName: 'cancelado' })
    history.back()
  }

  if (!challenge) return null

  return (

    <Container>

      <Header setDisableEvaluationButton={setDisableEvaluationButton} />

      <Download>
        <Anchor href="#" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faPrint} />
          Download: {challenge.challenge}
        </Anchor>
      </Download>

      <Answer challenge={challenge} />

      <ContainerButtons>

        <DefaultButton text={t('evaluation.cancel')} onClick={handleCancel} />
        <Modal classe={'primary'} text={t('evaluation.evaluate')} title={t('evaluation.title')} disabled={disableEvaluationButton} >

          <Score challenge={challenge} />

        </Modal>

      </ContainerButtons>

    </Container >
  )
}

export default EvaluationChallenge
