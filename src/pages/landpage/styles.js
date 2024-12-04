import styled from "styled-components";
import background from "../../assets/images/backgroundPage/background.svg";
import SmallBackground from "../../assets/images/backgroundPage/backgroundSmall.svg";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99vw;
  height: 5597px;
  background: url(${background}) no-repeat center ;
  background-size: cover 99vw 5597px;

  @media (max-width: 390px) {
    background: url(${SmallBackground});
    background-size: contain;
  }
`;
