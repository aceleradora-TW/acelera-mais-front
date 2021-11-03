import { Input } from '../index'
// eslint-disable-next-line react/prop-types
export const InputDate = ({ label, onChange, name }) => {
  return (
    <Input type="date" name={name} label={label} onChange={onChange}/>
  )
}
