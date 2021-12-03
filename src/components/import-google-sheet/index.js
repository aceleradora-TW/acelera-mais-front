import React, { useState } from 'react'
import { InputText } from '../inputs/text'
import Button from '../button'
import { client } from '../../service'

const initialDataCandidate = {
  link: ''
}

export const ImportGoogleSheet = ({ method = 'POST', id = '', callback = () => { } }) => {
  const [dataCandidates, setDataCandidates] = useState(initialDataCandidate)

  const handleImport = (e) => {
    const { id } = e.target
    const data = dataCandidates
    client.post(`candidate/hiring_process/${id}`,
      {
        method,
        data
      })
      .then(resp => {
        alert(resp.data.message)
        callback(resp.data)
        location.reload()
      }).catch(error => {
        alert(error.response.data.msg)
      })
  }

  const onChange = (e) => {
    const { value } = e.target
    setDataCandidates({
      ...dataCandidates,
      link: value
    })
  }
  return (
    <>
      <InputText name="name" label="Insira a URL da planilha:" onChange={onChange} />
      <Button id={process.id} classe='button-submit' type="button" text='Enviar' onClick={handleImport}>
        Enviar
      </Button>
    </>
  )
}
