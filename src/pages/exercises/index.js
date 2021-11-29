import { ExercisesList } from '../../components/exercises-list'

export const ExercisesPage = () => {
  return (
    <>
      <div className="page-container">
        <h1>Exercícios</h1>
        <section>
          <h2>
            Filtrar:
          </h2>
        </section>
        <ExercisesList />
      </div>
    </>
  )
}
