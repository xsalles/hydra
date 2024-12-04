import styled from "styled-components";

export const Container = styled.div`
  width: 1254px;
  height: 426px;
  display: flex;
  flex-direction: row;
  margin-top: 112px;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    width: 347px;
    height: 672px;
  }
`;

export const CTAContainer = styled.section`
  display: flex;
  width: 1254px;
  flex-direction: row;
  height: 426px;
  position: relative;
  gap: 314px;

  @media (max-width: 390px) {
    order: 2;
    margin-top: 57.56px;
    width: 100vw;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    order: 3;
    align-items: center;
  }
`

export const Title = styled.p`
  display: inline-block;
  font-size: 40px;
  color: #ffffff;
  width: ${(props) => props.width};
  height: 56px;
  font-weight: bold;
  text-align: left;
  margin-top: ${(props) => props.marginTop};

  @media (max-width: 390px) {
    font-size: 24px;
    width: ${(props) => props.widthSmallDevice};
    height: ${(props) => props.heightSmallDevice};
  }
`;

export const ColoredText = styled.span`
  background: linear-gradient(to right, #c0b7e8, #8176af);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 46px;

  @media (max-width: 390px) {
    font-size: ${(props) => props.fontSizeColoredTextSmallDevice};
    width: ${(props) => props.widthSmallDevice};
    height: 39px;
  }
`;

export const Description = styled.p`
  width: 450px;
  height: 72px;
  margin-top: 36px;
  font-size: 16px;
  color: #ffffff;

  @media (max-width: 390px) {
    display: none;
  }
`;

export const ArrowWithButton = styled.div`
  width: 325px;
  height: 100px;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-items: center;
  gap: 20px;

  @media (max-width: 390px) {
    align-items: center;
    margin-top: 36px;
    width: 292px;
    height: 52px;
  }
`;

export const ContainerImage = styled.img`
  width: 490px;
  height: 426px;
  border: 1px solid transparent;
  border-radius: 100px 100px 100px 240px;

  @media (max-width: 390px) {
    order: 1;
    width: 318.67px;
    height: 277.04px;
    border-radius: 100px 100px 100px 240px;
  }
`;
