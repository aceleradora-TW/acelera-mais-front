import React, { useState } from 'react'
import { InputText } from '../inputs/text'
import Button from '../button'
import { client } from '../../service'

const initialDataCandidate = {
  link: ''
}

export const ImportGoogleSheet = ({ id = '' }) => {
  const [dataCandidates, setDataCandidates] = useState(initialDataCandidate)

  const handleImport = () => {
    client.post(`candidate/hiring_process/${id}`, dataCandidates)
      .then(resp => {
        alert(resp.data.message + '\n Obs: Para finalizar a integração, compartilhe o \n E-mail: acelera-mais@aceleradora-agil-331516.iam.gserviceaccount.com')
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
