import { useEffect, useState } from 'react'
import { client } from '../../../../service'
import { ChallengeTable, Container } from './styled'
import { useTranslation } from 'react-i18next'
import { Loading } from '../../../../components/loading'

export const Table = ({ BodyComponent, RowComponent }) => {
  const { t } = useTranslation()
  const [challenges, setChallenges] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    setIsLoading(true)
    client.get(`/challenge?hiringProcessId=${id}`)
      .then(res => {
        setChallenges(res.data.data.result)
        setIsLoading(false)
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
      <Loading isVisible={isLoading} />
    </>
  )
}
