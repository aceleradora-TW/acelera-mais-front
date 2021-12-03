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
        alert('Salvo com sucesso. Obs: Para finalizar a integração, compartilhe o e-mail acelera-mais@aceleradora-agil-331516.iam.gserviceaccount.com', resp.data.message)
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
      <Button classe='button-submit' type="button" text='Enviar' onClick={handleImport}>
        Enviar
      </Button>
    </>
  )
}
