import { Input } from '../index'

export const InputText = ({ label, onChange, name, placeholder, value }) => {
  return (
    <Input type="text" name={name} value={value} label={label} placeholder={placeholder} onChange={onChange} />
  )
}
