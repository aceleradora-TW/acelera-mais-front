import style from 'styled-components'

export const Section = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-width: 600px;
  padding-left: 40px;
  padding-right: 40px;
  position: absolute;
  background-color: #e7e7e7;
  border-bottom: 2px #aea9bb solid;
  border-height: 0px;
`
export const Label = style.h4`
  color: #626262;
  font-size: 18px;
  text-align: left;
  font-weight: 700;
  margin-right: 20px;
`
export const Input = style.input`
  border-radius: 10%;
`
