import styled from "styled-components";

export const Container = styled.div`
  width: 1272px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  @media (max-width: 390px){
    width: 390px;
    height: 844px;
    margin-top: 0px;
  }
`