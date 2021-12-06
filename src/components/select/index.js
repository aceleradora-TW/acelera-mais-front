import './select.css'

const Select = ({ options, onChange, placeholder, name, label }) => {
  return (
    <div className="select-container">
      <label>{label}</label>
      <select name={name} onChange={onChange}>
        <option>{placeholder}</option>
        {options.map((option, key) => (<option key={key} value={option.value}> {option.label} </option>))}
      </select>
    </div>
  )
}

export default Select
