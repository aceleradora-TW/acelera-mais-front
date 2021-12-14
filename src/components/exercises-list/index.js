import './style.css'
import { ToggleRow } from '../togglerow'
import { useEffect, useState } from 'react'
import { client } from '../../service'

export const ExercisesList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    console.log(id)
    client.get(`/exercise?hiringProcessId=${id}`)
      .then(res => setExercises(res.data.data.result))
      .catch(err => {
        console.log(err)
        setExercises([])
        // navigate('/')
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
            return <ToggleRow key={key} item={exercise} exerciseId={exercise.id} />
          })}
        </tbody>
      </table>
    </div>
  )
}
