import './select.css'

const Select = ({ options, onChange, placeholder, name, label, onSelect }) => {
  return (
    <div className="select-container">
      <label>{label}</label>
      <select name={name} onChange={onChange} onSelect={onSelect}>
        <option>{placeholder}</option>
        {options.map((option, key) => (<option key={key} value={option.value}> {option.label} </option>))}
      </select>
    </div>
  )
}

export default Select
