import { styled } from "styled-components";

export const Container = styled.article`
  width: 1272px;
  height: 102px;
  display: flex;
  margin-top: 94px;
  gap: 322px;
`;

export const TextContainer = styled.section`
  width: ${(props) => props.width};
  display: flex;
  height: ${(props) => props.height};
  flex-direction: column;
  position: relative;
  gap: ${(props) => props.gap};
`;

export const TextIntroduction = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: #fff;
`;
