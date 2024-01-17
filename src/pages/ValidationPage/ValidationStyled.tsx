import styled from "@emotion/styled";

const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background-color: #008000;
  font-size: 30px;
`;

const Box = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -150px;
  justify-content: center;
  text-align: center;
  background-color: white;
  > span {
    margin-top: 50px;
    text-align: left;
    padding-left: 10px;
  }
`;

const Amount = styled.div`
  margin-top: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  > button {
    background-color: yellowgreen;
    border-radius: 20px;
    max-width: 80px;
    font-weight: bold;
    font-size: large;
    width: 100%;
    border: none;
  }
`;

const ConfirmationButton = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 500px;
  height: 100px;
  background-color: white;

  > p {
    position: relative;
    width: 200px;
    height: 50px;
    top: -28px;
    left: 170px;
    background-color: #084408;
    color: white;
    text-align: center;
  }
`;

const Arrow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -20px;

  > button {
    display: inline-block;
    width: 40px;
    height: 36px;
    border: 0px solid black;
    background-color: #008000;
    border-radius: 50%;
    text-align: center;
    margin-right: 10px;
    > svg {
      fill: white;
      transform: rotate(180deg);
    }
  }
`;

export { Container, Box, ConfirmationButton, Amount, Arrow };
