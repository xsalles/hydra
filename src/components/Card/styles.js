import styled from "styled-components";

export const Container = styled.div`
  width: 310px;
  height: 511px;
  border: 1px solid transparent;
  border-radius: 40px;
  background: radial-gradient(#433d60, #211e2e);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.img`
  width: 219px;
  height: 219px;
  border: 10px solid rgba(0, 0, 0, 0.32);
  border-radius: 50%;
  margin-top: 32px;
`;

export const TextContainer = styled.h1`
  height: 29px;
  width: ${(props) =>
    props.primary
      ? "160px"
      : props.secondary
      ? "153px"
      : props.third
      ? "140px"
      : "132px"};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 34.64px;
  color: #ffff;
`;

export const Line = styled.div`
  border: 1px solid #c0b7e8;
  width: 154px;
  margin-top: 17.5px;
`;

export const Description = styled.p`
  width: ${(props) => (props.primary ? "249px" : "250px")};
  height: 27px;
  font-size: 12px;
  text-align: left;
  margin-top: 21.5px;
`;
