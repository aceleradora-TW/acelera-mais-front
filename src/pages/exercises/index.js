import { useEffect, useState } from 'react'
// import { ChallengePage } from '../challenges'
import { ToggleRow } from './components/toggle-row'
import { ChallengeTable } from '../challenges/components/challenges-list/styled'
import { client } from '../../service'
import { useTranslation } from 'react-i18next'

const adapterChallengeToExercise = (challenges) => {
  const oldExercisesList = challenges.map(challenge => {
    return challenge.exercises
  })

  const newExercisesList = []

  oldExercisesList.forEach(oldExerciseList => {
    oldExerciseList.forEach(oldExercise => {
      newExercisesList.push(oldExercise)
    })
  })

  return newExercisesList
}

export const ExercisesPage = () => {
  const [exercises, setExercises] = useState([])

  const { t } = useTranslation()

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    client.get(`/challenge?hiringProcessId=${id}`)
      .then(res => {
        // console.log({ challenges: res.data.data.result })
        // console.log(adapterChallengeToExercise(res.data.data.result))
        setExercises(
          adapterChallengeToExercise(res.data.data.result)
        )
      })
      .catch(err => {
        console.log(err)
        // history.back()
      })
  }, [])

  return (
    <>
      {/* <ChallengePage /> */}
      <ChallengeTable>
        <thead>
          <tr>
            <th>{t('challenge.thead.name')} </th>
            <th>{t('challenge.thead.type')}</th>
            <th colSpan='3'>{t('challenge.thead.evaluator')}</th>
            <th>Feedbacks 123</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, key) => {
            return <ToggleRow key={`${key}-test`} item={exercise} />
          })}
        </tbody>
      </ChallengeTable>
    </>
  )
}
