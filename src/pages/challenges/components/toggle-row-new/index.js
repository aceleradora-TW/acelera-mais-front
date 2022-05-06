import { faAngleDown, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ActionButton from '../../../../components/buttons/action'
import Button from '../../../../components/buttons/button'
import { Status } from '../../../../components/status'
import { client } from '../../../../service'
import { useNavigate } from 'react-router-dom'
import { Tr } from './styled'
import { useTranslation } from 'react-i18next'
import { Feedback } from '../feedback-new'
import {
  getStatus,
  hasFeedback,
  isClosedChallenge,
  isClosedOrPreparing,
  isPreparedChallenge,
  isPreparingOrOpened
} from './helper'

export const ToggleRow = ({ item }) => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const [mentorNameLocal] = useState(localStorage.getItem('mentorName'))
  const toggle = checked ? 'toggle-on' : 'toggle-off'
  const status = isClosedOrPreparing({ status: getStatus(item) })

  const handleClick = () => {
    setChecked(!checked)
  }

  const handleSubmit = () => {
    const id = window.location.pathname.split('/').pop()
    client.patch(`/evaluation/${item.evaluation.id}`, { mentorName: mentorNameLocal })
    navigate(`/challenges/${item.id}/hiring-process/${id}`)
  }

  return (
    <>
      <Tr>
        <td>{item.name}</td>
        <td>{item.type || t('challenge.toggleRow.type')}</td>
        <td></td>
        <td className='options'>
          <span>
            <Status
              status={getStatus(item)}
              options={{
                opened: 'status.opened',
                closed:
                  t(
                    'challenge.toggleRow.status.closed',
                    { mentor: item.evaluation.mentorName || '' }
                  ),
                preparing:
                  t(
                    'challenge.toggleRow.status.preparing',
                    { mentor: item.evaluation.mentorName || '' }
                  )
              }} />
          </span>
        </td>
        <td>
          < ActionButton
            text={t('challenge.toggleRow.evaluate')}
            icon={faPen}
            disabled={!(isClosedChallenge(item) || isPreparedChallenge(item, mentorNameLocal))}
            onClick={handleSubmit} />
        </td>
        <td className='avaliator-col'>{
          <Button
            classe={`${toggle} primary`}
            disabled={isPreparingOrOpened({ status: getStatus(item) })}
            onClick={handleClick}
            icon={faAngleDown} />
        }</td>
      </Tr>
      {status && hasFeedback(item) ? <Feedback exercise={item} toggle={toggle} /> : null}
    </>
  )
}
