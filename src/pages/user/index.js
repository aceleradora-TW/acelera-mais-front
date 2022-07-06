import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { RegisterModal } from './components/register-modal'
import { Container, Page, FlexSpaceBetween, Message } from './styled.js'
import { useEffect, useState } from 'react'
import { client } from '../../service'
import Button from '../../components/buttons/button'
import { ToggleButton } from '../../components/toggle'
import { Status } from '../../components/status'

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

  const isEnabled = flag => flag === 'user-enabled'
  const pending = flag => flag === 'first-login' || flag === 'email-resent'

  const handleToggleButton = (id) => async (checked, setChecked) => {
    const word = checked ? t('user.toggle.off') : t('user.toggle.on')
    const message = t('user.toggle.alert.message', { value: word.toLowerCase() })
    if (confirm(message)) {
      setChecked(prevState => !prevState)
      const flag = checked ? 'user-disabled' : 'user-enabled'
      await client.put(`/user/${id}`, { flag })
    }
  }

  const getStatus = (flag) => {
    if (isEnabled(flag)) {
      return 'status-opened'
    } else if (pending(flag)) {
      return 'status-preparing'
    }
    return 'status-closed'
  }

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
                  <td>
                    <Status
                    status={getStatus(mentor.flag)}
                    options={
                      {
                        status: {
                          green: ['status-opened'],
                          red: ['status-closed'],
                          yellow: ['status-preparing']
                        },
                        label: {
                          green: 'user.status.green',
                          red: ['user.status.red'],
                          yellow: ['user.status.yellow']
                        }
                      }
                    }
                    />
                  </td>
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
                      <ToggleButton
                        status={isEnabled(mentor.flag)}
                        label={{
                          on: t('user.toggle.on'),
                          off: t('user.toggle.off')
                        }}
                        click={handleToggleButton(mentor.id)}
                      />
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
