import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { client, setTokenInHeaders } from '../../../../service'
import { Register, UseMessageRegisterError } from '../../components/mentor-register/mentorRegister'
import { Modal } from './styled'

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
        setIsLoading(res.data.data.verified || false)
      })
      .catch(err => {
        setVerified(false)
        setIsLoading(false)
        console.log(err)
      })
  }, [])

  return (
    <Modal>
      {verified ? <Register /> : <UseMessageRegisterError verify={isLoading}/>}
    </Modal>
  )
}
