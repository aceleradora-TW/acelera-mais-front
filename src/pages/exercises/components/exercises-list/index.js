import { useEffect, useState } from 'react'
import { client } from '../../../../service'
import { ToggleRow } from '../toggle-row'
import { ExerciseTable, Container } from './styled'
import { useTranslation } from 'react-i18next'

export const ExercisesList = () => {
  const { t } = useTranslation()
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    client.get(`/exercise?hiringProcessId=${id}`)
      .then(res => setExercises(res.data.data.result))
      .catch(err => {
        alert(t('exercise.alert'))
        console.log(err)
        history.back()
      })
  }, [])

  return (
    <Container>
      <ExerciseTable>
        <thead>
          <tr>
            <th>{t('exercise.thead.name')} </th>
            <th>{t('exercise.thead.type')}</th>
            <th colSpan='2'>{t('exercise.thead.evaluator')}</th>
            <th>Feedbacks</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, key) => {
            return <ToggleRow key={`${key}-test`} item={exercise} />
          })}
        </tbody>
      </ExerciseTable>
    </Container>
  )
}
