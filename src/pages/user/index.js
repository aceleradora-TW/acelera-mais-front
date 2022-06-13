import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { UserModal } from './components/user-modal'
import { Container, Page } from './styled.js'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
            <UserModal
              title='mentorRegistration.title'
              text='mentorRegistration.text'
              icon={faPlus} />
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
