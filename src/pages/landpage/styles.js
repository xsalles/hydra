import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;

  @media (max-width: 390px) {
    width: 100vw;
    height: 100vh;
  }
`;
