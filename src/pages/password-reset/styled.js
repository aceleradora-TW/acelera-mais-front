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
export const HeaderTitle = style.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
background-color:#e7e7e7 ;
border-bottom: 1px #aea9bb solid;
font-weight: bold;
`
export const Content = style.div`
min-width: 500px;
border: 1px solid #aea9bd;
background-color: #fff;
box-sizing: border-box;
border-radius: 10px;
`
export const Section = style.div`
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font-family: Arial, Helvetica, sans-serif;
display: block;
font-weight: bold;
vertical-align: baseline;
`
export const ChangePassword = style.div`
box-sizing: border-box;
margin-block-end: 20px;
margin-top: 10px;
padding-right: 200px;
padding-bottom: 10px;
border-radius: 10px;
`

export const ModalBody = style.div`
border: 1px solid #aea9bd;
margin: 20px 40px 0;
padding: 20px;
font-size: 15px;
font-weight: 500;
`
