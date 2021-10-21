import { Input } from '../index'
// eslint-disable-next-line react/prop-types
export const InputText = ({ label, onChange, name }) => {
  return (
    <Input type="text" name={name} label={label} onChange={onChange} />
  )
}
