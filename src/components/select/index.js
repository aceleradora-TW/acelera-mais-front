import { StyledSelectContainer } from './select'
const Select = ({ value, options, onChange, placeholder, name, label, onSelect }) => {
  // const isDisabled = () => {
  //   return !options.some(option => option.value === placeholder)
  // }
  return (
    <StyledSelectContainer>
      <label>{label}</label>
      <select value={value} name={name} onChange={onChange} onSelect={onSelect}>
        <option disabled selected>{placeholder}</option>
        {options.map((option, key) => (<option key={key} value={option.value}> {option.label} </option>))}
      </select>
    </StyledSelectContainer>
  )
}

export default Select
