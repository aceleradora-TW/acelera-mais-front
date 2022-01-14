import { useEffect, useState } from 'react'
import { client } from '../../../../service'
import { ToggleRow } from '../toggle-row'
import { ExerciseTable, Container } from './styled'

export const ExercisesList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    client.get(`/exercise?hiringProcessId=${id}`)
      .then(res => setExercises(res.data.data.result))
      .catch(err => {
        alert('Não foi possível carregar a lista de exercícios.')
        console.log(err)
        history.back()
      })
  }, [])

  return (
    <Container>
      <ExerciseTable>
        <thead>
          <tr>
            <th>Nome </th>
            <th>Tipo </th>
            <th colSpan='2'>Avaliador</th>
            <th>Feedbacks </th>
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
