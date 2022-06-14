import { Input } from '../index'

export const InputPassword = ({ label, onChange, name }) => {
  return (
    <Input type="password" name={name} label={label} onChange={onChange} />
  )
}
