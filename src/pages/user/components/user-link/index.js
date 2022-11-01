import React, { useState, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { useTranslation } from 'react-i18next'
import { InputText } from '../../../../components/inputs/text'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'

export const UserLink = ({ method = 'GET' }) => {
  const { t } = useTranslation()
  const [link, setLink] = useState([])

  const clipboard = () => {
    const clip = copy(link)
    alert(t('linkGeneration.copyLink'))
    return clip
  }
  useEffect(() => {
    client.get('/user/link')
      .then(res => {
        setLink(`${window.location.origin}/${res.data.data.link}`)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <InputText name='link' label={t('linkGeneration.text')} placeholder={link} />
      <PrimaryButton
        icon={null}
        onClick={clipboard}
        text={t('linkGeneration.registerButton')}
      />
    </div>
  )
}
