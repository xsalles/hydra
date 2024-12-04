import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 33px;
  height: 26px;
  margin-left: 191px;
`;

export const Line = styled.div`
  display: flex;
  width: ${(props) => (props.primary ? "33px" : "24px")};
  height: 3.71px;
  border: 0px solid transparent;
  border-radius: 40px;
  background: linear-gradient(to right, #8176af, #c0b7e8);
  margin-left: ${(props) => (props.primary ? "0px" : "auto")};
`;
