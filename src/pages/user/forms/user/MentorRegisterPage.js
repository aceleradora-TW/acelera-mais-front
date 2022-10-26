import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { client, setTokenInHeaders } from '../../../../service'
import { Register, UseMessageRegisterError } from '../../components/mentor-register/mentorRegister'

export const MentorRegisterPage = () => {
  const { token } = useParams()
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    localStorage.removeItem('token')
    setTokenInHeaders(token)
    client.get('/user/link_validation')
      .then(res => {
        setVerified(res.data.data.verified || false)
      })
      .catch(err => {
        setVerified(false)
        console.log(err)
      })
  }, [])

  return (
    <>
      {verified ? <Register /> : <UseMessageRegisterError />}
    </>
  )
}
