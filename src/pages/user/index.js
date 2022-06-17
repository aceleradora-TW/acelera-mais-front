import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { RegisterModal } from './components/register-modal'
import { Container, Page, FlexSpaceBetween, Message } from './styled.js'
import { useEffect, useState } from 'react'
import { client } from '../../service'
import Button from '../../components/buttons/button'

export const MentorPage = () => {
  const { t } = useTranslation()
  const pageHome = () => { }
  const [mentors, setMentors] = useState([])
  const [message, setMessage] = useState([])
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
              mentors.map((mentor, key) =>
                <tr key={key}>
                  <td>{mentor.name}</td>
                  <td>STATUS</td>
                  <td>{mentor.updatedAt}</td>
                  <td>
                    <FlexSpaceBetween>
                      <p>{mentor.email}</p>
                      <p>{mentor.telephone}</p>
                    </FlexSpaceBetween>
                  </td>
                  <td>
                    <FlexSpaceBetween>
                      <Button className='buttonColor' text={t('user.button.resend')} />
                      <Button className='buttonColor' text={t('user.button.edit')} />
                      <Button className='disable' text={t('user.button.disable')} />
                    </FlexSpaceBetween>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
        <Message>
          {message}
        </Message>
      </Container>
    </>
  )
}
export default MentorPage
