import styled from "@emotion/styled";

const Container = styled.header`
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
  width: 430px;
  height: 120px;
  @media only screen and (max-width: 600px) {
    max-width: 300px;
    width: 100%;
  }
`;

const Button = styled.span`
  > button {
    width: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export { Container, Inputs, Password, Button };
