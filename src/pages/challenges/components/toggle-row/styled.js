import styled from 'styled-components'

export const Tr = styled.tr`
  button.toggle-off:disabled{
    opacity: 0.4 ;
    cursor: no-drop;
  }

  button.toggle-on{
    -moz-transform: scale(1, -1);
    -webkit-transform: scale(1, -1);
    -o-transform: scale(1, -1);
    -ms-transform: scale(1, -1);
    transform: scale(1, -1);
  }

  .options button{
    margin-left: 20px;
  }

  .primary {
    padding: 5px 10px;
  }
`
