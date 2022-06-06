import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { Container, Page } from './styled.js'
import { useEffect, useState } from 'react'
import { client } from '../../service'
import { useNavigate } from 'react-router-dom'

export const MentorListPage = () => {
  const { t } = useTranslation()
  const handleSubmit = () => { }
  const pageHome = () => { }
  const [mentors, setMentors] = useState([])
  const navigate = useNavigate()
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
      .then(res => setMentors(res.data))
      .catch(err => {
        console.log(err)
        setMentors([])
        navigate('/')
      })
  }, [])

  return (
    <>
    <Page>
      <section>
        <h1>{t('user.title')}</h1>
        <InputSearch/>
        <div className ='button'>
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
            {mentors.map((userMentors) =>
            <tr key={userMentors}>
              <td>{userMentors.name}</td>
              <td>botao</td>
              <td>{formatDate(userMentors.createdAt)}</td>
              <td>{userMentors.email}</td>
              <td>{userMentors.telephone}</td>
              <td><button></button></td>
              <td><button></button></td>
              <td><button></button></td>
            </tr>
            )}
          </tbody>
        </Table>
      </Container>
      </>
  )
}
export default MentorListPage
