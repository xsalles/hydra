import styled from "styled-components";
import background from "../../assets/images/backgroundPage/background.svg";
import backgroundSmall from "../../assets/images/backgroundPage/backgroundSmall.svg";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;

  @media (max-width: 390px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundSmall});
    background-size: cover;
  }
`;
