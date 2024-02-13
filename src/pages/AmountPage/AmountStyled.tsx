import styled from "@emotion/styled";

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #008000;
`;

const Box = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  position: absolute;
  bottom: 20px;
  right: 0;
  margin-right: 20px;
  font-size: 25px;
  @media only screen and (max-width: 600px) {
    width: 310px;
    height: 250px;
    font-size: 10px;
    bottom: 15px;
  }
`;
const Text = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px;
  > button {
    width: 80px;
    height: 40px;
    margin-bottom: 5px;
    border: none;
  }
  > p {
    padding-right: 40px;
    padding-bottom: 10px;
  }
`;
const ColorRed = styled.hr`
  border-top: 5px solid red;
`;

const ColorYellow = styled.hr`
  border-top: 5px solid yellow;
`;
const ColorGreen = styled.hr`
  border-top: 5px solid green;
`;

const AmountContainer = styled.div`
  background-color: #40a0b5;
  > input {
    height: 50px;
    margin: 26px 10px 26px;
  }
`;

const Input = styled.input`
  width: 70px;
`;

export {
  Container,
  Box,
  Text,
  ColorYellow,
  ColorGreen,
  ColorRed,
  AmountContainer,
  Input,
};
