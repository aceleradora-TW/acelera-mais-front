import { Input } from '../index'

export const InputTelephone = ({ label, name }) => {

  const onChange = () => {

  }

  return (
    <Input type="tel" name={name} label={label} onChange={onChange} />
  )
}