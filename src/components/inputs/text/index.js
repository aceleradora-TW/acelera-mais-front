import { Input } from '../index'

export const InputText = ({ label, onChange, name }) => {
  return (
    <Input type="text" name={name} label={label} onChange={onChange} />
  )
}
