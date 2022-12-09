import style from 'styled-components'

export const LogoContainer = style.div`
display:flex;
left:0;
top:0;
margin-left:15px;
.image {
    height:55px;
    margin-top:3px;
    border:1px solid;
    &:hover {
      cursor: pointer;
    }
  }
`
