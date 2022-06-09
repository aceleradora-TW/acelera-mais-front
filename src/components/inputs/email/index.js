import { InputBox } from '../styled'
import { Input } from '../index'
import { useState } from 'react'
import validator from 'validator'
import styled from 'styled-components'

const MessageError = styled.span`
  font-size: 16px;
  color: #ff3d00
`
export const InputEmail = ({ label, name, onChange }) => {
  const [emailError, setEmailError] = useState('')
  const change = (e) => {
    const email = e.target.value
    const message = validator.isEmail(email) ? '' : 'Email invalido!'
    setEmailError(message)
    onChange(e)
  }
  return (
    <InputBox>
      <span>{label}</span>
      <Input type="text" name={name} onChange={change} />
      <MessageError>{emailError}</MessageError>
    </InputBox>
  )
}
