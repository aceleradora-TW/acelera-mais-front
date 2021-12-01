import { Input } from '../index'

export const InputText = ({ id, label, onChange, name }) => {
  return (
    <Input id={id} type="text" name={name} label={label} onChange={onChange} />
  )
}
