import { Table } from './components/table/index'
import Select from '../../components/select'
import { ToggleRowExercise } from './components/toggle-row-exercise'
import { TableBody } from './components/table-body'
import showFeature from '../../utils/feature-toggle'
import { useTranslation } from 'react-i18next'

export const ChallengePage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="page-container">
        <h1>{t('challenge.title')}</h1>

        {showFeature()
          ? (
            <section>
              <Select options={[
                { value: 'backend', label: 'Backend' },
                { value: 'frontend', label: 'Frontend' },
                { value: 'fullstack', label: 'Fullstack' }
              ]} placeholder={t('challenge.select.placeholder')}
                label={t('challenge.select.label')}
                name="type"
                />
            </section>)
          : null}
        <Table
          BodyComponent={TableBody}
          RowComponent={ToggleRowExercise}
        />
      </div>
    </>
  )
}
