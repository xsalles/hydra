import styled from "styled-components";

export const Container = styled.article`
  width: 347px;
  height: 109px;
  display: flex;
  border: 1px solid transparent;
  border-radius: 90px;
  align-items: center;
  background: radial-gradient(
    50% 2900.76% at 50% 53.89%,
    rgba(58, 52, 86, 0.95) 0%,
    #211e2e 100%
  );
  box-shadow: 0px 4px 4px 0px #c0b7e803;
  margin-top: 53px;
`;

export const ArrowButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  height: 30px;
  margin-left: 3px;
`;

export const ImageButton = styled.img`
  width: 30px;
  height: 30px;
  transform: ${(props) => (props.right ? "rotate(180deg)" : "none")};
`;
