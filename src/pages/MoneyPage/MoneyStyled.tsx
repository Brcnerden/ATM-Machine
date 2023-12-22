import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5db15d;
`;

const User = styled.div`
  display: flex;
  justify-content: end;
`;
const Text = styled.div`
  margin: 20px;
`;

const UserBox = styled.div`
  background-color: #043b04;
  border: 1px solid white;
  color: white;
  max-width: 400px;
  width: 100%;
  margin: 20px;
`;

const Table = styled.table`
  background-color: #043b04;
  border-collapse: collapse;
  color: white;
  width: 95%;
  margin: 20px;

  > td,
  th,
  tr {
    height: 40px;

    border: 1px solid #dddddd;
    border-radius: 2px;
  }
`;

const Total = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none !important;
`;

export { Table, Container, UserBox, User, Text, Total };
