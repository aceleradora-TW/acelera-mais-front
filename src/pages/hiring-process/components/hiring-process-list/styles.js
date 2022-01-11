import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
margin-top: 20px;

`

export const Table = styled.table`
width: 100%;
border: 1px solid #ababab;

a {
  color: #000;
}

a:visited {
  color: #ababab;
}

`

export const Thead = styled.thead`
  border-bottom: 1px solid #ababab;

th {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #ababab;
  padding: 10px;
}

`
export const Tbody = styled.tbody`

td {
  text-align: center;
  padding: 10px; 
  vertical-align: middle;
}

td:first-child {
  text-align: center;
  font-weight: bold;
}

`
