import React from 'react'
import { useParams } from 'react-router'
import { client } from '../../../../service'
// import { client } from '../../../../service'

export const RecordPage = () => {
  const { token } = useParams()
  client.get(`/user/link_validation/${token}`)
    .then(res => {

    })

  return (
    <div>
      <h1>{token}</h1>
    </div>
  )
}
export default RecordPage
