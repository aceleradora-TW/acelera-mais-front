import { Input } from '../index'

export const InputText = ({ value, label, onChange, name, placeholder }) => {
  return (
    <Input value={value} type="text" name={name} label={label} placeholder={placeholder} onChange={onChange} />
  )
}
