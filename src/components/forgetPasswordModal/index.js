import { useState } from 'react'
import Button from '../buttons/button'
import {
  Title,
  Header,
  Input
} from './style'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
export const ForgetPassword = ({ title, children, label, callback, icon, className, text, disabled }) => {
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
      onClick={() => setShow(true)}> clique aquiii</a>
  }

  return (
    <>
      <Header>
        <Title>{(t('login.forgetPassword'))}</Title>
        <Input>{text}</Input>
        <Button icon={faTimes}
          className="close"
          onClick={onClose}
        />
      </Header>
    </>
  )
}
