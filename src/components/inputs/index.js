import './style.css'
// eslint-disable-next-line react/prop-types
export const Input = ({ type, label }) => {
  return (
    <label className="input-box"> <span>{label}</span> <input type={type} /></label>
  )
}
