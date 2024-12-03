import styled from "styled-components";

export const Container = styled.div`
  width: 1254px;
  height: 426px;
  margin-top: 112px;
  display: flex;
  gap: 314px;
`;

export const CTAContainer = styled.section`
  display: flex;
  width: 456px;
  flex-direction: column;
  height: 364px;
  position: relative;
`;

export const TextContainer = styled.div``;

export const Title = styled.p`
  font-size: 40px;
  color: #ffffff;
  width: ${(props) => props.width};
  height: 56px;
  font-weight: bold;
  text-align: left;
  margin-top: ${(props) => props.marginTop};
`;

export const ColoredText = styled.span`
  background: linear-gradient(to right, #c0b7e8, #8176af);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 46px;
`;

export const Description = styled.p`
  width: 450px;
  height: 72px;
  margin-top: 36px;
  font-size: 16px;
  color: #ffffff;
`;

export const ArrowWithButton = styled.div`
  width: 325px;
  height: 100px;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const ContainerImage = styled.img`
  width: 490px;
  height: 426px;
  border: 1px solid transparent;
  border-radius: 100px 100px 100px 240px;
`;
