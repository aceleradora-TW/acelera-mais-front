import { InputBox } from './styled'

export const Input = ({ value, type, label, onChange, name, placeholder = '' }) => {
  return (
    <InputBox>
      <span>{label}</span>
      <input value={value} type={type} name={name} onChange={onChange} placeholder={placeholder} />
    </InputBox>
  )
}
