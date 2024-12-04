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
  width: ${(props) => props.primary ?   "100px" : "42px"};
  height: ${(props) => props.primary ?   "100px" : "33px"};
  right: 0px;
  position: ${(props) => props.position};
  margin-top: ${(props) => props.marginTop ?   "33.33px" : "0px"};;
`;
