import styled from 'styled-components'

export const List = styled.ul`
display: flex; 
list-style: none;
width: 50%;
li{
  padding: 10px;
  margin: 5px;
}
.active{
  background-color: rgb(68, 68, 255);
  color: white;
  border-radius: 5px;
}
`
