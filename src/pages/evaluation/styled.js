import styled from 'styled-components'

export const Subtitle = styled.h2`
  margin-bottom: 10px;
  color: rgb(149, 149, 149);
`

export const Anchor = styled.a`
  background-color: #ddd;
  color: black;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;

  svg {
    margin-right: 5px;
  }
`

export const Container = styled.div`
  text-align: justify;
  padding: 30px;
  width: 100%;
  margin-top: 20px;

  h1 {
    font-size: 40px;
    color: rgb(149, 149, 149);
    font-weight: bold;
  }
`
export const HeaderContainer = styled.section`
  display: flex;
  justify-content: right;  

`

export const Download = styled.div`
  border: 1px solid #ababab;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
}

  a.default {
    background-color: #dddcdc;
    color: black;
    margin: 1%;
    text-decoration: none;
  }
`
export const AnswerContainer = styled.div`
  border: 1px solid #ababab;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
}

h2 {
  color: rgb(149, 149, 149);
}
`
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: right;
  margin: 20px 0;
  
  & > .primary {
    margin-left: 10px;
  }
`
export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  
  & > .sucess {
    margin-left: 10px;
  }
`

export const ScoreContainer = styled.div`
  textarea#message-text {
    display: block;
    margin: 20px 0 !important;
    width: 100%;
    height: 80px;
  }
`
