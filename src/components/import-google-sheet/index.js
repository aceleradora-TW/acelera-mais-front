import React, { useState } from 'react'
import { InputText } from '../inputs/text'
import Button from '../button'
import { client } from '../../service'

const initialDataGoogleSheet = {
  link: ''
}

export const ImportGoogleSheet = ({ id = '', url = '' }) => {
  const [dataGoogleSheet, setDataGoogleSheet] = useState(initialDataGoogleSheet)

  const handleImport = () => {
    client.post(`${url}/${id}`, dataGoogleSheet)
      .then(resp => {
        alert(resp.data.message)
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
      <Button classe='button-submit' type="button" text='Enviar' onClick={handleImport}>
        Enviar
      </Button>
    </>
  )
}
