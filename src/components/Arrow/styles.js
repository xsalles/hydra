import styled from "styled-components";

export const ArrowContainer = styled.div`
  width: 228px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: ${(props) => props.marginTop};
  right: ${(props) => props.right};
`;

export const LineTip = styled.img`
  width: ${(props) => props.primary ?   "100px" : "42px"};
  height: ${(props) => props.primary ?   "100px" : "33px"};
  left: 90px;
  top: 2.5px;
  position: ${(props) => props.position};
  margin-top: ${(props) => props.marginTop ?   "33.33px" : "0px"};;
`;
