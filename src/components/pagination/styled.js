import styled from 'styled-components'

export const List = styled.section`
display: flex; 
justify-content: center;
align-items: center;
margin-top: 30px;
a{
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 10px;
  margin: 5px;
}
.icon{
  display:flex;
  justify-content: space-between;
  margin: 5px 5px;
}

.active{
  background-color: rgb(68, 68, 255);
  color: white;
  border-radius: 5px;
}
`
