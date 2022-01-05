import './style.css'
<<<<<<< HEAD:src/components/exercises-list/index.js
import { ToggleRow } from '../toggle-row'
=======
import { ToggleRow } from '../../../exercises/components/toggle-row'
>>>>>>> 0d3d87d02d1cb0aa16b438e080246b1e3552a320:src/pages/exercises/components/exercises-list/index.js
import { useEffect, useState } from 'react'
import { client } from '../../../../service'

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
    <div className="table-exercises">
      <table className="table-exercises-content">
        <thead className="table-exercises-head">
          <tr>
            <th>Nome </th>
            <th>Tipo </th>
            <th colSpan='2'>Avaliador </th>
            <th>Feedbacks </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {exercises.map((exercise, key) => {
            return <ToggleRow key={`${key}-test`} item={exercise} />
          })}
        </tbody>
      </table>
    </div>
  )
}
