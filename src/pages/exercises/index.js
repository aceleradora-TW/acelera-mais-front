import { ExercisesList } from '../../pages/exercises/components/exercises-list'
import Select from '../../components/select'
import showFeature from '../../utils/feature-toggle'
import { useTranslation } from 'react-i18next'

export const ExercisesPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="page-container">
        <h1>{t('exercise.title')}</h1>
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
