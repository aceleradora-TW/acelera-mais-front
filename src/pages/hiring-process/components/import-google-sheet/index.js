import React, { useState } from 'react'
import { InputText } from '../../../../components/inputs/text'
import PrimaryButton from '../../../../components/buttons/primary'
import { client } from '../../../../service'
import { useTranslation } from 'react-i18next'

const initialDataGoogleSheet = {
  link: ''
}

export const ImportGoogleSheet = ({ id = '', endpoint = '' }) => {
  const [dataGoogleSheet, setDataGoogleSheet] = useState(initialDataGoogleSheet)
  const { t } = useTranslation()
  const handleImport = () => {
    client.post(`${endpoint}/hiring_process/${id}`, dataGoogleSheet)
      .then(resp => {
        alert(t('hiringProcess.importGoogleSheet.saveMensage', { value: resp.data.data.count }))
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
      <InputText name="name" label={t('hiringProcess.importGoogleSheet.putUrl')} onChange={onChange} />
      <PrimaryButton text={t('hiringProcess.importGoogleSheet.sendButton')} onClick={handleImport} />
    </>
  )
}
