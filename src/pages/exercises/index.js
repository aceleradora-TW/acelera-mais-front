import { ExercisesList } from '../../components/exercises-list'
import Select from '../../components/select'

export const ExercisesPage = () => {
  return (
    <>
      <div className="page-container">
        <h1>Exercícios</h1>
        <section>
          <Select options={[
            { value: 'backend', label: 'Backend' },
            { value: 'frontend', label: 'Frontend' },
            { value: 'fullstack', label: 'Fullstack' }
          ]} placeholder="Tipo" label="Filtrar:" name="type" onChange={() => { }} />
        </section>
        <ExercisesList />
      </div>
    </>
  )
}
