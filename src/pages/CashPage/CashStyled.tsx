import styled from "@emotion/styled";

const Container = styled.header`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 900px) {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 10px;
  }
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
  @media only screen and (max-width: 900px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
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

  @media only screen and (max-width: 900px) {
    margin-top: 0;
  }
`;

const RightList = styled.div`
  @media only screen and (max-width: 900px) {
  }
`;

export { Container, UserText, LeftList, RightList };
