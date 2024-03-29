import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  padding: 40px;
  Table{
    font-weight: bold;
    color: #000;
  }
  
  padding: 0 20px;
`
export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Page = styled.div`
  text-align: justify;
  padding:20px;

  h1 {
    font-size: 40px;
    color: rgb(149, 149, 149);
    font-weight: bold;
  }
  .button-container {
    display: flex;
  }
  section {
    display: flex;
    justify-content: space-between;
  }
  
`
export const PopUp = styled.div`
border: solid 1px;
padding:15px;
justify-content:center;
`
export const Title = styled.div`
background-color: rgb(149, 149, 149);;
border: solid 2px;
`
export const Warning = styled.div`
  display:flex;
  flex-direction: column;
  align-content: center;
  margin:0 15% 0 15%;
  border: 1px solid rgb(139,0,0);
  border-radius: 5px;
  padding: 15px 20px;
  background-color: rgb(250, 128, 114);
  text-align: center;
  color: rgb(139,0,0);

  h1 {
    margin-bottom: 15px;
    font-size: 20px;
    text-transform: uppercase;

    svg {
      margin-right: 10px;
    }
  }

  p {
    margin-bottom: 10px;
  }
`

export const MessageErrorPassword = styled.div`
  font-size: 16px;
  color: #ff3d00;
  font-weight: bold;
  margin-bottom: 10px;
`
