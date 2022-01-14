import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  font-family: Arial, sans-serif;
  border: 1px solid #ababab;
  border-spacing: 0;
  border-radius: 3px;

  th, td {
    padding: 10px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }

  tr:last-child td {
    border: none;
  }
  
  thead {
    column-span: none;
    background: #fbfbfb;
    th {
      text-transform: uppercase;
      border-bottom: 1px solid #ababab;
    }
  }
`
