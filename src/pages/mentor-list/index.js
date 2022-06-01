import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { Container, Page } from './styled.js'
import { Link } from 'react-router-dom'

export const MentorListPage = () => {
  const { t } = useTranslation()
  const handleSubmit = () => { }
  return (
    <>
    <Page>
      <section>
        <h1>{t('user.title')}</h1>
        <InputSearch/>
        <div className ='button'>
          <PrimaryButton text={t('user.newMentor.text')} onClick={handleSubmit} />
          <Link to={`/challenges/hiring-process/${process.id}`}>{process.name}</Link>

        </div>
        </section>
    </Page>
    <Container>
      <Table>
        <tbody>
          <tr>
            <td>{t('user.descriptionTable.name')}</td>
            <td>{t('user.descriptionTable.status')}</td>
            <td>{t('user.descriptionTable.registrationDate')}</td>
            <td>{t('user.descriptionTable.registrationInformation')}</td>
            <td>{t('user.descriptionTable.shares')}</td>
          </tr>
          </tbody>
        </Table>
      </Container>
      </>
  )
}
export default MentorListPage
