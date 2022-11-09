import styled from 'styled-components'

export const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: flex-start;
  font-weight: bold;

  select {
    padding: 10px 5px;
    width: 100%;
    border: 1px solid #ababab;
  }
  
  & > label {
    margin-bottom: 8px;
  }

`
