import { useTranslation } from 'react-i18next'
export const Feedback = ({ exercise, toggle }) => {
  const evaluation = exercise.evaluation
  if (!evaluation.feedback) return null
  const { t } = useTranslation()
  return (
    <tr>
      <td colSpan="6" className={toggle}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <strong>{exercise.name}</strong>
            <p>{t('exercise.evaluate.score')} {evaluation.score}</p>
            <p>{t('exercise.evaluate.feedback')} {evaluation.feedback} </p>
          </div>
        </div>
      </td>
    </tr>
  )
}
