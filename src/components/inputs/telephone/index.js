import InputMask from 'react-input-mask'
import { InputBox } from '../styled'

export const InputTelephone = ({ onChange, label, name }) => {
  return (
    <InputBox>
      <span>{label}</span>
      <InputMask mask="(99) 99999-9999" name={name} placeholder="(99) 99999-9999" onChange={onChange} />
    </InputBox>

  )
}
