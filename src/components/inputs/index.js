import './style.css'

export const Input = ({ id, type, label, onChange, name }) => {
  return (
    <label className="input-box">
      <span>{label}</span>
      <input id={id} type={type} name={name} onChange={onChange} />
    </label>
  )
}
