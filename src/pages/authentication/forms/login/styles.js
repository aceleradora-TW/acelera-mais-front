import styled from 'styled-components'

export const LoginDivPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
    font-size: 32px;
    padding: 30px;
  }
`

export const LoginDivForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  width: 400px;
  height: 400px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 250px;
    height: 200px;
    flex-wrap: wrap;
  }

  input {
    border: none;
    border-bottom: 1px solid gray;
    width: 100%;
    height: 30px;
  }

  button {
    width: 200px;
    height: 30px;
    background-color: black;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }  
`
