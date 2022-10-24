import { Table } from './components/table/index'
import Select from '../../components/select'
import { ToggleRowExercise } from './components/toggle-row-exercise'
import { TableBody } from './components/table-body'
import showFeature from '../../utils/feature-toggle'
import { useTranslation } from 'react-i18next'
import BackButton from '../../components/BackButton'

export const ChallengePage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="page-container">
        <div className="nav-challengs-between">
          <h1>{t('challenge.title')}</h1>
          <BackButton />
        </div>

        {showFeature()
          ? (
            <section>
              <Select options={[
                { value: 'backend', label: 'Backend' },
                { value: 'frontend', label: 'Frontend' },
                { value: 'fullstack', label: 'Fullstack' }
              ]} placeholder={t('challenge.select.placeholder')} label={t('challenge.select.label')} name="type" onChange={() => { }} />
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
