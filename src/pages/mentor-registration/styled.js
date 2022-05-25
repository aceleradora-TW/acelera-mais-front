
import styled from 'styled-components'
import { Table } from '../../components/table/table'

export const Container = styled.div`
  text-align: justify;
  padding: 30px;
  
  display: flex;
  justify-content: space-between ;

  h1 {
    font-size: 40px;
    color: rgb(149, 149, 149);
    font-weight: bold;
  }

  & > .primary {
    margin-left: 10px;
  }
`
export const StyledButton = styled.div`
  align-items: flex-end;
  justify-content: space-around;
`
export const MentorRegistrationTable = styled(Table)`
  a {
    font-weight: bold;
    color: #000;
  }
  a:visited {
    color: #ababab;
  }`
// .page-container section {
// display: flex;
// justify-content: space-between;
// }
// .page-container button{
//    border-radius: 8px;
//  background-color:#4646e0;
// color: #ffffffff;
// font-weight: bold;
// }
