import { InputBox } from '../styled'
import { Input } from '../index'
import { useState } from 'react'
import validator from 'validator'

export const InputEmail = ({ label, name }) => {
  const [emailError, setEmailError] = useState('')
  const change = (e) => {
    const email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('Email valido!')
    } else {
      setEmailError('Email invalido!')
    }
  }
  return (
    <InputBox>
      <span>{label}</span>
      <Input type="text" name={name} onChange={change} />
      <span>{emailError}</span>
    </InputBox>
  )
}
