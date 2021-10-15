import './button.css'

const Button = ({ onClick, text }) => {
  return (
    <button className="btn-new-process" onClick={onClick}>{text}</button>
  )
}

export default Button
