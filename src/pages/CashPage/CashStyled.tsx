import styled from "@emotion/styled";

const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background-color: #5db15d;
`;

const Text = styled.div`
  color: #008000;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export { Container, Buttons, Text };
