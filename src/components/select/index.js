import { Container } from './select'
const Select = ({ options, onChange, placeholder, name, label, onSelect }) => {
  return (
    <Container>
      <label>{label}</label>
      <select name={name} onChange={onChange} onSelect={onSelect}>
        <option>{placeholder}</option>
        {options.map((option, key) => (<option key={key} value={option.value}> {option.label} </option>))}
      </select>
    </Container>
  )
}

export default Select
