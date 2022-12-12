import { useState } from 'react'
import Button from '../buttons/button'
import {
  Label,
  Section,
  Input
} from '../forgetPasswordModal/style'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export const ForgetPassword = ({ callback, disabled }) => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()
  const onClose = () => {
    setShow(false)
    if (callback) {
      callback()
    }
  }

  if (!show) {
    return <a href='#'
      disabled={disabled}
      onClick={() => setShow(true)}>Esqueci minha senha</a>
  }

  return (
    <>
      <Section>
        <Label>{(t('login.forgetPassword'))}</Label>
        <Input />
        <Button icon={faTimes}
          className="close"
          onClick={onClose}
        />
      </Section>
    </>
  )
}
