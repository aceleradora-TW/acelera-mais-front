import { ExercisesList } from '../../pages/exercises/components/exercises-list'
import Select from '../../components/select'
import showFeature from '../../feature-toggle'

export const ExercisesPage = () => {
  return (
    <>
      <div className="page-container">
        <h1>Exercícios</h1>
        {showFeature()
          ? (
            <section>
              <Select options={[
                { value: 'backend', label: 'Backend' },
                { value: 'frontend', label: 'Frontend' },
                { value: 'fullstack', label: 'Fullstack' }
              ]} placeholder="Tipo" label="Filtrar:" name="type" onChange={() => { }} />
            </section>)
          : null}
        <ExercisesList />
      </div>
    </>
  )
}
