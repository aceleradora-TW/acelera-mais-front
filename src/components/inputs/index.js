import './style.css'
// eslint-disable-next-line react/prop-types
export const Input = ({ type, label, onChange, name }) => {
  return (
    <label className="input-box">
      <span>{label}</span>
      <input type={type} name={name} onChange={onChange} />
    </label>
  )
}
