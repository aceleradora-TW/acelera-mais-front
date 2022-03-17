import { useEffect, useState } from 'react'
import { client } from '../../../../service'
import { ToggleRow } from '../toggle-row'
import { ChallengeTable, Container } from './styled'
import { useTranslation } from 'react-i18next'

export const ChallengeList = () => {
  const { t } = useTranslation()
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    client.get(`/challenge?hiringProcessId=${id}`)
      .then(res => setChallenges(res.data.data.result))
      .catch(err => {
        alert(t('challenge.alert'))
        console.log(err)
        history.back()
      })
  }, [])

  return (
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
        <tbody>
          {challenges.map((challenge, key) => {
            return challenge.exercises.length > 0 ? <ToggleRow key={`${key}-test`} item={challenge} /> : null
          })}
        </tbody>
      </ChallengeTable>
    </Container>
  )
}