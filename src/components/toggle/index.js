import styled from 'styled-components'
import { useState } from 'react'

const Button = styled.button`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 300px;
  font-size: 16px;
  background-color: white;
  color: rgb(102,102,255);
  border-color: rgb(102,102,255);

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

// const ButtonEnabled = styled.button`
//   border: 1px solid #d3d3d3;
//   border-radius: 5px;
//   padding: 10px 25px;
//   font-weight: 300px;
//   font-size: 16px;
//   color: rgb(102,102,255);
//   border-color: rgb(102,102,255);
//   background-color: white;

//   &:hover {
//     cursor: pointer;
//     opacity: 0.7;
//   }
// `
// const ButtonDisabled = styled.button`
//   border: 1px solid #d3d3d3;
//   border-radius: 5px;
//   padding: 10px 25px;
//   font-weight: 300px;
//   font-size: 16px;
//   color: red;
//   border-color: red;
//   background-color: white;

//   &:hover {
//     cursor: pointer;
//     opacity: 0.7;
//   }
// `

export const ToggleButton = ({
  label = {
    on: 'On',
    off: 'Off'
  }
}) => {
  const [ischecked, setChecked] = useState(label.on)
  const change = () => {
    setChecked((prevState) => !prevState)
  }

  return (
    <Button onClick={change}>
      <span>{ischecked ? 'Habilitar' : 'Desabilitar'}</span>
    </Button>
  )
}
