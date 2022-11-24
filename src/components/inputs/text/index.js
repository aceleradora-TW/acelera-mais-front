import { Input } from '../index'

export const InputText = ({ label, onChange, name, placeholder }) => {
  return (
    <Input type="text" name={name} label={label} placeholder={placeholder} onChange={onChange} />
  )
}
