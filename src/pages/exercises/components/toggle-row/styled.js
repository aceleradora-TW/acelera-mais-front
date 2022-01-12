import styled from 'styled-components'

const ToggleStyled = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

export const Container = styled(ToggleStyled)`
  padding: 9px 13px;
  background-color: rgb(70, 136, 211);
  color: white;
  border-radius: 3px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid transparent;

button{
&.toggle-off:disabled{
  opacity: 0.4 ;
  cursor: no-drop;
}
&.toggle-on{
  -moz-transform: scale(1, -1);
  -webkit-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}}

td{
&.toggle-on{
  background-color: #f8f8f8;
  padding: 20px;
  border: 2px solid rgb(160, 173, 185);
}

&.toggle-off{
  display: none;
}}`
