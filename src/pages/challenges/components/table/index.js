import { useEffect, useState } from 'react'
import { client } from '../../../../service'
import { ChallengeTable, Container } from './styled'
import { useTranslation } from 'react-i18next'
import { Message } from '../../../../components/message/styled.js'

export const Table = ({ BodyComponent, RowComponent }) => {
  const { t } = useTranslation()
  const [challenges, setChallenges] = useState([])
  const [message, setMessage] = useState([])

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    setMessage(t('user.message.loading'))
    client.get(`/challenge?hiringProcessId=${id}`)
      .then(res => {
        setChallenges(res.data.data.result)
        setMessage([])
      })
      .catch(err => {
        alert(t('challenge.alert'))
        console.log(err)
        history.back()
      })
  }, [])

  return (
    <>
      <Container>
        <ChallengeTable>
          <thead>
            <tr>
              <th>{t('challenge.thead.name')} </th>
              <th>{t('challenge.thead.type')}</th>
              <th colSpan='3'>{t('challenge.thead.evaluator')}</th>
              <th>Feedbacks</th>
            </tr>
          </thead>
          <BodyComponent
            items={challenges}
            RowComponent={RowComponent}
          />
        </ChallengeTable>
      </Container>
      <Message>{message}</Message>
    </>
  )
}
