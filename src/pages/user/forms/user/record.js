import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { client } from '../../../../service'
import { Register } from '../../components/registerMentor/registerMentor'
import { Warning } from '../../styled'

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
      <>
        <Register />
      </>
    )
  }
  return (
    <div>
      <Warning>
        <h1>Erro</h1>
        <p>Infelizmente o link que você acessou teve sua data expirada. </p>
        <p>Por favor, se quiser acessar o seguinte ambiente,
          peço que realize um pedido com quem lhe forneceu o antigo link</p>
      </Warning>
    </div>
  )
}
export default RecordPage
