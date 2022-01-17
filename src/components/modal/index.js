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

export const Modal = ({ title, children, label, callback, icon, classe, text, reminder, disabled }) => {
  const [show, setShow] = useState(false)

  const onClose = () => {
    setShow(false)
    if (callback) {
      callback()
    }
  }

  if (!show) {
    return <Button disabled={disabled} icon={icon} classe={classe} text={text} onClick={() => setShow(true)}>{label}</Button>
  }

  return (
    <>
      <Button icon={icon} classe={classe} text={text}>{label}</Button>
      <Container onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>
          <Header>
            <Title>{title}</Title>

            <Button icon={faTimes}
              classe="close"
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
