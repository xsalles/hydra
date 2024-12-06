import styled from "styled-components";

export const Container = styled.article`
  width: 1272px;
  height: 167px;
  display: flex;
  border-radius: 90px;
  justify-content: center;
  background: radial-gradient(
    50% 2900.76% at 50% 53.89%,
    rgba(58, 52, 86, 0.95) 0%,
    #211e2e 100%
  );
  box-shadow: 0px 4px 4px 0px #c0b7e803;
  margin-top: 103px;
  align-items: center;

  @media (max-width: 390px){
    width: 347px;
    height: 109px;
    display: flex;
    border: none;
    border-radius: none;
    align-items: center;
    background: none;
    box-shadow: 0px 4px 4px 0px #c0b7e803;
    margin-top: 0;
  }
`;

export const InformationContainer = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  gap: ${(props) => props.gap};
`;

export const Line = styled.hr`
  width: 1px;
  height: 116.5px;
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  border: 1px solid #c0b7e854;
`;

export const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const TextContainer = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.26px;
  text-align: left;
  width: ${(props) => props.width};
  height: 29px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
  width: ${(props) => props.width};
  height: 17px;
`;
