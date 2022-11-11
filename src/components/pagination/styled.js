import styled from 'styled-components'

export const List = styled.ul`
display: flex; 
list-style: none;
width: 50%;
li{
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
a {
  text-decoration: none;
  color: black;
}

.active{
  background-color: rgb(68, 68, 255);
  color: white;
  border-radius: 5px;

  a {
    color: white;
  }
}
`
