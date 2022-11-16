import style from 'styled-components'
import AceleraLogo from './aceleraLogo.png'

export const LogoDiv = style.div`
  display: flex;
  width: 34%;
  margin-right: 48%;
  height: 100%;
`
export const LogoButton = style.button`
  display: flex;
  height: 75%;
  width: 25%;
  background-color: white;
  &hover{
  cursor: pointer;
  }
  `

export const Logo = style.div`
  height: 100 %;
  width: 100 %;
  background-image: url(${AceleraLogo});
  background-color: white;
  `
