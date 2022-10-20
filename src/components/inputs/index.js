import { InputBox } from './styled'

export const Input = ({ type, label, onChange, name, placeholder }) => {
  return (
    <InputBox>
      <span>{label}</span>
      <input type={type} name={name} onChange={onChange} placeholder={placeholder} />
    </InputBox>
  )
}
