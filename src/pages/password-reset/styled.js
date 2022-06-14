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
border: 1px solid #000000;
`
export const HeaderTitle = style.div`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;
background-color:#e7e7e7;
`
export const Content = style.div`
min-width: 500px;
border: 1px solid #000000;
background-color: #fff;
box-sizing: border-box;
border-radius: 10px;
`
export const Section = style.div`
margin: 0;
padding: 10px;
border: 0;
font-size: 100%;
font-family: Arial, Helvetica, sans-serif;
display: block;
font-weight: bold;
vertical-align: baseline;
`
export const ModalBody = style.div`
border: 1px solid #000000;
margin: 20px 40px 0;
padding: 20px;
font-size: 15px;
font-weight: 1000;
`
