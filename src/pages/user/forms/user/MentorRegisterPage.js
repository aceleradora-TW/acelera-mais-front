import { t } from 'i18next'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { client, setTokenInHeaders } from '../../../../service'
import { Register, UseMessageRegisterError } from '../../components/mentor-register/mentorRegister'
import { Modal, Loading } from './styled'

export const MentorRegisterPage = () => {
  const { token } = useParams()
  const [verified, setVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.removeItem('token')
    setTokenInHeaders(token)
    client.get('/user/link_validation')
      .then(res => {
        setVerified(res.data.data.verified || false)
        setIsLoading(false)
      })
      .catch(err => {
        setVerified(false)
        setIsLoading(false)
        console.log(err)
      })
  }, [])

  const MessageLoading = () => {
    return (
      <Loading>
        <h1>{t('mentorRegistration.messageLoading')}...</h1>
        <progress></progress>
      </Loading>
    )
  }
  if (isLoading) {
    return (
      <Modal>
        <MessageLoading />
      </Modal>
    )
  }
  return (
    <Modal>
      {verified ? <Register /> : <UseMessageRegisterError/>}
    </Modal>
  )
}
