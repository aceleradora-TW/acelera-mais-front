import style from 'styled-components'

export const LogoContainer = style.div`
display: flex;
margin-left: 25px;
.image {
    height:75px;
    border:1px solid;
    &:hover {
      cursor: pointer;
    }
  }
`
