// import Button from '../buttons/button'
import aceleraLogo from './aceleraLogo.png'
import { useNavigate } from 'react-router'
import './Styled.css'

export const Logo = () => {
  const image = aceleraLogo
  const navigate = useNavigate()
  console.log(image)
  const handleClick = () => {
    navigate('/home')
  }
  return (
    <div className='logoDiv'>
      <button onClick={handleClick} className='logoButton'>
        <img src={image} className='logo' />
      </button>
    </div>

  )
}
