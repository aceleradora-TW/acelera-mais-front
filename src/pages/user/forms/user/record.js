import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { client } from '../../../../service'
import { UserForm } from '.'

export const RecordPage = () => {
  const { token } = useParams()
  const [verify, setVerify] = useState([])

  useEffect(() => {
    client.get(`/user/link_validation/${token}`)
      .then(res => {
        setVerify(res.data.data.verified)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  if (verify === true) {
    return (
      <div>
        <UserForm />
      </div>
    )
  }
  return (
    <div>
      <h1>Link Expirado</h1>
      <p>Infelizmente o link que você tentou acessar expirou, tente novamente pedindo um novo link para quem lhe forneceu o mesmo</p>
    </div>
  )
}
export default RecordPage
