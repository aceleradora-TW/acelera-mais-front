import React, { useState } from 'react'
import { InputText } from '../inputs/text'
import Button from '../buttons/button'
import { client } from '../../service'

const initialDataGoogleSheet = {
  link: ''
}

export const ImportGoogleSheet = ({ id = '', endpoint = '' }) => {
  const [dataGoogleSheet, setDataGoogleSheet] = useState(initialDataGoogleSheet)

  const handleImport = () => {
    client.post(`${endpoint}/hiring_process/${id}`, dataGoogleSheet)
      .then(resp => {
        const message = `Salvo com sucesso! Quantidade de importações: ${resp.data.data.count}.`
        alert(message)
      }).catch(error => {
        alert(error.response.data.msg)
      })
  }

  const onChange = (e) => {
    const { value } = e.target
    setDataGoogleSheet({
      ...dataGoogleSheet,
      link: value
    })
  }
  return (
    <>
      <InputText name="name" label="Insira a URL da planilha:" onChange={onChange} />
      <Button classe='primary' type="button" text='Enviar' onClick={handleImport}>
        Enviar
      </Button>
    </>
  )
}
