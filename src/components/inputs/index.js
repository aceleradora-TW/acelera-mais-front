import { InputBox } from './styled'

export const Input = ({ type, label, value, onChange, name, placeholder = '' }) => {
  return (
    <InputBox>
      <span>{label}</span>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </InputBox>
  )
}
