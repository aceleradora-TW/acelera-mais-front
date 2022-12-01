import { StyledSelectContainer } from './select'
const Select = ({ value, options, onChange, placeholder, name, label, onSelect }) => {
  return (
    <StyledSelectContainer>
      <label>{label}</label>
      <select value={value} name={name} defaultValue={''} onChange={onChange} onSelect={onSelect}>
        <option value={''} disabled={!options.some(option => option.value === placeholder)} >{placeholder}</option>
        {options.filter(option => option.value !== placeholder)
          .map((option, key) => (<option key={key} value={option.value}> {option.label} </option>))}
      </select>
    </StyledSelectContainer>
  )
}

export default Select
