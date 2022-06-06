import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { RegisterModal } from './components/register-modal'
import { Container, Page } from './styled.js'

export const MentorPage = () => {
  const { t } = useTranslation()
  const pageHome = () => { }
  return (
    <>
      <Page>
        <section>
          <h1>{t('user.title')}</h1>
          <InputSearch />
          <div className="button-container">
            <RegisterModal />
            <PrimaryButton text={t('user.backButton')} onClick={pageHome} />
          </div>
        </section>
      </Page>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>{t('user.descriptionTable.name')}</th>
              <th>{t('user.descriptionTable.status')}</th>
              <th>{t('user.descriptionTable.registrationDate')}</th>
              <th>{t('user.descriptionTable.registrationInformation')}</th>
              <th>{t('user.descriptionTable.shares')}</th>
            </tr>
          </thead>
        </Table>
      </Container>
    </>
  )
}
export default MentorPage
