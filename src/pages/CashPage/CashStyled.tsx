import styled from "@emotion/styled";

const Container = styled.body`
  width: 100vw;
  height: 100vh;
  background-color: #008000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserText = styled.div`
  max-width: 400px;
  width: 100%;
  height: 70px;
  border: 1px solid black;
  margin: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin-bottom: 20px;
  > p {
    display: flex;
    justify-content: space-around;
    padding-bottom: 5px;
  }
  > p {
    padding-top: 10px;
  }
  > span {
    padding-top: 10px;
  }
`;

const LeftList = styled.div`
  margin-top: 18px;
`;

export { Container, UserText, LeftList };
