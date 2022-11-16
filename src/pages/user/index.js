import { useTranslation } from 'react-i18next'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { UserModal } from './components/user-modal'
import { Container, Page, FlexSpaceBetween, Message } from './components/mentor-register/styled.js'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { client } from '../../service'
import Button from '../../components/buttons/button'
import { ToggleButton } from '../../components/toggle'
import { Status } from '../../components/status'
import { CreateLink } from './components/link-modal'
import humanizeDuration from 'humanize-duration'
import { Pagination } from '../../components/pagination'

export const MentorPage = () => {
  const { t } = useTranslation()
  const [mentors, setMentors] = useState([])
  const [message, setMessage] = useState([])

  useEffect(() => {
    client.get('/user')
      .then(res => {
        res.data.data.length > 0
          ? setMentors(res.data.data)
          : setMessage(t('user.message.404'))
      })
      .catch(err => {
        console.log(err)
        setMessage(t('user.message.500'))
      })
  }, [])

  const isEnabled = flag => flag === 'user-enabled'

  const handleToggleButton = (id) => async (checked, setChecked) => {
    const word = checked ? t('user.toggle.off') : t('user.toggle.on')
    const message = t('user.toggle.alert.message', { value: word.toLowerCase() })
    if (confirm(message)) {
      setChecked(prevState => !prevState)
      const flag = checked ? 'user-disabled' : 'user-enabled'
      await client.put(`/user/${id}`, { flag }).then(res => window.location.reload(true))
    }
  }

  const humanizeDate = (date) => {
    const actualDuration = Date.now() - new Date(date)
    return humanizeDuration(actualDuration, {
      language: navigator.language.split('-').shift(),
      units: ['d'],
      round: true
    })
  }
  return (
    <>
      <Page>
        <section>
          <h1>{t('user.title')}</h1>
          <InputSearch />
          <div className="button-container">
            <CreateLink
              title='linkGeneration.tittle'
              text='linkGeneration.text'
              icon={faPlus} />
            <UserModal
              title='mentorRegistration.title'
              text='mentorRegistration.text'
              icon={faPlus} />
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
                <tr key={key} >
                  <td>{mentor.name}</td>
                  <td>
                    <Status
                      status={mentor.flag}
                      options={
                        {
                          status: {
                            green: ['user-enabled'],
                            red: ['user-disabled'],
                            yellow: ['first-login', 'email-resent']
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
                  <td>{humanizeDate(mentor.createdAt)}</td>
                  <td>
                    <FlexSpaceBetween>
                      <p>{mentor.email}</p>
                      <p>{mentor.telephone}</p>
                    </FlexSpaceBetween>
                  </td>
                  <td>
                    <FlexSpaceBetween>
                      <Button
                        className={'button-default'}
                        text={t('user.button.resend')}
                        onClick={() => {
                          client.put(`/user/${mentor.id}/email_verification`,
                            { email: mentor.email })
                            .then(res => res.data)
                            .then(res => alert(res.message))
                            .catch(({ response }) => alert(response.data.msg))
                        }}
                      />
                      <UserModal
                        id={mentor.id}
                        method='PUT'
                        title='editMentor.title'
                        text='editMentor.edit'
                      />
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
        <Pagination />
      </Container>
    </>
  )
}
export default MentorPage
