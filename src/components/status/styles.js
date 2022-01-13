import styled from 'styled-components'

const StatusSpan = ({ className, children }) => (
  <span className={className}>
    {children}
  </span>
)

export const StyledSpan = styled(StatusSpan)`
  display: inline-block;
  padding: 10px 15px;
  text-align: center;
  border-radius: 5px;
  
  &.status-opened {
    background-color: #dcfdd4;
    color: #4fac16;
  }

  &.status-closed {
    background-color: #fdd4d4;
    color: #ac1616;
  }
  
  &.status-preparing {
    background-color: #fafdd4;
    color: #ac9d16;
  }
`
