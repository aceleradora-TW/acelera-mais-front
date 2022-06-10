import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { Container, Page } from './styled.js'
import { useEffect, useState } from 'react'
import { client } from '../../service'

export const MentorListPage = () => {
  const { t } = useTranslation()
  const handleSubmit = () => { }
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
          <div className='button'>
            <PrimaryButton text={t('user.newMentor.text')} onClick={handleSubmit} />
            <PrimaryButton text={t('user.backButton')} onClick={pageHome} />
          </div>
        </section>
      </Page>
      <Container>
        <Table>
          <thead>
            <tr>
              <td>{t('user.descriptionTable.name')}</td>
              <td>{t('user.descriptionTable.status')}</td>
              <td>{t('user.descriptionTable.registrationDate')}</td>
              <td>{t('user.descriptionTable.registrationInformation')}</td>
              <td>{t('user.descriptionTable.shares')}</td>
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
export default MentorListPage
