import style from 'styled-components'

export const ContainerReset = style.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
`
export const Header = style.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
padding-left: 40px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
background-color:#e7e7e7 ;
border-bottom: 1px #aea9bb solid;
`
export const Content = style.div`
  min-width: 500px;
  border: 1px solid #aea9bd;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
`
export const Section = style.div`
border: 1px solid #aea9bd;
margin: 20px 40px 0;
padding: 100px;
font-size: 20px;
font-weight: 600;
`
