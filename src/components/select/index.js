import './select.css'

const Select = ({ options, onChange, name }) => {
  return (
    <div>
      <label> Filtrar:</label>
      <select id="select" name="select">
        <option selected disabled hidden>Tipo</option>
        <option className="filter" value="valor1">Backend</option>
        <option className="filter" value="valor2">Frontend</option>
        <option className="filter" value="valor3">Fullstack</option>
      </select>
    </div>
  )
}

export default Select
