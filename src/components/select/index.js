import { StyledSelectContainer } from './select'
const Select = ({ options, onChange, placeholder, name, label, onSelect }) => {
  return (
    <StyledSelectContainer>
      <label>{label}</label>
      <select name={name} onChange={onChange} onSelect={onSelect}>
        <option>{placeholder}</option>
        {options.map((option, key) => (<option key={key} value={option.value}> {option.label} </option>))}
      </select>
    </StyledSelectContainer>
  )
}

export default Select
