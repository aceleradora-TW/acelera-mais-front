import styled from 'styled-components'

export const ButtonEnabled = styled.button`
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
export const ButtonDisabled = styled.button`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 300px;
  font-size: 16px;
  color: red;
  border-color: red;
  background-color: white;

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
