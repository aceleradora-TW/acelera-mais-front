import styled from 'styled-components'

export const ButtonComponent = styled.button`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 300px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
    cursor: no-drop;
  }

  &.delete {
    background-color: #fff;
    color: #ff3d00;
  }

  &.close {
    color: #ac1616;
    border: 1px solid #ac1616;
  }

  &.action {
    background-color: white;
    color: darkgreen;
    border-color: rgba(74, 134, 96, 0.349);
  }

  &.default {
    background-color: white;
  }
  
  a.default {
    display: inline-block;
  }

  &.info {
    background-color: white;
    color: #003cff;
  }

  &.primary {
    background-color: rgb(68, 68, 255);
    color: white;
    border: 1px solid white;
  }
  
  &.primary:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  &.sucess {
    background-color: darkgreen;
    color: white;
  }
`
