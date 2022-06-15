import {
  Title,
  Header,
  Container,
  Content,
  ModalBody
} from './styled'

export const Card = ({ title, children }) => {
  return (
    <Container>
      <Content>
        <Header>
          <Title>{title}</Title>
        </Header>
        <ModalBody>{children}</ModalBody>
      </Content>
    </Container>
  )
}
