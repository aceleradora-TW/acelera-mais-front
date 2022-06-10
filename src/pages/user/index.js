import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { RegisterModal } from './components/register-modal'
import { Container, Page } from './styled.js'
import { useEffect, useState } from 'react'
import { client } from '../../service'

export const MentorPage = () => {
  const { t } = useTranslation()
  const pageHome = () => { }
  const [mentors, setMentors] = useState([])
  const [message, setMessage] = useState([])
  const formatDate = (date) => {
    const addZero = (number) => number <= 9 ? '0' + number : number
    const newDate = new Date(date)
    const day = addZero(newDate.getUTCDate().toString())
    const month = addZero((newDate.getUTCMonth() + 1).toString())
    const year = newDate.getUTCFullYear()
    return `${day}/${month}/${year}`
  }
  useEffect(() => {
    client.get('/user')
      .then(res => {
        res.data.length > 0
          ? setMentors(res.data)
          : setMessage(t('user.message.404'))
      })
      .catch(err => {
        console.log(err)
        setMessage(t('user.message.500'))
      })
  }, [])
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
          <tbody>
            {
              mentors.map((mentor) =>
                <tr key={mentor}>
                  <td>{mentor.name}</td>
                  <td>STATUS</td>
                  <td>{formatDate(mentor.createdAt)}</td>
                  <td>
                    <div className='styled'>
                      <td>{mentor.email}</td>
                      <td>{mentor.telephone}</td>
                    </div>
                  </td>
                  <td>
                    <div className='styled'>
                      <button className='color'>{t('user.button.resend')}</button>
                      <button className='color'>{t('user.button.edit')}</button>
                      <button className='disable'>{t('user.button.disable')}</button>
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
        <div className='warning'>
          {message}
        </div>
      </Container>
    </>
  )
}
export default MentorPage
