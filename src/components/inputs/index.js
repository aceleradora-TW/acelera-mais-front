// import './style.css'
import { InputBox } from './styled'

export const Input = ({ type, label, onChange, name }) => {
  return (
    <InputBox>
      <span>{label}</span>
      <input type={type} name={name} onChange={onChange} />
    </InputBox>
    // <Label type={type} name={name} onChange={onChange}>{label}</Label>

  )
}
