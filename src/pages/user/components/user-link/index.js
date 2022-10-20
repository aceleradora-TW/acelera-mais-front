import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { InputText } from '../../../../components/inputs/text'
import { client } from '../../../../service'

export const UserLink = ({ method = 'GET', callback = () => { } }) => {
  const { t } = useTranslation()
  const [link, setLink] = useState([])

  useEffect(() => {
    client.get('/user/link')
      .then(res => {
        res.data.data.length > 0
          ? setLink(res.data.data)
          : setLink(t('user.message.404'))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <InputText name='link' label={t('linkGeneration.text')} placeholder={link.map(link => link)} />
  )
}
