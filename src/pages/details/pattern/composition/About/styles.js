import styled from "styled-components";

export const Container = styled.article`
  width: 1272px;
  height: 557px;
  display: flex;
  gap: 118px;
  justify-content: center;
`;

export const ContainerImage = styled.img`
  width: 524px;
  height: 557px;
  border: 1px solid transparent;
  border-radius: 250px 100px 250px 100px;
`;

export const AboutText = styled.section`
  width: 631px;
  height: 439px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0px 68px 0px;
`;

export const TextIntroduction = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: #fff;
  margin-top: ${(props) => props.marginTop};
  height: ${(props) => props.height};
`;
