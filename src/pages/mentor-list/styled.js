import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 40px;
  Table {
    font-weight: bold;
    color: #000;
  }
`;

export const Page = styled.div`
  text-align: justify;
  padding: 20px;

  h1 {
    font-size: 40px;
    color: rgb(149, 149, 149);
    font-weight: bold;
  }

  section {
    display: flex;
    justify-content: space-between;
  }
`;
export const PopUp = styled.div`
  justify-content: center;
  border: solid 1px;
  max-width: 500px 500px;
`;

export const Title = styled.div`
  margin-top: 5px;
  padding: 40px;
  border: solid 1px;
  border-radius: 25px;
  h1 {
    margin-top: 20px;
    background-color: rgb(149, 149, 149);
    font-size: 20px;
    color: #000000;
    font-weight: bold;
  }
`;
