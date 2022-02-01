import style from 'styled-components'

export const Container = style.div`
  position: fixed;
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
  margin: 20px 40px;
`
export const Reminder = style.p`
  margin: 0 45px;
  color: #000;
  font-size: 12px;
`
export const ModalBody = style.div`
  border: 1px solid #aea9bd;
  margin: 10px 40px;
  padding: 20px;
  font-size: 15px;
  font-weight: 500;
`
export const Title = style.h4`
  color: #aea9bd;
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  margin-right: 20px;
`

export const Footer = style.div`
  padding: 20px;
`
