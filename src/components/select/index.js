import './select.css'
import '../select/select.js'
const Select = ({ options, onChange, placeholder, name, label, onSelect }) => {
  return (
    <Select>
      <label>{label}</label>
      <select name={name} onChange={onChange} onSelect={onSelect}>
        <option>{placeholder}</option>
        {options.map((option, key) => (<option key={key} value={option.value}> {option.label} </option>))}
      </select>
    </Select>
  )
}

export default Select
