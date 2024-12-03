import styled from "styled-components";

export const Container = styled.div`
  width: 1272px;
  height: 911px;
  display: flex;
  flex-direction: column;
  margin-top: 82px;

  @media (max-width: 390px){
    width: 390px;
    height: 844px;
    margin-top: 0px;
  }
`