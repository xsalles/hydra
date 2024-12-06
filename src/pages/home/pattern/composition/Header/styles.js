import styled from "styled-components";

export const Container = styled.header`
  width: 1272px;
  height: 102.93px;
  display: flex;
  align-items: center;

  @media (max-width: 390px) {
    display: flex;
    width: 350px;
    height: 59.88px;
    margin: 25.66px 20px 0px 20px;    
  }
`;

export const Icon = styled.img`
  width: 102px;
  height: 103px;

  @media (max-width: 390px) {
    width: 69px;
    height: 59.88px;
  }
`;

export const ContainerLetters = styled.section`
  display: flex;
  gap: 3px;
  width: 76px;
  height: 46px;
  margin-left: 15px;

  @media (max-width: 390px) {
    width: 46px;
    height: 28px;
  }
`;

export const Letter = styled.img`
  width: ${(props) =>
    props.smallLetter ? "11.54px" : props.bigLetter ? "13.86px" : "11.57px"};
  height: 46px;

  @media (max-width: 390px) {
    height: 28px;
    width: ${(props) =>
      props.smallLetter ? "6.98px" : props.bigLetter ? "8.39px" : "7px"};
  }
`;

export const ContainerNav = styled.nav`
  width: 387px;
  height: 15px;
  gap: 42px;
  display: flex;
  margin-left: 205px;

  @media (max-width: 390px) {
    display: none;
  }
`;

export const Item = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`;
export const ContainerButtons = styled.section`
  width: 347px;
  height: 48px;
  display: flex;
  gap: 38px;
  margin-left: 140px;

  @media (max-width: 390px) {
    display: none;
  }
`;
