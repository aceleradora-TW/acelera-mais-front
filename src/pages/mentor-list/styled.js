
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  padding: 40px;
  Table{
    font-weight: bold;
    color: #000;

  }
  .styled {
    display: flex;
    justify-content: space-between;
  }

  button {
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px arial;
    cursor: pointer;
    border-color: rgba(157, 134, 96, 0.349);
  }
  .color{
    background-color: white;
    color: darkblue;

  }
  .color: hover{
    background-color: darkblue;
    color: white;
  }
  .disable: hover{
    background-color: darkred;
    color: white;
  }
  .disable{
    background-color: white;
    color: darkred;
  }
  .warning {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
`

export const Page = styled.div`
  text-align: justify;
  padding:20px;

h1 {
    font-size: 40px;
    color: rgb(149, 149, 149);
    font-weight: bold;
  }
  
  section {
    display: flex;
    justify-content: space-between;
  }
  
`
