import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { client, setTokenInHeaders } from '../../../../service'
import { Register, UseMessageRegisterError } from '../../components/mentor-register/mentorRegister'

export const MentorRegisterPage = () => {
  const { token } = useParams()
  const [verify, setVerify] = useState([])

  useEffect(() => {
    setTokenInHeaders(token)
    client.get('/user/link_validation')
      .then(res => {
        setVerify(res.data.data.verified || false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {verify ? <Register /> : <UseMessageRegisterError />}
    </>
  )
}
