import './button.css'

const Button = ({ onClick, text, classe }) => {
  return (
    <button className={classe} onClick={onClick}>{text}</button>
  )
}

export default Button
