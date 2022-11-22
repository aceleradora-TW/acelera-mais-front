import { Input } from '../index'

export const InputText = ({ label, onChange, onBlur, name, placeholder, value }) => {
  return (
    <Input type="text" name={name} value={value} label={label} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
  )
}
