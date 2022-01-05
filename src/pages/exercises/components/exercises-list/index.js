import { ToggleRow } from '../togglerow'
import { useEffect, useState } from 'react'
import { client } from '../../service'
import styled from 'styled-components'

const Table = styled.table`
width: 100%;
border: 2px solid #d3d3d3;

`
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  td {
    text-align: center;
    padding: 20px;
  }

  tr {
    border-bottom: 2px solid #d3d3d3;
  }
  `

const Thead = styled.thead`
  font - family: Arial, Helvetica, sans - serif;
  color: #2e2e2e;
  font - size: 15px;
  font - weight 700;

  th {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    
  }
`

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
      <Table>
        <Thead>
          <tr>
            <th>Nome </th>
            <th>Tipo </th>
            <th colSpan='2'>Avaliador </th>
            <th>Feedbacks </th>
          </tr>
        </Thead>
        <tbody>
          {exercises.map((exercise, key) => {
            return <ToggleRow key={`${key}-test`} item={exercise} />
          })}
        </tbody>
      </Table>
    </Container>
  )
}
