import { useState } from 'react'
import Button from '../buttons/button'
import {
  Title,
  Header,
  Container,
  Content,
  Reminder,
  ModalBody,
  Footer
} from './style'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ title, children, label, callback, icon, className, text, reminder, disabled }) => {
  const [show, setShow] = useState(false)

  const onClose = () => {
    setShow(false)
    if (callback) {
      callback()
    }
  }

  if (!show) {
    return <Button
      disabled={disabled}
      icon={icon}
      className={className}
      text={text}
      onClick={() => setShow(true)}>{label}</Button>
  }

  return (
    <>
      <Button icon={icon} className={className} text={text}>{label}</Button>
      <Container onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>
          <Header>
            <Title>{title}</Title>

            <Button icon={faTimes}
              className="close"
              onClick={onClose}
            />
          </Header>
          <Reminder>{reminder}</ Reminder>
          <ModalBody>{children}</ModalBody>
          <Footer></Footer>
        </Content>
      </Container>
    </>
  )
}
