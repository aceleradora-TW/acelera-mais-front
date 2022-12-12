import style from 'styled-components'

export const Container = style.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = style.div`
  min-width: 500px;
  border: 1px solid #aea9bd;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
`

export const Header = style.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-left: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #e7e7e7;
  border-bottom: 1px #aea9bb solid;
`
export const Reminder = style.p`
  margin: 30px 45px 0;
  color: #000;
  font-size: 12px;
`
export const ModalBody = style.div`
  border: 1px solid #aea9bd;
  margin: 10px 40px 0;
  padding: 20px;
  font-size: 15px;
  text-align: left;
  font-weight: 500;
`
export const Title = style.h4`
  color: #626262;
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  margin-right: 20px;
`

export const Footer = style.div`
  padding: 20px;
`
