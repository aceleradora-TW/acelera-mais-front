import { useTranslation } from 'react-i18next'
import { InputSearch } from '../../components/inputs/search'
import { Table } from '../../components/table/table'
import { UserModal } from './components/user-modal'
import { Container, Page, FlexSpaceBetween, Message } from './components/mentor-register/styled.js'
import { faPlus, faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { client } from '../../service'
import Button from '../../components/buttons/button'
import { ToggleButton } from '../../components/toggle'
import { Status } from '../../components/status'
import { CreateLink } from './components/link-modal'
import { SortTable } from '../../components/sort-table'
import humanizeDuration from 'humanize-duration'
import { Paginator } from '../../components/pagination'
import { getParams } from '../../utils/index'

export const MentorPage = () => {
  const { t } = useTranslation()
  const [mentors, setMentors] = useState([])
  const [message, setMessage] = useState([])
  const [orderBy, setOrderBy] = useState('name')
  const [orientation, setOrientation] = useState('ASC')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [countUsers, setCountUsers] = useState(0)

  const hasMentors = ({ length }) => length > 0
  const payload = {
    orderBy,
    orientation,
    page: search ? 0 : page,
    search
  }

  useEffect(() => {
    client.get(`/user?${getParams(payload)}`)
      .then(res => res.data.data)
      .then(res => {
        hasMentors(res.users)
          ? setMentors(res.users)
          : setMessage(t('user.message.404'))
        setCountUsers(res.count)
      })
      .catch(err => {
        console.log(err)
        setMessage(t('user.message.500'))
      })
  }, [orderBy, orientation, page, search])

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
          <InputSearch
            onChange={(e) => setSearch(e.target.value)}
          />
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
              <th>
                < SortTable
                  onClick={() => setOrderBy('name')}
                  setOrientation={setOrientation}
                  iconUp={faSortAlphaUp}
                  iconDown={faSortAlphaDown}
                  label={t('user.descriptionTable.name')}
                />
              </th>
              <th>{t('user.descriptionTable.type')}</th>
              <th>{t('user.descriptionTable.status')}</th>
              <th>
                <SortTable
                  onClick={() => setOrderBy('createdAt')}
                  setOrientation={setOrientation}
                  label={t('user.descriptionTable.registrationDate')}
                />
              </th>
              <th>{t('user.descriptionTable.registrationInformation')}</th>
              <th>{t('user.descriptionTable.shares')}</th>
            </tr>
          </thead>
          <tbody>
            {mentors
              ? mentors.map((mentor, key) =>
                <tr key={key} >
                  <td>{mentor.name}</td>
                  <td>{t(`user.types.${mentor.type}`)}</td>
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
                        user={mentor}
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
              : <tr>
                  <td>Carregando...</td>
                </tr>
            }
          </tbody>
        </Table>
        <Message>
          {message}
        </Message>
        <Paginator
          total={countUsers}
          page={page}
          onChange={
            (event, page) => setPage(page)
          }
        />
      </Container>
    </>
  )
}
export default MentorPage
