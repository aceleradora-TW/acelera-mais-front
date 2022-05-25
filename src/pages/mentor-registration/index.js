import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
// import { Table } from '../../components/table/table'
import { MentorRegistrationTable } from './styled.js'

export const MentorRegistrationPage = () => {
  const { t } = useTranslation()
  const handleSubmit = () => { }
  const pageHome = () => { }
  return (
    <>
    <div className="page-container">
      <section>
        <h1>{t('user.title')}</h1>
        <InputSearch/>
        <div className ='button'>
          <PrimaryButton text={t('user.newMentor.text')} onClick={handleSubmit} />
          <PrimaryButton text={t('user.backButton')} onClick={pageHome} />
        </div>
      </section>
    </div>
    <MentorRegistrationTable>
          <tr>
            <td>NOME</td>
            <td>STATUS</td>
            <td>DATA DE CADASTRO</td>
            <td>INFORMAÇÃO DE CADASTRO</td>
            <td>AÇÕES</td>
          </tr>
        </MentorRegistrationTable>
    </>
  )
}
export default MentorRegistrationPage
