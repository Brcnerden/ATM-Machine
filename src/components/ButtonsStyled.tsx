import styled from "@emotion/styled";

const Button = styled.button`
  width: 400px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-right: 40px;
  border-radius: 20px;
  font-size: 15px;
  background-color: #0a5b0a;
  color: white;
  margin: 20px;
  justify-content: space-between;
  padding-left: 15px;
  border: none;
`;

const Icon = styled.div`
  width: 40px;
  height: 36px;
  border: 0px solid black;
  background-color: white;
  border-radius: 50%;
  > svg {
    fill: #008000;
    margin: 10px;
  }
`;

export { Button, Icon };
