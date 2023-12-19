import styled from "@emotion/styled";

const Container = styled.body`
  background-color: #008000;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const Inputs = styled.input`
  margin: 10px;
  width: 700px;
  height: 100px;
`;

const Button = styled.span`
  display: flex;
  justify-content: center;
  > button {
    width: 300px;
  }
`;

export { Container, Inputs, Password, Button };
