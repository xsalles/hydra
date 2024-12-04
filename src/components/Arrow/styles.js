import styled from "styled-components";

export const ArrowContainer = styled.div`
  width: 228px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const LineStraight = styled.img`
  width: 158px;
  height: 4px;
  margin-top: 16.99px;
  position: absolute;
`;

export const LineTip = styled.img`
  width: 46px;
  height: 38px;
  right: 0px;
  position: ${(props) => props.position};
  margin-right: ${(props) => props.marginRight};
`;
