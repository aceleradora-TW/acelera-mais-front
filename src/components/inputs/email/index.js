import { InputBox } from '../styled'
import { Input } from '../index'

export const InputEmail = ({ onChange, label, name }) => {
  return (
    <InputBox>
      <span>{label}</span>
      <Input type="email" name={name} onChange={onChange} />
    </InputBox>
  )
}
